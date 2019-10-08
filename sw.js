
// order: HOMEPAGE fr-en OG:FR-EN GENERAL  ICONS  HOMEIMG  PAGES+IMG  
// OTHER things TO CACHE
// 'https://www.youtube.com/embed/jv9Tcfltjg8',
// 'https://www.youtube.com/embed/Fx3-fUyctP0',
// 'https://www.youtube.com/embed/yBJrvEhRmhk',
// 'https://www.facebook.com/rsrc.php/v3/y5/r/OqOE21UvWe3.png',
//
const version = 1.0
const staticCacheName = version + ''
const dynamicCacheName = version + ''
// DYNAMIC
// const STATIC = 'site-static-v1.1';
// const dynamicCacheName = 'site-dynamic-v1.1';
// PRECACHE_URLS 
const StaticAssets = [
    './',
    './index.html',
    './assets/punch-homepage-BTF.php',


    './img/creation-site-web-punchunique.jpg',
    './img/website-design-punch-share.png',

    './thesansextralight_plain-webfont.woff',
    './thesansextralight_plain-webfont.woff2',
    './lib/TweenMax.min.js',
    './lib/PLUGINS.min.js',
    './punch.webmanifest',

    './sw.js',
    './assets/app.js',
    './fallback.html',

    'https://www.facebook.com/rsrc.php/v3/y5/r/OqOE21UvWe3.png',

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



    './assets/punch-forfaits-BTF.php',

];

//INSTALL
    self.addEventListener('install', evt => {
        console.log('service worker installed');
        evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(StaticAssets);
        })
        );
    });

    // self.addEventListener('install', evt => {
    //     // console.log('service worker installed');
    //     evt.waitUntil(
    //       caches.open(STATIC).then(cache => {
    //         console.log('caching shell assets');
    //         cache.addAll(PRECACHE_URLS);
    //       })
    //     );
    // });

//

//ACTIVATE
    // self.addEventListener('activate', evt => {
    //     // console.log('service worker activated');
    //     // KEYS are cache NAME Version
    //     evt.waitUntil(
    //       caches.keys().then(keys => {
    //         console.log(keys);
    //         return Promise.all(keys
    //           .filter(key => key !== STATIC && key !== DYNAMIC)
    //           .map(key => caches.delete(key))
    //         )
    //       })
    //     );
    // });
        self.addEventListener('activate', evt => {
            console.log('service worker activated');
          // KEYS are cache NAME Version
        //   evt.waitUntil(
        //     caches.keys().then(keys => {
        //       console.log(keys);
        //       return Promise.all(keys
        //         .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        //         .map(key => caches.delete(key))
        //       )
        //     })
        //     );

        });
//


// TRY
    // const version = 2;
    // const cacheName = 'ashwebsite';

    // self.addEventListener('install', function(e) {
    //  e.waitUntil(
    //    caches.open(cacheName).then(function(cache) {
    //      return cache.addAll([
    //       '',
    //       'index.html',
    //       'assets/css/styles.css',
    //       'assets/css/theme.min.css',
    //       'assets/css/color/blue-beige.css',
    //       'assets/img/photos/it-bg01.jpg',
    //       'assets/img/photos/testimonial-avatar01.jpg',
    //       'assets/js/jquery-2.0.0.min.js',
    //       'assets/js/plugins.js',
    //       'assets/js/core.min.js',
    //       'assets/js/jquery.typist.min.js',
    //       'assets/img/photos/testimonial-avatar02.jpg',
    //       'assets/img/photos/testimonial-avatar03.jpg',
    //       'assets/img/photos/testimonial-avatar05.jpg',
    //       'assets/img/photos/testimonial-avatar04.jpg',
    //       'assets/img/photos/icon127.png',
    //       'assets/fonts/fontawesome-webfont.woff2',
    //       'assets/fonts/themify.woff?-fvbane',
    //       'https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100',
    //       'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    //       'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    //       'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    //       'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
    //       'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
    //       'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0'
        
    //     ]);
    //    })
    //  );
    // });


    // self.addEventListener('fetch', function(event) {
    //   event.respondWith(
    //     caches.open(cacheName).then(function(cache) {
    //       return fetch(event.request).then(function(response) {
    //         cache.put(event.request, response.clone());
    //         return response;
    //       });
    //     }).catch(function(t){
    //         return console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, t), fetch(event.request)
    //     })
    //   );
    // });
//

// TRY https://stackoverflow.com/questions/56061154/serviceworker-caching-not-stable
    // const cacheName = "v2"

    // // Call Install Event
    // self.addEventListener('install', function (e) {
    //     console.log('Service Worker: Installed')

    // })

    // // Call Activate Event
    // self.addEventListener('activate', function (e) {
    //     console.log('Service Worker: Activated')

    //     // Remove unwanted caches
    //     e.waitUntil(
    //         caches.keys().then(cacheNames => {
    //             return Promise.all(
    //                 cacheNames.map(cache => {
    //                     if(cache != cacheName) {
    //                         console.log('Service Worker: Clearing Old Cache')
    //                         return caches.delete(cache)
    //                     }   
    //                 })
    //             )
    //         })
    //     )
    // })


    // self.addEventListener('fetch', function (evt) {
    //     console.log("Service Worker: Fetch")

    //     // var url = new URL(e.request.url)
    //     // console.log("Fetch page: " + url)

    //     evt.respondWith(
    //         //fetch(e.request).catch(() => caches.match(e.request))
    //         fetch(evt.request)
    //         .then(res => {
    //             // Make copy/clone of response
    //             const responseClone = res.clone()

    //             // Open Cache
    //             caches
    //             .open(staticCacheName)
    //             .then(cache => {
    //                 // Add response to cache
    //                 cache.put(evt.request, responseClone)
    //             })
    //             return response
    //         }).catch(err => caches.match(evt.request).then(res => res))
    //     )

    // })
    // // OR
    // self.addEventListener('fetch', evt => {
    //     if (evt.request.method === 'GET') { //only bother for static resources ;)
    //         switch (0) {
    //             case evt.request.url.indexOf('https://www.google-analytics.com'):
    //             // case evt.request.url.indexOf('https://www.googletagmanager.com'):
    //                 // skip adding to cache
    //                 // console.warn('skip adding to cache ' + event.request.method + ' ' + event.request.mode + ' ' + event.request.url);
    //             break;
    //             case evt.request.url.indexOf(SERVER_URL):
    //                 // Cache falling back to network
    //                 // console.info('[PWA] The service worker is serving an asset. ' + event.request.method + ' ' + event.request.mode + ' ' + event.request.url);
    //                 evt.respondWith(
    //                     caches.open(StaticAssets).then((cache) => {
    //                         return cache.match(evt.request).then((response) => {
    //                             return response || fetch(evt.request).then((response) => {
    //                                 if (response.status === 200) {
    //                                     cache.put(evt.request, response.clone());
    //                                     return response;
    //                                 } else if (response.type === 'opaqueredirect' || response.status === 404) {
    //                                     return response;
    //                                 } else {
    //                                     return cache.match('fallback.html');
    //                                 }
    //                             }).catch(() => {
    //                                 return cache.match('fallback.html');
    //                             });
    //                         });
    //                     })
    //                 );
    //             break;
    //             default:
    //             // console.warn('new case for cache ' + event.request.method + ' ' + event.request.mode + ' ' + event.request.url);
    //         }
    //     }
    // });
//

