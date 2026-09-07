// Tirage hybride et préférences QCM : priorité jamais vues → non acquises → acquises.

import test from 'node:test';
import assert from 'node:assert/strict';
import { estQcmAcquis, tirerSerieQcm, dureeQuestionMs, LONGUEURS_QCM } from '../js/qcm.js';
import { fusionner } from '../js/store.js';

test('règle d’acquisition : deux justes sans faute', () => {
  assert.equal(estQcmAcquis(undefined), false);
  assert.equal(estQcmAcquis({ vues: 0, justes: 0 }), false);
  assert.equal(estQcmAcquis({ vues: 1, justes: 1 }), false);
  assert.equal(estQcmAcquis({ vues: 2, justes: 2 }), true);
  assert.equal(estQcmAcquis({ vues: 3, justes: 2 }), false);
  assert.equal(estQcmAcquis({ vues: 5, justes: 5 }), true);
});

test('le tirage privilégie jamais vues puis non acquises', () => {
  const pool = [
    { id: 'a' },
    { id: 'b' },
    { id: 'c' },
    { id: 'd' },
    { id: 'e' }
  ];
  const stats = {
    b: { vues: 3, justes: 2 }, // non acquis (faute)
    c: { vues: 2, justes: 2 }, // acquis
    d: { vues: 4, justes: 4 }, // acquis
    e: { vues: 1, justes: 0 } // non acquis
  };
  // a jamais vue
  const serie = tirerSerieQcm(pool, stats, 5);
  assert.equal(serie.length, 5);
  const ids = serie.map((q) => q.id);
  // Les deux premiers bandes : a, puis {b,e}, puis {c,d}
  assert.equal(ids[0], 'a');
  assert.deepEqual(new Set(ids.slice(1, 3)), new Set(['b', 'e']));
  assert.deepEqual(new Set(ids.slice(3)), new Set(['c', 'd']));
});

test('le tirage plafonne à la taille du pool', () => {
  const pool = [{ id: '1' }, { id: '2' }];
  assert.equal(tirerSerieQcm(pool, {}, 100).length, 2);
  assert.equal(tirerSerieQcm(pool, {}, 0).length, 0);
});

test('recharge depuis les acquis quand le pool faible est vide', () => {
  const pool = [{ id: 'x' }, { id: 'y' }, { id: 'z' }];
  const stats = {
    x: { vues: 2, justes: 2 },
    y: { vues: 3, justes: 3 },
    z: { vues: 4, justes: 4 }
  };
  const serie = tirerSerieQcm(pool, stats, 3);
  assert.equal(serie.length, 3);
  assert.deepEqual(new Set(serie.map((q) => q.id)), new Set(['x', 'y', 'z']));
});

test('durée : 30 s sous 50, sinon choix ou sans chrono', () => {
  assert.equal(dureeQuestionMs(10, 45), 30_000);
  assert.equal(dureeQuestionMs(25, 60), 30_000);
  assert.equal(dureeQuestionMs(50, 45), 45_000);
  assert.equal(dureeQuestionMs(100, 60), 60_000);
  assert.equal(dureeQuestionMs(50, 0), null);
  assert.equal(dureeQuestionMs(100, null), null);
});

test('longueurs proposées', () => {
  assert.deepEqual(LONGUEURS_QCM, [10, 25, 50, 100]);
});

test('les préférences QCM survivent à la fusion', () => {
  const base = {
    profil: { prenom: '' },
    theme: 'encre',
    retention: 0.9,
    fiches: {},
    qcm: {},
    plans: {},
    oraux: [],
    vus: {},
    longueurQcm: 10,
    chronoQcm: 45,
    xp: 0,
    serie: { jours: 0, dernier: null }
  };
  const relu = fusionner(base, { longueurQcm: 50, chronoQcm: 0, xp: 3 });
  assert.equal(relu.longueurQcm, 50);
  assert.equal(relu.chronoQcm, 0);
  assert.equal(relu.xp, 3);
});
