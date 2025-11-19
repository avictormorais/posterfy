const APP_VERSION = '__BUILD_TIME__';
const VERSION_KEY = 'posterfy_version';

export const checkVersion = () => {
  const currentVersion = localStorage.getItem(VERSION_KEY);
  
  if (currentVersion !== APP_VERSION) {
    const keysToPreserve = ['authToken', 'theme', 'language'];
    const preserved = {};
    
    keysToPreserve.forEach(key => {
      const value = localStorage.getItem(key);
      if (value) preserved[key] = value;
    });
    
    Object.keys(preserved).forEach(key => {
      localStorage.setItem(key, preserved[key]);
    });
    
    localStorage.setItem(VERSION_KEY, APP_VERSION);
    
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name));
      });
    }
  }
};
