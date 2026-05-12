const CACHE_NAME = 'v1_cache_assimilação'; // Nome do cache
const ASSETS = [
  "/",
  "index.html",
  "offline.html",
  "css/global.css",
  "css/style.css",
  "manifest.json",
  "js/app.js",
  "js/main.js",
  "js/utils.js",
  "assets/icons.svg",
  "assets/imgs/icon-192x192.png",
  "assets/imgs/icon-512x512.png"
];

// Instalação - Salva tudo no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Ativação - Limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// Estratégia: Network First, falling back to Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then(response => {
        // Se não encontrar no cache e for uma navegação de página, mostra o offline.html
        return response || (event.request.mode === 'navigate' ? caches.match('offline.html') : null);
      });
    })
  );
});