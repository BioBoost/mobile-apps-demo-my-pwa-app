// Listen for the SKIP_WAITING event
// This will activate the service worker
self.addEventListener('message', (event) => {
  console.log(event)
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});