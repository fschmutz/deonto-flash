// Etat local. Tout reste dans le navigateur : rien n'est envoye nulle part.
// Une seule cle localStorage, versionnee, pour pouvoir migrer sans perdre la progression.

import { BLOCS, CARTES, SUJETS } from './data/index.js';
import { ETAT, ficheNeuve } from './fsrs.js';
import { LONGUEURS_QCM } from './qcm.js';

const CLE = 'deonto-flash:v1';
const JOUR_MS = 86400000;

/** Thème initial si aucune préférence n’a encore été enregistrée. */
export function themeSysteme() {
  try {
    if (typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: light)').matches) {
      return 'papier';
    }
  } catch {
    /* environnement sans matchMedia (tests Node) */
  }
  return 'encre';
}

const VIDE = () => ({
  profil: { prenom: '' },
  theme: 'encre',
  retention: 0.9,
  fiches: {}, // id de carte -> etat FSRS
  qcm: {}, // id de question -> { vues, justes }
  plans: {}, // id de sujet -> { faits, dernier }
  oraux: [], // { sujet, note, duree, date }
  vus: {}, // id de sujet -> nombre de consultations de la fiche
  longueurQcm: 10, // dernier choix 10 / 25 / 50 / 100
  chronoQcm: 45, // secondes par question pour les series >= 50 ; 0 = sans chrono
  xp: 0,
  serie: { jours: 0, dernier: null }
});

let etat = VIDE();
const abonnes = new Set();

// Ces champs sont des dictionnaires dont les cles sont creees a l'usage : identifiants de
// fiche, de question, de sujet. Les fusionner cle a cle avec un modele vide les viderait,
// et effacerait toute la progression a chaque rechargement.
const DICTIONNAIRES = new Set(['fiches', 'qcm', 'plans', 'vus']);

export function fusionner(base, charge) {
  if (!charge || typeof charge !== 'object' || Array.isArray(charge)) return base;
  const out = { ...base };
  for (const [cle, valeur] of Object.entries(charge)) {
    if (!(cle in base)) continue;
    const attendu = base[cle];
    if (DICTIONNAIRES.has(cle)) {
      out[cle] = valeur && typeof valeur === 'object' && !Array.isArray(valeur) ? { ...valeur } : attendu;
    } else if (Array.isArray(attendu)) {
      out[cle] = Array.isArray(valeur) ? valeur : attendu;
    } else if (attendu && typeof attendu === 'object') {
      out[cle] = fusionner(attendu, valeur);
    } else if (attendu === null) {
      // Champ nullable, comme le dernier jour d'activite : comparer les types avec la
      // valeur par defaut `null` rejetterait le nombre enregistre et remettrait la serie
      // a zero a chaque rechargement.
      out[cle] = valeur === null || typeof valeur === 'number' || typeof valeur === 'string' ? valeur : attendu;
    } else if (typeof valeur === typeof attendu) {
      out[cle] = valeur;
    }
  }
  return out;
}

export function charger() {
  try {
    const brut = localStorage.getItem(CLE);
    if (brut) etat = fusionner(VIDE(), JSON.parse(brut));
    else {
      etat = VIDE();
      etat.theme = themeSysteme();
    }
  } catch {
    etat = VIDE();
  }
  return etat;
}

function ecrire() {
  try {
    localStorage.setItem(CLE, JSON.stringify(etat));
  } catch {
    /* quota depasse ou stockage refuse : la session reste utilisable en memoire */
  }
  for (const fn of abonnes) fn(etat);
}

export const lire = () => etat;
export function abonner(fn) {
  abonnes.add(fn);
  return () => abonnes.delete(fn);
}

export function modifier(fn) {
  fn(etat);
  ecrire();
}

export function reinitialiser() {
  etat = VIDE();
  ecrire();
}

// --- Serie de jours -------------------------------------------------------

const jourDe = (ts) => Math.floor((ts - new Date(ts).getTimezoneOffset() * 60000) / JOUR_MS);

export function marquerActivite(maintenant = Date.now()) {
  const aujourdhui = jourDe(maintenant);
  const dernier = etat.serie.dernier;
  if (dernier === aujourdhui) return;
  etat.serie.jours = dernier === aujourdhui - 1 ? etat.serie.jours + 1 : 1;
  etat.serie.dernier = aujourdhui;
}

export const serieRompue = (maintenant = Date.now()) =>
  etat.serie.dernier !== null && jourDe(maintenant) - etat.serie.dernier > 1;

