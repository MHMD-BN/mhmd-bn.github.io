// service-worker.js
const CACHE_NAME = 'quran-notification-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/script.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // Skip waiting to activate the new service worker immediately
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of the clients immediately
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('push', event => {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: data.icon || 'icon.png' // يمكنك إضافة أيقونة هنا إذا كنت تملك واحدة
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
});

function checkForNotifications() {
    const dbPromise = idb.open('notifications-db', 1);

    dbPromise.then(db => {
        const tx = db.transaction('times', 'readonly');
        const store = tx.objectStore('times');
        return store.get(1);
    }).then(notificationTime => {
        if (notificationTime) {
            const now = new Date();
            const [hours, minutes] = notificationTime.time.split(':');
            const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

            if (now.getHours() === parseInt(hours) && now.getMinutes() === parseInt(minutes)) {
                showNotification();
            } else if (now > targetTime) {
                // إعادة الجدولة ليوم الغد بنفس الوقت
                targetTime.setDate(targetTime.getDate() + 1);
            }
        }
    }).catch(err => {
        console.error('Error checking notifications:', err);
    });
}

function showNotification() {
    const title = 'إشعار حفظ القرآن';
    const options = {
        body: 'حان وقت حفظ القرآن! استمر في الحفظ.',
        icon: 'icon.png' // يمكنك إضافة أيقونة هنا إذا كنت تملك واحدة
    };
    self.registration.showNotification(title, options);
}

setInterval(checkForNotifications, 60000); // نتحقق كل دقيقة

// فتح قاعدة بيانات IndexedDB عند تشغيل الخادم
self.onmessage = function(event) {
    if (event.data.action === 'checkNotifications') {
        checkForNotifications();
    }

    self.addEventListener('periodicsync', event => {
    if (event.tag === 'check-notifications') {
        checkForNotifications();
    }
});
};
