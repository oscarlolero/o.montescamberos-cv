import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The custom GitHub Pages domain serves this site from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: true,
  },
})

