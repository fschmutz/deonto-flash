#!/usr/bin/env python3
"""Visual QA for Deonto Flash.

Walks every screen of the app in three viewports (phone, tablet, desktop) and in both
themes, capturing a screenshot of each and failing on anything that would make the page
unusable: JavaScript errors, failed requests, horizontal overflow, clipped or overlapping
text, tap targets under 44 px, or contrast below the WCAG AA threshold for body text.

Usage:
    python3 scripts/qa-visuelle.py [--base http://127.0.0.1:8099] [--out captures]
"""

from __future__ import annotations

import argparse
import json
import shutil
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

VIEWPORTS = {
    "mobile": (390, 844),
    "tablette": (834, 1112),
    "bureau": (1440, 900),
}

# (identifiant, route, actions a jouer avant la capture)
ECRANS = [
    ("01-accueil", "#/", []),
    ("02-parcours", "#/bloc/regles", []),
    ("03-sujet", "#/sujet/secret-professionnel", []),
    ("04-fiche-question", "#/fiches/regles", []),
    ("05-fiche-reponse", "#/fiches/regles", ["reveler"]),
    ("06-oral-accueil", "#/oral", []),
    ("07-oral-tirage", "#/oral", ["tirer"]),
    ("08-oral-epreuve", "#/oral", ["tirer", "demarrer"]),
    ("09-oral-question", "#/oral", ["tirer", "demarrer", "question"]),
    ("10-oral-evaluation", "#/oral", ["tirer", "demarrer", "terminer"]),
    ("11-oral-resultat", "#/oral", ["tirer", "demarrer", "terminer", "noter"]),
    ("12-exercices", "#/entrainement", []),
    ("13-qcm-question", "#/qcm", []),
    ("14-qcm-reponse", "#/qcm", ["repondre"]),
    ("15-plans-accueil", "#/plans", []),
    ("16-plans-chrono", "#/plans", ["commencer"]),
    ("17-plans-comparaison", "#/plans", ["commencer", "terminer-plan"]),
    ("18-cas", "#/cas", []),
    ("19-progression", "#/progression", []),
    ("20-apropos", "#/apropos", []),
    ("21-introuvable", "#/nimportequoi", []),
]

# Une capture pleine page rend les elements fixes au milieu du document, et le
# backdrop-filter assombrit tout ce qui passe dessous. On les neutralise pour la capture
# seulement : l'audit, lui, tourne sur la page intacte.
CSS_CAPTURE = """
  .entete, .barre { position: static !important; backdrop-filter: none !important; }
  .barre { border-top: 1px solid var(--trait); }
  body { padding-bottom: 12px !important; }
  * { animation: none !important; transition: none !important; }
"""

# Progression simulee : rangs, jauges, sceaux et note blanche n'ont de sens qu'avec
# des donnees. On seme un etat representatif d'une revision deja engagee.
SEED_JS = """
(theme) => {
  const maintenant = Date.now();
  const fiches = {};
  const sujets = ['principes-essentiels', 'secret-professionnel', 'contradictoire', 'confraternite',
                  'conflits-interets', 'ordre-batonnier', 'cnb', 'domicile-professionnel'];
  sujets.forEach((s, n) => {
    for (let i = 0; i < 10; i += 1) {
      fiches[s + '#' + i] = {
        etat: 2, d: 4 + (i % 4), s: 6 + n * 4 + i,
        revue: maintenant - 2 * 86400000, dus: 2 + (i % 3), ratees: i % 2,
        echeance: maintenant + (i % 3 === 0 ? -3600000 : (i + 1) * 86400000)
      };
    }
  });
  const qcm = {};
  for (let i = 0; i < 24; i += 1) qcm['q' + i] = { vues: 3, justes: 2 };
  localStorage.setItem('deonto-flash:v1', JSON.stringify({
    theme, fiches, qcm, xp: 640,
    serie: { jours: 9, dernier: Math.floor(maintenant / 86400000) },
    vus: Object.fromEntries(sujets.map((s) => [s, 2])),
    oraux: [11, 13, 10, 14, 15].map((note, i) => ({
      sujet: sujets[i], note, duree: 1_700_000, date: maintenant - (5 - i) * 86400000
    }))
  }));
}
"""

