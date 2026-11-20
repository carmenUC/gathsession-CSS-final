import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/gathsession-CSS-final/',

  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  }
})