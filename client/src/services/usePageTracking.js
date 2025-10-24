import { useEffect } from 'react';
import { trackPageView } from '../services/analytics';

export const usePageTracking = (pageTitle, pagePath) => {
  useEffect(() => {
    trackPageView(pageTitle, window.location.origin + pagePath);
  }, [pageTitle, pagePath]);
};

export default usePageTracking;
