export const trackAlbumSearch = (searchTerm) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'search', {
      search_term: searchTerm,
      custom_parameter: 'album_search'
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'album_search',
      search_term: searchTerm,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

export const trackPosterGeneration = (albumName, artistName) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'generate_poster', {
      event_category: 'engagement',
      event_label: `${artistName} - ${albumName}`,
      custom_parameter: 'poster_creation'
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'poster_generation',
      album_name: albumName,
      artist_name: artistName,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

export const trackPosterDownload = (albumName, artistName, format = 'png') => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download', {
      event_category: 'engagement',
      event_label: `${artistName} - ${albumName}`,
      file_type: format,
      custom_parameter: 'poster_download'
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'poster_download',
      album_name: albumName,
      artist_name: artistName,
      download_format: format,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

export const trackFAQInteraction = (question) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'faq_interaction', {
      event_category: 'engagement',
      event_label: question,
      custom_parameter: 'faq_click'
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'faq_interaction',
      question: question,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

export const trackThemeChange = (themeName) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'theme_change', {
      event_category: 'customization',
      event_label: themeName,
      custom_parameter: 'theme_selection'
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'theme_change',
      theme_name: themeName,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

export const trackLanguageChange = (language) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'language_change', {
      event_category: 'customization',
      event_label: language,
      custom_parameter: 'language_selection'
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'language_change',
      language: language,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

export const trackPageView = (pagePath, pageTitle) => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (typeof gtag !== 'undefined' && gaId) {
    gtag('config', gaId, {
      page_path: pagePath,
      page_title: pageTitle,
      custom_map: {
        'custom_parameter_1': 'album_poster_generator',
        'custom_parameter_2': 'free_music_poster_maker'
      }
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
      content_group1: 'album_poster_generator',
      content_group2: 'music_tools'
    });
  }
};

export const trackScrollDepth = (scrollPercentage) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${scrollPercentage}%`,
      value: scrollPercentage
    });
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'scroll_depth',
      scroll_percentage: scrollPercentage,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

export const initScrollTracking = () => {
  let scrollThresholds = [25, 50, 75, 90];
  let scrolledTo = [];
  
  const trackScrollDepthOnce = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    scrollThresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !scrolledTo.includes(threshold)) {
        scrolledTo.push(threshold);
        trackScrollDepth(threshold);
      }
    });
  };
  
  window.addEventListener('scroll', trackScrollDepthOnce, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', trackScrollDepthOnce);
  };
};