// EX 

    // file:///D:/Offline%20POSTs%20with%20Progressive%20Web%20Apps%20-%20Web%20Dev%20@%20Microsoft%20-%20Medium.html
    // Event listener for retrieving data
    // self.addEventListener('fetch', function(evt) {
    //     var req = evt.request.clone();
    //     if (req.clone().method == "GET") {
    //         evt.respondWith(  
            
    // 	    // Get the response from the network
    // 	    return fetch(req.clone()).then(function(response) {
    // 	       // And store it in the cache for later
    // 		return cache.put(req.clone(), response);
    // 	    });	
    //         );
    //     }
    // });
    //


    // SERVICE WORKER COOKBOOK
        // [Working example](/serviceworker-cookbook/DIR-HERE/).
    
        // CACHE AND UPDATE

            // var CACHE = 'cache-and-update';

            // // On install, cache some resources.
            // self.addEventListener('install', function(evt) {
            //     console.log('The service worker is being installed.');

            //     // Ask the service worker to keep installing until the returning promise
            //     // resolves.
            //     evt.waitUntil(precache());
            // });
            // //
            // // On fetch, use cache but update the entry with the latest contents
            // // from the server.
            // self.addEventListener('fetch', function(evt) {
            //         console.log('The service worker is serving the asset.');

            //         // You can use `respondWith()` to answer immediately, without waiting for the
            //         // network response to reach the service worker...
            //         evt.respondWith(fromCache(evt.request));


            //         // ...and `waitUntil()` to prevent the worker from being killed until the
            //         // cache is updated.
            //         evt.waitUntil(update(evt.request));
            // });
            // // Open a cache and use `addAll()` with an array of assets to add all of them
            // // to the cache. Return a promise resolving when all the assets are added.
            // function precache() {
            // return caches.open(CACHE).then(function (cache) {
            //     return cache.addAll([
            //         './',
            //         './index.php',
            //         './assets/punch-homepage-BTF.php',
            //         './website-design-builder-animation-mobile.php',

            //         './img/creation-site-web-punchunique.jpg',
            //         './img/website-design-punch-share.png',

            //         './thesansextralight_plain-webfont.woff',
            //         './thesansextralight_plain-webfont.woff2',
            //         './lib/TweenMax.min.js',
            //         './lib/PLUGINS.min.js',
            //         './punch.webmanifest',
            //         './assets/app.js',
            //         './sw.js',



            //         './favicon.ico',
            //         './img/icons/favicon-16x16.png',
            //         './img/icons/favicon-32x32.png',
            //         './img/icons/favicon-194x194.png',
            //         './img/icons/apple-touch-icon.png',
            //         './img/icons/apple-touch-icon-72x72.png',
            //         './img/icons/apple-touch-icon-120x120.png',
            //         './img/icons/apple-touch-icon-144x144.png',
            //         './img/icons/apple-touch-icon-152x152.png',
            //         './img/icons/android-chrome-96x96.png',
            //         './img/icons/android-chrome-192x192.png',
            //         './img/icons/android-chrome-512x512.png',
            //         './img/icons/mstile-48x48.png',
            //         './img/icons/mstile-144x144.png',
            //         './img/icons/mstile-270x270.png',
            //         './img/icons/mstile-558x558.png',
            //         './img/icons/mstile-558x270.png',

            //         './img/bcg-img-sect1.jpg',
            //         './img/green-hook.png',
            //         './img/rapport-logos1.png',
            //         './img/rapport-logos2.png',
            //         './img/rapport-logos3.png',
            //         './img/rapport-logos4.png',
            //         './img/rapport-logos5.png',
            //         './img/rapport-logos6.png',
            //         './img/cie-bing.png',
            //         './img/cie-yahoo.png',
            //         './img/cie-google.png',
            //         './img/cie-seo.png',
            //         './img/programming-code-robuste.jpg',
            //         './img/logo-tech.png',
            //         './img/logo-browser.png',
            //         './img/logo-perf.png',
            //         './img/img-traffic.png',
            //         './img/img-traffic2.jpg',
            //         './img/semrush.png',
            //         './img/analytics.png',
            //         './img/bcg-img-sect2.jpg',
            //         './img/client-content.jpg',
            //         './img/test-web-dev.png',
            //         './img/test-gtmetrix.jpg',  
            //         './img/test-seo-tester2.jpg',
            //         `./img/test-security-headers-netsparker.jpg`,
            //         './img/recent-mtech.jpg',
            //         './img/client-content2.png',
            //         './img/footer-bcg.jpg',
            //         './img/yantra-big-black.png',
            //         './img/Danny.png',
            //         './img/signature-white1.png',
            //         './img/punch-green.png',
            //         './img/punch-red.png',
            //         './img/img-punch-heureux.png',
            //         './img/big-logo.png',
            //         './img/button-call.png',
            //         './img/button-text.png',

            //         './forfaits.php',
            //         './assets/punch-forfaits-BTF.php',
            //     ]);
            // });
            // }

            // // Open the cache where the assets were stored and search for the requested
            // // resource. Notice that in case of no matching, the promise still resolves
            // // but it does with `undefined` as value.
            // function fromCache(request) {
            // return caches.open(CACHE).then(function (cache) {
            //     return cache.match(request).then(function (matching) {
            //     return matching || Promise.reject('no-match');
            //     });
            // });
            // }

            // // Update consists in opening the cache, performing a network request and
            // // storing the new response data.
            // function update(request) {
            // return caches.open(CACHE).then(function (cache) {
            //     return fetch(request).then(function (response) {
            //     return cache.put(request, response);
            //     });
            // });
            // }

        // 

        // EMBEDDE#D FALLBACK
        // controlled.js
            // // To be able to provide fallbacks since the beginning, we can only load the
            // // image once we know the SW is ready. In addition, the service worker should
            // // start intercepting without waiting for current clients to be closed.
            // // Checking for controller is an effective way to see if there is an active
            // // service worker controlling the page.
            // if (navigator.serviceWorker.controller) {
            //     loadImage();
            
            // // If there is not, wait until there is one...
            // } else {
            //     navigator.serviceWorker.oncontrollerchange = function() {
            //     // ...and monitor it until it's ready to intercept requests.
            //     this.controller.onstatechange = function() {
            //         if (this.state === 'activated') {
            //         loadImage();
            //         }
            //     };
            //     };
            // }
            
            // function loadImage() {
            //     document.querySelector('img').src = './missing';
            // }
        
        // server.js
            // var MAX_IMAGES = 50;
            // var imageNumber = 0;
            
            // module.exports = function(app, route) {
            // app.get(route + 'asset', function(req, res) {
            //     serveImage(res, 10000);
            // });
            // };
            
            // var lastUpdate = 0;
            
            // function serveImage(res, timeout) {
            // var now = Date.now();
            // if (now - lastUpdate > timeout) {
            //     imageNumber = (imageNumber + 1) % MAX_IMAGES;
            //     lastUpdate = Date.now();
            // }
            // var imageName = 'picture-' + (imageNumber + 1) + '.png';
            // res.sendFile(imageName, { root: './imgs/random/' });
            // }

        // sw.js
            // var CACHE = 'cache-and-update';

            // // On install, cache some resources.
            // self.addEventListener('install', function(evt) {
            // console.log('The service worker is being installed.');
            
            // // Ask the service worker to keep installing until the returning promise
            // // resolves.
            // evt.waitUntil(precache());
            // });
            
            // // On fetch, use cache but update the entry with the latest contents
            // // from the server.
            // self.addEventListener('fetch', function(evt) {
            // console.log('The service worker is serving the asset.');
            // // You can use `respondWith()` to answer immediately, without waiting for the
            // // network response to reach the service worker...
            // evt.respondWith(fromCache(evt.request));
            // // ...and `waitUntil()` to prevent the worker from being killed until the
            // // cache is updated.
            // evt.waitUntil(update(evt.request));
            // });
            
            // // Open a cache and use `addAll()` with an array of assets to add all of them
            // // to the cache. Return a promise resolving when all the assets are added.
            // function precache() {
            // return caches.open(CACHE).then(function (cache) {
            //     return cache.addAll([
            //         './',
            //         './index.php',
            //         './assets/punch-homepage-BTF.php',
            //         './website-design-builder-animation-mobile.php',

            //         './img/creation-site-web-punchunique.jpg',
            //         './img/website-design-punch-share.png',

            //         './thesansextralight_plain-webfont.woff',
            //         './thesansextralight_plain-webfont.woff2',
            //         './lib/TweenMax.min.js',
            //         './lib/PLUGINS.min.js',
            //         './punch.webmanifest',
            //         './assets/app.js',
            //         './sw.js',

                    

            //         './favicon.ico',
            //         './img/icons/favicon-16x16.png',
            //         './img/icons/favicon-32x32.png',
            //         './img/icons/favicon-194x194.png',
            //         './img/icons/apple-touch-icon.png',
            //         './img/icons/apple-touch-icon-72x72.png',
            //         './img/icons/apple-touch-icon-120x120.png',
            //         './img/icons/apple-touch-icon-144x144.png',
            //         './img/icons/apple-touch-icon-152x152.png',
            //         './img/icons/android-chrome-96x96.png',
            //         './img/icons/android-chrome-192x192.png',
            //         './img/icons/android-chrome-512x512.png',
            //         './img/icons/mstile-48x48.png',
            //         './img/icons/mstile-144x144.png',
            //         './img/icons/mstile-270x270.png',
            //         './img/icons/mstile-558x558.png',
            //         './img/icons/mstile-558x270.png',

            //         './img/bcg-img-sect1.jpg',
            //         './img/green-hook.png',
            //         './img/rapport-logos1.png',
            //         './img/rapport-logos2.png',
            //         './img/rapport-logos3.png',
            //         './img/rapport-logos4.png',
            //         './img/rapport-logos5.png',
            //         './img/rapport-logos6.png',
            //         './img/cie-bing.png',
            //         './img/cie-yahoo.png',
            //         './img/cie-google.png',
            //         './img/cie-seo.png',
            //         './img/programming-code-robuste.jpg',
            //         './img/logo-tech.png',
            //         './img/logo-browser.png',
            //         './img/logo-perf.png',
            //         './img/img-traffic.png',
            //         './img/img-traffic2.jpg',
            //         './img/semrush.png',
            //         './img/analytics.png',
            //         './img/bcg-img-sect2.jpg',
            //         './img/client-content.jpg',
            //         './img/test-web-dev.png',
            //         './img/test-gtmetrix.jpg',  
            //         './img/test-seo-tester2.jpg',
            //         `./img/test-security-headers-netsparker.jpg`,
            //         './img/recent-mtech.jpg',
            //         './img/client-content2.png',
            //         './img/footer-bcg.jpg',
            //         './img/yantra-big-black.png',
            //         './img/Danny.png',
            //         './img/signature-white1.png',
            //         './img/punch-green.png',
            //         './img/punch-red.png',
            //         './img/img-punch-heureux.png',
            //         './img/big-logo.png',
            //         './img/button-call.png',
            //         './img/button-text.png',

            //         './forfaits.php',
            //         './assets/punch-forfaits-BTF.php',
            //     ]);
            // });
            // }
            
            // // Open the cache where the assets were stored and search for the requested
            // // resource. Notice that in case of no matching, the promise still resolves
            // // but it does with `undefined` as value.
            // function fromCache(request) {
            // return caches.open(CACHE).then(function (cache) {
            //     return cache.match(request).then(function (matching) {
            //     return matching || Promise.reject('no-match');
            //     });
            // });
            // }
            
            // // Update consists in opening the cache, performing a network request and
            // // storing the new response data.
            // function update(request) {
            // return caches.open(CACHE).then(function (cache) {
            //     return fetch(request).then(function (response) {
            //     return cache.put(request, response);
            //     });
            // });
            // }
        //

            
            



        


    //

    //https://pwafire.org/developer/pwa/started/#sw-config-for-node
        // /* after a service worker is installed and the user navigates to a different page or 
        // refreshes,the service worker will begin to receive fetch events */  
        // self.addEventListener('fetch', (event) => {
        //     event.respondWith(caches.open('cache').then((cache) => {
        //     return cache.match(event.request).then((response) => {
        //         console.log("cache request: " + event.request.url);
        //         var fetchPromise = fetch(event.request).then((networkResponse) => {           
        // // if we got a response from the cache, update the cache                   
        // console.log("fetch completed: " + event.request.url, networkResponse);
        //     if (networkResponse) {
        //     console.debug("updated cached page: " + event.request.url, networkResponse);
        //         cache.put(event.request, networkResponse.clone());}
        //         return networkResponse;
        //             }, function (event) {   
        // // rejected promise - just ignore it, we're offline!   
        //             console.log("Error in fetch()", event);
        //             event.waitUntil(
        // // our 'cache' here is named *cache* in the caches.open()
        //             caches.open('cache').then((cache) => { 
        //             return cache.addAll
        //             ([            
        // // cache.addAll(), takes a list of URLs, then fetches them from 
        // // the server and adds the response to the cache          
        //         './index.php', // cache your index page
        //         './assets/punch-homepage-BTF.php', // cache app.main css
        //         './img/*', // cache all images
        //         './punch.webmanifest',
        // // external url fetch, twitter's as an example
        //         'https://platform.twitter.com/widgets.js', ]); }) 
        //         ); });
        // // respond from the cache, or the network
        //     return response || fetchPromise;
        // }); }));
        // });

        // // always updating i.e latest version available
        // self.addEventListener('install', (event) => {
        //     self.skipWaiting();
        //     console.log("Latest version installed!");
        // });

    // 

    //https://adactio.com

        // 'use strict';

        // const version = 'v1.29::';
        // const staticCacheName = version + 'static';
        // const pagesCacheName = 'pages';
        // const imagesCacheName = 'images';
        // const maxPages = 50; // Maximum number of pages to cache
        // const maxImages = 100; // Maximum number of images to cache
        // const timeout = 3000; // Number of milliseconds before timing out

        // const cacheList = [
        //     staticCacheName,
        //     pagesCacheName,
        //     imagesCacheName
        // ];

        // function updateStaticCache() {
        //     return caches.open(staticCacheName)
        //     .then( cache => {
        //         // These items won't block the installation of the Service Worker
        //         cache.addAll([
        //             '/skins/default/images/clone.jpg',
        //             '/skins/default/images/bandstand.jpg',
        //             '/skins/default/images/scaffold.jpg',
        //             '/skins/default/images/tokyo.jpg',
        //             '/skins/default/images/stage.jpg',
        //             '/skins/default/images/florence.jpg',
        //             '/skins/default/images/curved.jpg',
        //             '/includes/css/print.css',
        //         ]);
        //         // These items must be cached for the Service Worker to complete installation
        //         return cache.addAll([
        //             '/includes/javascript/global.js',
        //             '/skins/default/global.css',
        //             '/skins/default/images/logo.png',
        //             '/skins/default/images/logox2.png',
        //             '/offline',
        //             '/loading'
        //         ]);
        //     });
        // }

        // // Remove caches whose name is no longer valid
        // function clearOldCaches() {
        //     return caches.keys()
        //     .then( keys => {
        //         return Promise.all(keys
        //             .filter(key => !cacheList.includes(key))
        //             .map(key => caches.delete(key))
        //         );
        //     });
        // }

        // function trimCache(cacheName, maxItems) {
        //     caches.open(cacheName)
        //     .then( cache => {
        //         cache.keys()
        //         .then(keys => {
        //             if (keys.length > maxItems) {
        //                 cache.delete(keys[0])
        //                 .then( () => {
        //                     trimCache(cacheName, maxItems)
        //                 });
        //             }
        //         });
        //     });
        // }

        // addEventListener('install', event => {
        //     event.waitUntil(
        //         updateStaticCache()
        //         .then( () => {
        //           return skipWaiting()
        //         })
        //     );
        // });

        // addEventListener('activate', event => {
        //     event.waitUntil(
        //         clearOldCaches()
        //         .then( () => {
        //             return clients.claim()
        //         })
        //     );
        // });

        // if (registration.navigationPreload) {
        //     addEventListener('activate', event => {
        //         event.waitUntil(
        //             registration.navigationPreload.enable()
        //         );
        //     });
        // }

        // self.addEventListener('message', event => {
        //     if (event.data.command == 'trimCaches') {
        //         trimCache(pagesCacheName, maxPages);
        //         trimCache(imagesCacheName, maxImages);
        //     }
        // });

        // addEventListener('fetch', event => {
        //     const request = event.request;

        //     // Ignore requests to some directories
        //     if (request.url.includes('/cms')) {
        //         return;
        //     }

        //     // Ignore non-GET requests
        //     if (request.method !== 'GET') {
        //         return;
        //     }

        //     const retrieveFromCache = caches.match(request);

        //     // For HTML requests, try the network first, fall back to the cache, finally the offline page
        //     if (request.headers.get('Accept').includes('text/html')) {
        //         event.respondWith(
        //             new Promise( resolveWithResponse => {

        //                 const timer = setTimeout( () => {
        //                     // Time out: CACHE
        //                     retrieveFromCache
        //                     .then( responseFromCache => {
        //                         if (responseFromCache) {
        //                             resolveWithResponse(responseFromCache);
        //                         }
        //                     })
        //                 }, timeout);

        //                 const retrieveFromFetch = event.preloadResponse || fetch(request);

        //                 retrieveFromFetch
        //                 .then( responseFromFetch => {
        //                     // NETWORK
        //                     clearTimeout(timer);
        //                     const copy = responseFromFetch.clone();
        //                     // Stash a copy of this page in the pages cache
        //                     try {
        //                         event.waitUntil(
        //                             caches.open(pagesCacheName)
        //                             .then( pagesCache => {
        //                                 return pagesCache.put(request, copy);
        //                             })
        //                         );
        //                     } catch (error) {
        //                         console.error(error);
        //                     }
        //                     resolveWithResponse(responseFromFetch);
        //                 })
        //                 .catch( fetchError => {
        //                     clearTimeout(timer);
        //                     console.error(fetchError);
        //                     // CACHE or FALLBACK
        //                     caches.match(request)
        //                     .then( responseFromCache => {
        //                         resolveWithResponse(
        //                             responseFromCache || caches.match('/offline')
        //                         );
        //                     });
        //                 });

        //             })
        //         )
        //         return;
        //     }

        //     // For non-HTML requests, look in the cache first, fall back to the network
        //     event.respondWith(
        //         caches.match(request)
        //         .then(responseFromCache => {
        //             // CACHE
        //             return responseFromCache || fetch(request)
        //             .then( responseFromFetch => {
        //                 // NETWORK
        //                 // If the request is for an image, stash a copy of this image in the images cache
        //                 if (request.url.match(/\.(jpe?g|png|gif|svg|mapbox)/)) {
        //                     const copy = responseFromFetch.clone();
        //                     try {
        //                         event.waitUntil(
        //                             caches.open(imagesCacheName)
        //                             .then( imagesCache => {
        //                                 return imagesCache.put(request, copy);
        //                             })
        //                         );
        //                     } catch (error) {
        //                         console.error(error);
        //                     }
        //                 }
        //                 return responseFromFetch;
        //             })
        //             .catch( fetchError => {
        //                 console.error(fetchError);
        //                 // FALLBACK
        //                 // show an offline placeholder
        //                 if (request.url.match(/\.(jpe?g|png|gif|svg|mapbox)/)) {
        //                     return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', {headers: {'Content-Type': 'image/svg+xml', 'Cache-Control': 'no-store'}});
        //                 }
        //             });
        //         })
        //     );
        // });

    //

    //https://adactio.com/articles/14584

    
    // PWA / ex-master
    
        // Version 0.54

        // const version = 40
        // const cacheName = version + ''

        // const urlsToCacheKeys = new Set([
        //     './',
        //     './index.php',
        //     './assets/punch-homepage-BTF.php',
        //     './website-design-builder-animation-mobile.php',

        //     './img/creation-site-web-punchunique.jpg',
        //     './img/website-design-punch-share.png',

        //     './thesansextralight_plain-webfont.woff',
        //     './thesansextralight_plain-webfont.woff2',
        //     './lib/TweenMax.min.js',
        //     './lib/PLUGINS.min.js',
        //     './punch.webmanifest',
        //     './assets/app.js',
        //     './fallback.html',

        //     'https://www.facebook.com/rsrc.php/v3/y5/r/OqOE21UvWe3.png',
            

        //     './favicon.ico',
        //     './img/icons/favicon-16x16.png',
        //     './img/icons/favicon-32x32.png',
        //     './img/icons/favicon-194x194.png',
        //     './img/icons/apple-touch-icon.png',
        //     './img/icons/apple-touch-icon-72x72.png',
        //     './img/icons/apple-touch-icon-120x120.png',
        //     './img/icons/apple-touch-icon-144x144.png',
        //     './img/icons/apple-touch-icon-152x152.png',
        //     './img/icons/android-chrome-96x96.png',
        //     './img/icons/android-chrome-192x192.png',
        //     './img/icons/android-chrome-512x512.png',
        //     './img/icons/mstile-48x48.png',
        //     './img/icons/mstile-144x144.png',
        //     './img/icons/mstile-270x270.png',
        //     './img/icons/mstile-558x558.png',
        //     './img/icons/mstile-558x270.png',

        //     './img/bcg-img-sect1.jpg',
        //     './img/green-hook.png',
        //     './img/rapport-logos1.png',
        //     './img/rapport-logos2.png',
        //     './img/rapport-logos3.png',
        //     './img/rapport-logos4.png',
        //     './img/rapport-logos5.png',
        //     './img/rapport-logos6.png',
        //     './img/cie-bing.png',
        //     './img/cie-yahoo.png',
        //     './img/cie-google.png',
        //     './img/cie-seo.png',
        //     './img/programming-code-robuste.jpg',
        //     './img/logo-tech.png',
        //     './img/logo-browser.png',
        //     './img/logo-perf.png',
        //     './img/img-traffic.png',
        //     './img/img-traffic2.jpg',
        //     './img/semrush.png',
        //     './img/analytics.png',
        //     './img/bcg-img-sect2.jpg',
        //     './img/client-content.jpg',
        //     './img/test-web-dev.png',
        //     './img/test-gtmetrix.jpg',  
        //     './img/test-seo-tester2.jpg',
        //     `./img/test-security-headers-netsparker.jpg`,
        //     './img/recent-mtech.jpg',
        //     './img/client-content2.png',
        //     './img/footer-bcg.jpg',
        //     './img/yantra-big-black.png',
        //     './img/Danny.png',
        //     './img/signature-white1.png',
        //     './img/punch-green.png',
        //     './img/punch-red.png',
        //     './img/img-punch-heureux.png',
        //     './img/big-logo.png',
        //     './img/button-call.png',
        //     './img/button-text.png',

        //     './forfaits.php',
        //     './assets/punch-forfaits-BTF.php',
                        
        // ].map(u => new URL(u, self.location).href))

        // self.addEventListener('install', e => {
        // console.log('% install')
        // e.waitUntil(
        //     caches.open(cacheName).then(cache => {
        //     return cache.addAll(Array.from(urlsToCacheKeys))
        //     .then(() => self.skipWaiting());
        //     })
        // )
        // });

        // self.addEventListener('activate', event => {
        // console.log('% activate')
        // // event.waitUntil(self.clients.claim());

        // event.waitUntil(
        //     caches.keys().then(function(keyList) {
        //     return Promise.all(keyList.map(function(key) {
        //         if ([cacheName].indexOf(key) === -1) {
        //         console.log('# deleting', key)
        //         return caches.delete(key);
        //         }
        //     }));
        //     })
        // );
        // });

        // const cacheAResponse = (event, cache, response, log) => {
        // if(urlsToCacheKeys.has(event.request.url)) { // remove the condition to cache everything!
        //     console.log(log, event.request.url);
        //     cache.put(event.request, response.clone());
        // }
        // return response;
        // }

        // const cacheARequest = event => event.respondWith(
        // caches.open(cacheName).then(cache =>
        //     fetch(event.request.clone()).then(response => 
        //     cacheAResponse(event, cache, response, '* cached ')
        //     )
        // )
        // );

        // const tryServingFromCache = event => event.respondWith(
        // caches.open(cacheName).then(cache =>
        //     cache.match(event.request).then(resp => {
        //     if(!!resp) {
        //         console.log('> from cache', event.request.url)
        //     }
        //     return resp || fetch(event.request).then(response => 
        //         cacheAResponse(event, cache, response, '$ cached ')
        //     )
        //     })
        // )
        // );


        // self.addEventListener('fetch', event => {
        // if(navigator.onLine) {
        //     cacheARequest(event)
        // } else {
        //     tryServingFromCache(event)
        // }
        // });

    //


    //https://github.com/Fesouille/bootstrap-resto-website  TO DO
    // PWA/bootstrap-resto-website
        // this.addEventListener('install', function(event) {
        //     event.waitUntil(
        //         caches.open('v2').then(function(cache) {
        //         return cache.addAll([
        //             './',
        //             './index.php',
        //             './assets/punch-homepage-BTF.php',
        //             './website-design-builder-animation-mobile.php',

        //             './img/creation-site-web-punchunique.jpg',
        //             './img/website-design-punch-share.png',

        //             './thesansextralight_plain-webfont.woff',
        //             './thesansextralight_plain-webfont.woff2',
        //             './lib/TweenMax.min.js',
        //             './lib/PLUGINS.min.js',
        //             './punch.webmanifest',
        //             './assets/app.js',

        //             'https://www.facebook.com/rsrc.php/v3/y5/r/OqOE21UvWe3.png',
                    

        //             './favicon.ico',
        //             './img/icons/favicon-16x16.png',
        //             './img/icons/favicon-32x32.png',
        //             './img/icons/favicon-194x194.png',
        //             './img/icons/apple-touch-icon.png',
        //             './img/icons/apple-touch-icon-72x72.png',
        //             './img/icons/apple-touch-icon-120x120.png',
        //             './img/icons/apple-touch-icon-144x144.png',
        //             './img/icons/apple-touch-icon-152x152.png',
        //             './img/icons/android-chrome-96x96.png',
        //             './img/icons/android-chrome-192x192.png',
        //             './img/icons/android-chrome-512x512.png',
        //             './img/icons/mstile-48x48.png',
        //             './img/icons/mstile-144x144.png',
        //             './img/icons/mstile-270x270.png',
        //             './img/icons/mstile-558x558.png',
        //             './img/icons/mstile-558x270.png',

        //             './img/bcg-img-sect1.jpg',
        //             './img/green-hook.png',
        //             './img/rapport-logos1.png',
        //             './img/rapport-logos2.png',
        //             './img/rapport-logos3.png',
        //             './img/rapport-logos4.png',
        //             './img/rapport-logos5.png',
        //             './img/rapport-logos6.png',
        //             './img/cie-bing.png',
        //             './img/cie-yahoo.png',
        //             './img/cie-google.png',
        //             './img/cie-seo.png',
        //             './img/programming-code-robuste.jpg',
        //             './img/logo-tech.png',
        //             './img/logo-browser.png',
        //             './img/logo-perf.png',
        //             './img/img-traffic.png',
        //             './img/img-traffic2.jpg',
        //             './img/semrush.png',
        //             './img/analytics.png',
        //             './img/bcg-img-sect2.jpg',
        //             './img/client-content.jpg',
        //             './img/test-web-dev.png',
        //             './img/test-gtmetrix.jpg',  
        //             './img/test-seo-tester2.jpg',
        //             `./img/test-security-headers-netsparker.jpg`,
        //             './img/recent-mtech.jpg',
        //             './img/client-content2.png',
        //             './img/footer-bcg.jpg',
        //             './img/yantra-big-black.png',
        //             './img/Danny.png',
        //             './img/signature-white1.png',
        //             './img/punch-green.png',
        //             './img/punch-red.png',
        //             './img/img-punch-heureux.png',
        //             './img/big-logo.png',
        //             './img/button-call.png',
        //             './img/button-text.png',

        //             './forfaits.php',
        //             './assets/punch-forfaits-BTF.php',
                    
        //         ]);
        //         })
        //     );
        // });
        
        // this.addEventListener('fetch', function(event) {
        //     event.respondWith(caches.match(event.request).then(function(response) {
        //     // caches.match() always resolves
        //     // but in case of success response will have value
        //     if (response !== undefined) {
        //         return response;
        //     } else {
        //         return fetch(event.request).then(function (response) {
        //         // response may be used only once
        //         // we need to save clone to put one copy in cache
        //         // and serve second one
        //         let responseClone = response.clone();
                
        //         caches.open('v2').then(function (cache) {
        //             cache.put(event.request, responseClone);
        //         });
        //         return response;
        //         }).catch(function () {
        //         return caches.match('./img/fallback.html');
        //         });
        //     }
        //     }));
        // });
    //


    // https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/basic/service-worker.js

        //  Change to v2 to trigger the install event again.
        // const PRECACHE = 'Punch-Vers.1.1';
        // const RUNTIME = 'runtime';

        // A list of local resources we always want to be cached.
        // const PRECACHE_URLS = [
        //   'index.html',
        //   './', // Alias for index.html
        //   'styles.css',
        //   '../../styles/main.css',
        //   'demo.js'
        // ];

        // The install handler takes care of precaching the resources we always need.
        // self.addEventListener('install', event => {
        //   console.log('SW INSTALLED');
        //   event.waitUntil(
        //     caches.open(PRECACHE)
        //       .then(cache => cache.addAll(PRECACHE_URLS))
        //       .then(self.skipWaiting())
        //   );
        // });

        // The activate handler takes care of cleaning up old caches.
        // self.addEventListener('activate', event => {
        
        //   const currentCaches = [PRECACHE, RUNTIME];
        //   event.waitUntil(
        //     caches.keys()
        //     .then(cacheNames => {
        //       return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        //     })
        //     .then(cachesToDelete => {
        //       return Promise.all(cachesToDelete.map(cacheToDelete => {
        //         return caches.delete(cacheToDelete);
        //       }));
        //     })
        //     .then(() => self.clients.claim())
        //   );
        // });



        // The fetch handler serves responses for same-origin resources from a cache.
        // If no response is found, it populates the runtime cache with the response
        // from the network before returning it to the page.
        // self.addEventListener('fetch', event => {

        //   console.log(event);

        //   // Skip cross-origin requests, like those for Google Analytics.
        //   if (event.request.url.startsWith(self.location.origin)) {
        //     event.respondWith(
        //       caches.match(event.request).then(cachedResponse => {

        //         if (cachedResponse) {
        //           return cachedResponse;
        //         }

        //         return caches.open(RUNTIME).then(cache => {
        //           return fetch(event.request).then(response => {
        //             // Put a copy of the response in the runtime cache.
        //             return cache.put(event.request, response.clone()).then(() => {
        //               return response;
        //             });
        //           });
        //         });
        //       })
        //     );
        //   }
        // });
    
    


        // IMAGE FALLBACK

        // self.addEventListener("install", function(event) {
        //   event.waitUntil(
        //     caches.open("v1").then(function(cache) {
        //       return cache.addAll(CACHE);
        //     })
        //   );
        // });

        // self.addEventListener("fetch", function(event) {
            
        //   event.respondWith(
            
        //     caches.match(event.request).then(function(response){
        //       // caches.match() always resolves
        //       // but in case of success response will have value
        //       if (response !== undefined) {
        //         return response;
        //       } else {
        //         return fetch(event.request).then(function (response) {
        //           // response may be used only once
        //           // we need to save clone to put one copy in cache
        //           // and serve second one
        //           let responseClone = response.clone();
        //           caches.open("v1").then(function (cache) {
        //             cache.put(event.request, responseClone);
        //           });
        //           return response;
        //         }).catch(function () {
        //           return caches.match("./fallback.png");
        //         });
        //       }
        //   }));
        // });

    //

    // WORKBOX
        // !function(){"use strict";try{self["workbox:sw:4.3.1"]&&_()}catch(t){}const t="https://storage.googleapis.com/workbox-cdn/releases/4.3.1",e={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams"};self.workbox=new class{constructor(){return this.v={},this.t={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.s=this.t.debug?"dev":"prod",this.o=!1,new Proxy(this,{get(t,s){if(t[s])return t[s];const o=e[s];return o&&t.loadModule(`workbox-${o}`),t[s]}})}setConfig(t={}){if(this.o)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.t,t),this.s=this.t.debug?"dev":"prod"}loadModule(t){const e=this.i(t);try{importScripts(e),this.o=!0}catch(s){throw console.error(`Unable to import module '${t}' from '${e}'.`),s}}i(e){if(this.t.modulePathCb)return this.t.modulePathCb(e,this.t.debug);let s=[t];const o=`${e}.${this.s}.js`,r=this.t.modulePathPrefix;return r&&""===(s=r.split("/"))[s.length-1]&&s.splice(s.length-1,1),s.push(o),s.join("/")}}}();
        // //# sourceMappingURL=workbox-sw.js.map



        // if (workbox) {
        //   console.log('[ PWA Fire Bundle ] Hello from Workbox');

        
        //   /* change strategy method to fit your pwa needs,
        //     update RegExp dir/route and cache name */
        //   workbox.routing.registerRoute(
        //       new RegExp('/'),
        //       new workbox.strategies.StaleWhileRevalidate({
        //         cacheName: '/',
        //         plugins: [
        //         new workbox.cacheableResponse.Plugin({
        //           statuses: [0, 200],
        //         }),
        //         new workbox.expiration.Plugin({
        //           maxAgeSeconds: 60 * 60 * 24 * 1,
        //         }),
        //       ],
        //     })
        //   );
            

                    

                    
        //   workbox.core.skipWaiting();
        //   workbox.core.clientsClaim();
        // } else {
        //   console.log('Boo! Workbox failed to load 😬');
        // }
        //

        // PWA BUILDER Offline page DONT WORK
        // This is the "Offline page" service worker
        // Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
        // Check compatibility for the browser we're running this in

        // // This is the "Offline page" service worker
        // const CACHE = "pwabuilder-page";

        // // TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
        // const offlineFallbackPage = "fallback.html";

        // // Install stage sets up the offline page in the cache and opens a new cache
        // self.addEventListener("install", function (event) {
        //   console.log("[PWA Builder] Install Event processing");

        //   event.waitUntil(
        //     caches.open(CACHE).then(function (cache) {
        //       console.log("[PWA Builder] Cached offline page during install");

        //       if (offlineFallbackPage === "fallback.html") {
        //         return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
        //       }

        //       return cache.add(offlineFallbackPage);
        //     })
        //   );
        // });

        // // If any fetch fails, it will show the offline page.
        // self.addEventListener("fetch", function (event) {
        //   if (event.request.method !== "GET") return;

        //   event.respondWith(
        //     fetch(event.request).catch(function (error) {
        //       // The following validates that the request was for a navigation to a new document
        //       if (
        //         event.request.destination !== "document" ||
        //         event.request.mode !== "navigate"
        //       ) {
        //         return;
        //       }

        //       console.error("[PWA Builder] Network request Failed. Serving offline page " + error);
        //       return caches.open(CACHE).then(function (cache) {
        //         return cache.match(offlineFallbackPage);
        //       });
        //     })
        //   );
        // });

        // // This is an event that can be fired from your page to tell the SW to update the offline page
        // self.addEventListener("refreshOffline", function () {
        //   const offlinePageRequest = new Request(offlineFallbackPage);

        //   return fetch(offlineFallbackPage).then(function (response) {
        //     return caches.open(CACHE).then(function (cache) {
        //       console.log("[PWA Builder] Offline page updated from refreshOffline event: " + response.url);
        //       return cache.put(offlinePageRequest, response);
        //     });
        //   });
        // });

    //

    // PWA BUILDER Offline copy of pages DONT WORK!!!!

        // // This is the "Offline copy of pages" service worker

        // const CACHE = "pwabuilder-offline";

        // // TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "index.html";
        // const offlineFallbackPage = "/fallback.html";

        // // Install stage sets up the index page (home page) in the cache and opens a new cache
        // self.addEventListener("install", function (event) {
        //   console.log("[PWA Builder] Install Event processing");

        //   event.waitUntil(
        //     caches.open(CACHE).then(function (cache) {
        //       console.log("[PWA Builder] Cached offline page during install");

        //       if (offlineFallbackPage === "/fallback.html") {
        //         return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
        //       }
                
        //       return cache.add(offlineFallbackPage);
        //     })
        //   );
        // });

        // // If any fetch fails, it will look for the request in the cache and serve it from there first
        // self.addEventListener("fetch", function (event) {
        //   if (event.request.method !== "GET") return;

        //   event.respondWith(
        //     fetch(event.request)
        //       .then(function (response) {
        //         console.log("[PWA Builder] add page to offline cache: " + response.url);

        //         // If request was success, add or update it in the cache
        //         event.waitUntil(updateCache(event.request, response.clone()));

        //         return response;
        //       })
        //       .catch(function (error) {        
        //         console.log("[PWA Builder] Network request Failed. Serving content from cache: " + error);
        //         return fromCache(event.request);
        //       })
        //   );
        // });

        // function fromCache(request) {
        //   // Check to see if you have it in the cache
        //   // Return response
        //   // If not in the cache, then return error page
        //   return caches.open(CACHE).then(function (cache) {
        //     return cache.match(request).then(function (matching) {
        //       if (!matching || matching.status === 404) {
        //         return Promise.reject("no-match");
        //       }

        //       return matching;
        //     });
        //   });
        // }

        // function updateCache(request, response) {
        //   return caches.open(CACHE).then(function (cache) {
        //     return cache.put(request, response);
        //   });
        // }


    //

    // PWA BUILDER Cache-first network
        // This is the service worker with the Cache-first network

        // const CACHE = "CACHE-vers.0.1";
        // const CacheAssets = [
        //     './',
        //     './index.php',
        //     './assets/punch-homepage-BTF.php',
        //     './website-design-builder-animation-mobile.php',

        //     './thesansextralight_plain-webfont.woff',
        //     './thesansextralight_plain-webfont.woff2',
        //     './lib/TweenMax.min.js',
        //     './lib/PLUGINS.min.js',
        //     './punch.webmanifest',
        
        //     'https://www.facebook.com/rsrc.php/v3/y5/r/OqOE21UvWe3.png',

        //     './favicon.ico',
        //     './img/icons/favicon-16x16.png',
        //     './img/icons/favicon-32x32.png',
        //     './img/icons/favicon-194x194.png',
        //     './img/icons/apple-touch-icon.png',
        //     './img/icons/apple-touch-icon-72x72.png',
        //     './img/icons/apple-touch-icon-120x120.png',
        //     './img/icons/apple-touch-icon-144x144.png',
        //     './img/icons/apple-touch-icon-152x152.png',
        //     './img/icons/android-chrome-96x96.png',
        //     './img/icons/android-chrome-192x192.png',
        //     './img/icons/android-chrome-512x512.png',
        //     './img/icons/mstile-48x48.png',
        //     './img/icons/mstile-144x144.png',
        //     './img/icons/mstile-270x270.png',
        //     './img/icons/mstile-558x558.png',
        //     './img/icons/mstile-558x270.png',

        //     './img/bcg-img-sect1.jpg',
        //     './img/green-hook.png',
        //     './img/rapport-logos1.png',
        //     './img/rapport-logos2.png',
        //     './img/rapport-logos3.png',
        //     './img/rapport-logos4.png',
        //     './img/rapport-logos5.png',
        //     './img/rapport-logos6.png',
        //     './img/cie-bing.png',
        //     './img/cie-yahoo.png',
        //     './img/cie-google.png',
        //     './img/cie-seo.png',
        //     './img/programming-code-robuste.jpg',
        //     './img/logo-tech.png',
        //     './img/logo-browser.png',
        //     './img/logo-perf.png',
        //     './img/img-traffic.png',
        //     './img/img-traffic2.jpg',
        //     './img/semrush.png',
        //     './img/analytics.png',
        //     './img/bcg-img-sect2.jpg',
        //     './img/client-content.jpg',
        //     './img/test-web-dev.png',
        //     './img/test-gtmetrix.jpg',  
        //     './img/test-seo-tester2.jpg',
        //     `./img/test-security-headers-netsparker.jpg`,
        //     './img/recent-mtech.jpg',
        //     './img/client-content2.png',
        //     './img/footer-bcg.jpg',
        //     './img/yantra-big-black.png',
        //     './img/Danny.png',
        //     './img/signature-white1.png',
        //     './img/punch-green.png',
        //     './img/punch-red.png',
        //     './img/img-punch-heureux.png',
        //     './img/big-logo.png',
        


        //     './forfaits.php',
        //     './assets/punch-forfaits-BTF.php',
        // ];

        // self.addEventListener("install", function (event) {
        //   console.log("[PWA Builder] Install Event processing");

        //   console.log("[PWA Builder] Skip waiting on install");
        //   self.skipWaiting();

        //   event.waitUntil(
        //     caches.open(CACHE).then(function (cache) {
        //       console.log("[PWA Builder] Caching pages during install");
        //       return cache.addAll(CacheAssets);
        //     })
        //   );
        // });

        // // Allow sw to control of current page
        // self.addEventListener("activate", function (event) {
        //   console.log("[PWA Builder] Claiming clients for current page");
        //   event.waitUntil(self.clients.claim());
        // });

        // // If any fetch fails, it will look for the request in the cache and serve it from there first
        // self.addEventListener("fetch", function (event) { 
        //   if (event.request.method !== "GET") return;

        //   event.respondWith(
        //     fromCache(event.request).then(
        //       function (response) {
        //         // The response was found in the cache so we responde with it and update the entry
        //         // This is where we call the server to get the newest version of the
        //         // file to use the next time we show view
        //         event.waitUntil(
        //           fetch(event.request).then(function (response) {
        //             return updateCache(event.request, response);
        //           })
        //         );

        //         return response;
        //       },
        //       function () {
        //         // The response was not found in the cache so we look for it on the server
        //         return fetch(event.request)
        //           .then(function (response) {
        //             // If request was success, add or update it in the cache
        //             event.waitUntil(updateCache(event.request, response.clone()));

        //             return response;
        //           })
        //           .catch(function (error) {
        //             console.log("[PWA Builder] Network request failed and no cache." + error);
        //           });
        //       }
        //     )
        //   );
        // });

        // function fromCache(request) {
        //   // Check to see if you have it in the cache
        //   // Return response
        //   // If not in the cache, then return
        //   return caches.open(CACHE).then(function (cache) {
        //     return cache.match(request).then(function (matching) {
        //       if (!matching || matching.status === 404) {
        //         return Promise.reject("no-match");
        //       }

        //       return matching;
        //     });
        //   });
        // }

        // function updateCache(request, response) {
        //     return caches.open(CACHE).then(function (cache) {
        //     return cache.put(request, response);
        //     });
        // }

    //

    // PWA BUILDER Advanced caching



                
        // //This is the service worker with the Advanced caching

        // const CACHE = "pwabuilder-adv-cache-version-0.1";
        // const precacheFiles = [
        //   './',
        //   './index.php',
        //   './assets/punch-homepage-BTF.php',
        //   './website-design-builder-animation-mobile.php',

        //   './thesansextralight_plain-webfont.woff',
        //   './thesansextralight_plain-webfont.woff2',
        //   './lib/TweenMax.min.js',
        //   './lib/PLUGINS.min.js',
        //   './punch.webmanifest',


        //   'https://www.facebook.com/rsrc.php/v3/y5/r/OqOE21UvWe3.png',

        //   './favicon.ico',
        //   './img/icons/favicon-16x16.png',
        //   './img/icons/favicon-32x32.png',
        //   './img/icons/favicon-194x194.png',
        //   './img/icons/apple-touch-icon.png',
        //   './img/icons/apple-touch-icon-72x72.png',
        //   './img/icons/apple-touch-icon-120x120.png',
        //   './img/icons/apple-touch-icon-144x144.png',
        //   './img/icons/apple-touch-icon-152x152.png',
        //   './img/icons/android-chrome-96x96.png',
        //   './img/icons/android-chrome-192x192.png',
        //   './img/icons/android-chrome-512x512.png',
        //   './img/icons/mstile-48x48.png',
        //   './img/icons/mstile-144x144.png',
        //   './img/icons/mstile-270x270.png',
        //   './img/icons/mstile-558x558.png',
        //   './img/icons/mstile-558x270.png',

        //   './img/bcg-img-sect1.jpg',
        //   './img/green-hook.png',
        //   './img/rapport-logos1.png',
        //   './img/rapport-logos2.png',
        //   './img/rapport-logos3.png',
        //   './img/rapport-logos4.png',
        //   './img/rapport-logos5.png',
        //   './img/rapport-logos6.png',
        //   './img/cie-bing.png',
        //   './img/cie-yahoo.png',
        //   './img/cie-google.png',
        //   './img/cie-seo.png',
        //   './img/programming-code-robuste.jpg',
        //   './img/logo-tech.png',
        //   './img/logo-browser.png',
        //   './img/logo-perf.png',
        //   './img/img-traffic.png',
        //   './img/img-traffic2.jpg',
        //   './img/semrush.png',
        //   './img/analytics.png',
        //   './img/bcg-img-sect2.jpg',
        //   './img/client-content.jpg',
        //   './img/test-web-dev.png',
        //   './img/test-gtmetrix.jpg',  
        //   './img/test-seo-tester2.jpg',
        //   `./img/test-security-headers-netsparker.jpg`,
        //   './img/recent-mtech.jpg',
        //   './img/client-content2.png',
        //   './img/footer-bcg.jpg',
        //   './img/yantra-big-black.png',
        //   './img/Danny.png',
        //   './img/signature-white1.png',
        //   './img/punch-green.png',
        //   './img/punch-red.png',
        //   './img/img-punch-heureux.png',
        //   './img/big-logo.png',

        //   './forfaits.php',
        //   './assets/punch-forfaits-BTF.php',

        // ];

        // // TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
        // const offlineFallbackPage = "fallback.html";

        // const networkFirstPaths = [
        //   /* Add an array of regex of paths that should go network first */
        //   // Example: /\/api\/.*/
        // ];

        // const avoidCachingPaths = [
        //   /* Add an array of regex of paths that shouldn't be cached */
        //   // Example: /\/api\/.*/
        // ];

        // function pathComparer(requestUrl, pathRegEx) {
        //   return requestUrl.match(new RegExp(pathRegEx));
        // }

        // function comparePaths(requestUrl, pathsArray) {
        //   if (requestUrl) {
        //     for (let index = 0; index < pathsArray.length; index++) {
        //       const pathRegEx = pathsArray[index];
        //       if (pathComparer(requestUrl, pathRegEx)) {
        //         return true;
        //       }
        //     }
        //   }

        //   return false;
        // }

        // self.addEventListener("install", function (event) {
        //   console.log("[PWA Builder] Install Event processing");

        //   console.log("[PWA Builder] Skip waiting on install");
        //   self.skipWaiting();

        //   event.waitUntil(
        //     caches.open(CACHE).then(function (cache) {
        //       console.log("[PWA Builder] Caching pages during install");

        //       return cache.addAll(precacheFiles).then(function () {
        //         if (offlineFallbackPage === "fallback.html") {
        //           return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
        //         }

        //         return cache.add(offlineFallbackPage);
        //       });
        //     })
        //   );
        // });

        // // Allow sw to control of current page
        // self.addEventListener("activate", function (event) {
        //   console.log("[PWA Builder] Claiming clients for current page");
        //   event.waitUntil(self.clients.claim());
        // });

        // // If any fetch fails, it will look for the request in the cache and serve it from there first
        // self.addEventListener("fetch", function (event) {

        //   // if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

        //   if (event.request.method !== "GET") return;

        //   if (comparePaths(event.request.url, networkFirstPaths)) {
        //     networkFirstFetch(event);
        //   } else {
        //     cacheFirstFetch(event);
        //   }
        // });

        // function cacheFirstFetch(event) {
        //   event.respondWith(
        //     fromCache(event.request).then(
        //       function (response) {
        //         // The response was found in the cache so we responde with it and update the entry

        //         // This is where we call the server to get the newest version of the
        //         // file to use the next time we show view
        //         event.waitUntil(
        //           fetch(event.request).then(function (response) {
        //             return updateCache(event.request, response);
        //           })
        //         );

        //         return response;
        //       },
        //       function () {
        //         // The response was not found in the cache so we look for it on the server
        //         return fetch(event.request)
        //           .then(function (response) {
        //             // If request was success, add or update it in the cache
        //             event.waitUntil(updateCache(event.request, response.clone()));

        //             return response;
        //           })
        //           .catch(function (error) {
        //             // The following validates that the request was for a navigation to a new document
        //             if (event.request.destination !== "document" || event.request.mode !== "navigate") {
        //               return;
        //             }

        //             console.log("[PWA Builder] Network request failed and no cache." + error);
        //             // Use the precached offline page as fallback
        //             return caches.open(CACHE).then(function (cache) {
        //               cache.match(offlineFallbackPage);
        //             });
        //           });
        //       }
        //     )
        //   );
        // }

        // function networkFirstFetch(event) {
        //   event.respondWith(
        //     fetch(event.request)
        //       .then(function (response) {
        //         // If request was success, add or update it in the cache
        //         event.waitUntil(updateCache(event.request, response.clone()));
        //         return response;
        //       })
        //       .catch(function (error) {
        //         console.log("[PWA Builder] Network request Failed. Serving content from cache: " + error);
        //         return fromCache(event.request);
        //       })
        //   );
        // }

        // function fromCache(request) {
        //   // Check to see if you have it in the cache
        //   // Return response
        //   // If not in the cache, then return error page
        //   return caches.open(CACHE).then(function (cache) {
        //     return cache.match(request).then(function (matching) {




        //       if (!matching || matching.status === 404) {
        //         return Promise.reject("no-match");
        //       }

        //       return matching;




        //     });
        //   });
        // }

        // function updateCache(request, response) {
        //   if (!comparePaths(request.url, avoidCachingPaths)) {
        //     return caches.open(CACHE).then(function (cache) {
        //       return cache.put(request, response);
        //     });
        //   }

        //   return Promise.resolve();
        // }

                
                
    //

    // Unlocking Progress Web Applications - JSConf.Asia 2019.mp4


        // const limitCacheSize = (name, size) => {
                // caches.open(name).then(cache => {
                //   cache.keys().then(keys => {
                //     if(keys.length > size){
                //       cache.delete(keys[0]).then(limitCacheSize(name, size));
                //     }
                //   });
                // });
        // };
        


        // self.addEventListener('install', evt => {
        //   console.log('service worker installed');
        //   evt.waitUntil(
        //     caches.open(staticCacheName)
        //     .then(cache => {
        //       console.log('caching shell assets');
        //       cache.addAll(StaticAssets);
        //     })
        //   );
        // });
        
        // self.addEventListener('activate', evt => {
        //   console.log('service worker activated');
            //   // KEYS are cache NAME Version
            //   evt.waitUntil(
            //     caches.keys().then(keys => {
            //       console.log(keys);
            //       return Promise.all(keys
            //         .filter(key => key !== staticCacheName && key !== dynamicCacheName)
            //         .map(key => caches.delete(key))
            //       )
            //     })
            // );

        // });

        // function isImage(fetchRequest) {
        //   return fetchRequest.method === "GET"
        //         && fetchRequest.destination === "image";
        // };

        // self.addEventListener('fetch', evt => {
        //     console.log('fetch event', evt.request);

        //     evt.respondWith(
        //           caches.match(evt.request)
                    
        //             //-BASIC- CACHE FIRST - check cache first or go to network
        //             .then(response => response || fetch(evt.request))
        //             .catch(error => console.error(' Error during fetchin', error))




        //               //               if(evt.request.url.indexOf('.php') > -1){
        //               //                 return caches.match('./fallback.html');
        //               //               }

        //                             // if (isImage(evt.request)) {
        //                             //     //   Get broken image placeholder from cache
        //                             //     // return caches.match("/img/FAVICONS.png");
        //                             //     // return caches.match("./fallback.png");
        //                             //     // return caches.match("/img/FAVICONS.png");

        //                             //     return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">X</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});

        //                             // }

        //                           // }) 
        //     );
        // });


    //

    // NINJA



        // const limitCacheSize = (name, size) => {
        //     caches.open(name).then(cache => {
        //       cache.keys().then(keys => {
        //         if(keys.length > size){
        //           cache.delete(keys[0]).then(limitCacheSize(name, size));
        //         }
        //       });
        //     });
        // };
        
        // self.addEventListener('install', evt => {
        //   console.log('service worker installed');
        //   evt.waitUntil(
        //     caches.open(staticCacheName).then(cache => {
        //       console.log('caching shell assets');
        //       cache.addAll(StaticAssets);
        //     })
        //   );
        // });
        
        // self.addEventListener('activate', evt => {
        //     console.log('service worker activated');
        //   // KEYS are cache NAME Version
        //   evt.waitUntil(
        //     caches.keys().then(keys => {
        //       console.log(keys);
        //       return Promise.all(keys
        //         .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        //         .map(key => caches.delete(key))
        //       )
        //     })
        //     );

        // });

        // function isImage(fetchRequest) {
        //   return fetchRequest.method === "GET"
        //         && fetchRequest.destination === "image";
        // };

        // self.addEventListener('fetch', evt => {
        //     console.log('fetch event', evt);
        //     evt.respondWith(
        //           caches.match(evt.request)
                    
        //             .then(cacheRes => {
        //               return cacheRes || fetch(evt.request).then(fetchRes => {
        //                   return caches.open(dynamicCacheName).then(cache => {
        //                     cache.put(evt.request.url, fetchRes.clone());
        //                     // check cached items size
        //                     limitCacheSize(dynamicCacheName, 100);
        //                     return fetchRes;
        //                   })
        //               })

        //             })
                    
        //             .catch(() => {

        //             //   if(evt.request.url.indexOf('.php') > -1){
        //             //     return caches.match('./fallback.html');
        //             //   }

        //             if (isImage(evt.request)) {
        //                 //   Get broken image placeholder from cache
        //                 // return caches.match("/img/FAVICONS.png");
        //                 // return caches.match("./fallback.png");
        //                 // return caches.match("/img/FAVICONS.png");

        //                 return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">X</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});

        //             }

        //             }) 
        //     );
        // });


        // try
            // self.addEventListener('fetch', event => {
            //     event.respondWith(
            //       caches.open(CACHE_NAME).then(cache => {
            //         return cache.match(event.request).then(response => {
            //             return response || fetch(event.request)
            //             .then(response => {
            //                 const responseClone = response.clone();
            //                 cache.put(event.request, responseClone);
            // return new Response("Network error happened", {"status" : 408, "headers" : {"Content-Type" : "text/plain"}});
            //             })
            //         });
            //       })
            //     )
            // });
        //

        //TRY
            // self.addEventListener('fetch', function(event) {
            //     event.respondWith(
            //     fetch(event.request).catch(function() {
            //         return caches.match(event.request);
            //     })
            //     );
            // });
        //

        //TRY
            // addEventListener('fetch', function(event) {
            //     event.respondWith(
            //     caches.match(event.request)
            //         .then(function(response) {
            //         if (response) {
            //             return response;     // if valid response is found in cache return it
            //         } else {
            //             return fetch(event.request)     //fetch from internet
            //             .then(function(res) {
            //                 return caches.open(CACHE_DYNAMIC_NAME)
            //                 .then(function(cache) {
            //                     cache.put(event.request.url, res.clone());    //save the response for future
            //                     return res;   // return the fetched data
            //                 })
            //             })
            //             .catch(function(err) {       // fallback mechanism
            //                 return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
            //                 .then(function(cache) {
            //                     return cache.match('/offline.html');
            //                 });
            //             });
            //         }
            //         })
            //     );
            // });
        //

    //

    // sw-debugger-simpole
        // Copyright 2016 Google Inc.
        // 
        // Licensed under the Apache License, Version 2.0 (the "License");
        // you may not use this file except in compliance with the License.
        // You may obtain a copy of the License at
        // 
        //      http://www.apache.org/licenses/LICENSE-2.0
        // 
        // Unless required by applicable law or agreed to in writing, software
        // distributed under the License is distributed on an "AS IS" BASIS,
        // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        // See the License for the specific language governing permissions and
        // limitations under the License.

        // var CACHE_NAME = 'my-site-cache-v1';
        // var urlsToCache = [
        //   './',
        //   './index.php',
        //   './assets/punch-homepage-BTF.php',
        //   './website-design-builder-animation-mobile.php',

        //   './thesansextralight_plain-webfont.woff',
        //   './thesansextralight_plain-webfont.woff2',
        //   './lib/TweenMax.min.js',
        //   './lib/PLUGINS.min.js',
        //   './punch.webmanifest',
        //   './fallback.html',
        //   './fallback.png',

        //   'https://www.facebook.com/rsrc.php/v3/y5/r/OqOE21UvWe3.png',

        //   './favicon.ico',
        //   './img/icons/favicon-16x16.png',
        //   './img/icons/favicon-32x32.png',
        //   './img/icons/favicon-194x194.png',
        //   './img/icons/apple-touch-icon.png',
        //   './img/icons/apple-touch-icon-72x72.png',
        //   './img/icons/apple-touch-icon-120x120.png',
        //   './img/icons/apple-touch-icon-144x144.png',
        //   './img/icons/apple-touch-icon-152x152.png',
        //   './img/icons/android-chrome-96x96.png',
        //   './img/icons/android-chrome-192x192.png',
        //   './img/icons/android-chrome-512x512.png',
        //   './img/icons/mstile-48x48.png',
        //   './img/icons/mstile-144x144.png',
        //   './img/icons/mstile-270x270.png',
        //   './img/icons/mstile-558x558.png',
        //   './img/icons/mstile-558x270.png',

        //   './img/bcg-img-sect1.jpg',
        //   './img/green-hook.png',
        //   './img/rapport-logos1.png',
        //   './img/rapport-logos2.png',
        //   './img/rapport-logos3.png',
        //   './img/rapport-logos4.png',
        //   './img/rapport-logos5.png',
        //   './img/rapport-logos6.png',
        //   './img/cie-bing.png',
        //   './img/cie-yahoo.png',
        //   './img/cie-google.png',
        //   './img/cie-seo.png',
        //   './img/programming-code-robuste.jpg',
        //   './img/logo-tech.png',
        //   './img/logo-browser.png',
        //   './img/logo-perf.png',
        //   './img/img-traffic.png',
        //   './img/img-traffic2.jpg',
        //   './img/semrush.png',
        //   './img/analytics.png',
        //   './img/bcg-img-sect2.jpg',
        //   './img/client-content.jpg',
        //   './img/test-web-dev.png',
        //   './img/test-gtmetrix.jpg',  
        //   './img/test-seo-tester2.jpg',
        //   `./img/test-security-headers-netsparker.jpg`,
        //   './img/recent-mtech.jpg',
        //   './img/client-content2.png',
        //   './img/footer-bcg.jpg',
        //   './img/yantra-big-black.png',
        //   './img/Danny.png',
        //   './img/signature-white1.png',
        //   './img/punch-green.png',
        //   './img/punch-red.png',
        //   './img/img-punch-heureux.png',
        //   './img/big-logo.png',
        //   './img/button-call.png',
        //   './img/button-text.png',



        //   './forfaits.php',
        //   './assets/punch-forfaits-BTF.php'
        // ];

        // function isImage(fetchRequest) {
        //   return fetchRequest.method === "GET"
        //         && fetchRequest.destination === "image";
        // };

        // self.addEventListener('install', function(event) {
        //   // Perform install steps
        //   event.waitUntil(
        //     caches.open(CACHE_NAME)
        //       .then(function(cache) {
        //         return cache.addAll(urlsToCache);
        //       })
        //   );  
        // });

        // self.addEventListener('activate', function(event) {
        //   console.log('Finally active. Ready to start serving content!');  
        // });

        // self.addEventListener('fetch', function(event) {

        //   event.respondWith(

        //     caches.match(event.request)
        //       .then(function(response) {
        //         // Cache hit - return response
        //         if (response) {
        //           return response;
        //         }
        //         return fetch(event.request);
        //           // return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">X</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});
        //       })
        //       // .catch(() => {

        //       //     if(event.request.url.indexOf('.php') > -1){
        //       //                   return caches.match('./fallback.html');
        //       //     };
                
        //       //     if (isImage(event.request)) {
        //       //       //                   //   Get broken image placeholder from cache
        //       //       //             // return caches.match("/img/FAVICONS.png");
        //       //                         return caches.match("./fallback.png");
        //       //       //                   // return caches.match("/img/FAVICONS.png");
                    
        //       //           // return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">X</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});
                
        //       //     };

        //       // })
                
            
        //   );
        // });

        // self.addEventListener('push', function(event) {  
        //   var title = 'Yay a message.';  
        //   var body = 'We have received a push message.';  
        //   var icon = '/images/smiley.svg';  
        //   var tag = 'simple-push-example-tag';
        //   event.waitUntil(  
        //     self.registration.showNotification(title, {  
        //       body: body,  
        //       icon: icon,  
        //       tag: tag  
        //     })  
        //   );  
        // });
    //
    
