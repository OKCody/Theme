---
layout: null
permalink: /sw.js
---
var cacheName = 'hello-world-page';
var filesToCache = [
  '/assets/css/custom.css',
  '/assets/css/hmbgr.svg',
  '/sw.js',
  {% for page in site.html_pages %}'{{ page.url }}'{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
