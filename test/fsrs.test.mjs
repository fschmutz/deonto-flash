// Comportement du planificateur FSRS-6. On ne teste pas des valeurs numeriques exactes,
// mais les invariants qui rendent la revision utilisable.

import test from 'node:test';
import assert from 'node:assert/strict';
import { ETAT, NOTE, apercu, estDue, ficheNeuve, intervalle, libelleIntervalle, noter, retrievabilite } from '../js/fsrs.js';

const JOUR = 86400000;

test('une fiche neuve est due immédiatement', () => {
  const f = ficheNeuve();
  assert.equal(f.etat, ETAT.NOUVEAU);
  assert.ok(estDue(f));
});

test('la retrievabilité décroît avec le temps et vaut 1 à l’instant de la révision', () => {
  const s = 10;
  assert.equal(retrievabilite(0, s), 1);
  const r1 = retrievabilite(5, s);
  const r2 = retrievabilite(30, s);
  assert.ok(r1 < 1 && r1 > 0);
  assert.ok(r2 < r1, 'la mémoire ne remonte pas toute seule');
});

test('l’intervalle atteint la rétention cible', () => {
  for (const s of [1, 5, 30, 200]) {
    const j = intervalle(s, 0.9);
    const r = retrievabilite(j, s);
    assert.ok(Math.abs(r - 0.9) < 0.05, `stabilité ${s} : rétention ${r.toFixed(3)} à ${j} jours`);
  }
});

test('une rétention plus exigeante raccourcit l’intervalle', () => {
  assert.ok(intervalle(50, 0.95) < intervalle(50, 0.9));
  assert.ok(intervalle(50, 0.9) < intervalle(50, 0.8));
});

test('les quatre notes sont ordonnées : Encore < Difficile < Bien < Facile', () => {
  const t0 = Date.now();
  let f = noter(ficheNeuve(), NOTE.BIEN, t0);
  const plusTard = t0 + 10 * JOUR;
  const i = {};
  for (const n of [NOTE.DIFFICILE, NOTE.BIEN, NOTE.FACILE]) {
    i[n] = intervalle(noter(f, n, plusTard).s);
  }
  assert.ok(i[NOTE.DIFFICILE] < i[NOTE.BIEN], 'Difficile doit revenir avant Bien');
  assert.ok(i[NOTE.BIEN] < i[NOTE.FACILE], 'Bien doit revenir avant Facile');
  const apresEchec = noter(f, NOTE.ENCORE, plusTard);
  assert.ok(apresEchec.s <= f.s, 'un oubli ne peut pas augmenter la stabilité');
});

test('une fiche ratée revient dans la session, pas dans plusieurs jours', () => {
  const t0 = Date.now();
  const f = noter(noter(ficheNeuve(), NOTE.BIEN, t0), NOTE.ENCORE, t0 + 20 * JOUR);
  assert.equal(f.etat, ETAT.REAPPRENTISSAGE);
  assert.ok(f.echeance - (t0 + 20 * JOUR) <= 15 * 60 * 1000, 'échéance trop lointaine après un oubli');
  assert.equal(f.ratees, 1);
});

test('la difficulté reste bornée entre 1 et 10 quoi qu’il arrive', () => {
  let f = ficheNeuve();
  let t = Date.now();
  for (let i = 0; i < 40; i += 1) {
    f = noter(f, NOTE.ENCORE, t);
    t += JOUR;
    assert.ok(f.d >= 1 && f.d <= 10, `difficulté hors bornes : ${f.d}`);
  }
  for (let i = 0; i < 40; i += 1) {
    f = noter(f, NOTE.FACILE, t);
    t += 30 * JOUR;
    assert.ok(f.d >= 1 && f.d <= 10, `difficulté hors bornes : ${f.d}`);
  }
});

test('des réponses « Bien » répétées allongent progressivement l’intervalle', () => {
  let f = ficheNeuve();
  let t = Date.now();
  let precedent = 0;
  for (let i = 0; i < 8; i += 1) {
    f = noter(f, NOTE.BIEN, t);
    const j = intervalle(f.s);
    assert.ok(j >= precedent, `intervalle non croissant : ${precedent} puis ${j}`);
    precedent = j;
    t = f.echeance;
  }
  assert.ok(precedent > 30, `après huit révisions réussies, l’intervalle devrait dépasser un mois (${precedent} jours)`);
});

test('une reprise le même jour ne fait pas exploser la stabilité', () => {
  const t0 = Date.now();
  const f1 = noter(ficheNeuve(), NOTE.BIEN, t0);
  const f2 = noter(f1, NOTE.BIEN, t0 + 60 * 1000);
  assert.ok(f2.s < f1.s * 3, 'la reprise immédiate ne doit pas valoir une révision à échéance');
});

test('l’aperçu propose les quatre notes', () => {
  const a = apercu(ficheNeuve());
  assert.deepEqual(Object.keys(a).map(Number).sort(), [1, 2, 3, 4]);
  assert.equal(a[NOTE.ENCORE], 0);
  assert.ok(a[NOTE.FACILE] >= a[NOTE.BIEN]);
});

test('les libellés d’intervalle sont lisibles', () => {
  assert.equal(libelleIntervalle(0), '10 min');
  assert.equal(libelleIntervalle(1), '1 jour');
  assert.equal(libelleIntervalle(12), '12 jours');
  assert.match(libelleIntervalle(60), /mois$/);
  assert.match(libelleIntervalle(800), /ans$/);
});

test('une fiche révisée n’est pas due avant son échéance', () => {
  const t0 = Date.now();
  const f = noter(ficheNeuve(), NOTE.FACILE, t0);
  assert.ok(!estDue(f, t0 + 60 * 1000), 'une fiche facile ne doit pas revenir dans la minute');
  assert.ok(estDue(f, f.echeance + 1));
});
