// Trois exercices courts : QCM chronometre, plans express, cas pratiques.

import { BLOCS, CAS, QCM, SUJETS, SUJET_PAR_ID, optionsMelangees } from './data/index.js';
import * as S from './store.js';
import { auHasard, chronometre, h, melanger, mmss, section, vide } from './ui.js';

const LONGUEUR_QCM = 10;
const SECONDES_PAR_QUESTION = 30000;
const DUREE_PLAN = 90 * 1000;
const LETTRES = ['A', 'B', 'C', 'D'];

// ---------- Sommaire des exercices ----------

export function vueEntrainement() {
  const taux = S.tauxQcm();
  return h(
    'div',
    { class: 'vue', dataset: { titre: 'Exercices' } },
    h('h1', { class: 'titre-vue', text: 'Exercices' }),
    h('p', { class: 'sous-titre', text: 'Trois formats courts, pour les jours où trente minutes d’oral ne sont pas possibles.' }),
    h(
      'div',
      { class: 'modes' },
      h(
        'a',
        { class: 'mode', href: '#/qcm' },
        taux !== null ? h('span', { class: 'pastille', text: `${Math.round(taux * 100)} %` }) : null,
        h('h3', {}, h('span', { class: 'ico-mode', 'aria-hidden': 'true' }, '◎'), 'QCM chronométré'),
        h('p', { text: `${LONGUEUR_QCM} questions, trente secondes chacune. Les délais, les seuils, les quorums — ce que le jury vérifie en premier.` })
      ),
      h(
        'a',
        { class: 'mode', href: '#/plans' },
        h('h3', {}, h('span', { class: 'ico-mode', 'aria-hidden': 'true' }, '✎'), 'Plan express'),
        h('p', { text: 'Quatre‑vingt‑dix secondes pour produire un plan annonçable, puis comparaison avec un plan modèle.' })
      ),
      h(
        'a',
        { class: 'mode', href: '#/cas' },
        h('h3', {}, h('span', { class: 'ico-mode', 'aria-hidden': 'true' }, '⚖'), 'Cas pratiques'),
        h('p', { text: `${CAS.length} situations à qualifier. Formulez votre analyse à voix haute avant de la comparer.` })
      )
    ),
    section('Par parcours'),
    h(
      'div',
      { class: 'sujets' },
      BLOCS.map((b) =>
        h(
          'a',
          { class: 'sujet', href: `#/qcm/${b.id}` },
          h('span', { class: 'sujet-n', text: `0${b.n}` }),
          h('span', { class: 'sujet-nom', text: `QCM — ${b.court}` }),
          h('span', { class: 'bloc-part', text: `${QCM.filter((q) => q.bloc === b.id).length} q.` })
        )
      )
    )
  );
}

// ---------- QCM chronométré ----------

