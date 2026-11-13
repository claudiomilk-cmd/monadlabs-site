// O site não usa mais cópia offline (atrapalhava as portas do IPFS e mostrava páginas velhas).
// Quem visitou antes recebe este arquivo, que apaga a cópia guardada e se desliga.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k))))
    .then(() => self.registration.unregister())));
