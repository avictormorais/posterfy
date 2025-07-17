import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const domain = process.env.VITE_DOMAIN || '.space';
const baseUrl = `https://posterfy${domain}`;

console.log(`🌐 Building SEO files for domain: ${baseUrl}`);

const sitemapTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
</urlset>`;

const robotsTemplate = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Block certain paths that shouldn't be indexed
Disallow: /src/
Disallow: /*.json$
Disallow: /*.env$`;

const redirectsTemplate = `# Redirect all traffic to HTTPS and canonical domain
http://posterfy${domain}/* ${baseUrl}/:splat 301!
http://www.posterfy${domain}/* ${baseUrl}/:splat 301!
https://www.posterfy${domain}/* ${baseUrl}/:splat 301!

# Static files - serve directly without redirects
/sitemap.xml  /sitemap.xml  200
/robots.txt   /robots.txt   200
/manifest.json /manifest.json 200
/ico.png      /ico.png      200
/albuns.png   /albuns.png   200
/vite.svg     /vite.svg     200

# Assets folder - serve directly
/assets/*     /assets/:splat 200

# API redirects (if needed)
/api/*  /.netlify/functions/:splat  200

# Redirect old URLs to new ones (if any)
/poster-generator  /  301
/album-poster      /  301
/music-poster      /  301

# Handle client-side routing - This should be LAST
/*    /index.html   200
`;

const distPath = join(__dirname, '../dist');
const publicPath = join(__dirname, '../public');

try {
  writeFileSync(join(distPath, 'sitemap.xml'), sitemapTemplate);
  writeFileSync(join(distPath, 'robots.txt'), robotsTemplate);
  writeFileSync(join(distPath, '_redirects'), redirectsTemplate);
  
  writeFileSync(join(publicPath, 'sitemap.xml'), sitemapTemplate);
  writeFileSync(join(publicPath, 'robots.txt'), robotsTemplate);
  writeFileSync(join(publicPath, '_redirects'), redirectsTemplate);
  
  console.log('✅ SEO files updated successfully!');
  console.log(`📝 Base URL: ${baseUrl}`);
  console.log('📁 Files updated: sitemap.xml, robots.txt, _redirects');
} catch (error) {
  console.error('❌ Error updating SEO files:', error);
  process.exit(1);
}
