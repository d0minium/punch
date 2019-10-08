// Set a name for the current cache
var cacheName = 'v1'; 

// Default files to always cache
var cacheFiles = [
	'./',
	'./index.html',

	'./service-worker.js',

	'./assets/punch-homepage-BTF.php',
	'./website-design-builder-animation-mobile.php',

	'./img/creation-site-web-punchunique.jpg',
	'./img/website-design-punch-share.png',

	'./thesansextralight_plain-webfont.woff',
	'./thesansextralight_plain-webfont.woff2',
	'./lib/TweenMax.min.js',
	'./lib/PLUGINS.min.js',
	'./punch.webmanifest',
	'./assets/app.js',

	'./favicon.ico',
	'./img/icons/favicon-16x16.png',
	'./img/icons/favicon-32x32.png',
	'./img/icons/favicon-194x194.png',
	'./img/icons/apple-touch-icon.png',
	'./img/icons/apple-touch-icon-72x72.png',
	'./img/icons/apple-touch-icon-120x120.png',
	'./img/icons/apple-touch-icon-144x144.png',
	'./img/icons/apple-touch-icon-152x152.png',
	'./img/icons/android-chrome-96x96.png',
	'./img/icons/android-chrome-192x192.png',
	'./img/icons/android-chrome-512x512.png',
	'./img/icons/mstile-48x48.png',
	'./img/icons/mstile-144x144.png',
	'./img/icons/mstile-270x270.png',
	'./img/icons/mstile-558x558.png',
	'./img/icons/mstile-558x270.png',

	'./img/bcg-img-sect1.jpg',
	'./img/green-hook.png',
	'./img/rapport-logos1.png',
	'./img/rapport-logos2.png',
	'./img/rapport-logos3.png',
	'./img/rapport-logos4.png',
	'./img/rapport-logos5.png',
	'./img/rapport-logos6.png',
	'./img/cie-bing.png',
	'./img/cie-yahoo.png',
	'./img/cie-google.png',
	'./img/cie-seo.png',
	'./img/programming-code-robuste.jpg',
	'./img/logo-tech.png',
	'./img/logo-browser.png',
	'./img/logo-perf.png',
	'./img/img-traffic.png',
	'./img/img-traffic2.jpg',
	'./img/semrush.png',
	'./img/analytics.png',
	'./img/bcg-img-sect2.jpg',
	'./img/client-content.jpg',
	'./img/test-web-dev.png',
	'./img/test-gtmetrix.jpg',  
	'./img/test-seo-tester2.jpg',
	`./img/test-security-headers-netsparker.jpg`,
	'./img/recent-mtech.jpg',
	'./img/client-content2.png',
	'./img/footer-bcg.jpg',
	'./img/yantra-big-black.png',
	'./img/Danny.png',
	'./img/signature-white1.png',
	'./img/punch-green.png',
	'./img/punch-red.png',
	'./img/img-punch-heureux.png',
	'./img/big-logo.png',
	'./img/button-call.png',
	'./img/button-text.png',

	'./forfaits.php',
	'./assets/punch-forfaits-BTF.php',
]


self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

    	// Open the cache
	    caches.open(cacheName).then(function(cache) {

	    	// Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
	    })
	); // end e.waitUntil
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(

    	// Get all the cache keys (cacheName)
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {

				// If a cached item is saved under a previous cacheName
				if (thisCacheName !== cacheName) {

					// Delete that cached file
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	); // end e.waitUntil

});

self.addEventListener('fetch', function(e) {
  // Prevent the default, and handle the request ourselves.
  // e.respondWith(async function() {
  //   // Try to get the response from a cache.
  //   const cachedResponse = await caches.match(e.request);
  //   // Return it if we found one.
  //   if (cachedResponse) return cachedResponse;
  //   // If we didn't find a match in the cache, use the network.
  //   return fetch(e.request);
	// }());
	e.respondWith(
		caches.open(cacheName).then(function(cacheFiles){
			return caches.match(e.request);
		})
	)
});

// self.addEventListener('fetch', function(e) {
// 	console.log('[ServiceWorker] Fetch', e.request.url);

// 	// e.respondWidth Responds to the fetch event
// 	e.respondWith(

// 		// Check in cache for the request being made
// 		caches.match(e.request)


// 			.then(function(response) {

// 				// If the request is in the cache
// 				if ( response ) {
// 					console.log("[ServiceWorker] Found in Cache", e.request.url, response);
// 					// Return the cached version
// 					return response;
// 				}

// 				// If the request is NOT in the cache, fetch and cache

// 				var requestClone = e.request.clone();
// 				return fetch(requestClone)
// 					.then(function(response) {

// 						if ( !response ) {
// 							console.log("[ServiceWorker] No response from fetch ")
// 							return response;
// 						}

// 						var responseClone = response.clone();

// 						//  Open the cache
// 						caches.open(cacheName).then(function(cache) {

// 							// Put the fetched response in the cache
// 							cache.put(e.request, responseClone);
// 							console.log('[ServiceWorker] New Data Cached', e.request.url);

// 							// Return the response
// 							return response;
			
// 				        }); // end caches.open

// 					})
// 					.catch(function(err) {
// 						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
// 					});


// 			}) // end caches.match(e.request)
// 	); // end e.respondWith
// });
