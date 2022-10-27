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
    "revision": "d415f11fa097a8699fb885d4a6fe4c3f"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.0b1ccf48.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.21ced782.js",
    "revision": "18dc333ff81e24c1e94e5539cf6cc274"
  },
  {
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.68a1a284.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.0675c2c4.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.00a3f6a4.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.526efccc.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.ad544d8f.js",
    "revision": "d91ed7c06f6093cbfb6262ae57be93bc"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5808085a3f5559fad4b9e4d4fdca9970"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7bd170a1c609e173acf39032a44186c8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b6d2c049a81d4351fc60b93373483a25"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "64df6b0ba4340854b6eb8d3b566ab95c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "efa2ad98caceaa6f21dde111ce8b3902"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "88cd5dcb9c94ee091112b4e420012817"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "f4f8f1c53eb9c33112d2a7f768b6dc83"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c29c86ab3c0ff16017bd80186ea908ce"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f95f73a1b7e8444113d41e7c05551e36"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1018799ffe80a87ac484060826faa064"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b9998ff51ec7f622241ff8692483e9a7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a8232625c209290cf130603e71bb53f7"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "fbb2654021e69204383bccee4a73003b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3d8b30fe96d3ec146c64f280ac9f4f63"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ccb5dec0c0f7092df7009d66459c074e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "288f70b9038b9a2674a6435cf508035d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d8a47507a7ae83ee25fb976eb91e13ef"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "04daa194dda802d5258d436ec47abe8c"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ea6f852615e4da3472f26f73a486561"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "07b44aea7dfbfe14a7b654c6a162b439"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bde216eebbb4c596ede2051117c97db7"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "42b80c634edafd1fd2d0495e9353c3cf"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d6f9106b47ef797e8ac3a09556056989"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7f2ebe5835800f57ce8aa5db42121749"
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