// --- Experience et rangs --------------------------------------------------

export const RANGS = [
  { seuil: 0, nom: 'Élève-avocat' },
  { seuil: 150, nom: 'Stagiaire' },
  { seuil: 400, nom: 'Collaborateur' },
  { seuil: 900, nom: 'Associé' },
  { seuil: 1800, nom: 'Bâtonnier' },
  { seuil: 3200, nom: 'Doyen de l’ordre' }
];

export function rang(xp = etat.xp) {
  let index = 0;
  for (let i = 0; i < RANGS.length; i += 1) if (xp >= RANGS[i].seuil) index = i;
  const actuel = RANGS[index];
  const suivant = RANGS[index + 1] || null;
  const base = actuel.seuil;
  const cible = suivant ? suivant.seuil : actuel.seuil;
  const part = suivant ? (xp - base) / (cible - base) : 1;
  return { nom: actuel.nom, index, suivant, part: Math.min(1, Math.max(0, part)), xp };
}

export function gagner(points, maintenant = Date.now()) {
  etat.xp += points;
  marquerActivite(maintenant);
}

// --- Maitrise -------------------------------------------------------------

const PALIER_MAITRISE = 21; // jours de stabilite consideres comme acquis

/** Maitrise d'une fiche : 0 si jamais vue, 1 quand la stabilite atteint le palier. */
function maitriseFiche(f) {
  if (!f || f.etat === ETAT.NOUVEAU || !(f.s > 0)) return 0;
  return Math.min(1, f.s / PALIER_MAITRISE);
}

export function maitriseSujet(sujetId) {
  const cartes = CARTES.filter((c) => c.sujet === sujetId);
  if (!cartes.length) return 0;
  const total = cartes.reduce((n, c) => n + maitriseFiche(etat.fiches[c.id]), 0);
  return total / cartes.length;
}

export function maitriseBloc(blocId) {
  const cartes = CARTES.filter((c) => c.bloc === blocId);
  if (!cartes.length) return 0;
  const total = cartes.reduce((n, c) => n + maitriseFiche(etat.fiches[c.id]), 0);
  return total / cartes.length;
}

export const maitriseGlobale = () =>
  CARTES.reduce((n, c) => n + maitriseFiche(etat.fiches[c.id]), 0) / CARTES.length;

/** Un sceau par bloc, decerne a 80 % de maitrise. */
export function sceaux() {
  return BLOCS.map((b) => ({ bloc: b.id, nom: b.sceau, part: maitriseBloc(b.id), acquis: maitriseBloc(b.id) >= 0.8 }));
}

// --- Reussite aux QCM -----------------------------------------------------

export function tauxQcm() {
  let vues = 0;
  let justes = 0;
  for (const v of Object.values(etat.qcm)) {
    vues += v.vues || 0;
    justes += v.justes || 0;
  }
  return vues ? justes / vues : null;
}

export function moyenneOraux(n = 5) {
  const derniers = etat.oraux.slice(-n);
  if (!derniers.length) return null;
  return derniers.reduce((s, o) => s + o.note, 0) / derniers.length;
}

/**
 * Note blanche : estimation sur 20, ponderee. Elle ne vaut que ce que valent les
 * auto-evaluations, et l'interface le dit explicitement.
 */
export function noteBlanche() {
  const m = maitriseGlobale();
  const q = tauxQcm();
  const o = moyenneOraux();
  const parts = [{ v: m * 20, p: 0.5 }];
  if (q !== null) parts.push({ v: q * 20, p: 0.2 });
  if (o !== null) parts.push({ v: o, p: 0.3 });
  const poids = parts.reduce((s, x) => s + x.p, 0);
  return parts.reduce((s, x) => s + x.v * x.p, 0) / poids;
}

// --- Files de revision ----------------------------------------------------

export const ficheDe = (carteId) => etat.fiches[carteId] || ficheNeuve();

export function fichesDues(filtreBloc = null, maintenant = Date.now()) {
  const pool = filtreBloc ? CARTES.filter((c) => c.bloc === filtreBloc) : CARTES;
  const dues = [];
  const neuves = [];
  for (const carte of pool) {
    const f = etat.fiches[carte.id];
    if (!f || f.etat === ETAT.NOUVEAU) neuves.push(carte);
    else if (!f.echeance || f.echeance <= maintenant) dues.push({ ...carte, echeance: f.echeance || 0 });
  }
  dues.sort((a, b) => a.echeance - b.echeance);
  return { dues, neuves };
}

