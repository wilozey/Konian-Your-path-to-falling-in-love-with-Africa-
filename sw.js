const CACHE_NAME = "konian-logo-rotation-v4";
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
  "./assets/scenes/cape-town-coast.jpg",
  "./assets/logo-variations/bronze-pattern.png",
  "./assets/logo-variations/bronze-sunset.png",
  "./assets/logo-variations/emerald-classic.png",
  "./assets/logo-variations/emerald-compass.png",
  "./assets/logo-variations/emerald-minimal.png",
  "./assets/logo-variations/ivory-africa.png",
  "./assets/logo-variations/ivory-baobab.png",
  "./assets/logo-variations/ivory-classic.png",
  "./assets/logo-variations/ivory-watercolor.png",
  "./assets/logo-variations/onyx-africa-heart.png",
  "./assets/logo-variations/onyx-brush.png",
  "./assets/logo-variations/onyx-classic.png",
  "./assets/logo-variations/onyx-flight.png",
  "./assets/logo-variations/onyx-kmark.png",
  "./assets/logo-variations/onyx-ring.png",
  "./assets/logo-variations/onyx-seal.png",
  "./assets/logo-variations/onyx-spark.png",
  "./assets/logo-variations/sunset-savanna.png"
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
