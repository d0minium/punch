
// CHANGE VERSION to effect change ---------------------
// HOMEPAGE
// const Sversion = 0.4
// const staticCacheName = Sversion + ''
const staticCacheName = 'site-static-v0.8';

// OTHER RES when SCROLLING & CLICK
// const Dversion = 0.6
// const dynamicCacheName = Dversion + ''
const dynamicCacheName = 'site-dynamic-v0.6';

// ACTUALLY Are requests of ASSETS to CACHE in install
// HOMEPAGE-GENERAL-HOMEIMG-PAGES+IMG
// --------ADD ICONS TO GENERAL & IMG OF FORFAITS
const StaticAssets = [
    './',
    './index.php',
    './assets/punch-homepage-BTF.php',
    './website-design-builder-animation-mobile.php',

    './thesansextralight_plain-webfont.woff',
    './thesansextralight_plain-webfont.woff2',
    './lib/TweenMax.min.js',
    './lib/PLUGINS.min.js',
    './punch.webmanifest',
    './fallback.html',
    './fallback.png',

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



    './forfaits.php',
    './assets/punch-forfaits-BTF.php',

  ];

  // OTHER things TO CACHE
  // 'https://www.youtube.com/embed/jv9Tcfltjg8',
  // 'https://www.youtube.com/embed/Fx3-fUyctP0',
  // 'https://www.youtube.com/embed/yBJrvEhRmhk',
//


// NINJA
  const limitCacheSize = (name, size) => {
      caches.open(name).then(cache => {
        cache.keys().then(keys => {
          if(keys.length > size){
            cache.delete(keys[0]).then(limitCacheSize(name, size));
          }
        });
      });
  };


  // 1- install event
    self.addEventListener('install', evt => {
      console.log('service worker installed');
      evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
          console.log('caching shell assets');
          cache.addAll(StaticAssets);
        })
      );
    });
  //

  // 2- activate event
    self.addEventListener('activate', evt => {
      console.log('service worker activated');
      // KEYS are cache NAME Version
      evt.waitUntil(
        caches.keys().then(keys => {
          console.log(keys);
          return Promise.all(keys
            .filter(key => key !== staticCacheName && key !== dynamicCacheName)
            .map(key => caches.delete(key))
          )
        })
      );

    });

  //

  // 3- fetch events TO get CSS JS FONT PHP GOOGLE etc...

    function isImage(fetchRequest) {
      return fetchRequest.method === "GET"
            && fetchRequest.destination === "image";
    }


    self.addEventListener('fetch', evt => {
        console.log('fetch event', evt);
        evt.respondWith(

              caches.match(evt.request)
              
                .then(cacheRes => {
                  return cacheRes || fetch(evt.request).then(fetchRes => {
                      return caches.open(dynamicCacheName).then(cache => {
                        cache.put(evt.request.url, fetchRes.clone());
                        // check cached items size
                        limitCacheSize(dynamicCacheName, 15);
                        return fetchRes;
                      })
                  })
                })
              
                .catch(() => {

                  // if(evt.request.url.indexOf('.php') > -1){
                  //   return caches.match('/fallback.html');
                  // }

                  if (isImage(evt.request)) {
                      //   Get broken image placeholder from cache
                      // return caches.match("/img/FAVICONS.png");
                      // return caches.match("/fallback.png");
                      // return caches.match("/img/FAVICONS.png");

                      return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">X</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});

                  }

             

                  // if (isImage(evt.request)) {
                  //   // Get broken image placeholder from cache
                  //   return caches.match('/img/FAVICONS.png');
                  // }

                  // return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">X</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});


                  // if(evt.request.url.indexOf('.png') > -1){
                  //   return caches.match('/img/FAVICONS.png');
                  // };

                  // if(evt.request.url.indexOf('.jpg') > -1){
                  //   return caches.match('/img/fallback.jpg');
                  // }

                }) 

        );

    });

    // function isImage(fetchRequest) {
      //   return fetchRequest.method === "GET"
      //         && fetchRequest.destination === "image";
    // }

    // self.addEventListener('fetch', (e) => {
      //   e.respondWith(

      //       fetch(e.request)

      //           .then((response) => {
      //               if (response.ok) return response;

      //               // User is online, but response was not ok
      //               if (isImage(e.request)) {
      //                   // Get broken image placeholder from cache
      //                   return caches.match("/img/FAVICONS.png");
      //               }
      //           })
      //           .catch((err) => {

      //               // User is probably offline
      //               if (isImage(e.request)) {
      //                   // Get broken image placeholder from cache
      //                   return caches.match("/img/FAVICONS.png");
      //               }

      //           }) 


      //   )
    // });

    // OTHER FETCH EX

      // function isImage(fetchRequest) {
        //   return fetchRequest.method === "GET"
        //          && fetchRequest.destination === "image";
        // }
      // self.addEventListener('fetch', (e) => {
        //   e.respondWith(
        //       fetch(e.request)
        //           .then((response) => {
        //               if (response.ok) return response;
                      
        //               // User is online, but response was not ok
        //               if (isImage(e.request)) {
        //                   // do something
        //                   return caches.match("/img/FAVICONS.png");
        //               }
        //           })
        //           .catch((err) => {
        //               // User is probably offline
        //               if (isImage(e.request)) {
        //                   // do something
        //                   return caches.match("/img/FAVICONS.png");
        //               }
        //           })
        //   )
      // });


      // self.addEventListener('fetch', (e) => {
        //   e.respondWith(
        //       fetch(e.request)
        //           .then((response) => {
        //               if (response.ok) return response;
                      
        //               // User is online, but response was not ok
        //               if (isImage(e.request)) {
        //                   // Get broken image placeholder from cache
        //                   return caches.match("/img/FAVICONS.png");
        //               }

        //           })
        //           .catch((err) => {

        //               // User is probably offline
        //               if (isImage(e.request)) {
        //                   // Get broken image placeholder from cache
        //                   return caches.match("/img/FAVICONS.png");
        //               }

        //           })
        //   )
      // });

      // self.addEventListener('fetch', evt => {
        //   // console.log('fetch event', evt); 
        // //   if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
        //     evt.respondWith(
        //       caches.match(evt.request).then(cacheRes => {
        //           return cacheRes || fetch(evt.request).then(fetchRes => {
        //             return caches.open(dynamicCacheName).then(cache => {
        //             cache.put(evt.request.url, fetchRes.clone());
        //             // check cached items size
        //             // limitCacheSize(dynamicCacheName, 15);
        //             return fetchRes;
        //           })

        //     }).catch(() => {
        //       if(evt.request.url.indexOf('.php') > -1){
        //         return caches.match('/fallback');
        //       }
        //     })        
          
            
              
            

        //     );
        //   // }
      // });
    //

  // 
//   