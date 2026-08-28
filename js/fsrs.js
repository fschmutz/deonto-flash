// FSRS-6 - Free Spaced Repetition Scheduler.
// Implementation autonome, sans dependance, du modele DSR : chaque fiche porte une
// difficulte D (1 a 10), une stabilite S (en jours) et une retrievabilite R deduite du
// temps ecoule. On planifie la revision au jour ou R retombe a la retention cible.
//
// Algorithme public (Open Spaced Repetition, licence MIT) : https://github.com/open-spaced-repetition
// Parametres par defaut FSRS-6.

export const ETAT = { NOUVEAU: 0, APPRENTISSAGE: 1, REVISION: 2, REAPPRENTISSAGE: 3 };
export const NOTE = { ENCORE: 1, DIFFICILE: 2, BIEN: 3, FACILE: 4 };

const W = [
  0.2172, 1.1771, 3.2602, 16.1507, 7.0114, 0.57, 2.0966, 0.0069, 1.5261, 0.112,
  1.0178, 1.849, 0.1133, 0.3127, 2.2934, 0.2191, 3.0004, 0.7536, 0.3332, 0.1437, 0.2
];

const S_MIN = 0.01;
const S_MAX = 36500;
const D_MIN = 1;
const D_MAX = 10;
const JOUR_MS = 86400000;

const borne = (x, min, max) => Math.min(Math.max(x, min), max);

/** Facteur et exposant de la courbe d'oubli, derives du parametre de decroissance w20. */
function courbe(w = W) {
  const decay = -w[20];
  const factor = Math.pow(0.9, 1 / decay) - 1;
  return { decay, factor };
}

/** Retrievabilite : probabilite de se souvenir apres `jours` jours, pour une stabilite `s`. */
export function retrievabilite(jours, s, w = W) {
  if (!(s > 0)) return 0;
  const { decay, factor } = courbe(w);
  return Math.pow(1 + (factor * Math.max(jours, 0)) / s, decay);
}

/** Intervalle, en jours, au bout duquel la retrievabilite retombe a `retention`. */
export function intervalle(s, retention = 0.9, w = W) {
  const { decay, factor } = courbe(w);
  const j = (s / factor) * (Math.pow(retention, 1 / decay) - 1);
  return borne(Math.round(j), 1, S_MAX);
}

const stabiliteInitiale = (note, w = W) => borne(w[note - 1], S_MIN, S_MAX);

const difficulteInitiale = (note, w = W) =>
  borne(w[4] - Math.exp(w[5] * (note - 1)) + 1, D_MIN, D_MAX);

function difficulteSuivante(d, note, w = W) {
  const delta = -w[6] * (note - 3);
  const amorti = d + delta * ((10 - d) / 9); // l'ajustement faiblit quand D approche 10
  const cible = difficulteInitiale(NOTE.FACILE, w);
  return borne(w[7] * cible + (1 - w[7]) * amorti, D_MIN, D_MAX);
}

/** Stabilite apres une reponse reussie (Difficile, Bien ou Facile) a l'echeance. */
function stabiliteRappel(d, s, r, note, w = W) {
  const penaliteDifficile = note === NOTE.DIFFICILE ? w[15] : 1;
  const bonusFacile = note === NOTE.FACILE ? w[16] : 1;
  const gain =
    1 +
    Math.exp(w[8]) *
      (11 - d) *
      Math.pow(s, -w[9]) *
      (Math.exp(w[10] * (1 - r)) - 1) *
      penaliteDifficile *
      bonusFacile;
  return borne(s * gain, S_MIN, S_MAX);
}

/** Stabilite apres un oubli. Elle ne peut jamais depasser la stabilite precedente. */
function stabiliteOubli(d, s, r, w = W) {
  const brute =
    w[11] * Math.pow(d, -w[12]) * (Math.pow(s + 1, w[13]) - 1) * Math.exp(w[14] * (1 - r));
  return borne(Math.min(brute, s), S_MIN, S_MAX);
}

/** Stabilite apres une reprise le meme jour : la memoire ne se consolide que faiblement. */
function stabiliteCourtTerme(s, note, w = W) {
  let sinc = Math.exp(w[17] * (note - 3 + w[18])) * Math.pow(s, -w[19]);
  if (note >= NOTE.BIEN) sinc = Math.max(sinc, 1);
  return borne(s * sinc, S_MIN, S_MAX);
}

/** Fiche vierge, jamais revue. */
export const ficheNeuve = () => ({ etat: ETAT.NOUVEAU, d: 0, s: 0, revue: null, dus: 0, ratees: 0 });

/**
 * Applique une note a une fiche et renvoie la fiche mise a jour.
 * @param {object} fiche etat courant
 * @param {number} note 1 Encore, 2 Difficile, 3 Bien, 4 Facile
 * @param {number} maintenant horodatage en millisecondes
 * @param {number} retention retention cible (0.7 a 0.97)
 */
export function noter(fiche, note, maintenant = Date.now(), retention = 0.9) {
  const w = W;
  const f = { ...fiche };
  const ecoule = f.revue ? Math.max(0, (maintenant - f.revue) / JOUR_MS) : 0;

  if (f.etat === ETAT.NOUVEAU || !(f.s > 0)) {
    f.d = difficulteInitiale(note, w);
    f.s = stabiliteInitiale(note, w);
  } else {
    const r = retrievabilite(ecoule, f.s, w);
    f.d = difficulteSuivante(f.d, note, w);
    if (ecoule < 1) {
      // Reprise le meme jour : pas de nouvelle mesure de la memoire a long terme.
      f.s = stabiliteCourtTerme(f.s, note, w);
    } else if (note === NOTE.ENCORE) {
      f.s = stabiliteOubli(f.d, f.s, r, w);
    } else {
      f.s = stabiliteRappel(f.d, f.s, r, note, w);
    }
  }

  f.etat = note === NOTE.ENCORE ? ETAT.REAPPRENTISSAGE : ETAT.REVISION;
  f.revue = maintenant;
  f.dus = (fiche.dus || 0) + 1;
  f.ratees = (fiche.ratees || 0) + (note === NOTE.ENCORE ? 1 : 0);
  f.echeance = maintenant + intervalle(f.s, retention, w) * JOUR_MS;
  // Une fiche ratee revient dans la session courante, pas dans plusieurs jours.
  if (note === NOTE.ENCORE) f.echeance = maintenant + 10 * 60 * 1000;
  return f;
}

/** Intervalles previsionnels affiches sous les quatre boutons de notation. */
export function apercu(fiche, maintenant = Date.now(), retention = 0.9) {
  const out = {};
  for (const note of [NOTE.ENCORE, NOTE.DIFFICILE, NOTE.BIEN, NOTE.FACILE]) {
    const f = noter(fiche, note, maintenant, retention);
    out[note] = note === NOTE.ENCORE ? 0 : intervalle(f.s, retention);
  }
  return out;
}

export const estDue = (fiche, maintenant = Date.now()) =>
  !fiche || fiche.etat === ETAT.NOUVEAU || !fiche.echeance || fiche.echeance <= maintenant;

/** Libelle court d'un intervalle en jours. */
export function libelleIntervalle(jours) {
  if (jours <= 0) return '10 min';
  if (jours === 1) return '1 jour';
  if (jours < 31) return `${jours} jours`;
  if (jours < 365) return `${Math.round(jours / 30)} mois`;
  const ans = jours / 365;
  return `${ans.toFixed(ans < 10 ? 1 : 0)} ans`;
}

export const PARAMETRES = W;
