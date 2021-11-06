var CACHE_NAME = 'cache-v1';
var urlsToCache = [
  '/',
  '/app.js',
  '/index.html',
  '/img/01.jpg',
  '/img/02.jpg',
  '/img/03.jpg',
  '/css/styles.css',
  '/js/push.min.js',
  '/js/notification.js',
  '/css/bootstrap.min.css', 
  'https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900',
  'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i'
];

 // se instala el service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('dentro del cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// se crea la respuesta a las peticiones cacheadas
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});