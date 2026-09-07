// Tirage hybride des QCM : priorité aux questions jamais vues, puis non acquises,
// puis acquises en dernier recours. Logique pure, testable sans DOM.

/** Une question est acquise après au moins deux bonnes réponses, sans aucune faute. */
export function estQcmAcquis(stats) {
  if (!stats) return false;
  const justes = stats.justes || 0;
  const vues = stats.vues || 0;
  return justes >= 2 && justes === vues;
}

/** Mélange de Fisher-Yates sur une copie (évite de dépendre du module UI). */
export function melangerListe(liste) {
  const a = [...liste];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Tire une série de longueur `n` (plafonnée au pool) en trois bandes :
 * jamais vues → non acquises → acquises. Chaque bande est mélangée ; on ne
 * puise dans la suivante que lorsque la précédente est épuisée.
 */
export function tirerSerieQcm(pool, statsMap = {}, n = 10) {
  const longueur = Math.min(Math.max(0, Number(n) || 0), pool.length);
  const jamais = [];
  const faibles = [];
  const acquis = [];
  for (const q of pool) {
    const v = statsMap[q.id];
    if (!v || !(v.vues > 0)) jamais.push(q);
    else if (estQcmAcquis(v)) acquis.push(q);
    else faibles.push(q);
  }
  const file = [...melangerListe(jamais), ...melangerListe(faibles), ...melangerListe(acquis)];
  return file.slice(0, longueur);
}

export const LONGUEURS_QCM = [10, 25, 50, 100];

/** Chrono forcé à 30 s pour les séries courtes ; pour ≥ 50, on utilise le choix enregistré. */
export function dureeQuestionMs(longueur, chronoSecondes) {
  if (longueur < 50) return 30_000;
  if (!chronoSecondes || chronoSecondes <= 0) return null; // sans chronomètre
  return chronoSecondes * 1000;
}

export const CHRONOS_LONGS = [
  { secondes: 45, libelle: '45 secondes' },
  { secondes: 60, libelle: '60 secondes' },
  { secondes: 0, libelle: 'Sans chronomètre' }
];
