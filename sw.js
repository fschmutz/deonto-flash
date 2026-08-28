// Service worker : coque en cache, version.json toujours reseau.
const CACHE = 'deonto-flash-2026.08.28.1';

const COQUE = [
  './',
  './index.html',
  './404.html',
  './manifest.webmanifest',
  './css/app.css',
  './css/fonts.css',
  './js/app.js',
  './js/ui.js',
  './js/store.js',
  './js/fsrs.js',
  './js/version.js',
  './js/mode-fiches.js',
  './js/mode-oral.js',
  './js/mode-exercices.js',
  './js/vue-progression.js',
  './js/data/index.js',
  './js/data/regles.js',
  './js/data/organisation.js',
  './js/data/exercice-a.js',
  './js/data/exercice-b.js',
  './js/data/structures.js',
  './js/data/honoraires.js',
  './js/data/responsabilite.js',
  './fonts/inter-latin-var.woff2',
  './fonts/spectral-latin-600.woff2',
  './fonts/spectral-latin-700.woff2',
  './fonts/dmmono-latin-500.woff2',
  './assets/favicon.png',
  './assets/apple-touch-icon.png',
  './assets/maskable.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(COQUE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cles) => Promise.all(cles.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const requete = event.request;
  if (requete.method !== 'GET') return;
  const url = new URL(requete.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.endsWith('/version.json')) {
    event.respondWith(fetch(requete, { cache: 'no-store' }).catch(() => caches.match(requete)));
    return;
  }

  event.respondWith(
    caches.match(requete).then((trouve) => {
      if (trouve) return trouve;
      return fetch(requete)
        .then((reponse) => {
          if (reponse && reponse.ok) {
            const copie = reponse.clone();
            caches.open(CACHE).then((c) => c.put(requete, copie));
          }
          return reponse;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