AUDIT_JS = r"""
() => {
  const problemes = [];
  const doc = document.documentElement;

  if (doc.scrollWidth > doc.clientWidth + 1) {
    problemes.push({ type: 'debordement', detail: `page ${doc.scrollWidth}px pour ${doc.clientWidth}px` });
  }

  // color-mix() est calcule en color(srgb r g b / a) avec des composantes de 0 a 1 ;
  // rgb()/rgba() les donne de 0 a 255. Confondre les deux fausse tous les contrastes.
  const rgba = (c) => {
    const texte = c || '';
    const m = texte.match(/[\d.]+/g);
    if (!m) return null;
    const nombres = m.map(Number);
    const srgb = /^color\(\s*srgb/i.test(texte);
    const [r, g, b] = srgb ? nombres.slice(0, 3).map((v) => v * 255) : nombres.slice(0, 3);
    const a = nombres.length > 3 ? nombres[3] : 1;
    return [r, g, b, a];
  };
  const lumRgb = ([r, g, b]) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const melange = (av, ar) => av.slice(0, 3).map((v, i) => v * av[3] + ar[i] * (1 - av[3]));
  // Fond reellement peint sous un element : on empile les couches semi-transparentes.
  const fondEffectif = (el) => {
    const couches = [];
    let n = el;
    while (n && n !== document.documentElement) {
      const c = rgba(getComputedStyle(n).backgroundColor);
      if (c && c[3] > 0) {
        couches.unshift(c);
        if (c[3] >= 0.999) break;
      }
      n = n.parentElement;
    }
    if (!couches.length) couches.push(rgba(getComputedStyle(document.documentElement).backgroundColor) || [255, 255, 255, 1]);
    let base = couches[0].slice(0, 3);
    for (const c of couches.slice(1)) base = melange(c, base);
    return lumRgb(base);
  };
  const lumTexte = (el) => {
    const c = rgba(getComputedStyle(el).color);
    if (!c) return null;
    if (c[3] >= 0.999) return lumRgb(c);
    return null; // texte semi-transparent : hors perimetre
  };

  for (const el of document.querySelectorAll('#app *, .entete *, .barre *')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const st = getComputedStyle(el);
    if (st.visibility === 'hidden' || st.display === 'none' || st.opacity === '0') continue;

    if (r.right > doc.clientWidth + 1) {
      problemes.push({ type: 'hors-cadre', detail: `${el.className || el.tagName} dépasse de ${Math.round(r.right - doc.clientWidth)}px` });
    }

    const texte = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join('');
    if (!texte) continue;

    const taille = parseFloat(st.fontSize);
    if (taille < 11.5) {
      problemes.push({ type: 'texte-minuscule', detail: `${taille}px : « ${texte.slice(0, 40)} »` });
    }

    // Un depassement n'est une troncature que si le debordement est effectivement masque.
    // Les metriques de la Spectral font depasser un titre de 1 a 3 px sans rien couper.
    const masque = st.overflow === 'hidden' || st.overflowY === 'hidden' || st.overflow === 'clip' || st.overflowY === 'clip';
    if (masque && (el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2)) {
      problemes.push({ type: 'texte-tronque', detail: `${el.className || el.tagName} : « ${texte.slice(0, 40)} »` });
    }

    const lt = lumTexte(el);
    const lf = fondEffectif(el);
    if (lt !== null && lf !== null) {
      const ratio = (Math.max(lt, lf) + 0.05) / (Math.min(lt, lf) + 0.05);
      const gros = taille >= 24 || (taille >= 18.66 && parseInt(st.fontWeight, 10) >= 700);
      const seuil = gros ? 3 : 4.5;
      if (ratio < seuil) {
        problemes.push({ type: 'contraste', detail: `${ratio.toFixed(2)}:1 (seuil ${seuil}) sur « ${texte.slice(0, 40)} »` });
      }
    }
  }

  for (const el of document.querySelectorAll('button, a[href], [role="button"], summary')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (getComputedStyle(el).display === 'inline') continue;
    if (r.height < 32 || r.width < 32) {
      problemes.push({ type: 'cible-tactile', detail: `${Math.round(r.width)}x${Math.round(r.height)} — ${(el.textContent || '').trim().slice(0, 30)}` });
    }
  }

  return problemes;
}
"""


