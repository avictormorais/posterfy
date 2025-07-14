import { useEffect } from 'react';

const AnalyticsInitializer = () => {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const domain = import.meta.env.VITE_DOMAIN;
    
    if (gaId && domain) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);
      
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', gaId);
        
        window.gtag = gtag;
      };
    }
  }, []);

  return null;
};

export default AnalyticsInitializer;
