import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Semua import dikumpulkan di atas

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),        // 2. Plugin React bawaan Vite
    tailwindcss(),  // 3. Plugin Tailwind v4 dijadikan satu di sini
  ],
})