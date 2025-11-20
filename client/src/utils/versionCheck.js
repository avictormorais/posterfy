const APP_VERSION = '__BUILD_TIME__';
const VERSION_KEY = 'posterfy_version';

export const checkVersion = async () => {
  try {
    const response = await fetch('/version.json?t=' + Date.now(), {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });
    const data = await response.json();
    const serverVersion = data.version;
    const currentVersion = localStorage.getItem(VERSION_KEY);
    
    if (currentVersion !== serverVersion) {
      const keysToPreserve = ['authToken', 'theme', 'language'];
      const preserved = {};
      
      keysToPreserve.forEach(key => {
        const value = localStorage.getItem(key);
        if (value) preserved[key] = value;
      });
      
      localStorage.clear();
      
      Object.keys(preserved).forEach(key => {
        localStorage.setItem(key, preserved[key]);
      });
      
      localStorage.setItem(VERSION_KEY, serverVersion);
      
      if ('caches' in window) {
        const names = await caches.keys();
        await Promise.all(names.map(name => caches.delete(name)));
      }
      
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(reg => reg.unregister()));
      }
      
      window.location.reload(true);
    }
  } catch (error) {
    console.log('Version check failed, using local version');
  }
};
