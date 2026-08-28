#!/usr/bin/env python3
"""Rebuilds the icons and the social card from the application's own mark.

The mark is drawn once, in `js/ui.js`. Redrawing it by hand for each icon is how a logo
starts to drift, so this script reads the paths from that file and renders them.

Usage:
    python3 scripts/icones.py [--out assets]
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from playwright.sync_api import sync_playwright

RACINE = Path(__file__).resolve().parent.parent

OR = "#c9a227"
OR_CLAIR = "#e4c767"
RABAT = "#efe9dc"
FOND = "#0e1116"
FOND_HAUT = "#10151b"
TEXTE = "#eae6de"
DOUX = "#98a1ad"


def chemins() -> dict[str, str]:
    """Extrait les tracés de la marque depuis le module qui la dessine."""
    source = (RACINE / "js" / "ui.js").read_text(encoding="utf-8")
    trouves = re.findall(r"class: 'logo-(\w+)', d: '([^']+)'", source)
    tracés = {nom: d for nom, d in trouves}
    manquants = {"pan", "eclair"} - set(tracés)
    if manquants:
        raise SystemExit(f"tracés introuvables dans js/ui.js : {', '.join(sorted(manquants))}")
    pans = [d for nom, d in trouves if nom == "pan"]
    return {"pans": pans, "eclair": tracés["eclair"]}


def marque(taille: int, fond: str | None, rayon: float = 20.5, epaisseur: float = 2.4) -> str:
    t = chemins()
    pans = "".join(f'<path d="{d}" fill="{RABAT}"/>' for d in t["pans"])
    disque = f'<circle cx="24" cy="24" r="24" fill="{fond}"/>' if fond else ""
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{taille}" height="{taille}" viewBox="0 0 48 48">'
        f"{disque}"
        f'<circle cx="24" cy="24" r="{rayon}" fill="none" stroke="{OR}" stroke-width="{epaisseur}"/>'
        f"{pans}"
        f'<path d="{t["eclair"]}" fill="{OR}" stroke="{fond or FOND}" stroke-width="1.7" stroke-linejoin="round"/>'
        "</svg>"
    )


def page_icone(svg: str, taille: int, fond: str) -> str:
    return (
        f'<!doctype html><meta charset="utf-8">'
        f"<style>html,body{{margin:0;width:{taille}px;height:{taille}px;background:{fond};"
        f"display:flex;align-items:center;justify-content:center}}</style>{svg}"
    )


def page_og() -> str:
    t = chemins()
    pans = "".join(f'<path d="{d}" fill="{RABAT}"/>' for d in t["pans"])
    return f"""<!doctype html><meta charset="utf-8">
<link rel="stylesheet" href="../css/app.css">
<style>
 html,body {{ margin:0; width:1200px; height:630px; background:{FOND}; color:{TEXTE};
   font-family: Inter, system-ui, sans-serif; overflow:hidden; }}
 .cadre {{ position:absolute; inset:0; display:flex; flex-direction:column;
   justify-content:center; padding:0 88px; gap:26px; }}
 .haut {{ display:flex; align-items:center; gap:22px; }}
 .nom {{ font-family: Spectral, Georgia, serif; font-weight:700; font-size:44px; letter-spacing:-.02em; }}
 .nom i {{ color:{OR}; font-style:normal; }}
 h1 {{ font-family: Spectral, Georgia, serif; font-weight:700; font-size:74px; line-height:1.06;
   margin:0; letter-spacing:-.025em; max-width:19ch; }}
 p {{ margin:0; font-size:26px; color:{DOUX}; max-width:44ch; line-height:1.4; }}
 .chiffres {{ display:flex; gap:44px; margin-top:8px; }}
 .c b {{ font-family:"DM Mono", ui-monospace, monospace; font-size:34px; color:{OR_CLAIR}; font-weight:500; }}
 .c span {{ display:block; font-size:15px; letter-spacing:.14em; text-transform:uppercase; color:{DOUX}; margin-top:4px; }}
 .filet {{ position:absolute; left:0; right:0; bottom:0; height:8px;
   background:linear-gradient(90deg,{OR},{OR_CLAIR},{OR}); }}
</style>
<div class="cadre">
  <div class="haut">
    <svg width="72" height="72" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="20.5" fill="none" stroke="{OR}" stroke-width="2.4"/>
      {pans}
      <path d="{t['eclair']}" fill="{OR}" stroke="{FOND_HAUT}" stroke-width="1.7" stroke-linejoin="round"/>
    </svg>
    <span class="nom">Déonto<i>Flash</i></span>
  </div>
  <h1>Déontologie de l’avocat</h1>
  <p>Le programme officiel, la révision espacée et un simulateur d’oral de trente minutes.</p>
  <div class="chiffres">
    <div class="c"><b>34</b><span>sujets</span></div>
    <div class="c"><b>300</b><span>fiches</span></div>
    <div class="c"><b>129</b><span>questions</span></div>
    <div class="c"><b>34</b><span>cas pratiques</span></div>
  </div>
</div>
<div class="filet"></div>"""


def main() -> int:
    parseur = argparse.ArgumentParser(description=__doc__)
    parseur.add_argument("--out", default="assets")
    args = parseur.parse_args()
    sortie = RACINE / args.out
    sortie.mkdir(exist_ok=True)

    # Le masque d'Android rogne les bords : la marque y est reduite pour tenir dans le cercle sur.
    travaux = [
        ("favicon.png", 512, marque(512, None), FOND),
        ("apple-touch-icon.png", 180, marque(180, FOND_HAUT), FOND_HAUT),
        ("maskable.png", 512, marque(512, FOND_HAUT, rayon=14.5, epaisseur=1.7), FOND_HAUT),
    ]

    with sync_playwright() as p:
        navigateur = p.chromium.launch(channel="chrome")
        for nom, taille, svg, fond in travaux:
            page = navigateur.new_page(viewport={"width": taille, "height": taille})
            page.set_content(page_icone(svg, taille, fond))
            page.wait_for_timeout(150)
            page.screenshot(path=str(sortie / nom), omit_background=(fond is None))
            page.close()
            print(f"  · {nom} {taille}×{taille}")

        page = navigateur.new_page(viewport={"width": 1200, "height": 630})
        # Servi depuis le dossier des scripts pour que la feuille de style et les polices chargent.
        (RACINE / "scripts" / ".og.html").write_text(page_og(), encoding="utf-8")
        page.goto(f"file://{RACINE / 'scripts' / '.og.html'}")
        page.wait_for_timeout(700)
        page.screenshot(path=str(sortie / "og.png"))
        (RACINE / "scripts" / ".og.html").unlink()
        print("  · og.png 1200×630")
        navigateur.close()

    print(f"\nicônes régénérées depuis js/ui.js dans {sortie}/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
