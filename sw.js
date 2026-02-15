const CACHE_NAME = "river-rating-v1";

const ASSETS = [
  "./",
  "./index.html",

  "./assets/bg.png",
  "./assets/logo.png",

  "./assets/fire.png",
  "./assets/earth.png",
  "./assets/air.png",
  "./assets/water.png",
  "./assets/champion.png",

  "./assets/rank1.png",
  "./assets/rank2.png",
  "./assets/rank3.png",
  "./assets/rank4.png",
  "./assets/rank5.png",
  "./assets/rank6.png",
  "./assets/rank7.png",

  "./assets/t1.png",
  "./assets/t2.png",
  "./assets/t3.png",
  "./assets/t4.png",
  "./assets/t5.png",
  "./assets/t6.png",
  "./assets/t7.png",
  "./assets/t8.png",
  "./assets/t9.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
