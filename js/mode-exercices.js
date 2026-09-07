// Trois exercices courts : QCM chronometre, plans express, cas pratiques.

import { BLOCS, CAS, QCM, SUJETS, SUJET_PAR_ID, optionsMelangees } from './data/index.js';
import * as S from './store.js';
import { auHasard, chronometre, court, h, mmss, section, vide } from './ui.js';
import { bandeauRecompense, celebrer } from './celebration.js';
import {
  CHRONOS_LONGS,
  LONGUEURS_QCM,
  dureeQuestionMs,
  tirerSerieQcm
} from './qcm.js';

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
        h('p', { text: 'Longueur au choix (10 à 100), tirage priorisant les questions non acquises. Les délais, les seuils, les quorums : ce que le jury vérifie en premier.' })
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
          h('span', { class: 'sujet-nom', text: `QCM · ${b.court}` }),
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

  const poolParcours = bloc ? QCM.filter((q) => q.bloc === bloc.id) : QCM;
  const racine = h('div', { class: 'vue', dataset: { titre: 'QCM' } });
  const contenu = h('div', {});
  racine.append(
    h('div', { class: 'fil', text: bloc ? bloc.titre : 'Programme complet' }),
    h('h1', { class: 'titre-vue', text: 'QCM chronométré' }),
    contenu
  );

  let questions = [];
  let dureeMs = 30_000;
  let index = 0;
  let arreter = null;
  const resultats = [];
  let jalonsDepart = null;
  const nettoyer = () => {
    if (arreter) arreter();
    arreter = null;
  };

  function ecranDepart() {
    nettoyer();
    let longueur = S.longueurQcmChoisie();
    let chrono = S.chronoQcmChoisi();
    const zoneChoix = h('div', {});
    const zoneActions = h('div', { class: 'actions' });

    function rafraichir() {
      const pool = poolParcours;
      const disponible = pool.length;
      const effective = Math.min(longueur, disponible);
      const manque = bloc && longueur > disponible;
      const boutonsLongueur = LONGUEURS_QCM.map((n) =>
        h(
          'button',
          {
            type: 'button',
            class: `btn choix-qcm${n === longueur ? ' actif' : ''}`,
            onclick: () => {
              longueur = S.enregistrerLongueurQcm(n);
              rafraichir();
            }
          },
          `${n} questions`
        )
      );
      const zoneChrono =
        longueur >= 50
          ? h(
              'div',
              { class: 'carte', style: 'margin-top:12px' },
              h('h3', { text: 'Chronomètre' }),
              h(
                'p',
                {
                  class: 'avertissement',
                  text: 'Pour une série longue, choisissez le rythme : quarante‑cinq ou soixante secondes, ou sans limite.'
                }
              ),
              h(
                'div',
                { class: 'choix-qcm-rang' },
                ...CHRONOS_LONGS.map((c) =>
                  h(
                    'button',
                    {
                      type: 'button',
                      class: `btn choix-qcm${c.secondes === chrono ? ' actif' : ''}`,
                      onclick: () => {
                        chrono = S.enregistrerChronoQcm(c.secondes);
                        rafraichir();
                      }
                    },
                    c.libelle
                  )
                )
              )
            )
          : h(
              'p',
              {
                class: 'avertissement',
                style: 'margin-top:12px',
                text: 'Trente secondes par question pour les séries de 10 ou 25.'
              }
            );

      const hint = manque
        ? h(
            'div',
            { class: 'carte alerte-pool', style: 'margin-top:12px' },
            h(
              'p',
              {
                text: `Ce parcours ne compte que ${disponible} question${disponible > 1 ? 's' : ''}. Vous en avez demandé ${longueur}.`
              }
            ),
            h(
              'p',
              {
                class: 'avertissement',
                text: 'Pas de remplissage silencieux avec d’autres parcours : confirmez le maximum disponible, ou ouvrez le programme complet.'
              }
            ),
            h(
              'div',
              { class: 'actions' },
              h(
                'button',
                {
                  type: 'button',
                  class: 'btn principal',
                  onclick: () => demarrer(pool, disponible, chrono)
                },
                `Utiliser les ${disponible} disponibles`
              ),
              h('a', { class: 'btn', href: '#/qcm', text: 'Programme complet' })
            )
          )
        : null;

      zoneChoix.replaceChildren(
        h(
          'div',
          { class: 'carte' },
          h('h3', { text: 'Longueur de la série' }),
          h(
            'p',
            {
              text: bloc
                ? `${disponible} question${disponible > 1 ? 's' : ''} dans ce parcours. Le tirage privilégie les questions jamais vues, puis non acquises.`
                : `${disponible} questions au programme. Le tirage privilégie les questions jamais vues, puis non acquises.`
            }
          ),
          h('div', { class: 'choix-qcm-rang' }, ...boutonsLongueur),
          zoneChrono
        ),
        hint
      );

      zoneActions.replaceChildren(
        manque
          ? null
          : h(
              'button',
              {
                type: 'button',
                class: 'btn principal',
                onclick: () => demarrer(pool, effective, chrono)
              },
              effective === longueur ? `Commencer · ${effective} questions` : `Commencer · ${effective} questions (maximum)`
            ),
        h('a', { class: 'btn', href: '#/entrainement', text: 'Retour' })
      );
    }

    contenu.replaceChildren(
      h(
        'p',
        {
          class: 'sous-titre',
          text: 'Choisissez la longueur. Les questions déjà maîtrisées (deux bonnes réponses sans faute) passent en dernier.'
        }
      ),
      zoneChoix,
      zoneActions
    );
    rafraichir();
  }

  function demarrer(pool, longueurEffective, chronoSecondes) {
    const stats = S.lire().qcm || {};
    questions = tirerSerieQcm(pool, stats, longueurEffective);
    if (!questions.length) {
      contenu.replaceChildren(vide('Aucune question dans ce parcours.', null, h('a', { class: 'btn', href: '#/qcm', text: 'Programme complet' })));
      return;
    }
    dureeMs = dureeQuestionMs(longueurEffective, chronoSecondes);
    resultats.length = 0;
    for (let i = 0; i < questions.length; i += 1) resultats.push(null);
    jalonsDepart = S.capturerJalons();
    index = 0;
    rendre();
  }

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
    const libelleChrono = dureeMs === null ? 'Sans chrono' : `${Math.round(dureeMs / 1000)} s`;
    const chrono = h('div', { class: `compteur${dureeMs === null ? '' : ' due'}`, text: libelleChrono });
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

    if (dureeMs === null) {
      arreter = null;
      return;
    }

    arreter = chronometre({
      duree: dureeMs,
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
    const jalons = S.jalonsDepuis(jalonsDepart);
    const ratees = questions.filter((q, i) => resultats[i] === false);

    const blocRes = h(
      'div',
      { class: 'resultat carte' },
      h('div', { class: `grosse-note ${part >= 0.7 ? 'ok' : 'ko'}`, text: `${justes}/${questions.length}` }),
      h('div', {
        class: 'verdict-texte',
        text: part >= 0.9 ? 'Les chiffres sont acquis.' : part >= 0.7 ? 'Solide, quelques points à revoir.' : 'Reprenez les fiches du parcours : les seuils ne s’improvisent pas.'
      }),
      bandeauRecompense(jalons)
    );

    contenu.replaceChildren(
      blocRes,
      ratees.length
        ? h(
            'div',
            { class: 'carte' },
            h('h3', { text: ratees.length > 1 ? `Les ${ratees.length} questions manquées` : 'La question manquée' }),
            h(
              'div',
              { class: 'liste-lignes' },
              ratees.map((q) => {
                const sujet = SUJET_PAR_ID.get(q.sujet);
                return h(
                  'a',
                  { class: 'ligne lien-ligne', href: sujet ? `#/sujet/${sujet.id}` : '#/entrainement' },
                  h('span', { class: 'nom', text: q.q }),
                  h('span', { class: 'val', text: sujet ? court(sujet.titre, 46) : 'Voir le programme' })
                );
              })
            ),
            h('p', { class: 'avertissement', text: 'Ouvrez la fiche du sujet : une erreur de seuil se corrige au texte, pas à la répétition.' })
          )
        : h('div', { class: 'carte' }, h('p', { class: 'avertissement', text: 'Série parfaite. Le parcours suivant vous attend.' })),
      h(
        'div',
        { class: 'actions' },
        h('button', { type: 'button', class: 'btn principal', onclick: ecranDepart }, 'Nouvelle série'),
        h('a', { class: 'btn', href: '#/entrainement', text: 'Autres exercices' })
      )
    );

    if (jalons.rang || jalons.sceaux.length) celebrer('sceau', blocRes);
    else if (part >= 0.8) celebrer('franc', blocRes);
  }

  ecranDepart();
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
    const depart = S.capturerJalons();
    S.enregistrerPlan(sujet.id);
    const jalons = S.jalonsDepuis(depart);
    contenu.replaceChildren(
      h('div', { class: 'fil', text: 'Comparaison' }),
      h('h1', { class: 'titre-vue', text: sujet.titre }),
      bandeauRecompense(jalons),
      texte.trim()
        ? h('div', { class: 'carte' }, h('h3', { text: 'Votre plan' }), h('p', { style: 'white-space:pre-wrap', text: texte.trim() }))
        : h('div', { class: 'carte' }, h('p', { class: 'avertissement', text: 'Aucun plan saisi, l’exercice vaut aussi à l’oral, mais l’écrit permet la comparaison.' })),
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
    celebrer(jalons.rang || jalons.sceaux.length ? 'sceau' : 'discret', contenu.querySelector('.recompense') || contenu);
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
