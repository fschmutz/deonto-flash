// Simulateur d'oral : tirage au sort, trente minutes sans preparation, questions de jury,
// puis grille d'auto-evaluation notee sur 20. L'admission est prononcee a 12/20.

import { BLOCS, SUJETS, SUJET_PAR_ID } from './data/index.js';
import * as S from './store.js';
import { auHasard, chronometre, h, melanger, mmss, vide } from './ui.js';
import { bandeauRecompense, celebrer } from './celebration.js';

const DUREE = 30 * 60 * 1000;

const PHASES = [
  { nom: 'Annonce', fin: 2 * 60 * 1000, avant: 'Situez le sujet, donnez sa définition et ses textes, puis ', fort: 'annoncez votre plan à voix haute', apres: '. Deux parties, deux sous‑parties.' },
  { nom: 'Exposé', fin: 15 * 60 * 1000, avant: 'Déroulez votre plan. Citez les textes, datez les réformes, illustrez. ', fort: 'Ne lisez rien.', apres: '' },
  { nom: 'Discussion', fin: DUREE, avant: 'Le jury vous interroge. Révélez une question, répondez à voix haute, puis passez à la suivante. ', fort: 'Reconnaissez ce que vous ignorez', apres: ' plutôt que d’inventer.' }
];

const CRITERES = [
  { id: 'plan', nom: 'Annonce et tenue du plan', aide: 'Le plan a‑t‑il été annoncé clairement, puis suivi ?' },
  { id: 'textes', nom: 'Maîtrise des textes', aide: 'Loi de 1971, décret de 1991, RIN, code de déontologie : cités et datés ?' },
  { id: 'exactitude', nom: 'Exactitude juridique', aide: 'Délais, seuils, quorums, procédures : justes ?' },
  { id: 'jury', nom: 'Réponses aux questions', aide: 'Précises, argumentées, sans invention ?' },
  { id: 'forme', nom: 'Expression et gestion du temps', aide: 'Débit, posture, absence de lecture, tenue des trente minutes ?' }
];

const ECHELLE = ['0', '1', '2', '3', '4'];

function pool(filtre) {
  if (!filtre) return { sujets: SUJETS, titre: 'Programme complet' };
  if (filtre.startsWith('sujet:')) {
    const s = SUJET_PAR_ID.get(filtre.slice(6));
    return s ? { sujets: [s], titre: s.titre, impose: true } : null;
  }
  const bloc = BLOCS.find((b) => b.id === filtre);
  return bloc ? { sujets: SUJETS.filter((s) => s.bloc === bloc.id), titre: bloc.titre } : null;
}

