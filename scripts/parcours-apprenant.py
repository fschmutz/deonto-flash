#!/usr/bin/env python3
"""Learner walkthrough of Deonto Flash.

Where qa-visuelle.py looks for defects, this script plays the app the way a candidate
does: a full MCQ series answered wrong then right, a card session graded on all four
buttons, an oral from the draw to the mark, an express plan written and compared, a
practical case revealed. It captures every teaching moment and dumps the text that is
actually on screen, so the content can be read and judged rather than merely measured.

Usage:
    python3 scripts/parcours-apprenant.py [--base http://127.0.0.1:8099] [--out parcours]
"""

from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path

from playwright.sync_api import sync_playwright

LARGEUR, HAUTEUR = 1280, 900

CSS_CAPTURE = """
  .entete, .barre { position: static !important; backdrop-filter: none !important; }
  body { padding-bottom: 12px !important; }
  * { animation: none !important; transition: none !important; }
"""


def style(page) -> None:
    """La CSP interdit add_style_tag ; le CSSOM, lui, passe."""
    page.evaluate(
        """(css) => {
            const f = new CSSStyleSheet();
            f.replaceSync(css);
            document.adoptedStyleSheets = [...document.adoptedStyleSheets, f];
        }""",
        CSS_CAPTURE,
    )


def capturer(page, sortie: Path, nom: str, journal: list, pleine=True) -> None:
    style(page)
    page.screenshot(path=str(sortie / f"{nom}.png"), full_page=pleine)
    texte = page.evaluate("() => document.querySelector('#app').innerText")
    journal.append({"ecran": nom, "texte": texte})
    print(f"  · {nom}")


def aller(page, base: str, route: str, n: int) -> None:
    page.goto(f"{base}/?p={n}{route}", wait_until="networkidle")
    page.wait_for_timeout(300)


def parcours_qcm(page, base, sortie, journal) -> None:
    """La bonne option n'est connue qu'apres coup : elle porte alors la classe `juste`.
    On repond donc a l'aveugle et on capture le premier echec et la premiere reussite."""
    print("QCM : une série complète, un échec et une réussite capturés")
    aller(page, base, "#/qcm", 100)
    capturer(page, sortie, "qcm-01-question", journal)

    rate = juste = False
    for tour in range(12):
        options = page.locator(".option")
        if options.count() == 0:
            break
        options.nth(tour % options.count()).click()
        page.wait_for_timeout(350)
        verdict = page.locator(".verdict").inner_text().strip()
        if verdict.startswith("Inexact") and not rate:
            capturer(page, sortie, "qcm-02-mauvaise-reponse", journal)
            rate = True
        elif verdict.startswith("Exact") and not juste:
            capturer(page, sortie, "qcm-03-bonne-reponse", journal)
            juste = True
        suivant = page.get_by_role("button", name="Question suivante")
        if suivant.count() == 0:
            page.get_by_role("button", name="Voir le résultat").click()
            page.wait_for_timeout(400)
            break
        suivant.click()
        page.wait_for_timeout(300)
    capturer(page, sortie, "qcm-04-resultat", journal)


def parcours_fiches(page, base, sortie, journal) -> None:
    print("Fiches : révélation puis les quatre notes")
    aller(page, base, "#/fiches/regles", 200)
    capturer(page, sortie, "fiches-01-question", journal)
    page.get_by_role("button", name="Voir la réponse").click()
    page.wait_for_timeout(300)
    capturer(page, sortie, "fiches-02-reponse", journal)
    for i, nom in enumerate(["Encore", "Difficile", "Bien", "Facile"]):
        bouton = page.locator(".notes button").nth(i)
        if bouton.count() == 0:
            break
        bouton.click()
        page.wait_for_timeout(250)
        if page.get_by_role("button", name="Voir la réponse").count():
            page.get_by_role("button", name="Voir la réponse").click()
            page.wait_for_timeout(200)
    capturer(page, sortie, "fiches-03-apres-notes", journal)


