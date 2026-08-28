// Petites aides de rendu. Pas de dependance, pas de moteur de template : on construit
// des noeuds DOM. Aucune fonction de ce module n'ecrit de HTML, ce qui rend l'injection
// impossible par construction.

export function h(tag, props = {}, ...enfants) {
  const el = document.createElement(tag);
  for (const [cle, valeur] of Object.entries(props || {})) {
    if (valeur === null || valeur === undefined || valeur === false) continue;
    if (cle === 'class') el.className = valeur;
    else if (cle === 'text') el.textContent = valeur;
    else if (cle === 'style') appliquerStyle(el, valeur);
    else if (cle.startsWith('on') && typeof valeur === 'function') el.addEventListener(cle.slice(2).toLowerCase(), valeur);
    else if (cle === 'dataset') for (const [d, v] of Object.entries(valeur)) el.dataset[d] = v;
    else el.setAttribute(cle, valeur === true ? '' : String(valeur));
  }
  for (const enfant of enfants.flat(Infinity)) {
    if (enfant === null || enfant === undefined || enfant === false) continue;
    el.append(enfant instanceof Node ? enfant : document.createTextNode(String(enfant)));
  }
  return el;
}

/**
 * Applique des declarations CSS via le CSSOM. L'attribut `style` est un style en ligne :
 * la politique de securite du contenu (`style-src 'self'`) le bloque, et la barre de
 * progression resterait a zero. `setProperty` n'est pas soumis a cette restriction et
 * accepte les proprietes personnalisees.
 */
export function appliquerStyle(el, declarations) {
  for (const morceau of String(declarations).split(';')) {
    const i = morceau.indexOf(':');
    if (i < 1) continue;
    const nom = morceau.slice(0, i).trim();
    const valeur = morceau.slice(i + 1).trim();
    if (nom && valeur) el.style.setProperty(nom, valeur);
  }
}

export const svgns = 'http://www.w3.org/2000/svg';

export function svg(tag, props = {}, ...enfants) {
  const el = document.createElementNS(svgns, tag);
  for (const [cle, valeur] of Object.entries(props || {})) {
    if (valeur === null || valeur === undefined || valeur === false) continue;
    if (cle === 'style') appliquerStyle(el, valeur);
    else el.setAttribute(cle, String(valeur));
  }
  for (const enfant of enfants.flat(Infinity)) if (enfant) el.append(enfant);
  return el;
}

/** Anneau de progression circulaire, utilisé dans les listes de sujets. */
export function anneau(part, couleur) {
  const r = 11;
  const c = 2 * Math.PI * r;
  const el = svg(
    'svg',
    { class: 'anneau', viewBox: '0 0 26 26', 'aria-hidden': 'true', style: couleur ? `--c:var(${couleur})` : '' },
    svg('circle', { class: 'fond', cx: 13, cy: 13, r }),
    svg('circle', {
      class: 'part',
      cx: 13,
      cy: 13,
      r,
      transform: 'rotate(-90 13 13)',
      'stroke-dasharray': c.toFixed(2),
      'stroke-dashoffset': (c * (1 - Math.min(1, Math.max(0, part)))).toFixed(2)
    })
  );
  return el;
}

export function jauge(part, couleur) {
  return h(
    'div',
    { class: 'jauge', style: couleur ? `--c:var(${couleur})` : '' },
    h('i', { style: `width:${(Math.min(1, Math.max(0, part)) * 100).toFixed(1)}%` })
  );
}

export const pct = (x) => `${Math.round(Math.min(1, Math.max(0, x)) * 100)} %`;

export function mmss(ms) {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/** Mélange de Fisher-Yates, sur une copie. */
export function melanger(liste) {
  const a = [...liste];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const auHasard = (liste) => liste[Math.floor(Math.random() * liste.length)];

/**
 * Chronomètre à rebours ou croissant. Renvoie une fonction d'arrêt.
 * Le rendu est piloté par requestAnimationFrame plafonné à 4 rafraîchissements par seconde.
 */
export function chronometre({ duree = null, surTic, surFin }) {
  const debut = Date.now();
  let dernier = -1;
  let actif = true;
  const boucle = () => {
    if (!actif) return;
    const ecoule = Date.now() - debut;
    const restant = duree === null ? null : Math.max(0, duree - ecoule);
    const seconde = Math.floor((restant === null ? ecoule : restant) / 1000);
    if (seconde !== dernier) {
      dernier = seconde;
      surTic?.({ ecoule, restant });
    }
    if (restant !== null && restant <= 0) {
      actif = false;
      surFin?.();
      return;
    }
    setTimeout(boucle, 250);
  };
  boucle();
  return () => {
    actif = false;
  };
}

export function vide(message, sousMessage, action) {
  return h(
    'div',
    { class: 'vide' },
    h('span', { class: 'emo', 'aria-hidden': 'true' }, '◈'),
    h('p', { text: message }),
    sousMessage && h('p', { class: 'avertissement', text: sousMessage }),
    action
  );
}

export function section(titre, note) {
  return h('div', { class: 'section' }, h('h2', { text: titre }), note && h('span', { class: 'note', text: note }));
}

/** Coupe une chaîne sans couper un mot. */
export function court(texte, max = 90) {
  if (texte.length <= max) return texte;
  const coupe = texte.slice(0, max);
  return `${coupe.slice(0, coupe.lastIndexOf(' '))}…`;
}

/**
 * Marque de l'application : les deux pans du rabat de l'avocat, traversés d'un éclair.
 * Dessinée en SVG plutôt qu'en image pour rester nette à toute taille et suivre le thème.
 */
export function logo(taille = 30) {
  return svg(
    'svg',
    { class: 'logo', width: taille, height: taille, viewBox: '0 0 48 48', 'aria-hidden': 'true', focusable: 'false' },
    svg('circle', { class: 'logo-anneau', cx: 24, cy: 24, r: 20.5, fill: 'none', 'stroke-width': 2.4 }),
    svg('path', { class: 'logo-pan', d: 'M14.5 12h8.2l-.7 17.8a3.6 3.6 0 0 1-3.6 3.4 3.6 3.6 0 0 1-3.6-3.4z' }),
    svg('path', { class: 'logo-pan', d: 'M25.3 12h8.2l-.7 17.8a3.6 3.6 0 0 1-3.6 3.4 3.6 3.6 0 0 1-3.6-3.4z' }),
    svg('path', { class: 'logo-eclair', d: 'M26.8 11 17.4 25.8h5.1l-2.4 11L30 21.4h-5.3z', 'stroke-width': 1.7, 'stroke-linejoin': 'round' })
  );
}
