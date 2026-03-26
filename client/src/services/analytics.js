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

export const trackCommunityPosterView = (posterId, albumName, artistName = '') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'community_poster_view', {
      event_category: 'Community',
      event_label: artistName ? `${artistName} - ${albumName}` : albumName,
      poster_id: posterId,
      album_name: albumName,
      artist_name: artistName,
    });
  }
};

export const trackCommunityPosterPublish = (albumName, artistName = '', visibility = 'public') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'community_poster_publish', {
      event_category: 'Community',
      event_label: artistName ? `${artistName} - ${albumName}` : albumName,
      album_name: albumName,
      artist_name: artistName,
      visibility,
    });
  }
};

export const trackCommunityPosterSave = (posterId, albumName, artistName = '') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'community_poster_save', {
      event_category: 'Community',
      event_label: artistName ? `${artistName} - ${albumName}` : albumName,
      poster_id: posterId,
      album_name: albumName,
      artist_name: artistName,
    });
  }
};

export const trackCommunityPosterDownload = (posterId, albumName, artistName = '', format = 'png') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'community_poster_download', {
      event_category: 'Community',
      event_label: artistName ? `${artistName} - ${albumName}` : albumName,
      poster_id: posterId,
      album_name: albumName,
      artist_name: artistName,
      file_type: format,
    });
  }
};

export const trackCommunityPosterOpenInEditor = (posterId, albumName, artistName = '') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'community_poster_open_editor', {
      event_category: 'Community',
      event_label: artistName ? `${artistName} - ${albumName}` : albumName,
      poster_id: posterId,
      album_name: albumName,
      artist_name: artistName,
    });
  }
};

export const trackCommunitySearch = (searchTerm) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'community_search', {
      event_category: 'Community',
      event_label: searchTerm,
      search_term: searchTerm,
    });
  }
};

export const trackCommunityFilterChange = (filterKey) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'community_filter_change', {
      event_category: 'Community',
      event_label: filterKey,
      filter_key: filterKey,
    });
  }
};

export const trackProfileView = (username, isOwner = false) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_view', {
      event_category: 'Profile',
      event_label: username,
      username,
      is_owner: isOwner,
    });
  }
};

export const trackProfileSearch = (searchTerm) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_search', {
      event_category: 'Profile',
      event_label: searchTerm,
      search_term: searchTerm,
    });
  }
};

export const trackProfileCardClick = (username, rank = null) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_card_click', {
      event_category: 'Profile',
      event_label: username,
      username,
      rank: rank || undefined,
    });
  }
};

export const trackProfileEdit = (username) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_edit', {
      event_category: 'Profile',
      event_label: username,
      username,
    });
  }
};

export const trackProfileEditSave = (username, fieldsChanged = []) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_edit_save', {
      event_category: 'Profile',
      event_label: username,
      username,
      fields_changed: fieldsChanged.join(','),
    });
  }
};

export const trackProfileSpotifyConnect = (username) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_spotify_connect', {
      event_category: 'Profile',
      event_label: username,
      username,
    });
  }
};

export const trackProfilePosterPin = (username, posterId) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_poster_pin', {
      event_category: 'Profile',
      event_label: username,
      username,
      poster_id: posterId,
    });
  }
};

export const trackProfilePosterDelete = (username, posterId, albumName = '') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_poster_delete', {
      event_category: 'Profile',
      event_label: albumName || posterId,
      username,
      poster_id: posterId,
    });
  }
};

export const trackProfilePosterVisibility = (username, posterId, visibility) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'profile_poster_visibility', {
      event_category: 'Profile',
      event_label: `${visibility}`,
      username,
      poster_id: posterId,
      visibility,
    });
  }
};