export function vueOral(filtre) {
  const cible = pool(filtre);
  if (!cible) return h('div', { class: 'vue' }, vide('Sélection inconnue.', null, h('a', { class: 'btn', href: '#/oral', text: 'Tirer dans tout le programme' })));

  const racine = h('div', { class: 'vue', dataset: { titre: 'Oral' } });
  const contenu = h('div', {});
  racine.append(contenu);

  let arreterChrono = null;
  let sujet = null;

  const nettoyer = () => {
    if (arreterChrono) arreterChrono();
    arreterChrono = null;
  };

  // ---------- Écran 1 : le tirage ----------

  function ecranTirage() {
    nettoyer();
    const moyenne = S.moyenneOraux();
    contenu.replaceChildren(
      h('div', { class: 'fil', text: cible.titre }),
      h('h1', { class: 'titre-vue', text: 'Simulateur d’oral' }),
      h('p', { class: 'sous-titre', text: 'Exposé‑discussion de trente minutes devant un jury composé d’un avocat, d’un magistrat et d’un universitaire. Aucune préparation : le sujet est découvert à l’instant où il est tiré.' }),
      h(
        'div',
        { class: 'carte' },
        h('h3', { text: 'Avant de tirer' }),
        h('p', { text: 'Installez‑vous comme le jour de l’épreuve : debout ou assise, sans notes, sans écran ouvert sur une fiche. Parlez à voix haute du début à la fin. C’est l’exercice qui compte, pas le score.' }),
        moyenne !== null ? h('p', { class: 'avertissement', text: `Moyenne de vos ${Math.min(5, S.lire().oraux.length)} derniers oraux : ${moyenne.toFixed(1)}/20.` }) : null
      ),
      h(
        'div',
        { class: 'actions' },
        h('button', { type: 'button', class: 'btn principal', onclick: tirer }, cible.impose ? 'Commencer sur ce sujet' : 'Tirer un sujet au sort'),
        h('a', { class: 'btn', href: '#/', text: 'Retour' })
      ),
      cible.impose ? null : h('p', { class: 'avertissement', text: `Le tirage porte sur ${cible.sujets.length} sujets.` })
    );
  }

  function tirer() {
    sujet = auHasard(cible.sujets);
    ecranPret();
  }

  // ---------- Écran 2 : sujet tiré, chrono à l'arrêt ----------

  function ecranPret() {
    const bloc = BLOCS.find((b) => b.id === sujet.bloc);
    contenu.replaceChildren(
      h(
        'div',
        { class: 'tirage' },
        h('div', { class: 'fil', text: `Sujet tiré · ${bloc.court}` }),
        h('h2', { text: sujet.titre }),
        h('p', { class: 'avertissement', text: 'Le chronomètre démarre au clic. Aucune préparation n’est prévue par les textes.' })
      ),
      h(
        'div',
        { class: 'actions' },
        h('button', { type: 'button', class: 'btn principal', onclick: demarrer }, 'Démarrer les 30 minutes'),
        cible.impose ? null : h('button', { type: 'button', class: 'btn', onclick: tirer }, 'Retirer un autre sujet')
      )
    );
  }

  // ---------- Écran 3 : l'épreuve ----------

  function demarrer() {
    const debut = Date.now();
    const questions = melanger(sujet.jury);
    let revelees = 0;

    const chrono = h('div', { class: 'chrono', text: mmss(DUREE) });
    const sousChrono = h('div', { class: 'chrono-sous', text: 'Annoncez votre plan' });
    const phases = h('div', { class: 'phases' });
    const consigne = h('div', { class: 'consigne' });
    const zoneQuestions = h('div', {});
    const boutonQuestion = h('button', { type: 'button', class: 'btn pleine', onclick: revelerQuestion }, 'Révéler une question du jury');
    const boutonFin = h('button', { type: 'button', class: 'btn', onclick: () => ecranEvaluation(Date.now() - debut) }, 'Terminer et m’évaluer');

    function majPhases(ecoule) {
      phases.replaceChildren(
        ...PHASES.map((p, i) => {
          const debutPhase = i === 0 ? 0 : PHASES[i - 1].fin;
          const active = ecoule >= debutPhase && ecoule < p.fin;
          const faite = ecoule >= p.fin;
          return h('div', { class: `phase ${active ? 'active' : ''} ${faite ? 'faite' : ''}` }, h('i'), p.nom);
        })
      );
      const courante = PHASES.find((p) => ecoule < p.fin) || PHASES[PHASES.length - 1];
      consigne.replaceChildren(courante.avant, h('strong', { text: courante.fort }), courante.apres);
      sousChrono.textContent = courante.nom === 'Discussion' ? 'Discussion avec le jury' : courante.nom === 'Exposé' ? 'Exposé' : 'Annoncez votre plan';
      boutonQuestion.disabled = revelees >= questions.length;
      boutonQuestion.textContent = revelees >= questions.length ? 'Toutes les questions ont été posées' : `Révéler une question du jury (${revelees}/${questions.length})`;
      // Pendant l'epreuve, l'action attendue est de repondre au jury, pas de s'arreter :
      // le poids visuel ne bascule sur « Terminer » qu'une fois le temps ecoule.
      const fini = ecoule >= DUREE;
      boutonQuestion.classList.toggle('principal', courante.nom === 'Discussion' && !boutonQuestion.disabled && !fini);
      boutonFin.classList.toggle('principal', fini);
    }

    function revelerQuestion() {
      if (revelees >= questions.length) return;
      const q = questions[revelees];
      revelees += 1;
      zoneQuestions.append(
        h(
          'details',
          { class: 'repli jury-q' },
          h('summary', {}, `Question ${revelees} · ${q.q}`),
          h('div', {}, h('p', { class: 'avertissement', text: 'Répondez à voix haute avant d’ouvrir.' }), h('p', { text: q.r }))
        )
      );
      majPhases(Date.now() - debut);
    }

    contenu.replaceChildren(
      h('div', { class: 'fil', text: 'Épreuve en cours' }),
      h('h2', { style: 'margin-bottom:14px', text: sujet.titre }),
      chrono,
      sousChrono,
      phases,
      consigne,
      h('div', { class: 'actions' }, boutonQuestion),
      zoneQuestions,
      h(
        'div',
        { class: 'actions' },
        boutonFin,
        h('button', { type: 'button', class: 'btn', onclick: () => { nettoyer(); ecranTirage(); } }, 'Abandonner')
      )
    );

    majPhases(0);
    nettoyer();
    arreterChrono = chronometre({
      duree: DUREE,
      surTic: ({ ecoule, restant }) => {
        chrono.textContent = mmss(restant);
        chrono.classList.toggle('alerte', restant <= 2 * 60 * 1000);
        majPhases(ecoule);
      },
      surFin: () => {
        chrono.textContent = '00:00';
        sousChrono.textContent = 'Temps écoulé';
        majPhases(DUREE);
      }
    });
  }

  // ---------- Écran 4 : auto-évaluation ----------

  function ecranEvaluation(duree) {
    nettoyer();
    const notes = Object.fromEntries(CRITERES.map((c) => [c.id, null]));
    const zone = h('div', { class: 'carte' });
    const bouton = h('button', { type: 'button', class: 'btn principal', disabled: true, onclick: valider }, 'Voir ma note');

    function rendre() {
      zone.replaceChildren(
        ...CRITERES.map((c) =>
          h(
            'div',
            { class: 'critere' },
            h('h4', { text: c.nom }),
            h('p', { text: c.aide }),
            h(
              'div',
              { class: 'echelle', role: 'group', 'aria-label': c.nom },
              ECHELLE.map((v) =>
                h('button', {
                  type: 'button',
                  'aria-pressed': String(notes[c.id] === Number(v)),
                  onclick: () => {
                    notes[c.id] = Number(v);
                    bouton.disabled = CRITERES.some((x) => notes[x.id] === null);
                    rendre();
                  },
                  text: v
                })
              )
            )
          )
        )
      );
    }

    function valider() {
      const total = CRITERES.reduce((n, c) => n + notes[c.id], 0);
      const depart = S.capturerJalons();
      S.enregistrerOral(sujet.id, total, duree);
      ecranResultat(total, duree, S.jalonsDepuis(depart));
    }

    contenu.replaceChildren(
      h('div', { class: 'fil', text: `Durée : ${mmss(duree)}` }),
      h('h1', { class: 'titre-vue', text: 'Auto‑évaluation' }),
      h('p', { class: 'sous-titre', text: 'Cinq critères, notés de 0 à 4. Soyez sévère : une note complaisante fausse la seule mesure dont vous disposez.' }),
      zone,
      h('div', { class: 'actions' }, bouton)
    );
    rendre();
  }

  // ---------- Écran 5 : résultat ----------

  function ecranResultat(total, duree, jalons = { points: 0, sceaux: [] }) {
    const admis = total >= 12;
    const bloc = h(
      'div',
      { class: 'resultat carte' },
      h('div', { class: `grosse-note ${admis ? 'ok' : 'ko'}`, text: `${total}/20` }),
      h('div', { class: 'verdict-texte', text: admis ? 'Au‑dessus de la barre d’admission.' : 'Sous la barre de 12/20.' }),
      h('p', { class: 'avertissement', text: `${sujet.titre} · ${mmss(duree)}` }),
      bandeauRecompense(jalons)
    );
    contenu.replaceChildren(
      bloc,
      h(
        'div',
        { class: 'carte' },
        h('h3', { text: 'Le plan que vous auriez pu suivre' }),
        sujet.plan.map((p) => h('div', { class: 'partie' }, h('h3', { text: p.t }), h('ul', {}, p.pts.map((x) => h('li', { text: x })))))
      ),
      h(
        'div',
        { class: 'actions' },
        h('button', { type: 'button', class: 'btn principal', onclick: () => { sujet = null; ecranTirage(); } }, 'Tirer un autre sujet'),
        h('a', { class: 'btn', href: `#/sujet/${sujet.id}`, text: 'Revoir la fiche complète' }),
        h('a', { class: 'btn', href: '#/progression', text: 'Progression' })
      )
    );
    if (jalons.rang || jalons.sceaux.length) celebrer('sceau', bloc);
    else if (admis) celebrer('franc', bloc);
  }

  if (cible.impose) {
    sujet = cible.sujets[0];
    ecranPret();
  } else {
    ecranTirage();
  }

  return { noeud: racine, nettoyer };
}
