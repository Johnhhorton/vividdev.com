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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "42c3684e97ec7fe2d1bdb84c64b9b084"
  },
  {
    "url": "assets/css/6.styles.9526c70b.css",
    "revision": "64bdf533b612bf74aa098ea4c7da7e01"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.0769a1f2.js",
    "revision": "f1d7f836382a9a659de1a0ed3755ec4d"
  },
  {
    "url": "assets/js/1.12d88d67.js",
    "revision": "60b0294b220b96ac7e51a189378f6392"
  },
  {
    "url": "assets/js/2.b25a26f5.js",
    "revision": "9bf07afacdedf2f485ee398cb5984a0f"
  },
  {
    "url": "assets/js/3.47e42df5.js",
    "revision": "33e29a491d8db6af5f4d31ee5c755c83"
  },
  {
    "url": "assets/js/4.6fb11e06.js",
    "revision": "a05304ccc22db8c8de4b5e6fdb9223de"
  },
  {
    "url": "assets/js/5.b6d0a055.js",
    "revision": "c51b76c6c7fdc00b808e43df84e78045"
  },
  {
    "url": "assets/js/app.5ea8eee3.js",
    "revision": "ed715765bcbfacdb1a5bf48354dd62f7"
  },
  {
    "url": "index.html",
    "revision": "447cd323b5e6c80e0d86805d52921922"
  },
  {
    "url": "posts/index.html",
    "revision": "6f3a81602a0e0bb4b93941358758ada0"
  },
  {
    "url": "posts/myarticle.html",
    "revision": "93280836d9cbca06b9e3cf94ef983e6a"
  },
  {
    "url": "posts/testarticle.html",
    "revision": "1140fa3461fb60fc1efba3b8669d389a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
