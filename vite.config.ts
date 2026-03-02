/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'],
      manifest: {
        name: 'Crehul Vlad - Portfolio',
        short_name: 'CV Portfolio',
        description: 'Full-Stack Software Engineer Portfolio',
        theme_color: '#6423b4',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      }
    })
  ],
  base : "/",
  build: {
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core - critical
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }
          // Three.js - non-critical, large library
          if (id.includes('node_modules/three/')) {
            return 'three';
          }
          // React Three Fiber - non-critical
          if (id.includes('@react-three/fiber')) {
            return 'r3f';
          }
          // Other vendor libraries
          if (id.includes('node_modules/delaunator') || id.includes('node_modules/lodash')) {
            return 'utils';
          }
          // Keep everything else in the main bundle
        }
      }
    },
    chunkSizeWarningLimit: 500,
    cssCodeSplit: false, // Inline CSS into JS to prevent render blocking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
      },
      mangle: {
        safari10: true
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setup.ts"],
  }
})
