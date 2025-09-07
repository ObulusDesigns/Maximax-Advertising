/**
 * Service Worker for Maximax Advertising
 * Implements caching strategies for optimal performance
 */

const CACHE_NAME = 'maximax-v1';
const RUNTIME_CACHE = 'maximax-runtime';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/about/',
  '/services/',
  '/contact/',
  '/manifest.json',
  '/images/maximax-dark-logo.png',
  '/images/maximax-logo.png',
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, fallback to network
  cacheFirst: async (request) => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;
    
    try {
      const response = await fetch(request);
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      return new Response('Offline', { status: 503 });
    }
  },
  
  // Network first, fallback to cache
  networkFirst: async (request) => {
    try {
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      const cached = await caches.match(request);
      return cached || new Response('Offline', { status: 503 });
    }
  },
  
  // Stale while revalidate
  staleWhileRevalidate: async (request) => {
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await cache.match(request);
    
    const fetchPromise = fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    });
    
    return cached || fetchPromise;
  }
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map(name => caches.delete(name))
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Fetch event - apply caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http(s) protocols
  if (!url.protocol.startsWith('http')) return;
  
  // Apply different strategies based on resource type
  if (request.destination === 'image') {
    // Images: cache first
    event.respondWith(CACHE_STRATEGIES.cacheFirst(request));
  } else if (request.destination === 'style' || request.destination === 'script') {
    // CSS/JS: stale while revalidate
    event.respondWith(CACHE_STRATEGIES.staleWhileRevalidate(request));
  } else if (url.pathname.startsWith('/api/')) {
    // API calls: network first
    event.respondWith(CACHE_STRATEGIES.networkFirst(request));
  } else if (request.mode === 'navigate') {
    // HTML pages: network first
    event.respondWith(CACHE_STRATEGIES.networkFirst(request));
  } else {
    // Default: stale while revalidate
    event.respondWith(CACHE_STRATEGIES.staleWhileRevalidate(request));
  }
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'form-submission') {
    event.waitUntil(
      // Handle queued form submissions
      self.registration.sync.getTags().then(tags => {
        // Background sync: tags
      })
    );
  }
});

// Message handler for cache management
self.addEventListener('message', (event) => {
  if (event.data.action === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data.action === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(names => {
        return Promise.all(names.map(name => caches.delete(name)));
      })
    );
  }
});