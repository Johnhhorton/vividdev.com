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
    "revision": "66a07f2f0010856ecb3268b64fd8e600"
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
    "url": "assets/js/0.9f155f64.js",
    "revision": "4db66e9857f37619fa0f73bd922b757b"
  },
  {
    "url": "assets/js/1.68b68909.js",
    "revision": "44bae938bdb06d846752ef3bb9841fed"
  },
  {
    "url": "assets/js/2.7d916d6c.js",
    "revision": "b2c2f528ada325cc2bc7146ff7e4687c"
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
    "url": "assets/js/app.80664d91.js",
    "revision": "488583886bb490e25d6a3e1b000e3184"
  },
  {
    "url": "index.html",
    "revision": "8ffd39def44ed9a81fee1ea327998726"
  },
  {
    "url": "posts/index.html",
    "revision": "73aa6b48ad0b81b0d794060a49f72ebd"
  },
  {
    "url": "posts/PostWithCodeExample.html",
    "revision": "68ea3419530bf230417c7bd25ce35d54"
  },
  {
    "url": "posts/testarticle.html",
    "revision": "62d169d7867e01be031a47752e615f45"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
