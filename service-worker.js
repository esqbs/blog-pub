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
    "revision": "1e5fb58b6a955823c99bd84b9d824aca"
  },
  {
    "url": "about/index.html",
    "revision": "dfdba68b8a4c4d4daafc7dc70c65512d"
  },
  {
    "url": "archives/index.html",
    "revision": "7a67a79dd6e86a5086eee6646044988b"
  },
  {
    "url": "assets/css/0.styles.ca7819aa.css",
    "revision": "f1437320aa32953b600f7d06e606327e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bb512d83.js",
    "revision": "59ddec7cb44ae0528efdd311f20e0df1"
  },
  {
    "url": "assets/js/11.2806a1f8.js",
    "revision": "8852fe3f13d07fd9d2cf40e5a90d877e"
  },
  {
    "url": "assets/js/12.2d10c279.js",
    "revision": "357f63b8d42f30d23d1510bff201b200"
  },
  {
    "url": "assets/js/13.388669b7.js",
    "revision": "89d0ad80692525213117ef02f73b8ce7"
  },
  {
    "url": "assets/js/14.68792eae.js",
    "revision": "369bd1edc9d95f02751b598233f80ff4"
  },
  {
    "url": "assets/js/15.853ff48d.js",
    "revision": "6109dff08961d56936a1ac9411e5f342"
  },
  {
    "url": "assets/js/16.3e103a0d.js",
    "revision": "64029633606895a015a26386de2a1977"
  },
  {
    "url": "assets/js/17.e643204a.js",
    "revision": "b4c44af0e35c025b6de1cc9245516ee7"
  },
  {
    "url": "assets/js/18.c16e1a04.js",
    "revision": "fc074ab3a56a50e23cbe0018ecef270f"
  },
  {
    "url": "assets/js/19.cb22452f.js",
    "revision": "28ec29967a6281c91708b6936e67e6ff"
  },
  {
    "url": "assets/js/2.e8f65bfe.js",
    "revision": "8488069103ea898b29dbff5dcb4d3ab3"
  },
  {
    "url": "assets/js/20.60664ddf.js",
    "revision": "2566cb9efb923f2665ab780cd80f5d82"
  },
  {
    "url": "assets/js/21.97398b4b.js",
    "revision": "9c1ce712422dab1e56f7a0008bb2e185"
  },
  {
    "url": "assets/js/22.430c9674.js",
    "revision": "d5602a4d5345eb79277b2e68edf6b133"
  },
  {
    "url": "assets/js/23.e560e1d1.js",
    "revision": "77dd1289a85d2c83c11baf31f424c15d"
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
    "url": "assets/js/5.263fafe3.js",
    "revision": "2ea08bcd0afa0820bffcac0eaff2b612"
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
    "url": "assets/js/app.0f1a04e7.js",
    "revision": "a5bcae980d272ff45f2ac3c0a15f09d5"
  },
  {
    "url": "categories/index.html",
    "revision": "ad863ad6a030ac49011fb8b0770562ee"
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
    "url": "img/avatar.jpg",
    "revision": "101b6933dc6c69b9a6bc93a6b64ab7a1"
  },
  {
    "url": "img/avatar.png",
    "revision": "09b2c0372c38e5d30d49e736e3dde196"
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
    "url": "img/mainbg.jpeg",
    "revision": "bf3e56b6219d2cfcd39eda9b4d1ab69d"
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
    "revision": "712346a4b50ff92c64456de47dbe14bd"
  },
  {
    "url": "index.js",
    "revision": "c07935e812cb5a854b973325fbb68872"
  },
  {
    "url": "note/index.html",
    "revision": "55b14df68704c9d010963244500c5264"
  },
  {
    "url": "pages/131ac1/index.html",
    "revision": "420f4185201cc3e799585c7e339b7480"
  },
  {
    "url": "pages/47cf96/index.html",
    "revision": "b0b3d00642c784fd8b3f90774fae6adf"
  },
  {
    "url": "pages/976c5a/index.html",
    "revision": "a3c32a8a3139dd943d9031c12fb007d1"
  },
  {
    "url": "pages/b53e95/index.html",
    "revision": "319de8c8279fcbeb616b7bafc9094707"
  },
  {
    "url": "pages/b6dabd/index.html",
    "revision": "7e5c268aa01455cf545f41def728665b"
  },
  {
    "url": "pages/b8598e/index.html",
    "revision": "32113002fddf36f4938b7e8424138c1d"
  },
  {
    "url": "pages/beb6c0/index.html",
    "revision": "ef206b573bb828a27dcec97c57282f70"
  },
  {
    "url": "pages/c6919c/index.html",
    "revision": "55357b16689e5eeedabdb8415c258808"
  },
  {
    "url": "pages/d6fa5d/index.html",
    "revision": "7665a3189fad0f7b7053e0c6138c8dac"
  },
  {
    "url": "record/index.html",
    "revision": "2cb5f72d78b1815bbf78dee440268356"
  },
  {
    "url": "sw.js",
    "revision": "46ee3c5b9d0e9fced5851bd1b528dbf4"
  },
  {
    "url": "tags/index.html",
    "revision": "9b25cfd056b676a140911a97f74f9d9e"
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
