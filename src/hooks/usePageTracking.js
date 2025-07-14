import { useEffect } from 'react';
import { trackPageView } from '../services/analytics';

export const usePageTracking = () => {
  useEffect(() => {
    trackPageView(document.title, window.location.href);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target.nodeName === 'TITLE') {
          trackPageView(document.title, window.location.href);
        }
      });
    });

    const titleElement = document.querySelector('title');
    if (titleElement) {
      observer.observe(titleElement, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);
};
