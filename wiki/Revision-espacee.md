# La révision espacée

## Le principe

Réviser une fiche que vous connaissez parfaitement ne vous apprend rien. La réviser après
l’avoir oubliée coûte le double. L’intervalle utile est celui qui vous trouve **au bord de
l’oubli**.

Déonto Flash utilise **FSRS‑6** (Free Spaced Repetition Scheduler), l’algorithme public
développé par la communauté [Open Spaced Repetition](https://github.com/open-spaced-repetition).
Il est implémenté ici sans dépendance, dans `js/fsrs.js`.

## Le modèle

Chaque fiche porte trois grandeurs :

| Grandeur | Ce qu’elle mesure |
| --- | --- |
| **Difficulté** (1 à 10) | Combien cette fiche vous résiste |
| **Stabilité** (en jours) | Combien de temps le souvenir tient |
| **Retrievabilité** (0 à 1) | La probabilité de vous en souvenir maintenant |

La retrievabilité décroît avec le temps écoulé depuis la dernière révision, d’autant plus vite
que la stabilité est faible. La fiche revient le jour où elle retombe à **90 %**.

## Vos quatre notes

- **Encore** : vous ne saviez pas. La stabilité baisse et la fiche revient dans dix minutes,
  en fin de session.
- **Difficile** : retrouvé, mais péniblement. L’intervalle progresse peu.
- **Bien** : la réponse est venue. L’intervalle progresse normalement.
- **Facile** : immédiat. L’intervalle fait un bond.

L’intervalle prévu s’affiche sous chaque bouton avant que vous ne choisissiez.

## Ce qui compte vraiment

L’algorithme ne vaut que par l’honnêteté de vos notes. « Bien » sur une fiche que vous avez
devinée décale la révision de plusieurs semaines et vous laisse croire qu’elle est acquise.

## La maîtrise et les sceaux

La maîtrise d’une fiche vaut 0 tant qu’elle n’a jamais été révisée, et atteint 1 quand sa
stabilité franchit **trois semaines**. La maîtrise d’un parcours est la moyenne de ses fiches.
Le **sceau** d’un parcours est acquis à **80 %**.