def parcours_oral(page, base, sortie, journal) -> None:
    print("Oral : tirage, épreuve, questions du jury, grille, note")
    aller(page, base, "#/oral", 300)
    # 100 points au compteur : l'oral en rapporte assez pour franchir le rang a 150.
    page.evaluate("""() => {
        const c = JSON.parse(localStorage.getItem('deonto-flash:v1') || '{}');
        c.xp = 100;
        localStorage.setItem('deonto-flash:v1', JSON.stringify(c));
    }""")
    page.reload(wait_until="networkidle")
    page.wait_for_timeout(300)
    capturer(page, sortie, "oral-01-accueil", journal)
    page.get_by_role("button", name="Tirer un sujet au sort").click()
    page.wait_for_timeout(300)
    capturer(page, sortie, "oral-02-sujet-tire", journal)
    page.get_by_role("button", name="Démarrer les 30 minutes").click()
    page.wait_for_timeout(500)
    capturer(page, sortie, "oral-03-expose", journal)
    for _ in range(3):
        bouton = page.get_by_role("button", name="Révéler une question du jury")
        if bouton.count() == 0:
            break
        bouton.first.click()
        page.wait_for_timeout(200)
    for s in page.locator("details.jury-q summary").all():
        s.click()
        page.wait_for_timeout(80)
    capturer(page, sortie, "oral-04-questions-jury", journal)
    page.get_by_role("button", name="Terminer et m’évaluer").click()
    page.wait_for_timeout(300)
    capturer(page, sortie, "oral-05-grille", journal)
    # Note maximale : c'est le seul moyen de voir la recompense et les eclats.
    for groupe in page.locator(".echelle").all():
        groupe.get_by_role("button").nth(4).click()
    page.wait_for_timeout(200)
    page.get_by_role("button", name="Voir ma note").click()
    # Les eclats durent moins de deux secondes : la capture doit tomber pendant.
    page.wait_for_timeout(280)
    page.evaluate("() => window.scrollTo(0, 0)")
    capturer(page, sortie, "oral-06-eclats", journal, pleine=False)
    page.wait_for_timeout(2200)
    capturer(page, sortie, "oral-07-note", journal)


def parcours_plan(page, base, sortie, journal) -> None:
    print("Plan express : rédaction puis comparaison")
    aller(page, base, "#/plans", 400)
    capturer(page, sortie, "plan-01-accueil", journal)
    page.get_by_role("button", name="Tirer un sujet").click()
    page.wait_for_timeout(300)
    capturer(page, sortie, "plan-02-chrono", journal)
    page.locator("textarea.champ").fill(
        "Accroche : le secret professionnel protège le justiciable avant l’avocat.\n\n"
        "I. Un secret d’ordre public\n"
        "   1. Général, absolu, illimité dans le temps\n"
        "   2. Toutes matières, tous supports\n\n"
        "II. Des atteintes strictement encadrées\n"
        "   1. Les exceptions légales\n"
        "   2. La défense de l’avocat lui‑même"
    )
    page.get_by_role("button", name="J’ai terminé").click()
    page.wait_for_timeout(400)
    capturer(page, sortie, "plan-03-comparaison", journal)


def parcours_cas(page, base, sortie, journal) -> None:
    print("Cas pratique : énoncé puis correction")
    aller(page, base, "#/cas", 500)
    capturer(page, sortie, "cas-01-enonce", journal)
    page.locator("details.repli summary").first.click()
    page.wait_for_timeout(300)
    capturer(page, sortie, "cas-02-correction", journal)


def parcours_reference(page, base, sortie, journal) -> None:
    print("Écrans de référence")
    for nom, route in [
        ("ref-01-accueil-vierge", "#/"),
        ("ref-02-parcours", "#/bloc/regles"),
        ("ref-03-sujet", "#/sujet/secret-professionnel"),
        ("ref-04-entrainement", "#/entrainement"),
        ("ref-05-progression", "#/progression"),
        ("ref-06-apropos", "#/apropos"),
    ]:
        aller(page, base, route, 600 + len(nom))
        capturer(page, sortie, nom, journal)


def main() -> int:
    parseur = argparse.ArgumentParser(description=__doc__)
    parseur.add_argument("--base", default="http://127.0.0.1:8099")
    parseur.add_argument("--out", default="parcours")
    args = parseur.parse_args()

    sortie = Path(args.out)
    if sortie.exists():
        shutil.rmtree(sortie)
    sortie.mkdir(parents=True)

    journal: list = []
    erreurs: list[str] = []

    with sync_playwright() as p:
        navigateur = p.chromium.launch(channel="chrome")
        contexte = navigateur.new_context(viewport={"width": LARGEUR, "height": HAUTEUR}, locale="fr-FR")
        page = contexte.new_page()
        page.on("pageerror", lambda e: erreurs.append(f"pageerror: {e}"))
        page.on("console", lambda m: erreurs.append(f"console.error: {m.text}") if m.type == "error" else None)

        parcours_reference(page, args.base, sortie, journal)
        parcours_qcm(page, args.base, sortie, journal)
        parcours_fiches(page, args.base, sortie, journal)
        parcours_oral(page, args.base, sortie, journal)
        parcours_plan(page, args.base, sortie, journal)
        parcours_cas(page, args.base, sortie, journal)

        navigateur.close()

    (sortie / "textes.json").write_text(json.dumps(journal, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n{len(journal)} écrans capturés dans {sortie}/")
    if erreurs:
        print(f"{len(erreurs)} erreurs console :")
        for e in erreurs[:20]:
            print(f"  ! {e}")
        return 1
    print("aucune erreur console")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
