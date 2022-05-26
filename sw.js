let cachesName = "sw_v2"
let cachesList = [
  "/index.html"
]

self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUtil(
    caches.open(cachesName).then(function(cache) {
      console.log('[Service Worker] Caching all');
      return cache.addAll(cachesList)
    })
  )
})

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cachesName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone())
          return response
        })
      })
    })
  )
})

self.addEventListener('activate', function(e) {
  let cacheWhitelist = [cachesName];
  e.waitUtil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if(cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }))
    })
  )
})
