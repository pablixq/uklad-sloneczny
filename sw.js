/* Service worker — offline po pierwszym wejściu.
   Strategia: network-first z limitem 3,5 s, potem kopia z cache.
   Dzięki temu online zawsze świeża treść, a offline strona nadal działa. */
const CACHE = "uklad-sloneczny-v1";
const PLIKI = [
  "./",
  "./index.html",
  "./assets/style.css",
  "./assets/app.js",
  "./assets/dane.js",
  "./manifest.webmanifest",
  "./ikony/icon-192.png",
  "./ikony/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(PLIKI))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((klucze) => Promise.all(klucze.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function zSieci(req) {
  return new Promise((resolve, reject) => {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 3500);
    fetch(req, { signal: ctrl.signal }).then(
      (r) => { clearTimeout(t); resolve(r); },
      (err) => { clearTimeout(t); reject(err); }
    );
  });
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    zSieci(req)
      .then((res) => {
        if (res && res.status === 200) {
          const kopia = res.clone();
          caches.open(CACHE).then((c) => c.put(req, kopia)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => hit || caches.match("./index.html"))
      )
  );
});
