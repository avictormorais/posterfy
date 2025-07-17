// URL Normalization utilities
export const normalizeUrl = (url) => {
  if (!url) return '';
  
  // Remove trailing slash except for root
  const normalized = url.replace(/\/$/, '') || '/';
  
  // Ensure lowercase for domain part
  const urlParts = normalized.split('/');
  if (urlParts.length > 2) {
    urlParts[2] = urlParts[2].toLowerCase();
  }
  
  return urlParts.join('/');
};

export const getCanonicalUrl = () => {
  const domain = import.meta.env.VITE_DOMAIN || '.space';
  const baseUrl = `https://posterfy${domain}`;
  
  // For SPA, always return the root URL as canonical
  return baseUrl + '/';
};

export const shouldRedirect = (currentUrl) => {
  const canonicalUrl = getCanonicalUrl();
  const normalizedCurrent = normalizeUrl(currentUrl);
  const normalizedCanonical = normalizeUrl(canonicalUrl);
  
  // Check for www subdomain
  const hasWww = currentUrl.includes('://www.');
  
  // Check for http protocol
  const isHttp = currentUrl.startsWith('http://');
  
  // Should redirect if:
  // 1. Has www subdomain
  // 2. Uses http protocol
  // 3. Different from canonical (after normalization)
  return hasWww || isHttp || (normalizedCurrent !== normalizedCanonical);
};

export const validateCurrentUrl = () => {
  const currentUrl = window.location.href;
  const canonicalUrl = getCanonicalUrl();
  
  const issues = [];
  
  if (shouldRedirect(currentUrl)) {
    issues.push({
      type: 'redirect_needed',
      current: currentUrl,
      canonical: canonicalUrl,
      message: 'Current URL should redirect to canonical URL'
    });
  }
  
  return {
    isValid: issues.length === 0,
    issues,
    currentUrl,
    canonicalUrl
  };
};
