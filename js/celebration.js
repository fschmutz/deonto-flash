// Recompenses visuelles. Une revision reussie doit se voir, sans jamais devenir puerile :
// des eclats d'or et de creme, une seconde, puis plus rien. Le canevas evite d'injecter
// du style en ligne, que la politique de securite du contenu interdit.

import { h } from './ui.js';

const INTENSITES = {
  discret: { eclats: 26, duree: 900, force: 4.2 },
  franc: { eclats: 60, duree: 1400, force: 6.4 },
  sceau: { eclats: 110, duree: 2000, force: 8.2 }
};

const TEINTES = ['#d4af37', '#e8c96a', '#efe9dc', '#c9a227', '#f5f2ec'];

const sobre = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let canevas = null;
let contexte = null;
let eclats = [];
let animation = null;

function preparer() {
  if (canevas) return;
  canevas = h('canvas', { class: 'celebration', 'aria-hidden': 'true' });
  document.body.append(canevas);
  contexte = canevas.getContext('2d');
}

function redimensionner() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canevas.width = window.innerWidth * dpr;
  canevas.height = window.innerHeight * dpr;
  contexte.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function boucle() {
  const l = window.innerWidth;
  const ht = window.innerHeight;
  contexte.clearRect(0, 0, l, ht);
  const maintenant = performance.now();
  eclats = eclats.filter((e) => maintenant < e.fin);

  for (const e of eclats) {
    const age = (maintenant - e.debut) / (e.fin - e.debut);
    e.x += e.vx;
    e.y += e.vy;
    e.vy += 0.16; // gravite : les eclats retombent, ils ne flottent pas
    e.vx *= 0.99;
    e.rotation += e.vitesseRotation;
    contexte.save();
    contexte.globalAlpha = Math.max(0, 1 - age * age);
    contexte.translate(e.x, e.y);
    contexte.rotate(e.rotation);
    contexte.fillStyle = e.teinte;
    contexte.fillRect(-e.taille / 2, -e.taille / 6, e.taille, e.taille / 3);
    contexte.restore();
  }

  if (eclats.length) {
    animation = requestAnimationFrame(boucle);
  } else {
    contexte.clearRect(0, 0, l, ht);
    animation = null;
  }
}

/**
 * Fait jaillir des eclats depuis un element, ou depuis le haut de l'ecran a defaut.
 * `niveau` vaut 'discret', 'franc' ou 'sceau'.
 */
export function celebrer(niveau = 'discret', ancre = null) {
  if (sobre()) return;
  const reglage = INTENSITES[niveau] || INTENSITES.discret;
  preparer();
  redimensionner();

  // Un element pas encore insere renvoie un rectangle nul : la gerbe partirait du coin.
  const cadre = ancre?.getBoundingClientRect?.();
  const ancree = cadre && cadre.width > 0 && cadre.height > 0;
  const x = ancree ? cadre.left + cadre.width / 2 : window.innerWidth / 2;
  const y = ancree ? Math.min(cadre.top + cadre.height / 2, window.innerHeight * 0.75) : window.innerHeight * 0.3;

  const maintenant = performance.now();
  for (let i = 0; i < reglage.eclats; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const vitesse = reglage.force * (0.35 + Math.random() * 0.9);
    eclats.push({
      x,
      y,
      vx: Math.cos(angle) * vitesse,
      vy: Math.sin(angle) * vitesse - reglage.force * 0.6,
      taille: 5 + Math.random() * 6,
      teinte: TEINTES[Math.floor(Math.random() * TEINTES.length)],
      rotation: Math.random() * Math.PI,
      vitesseRotation: (Math.random() - 0.5) * 0.3,
      debut: maintenant,
      fin: maintenant + reglage.duree * (0.7 + Math.random() * 0.5)
    });
  }
  if (!animation) animation = requestAnimationFrame(boucle);
}

/**
 * Bandeau de recompense place en tete d'un ecran de resultat. Renvoie null quand il n'y a
 * rien a annoncer, pour que l'appelant puisse l'inserer sans condition.
 */
export function bandeauRecompense({ points = 0, rang = null, sceaux = [], serie = 0 } = {}) {
  const lignes = [];
  if (rang) lignes.push({ ico: '✦', texte: `Nouveau rang : ${rang}`, fort: true });
  for (const s of sceaux) lignes.push({ ico: '✦', texte: `Sceau obtenu : ${s}`, fort: true });
  if (serie >= 2) lignes.push({ ico: '◆', texte: `${serie} jours d’affilée`, fort: false });
  if (!lignes.length && !points) return null;

  return h(
    'div',
    { class: `recompense${lignes.some((l) => l.fort) ? ' eclat' : ''}` },
    points ? h('span', { class: 'recompense-pts', text: `+${points} pts` }) : null,
    lignes.map((l) =>
      h('span', { class: `recompense-ligne${l.fort ? ' fort' : ''}` }, h('i', { 'aria-hidden': 'true', text: l.ico }), h('span', { text: l.texte }))
    )
  );
}
