// Programme officiel de l'examen : 6 blocs, 34 sujets.
// L'ordre et les intitules suivent l'annexe de l'arrete du 30 avril 2012 fixant le programme
// et les modalites de l'examen de controle des connaissances en deontologie et reglementation
// professionnelle. Epreuve : expose-discussion de 30 minutes, sans preparation, devant un jury.
// Admission a 12/20.

import { REGLES } from './regles.js';
import { ORGANISATION } from './organisation.js';
import { EXERCICE_A } from './exercice-a.js';
import { EXERCICE_B } from './exercice-b.js';
import { STRUCTURES } from './structures.js';
import { HONORAIRES } from './honoraires.js';
import { RESPONSABILITE } from './responsabilite.js';

export const BLOCS = [
  {
    id: 'regles',
    n: 1,
    titre: 'Les règles déontologiques',
    court: 'Règles déontologiques',
    sceau: 'Le Serment',
    couleur: '--b1',
    resume: 'Le socle : principes essentiels, secret, contradictoire, confraternité, conflits d’intérêts, succession, blanchiment, code européen.',
    sujets: REGLES
  },
  {
    id: 'organisation',
    n: 2,
    titre: 'Organisation professionnelle',
    court: 'Organisation',
    sceau: 'Le Bâton',
    couleur: '--b2',
    resume: 'Qui décide, qui contrôle, qui représente : conseil de l’ordre, bâtonnier, Conseil national des barreaux.',
    sujets: ORGANISATION
  },
  {
    id: 'exercice',
    n: 3,
    titre: 'Exercice professionnel',
    court: 'Exercice',
    sceau: 'La Robe',
    couleur: '--b3',
    resume: 'Le bloc le plus vaste : domicile, bureaux secondaires, champ d’activité, incompatibilités, publicité, formation, spécialisation, différends, discipline, omission, liquidation.',
    sujets: [...EXERCICE_A, ...EXERCICE_B]
  },
  {
    id: 'structures',
    n: 4,
    titre: 'Les modes et structures juridiques d’exercice de la profession',
    court: 'Structures',
    sceau: 'L’Épitoge',
    couleur: '--b4',
    resume: 'Individuel, collaborateur, associé, structures d’exercice, interprofessionnalité.',
    sujets: STRUCTURES
  },
  {
    id: 'honoraires',
    n: 5,
    titre: 'Les honoraires, la comptabilité et la fiscalité',
    court: 'Honoraires',
    sceau: 'Le Rabat',
    couleur: '--b5',
    resume: 'Argent et transparence : honoraires, comptabilité, fiscalité, maniement de fonds et CARPA.',
    sujets: HONORAIRES
  },
  {
    id: 'responsabilite',
    n: 6,
    titre: 'La responsabilité civile professionnelle',
    court: 'Responsabilité',
    sceau: 'La Balance',
    couleur: '--b6',
    resume: 'Assurance obligatoire, réclamations déontologiques et indemnitaires, mesures préventives.',
    sujets: RESPONSABILITE
  }
];

/** Tous les sujets, à plat, enrichis de leur bloc d'appartenance. */
export const SUJETS = BLOCS.flatMap((bloc) =>
  bloc.sujets.map((s, i) => ({ ...s, bloc: bloc.id, blocTitre: bloc.titre, blocN: bloc.n, rang: i + 1 }))
);

export const SUJET_PAR_ID = new Map(SUJETS.map((s) => [s.id, s]));

/** Identifiant stable d'une carte, utilisé comme clé de planification FSRS. */
export const carteId = (sujetId, index) => `${sujetId}#${index}`;

/** Toutes les fiches, à plat, avec leur identifiant de planification. */
export const CARTES = SUJETS.flatMap((s) =>
  s.cartes.map((c, i) => ({ ...c, id: carteId(s.id, i), sujet: s.id, sujetTitre: s.titre, bloc: s.bloc }))
);

export const QCM = SUJETS.flatMap((s) =>
  s.qcm.map((q, i) => ({ ...q, id: `${s.id}?${i}`, sujet: s.id, sujetTitre: s.titre, bloc: s.bloc }))
);

export const CAS = SUJETS.flatMap((s) => {
  const out = [];
  if (s.cas) {
    out.push({
      ...s.cas,
      id: `${s.id}!cas`,
      sujet: s.id,
      sujetTitre: s.titre,
      bloc: s.bloc
    });
  }
  if (s.cas2) {
    out.push({
      ...s.cas2,
      id: `${s.id}!cas2`,
      sujet: s.id,
      sujetTitre: s.titre,
      bloc: s.bloc
    });
  }
  return out;
});

/**
 * Melange les options d'un QCM. La bonne reponse est majoritairement redigee en deuxieme
 * position dans les donnees : sans ce melange, sa place deviendrait un indice.
 * @returns {{options: string[], bonne: number}} options melangees et nouvel index correct
 */
export function optionsMelangees(q, hasard = Math.random) {
  const paires = q.o.map((texte, i) => ({ texte, i }));
  for (let i = paires.length - 1; i > 0; i -= 1) {
    const j = Math.floor(hasard() * (i + 1));
    [paires[i], paires[j]] = [paires[j], paires[i]];
  }
  return {
    options: paires.map((p) => p.texte),
    bonne: paires.findIndex((p) => p.i === q.b)
  };
}

export const STATS = {
  blocs: BLOCS.length,
  sujets: SUJETS.length,
  cartes: CARTES.length,
  qcm: QCM.length,
  cas: CAS.length,
  jury: SUJETS.reduce((n, s) => n + s.jury.length, 0)
};
