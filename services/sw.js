self.addEventListener('fetch', event =>{
   
   console.log("events",event)

   /* if (event.request.url.includes('estilos.css')) {
      event.respondWith( null)
      
   }else{
      event.respondWith( fetch( event.request));
   } */


});





/* const version = "cache v1" ;

self.addEventListener('install', function(event) {// installar el serviceWorker

   event.waitUntil(preCache());
}); */

/* self.addEventListener('fetch', event => {
   const request = event.request;
   /// atrapar las peticiones GET
   if (request.method !== 'GET') {
      return;
   }

   ///buscar en cache
   event.respondWith(cachedResponse(request))
})

async function preCache() {
   const cache = await caches.open(version);
   return cache.addAll([
      '/',
      '/index.html',
      '/css/estilos.css',
      '/js/notification.js',
      '/js/push.min.js',
   ]);
     
}
async function cachedResponse(request) {
   const cache = await caches.open(version);
   const response = await cache.match(request) // se pregunta si se tienen las peticiones cacheadas
   return response || fetch(request);
   
} */

console.log("entro al worker")