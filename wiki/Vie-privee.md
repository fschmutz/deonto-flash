# Vie privée

## Ce qui sort de votre appareil

Rien.

Il n’y a ni compte, ni serveur applicatif, ni base de données, ni mesure d’audience, ni cookie,
ni ressource externe chargée à l’exécution. Les polices sont auto‑hébergées. La politique de
sécurité du contenu est `default-src 'self'` : le navigateur refuse tout chargement depuis un
autre domaine.

Le seul échange réseau est le téléchargement de l’application elle‑même depuis GitHub Pages,
au premier chargement — comme n’importe quelle page web. Ensuite, le service worker la sert
depuis le cache et l’application fonctionne hors ligne.

## Ce qui est stocké, et où

Dans le `localStorage` de votre navigateur, sous une clé unique, `deonto-flash:v1` :

- l’état de révision de chaque fiche : difficulté, stabilité, date de prochaine échéance ;
- les compteurs de QCM et les plans travaillés ;
- l’historique de vos oraux : sujet, note, durée, date ;
- votre expérience, votre série de jours et votre thème.

Aucune donnée nominative. Aucun texte libre : le plan que vous saisissez dans l’exercice
« Plan express » n’est **pas** enregistré, il disparaît à la fin de l’exercice.

## Effacer

Deux moyens : le bouton **Effacer ma progression** dans « À propos », ou la suppression des
données du site dans les réglages du navigateur. Il n’y a rien à effacer ailleurs, puisqu’il
n’y a rien ailleurs.

## Vérifier

Le dépôt est public. `js/store.js` contient l’intégralité de la persistance, en une centaine
de lignes lisibles. L’onglet Réseau de votre navigateur ne montrera aucune requête sortante
après le chargement initial.
