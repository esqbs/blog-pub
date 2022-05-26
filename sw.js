let cachesName = "sw_v2"
let cachesList = [
  "/index.html"
]

self.addEventListener('install', function(e) {
  console.log(e, 'install')
  self.skipWaiting()
  e.waitUtil(
    caches.open(cachesName)
    .then((cache) => cache.addAll(cachesList))
  )
})

self.addEventListener('fetch', function(e) {
  if(e.request.url.startsWith(self.location.origin)) {
    e.respondWith(
      caches.match(e.request)
      .then(function(r) {
        return r || fetch(e.request).then(function(response) {
          return caches.open(cachesName).then(function(cache) {
            cache.put(e.request, response.clone())
            return response
          })
        })
      })
    )
  }
})

self.addEventListener('activate', function(e) {
  console.log(e, 'active')
  let cacheWhitelist = [cachesName];
  e.waitUtil(
    caches.keys()
    .then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if(cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }))
    })
    .then(() => self.clients.claim())
  )
})
