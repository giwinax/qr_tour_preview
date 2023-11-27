'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "de4d1484fa36a66a1cd35f08a197f839",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"version.json": "88ed170b7239b42952e9358056c94741",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "f7e606f28b9bcec3c9eeca48764df874",
"/": "f7e606f28b9bcec3c9eeca48764df874",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/FontManifest.json": "8d3e245af49fe7c2ac8ba7313fa140d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/NOTICES": "261122bd056d3cb3a9c7d1afc1b2a6de",
"assets/AssetManifest.json": "8555733c47e0beacddfd1d8b872d64f4",
"assets/AssetManifest.bin.json": "956119795ef309e6f925d97db26e72bc",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/items.json": "93d0d4ced418de13aeef0e16cd71459a",
"assets/assets/images/detailedView_background.png": "0cfb514349f34c88e2cc1016a884989f",
"assets/assets/images/e4142dc143146fc0cf578eccc524bfa648b50496e4142dc143146fc0cf578eccc524bfa648b50496.png": "c46815c28e2f7f6ce1f71ddfeaab976b",
"assets/assets/images/tourism_logo.svg": "82385a1b7c8bd55d17d4b9dd09bdd587",
"assets/assets/images/63571af23bb7297bb1026e9519f949efe727730063571af23bb7297bb1026e9519f949efe7277300.png": "956e118fa9917f331f38525ba5c5b562",
"assets/assets/images/379562c28876f7b5ec61d5f3dd90bb251968b329379562c28876f7b5ec61d5f3dd90bb251968b329.png": "6dbd55c8a3997b820ac7e6bb504ebf86",
"assets/assets/images/onboarding_background.png": "dc43d770c570c17460def079765bffe6",
"assets/assets/images/5c12fe1db1e3b1857fb610a50314827a40411a695c12fe1db1e3b1857fb610a50314827a40411a69.png": "7e083f8dabf1f6667a33cb91bf4e3fe9",
"assets/assets/images/b57a3d9e3db5147c7da4cdd47d1ffe1b6939f43fb57a3d9e3db5147c7da4cdd47d1ffe1b6939f43f.png": "2311a569d930ac30178fa992c7fd459e",
"assets/assets/images/qr_code.svg": "396d43889c0f7794bfed3193474b31fa",
"assets/assets/images/ano_tur_logo.png": "39bc604005576a22506dd4a7118c0638",
"assets/assets/images/menu_icons/1_qr_selected.png": "f65ecbf373d7b1058eac6245687dae48",
"assets/assets/images/menu_icons/pause_bt.png": "6a703b3a6dfc313ff3022cc9e98c1d3b",
"assets/assets/images/menu_icons/1_qr.png": "26ffc0f0c5ddd8ce596e02949258da02",
"assets/assets/images/menu_icons/scroll_arror.png": "482b7b8afeaa4b008dbe723b8c5e1bfa",
"assets/assets/images/menu_icons/3_contacts.png": "ca2309ab1dd0dd9d99f2b9872dcfcef2",
"assets/assets/images/menu_icons/right_scroll_arror.png": "86a4deebd1d686457d866bcb558cc011",
"assets/assets/images/menu_icons/2_play.png": "afd1201bf26e543f4e6e48bc7d294be8",
"assets/assets/images/menu_icons/3_contacts_selected.png": "7a584991c72552d00ab680c666015ab6",
"assets/assets/images/menu_icons/2_play_selected.png": "e0e98912b0abd707cee1d4f4ce7076d0",
"assets/assets/images/play_buttom.png": "2da8a48229e66e1e452742d12bbf797d",
"assets/assets/images/contactView_backgound.png": "136526086bd9689eab039bfcffad4f36",
"assets/assets/images/f8365e7e44c8959bb99c64b310edd7a5e7bc207cf8365e7e44c8959bb99c64b310edd7a5e7bc207c.png": "4b0a8bae5b372ebacdd8b70b8fd0bdc7",
"assets/assets/images/4c866d4ac41dbd3a41bbee0e06a959a41cdc69954c866d4ac41dbd3a41bbee0e06a959a41cdc6995.png": "b8737b1020e9d106042faf69979235e8",
"assets/assets/images/scan_qr_overlay.svg": "12e8dfc64cf5ebd431fc316f38891e3a",
"assets/assets/images/40a857a95b2c6a2435b489b6d9faeb048ead387f40a857a95b2c6a2435b489b6d9faeb048ead387f.png": "29ef05de43fc4e9a4994c7795ef97daa",
"assets/assets/images/4219e84ffaba4baf6b01e62bbfd7d9fe57a6298e4219e84ffaba4baf6b01e62bbfd7d9fe57a6298e.png": "1a21c079091338eb1e9bb16132618760",
"assets/assets/images/e6dc94bbaf2e20fa1acf047df89aa8b6c7d66c38e6dc94bbaf2e20fa1acf047df89aa8b6c7d66c38.png": "9787dfb67daac7c8bf1535774e93e380",
"assets/assets/images/6e5e6204c6d18e353fa6ca5a61f6381eef83dca66e5e6204c6d18e353fa6ca5a61f6381eef83dca6.png": "8ef4dfa128fd3edb4d08128781485086",
"assets/assets/images/backbutton.png": "613d3aa37ce20018aeaa077b781436c1",
"assets/assets/images/header_main_background.png": "ae1bd70143261550fcc7996ac694b9ee",
"assets/assets/images/2a765f3e104b1d73609e37c2b09768031c7de4af2a765f3e104b1d73609e37c2b09768031c7de4af.png": "ba04fb5c68ec5a45db322c437be66210",
"assets/assets/images/table_cell_image.png": "767bdd27ebf9626d352bae1ce99116a6",
"assets/assets/images/46a1344e9ce47d48b480945553f6704efa5e5e2846a1344e9ce47d48b480945553f6704efa5e5e28.png": "cd02b9937de0e960e5870de9a2aad3ea",
"assets/assets/images/ano_tur_logo_black.png": "405d6e22e9817b18c2e55ed43f1db196",
"assets/assets/images/7757ea52e2418e769c1100fec16dc87c3af3730f7757ea52e2418e769c1100fec16dc87c3af3730f.png": "4ef16a19079b9ba67146ec717e3f5ca7",
"assets/assets/images/37830b571e80e4c8273135c99199996ee7f6eeb337830b571e80e4c8273135c99199996ee7f6eeb3.png": "d8d36026df5d329b2b94bce8c0baedaa",
"assets/assets/images/scan_qr.svg": "1bc51b42729faa47f96f6073917ed9a0",
"assets/assets/images/map_pin.svg": "573674402b7c3362739467cbd9225712",
"assets/assets/images/7461469c92fd0ae13ede1134c40ecd6a00bb7e617461469c92fd0ae13ede1134c40ecd6a00bb7e61.png": "6e931eaa1b09a86a97f7d5f47b7e2fef",
"assets/assets/1.mp3": "173b68b052ade43a65e203e3a5d35f66",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/molodofont.otf": "4a3fd8c47b72d0a5b89fcd33979a806b",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/AssetManifest.bin": "57235101d1e155c948a6fa491afc7d88",
"assets/fonts/MaterialIcons-Regular.otf": "2352c3eece8e6b5b783f1c7a467415c4",
"canvaskit/skwasm.wasm": "23e410ca96f23d8c4491ffe83c275c48",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js.symbols": "f4547f77f7e30fe3ed27bad64065449f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "fb87a79b573634296693437cbc3bdd1d",
"canvaskit/canvaskit.js.symbols": "52699b49aa67316d1d5c41dbc6fcebab",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "3cc1c0f09ce285850ee692424836bccf",
"canvaskit/chromium/canvaskit.js.symbols": "509750b12143dc83eb2ce94db3e803c7",
"main.dart.js": "f07ff46470d34a115bfc36a4d98aad37"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