/** Nombre de fiches nouvelles introduites au maximum dans une session. */
export const NEUVES_PAR_SESSION = 12;

/**
 * Ce que la prochaine session servira reellement : toutes les fiches echues, plus un
 * contingent limite de nouvelles. Annoncer les 300 fiches du corpus des le premier jour
 * serait a la fois faux et decourageant.
 */
export function compteursRevision(filtreBloc = null, maintenant = Date.now()) {
  const { dues, neuves } = fichesDues(filtreBloc, maintenant);
  const aServir = Math.min(neuves.length, NEUVES_PAR_SESSION);
  return {
    dues: dues.length,
    neuves: neuves.length,
    session: dues.length + aServir,
    total: dues.length + neuves.length
  };
}

export function prochaineEcheance(maintenant = Date.now()) {
  let min = Infinity;
  for (const carte of CARTES) {
    const f = etat.fiches[carte.id];
    if (f && f.echeance && f.echeance > maintenant) min = Math.min(min, f.echeance);
  }
  return Number.isFinite(min) ? min : null;
}

// --- Ecritures ------------------------------------------------------------

export function enregistrerFiche(carteId, fiche, note) {
  modifier((s) => {
    s.fiches[carteId] = fiche;
    gagner(note === 1 ? 1 : 2);
  });
}

export function enregistrerQcm(qId, juste) {
  modifier((s) => {
    const v = s.qcm[qId] || { vues: 0, justes: 0 };
    v.vues += 1;
    if (juste) v.justes += 1;
    s.qcm[qId] = v;
    gagner(juste ? 3 : 1);
  });
}

export function enregistrerPlan(sujetId, maintenant = Date.now()) {
  modifier((s) => {
    const v = s.plans[sujetId] || { faits: 0, dernier: null };
    v.faits += 1;
    v.dernier = maintenant;
    s.plans[sujetId] = v;
    gagner(8, maintenant);
  });
}

export function enregistrerOral(sujetId, note, duree, maintenant = Date.now()) {
  modifier((s) => {
    s.oraux.push({ sujet: sujetId, note, duree, date: maintenant });
    if (s.oraux.length > 100) s.oraux.splice(0, s.oraux.length - 100);
    gagner(40 + Math.round(note * 2), maintenant);
  });
}

export function marquerVu(sujetId) {
  modifier((s) => {
    s.vus[sujetId] = (s.vus[sujetId] || 0) + 1;
    marquerActivite();
  });
}

export const sujetsRevus = () => Object.keys(etat.vus).length;
export const totalSujets = () => SUJETS.length;

// --- Preferences QCM ------------------------------------------------------

export function longueurQcmChoisie() {
  const n = etat.longueurQcm;
  return LONGUEURS_QCM.includes(n) ? n : 10;
}

export function enregistrerLongueurQcm(n) {
  const v = LONGUEURS_QCM.includes(n) ? n : 10;
  modifier((s) => {
    s.longueurQcm = v;
  });
  return v;
}

export function chronoQcmChoisi() {
  const n = etat.chronoQcm;
  return n === 0 || n === 45 || n === 60 ? n : 45;
}

export function enregistrerChronoQcm(secondes) {
  const v = secondes === 0 || secondes === 45 || secondes === 60 ? secondes : 45;
  modifier((s) => {
    s.chronoQcm = v;
  });
  return v;
}

// --- Jalons ---------------------------------------------------------------
// Un rang ou un sceau se gagne au milieu d'un exercice, jamais sur un ecran dedie.
// On photographie l'etat avant, on compare apres, et l'ecran de resultat annonce
// exactement ce qui a ete franchi pendant la serie.

export function capturerJalons() {
  return {
    xp: etat.xp,
    rang: rang().index,
    sceaux: sceaux()
      .filter((s) => s.acquis)
      .map((s) => s.bloc)
  };
}

export function jalonsDepuis(avant) {
  const apres = capturerJalons();
  const gagnes = apres.sceaux.filter((b) => !avant.sceaux.includes(b));
  return {
    points: apres.xp - avant.xp,
    rang: apres.rang > avant.rang ? RANGS[apres.rang].nom : null,
    sceaux: gagnes.map((b) => (BLOCS.find((x) => x.id === b) || {}).sceau).filter(Boolean),
    serie: etat.serie.jours
  };
}