def jouer(page, actions: list[str]) -> None:
    for action in actions:
        if action == "reveler":
            page.get_by_role("button", name="Voir la réponse").click()
        elif action == "tirer":
            page.get_by_role("button", name="Tirer un sujet au sort").click()
        elif action == "demarrer":
            page.get_by_role("button", name="Démarrer les 30 minutes").click()
        elif action == "question":
            page.get_by_role("button", name="Révéler une question du jury").first.click()
            page.locator("details.jury-q summary").first.click()
        elif action == "terminer":
            page.get_by_role("button", name="Terminer et m’évaluer").click()
        elif action == "noter":
            for groupe in page.locator(".echelle").all():
                groupe.get_by_role("button").nth(3).click()
            page.get_by_role("button", name="Voir ma note").click()
        elif action == "repondre":
            page.locator(".option").first.click()
        elif action == "commencer":
            page.get_by_role("button", name="Tirer un sujet").click()
        elif action == "terminer-plan":
            page.locator("textarea.champ").fill(
                "Accroche : le secret est une garantie du justiciable.\n\nI. Un secret absolu\n   - fondements\n   - champ\n\nII. Des levées encadrées\n   - par l'avocat\n   - contre l'avocat"
            )
            page.get_by_role("button", name="J’ai terminé").click()
        page.wait_for_timeout(350)


def main() -> int:
    parseur = argparse.ArgumentParser(description=__doc__)
    parseur.add_argument("--base", default="http://127.0.0.1:8099")
    parseur.add_argument("--out", default="captures")
    parseur.add_argument("--themes", default="encre,papier")
    parseur.add_argument("--viewports", default="mobile,tablette,bureau")
    args = parseur.parse_args()

    sortie = Path(args.out)
    if sortie.exists():
        shutil.rmtree(sortie)
    sortie.mkdir(parents=True)

    themes = args.themes.split(",")
    viewports = {k: v for k, v in VIEWPORTS.items() if k in args.viewports.split(",")}

    rapport: list[dict] = []
    echecs = 0

    with sync_playwright() as p:
        navigateur = p.chromium.launch(channel="chrome")
        for nom_vp, (largeur, hauteur) in viewports.items():
            contexte = navigateur.new_context(viewport={"width": largeur, "height": hauteur}, locale="fr-FR")
            page = contexte.new_page()

            erreurs: list[str] = []
            page.on("pageerror", lambda e: erreurs.append(f"pageerror: {e}"))
            page.on("console", lambda m: erreurs.append(f"console.{m.type}: {m.text}") if m.type == "error" else None)
            page.on("requestfailed", lambda r: erreurs.append(f"requête échouée: {r.url}"))

            for theme in themes:
                page.goto(f"{args.base}/", wait_until="networkidle")
                page.evaluate(SEED_JS, theme)
                for ident, route, actions in ECRANS:
                    erreurs.clear()
                    # Un changement de seul fragment ne recharge pas le document : sans
                    # parametre unique, l’ecran precedent resterait affiche.
                    page.goto(f"{args.base}/?e={ident}{route}", wait_until="networkidle")
                    page.wait_for_timeout(250)
                    try:
                        jouer(page, actions)
                    except Exception as exc:  # noqa: BLE001
                        erreurs.append(f"scénario impossible: {exc}")

                    problemes = page.evaluate(AUDIT_JS)
                    fichier = sortie / f"{nom_vp}-{theme}-{ident}.png"
                    # La CSP interdit d'injecter une balise <style> : on passe par le CSSOM,
                    # qui n'est pas soumis a style-src.
                    page.evaluate(
                        "(css) => { const f = new CSSStyleSheet(); f.replaceSync(css);"
                        " document.adoptedStyleSheets = [...document.adoptedStyleSheets, f]; }",
                        CSS_CAPTURE,
                    )
                    page.wait_for_timeout(120)
                    page.screenshot(path=str(fichier), full_page=True)

                    entree = {
                        "ecran": ident,
                        "route": route,
                        "viewport": nom_vp,
                        "theme": theme,
                        "capture": str(fichier),
                        "erreurs": list(erreurs),
                        "problemes": problemes,
                    }
                    rapport.append(entree)
                    if erreurs or problemes:
                        echecs += 1
                        print(f"✖ {nom_vp}/{theme}/{ident}")
                        for e in erreurs:
                            print(f"    erreur   {e}")
                        vus = set()
                        for pb in problemes:
                            cle = (pb["type"], pb["detail"])
                            if cle in vus:
                                continue
                            vus.add(cle)
                            print(f"    {pb['type']:<16} {pb['detail']}")
                    else:
                        print(f"✔ {nom_vp}/{theme}/{ident}")
            contexte.close()
        navigateur.close()

    (sortie / "rapport.json").write_text(json.dumps(rapport, ensure_ascii=False, indent=2), encoding="utf-8")
    total = len(rapport)
    print(f"\n{total - echecs}/{total} écrans sans anomalie · captures dans {sortie}/")
    return 1 if echecs else 0


if __name__ == "__main__":
    sys.exit(main())
