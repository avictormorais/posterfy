import { useEffect } from 'react';
import { validateCurrentUrl, getCanonicalUrl } from '../utils/urlNormalization';

const IndexingMonitor = () => {
  useEffect(() => {
    const checkIndexingIssues = () => {
      const issues = [];
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical || !canonical.href) {
        issues.push('Missing canonical URL');
      }
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription || metaDescription.content.length < 120) {
        issues.push('Meta description too short or missing');
      }
      
      if (!document.title || document.title.length < 30) {
        issues.push('Title too short or missing');
      }
      
      const urlValidation = validateCurrentUrl();
      if (!urlValidation.isValid) {
        urlValidation.issues.forEach(issue => {
          issues.push(`${issue.type}: ${issue.message}`);
        });
      }
      
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta && robotsMeta.content.includes('noindex')) {
        issues.push('Page marked as noindex');
      }
      
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      if (!structuredData) {
        issues.push('Missing structured data');
      }
    
      
      return issues;
    };
    
    setTimeout(checkIndexingIssues, 1000);
    
    const checkRedirects = () => {
      const currentUrl = window.location.href;
      const expectedUrl = 'https://posterfy.space/';
      
      if (currentUrl.includes('www.') || currentUrl.startsWith('http://')) {
        if (import.meta.env.DEV) {
          console.warn('🔄 Redirect needed:', currentUrl, '->', expectedUrl);
        }
      }
    };
    
    checkRedirects();
  }, []);
  
  return null;
};

export default IndexingMonitor;
