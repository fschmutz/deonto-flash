// Integrite du corpus. Ces tests echouent si un sujet perd son plan, si une bonne reponse
// de QCM pointe hors de la liste d'options, ou si le programme officiel n'est plus couvert.

import test from 'node:test';
import assert from 'node:assert/strict';
import { BLOCS, CARTES, CAS, QCM, STATS, SUJETS, SUJET_PAR_ID, optionsMelangees } from '../js/data/index.js';

/**
 * Programme officiel : annexe de l'arrete du 30 avril 2012 fixant le programme et les
 * modalites de l'examen de controle des connaissances en deontologie et reglementation
 * professionnelle. Toute divergence doit faire echouer la suite.
 */
const PROGRAMME = {
  'Les règles déontologiques': [
    'Les principes essentiels de la profession d’avocat',
    'Le secret professionnel',
    'Le respect du contradictoire',
    'La confraternité',
    'Les conflits d’intérêts',
    'La succession d’avocats dans un même dossier',
    'La lutte contre le blanchiment des capitaux et le financement du terrorisme',
    'Le code de déontologie des avocats européens'
  ],
  'Organisation professionnelle': [
    'Rôle et compétences du conseil de l’ordre et du bâtonnier',
    'Rôle et compétences du Conseil national des barreaux'
  ],
  'Exercice professionnel': [
    'Le domicile professionnel',
    'Les bureaux secondaires',
    'Le champ d’activité professionnelle',
    'Les incompatibilités',
    'La publicité personnelle de l’avocat',
    'La formation continue',
    'La spécialisation',
    'Le règlement des différends entre avocats',
    'Les infractions disciplinaires',
    'La procédure disciplinaire',
    'L’omission, la suppléance et l’administration provisoire',
    'La liquidation judiciaire'
  ],
  'Les modes et structures juridiques d’exercice de la profession': [
    'L’avocat individuel',
    'Statut de l’avocat collaborateur libéral ou salarié',
    'L’avocat associé',
    'Les structures juridiques d’exercice de la profession d’avocat',
    'L’interprofessionnalité'
  ],
  'Les honoraires, la comptabilité et la fiscalité': [
    'Les honoraires',
    'La comptabilité',
    'La fiscalité de l’avocat',
    'Les maniements de fonds et le fonctionnement de la CARPA'
  ],
  'La responsabilité civile professionnelle': [
    'L’assurance de responsabilité civile professionnelle',
    'Les réclamations',
    'Les mesures préventives'
  ]
};

test('le programme officiel est couvert intégralement et dans l’ordre', () => {
  const attendus = Object.entries(PROGRAMME);
  assert.equal(BLOCS.length, attendus.length, 'nombre de blocs');
  attendus.forEach(([titre, sujets], i) => {
    assert.equal(BLOCS[i].titre, titre, `titre du bloc ${i + 1}`);
    assert.deepEqual(
      BLOCS[i].sujets.map((s) => s.titre),
      sujets,
      `sujets du bloc « ${titre} »`
    );
  });
  assert.equal(SUJETS.length, attendus.reduce((n, [, s]) => n + s.length, 0));
  assert.equal(SUJETS.length, 34);
});

test('chaque bloc porte les métadonnées attendues', () => {
  const numeros = new Set();
  const couleurs = new Set();
  for (const b of BLOCS) {
    assert.match(b.id, /^[a-z-]+$/, `identifiant du bloc ${b.titre}`);
    assert.ok(b.court && b.court.length <= 26, `libellé court du bloc ${b.titre}`);
    assert.ok(b.sceau, `sceau du bloc ${b.titre}`);
    assert.match(b.couleur, /^--b[1-6]$/, `couleur du bloc ${b.titre}`);
    assert.ok(b.resume.length > 40, `résumé du bloc ${b.titre}`);
    numeros.add(b.n);
    couleurs.add(b.couleur);
  }
  assert.equal(numeros.size, BLOCS.length, 'numéros de bloc uniques');
  assert.equal(couleurs.size, BLOCS.length, 'couleurs de bloc uniques');
});

test('les identifiants de sujet sont uniques et exploitables dans une adresse', () => {
  const vus = new Set();
  for (const s of SUJETS) {
    assert.match(s.id, /^[a-z0-9-]+$/, `identifiant « ${s.id} »`);
    assert.ok(!vus.has(s.id), `identifiant dupliqué : ${s.id}`);
    vus.add(s.id);
    assert.equal(SUJET_PAR_ID.get(s.id), s);
  }
});

test('chaque sujet est complet', () => {
  for (const s of SUJETS) {
    const ou = `sujet « ${s.titre} »`;
    assert.ok(s.sources.length >= 2, `${ou} : au moins deux sources`);
    assert.ok(s.accroche.length > 120, `${ou} : accroche trop courte`);
    assert.equal(s.plan.length, 2, `${ou} : le plan doit avoir deux parties`);
    for (const p of s.plan) {
      assert.ok(p.t.length > 8, `${ou} : intitulé de partie`);
      assert.ok(p.pts.length >= 3, `${ou} : au moins trois idées par partie`);
      for (const pt of p.pts) assert.ok(pt.length > 40, `${ou} : idée trop courte « ${pt} »`);
    }
    assert.ok(s.cles.length >= 6, `${ou} : au moins six points clés`);
    assert.ok(s.cartes.length >= 8, `${ou} : au moins huit fiches`);
    assert.ok(s.qcm.length >= 3, `${ou} : au moins trois QCM`);
    assert.ok(s.jury.length >= 5, `${ou} : au moins cinq questions de jury`);
    assert.ok(s.cas && s.cas.e && s.cas.r, `${ou} : cas pratique manquant`);
    assert.ok(s.cas.r.length > 200, `${ou} : analyse du cas trop courte`);
    assert.ok(Array.isArray(s.principes) && s.principes.length >= 1, `${ou} : principes rattachés`);
  }
});

