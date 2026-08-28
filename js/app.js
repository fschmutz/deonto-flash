// Point d'entree : routeur a fragment, coque de l'application, tableau de bord.

import { APP_VERSION } from './version.js';
import { BLOCS, SUJETS, SUJET_PAR_ID, STATS } from './data/index.js';
import * as S from './store.js';
import { h, jauge, anneau, pct, section, vide, court } from './ui.js';
import { vueFiches } from './mode-fiches.js';
import { vueOral } from './mode-oral.js';
import { vueEntrainement, vueQcm, vueCas, vuePlans } from './mode-exercices.js';
import { vueProgression } from './vue-progression.js';

const $ = (id) => document.getElementById(id);
const app = $('app');

S.charger();

// ---------- Thème ----------

function appliquerTheme(nom) {
  document.documentElement.dataset.theme = nom;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', nom === 'papier' ? '#f5f2ec' : '#0e1116');
}
appliquerTheme(S.lire().theme || 'encre');
$('theme').addEventListener('click', () => {
  S.modifier((s) => {
    s.theme = s.theme === 'papier' ? 'encre' : 'papier';
  });
  appliquerTheme(S.lire().theme);
});

// ---------- Série et en-tête ----------

function rafraichirEntete() {
  const etat = S.lire();
  const serie = $('serie');
  const rompue = S.serieRompue();
  serie.textContent = etat.serie.jours > 0 && !rompue ? `${etat.serie.jours} j` : '';
  serie.title = etat.serie.jours > 0 ? `${etat.serie.jours} jours consécutifs` : '';
}
S.abonner(rafraichirEntete);
rafraichirEntete();

$('retour').addEventListener('click', () => {
  if (history.length > 1) history.back();
  else location.hash = '#/';
});

// ---------- Routeur ----------

const ROUTES = [
  { motif: /^\/?$/, vue: () => vueAccueil(), onglet: '/' },
  { motif: /^\/bloc\/([\w-]+)$/, vue: (m) => vueBloc(m[1]) },
  { motif: /^\/sujet\/([\w-]+)$/, vue: (m) => vueSujet(m[1]) },
  { motif: /^\/fiches\/?([\w-]*)$/, vue: (m) => vueFiches(m[1] || null), onglet: 'fiches' },
  { motif: /^\/oral\/?([\w-]*)$/, vue: (m) => vueOral(m[1] || null), onglet: 'oral' },
  { motif: /^\/entrainement$/, vue: () => vueEntrainement(), onglet: 'entrainement' },
  { motif: /^\/qcm\/?([\w-]*)$/, vue: (m) => vueQcm(m[1] || null), onglet: 'entrainement' },
  { motif: /^\/cas$/, vue: () => vueCas(), onglet: 'entrainement' },
  { motif: /^\/plans\/?([\w-]*)$/, vue: (m) => vuePlans(m[1] || null), onglet: 'entrainement' },
  { motif: /^\/progression$/, vue: () => vueProgression(), onglet: 'progression' },
  { motif: /^\/apropos$/, vue: () => vueAPropos() }
];

let nettoyer = null;

