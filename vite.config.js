import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/habits-simple-pwa/', // ⚠️ OBAVEZNO!
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Habits Simple PWA',
        short_name: 'HabitsPWA',
        theme_color: '#121212',
        background_color: '#121212',
        display: 'standalone',
        start_url: '/habits-simple-pwa/',
        icons: [
          {
            src: 'rsz_2navike.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'navike.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
