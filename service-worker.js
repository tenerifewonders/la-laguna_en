const CACHE_NAME = "la-laguna-en-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./la-laguna.geojson",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/0.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/la-laguna_en/8.mp3"
];

const TILES = [
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/13/3723/3417.png",
  "./tiles/13/3723/3418.png",
  "./tiles/13/3723/3419.png",
  "./tiles/13/3723/3420.png",
  "./tiles/13/3723/3421.png",
  "./tiles/13/3724/3417.png",
  "./tiles/13/3724/3418.png",
  "./tiles/13/3724/3419.png",
  "./tiles/13/3724/3420.png",
  "./tiles/13/3724/3421.png",
  "./tiles/13/3725/3417.png",
  "./tiles/13/3725/3418.png",
  "./tiles/13/3725/3419.png",
  "./tiles/13/3725/3420.png",
  "./tiles/13/3725/3421.png",
  "./tiles/13/3726/3417.png",
  "./tiles/13/3726/3418.png",
  "./tiles/13/3726/3419.png",
  "./tiles/13/3726/3420.png",
  "./tiles/13/3726/3421.png",
  "./tiles/14/7447/6836.png",
  "./tiles/14/7447/6837.png",
  "./tiles/14/7447/6838.png",
  "./tiles/14/7447/6839.png",
  "./tiles/14/7447/6840.png",
  "./tiles/14/7447/6841.png",
  "./tiles/14/7448/6836.png",
  "./tiles/14/7448/6837.png",
  "./tiles/14/7448/6838.png",
  "./tiles/14/7448/6839.png",
  "./tiles/14/7448/6840.png",
  "./tiles/14/7448/6841.png",
  "./tiles/14/7449/6836.png",
  "./tiles/14/7449/6837.png",
  "./tiles/14/7449/6838.png",
  "./tiles/14/7449/6839.png",
  "./tiles/14/7449/6840.png",
  "./tiles/14/7449/6841.png",
  "./tiles/14/7450/6836.png",
  "./tiles/14/7450/6837.png",
  "./tiles/14/7450/6838.png",
  "./tiles/14/7450/6839.png",
  "./tiles/14/7450/6840.png",
  "./tiles/14/7450/6841.png",
  "./tiles/14/7451/6836.png",
  "./tiles/14/7451/6837.png",
  "./tiles/14/7451/6838.png",
  "./tiles/14/7451/6839.png",
  "./tiles/14/7451/6840.png",
  "./tiles/14/7451/6841.png",
  "./tiles/15/14897/13675.png",
  "./tiles/15/14897/13676.png",
  "./tiles/15/14897/13677.png",
  "./tiles/15/14897/13678.png",
  "./tiles/15/14897/13679.png",
  "./tiles/15/14898/13675.png",
  "./tiles/15/14898/13676.png",
  "./tiles/15/14898/13677.png",
  "./tiles/15/14898/13678.png",
  "./tiles/15/14898/13679.png",
  "./tiles/15/14899/13675.png",
  "./tiles/15/14899/13676.png",
  "./tiles/15/14899/13677.png",
  "./tiles/15/14899/13678.png",
  "./tiles/15/14899/13679.png",
  "./tiles/15/14900/13675.png",
  "./tiles/15/14900/13676.png",
  "./tiles/15/14900/13677.png",
  "./tiles/15/14900/13678.png",
  "./tiles/15/14900/13679.png",
  "./tiles/16/29795/27352.png",
  "./tiles/16/29795/27353.png",
  "./tiles/16/29795/27354.png",
  "./tiles/16/29795/27355.png",
  "./tiles/16/29795/27356.png",
  "./tiles/16/29796/27352.png",
  "./tiles/16/29796/27353.png",
  "./tiles/16/29796/27354.png",
  "./tiles/16/29796/27355.png",
  "./tiles/16/29796/27356.png",
  "./tiles/16/29797/27352.png",
  "./tiles/16/29797/27353.png",
  "./tiles/16/29797/27354.png",
  "./tiles/16/29797/27355.png",
  "./tiles/16/29797/27356.png",
  "./tiles/16/29798/27352.png",
  "./tiles/16/29798/27353.png",
  "./tiles/16/29798/27354.png",
  "./tiles/16/29798/27355.png",
  "./tiles/16/29798/27356.png",
  "./tiles/16/29799/27352.png",
  "./tiles/16/29799/27353.png",
  "./tiles/16/29799/27354.png",
  "./tiles/16/29799/27355.png",
  "./tiles/16/29799/27356.png",
  "./tiles/17/59592/54705.png",
  "./tiles/17/59592/54706.png",
  "./tiles/17/59592/54707.png",
  "./tiles/17/59592/54708.png",
  "./tiles/17/59592/54709.png",
  "./tiles/17/59592/54710.png",
  "./tiles/17/59592/54711.png",
  "./tiles/17/59593/54705.png",
  "./tiles/17/59593/54706.png",
  "./tiles/17/59593/54707.png",
  "./tiles/17/59593/54708.png",
  "./tiles/17/59593/54709.png",
  "./tiles/17/59593/54710.png",
  "./tiles/17/59593/54711.png",
  "./tiles/17/59594/54705.png",
  "./tiles/17/59594/54706.png",
  "./tiles/17/59594/54707.png",
  "./tiles/17/59594/54708.png",
  "./tiles/17/59594/54709.png",
  "./tiles/17/59594/54710.png",
  "./tiles/17/59594/54711.png",
  "./tiles/17/59595/54705.png",
  "./tiles/17/59595/54706.png",
  "./tiles/17/59595/54707.png",
  "./tiles/17/59595/54708.png",
  "./tiles/17/59595/54709.png",
  "./tiles/17/59595/54710.png",
  "./tiles/17/59595/54711.png",
  "./tiles/17/59596/54705.png",
  "./tiles/17/59596/54706.png",
  "./tiles/17/59596/54707.png",
  "./tiles/17/59596/54708.png",
  "./tiles/17/59596/54709.png",
  "./tiles/17/59596/54710.png",
  "./tiles/17/59596/54711.png",
  "./tiles/17/59597/54705.png",
  "./tiles/17/59597/54706.png",
  "./tiles/17/59597/54707.png",
  "./tiles/17/59597/54708.png",
  "./tiles/17/59597/54709.png",
  "./tiles/17/59597/54710.png",
  "./tiles/17/59597/54711.png"
];

const ALL_RESOURCES = [...ASSETS, ...AUDIO_URLS, ...TILES];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ALL_RESOURCES.map(url => {
          return cache.add(url).catch(err => {
            console.warn(`Failed to cache on install: ${url} - ${err.message}`);
          });
        })
      );
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const url = event.request.url;
        if (url.startsWith(self.location.origin) || url.includes("supabase.co") || url.includes("unpkg.com")) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(err => {
        console.error("Fetch error:", err);
      });
    })
  );
});
