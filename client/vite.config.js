import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  define: {
    '__BUILD_TIME__': JSON.stringify(Date.now().toString())
  },
  plugins: [
    react(),
    VitePWA({
      registerType: false,
      injectRegister: false,
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: false,
        clientsClaim: false,
        globPatterns: [],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.spotify\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'spotify-api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              }
            }
          },
          {
            urlPattern: /^https:\/\/i\.scdn\.co\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'spotify-images-cache',
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      },
      manifest: {
        name: 'Posterfy - Album Poster Generator',
        short_name: 'Posterfy',
        description: 'Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums.',
        theme_color: '#01b755',
        background_color: '#070815',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/ico.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/ico.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['styled-components', 'react-icons'],
          i18n: ['i18next', 'react-i18next']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components']
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
})
