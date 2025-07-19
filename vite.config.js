
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/habits-simple-pwa/",
  plugins: [react()],
})
