import { useEffect } from 'react';

const SEOComponent = ({ 
  title = "Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",
  description = "Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",
  keywords = "album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"
}) => {
  
  useEffect(() => {
    const domain = import.meta.env.VITE_DOMAIN || '.space';
    const baseUrl = `https://posterfy${domain}`;
    const canonical = baseUrl + '/';
    const ogImage = baseUrl + '/albuns.png';
    
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonical_link = document.querySelector('link[rel="canonical"]');
    if (canonical_link) {
      canonical_link.setAttribute('href', canonical);
    } else {
      canonical_link = document.createElement('link');
      canonical_link.setAttribute('rel', 'canonical');
      canonical_link.setAttribute('href', canonical);
      document.head.appendChild(canonical_link);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical);
    }
    
    // Update Twitter Card meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
    
    // Add structured data for current page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": canonical,
      "mainEntity": {
        "@type": "WebApplication",
        "name": "Posterfy",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web Browser",
        "url": baseUrl + '/',
        "description": description,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'dynamic-structured-data';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
  }, [title, description, keywords]);

  return null;
};

export default SEOComponent;
