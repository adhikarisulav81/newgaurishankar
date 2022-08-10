// install service worker
self.addEventListener('install', evt => {
    console.log('Service Worker Has Been Installed');
});

// activate service worker event
self.addEventListener('activate', evt => {
    console.log('Service Worker Has Been Activated');
});

// fetch service worker event
self.addEventListener('fetch', evt => {
    console.log('Service Worker Has Been Fetched', evt);
});