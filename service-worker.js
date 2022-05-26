/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0272d70852109a90fc06d6b2c8e089a5"
  },
  {
    "url": "about/index.html",
    "revision": "adb3fd20f85e444875a6a98f6719afbf"
  },
  {
    "url": "archives/index.html",
    "revision": "ddc2edc3923ec590abfde2a21430db86"
  },
  {
    "url": "assets/css/0.styles.6786b839.css",
    "revision": "fb930f46caf252fa238b10c040b94a60"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5bc4859.js",
    "revision": "c392f2a1bee7897dc16723c2c90aa262"
  },
  {
    "url": "assets/js/11.ed994b33.js",
    "revision": "9d59aca0f11155d7cde373de4a440046"
  },
  {
    "url": "assets/js/12.3840ebfa.js",
    "revision": "ae9f80c928e274bdd7abbbd23c12066c"
  },
  {
    "url": "assets/js/13.388669b7.js",
    "revision": "89d0ad80692525213117ef02f73b8ce7"
  },
  {
    "url": "assets/js/14.77470432.js",
    "revision": "512f30fefdd0976d729d80bc8e1445d6"
  },
  {
    "url": "assets/js/15.479a2ba4.js",
    "revision": "a44d28d6708b03274fc81caa4275dba6"
  },
  {
    "url": "assets/js/16.1c0af5ba.js",
    "revision": "16f9176515924e2c58019d6eb00d4a4c"
  },
  {
    "url": "assets/js/17.e42445c3.js",
    "revision": "d906da152af28b320a1a6f0bec80f3e1"
  },
  {
    "url": "assets/js/18.a3bbdc18.js",
    "revision": "4f910118b027fabd31257b5a3f9cfe30"
  },
  {
    "url": "assets/js/19.4ceba333.js",
    "revision": "28ec29967a6281c91708b6936e67e6ff"
  },
  {
    "url": "assets/js/2.e8f65bfe.js",
    "revision": "8488069103ea898b29dbff5dcb4d3ab3"
  },
  {
    "url": "assets/js/20.d5ed51bb.js",
    "revision": "2566cb9efb923f2665ab780cd80f5d82"
  },
  {
    "url": "assets/js/21.b39a30b4.js",
    "revision": "9c1ce712422dab1e56f7a0008bb2e185"
  },
  {
    "url": "assets/js/22.60b0d9a0.js",
    "revision": "aeedc87a302508382aa8f4eb92c815f6"
  },
  {
    "url": "assets/js/3.e2ed038c.js",
    "revision": "feb17c62f2987fb9b5645468f666ad84"
  },
  {
    "url": "assets/js/4.e8b9db53.js",
    "revision": "b2fb7e8e111a968a42420db1b96f35f8"
  },
  {
    "url": "assets/js/5.e340ec8b.js",
    "revision": "a7ae0e40a5897be73f36a9fcf5c79a5c"
  },
  {
    "url": "assets/js/6.0421d74d.js",
    "revision": "219c37045051a4f974dc5295dbe37901"
  },
  {
    "url": "assets/js/7.814f69ec.js",
    "revision": "b7c1d7b7f4b8b295e7f30a18b0611b09"
  },
  {
    "url": "assets/js/8.007334a1.js",
    "revision": "0b3a101f1bd0daf8b63c780b71d61605"
  },
  {
    "url": "assets/js/9.6ef2fa48.js",
    "revision": "5b117cd3cab9cd23f7b1cff6dcce49c5"
  },
  {
    "url": "assets/js/app.aab8b9f0.js",
    "revision": "d846f26acdb63b4acd249056df3f8d19"
  },
  {
    "url": "categories/index.html",
    "revision": "208777076d8b0507b2529f07af721de8"
  },
  {
    "url": "font/font_1678482_4tbhmh589x.ttf",
    "revision": "ecbf9ca3613118c4acd5e7bd468aee45"
  },
  {
    "url": "font/font_1678482_4tbhmh589x.woff",
    "revision": "87aaacf809e4aed873243ddccdd689a4"
  },
  {
    "url": "font/font_1678482_4tbhmh589x.woff2",
    "revision": "efcf011105e40923510b9d7888200beb"
  },
  {
    "url": "img/bg.jpeg",
    "revision": "bf3e56b6219d2cfcd39eda9b4d1ab69d"
  },
  {
    "url": "img/bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "img/git.png",
    "revision": "26caa7e6d6476cf41146237fea40df9d"
  },
  {
    "url": "img/logo.png",
    "revision": "34a79bf208a1c3bee9d6e491a00cd369"
  },
  {
    "url": "img/more.png",
    "revision": "20bc993bdaa9538405f85ac5fcefdf1d"
  },
  {
    "url": "img/note.png",
    "revision": "c1718a647a4b41978bc8af6b0a3f41da"
  },
  {
    "url": "img/panda-waving.png",
    "revision": "425e622d348abc7ea349245e7e8738c2"
  },
  {
    "url": "img/python.png",
    "revision": "fd961de471b586d9049547322f8b1744"
  },
  {
    "url": "img/record.png",
    "revision": "cd4a5ecbd9cc330e7fdcb9bdc3e92796"
  },
  {
    "url": "img/ui.png",
    "revision": "1c26d51f2ef9a17b8b36f55cb04be642"
  },
  {
    "url": "index.html",
    "revision": "76e720aaec9df9f0042650c6c18414b1"
  },
  {
    "url": "note/index.html",
    "revision": "2d2f891312438b3a7c1dd06ce8da23a2"
  },
  {
    "url": "pages/131ac1/index.html",
    "revision": "b47b89b2e6a0cbd778380d2051d4ef28"
  },
  {
    "url": "pages/47cf96/index.html",
    "revision": "30d694e39b26a3ff64e095399fa63675"
  },
  {
    "url": "pages/976c5a/index.html",
    "revision": "33bb6ccd9c3a351619fb8bbdf60d6b81"
  },
  {
    "url": "pages/b53e95/index.html",
    "revision": "4b10be0d84e700d073d5725033c17dab"
  },
  {
    "url": "pages/b8598e/index.html",
    "revision": "b824c42d0aa8e8d8172cbe029c9ad89d"
  },
  {
    "url": "pages/beb6c0/index.html",
    "revision": "83707536f7e6dffd3f2be16d3909fc6c"
  },
  {
    "url": "pages/c6919c/index.html",
    "revision": "687b71f955fcd2abb5f59bfc890fdb4a"
  },
  {
    "url": "pages/d6fa5d/index.html",
    "revision": "025eaa664ba49c5a29d9a45109e6bc4a"
  },
  {
    "url": "record/index.html",
    "revision": "b154eecdbae8f1e451897b915eddbe8c"
  },
  {
    "url": "tags/index.html",
    "revision": "c2afa6b339c12460c24bae0456be6a06"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
