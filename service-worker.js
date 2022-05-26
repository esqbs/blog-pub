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
    "revision": "ac63c5be4447033b4c109c9c086e93bc"
  },
  {
    "url": "about/index.html",
    "revision": "5671940ba1494cd405b23bf1de4afef0"
  },
  {
    "url": "archives/index.html",
    "revision": "9c5906cfe980fdcdae5d2b8ae7a4a728"
  },
  {
    "url": "assets/css/0.styles.af161ac7.css",
    "revision": "024cc4b90d375fa0c1e7914642357b88"
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
    "url": "assets/js/app.0a681492.js",
    "revision": "91c8a451e9ef4e72207e20128ca155de"
  },
  {
    "url": "categories/index.html",
    "revision": "0bc4c03c791d8c4e81b57b66623cd399"
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
    "revision": "715f4637480201e820b5cd49899d7d32"
  },
  {
    "url": "note/index.html",
    "revision": "dc8c7ec836266b8e88634c971609791d"
  },
  {
    "url": "pages/131ac1/index.html",
    "revision": "c34e4606384cf220d71d81f0628cc2f0"
  },
  {
    "url": "pages/47cf96/index.html",
    "revision": "84203eef38d22d68f560396066c22d8c"
  },
  {
    "url": "pages/976c5a/index.html",
    "revision": "907ea0c45fe31bc4076974e6e62da917"
  },
  {
    "url": "pages/b53e95/index.html",
    "revision": "07ed022505a38a4287112181c9b21318"
  },
  {
    "url": "pages/b8598e/index.html",
    "revision": "38e9faa4725d1fd7a777418564eb6063"
  },
  {
    "url": "pages/beb6c0/index.html",
    "revision": "7f6c772981878ad4df0d010e1e4e55b8"
  },
  {
    "url": "pages/c6919c/index.html",
    "revision": "cd202d25091fb326ff9146733304a02c"
  },
  {
    "url": "pages/d6fa5d/index.html",
    "revision": "cf5a07e85d7daa87650f3024b7af7869"
  },
  {
    "url": "record/index.html",
    "revision": "4a063ad3a25c9ad8c485cf0109049610"
  },
  {
    "url": "tags/index.html",
    "revision": "7caa2cd9205e6ae1949ad25e08437cfc"
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
