const CACHE_NAME = "la-laguna-en-v4";

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

// 1. INSTALL: Pre-cache static assets and all audio files for offline use
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log("[SW] Pre-caching assets and audio for offline...");
      await cache.addAll(ASSETS).catch(err => console.warn("[SW] Asset pre-cache warning:", err));
      
      // Pre-fetch all audio files with clean GET requests (no range header) to ensure 200 OK status
      for (const url of AUDIO_URLS) {
        try {
          const req = new Request(url, { method: "GET" });
          const res = await fetch(req);
          if (res && res.status === 200) {
            await cache.put(url, res);
          }
        } catch (err) {
          console.warn("[SW] Audio pre-cache warning for:", url, err);
        }
      }

      // Pre-cache tiles if available
      if (TILES.length > 0) {
        await cache.addAll(TILES).catch(err => console.warn("[SW] Tiles pre-cache warning:", err));
      }
    })
  );
});

// 2. ACTIVATE: Clean old caches & claim clients
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// 3. FETCH: Smart Cache & HTTP Range Request handler for HTML5 <audio> offline playback
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Intercept audio requests (MP3s) or Supabase audio storage URLs
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Standard static assets & tiles
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (!netRes || netRes.status !== 200) {
          return netRes;
        }
        const resToCache = netRes.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files (iOS Safari & Android Chrome)
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  // If not cached yet, fetch online with clean GET
  if (!response) {
    try {
      const cleanReq = new Request(request.url, { method: "GET" });
      const netRes = await fetch(cleanReq);
      if (netRes && netRes.status === 200) {
        await cache.put(request.url, netRes.clone());
        response = netRes;
      } else {
        return netRes;
      }
    } catch (err) {
      console.error("[SW] Audio offline & not cached:", request.url);
      return new Response("Audio offline not available", { status: 503 });
    }
  }

  // Handle Range Header for HTML5 <audio>
  const rangeHeader = request.headers.get("range");
  if (rangeHeader && response) {
    const arrayBuffer = await response.clone().arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;
    const chunk = arrayBuffer.slice(start, end + 1);

    return new Response(chunk, {
      status: 206,
      statusText: "Partial Content",
      headers: new Headers({
        "Content-Range": `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        "Content-Length": chunk.byteLength,
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes"
      })
    });
  }

  return response;
}