test('chaque fiche a une question, une réponse et une source', () => {
  const ids = new Set();
  for (const c of CARTES) {
    assert.ok(!ids.has(c.id), `identifiant de fiche dupliqué : ${c.id}`);
    ids.add(c.id);
    assert.ok(c.q.length > 15, `question trop courte : « ${c.q} »`);
    assert.ok(c.r.length > 30, `réponse trop courte pour « ${c.q} »`);
    assert.ok(c.src && c.src.length > 3, `source manquante pour « ${c.q} »`);
    assert.ok(c.q.trim().endsWith('?') || c.q.trim().endsWith('.'), `question mal ponctuée : « ${c.q} »`);
  }
  assert.equal(CARTES.length, STATS.cartes);
});

test('chaque QCM a de deux à quatre options et une bonne réponse valide', () => {
  for (const q of QCM) {
    assert.ok(q.o.length >= 2 && q.o.length <= 4, `nombre d’options pour « ${q.q} »`);
    assert.equal(new Set(q.o).size, q.o.length, `options dupliquées pour « ${q.q} »`);
    assert.ok(Number.isInteger(q.b), `index de bonne réponse pour « ${q.q} »`);
    assert.ok(q.b >= 0 && q.b < q.o.length, `bonne réponse hors liste pour « ${q.q} »`);
    assert.ok(q.e && q.e.length > 25, `explication trop courte pour « ${q.q} »`);
  }
  assert.equal(QCM.length, STATS.qcm);
});

test('le mélange des options conserve la bonne réponse', () => {
  for (const q of QCM) {
    for (let essai = 0; essai < 20; essai += 1) {
      const { options, bonne } = optionsMelangees(q);
      assert.equal(options.length, q.o.length, `nombre d’options pour « ${q.q} »`);
      assert.deepEqual([...options].sort(), [...q.o].sort(), `options perdues pour « ${q.q} »`);
      assert.equal(options[bonne], q.o[q.b], `bonne réponse déplacée pour « ${q.q} »`);
    }
  }
});

test('le mélange répartit réellement la bonne réponse sur toutes les positions', () => {
  // Dans les donnees brutes, la bonne reponse est presque toujours en deuxieme position.
  // Sans melange a l'affichage, sa place serait un indice : on verifie que le melange corrige.
  const q = QCM.find((x) => x.o.length === 3);
  const positions = new Map();
  for (let i = 0; i < 600; i += 1) {
    const { bonne } = optionsMelangees(q);
    positions.set(bonne, (positions.get(bonne) || 0) + 1);
  }
  assert.equal(positions.size, 3, 'les trois positions doivent être atteintes');
  for (const [rang, n] of positions) {
    assert.ok(n > 120 && n < 280, `répartition déséquilibrée au rang ${rang} : ${n}/600`);
  }
});

test('les questions de jury ont une réponse développée', () => {
  for (const s of SUJETS) {
    for (const j of s.jury) {
      assert.ok(j.q.length > 20, `question de jury trop courte dans « ${s.titre} »`);
      assert.ok(j.r.length > 150, `réponse de jury trop courte dans « ${s.titre} » : « ${j.q} »`);
    }
  }
});

test('chaque sujet a un cas pratique et les compteurs sont cohérents', () => {
  assert.equal(CAS.length, SUJETS.length);
  assert.equal(STATS.sujets, SUJETS.length);
  assert.equal(STATS.blocs, BLOCS.length);
  assert.equal(
    STATS.jury,
    SUJETS.reduce((n, s) => n + s.jury.length, 0)
  );
});

test('aucun texte ne contient de caractère de contrôle ni d’espace insécable orphelin', () => {
  const parcourir = (valeur, chemin) => {
    if (typeof valeur === 'string') {
      assert.ok(!/[ --]/.test(valeur), `caractère de contrôle dans ${chemin}`);
      assert.ok(!/\s{3,}/.test(valeur), `espaces multiples dans ${chemin}`);
      assert.equal(valeur, valeur.trim(), `espaces en bordure dans ${chemin}`);
    } else if (Array.isArray(valeur)) valeur.forEach((v, i) => parcourir(v, `${chemin}[${i}]`));
    else if (valeur && typeof valeur === 'object') for (const [k, v] of Object.entries(valeur)) parcourir(v, `${chemin}.${k}`);
  };
  SUJETS.forEach((s) => parcourir(s, s.id));
});

test('les apostrophes sont typographiques dans les textes visibles', () => {
  const suspects = [];
  for (const s of SUJETS) {
    const blob = JSON.stringify({ t: s.titre, a: s.accroche, p: s.plan, c: s.cles, f: s.cartes, j: s.jury, k: s.cas });
    if (blob.includes("'")) suspects.push(s.id);
  }
  assert.deepEqual(suspects, [], `apostrophes droites dans : ${suspects.join(', ')}`);
});

test('aucun tiret cadratin dans les textes visibles', () => {
  // Regle d'ecriture du projet : la ponctuation francaise se fait aux deux-points,
  // a la virgule ou aux parentheses. Un tiret cadratin est un anglicisme typographique.
  const suspects = [];
  for (const s of SUJETS) {
    const blob = JSON.stringify({ t: s.titre, a: s.accroche, p: s.plan, c: s.cles, f: s.cartes, q: s.qcm, j: s.jury, k: s.cas });
    if (blob.includes('—')) suspects.push(s.id);
  }
  assert.deepEqual(suspects, [], `tirets cadratins dans : ${suspects.join(', ')}`);
});
