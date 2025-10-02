import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Jamkos - Jadwal Pelajaran",
        short_name: "Jamkos",
        description: "Aplikasi jadwal pelajaran berbasis web-app",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "fullscreen",
        start_url: "./",
        icons: [
          { src: "/icons/jamkos192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/jamkos512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
});
