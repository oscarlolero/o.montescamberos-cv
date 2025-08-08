import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If your repository name is different, set base to '/<repo>/'.
// If deploying to <user>.github.io root, set base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/o.montescamberos-cv/',
  build: {
    sourcemap: true,
  },
})


