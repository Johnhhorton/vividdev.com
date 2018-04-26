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
    "revision": "35efca023883bc12bba38aca04dfbcb8"
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
    "url": "assets/js/0.fe65367d.js",
    "revision": "2e5856aaab44de25608c8e8b7a218dab"
  },
  {
    "url": "assets/js/1.0db35431.js",
    "revision": "62e9eb236f14cd313f33db8da5f3f28b"
  },
  {
    "url": "assets/js/2.046a58ae.js",
    "revision": "3c6f2eb8132fb878531aca7395a61a0d"
  },
  {
    "url": "assets/js/3.a815caca.js",
    "revision": "9c60a4e710841cd39dfb912173b740ca"
  },
  {
    "url": "assets/js/4.ec06e661.js",
    "revision": "69acc3bf9b685956d65e16462443b5c0"
  },
  {
    "url": "assets/js/5.c1cddf17.js",
    "revision": "102bbc6bf326c58571e6abafb3518289"
  },
  {
    "url": "assets/js/app.29703b22.js",
    "revision": "e038cc7c0bdf094fe606d9251aff654b"
  },
  {
    "url": "index.html",
    "revision": "1ea0dd2b6f63038d67e49d31b6c4ee4a"
  },
  {
    "url": "posts/index.html",
    "revision": "84e99b9b24c7474972ba542236b78afa"
  },
  {
    "url": "posts/myarticle.html",
    "revision": "e362050311fa1966adce783c592afb7b"
  },
  {
    "url": "posts/testarticle.html",
    "revision": "a4de06b77df56689dfecf3f802f2ccaf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
