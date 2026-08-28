// Persistance. Le premier test couvre une regression reelle : la fusion de l'etat charge
// avec le modele vide effacait les dictionnaires a cles dynamiques, donc toute la
// progression, a chaque rechargement de la page.

import test from 'node:test';
import assert from 'node:assert/strict';
import { fusionner } from '../js/store.js';

const VIDE = () => ({
  profil: { prenom: '' },
  theme: 'encre',
  retention: 0.9,
  fiches: {},
  qcm: {},
  plans: {},
  oraux: [],
  vus: {},
  xp: 0,
  serie: { jours: 0, dernier: null }
});

test('la progression survit à un rechargement', () => {
  const enregistre = {
    theme: 'papier',
    xp: 640,
    fiches: {
      'secret-professionnel#0': { etat: 2, d: 5.2, s: 31, revue: 1, dus: 4, ratees: 1, echeance: 2 },
      'confraternite#7': { etat: 3, d: 8.1, s: 0.4, revue: 3, dus: 9, ratees: 5, echeance: 4 }
    },
    qcm: { 'honoraires?2': { vues: 6, justes: 5 } },
    plans: { 'les-honoraires': { faits: 3, dernier: 5 } },
    vus: { 'secret-professionnel': 4 },
    oraux: [{ sujet: 'confraternite', note: 13, duree: 1700000, date: 6 }],
    serie: { jours: 9, dernier: 20000 }
  };

  const relu = fusionner(VIDE(), enregistre);

  assert.equal(Object.keys(relu.fiches).length, 2, 'les fiches ont été effacées');
  assert.deepEqual(relu.fiches['secret-professionnel#0'], enregistre.fiches['secret-professionnel#0']);
  assert.deepEqual(relu.qcm, enregistre.qcm, 'les compteurs de QCM ont été effacés');
  assert.deepEqual(relu.plans, enregistre.plans, 'les plans travaillés ont été effacés');
  assert.deepEqual(relu.vus, enregistre.vus, 'les sujets ouverts ont été effacés');
  assert.deepEqual(relu.oraux, enregistre.oraux, 'l’historique des oraux a été effacé');
  assert.equal(relu.xp, 640);
  assert.equal(relu.theme, 'papier');
  assert.deepEqual(relu.serie, { jours: 9, dernier: 20000 });
});

test('les champs absents reprennent leur valeur par défaut', () => {
  const relu = fusionner(VIDE(), { xp: 12 });
  assert.equal(relu.xp, 12);
  assert.equal(relu.theme, 'encre');
  assert.equal(relu.retention, 0.9);
  assert.deepEqual(relu.fiches, {});
  assert.deepEqual(relu.oraux, []);
  assert.deepEqual(relu.serie, { jours: 0, dernier: null });
});

test('un état corrompu ne fait pas tomber l’application', () => {
  for (const corrompu of [null, undefined, 42, 'texte', [], { fiches: 'pas un objet' }, { oraux: 'ni un tableau' }, { serie: 5 }]) {
    const relu = fusionner(VIDE(), corrompu);
    assert.equal(typeof relu, 'object');
    assert.equal(typeof relu.fiches, 'object');
    assert.ok(Array.isArray(relu.oraux));
    assert.equal(typeof relu.serie.jours, 'number');
  }
});

test('la série de jours n’est pas remise à zéro au rechargement', () => {
  // `serie.dernier` vaut null par defaut : comparer les types avec la valeur par defaut
  // rejetait le numero de jour enregistre, et la serie repartait de zero a chaque visite.
  const relu = fusionner(VIDE(), { serie: { jours: 12, dernier: 20321 } });
  assert.equal(relu.serie.dernier, 20321);
  assert.equal(relu.serie.jours, 12);
  assert.equal(fusionner(VIDE(), { serie: { jours: 1, dernier: { faux: 1 } } }).serie.dernier, null);
});

test('une clé inconnue dans le stockage est ignorée', () => {
  const relu = fusionner(VIDE(), { xp: 5, inattendu: { danger: true } });
  assert.equal(relu.inattendu, undefined);
  assert.equal(relu.xp, 5);
});

test('le type d’un champ scalaire est vérifié', () => {
  const relu = fusionner(VIDE(), { xp: 'beaucoup', theme: 12, retention: 'haute' });
  assert.equal(relu.xp, 0, 'un xp non numérique doit être ignoré');
  assert.equal(relu.theme, 'encre');
  assert.equal(relu.retention, 0.9);
});
