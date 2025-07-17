import { useEffect } from 'react';
import { validateCurrentUrl, getCanonicalUrl } from '../utils/urlNormalization';

const IndexingMonitor = () => {
  useEffect(() => {
    // Check for common indexing issues
    const checkIndexingIssues = () => {
      const issues = [];
      
      // Check canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical || !canonical.href) {
        issues.push('Missing canonical URL');
      }
      
      // Check meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription || metaDescription.content.length < 120) {
        issues.push('Meta description too short or missing');
      }
      
      // Check title
      if (!document.title || document.title.length < 30) {
        issues.push('Title too short or missing');
      }
      
      // Use URL validation utility
      const urlValidation = validateCurrentUrl();
      if (!urlValidation.isValid) {
        urlValidation.issues.forEach(issue => {
          issues.push(`${issue.type}: ${issue.message}`);
        });
      }
      
      // Check robots meta
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta && robotsMeta.content.includes('noindex')) {
        issues.push('Page marked as noindex');
      }
      
      // Check for structured data
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      if (!structuredData) {
        issues.push('Missing structured data');
      }
      
      // Log issues in development
      if (import.meta.env.DEV && issues.length > 0) {
        console.group('🔍 Indexing Issues Detected:');
        issues.forEach(issue => console.warn('⚠️', issue));
        console.groupEnd();
      }
      
      // Log current URL info for debugging
      if (import.meta.env.DEV) {
        console.group('📍 Current URL Info:');
        console.log('Current URL:', urlValidation.currentUrl);
        console.log('Canonical URL:', urlValidation.canonicalUrl);
        console.log('Is Valid:', urlValidation.isValid);
        if (urlValidation.issues.length > 0) {
          console.log('Issues:', urlValidation.issues);
        }
        console.groupEnd();
      }
      
      return issues;
    };
    
    // Run check after component mounts
    setTimeout(checkIndexingIssues, 1000);
    
    // Check for redirect status
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
