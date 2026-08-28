// Vue Progression : maitrise par parcours, historique des oraux, sceaux, echeances.

import { BLOCS, CARTES, STATS, SUJET_PAR_ID } from './data/index.js';
import * as S from './store.js';
import { h, jauge, pct, section, vide, court } from './ui.js';

const JOUR_MS = 86400000;

export function vueProgression() {
  const etat = S.lire();
  const note = S.noteBlanche();
  const admis = note >= 12;
  const taux = S.tauxQcm();
  const globale = S.maitriseGlobale();
  const compteurs = S.compteursRevision();

  return h(
    'div',
    { class: 'vue', dataset: { titre: 'Progression' } },
    h('h1', { class: 'titre-vue', text: 'Progression' }),
    h('p', { class: 'sous-titre', text: 'Tout est calculé sur cet appareil, à partir de vos réponses.' }),

    h(
      'div',
      { class: 'bandeau' },
      h(
        'div',
        { class: 'bandeau-haut' },
        h('div', {}, h('div', { class: 'rang', text: 'Note blanche' }), h('div', { class: 'rang-xp', text: 'estimation, barre d’admission à 12' })),
        h('div', { class: `note-blanche ${admis ? 'ok' : 'ko'}` }, h('b', { text: note.toFixed(1) }), h('span', { class: 'rang-xp', text: '/ 20' }))
      ),
      h('div', { class: `barre-12 ${admis ? 'ok' : ''}` }, h('i', { style: `width:${Math.min(100, (note / 20) * 100).toFixed(1)}%` })),
      h(
        'div',
        { class: 'chiffres' },
        h('div', { class: 'chiffre' }, h('b', { text: pct(globale) }), h('span', { text: 'maîtrise fiches' })),
        h('div', { class: 'chiffre' }, h('b', { text: taux === null ? '–' : pct(taux) }), h('span', { text: 'réussite QCM' })),
        h('div', { class: 'chiffre' }, h('b', { text: String(etat.oraux.length) }), h('span', { text: 'oraux' }))
      ),
      h('p', { class: 'avertissement', text: 'Pondération : 50 % la maîtrise des fiches, 20 % la réussite aux QCM, 30 % la moyenne de vos cinq derniers oraux. Les critères d’oral sont auto‑évalués : cette note vaut ce que vaut votre sévérité.' })
    ),

    section('Les six parcours'),
    h(
      'div',
      { class: 'liste-lignes' },
      BLOCS.map((b) => {
        const part = S.maitriseBloc(b.id);
        return h(
          'a',
          { class: 'sujet', href: `#/bloc/${b.id}`, style: `--c:var(${b.couleur})` },
          h('span', { class: 'sujet-n', text: `0${b.n}` }),
          h('span', { class: 'sujet-nom', text: b.court }),
          h('span', { class: 'mini' }, h('i', { style: `width:${(part * 100).toFixed(1)}%` })),
          h('span', { class: 'val', text: pct(part) })
        );
      })
    ),

    section('Sceaux', `${S.sceaux().filter((x) => x.acquis).length}/${BLOCS.length}`),
    h(
      'div',
      { class: 'etiquettes' },
      S.sceaux().map((sc) => {
        const bloc = BLOCS.find((b) => b.id === sc.bloc);
        return h('span', { class: `sceau ${sc.acquis ? '' : 'gris'}`, style: `--c:var(${bloc.couleur})` }, sc.acquis ? '✦' : '◇', ` ${sc.nom}`);
      })
    ),
    h('p', { class: 'avertissement', text: 'Un sceau est acquis lorsque 80 % des fiches du parcours ont atteint une stabilité de trois semaines.' }),

    section('Oraux passés', String(etat.oraux.length)),
    etat.oraux.length ? blocOraux(etat.oraux) : vide('Aucun oral passé.', 'C’est l’exercice qui compte le plus : trente minutes, sans préparation, à voix haute.', h('a', { class: 'btn principal', href: '#/oral', text: 'Passer un oral' })),

    section('Charge à venir'),
    blocEcheances(compteurs),

    section('Couverture du programme'),
    h(
      'div',
      { class: 'carte' },
      h('div', { class: 'ligne' }, h('span', { class: 'nom', text: 'Sujets ouverts' }), h('span', { class: 'val', text: `${S.sujetsRevus()} / ${STATS.sujets}` })),
      jauge(S.sujetsRevus() / STATS.sujets),
      h('p', { class: 'avertissement', text: `Le programme compte ${STATS.sujets} sujets, ${STATS.cartes} fiches, ${STATS.qcm} questions à choix multiple, ${STATS.cas} cas pratiques et ${STATS.jury} questions de jury.` })
    ),

    h('div', { class: 'actions' }, h('a', { class: 'btn', href: '#/apropos', text: 'Sources, limites et données' }))
  );
}

function blocOraux(oraux) {
  const derniers = oraux.slice(-24);
  const max = 20;
  return h(
    'div',
    { class: 'carte' },
    h(
      'div',
      { class: 'histo', role: 'img', 'aria-label': `Historique des ${derniers.length} derniers oraux` },
      derniers.map((o) => h('i', { class: o.note >= 12 ? '' : 'echec', style: `height:${Math.max(4, (o.note / max) * 100)}%`, title: `${o.note}/20` }))
    ),
    h('p', { class: 'avertissement', text: 'Barre dorée : admis. Barre rouge : sous 12/20.' }),
    h(
      'div',
      { class: 'liste-lignes', style: 'margin-top:14px' },
      [...oraux].reverse().slice(0, 6).map((o) => {
        const sujet = SUJET_PAR_ID.get(o.sujet);
        return h(
          'div',
          { class: 'ligne' },
          h('span', { class: 'nom', text: sujet ? court(sujet.titre, 52) : o.sujet }),
          h('span', { class: 'val', text: new Date(o.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) }),
          h('span', { class: 'val', style: o.note >= 12 ? 'color:var(--succes)' : 'color:var(--alerte)', text: `${o.note}/20` })
        );
      })
    )
  );
}

function blocEcheances(compteurs) {
  const maintenant = Date.now();
  const seaux = [0, 0, 0, 0]; // aujourd'hui, 7 jours, 30 jours, plus tard
  for (const carte of CARTES) {
    const f = S.lire().fiches[carte.id];
    if (!f || !f.echeance) continue;
    const jours = (f.echeance - maintenant) / JOUR_MS;
    if (jours <= 0) seaux[0] += 1;
    else if (jours <= 7) seaux[1] += 1;
    else if (jours <= 30) seaux[2] += 1;
    else seaux[3] += 1;
  }
  const lignes = [
    ['Échues maintenant', compteurs.dues],
    ['Jamais vues', compteurs.neuves],
    ['Dans les 7 jours', seaux[1]],
    ['Dans le mois', seaux[2]],
    ['Au‑delà', seaux[3]]
  ];
  return h(
    'div',
    { class: 'carte' },
    h('div', { class: 'liste-lignes' }, lignes.map(([nom, n]) => h('div', { class: 'ligne' }, h('span', { class: 'nom', text: nom }), h('span', { class: 'val', text: String(n) })))),
    h('p', { class: 'avertissement', text: 'Les échéances sont calculées par FSRS‑6 : une fiche revient le jour où la probabilité de vous en souvenir descend à 90 %.' })
  );
}
