import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/Portfolio/',
  server: {
    port: 5173, // optional — set your dev port
    open: true, // auto-opens browser on dev start
  },
  build: {
    outDir: 'dist', // build output folder
    sourcemap: false, // set true if you want debug source maps
  },
  resolve: {
    alias: {
      '@': '/src', // allows you to use "@/components/..." imports
    },
  },
});
