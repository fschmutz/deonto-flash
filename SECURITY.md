# Sécurité

## Surface d’attaque

Déonto Flash est une application statique. Elle n’a ni serveur, ni base de données, ni
compte, ni appel réseau à l’exécution. Toutes les données restent dans le `localStorage`
du navigateur de l’utilisateur.

Mesures en place :

- politique de sécurité du contenu `default-src 'self'`, sans `unsafe-inline` ;
- aucune dépendance à l’exécution, aucun CDN, polices auto‑hébergées ;
- le rendu construit des nœuds DOM et n’utilise jamais `innerHTML` sur une donnée
  d’origine externe ;
- `frame-ancestors 'none'`, `base-uri 'none'`, `form-action 'none'`, `object-src 'none'` ;
- `referrer: no-referrer`.

## Signaler une vulnérabilité

Ouvrez une [issue de sécurité](https://github.com/fschmutz/deonto-flash/security/advisories/new)
plutôt qu’une issue publique. Une réponse est apportée sous quinze jours.

## Ce qui n’est pas une vulnérabilité

La progression est stockée en clair dans le navigateur : c’est délibéré. Elle ne contient
aucune donnée personnelle, seulement des identifiants de fiches et des dates de révision.
