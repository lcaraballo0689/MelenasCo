// Nuevo service-worker.js mejorado
const serviceWorker = `self.addEventListener(\"install\", (event) => {
    event.waitUntil(
        caches.open(\"cotizador-cache-v1\").then((cache) => {
            return cache.addAll([
                \"/cotizador.html\",
                \"/manifest.json\",
                \"/cotizador.css\",
                \"/js/cotizador.js\",
                \"/icons/icon-192x192.png\",
                \"/icons/icon-512x512.png\"
            ]);
        })
    );
});

self.addEventListener(\"activate\", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== \"cotizador-cache-v1\")
                .map((name) => caches.delete(name))
            );
        })
    );
});

self.addEventListener(\"fetch\", (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                return caches.open(\"cotizador-cache-v1\").then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            })
            .catch(() => caches.match(event.request))
    );
});`;

console.log("Archivos actualizados:", { manifest, serviceWorker });