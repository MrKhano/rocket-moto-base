import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@farcaster/miniapp-sdk']  // force Vite à pré-bundler le SDK
  },
  build: {
    rollupOptions: {
      external: []  // vide pour l'instant, à remplir seulement si nécessaire
    }
  }
})
