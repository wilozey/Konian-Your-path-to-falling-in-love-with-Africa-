const CACHE_NAME = "konian-ivory-v3";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/app-icon-dark.png",
  "./assets/app-icon-cream.png",
  "./assets/app-icon-bronze.png",
  "./assets/konian-lockup.png",
  "./assets/konian-mark.png",
  "./assets/konian-mark-transparent.png",
  "./assets/scenes/savanna-sunset.jpg",
  "./assets/scenes/marrakech-medina.jpg",
  "./assets/scenes/serengeti-plains.jpg",
  "./assets/scenes/cape-town-coast.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
