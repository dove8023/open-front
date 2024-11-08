import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        // require('autoprefixer'),
      ],
    }
  }
})
