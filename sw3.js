var CACHE_STATIC_NAME = 'static-v74';
var CACHE_DYNAMIC_NAME = 'dynamic-v74';

self.addEventListener('install', function (event) {
  console.log('Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function (cache) {
        console.log('Precaching App Shell');
        cache.addAll([
          './',
          './index.php',
        
          './sw3.js',
        
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
        ]);
      })
  )
});

self.addEventListener('activate', function (event) {
  console.log('Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the network
    fetch(event.request)
      .then(function(res) {
        return caches.open(CACHE_DYNAMIC_NAME)
          .then(function(cache) {
            // Put in cache if succeeds
            cache.put(event.request.url, res.clone());
            return res;
          })
      })
      .catch(function(err) {
          // Fallback to cache
          return caches.match(event.request)
            .then(function(res){
              if (res === undefined) { 
                // get and return the offline page
              } 
              return res;
          })
      })
  );
});

