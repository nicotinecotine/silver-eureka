'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "10acd541fb96bfc0d58c31fe3be160a0",
"version.json": "d8f179864d109e07fbece2de0f8f7d7d",
"index.html": "624c848690a3412a31c23d93c0a9bd73",
"/": "624c848690a3412a31c23d93c0a9bd73",
"main.dart.js": "bb85a0bef49c62ba2eb097a386671d11",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"README.md": "c98e5e6b1b03ce7f5b2ceed77d8f9824",
"favicon.png": "d0ff084be1505c564699b49d4e697136",
"icons/Icon-192.png": "8b8cfacde503b890ef6b5a90943d2ea0",
"icons/Icon-maskable-192.png": "4eb6f5c1a732623110c3a1d3f975c72e",
"icons/Icon-maskable-512.png": "66487c00e7675af73e97599df4f5ec6d",
"icons/Icon-512.png": "b6fac2c3cb028402d7ce68c1911eec51",
"manifest.json": "4f1c89b42d8d4f35b685873ee4aed293",
".git/ORIG_HEAD": "9a496f6098291d604117f4ce62b22613",
".git/cursor/crepe/119ee8d81bae60f006e8d7dc58e2d58eb2c37465/metadata.json": "8ab3efd6551bd173e71894bc0273f002",
".git/cursor/crepe/119ee8d81bae60f006e8d7dc58e2d58eb2c37465/index.bin": "d08517f12af94f556d24e3e390fa76ee",
".git/cursor/crepe/119ee8d81bae60f006e8d7dc58e2d58eb2c37465/postings.bin": "5538d57540c661a35db3480ed66d17b7",
".git/config": "a76705e6cd05e47effd6e57ccfef3ca5",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3d/ebf4d088fd013b01f369f9f7f8350d08cbce1d": "361fecf0f1bb1dab806ea5b44d0a47c6",
".git/objects/93/fa873e0d117b4a1856195060d3da026015e2d0": "f101e4f35fa49e379d649c04feb8ff29",
".git/objects/94/9d75b58f8315938b9b9797e443bf92d919ee8f": "2fa71a6219423e77705f67db90267923",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a4/33135aeb3c8aff7e632ab7b2a321488b00e48b": "8d7cb54b71cb5c3f452007c4143752ab",
".git/objects/a3/7ab45be9e915b43ee1bf10d75b0762be37e54c": "4e24b4d4aec40af35921fdc64ae84301",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/b98e11c9a571b93d46f84137e436c62e45ef9a": "89965e696ade4b29278d1dc25dae1ebf",
".git/objects/a5/d527793132c61f90dcb99f7b6c5bcd3cb0e248": "b9cb964550da5c959a0684cb9d899bc6",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/85374b01225fb64218294f5a1a17b654d200a2": "daedcf2e2f587d88dce7f05fbb39766b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/48fd771f19cac1926413b372f52a2c19d90cd9": "2377d230824d81c800c0e53a927b45e8",
".git/objects/e4/e75788cba2d599d5d9d2409f6b01b9ec8eb9a6": "2c47fbacb06a3e8e5774e837edf97523",
".git/objects/fb/5f9e1d82bf169fae044fc76d367d7522a97fa7": "f094634b5957ab64e77e76ff9825d54d",
".git/objects/27/3554b20268d863dc8dcdc87e34b0c646ffd00b": "3d36be277dd767255b75f79aa307ebfc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/9ee8d81bae60f006e8d7dc58e2d58eb2c37465": "9f5aa3e84266af6eee4057413350b85a",
".git/objects/16/8fece760a0f911d40c96f917bc92f014b01b7c": "3a21c9295609a8a0d635ec20270abaaf",
".git/objects/45/a90999670dbd4b465a61cfdf936d3003a09404": "c1fd99ba17104c7d935231106e284025",
".git/objects/73/6438ec7fe2460158916817cfe7710e8132d6b7": "7a941ebb05aaafae3d606623e21851dc",
".git/objects/1a/cac4d1e9778faec911c3f5a3d25032824e8142": "a9f139f2dd0d6026ef2483d9b6c723db",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/19/7040dc293412e9d3bc4c881cd99c0dac6348cd": "0f2096a0723a66fd4dd76dd37def599b",
".git/objects/75/5b3c7a9838dda503ddd9bc5dcb43ffcb4a2e44": "c0f06d04fbc6daab75d6482f38a1c1a5",
".git/objects/9f/ca8e55844e6a2ba63544f0f7085c5f008940bc": "48245e27907ffdecd5681a6d6e53bc37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/21766bc76b98b1c91280f715d2a2bcff63b24e": "4938f2dfe4fcc2862767f1c4a488b50a",
".git/objects/39/9a905c642c445a70b974d3f059f52adfff182a": "9e89684917993f0f95b5f89d4d565ceb",
".git/objects/90/5a2eaa7ba95cbf8ba338d7a7574917a81ee4b6": "2c52966b964c9c4ff09e0aeb78860818",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/009c98d6ccc092532544f39fc6fae0fdd47763": "f2a659ea66203dd952db6a4dddd998d9",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/2b46532a539312b4734fa8ac687fe9f18ef66d": "26e76ed0a72d4b60e985f8f3343828fc",
".git/objects/b0/e782235ffc693d0a9ccae8e086ff35045da509": "8edd2c2a31726c4c4bc8a7dc34f04bdf",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e1/249a00a83f0496c145564d46aa68191b7b751f": "0150314ff17371ea1e0af895a555093c",
".git/objects/e6/aba24b61811031b2bf730ccec7f5b5f1c5c3f2": "dacf135755c58c2dcbfc0f3abb0ed290",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/842796672555840a00a98eb9addae0af90a79f": "a5dca0363ba99155bfce1915cf36e58e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/88dc05625a138c697b1d9356f4a40f05347927": "f11f2c21ea1306213d481d33bf317ef5",
".git/objects/e0/34f42e4c56f342f216771dac7d935b8310bbc9": "45f81db836e854a2a1dc81bd10641b2a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/5ae96135491dcb2aeabe642c0a07d506d7f5af": "9b7c76c82af2bb9fff840798294b9c9e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1d/2ce6f58d63564fd67e5d4fa762de5845ae1174": "70ffe95a1f376a4063e7263c794bf8ff",
".git/objects/40/e50497320b3b332d1965213bb2452e7fa96f54": "9789dd5658953e9212f3577bec3bdfb6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/25/5dcf0c813a01138017deeb49e09dd8fe343658": "59bd0f534fbe56bc89d6072ef031b285",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "656dbd4ee5bf01af6199f46dd7720a12",
".git/logs/refs/heads/main": "8197779cd668917c4931684020a808a1",
".git/logs/refs/remotes/origin/main": "0400f3989591d3ed9057ea56d34f4eff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b890e75e757e2903893d4b52411a3aa1",
".git/refs/remotes/origin/main": "b890e75e757e2903893d4b52411a3aa1",
".git/gk/config": "1a045975f5b29fee222d9e8ab2999d03",
".git/index": "2f5b689c8aaeb49b1719e23c7b8fb802",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "2552060070a8bc9ab87d3ee81eedc600",
".git/FETCH_HEAD": "6793aaf0f641b77522565a94a02a9684",
"assets/AssetManifest.json": "f6f49ae941543fab0b8a2ba58853d179",
"assets/NOTICES": "3b685c0d3ba711c0f8d934e274720f15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "809b574aadb4ca02abb87d00ccf54475",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3ef7e923198c84b5dc69caadf88d28e6",
"assets/fonts/MaterialIcons-Regular.otf": "b407b799c12894988b59381f556111bd",
"assets/assets/images/pig_logo.png": "7053269a4f102ea78b70bbb450b35eb4",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
