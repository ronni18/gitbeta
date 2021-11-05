let cache_v1= "cache v1" ;

self.addEventListener('install', function(event) {

   event.waitUntil(preCache() );
 });

async function preCache() {
   const cache = await caches.open(cache_v1);
   return cache.addAll([
      '/',
      '/index.html',
      '/css/estilos.css',
      '/js/notification.js',
      '/js/push.min.js',
   ]);
     
}

console.log("entro al worker")