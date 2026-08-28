// Mode Fiches : revision espacee des cartes, planifiee par FSRS-6.

import { BLOCS, CARTES, SUJET_PAR_ID } from './data/index.js';
import * as S from './store.js';
import { NOTE, apercu, libelleIntervalle, noter } from './fsrs.js';
import { NEUVES_PAR_SESSION } from './store.js';
import { h, melanger, vide, court } from './ui.js';

const LIBELLES = [
  { note: NOTE.ENCORE, nom: 'Encore', classe: 'n1' },
  { note: NOTE.DIFFICILE, nom: 'Difficile', classe: 'n2' },
  { note: NOTE.BIEN, nom: 'Bien', classe: 'n3' },
  { note: NOTE.FACILE, nom: 'Facile', classe: 'n4' }
];

/** Relance le routeur sans changer d'adresse, pour reconstruire la vue courante. */
const relancer = () => window.dispatchEvent(new HashChangeEvent('hashchange'));

function resoudreFiltre(filtre) {
  if (!filtre) return { cartes: CARTES, titre: 'Toutes les fiches', href: '#/fiches' };
  if (filtre.startsWith('sujet:')) {
    const id = filtre.slice(6);
    const s = SUJET_PAR_ID.get(id);
    if (!s) return null;
    return { cartes: CARTES.filter((c) => c.sujet === id), titre: s.titre, href: `#/fiches/sujet:${id}` };
  }
  const bloc = BLOCS.find((b) => b.id === filtre);
  if (!bloc) return null;
  return { cartes: CARTES.filter((c) => c.bloc === bloc.id), titre: bloc.titre, href: `#/fiches/${bloc.id}` };
}

export function vueFiches(filtre) {
  const cible = resoudreFiltre(filtre);
  if (!cible) {
    return h('div', { class: 'vue' }, vide('Sélection inconnue.', null, h('a', { class: 'btn', href: '#/fiches', text: 'Toutes les fiches' })));
  }

  const maintenant = Date.now();
  const dues = [];
  const neuves = [];
  for (const carte of cible.cartes) {
    const f = S.lire().fiches[carte.id];
    if (!f || !f.revue) neuves.push(carte);
    else if (!f.echeance || f.echeance <= maintenant) dues.push({ carte, echeance: f.echeance || 0 });
  }
  dues.sort((a, b) => a.echeance - b.echeance);

  const file = [...dues.map((d) => d.carte), ...melanger(neuves).slice(0, NEUVES_PAR_SESSION)];
  const racine = h('div', { class: 'vue', dataset: { titre: 'Fiches' } });

  if (!file.length) {
    racine.append(ecranVide(cible));
    return racine;
  }

  const totalDepart = file.length;
  let index = 0;
  let revelee = false;
  let justes = 0;

  const contenu = h('div', {});
  racine.append(
    h('div', { class: 'fil', text: cible.titre }),
    h('h1', { class: 'titre-vue', text: 'Fiches' }),
    h('p', { class: 'sous-titre', text: 'Répondez à voix haute, puis notez‑vous honnêtement : c’est votre note qui décide de la date de retour.' }),
    contenu
  );

  function rendre() {
    if (index >= file.length) {
      contenu.replaceChildren(ecranFin(totalDepart, justes, cible));
      return;
    }
    const carte = file[index];
    const fiche = S.ficheDe(carte.id);
    const previsions = apercu(fiche);
    const sujet = SUJET_PAR_ID.get(carte.sujet);
    const restantes = file.length - index;

    const entete = h(
      'div',
      { class: 'compteurs' },
      h('span', { class: 'compteur due', text: `${restantes} restante${restantes > 1 ? 's' : ''}` }),
      h('span', { class: fiche.revue ? 'compteur' : 'compteur neuf', text: fiche.revue ? `revue ${fiche.dus} fois` : 'nouvelle' })
    );

    const bloc = h(
      'div',
      { class: 'fiche' },
      h('div', { class: 'contexte', text: sujet ? court(sujet.titre, 62) : '' }),
      h('div', { class: 'question', text: carte.q }),
      revelee ? h('div', { class: 'reponse', text: carte.r }) : null,
      revelee && carte.src ? h('div', { class: 'source', text: carte.src }) : null
    );

    const bas = revelee
      ? h(
          'div',
          { class: 'notes' },
          LIBELLES.map((l) =>
            h(
              'button',
              { type: 'button', class: l.classe, onclick: () => repondre(l.note) },
              h('b', { text: l.nom }),
              h('small', { text: l.note === NOTE.ENCORE ? '10 min' : libelleIntervalle(previsions[l.note]) })
            )
          )
        )
      : h('button', { type: 'button', class: 'btn principal pleine', style: 'margin-top:16px', onclick: reveler }, 'Voir la réponse');

    contenu.replaceChildren(entete, bloc, bas, aide(revelee));
  }

  function aide(estRevelee) {
    return h('p', { class: 'avertissement', text: estRevelee ? 'Raccourcis : 1 Encore · 2 Difficile · 3 Bien · 4 Facile' : 'Raccourci : espace pour révéler' });
  }

  function reveler() {
    revelee = true;
    rendre();
  }

  function repondre(note) {
    const carte = file[index];
    const misAJour = noter(S.ficheDe(carte.id), note, Date.now(), S.lire().retention);
    S.enregistrerFiche(carte.id, misAJour, note);
    if (note !== NOTE.ENCORE) justes += 1;
    else file.push(carte); // une carte ratée revient en fin de session
    index += 1;
    revelee = false;
    rendre();
  }

  function clavier(e) {
    if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) return;
    if (index >= file.length) return;
    if (!revelee && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      reveler();
      return;
    }
    if (revelee && ['1', '2', '3', '4'].includes(e.key)) {
      e.preventDefault();
      repondre(Number(e.key));
    }
  }
  document.addEventListener('keydown', clavier);

  rendre();
  return { noeud: racine, nettoyer: () => document.removeEventListener('keydown', clavier) };
}

function ecranVide(cible) {
  const prochaine = S.prochaineEcheance();
  const quand = prochaine
    ? new Date(prochaine).toLocaleString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })
    : null;
  return h(
    'div',
    {},
    h('div', { class: 'fil', text: cible.titre }),
    h('h1', { class: 'titre-vue', text: 'Rien à revoir' }),
    vide(
      'Toutes les fiches de cette sélection sont à jour.',
      quand ? `Prochaine échéance : ${quand}.` : 'Ouvrez un parcours pour découvrir de nouvelles fiches.',
      h(
        'div',
        { class: 'actions' },
        h('a', { class: 'btn principal', href: '#/oral', text: 'Passer un oral' }),
        h('a', { class: 'btn', href: '#/', text: 'Accueil' })
      )
    )
  );
}

function ecranFin(total, justes, cible) {
  const part = total ? justes / total : 0;
  return h(
    'div',
    { class: 'resultat carte' },
    h('div', { class: `grosse-note ${part >= 0.7 ? 'ok' : 'ko'}`, text: `${justes}/${total}` }),
    h('div', {
      class: 'verdict-texte',
      text:
        part >= 0.85
          ? 'Série solide.'
          : part >= 0.6
            ? 'Correct. Les cartes ratées reviendront vite.'
            : 'À reprendre : les cartes ratées reviennent dans dix minutes.'
    }),
    h(
      'div',
      { class: 'actions' },
      h('button', { type: 'button', class: 'btn principal', onclick: relancer }, 'Continuer'),
      h('a', { class: 'btn', href: '#/', text: 'Accueil' })
    )
  );
}