//



// DATA-IMG-SRC to src
// TRY data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7
// <img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
// BLUR on placeholder but don't need
    // let imagesToLoad = document.querySelectorAll('img[data-img-src]');
    // const loadImages = (image) => {
    //     image.setAttribute('src', image.getAttribute('data-img-src'));
    //     image.onload = () => {
    //     image.removeAttribute('data-img-src');
    //   };
    // };
    // imagesToLoad.forEach((img) => {
    //     loadImages(img);
    // });
//

// FIX TO FETCH IMG FROM CACHE
// Determine the images to be lazy loaded
    // // const lazyImages = document.querySelectorAll('img[data-img-src]');

    // // // Check for Cache support
    // if (window.caches) {
    // const lazyImages = Array.prototype.slice.call(document.querySelectorAll('img[data-img-src]'));

    // Promise.all(lazyImages.map(img => {
    //     const src = img.dataset.src;

    //     // Check if response for this image is cached
    //     return window.caches.match(src)
    //     .then(response => {
    //     if (response) {
    //         // The image is cached - load it
    //         img.setAttribute('src', src);
    //         img.setAttribute('alt', img.datasrc.alt);
    //         img.removeAttribute('data-img-src');
    //         img.removeAttribute('data-alt');
    //     }
    //     })
    // }))
    // .then(initialiseLazyLoading); // finished loads from cache, lazy load others
    // } else {
    // // cache not supported - lazy load all
    // initialiseLazyLoading();
    // }

    // function initialiseLazyLoading() {
    // // Determine the images to be lazy loaded
    // const lazyImages = document.querySelectorAll('img[data-img-src]');

    // // ... set up lazy loading
    // }
//