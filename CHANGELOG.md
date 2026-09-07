# Journal des versions

Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).

## 2026.09.07.3

### Corrigé
- Bouton de thème : largeur fixe héritée de `.retour` qui tronquait **Encre** / **Papier** ;
  pastille en `width: auto` avec libellé complet (icône seule sous 380px).
- En-tête : marges latérales `safe-area` pour éviter le collage au bord / scrollbar.

### Modifié
- Colonne de contenu plus large sur grands écrans (`--max` 52rem ≥900px, 58rem ≥1200px) ;
  grille « Travailler » assouplie (`minmax(260px, 1fr)`).

## 2026.09.07.2

### Ajouté
- Enrichissement du corpus : chaque sujet passe à **8 QCM** et **7 questions de jury**
  (banque ~272 QCM, 238 questions de jury).
- Fiches : les sujets encore à 8 cartes reçoivent **+2 à +3** fiches sourcées
  (total ~339 cartes).
- Second cas pratique (`cas2`) sur les sujets denses : secret professionnel, contradictoire,
  conflits d’intérêts, LCB‑FT, publicité, infractions et procédure disciplinaires,
  collaborateur, structures d’exercice, honoraires, CARPA, assurance RCP.

### Modifié
- Contrôle de thème plus lisible : libellé **Encre** / **Papier** avec icône soleil ou lune,
  `aria-pressed` et titre explicite (plus seulement ◐).
- Premier lancement sans préférence enregistrée : thème aligné sur
  `prefers-color-scheme` (clair → papier, sinon encre) ; le choix reste mémorisé au bascule.
- Compteurs wiki / README alignés sur la nouvelle banque.

## 2026.09.07.1

### Ajouté
- QCM hybride : sélecteur de longueur (10 / 25 / 50 / 100), mémorisé localement.
- Tirage intelligent : priorité aux questions jamais vues, puis non acquises ; les
  questions acquises (au moins deux bonnes réponses, sans aucune faute) ne sont reprises
  qu’en dernier recours.
- Chronomètre adapté : 30 s pour 10 ou 25 questions ; pour 50 ou 100, choix entre
  45 s, 60 s ou sans chronomètre.
- Si un parcours filtre compte moins de questions que la longueur choisie, confirmation
  explicite (maximum disponible ou programme complet) : aucun remplissage silencieux
  depuis un autre parcours.

### Prévu
- Enrichissement de la banque QCM (second passage) : viser environ 5 à 8 questions
  supplémentaires par sujet, pour équilibrer les parcours encore courts (organisation,
  responsabilité) et soutenir les séries de 50–100 sans recyclage trop rapide des acquis.

### Modifié
- Documentation des modes (wiki) et carte d’entrée des exercices.

## 2026.08.28.2

### Ajouté
- Une marque : les deux pans du rabat de l’avocat, traversés d’un éclair, dessinée en SVG
  et déclinée en icônes.
- Des récompenses visibles. Une série qui se termine annonce les points gagnés, un rang
  franchi, un sceau obtenu, et fait jaillir des éclats d’or. L’animation est supprimée
  lorsque le système demande de réduire les animations.
- L’écran de résultat des QCM liste les questions manquées et renvoie vers la fiche du
  sujet concerné.

### Modifié
- Le premier lancement ne montre plus une note de 0,0/20 en rouge et six jauges vides,
  mais le point de départ et deux façons de commencer.
- Toute la ponctuation suit désormais l’usage français : plus aucun tiret cadratin.

## 2026.08.28.1 · première version

### Ajouté
- Les 34 sujets du programme officiel, répartis en six parcours, avec pour chacun une
  accroche, un plan en deux parties, des points clés, des fiches sourcées, des QCM, des
  questions de jury et un cas pratique.
- Simulateur d’oral : tirage au sort, trente minutes chronométrées en trois phases,
  questions de jury révélées une à une, grille d’auto‑évaluation sur cinq critères notée /20.
- Révision espacée des fiches par FSRS‑6, implémenté sans dépendance.
- Plan express : quatre‑vingt‑dix secondes pour produire un plan, puis comparaison.
- QCM chronométré et cas pratiques.
- Gamification : six sceaux, six rangs, série de jours, note blanche estimée sur 20.
- Deux thèmes, encre et papier. Application installable, fonctionne hors ligne.
- Suite de tests sur l’intégrité du corpus et les invariants du planificateur.
- Contrôle visuel automatisé sur vingt‑et‑un écrans, trois formats et deux thèmes.
