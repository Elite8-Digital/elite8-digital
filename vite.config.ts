import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/elite8digital-assignment/', // Base path for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
