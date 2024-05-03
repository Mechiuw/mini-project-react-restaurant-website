import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server : {
    proxy : {
      '/api': {
        target: 'https://a047-180-248-20-162.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path) =>  path.replace('^/api/',''),
      }
    }
  }
})
