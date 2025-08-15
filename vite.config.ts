import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-chatbot-react/',
  build: {
    outDir: 'dist'
  }
})
