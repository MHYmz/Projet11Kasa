import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, './src/scss'), // Ajout d'un alias pour les SCSS
    },
  },
});