export function vueQcm(filtreBloc) {
  const bloc = filtreBloc ? BLOCS.find((b) => b.id === filtreBloc) : null;
  if (filtreBloc && !bloc) return h('div', { class: 'vue' }, vide('Parcours inconnu.', null, h('a', { class: 'btn', href: '#/qcm', text: 'Tout le programme' })));

  const pool = bloc ? QCM.filter((q) => q.bloc === bloc.id) : QCM;
  const questions = melanger(pool).slice(0, LONGUEUR_QCM);
  const racine = h('div', { class: 'vue', dataset: { titre: 'QCM' } });
  const contenu = h('div', {});
  racine.append(
    h('div', { class: 'fil', text: bloc ? bloc.titre : 'Programme complet' }),
    h('h1', { class: 'titre-vue', text: 'QCM chronométré' }),
    contenu
  );

  const resultats = new Array(questions.length).fill(null);
  let index = 0;
  let arreter = null;
  const nettoyer = () => {
    if (arreter) arreter();
    arreter = null;
  };

  function barre() {
    return h(
      'div',
      { class: 'progres-qcm' },
      resultats.map((r, i) => h('i', { class: r === true ? 'ok' : r === false ? 'ko' : i === index ? 'en-cours' : '' }))
    );
  }

  function rendre() {
    nettoyer();
    if (index >= questions.length) return rendreFin();

    const q = questions[index];
    const { options, bonne } = optionsMelangees(q);
    const sujet = SUJET_PAR_ID.get(q.sujet);
    const chrono = h('div', { class: 'compteur due', text: '30 s' });
    const zoneOptions = h('div', { class: 'options' });
    const zoneExplication = h('div', {});
    let repondu = false;

    function choisir(i) {
      if (repondu) return;
      repondu = true;
      nettoyer();
      const juste = i === bonne;
      resultats[index] = juste;
      S.enregistrerQcm(q.id, juste);
      for (const [n, bouton] of [...zoneOptions.children].entries()) {
        bouton.disabled = true;
        if (n === bonne) bouton.classList.add('juste');
        else if (n === i) bouton.classList.add('faux');
      }
      zoneExplication.replaceChildren(
        h(
          'div',
          { class: 'explication' },
          h('span', { class: `verdict ${juste ? 'ok' : 'ko'}`, text: juste ? 'Exact.' : 'Inexact.' }),
          q.e
        ),
        h(
          'div',
          { class: 'actions' },
          h('button', { type: 'button', class: 'btn principal', onclick: suivante }, index === questions.length - 1 ? 'Voir le résultat' : 'Question suivante'),
          sujet ? h('a', { class: 'btn', href: `#/sujet/${sujet.id}`, text: 'Ouvrir la fiche' }) : null
        )
      );
      rendreBarre();
    }

    function suivante() {
      index += 1;
      rendre();
    }

    zoneOptions.replaceChildren(
      ...options.map((texte, i) =>
        h(
          'button',
          { type: 'button', class: 'option', onclick: () => choisir(i) },
          h('span', { class: 'lettre', text: LETTRES[i] }),
          h('span', { text: texte })
        )
      )
    );

    contenu.replaceChildren(
      barre(),
      h(
        'div',
        { class: 'compteurs' },
        h('span', { class: 'compteur', text: `${index + 1} / ${questions.length}` }),
        chrono
      ),
      h('div', { class: 'carte' }, h('div', { class: 'contexte', text: sujet ? sujet.titre : '' }), h('h3', { style: 'margin-top:8px', text: q.q })),
      zoneOptions,
      zoneExplication
    );

    arreter = chronometre({
      duree: SECONDES_PAR_QUESTION,
      surTic: ({ restant }) => {
        chrono.textContent = `${Math.ceil(restant / 1000)} s`;
        chrono.classList.toggle('due', restant > 8000);
      },
      surFin: () => {
        if (!repondu) choisir(-1);
      }
    });
  }

  function rendreBarre() {
    const ancienne = contenu.querySelector('.progres-qcm');
    if (ancienne) ancienne.replaceWith(barre());
  }

  function rendreFin() {
    const justes = resultats.filter(Boolean).length;
    const part = justes / questions.length;
    contenu.replaceChildren(
      h(
        'div',
        { class: 'resultat carte' },
        h('div', { class: `grosse-note ${part >= 0.7 ? 'ok' : 'ko'}`, text: `${justes}/${questions.length}` }),
        h('div', {
          class: 'verdict-texte',
          text: part >= 0.9 ? 'Les chiffres sont acquis.' : part >= 0.7 ? 'Solide, quelques points à revoir.' : 'Reprenez les fiches du parcours : les seuils ne s’improvisent pas.'
        })
      ),
      h(
        'div',
        { class: 'actions' },
        h('button', { type: 'button', class: 'btn principal', onclick: () => window.dispatchEvent(new HashChangeEvent('hashchange')) }, 'Nouvelle série'),
        h('a', { class: 'btn', href: '#/entrainement', text: 'Autres exercices' })
      )
    );
  }

  rendre();
  return { noeud: racine, nettoyer };
}

// ---------- Plan express ----------

