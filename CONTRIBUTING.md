# Contribuer

## Signaler une erreur de droit

C’est la contribution la plus utile. Ouvrez une issue en indiquant :

1. le sujet et la fiche concernés ;
2. ce qui est écrit ;
3. ce qui devrait l’être ;
4. **le texte applicable**, avec son article — c’est la seule chose qui permet de trancher.

Le droit évolue : une correction sans référence ne peut pas être intégrée.

## Modifier le contenu

Les sujets vivent dans `js/data/`, un fichier par bloc du programme. Chaque sujet suit la
même forme : `sources`, `principes`, `accroche`, `plan`, `cles`, `cartes`, `qcm`, `jury`,
`cas`. Toute fiche porte sa référence dans `src`.

Avant d’ouvrir une pull request :

```bash
node --test 'test/*.test.mjs'
```

La suite refuse un sujet incomplet, un QCM dont la bonne réponse pointe hors de sa liste,
une fiche sans source, une apostrophe droite dans un texte visible, ou une divergence avec
le programme officiel.

## Modifier l’interface

```bash
python3 -m http.server 8099 &
python3 scripts/qa-visuelle.py
```

Le contrôle échoue sur toute erreur JavaScript, requête en échec, débordement horizontal,
texte tronqué, cible tactile sous 32 px ou contraste sous le seuil WCAG AA. Les captures
sont écrites dans `captures/` : regardez‑les, un écran peut passer les seuils et rester
illisible.

## Style

- Français dans l’interface et les commentaires, apostrophes typographiques.
- Pas de dépendance à l’exécution. Pas d’étape de compilation.
- Pas de `innerHTML` sur une donnée qui n’est pas dans ce dépôt.
