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

export const trackPosterDownload = (albumName, format = 'image', artistName = '') => {
  const albumInfo = artistName ? `${artistName} - ${albumName}` : albumName;
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'download_poster', {
      event_category: 'Engagement',
      event_label: albumInfo,
      file_type: format,
      album_name: albumName,
      artist_name: artistName
    });
  }
};

export const trackPosterPreview = (albumName, artistName = '') => {
  const albumInfo = artistName ? `${artistName} - ${albumName}` : albumName;
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_preview', {
      event_category: 'Engagement',
      event_label: albumInfo,
      album_name: albumName,
      artist_name: artistName
    });
  }
};

export const trackAlbumSearch = (searchTerm) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'search_album', {
      event_category: 'User Interaction',
      event_label: searchTerm,
      search_term: searchTerm
    });
  }
};

export const trackColorSelection = (colorHex) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'color_selection', {
      event_category: 'Poster Editor',
      event_label: colorHex,
      color_value: colorHex
    });
  }
};

export const trackLanguageChange = (language) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'language_change', {
      event_category: 'User Preference',
      event_label: language,
      language_value: language
    });
  }
};

export const trackPosterRecreation = (albumName, artistName = '', albumId = '', source = 'album_collection') => {
  const albumInfo = artistName ? `${artistName} - ${albumName}` : albumName;
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'recreate_poster', {
      event_category: 'Engagement',
      event_label: albumInfo,
      album_name: albumName,
      artist_name: artistName,
      album_id: albumId,
      source: source
    });
  }
};