function router() {
  const chemin = location.hash.replace(/^#/, '') || '/';
  if (typeof nettoyer === 'function') {
    nettoyer();
    nettoyer = null;
  }
  const route = ROUTES.find((r) => r.motif.test(chemin));
  const resultat = route ? route.vue(chemin.match(route.motif)) : vueIntrouvable();
  const noeud = resultat instanceof Node ? resultat : resultat.noeud;
  if (resultat && !(resultat instanceof Node) && resultat.nettoyer) nettoyer = resultat.nettoyer;

  app.replaceChildren(noeud);
  app.scrollIntoView({ block: 'start' });
  window.scrollTo(0, 0);

  const onglet = route?.onglet || null;
  for (const a of document.querySelectorAll('.barre a')) {
    if (onglet && a.dataset.onglet === onglet) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  }
  $('retour').classList.toggle('cache', chemin === '/' || Boolean(onglet));
  document.title = chemin === '/' ? 'Déonto Flash' : `Déonto Flash — ${noeud.dataset.titre || ''}`.trim();
}

window.addEventListener('hashchange', router);

// ---------- Tableau de bord ----------

function vueAccueil() {
  const etat = S.lire();
  const r = S.rang();
  const compteurs = S.compteursRevision();
  const note = S.noteBlanche();
  const admis = note >= 12;
  const vus = S.sujetsRevus();

  const bandeau = h(
    'div',
    { class: 'bandeau' },
    h(
      'div',
      { class: 'bandeau-haut' },
      h(
        'div',
        {},
        h('div', { class: 'rang', text: r.nom }),
        h('div', { class: 'rang-xp', text: r.suivant ? `${r.xp} pts · ${r.suivant.seuil - r.xp} avant ${r.suivant.nom}` : `${r.xp} pts` })
      ),
      h(
        'div',
        { class: `note-blanche ${admis ? 'ok' : 'ko'}` },
        h('b', { text: note.toFixed(1) }),
        h('span', { class: 'rang-xp', text: '/ 20 estimé' })
      )
    ),
    jauge(r.part),
    h('div', { class: `barre-12 ${admis ? 'ok' : ''}` }, h('i', { style: `width:${Math.min(100, (note / 20) * 100).toFixed(1)}%` })),
    h('p', { class: 'avertissement', text: 'Le repère marque 12/20, la barre d’admission. L’estimation combine la maîtrise des fiches, la réussite aux QCM et vos auto-évaluations d’oral : elle ne vaut que ce que vaut votre sévérité.' }),
    h(
      'div',
      { class: 'chiffres' },
      h('div', { class: 'chiffre' }, h('b', { text: String(compteurs.session) }), h('span', { text: 'à revoir' })),
      h('div', { class: 'chiffre' }, h('b', { text: `${vus}/${STATS.sujets}` }), h('span', { text: 'sujets ouverts' })),
      h('div', { class: 'chiffre' }, h('b', { text: String(etat.oraux.length) }), h('span', { text: 'oraux passés' }))
    )
  );

  const modes = h(
    'div',
    { class: 'modes' },
    carteMode('⏱', 'Simulateur d’oral', 'Un sujet tiré au sort, trente minutes, aucune préparation. Comme le jour J.', '#/oral', null),
    carteMode('▤', 'Fiches', 'Révision espacée : les cartes reviennent le jour où vous êtes sur le point de les oublier.', '#/fiches', compteurs.session || null),
    carteMode('✎', 'Plans express', 'Quatre‑vingt‑dix secondes pour annoncer un plan. Le réflexe que le jury note en premier.', '#/plans', null),
    carteMode('◎', 'QCM et cas pratiques', 'Les délais, les seuils, les quorums. Et des situations à qualifier.', '#/entrainement', null)
  );

  const parcours = h(
    'div',
    { class: 'parcours' },
    BLOCS.map((b) => {
      const part = S.maitriseBloc(b.id);
      const acquis = part >= 0.8;
      return h(
        'a',
        { class: 'bloc', href: `#/bloc/${b.id}`, style: `--c:var(${b.couleur})` },
        h(
          'div',
          { class: 'bloc-haut' },
          h('span', { class: 'bloc-n', text: `0${b.n}` }),
          h('h3', { text: b.titre }),
          h('span', { class: 'bloc-part', text: pct(part) })
        ),
        h('p', { text: b.resume }),
        jauge(part),
        h('span', { class: `sceau ${acquis ? '' : 'gris'}` }, acquis ? '✦' : '◇', ` ${b.sceau}`)
      );
    })
  );

  return h(
    'div',
    { class: 'vue', dataset: { titre: 'Accueil' } },
    h('h1', { class: 'titre-vue', text: 'Déontologie de l’avocat' }),
    h('p', { class: 'sous-titre', text: `${STATS.sujets} sujets du programme officiel · exposé-discussion de 30 minutes, sans préparation · admission à 12/20` }),
    bandeau,
    section('Travailler'),
    modes,
    section('Les six parcours', `${STATS.sujets} sujets`),
    parcours,
    h('p', { class: 'avertissement' }, 'Contenu rédigé à partir des textes publics : loi du 31 décembre 1971, décret du 27 novembre 1991, RIN du Conseil national des barreaux, code de déontologie du 30 juin 2023. ', h('a', { href: '#/apropos', text: 'À propos et limites' }), '.')
  );
}

function carteMode(ico, titre, texte, lien, pastille) {
  return h(
    'a',
    { class: 'mode', href: lien },
    pastille ? h('span', { class: 'pastille', text: String(pastille) }) : null,
    h('h3', {}, h('span', { class: 'ico-mode', 'aria-hidden': 'true' }, ico), titre),
    h('p', { text: texte })
  );
}

// ---------- Un parcours ----------

function vueBloc(id) {
  const bloc = BLOCS.find((b) => b.id === id);
  if (!bloc) return vueIntrouvable();
  const part = S.maitriseBloc(bloc.id);
  const compteurs = S.compteursRevision(bloc.id);

  return h(
    'div',
    { class: 'vue', dataset: { titre: bloc.court } },
    h('div', { class: 'fil', text: `Parcours 0${bloc.n}` }),
    h('h1', { class: 'titre-vue', text: bloc.titre }),
    h('p', { class: 'sous-titre', text: bloc.resume }),
    h(
      'div',
      { class: 'carte', style: `--c:var(${bloc.couleur})` },
      h(
        'div',
        { class: 'bloc-haut' },
        h('h3', { text: `Sceau : ${bloc.sceau}` }),
        h('span', { class: 'bloc-part', text: pct(part) })
      ),
      jauge(part, bloc.couleur),
      h('p', { class: 'avertissement', text: part >= 0.8 ? 'Sceau acquis. Les fiches continuent de revenir pour l’entretenir.' : 'Le sceau est acquis à 80 % de maîtrise sur les fiches du parcours.' })
    ),
    h(
      'div',
      { class: 'actions' },
      h('a', { class: 'btn principal', href: `#/fiches/${bloc.id}` }, compteurs.session ? `Réviser (${compteurs.session})` : 'Réviser ce parcours'),
      h('a', { class: 'btn', href: `#/oral/${bloc.id}`, text: 'Tirer un oral ici' }),
      h('a', { class: 'btn', href: `#/qcm/${bloc.id}`, text: 'QCM du parcours' })
    ),
    section('Sujets', `${bloc.sujets.length}`),
    h(
      'div',
      { class: 'sujets' },
      bloc.sujets.map((s, i) =>
        h(
          'a',
          { class: 'sujet', href: `#/sujet/${s.id}` },
          h('span', { class: 'sujet-n', text: String(i + 1).padStart(2, '0') }),
          h('span', { class: 'sujet-nom', text: s.titre }),
          anneau(S.maitriseSujet(s.id), bloc.couleur)
        )
      )
    )
  );
}

// ---------- Fiche d'un sujet ----------

function vueSujet(id) {
  const s = SUJET_PAR_ID.get(id);
  if (!s) return vueIntrouvable();
  const bloc = BLOCS.find((b) => b.id === s.bloc);
  S.marquerVu(s.id);

  const plan = h(
    'div',
    { class: 'plan' },
    s.plan.map((p) => h('div', { class: 'partie' }, h('h3', { text: p.t }), h('ul', {}, p.pts.map((x) => h('li', { text: x })))))
  );

  return h(
    'div',
    { class: 'vue', dataset: { titre: court(s.titre, 40) } },
    h('div', { class: 'fil', text: `${bloc.court} · sujet ${s.rang}` }),
    h('h1', { class: 'titre-vue', text: s.titre }),
    h('div', { class: 'etiquettes' }, s.sources.map((src) => h('span', { class: 'etiquette source', text: src }))),
    h('div', { class: 'accroche', text: s.accroche }),
    section('Plan proposé', 'à annoncer'),
    plan,
    section('Points à ne pas manquer', `${s.cles.length}`),
    h('ul', { class: 'cles' }, s.cles.map((c) => h('li', { text: c }))),
    section('Questions du jury', `${s.jury.length}`),
    h(
      'div',
      { class: 'carte' },
      s.jury.map((q) =>
        h('details', { class: 'repli jury-q' }, h('summary', { text: q.q }), h('div', {}, h('p', { text: q.r })))
      )
    ),
    s.cas
      ? h(
          'div',
          {},
          section('Cas pratique'),
          h(
            'div',
            { class: 'carte' },
            h('p', { text: s.cas.e }),
            h('details', { class: 'repli' }, h('summary', { text: 'Analyse attendue' }), h('div', {}, h('p', { text: s.cas.r })))
          )
        )
      : null,
    h(
      'div',
      { class: 'actions' },
      h('a', { class: 'btn principal', href: `#/fiches/sujet:${s.id}` }, `Réviser les ${s.cartes.length} fiches`),
      h('a', { class: 'btn', href: `#/plans/${s.id}`, text: 'Plan express sur ce sujet' }),
      h('a', { class: 'btn', href: `#/oral/sujet:${s.id}`, text: 'Passer l’oral sur ce sujet' })
    ),
    h('p', { class: 'avertissement', text: 'Ce plan et ces développements sont une proposition de travail, rédigée à partir des textes publics. Le jury attend une réflexion personnelle, pas une récitation.' })
  );
}

// ---------- À propos ----------

function vueAPropos() {
  return h(
    'div',
    { class: 'vue', dataset: { titre: 'À propos' } },
    h('h1', { class: 'titre-vue', text: 'À propos' }),
    h(
      'div',
      { class: 'carte' },
      h('h3', { text: 'Ce que fait cette application' }),
      h('p', { text: `Elle couvre les ${STATS.sujets} sujets du programme officiel, répartis en six parcours, avec ${STATS.cartes} fiches en révision espacée, ${STATS.qcm} questions à choix multiple, ${STATS.cas} cas pratiques, ${STATS.jury} questions de jury et un simulateur d’oral de trente minutes.` })
    ),
    h(
      'div',
      { class: 'carte' },
      h('h3', { text: 'Sources' }),
      h('p', { text: 'Le contenu est rédigé à partir de textes publics : loi n° 71-1130 du 31 décembre 1971, décret n° 91-1197 du 27 novembre 1991, règlement intérieur national du Conseil national des barreaux, code de déontologie des avocats issu du décret du 30 juin 2023, code monétaire et financier, code de procédure pénale, code de procédure civile et jurisprudence publiée.' }),
      h('p', { text: 'Le droit évolue. Les seuils, délais et montants doivent être vérifiés dans le texte en vigueur au jour de l’épreuve. Cette application est un outil d’entraînement, pas une source de droit.' })
    ),
    h(
      'div',
      { class: 'carte' },
      h('h3', { text: 'Vos données' }),
      h('p', { text: 'Tout reste dans votre navigateur, dans le stockage local. Aucun compte, aucun serveur, aucune mesure d’audience, aucune ressource externe. Vider les données du site efface la progression.' }),
      h('div', { class: 'actions' }, h('button', {
        class: 'btn',
        onclick: () => {
          if (confirm('Effacer toute la progression enregistrée sur cet appareil ?')) {
            S.reinitialiser();
            location.hash = '#/';
          }
        }
      }, 'Effacer ma progression'))
    ),
    h('p', { class: 'avertissement', text: `Version ${APP_VERSION}` })
  );
}

function vueIntrouvable() {
  return h(
    'div',
    { class: 'vue', dataset: { titre: 'Introuvable' } },
    vide('Cette page n’existe pas.', null, h('a', { class: 'btn principal', href: '#/', text: 'Retour à l’accueil' }))
  );
}

// ---------- Service worker et mise à jour ----------

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
    verifierVersion();
  });
}

async function verifierVersion() {
  try {
    const reponse = await fetch('./version.json', { cache: 'no-store' });
    const { version } = await reponse.json();
    if (version && version !== APP_VERSION) $('banniereMaj').classList.remove('cache');
  } catch {
    /* hors ligne : rien à signaler */
  }
}

$('recharger').addEventListener('click', async () => {
  if ('serviceWorker' in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.map((r) => r.unregister()));
  }
  if (window.caches) {
    const cles = await caches.keys();
    await Promise.all(cles.map((k) => caches.delete(k)));
  }
  location.reload();
});

router();
export { SUJETS };
