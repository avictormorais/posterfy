#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

const log = (color, message) => console.log(`${color}${message}${colors.reset}`);

const testUrls = [
  'https://posterfy.pics/',
  'https://www.posterfy.pics/',
  'http://posterfy.pics/',
  'http://www.posterfy.pics/',
  'https://posterfy.pics/sitemap.xml',
  'https://posterfy.pics/robots.txt',
  'https://posterfy.pics/manifest.json'
];

const checkUrl = (url) => {
  try {
    const result = execSync(`curl -I -s -o /dev/null -w "%{http_code};%{redirect_url}" "${url}"`, { encoding: 'utf8' });
    const [statusCode, redirectUrl] = result.trim().split(';');
    
    return {
      url,
      statusCode: parseInt(statusCode),
      redirectUrl: redirectUrl || null
    };
  } catch (error) {
    return {
      url,
      statusCode: 0,
      error: error.message
    };
  }
};

const validateRedirects = () => {
  log(colors.blue, '🔍 Testing URL redirects and responses...\n');
  
  testUrls.forEach(url => {
    const result = checkUrl(url);
    
    if (result.error) {
      log(colors.red, `❌ ${url} - Error: ${result.error}`);
      return;
    }
    
    const statusCode = result.statusCode;
    const redirectUrl = result.redirectUrl;
    
    if (statusCode === 200) {
      log(colors.green, `✅ ${url} - OK (${statusCode})`);
    } else if (statusCode === 301 || statusCode === 302) {
      const redirectTarget = redirectUrl || 'Unknown';
      log(colors.yellow, `🔄 ${url} - Redirect (${statusCode}) -> ${redirectTarget}`);
    } else {
      log(colors.red, `❌ ${url} - Error (${statusCode})`);
    }
  });
  
  log(colors.blue, '\n📋 Recommendations:');
  log(colors.blue, '• All www URLs should redirect to non-www');
  log(colors.blue, '• All HTTP URLs should redirect to HTTPS');
  log(colors.blue, '• Main page should return 200 OK');
  log(colors.blue, '• Static files (sitemap.xml, robots.txt) should return 200 OK');
};

const checkSeoFiles = () => {
  log(colors.blue, '\n🔍 Checking SEO files...\n');
  
  try {
    const sitemapPath = './public/sitemap.xml';
    const robotsPath = './public/robots.txt';
    const redirectsPath = './public/_redirects';
    
    // Check sitemap
    const sitemap = readFileSync(sitemapPath, 'utf8');
    if (sitemap.includes('https://posterfy.pics/')) {
      log(colors.green, '✅ sitemap.xml - Contains correct URLs');
    } else {
      log(colors.red, '❌ sitemap.xml - Missing or incorrect URLs');
    }
    
    // Check robots.txt
    const robots = readFileSync(robotsPath, 'utf8');
    if (robots.includes('Sitemap: https://posterfy.pics/sitemap.xml')) {
      log(colors.green, '✅ robots.txt - Contains correct sitemap URL');
    } else {
      log(colors.red, '❌ robots.txt - Missing or incorrect sitemap URL');
    }
    
    // Check redirects
    const redirects = readFileSync(redirectsPath, 'utf8');
    if (redirects.includes('https://posterfy.pics/')) {
      log(colors.green, '✅ _redirects - Contains correct redirect rules');
    } else {
      log(colors.red, '❌ _redirects - Missing or incorrect redirect rules');
    }
    
  } catch (error) {
    log(colors.red, `❌ Error checking SEO files: ${error.message}`);
  }
};

// Run checks
validateRedirects();
checkSeoFiles();

log(colors.blue, '\n🚀 Next steps:');
log(colors.blue, '1. Deploy these changes to your hosting provider');
log(colors.blue, '2. Test the URLs again after deployment');
log(colors.blue, '3. Submit the sitemap to Google Search Console');
log(colors.blue, '4. Request reindexing in Google Search Console');
