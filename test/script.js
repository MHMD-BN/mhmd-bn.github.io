// script.js
document.addEventListener('DOMContentLoaded', function () {
    if (!("Notification" in window)) {
        document.getElementById('status').textContent = "هذا المتصفح لا يدعم الإشعارات.";
        return;
    }

    document.getElementById('setNotification').addEventListener('click', function () {
        const notificationTime = document.getElementById('notificationTime').value;

        if (!notificationTime) {
            document.getElementById('status').textContent = "يرجى تحديد وقت للإشعار.";
            return;
        }

        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                saveNotificationTime(notificationTime);
                document.getElementById('status').textContent = "تم ضبط الإشعار بنجاح!";
            } else {
                document.getElementById('status').textContent = "لم يتم منحك إذن لإرسال الإشعارات.";
            }
        });
    });

    async function saveNotificationTime(time) {
        const db = await idb.openDB('notifications-db', 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('times')) {
                    db.createObjectStore('times', { keyPath: 'id' });
                }
            }
        });

        await db.put('times', { id: 1, time: time });
        console.log('وقت الإشعار تم تخزينه.');
    }
});
if ('periodicSync' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
        registration.periodicSync.register('check-notifications', {
            minInterval: 60 * 1000 // كل دقيقة
        }).then(() => {
            console.log('Periodic Sync registered');
        }).catch(err => {
            console.error('Periodic Sync registration failed:', err);
        });
    });
}
