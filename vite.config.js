import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/gathsession-CSS-final/', // Link page
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  }
})

