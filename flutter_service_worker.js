'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/package_config.json": "763c07f9968971dc183b770f641e43e4",
".dart_tool/package_config_subset": "737038235c9a9a1618c35b3c4f1ed05f",
".dart_tool/version": "a13ed25c1389038783693bec771e71f6",
".idea/libraries/Dart_SDK.xml": "d37c2c3963b64506cef733662a3abc8f",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"android/app/build.gradle": "6544c651ba97e8f03b75eaa2290d6a8e",
"android/app/src/debug/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/app/src/main/AndroidManifest.xml": "cdba15b54699581f1a315a2e0f255a1f",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "28e128a0ed9ec526c8673198e751a3cc",
"android/app/src/main/res/values-night/styles.xml": "b98b32ea0a3c018ad99a73ab8e77d32f",
"android/app/src/profile/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/build.gradle": "d2ca010c48bc7879b51a8900ee42abbb",
"android/gradle/wrapper/gradle-wrapper.properties": "229502955d529ae0e02c6ad58236b7a0",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/local.properties": "83b91a79fd6e72c2500e9dc7a4c11575",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8b5f0b8e497484f7604f333baa4fbc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a327e2db49c8e04333d8dc24eccfa06b",
"/": "a327e2db49c8e04333d8dc24eccfa06b",
"ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "3e9531b4375ea392aaee17e95db193d3",
"ios/Flutter/Generated.xcconfig": "46b59db190a01914098a682255442c67",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "ab3a445c3edb3f6e924b84664dfc4653",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "707cbfe9f8a97890084e1164cba0a659",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "5da85f8957f771f0c1002fdc60fc4a04",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/main.dart": "a6fb1329af99457b050f36d34b9bfb35",
"main.dart.js": "1bc3dd7fc578e9a8f721cd5ee0f70c73",
"manifest.json": "cdeea209f4c92c91bc6b74c48482d91d",
"pubspec.lock": "9def58bb0559eebe7f5cc428615a67b7",
"pubspec.yaml": "04737be35278478106be0a694d0853dc",
"README.md": "d9fec75372da6c786d1b533b9e26def0",
"test/widget_test.dart": "95ff94f4eed36f4a403cb72b1ec744ff",
"version.json": "c6d74201fd437a7b6f2bab9b174674b7",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"web.iml": "e0f10da35b9e41eee205c76b23f0f835"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