export function vuePlans(sujetImpose) {
  const impose = sujetImpose ? SUJET_PAR_ID.get(sujetImpose) : null;
  if (sujetImpose && !impose) return h('div', { class: 'vue' }, vide('Sujet inconnu.', null, h('a', { class: 'btn', href: '#/plans', text: 'Tirer un sujet' })));

  const racine = h('div', { class: 'vue', dataset: { titre: 'Plan express' } });
  const contenu = h('div', {});
  racine.append(contenu);

  let arreter = null;
  const nettoyer = () => {
    if (arreter) arreter();
    arreter = null;
  };

  function ecranDepart() {
    nettoyer();
    contenu.replaceChildren(
      h('h1', { class: 'titre-vue', text: 'Plan express' }),
      h('p', { class: 'sous-titre', text: 'Quatre‑vingt‑dix secondes pour produire un plan annonçable : deux parties, deux ou trois idées par partie. C’est le premier réflexe que le jury évalue.' }),
      h(
        'div',
        { class: 'carte' },
        h('h3', { text: 'Consigne' }),
        h('p', { text: 'Écrivez au clavier ou sur papier, peu importe. Ce qui compte est de tenir le format : une accroche, une annonce, deux parties équilibrées. Le plan modèle n’est qu’une proposition parmi d’autres.' })
      ),
      h('div', { class: 'actions' }, h('button', { type: 'button', class: 'btn principal', onclick: demarrer }, impose ? 'Commencer sur ce sujet' : 'Tirer un sujet'))
    );
  }

  function demarrer() {
    const sujet = impose || auHasard(SUJETS);
    const bloc = BLOCS.find((b) => b.id === sujet.bloc);
    const chrono = h('div', { class: 'chrono', text: mmss(DUREE_PLAN) });
    const champ = h('textarea', {
      class: 'champ',
      placeholder: 'Accroche…\n\nI. …\n   – …\n   – …\n\nII. …\n   – …\n   – …',
      'aria-label': 'Votre plan'
    });
    const bouton = h('button', { type: 'button', class: 'btn principal', onclick: () => comparer(sujet, champ.value) }, 'J’ai terminé');

    contenu.replaceChildren(
      h('div', { class: 'fil', text: `${bloc.court} · plan express` }),
      h('h2', { style: 'margin-bottom:12px', text: sujet.titre }),
      chrono,
      h('div', { class: 'chrono-sous', text: 'Deux parties, deux ou trois idées chacune' }),
      h('div', { style: 'margin-top:16px' }, champ),
      h('div', { class: 'actions' }, bouton)
    );
    champ.focus();

    nettoyer();
    arreter = chronometre({
      duree: DUREE_PLAN,
      surTic: ({ restant }) => {
        chrono.textContent = mmss(restant);
        chrono.classList.toggle('alerte', restant <= 20000);
      },
      surFin: () => {
        chrono.textContent = '00:00';
        comparer(sujet, champ.value);
      }
    });
  }

  function comparer(sujet, texte) {
    nettoyer();
    S.enregistrerPlan(sujet.id);
    contenu.replaceChildren(
      h('div', { class: 'fil', text: 'Comparaison' }),
      h('h1', { class: 'titre-vue', text: sujet.titre }),
      texte.trim()
        ? h('div', { class: 'carte' }, h('h3', { text: 'Votre plan' }), h('p', { style: 'white-space:pre-wrap', text: texte.trim() }))
        : h('div', { class: 'carte' }, h('p', { class: 'avertissement', text: 'Aucun plan saisi — l’exercice vaut aussi à l’oral, mais l’écrit permet la comparaison.' })),
      h(
        'div',
        { class: 'carte' },
        h('h3', { text: 'Accroche possible' }),
        h('p', { text: sujet.accroche })
      ),
      h(
        'div',
        { class: 'carte' },
        h('h3', { text: 'Plan modèle' }),
        sujet.plan.map((p) => h('div', { class: 'partie' }, h('h3', { text: p.t }), h('ul', {}, p.pts.map((x) => h('li', { text: x })))))
      ),
      h(
        'div',
        { class: 'actions' },
        h('button', { type: 'button', class: 'btn principal', onclick: ecranDepart }, 'Un autre sujet'),
        h('a', { class: 'btn', href: `#/sujet/${sujet.id}`, text: 'Fiche complète' })
      )
    );
  }

  ecranDepart();
  return { noeud: racine, nettoyer };
}

// ---------- Cas pratiques ----------

export function vueCas() {
  const racine = h('div', { class: 'vue', dataset: { titre: 'Cas pratiques' } });
  const contenu = h('div', {});
  racine.append(contenu);

  function rendre(cas) {
    const sujet = SUJET_PAR_ID.get(cas.sujet);
    const bloc = BLOCS.find((b) => b.id === cas.bloc);
    contenu.replaceChildren(
      h('div', { class: 'fil', text: `${bloc.court} · cas pratique` }),
      h('h1', { class: 'titre-vue', text: 'Qualifiez la situation' }),
      h('div', { class: 'carte' }, h('p', { text: cas.e })),
      h('div', { class: 'consigne' }, h('span', {}, 'Formulez votre analyse '), h('strong', {}, 'à voix haute'), h('span', {}, ' avant d’ouvrir la réponse : textes applicables, qualification, conséquence, conduite à tenir.')),
      h(
        'details',
        { class: 'repli', style: 'margin-top:14px' },
        h('summary', { text: 'Analyse attendue' }),
        h('div', {}, h('p', { text: cas.r }))
      ),
      h(
        'div',
        { class: 'actions' },
        h('button', { type: 'button', class: 'btn principal', onclick: () => rendre(auHasard(CAS.filter((c) => c.id !== cas.id))) }, 'Un autre cas'),
        sujet ? h('a', { class: 'btn', href: `#/sujet/${sujet.id}`, text: 'Fiche du sujet' }) : null,
        h('a', { class: 'btn', href: '#/entrainement', text: 'Autres exercices' })
      )
    );
  }

  rendre(auHasard(CAS));
  return racine;
}
