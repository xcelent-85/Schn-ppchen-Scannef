self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method === 'POST' && url.pathname.endsWith('/share-target')) {
    event.respondWith((async () => {
      const data = await event.request.formData();
      const params = new URLSearchParams();
      for (const key of ['title','text','url']) {
        const value = data.get(key);
        if (value) params.set(key, String(value));
      }
      return Response.redirect('./?' + params.toString(), 303);
    })());
  }
});