const CACHE_NAME = 'trip-planner-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icon.png',
  './manifest.json'
];

// 1. 安裝 Service Worker 並快取關鍵檔案
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// 2. 攔截網路請求 (Network First 策略)
// 因為您的 App 使用了外部 CDN (React, Tailwind)，我們優先使用網路，
// 只有在請求我們自己的圖片或 HTML 時才嘗試快取管理。
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // 如果請求成功，且是我們自己的檔案，就複製一份進快取
        if(networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
            });
        }
        return networkResponse;
      })
      .catch(() => {
        // 如果網路失敗 (離線)，嘗試從快取讀取
        return caches.match(event.request);
      })
  );
});

// 3. 清除舊的快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});