import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Jadwal Pelajaran X PPLG 2',
        short_name: 'Jadwal Pelajaran',
        description: 'Aplikasi jadwal pelajaran berbasis web',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'fullscreen',
        start_url: './',
        icons: [
          {
            src: '/icons/logo2.0.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/logo2.0.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ],
})
