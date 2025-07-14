export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID not found');
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

export const trackEvent = (action, category = 'General', label = '', value = 0) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (page_title, page_location) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_title,
      page_location,
    });
  }
};

export const trackPosterDownload = (albumName, format = 'image') => {
  trackEvent('download_poster', 'Engagement', `${albumName} - ${format}`, 1);
};

export const trackAlbumSearch = (searchTerm) => {
  trackEvent('search_album', 'User Interaction', searchTerm, 1);
};

export const trackColorSelection = (colorHex) => {
  trackEvent('color_selection', 'Poster Editor', colorHex, 1);
};

export const trackLanguageChange = (language) => {
  trackEvent('language_change', 'User Preference', language, 1);
};
