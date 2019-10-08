// https://jakearchibald.github.io/trained-to-thrill/ DONT WORK TOO COMPLICATED

/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

require('serviceworker-cache-polyfill');

var version = 'v15';
var staticCacheName = 'trains-static-v15';

self.oninstall = function(event) {
  self.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
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
  );
};

var expectedCaches = [
  staticCacheName,
  'trains-imgs',
  'trains-data'
];

self.onactivate = function(event) {
  if (self.clients && clients.claim) {
    clients.claim();
  }

  // remove caches beginning "trains-" that aren't in
  // expectedCaches
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (/^trains-/.test(cacheName) && expectedCaches.indexOf(cacheName) == -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
};

self.onfetch = function(event) {
  var requestURL = new URL(event.request.url);

  if (requestURL.hostname == 'api.flickr.com') {
    event.respondWith(flickrAPIResponse(event.request));
  }
  else if (/\.staticflickr\.com$/.test(requestURL.hostname)) {
    event.respondWith(flickrImageResponse(event.request));
  }
  else {
    event.respondWith(
      caches.match(event.request, {
        ignoreVary: true
      })
    );
  }
};

function getPhotoURL(photo) {
  return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_c.jpg';
}

function flickrAPIResponse(request) {
  if (request.headers.get('x-use-cache-only')) {
    return caches.match(request);
  }
  else if (request.headers.get('x-cache-warmup')) {
    var headers = new Headers(request.headers);
    headers.delete('x-cache-warmup');
    return flickrAPIResponse(new Request(request, {headers: headers})).then(function(response) {
      return response.json();
    }).then(function(data) {
      var imgRequests = data.photos.photo.map(getPhotoURL).map(function(url) {
        return new Request(url, {mode: 'no-cors'});
      });
      return Promise.all(imgRequests.map(flickrImageResponse));
    }).then(function() {
      return caches.match(request);
    });
  }
  else {
    return fetch(request).then(function(response) {
      return caches.open('trains-data').then(function(cache) {
        // clean up the image cache
        Promise.all([
          response.clone().json(),
          caches.open('trains-imgs')
        ]).then(function(results) {
          var data = results[0];
          var imgCache = results[1];

          var imgURLs = data.photos.photo.map(getPhotoURL);

          // if an item in the cache *isn't* in imgURLs, delete it
          imgCache.keys().then(function(requests) {
            requests.forEach(function(request) {
              if (imgURLs.indexOf(request.url) == -1) {
                imgCache.delete(request);
              }
            });
          });
        });

        cache.put(request, response.clone());

        return response;
      });
    });
  }
}

function flickrImageResponse(request) {
  return caches.match(request).then(function(response) {
    if (response) {
      return response;
    }

    return fetch(request).then(function(response) {
      caches.open('trains-imgs').then(function(cache) {
        cache.put(request, response);
      });

      return response.clone();
    });
  });
}
