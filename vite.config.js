import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/counter-on-github-2/",
  build: {
    outDir: 'dist'
  }
})