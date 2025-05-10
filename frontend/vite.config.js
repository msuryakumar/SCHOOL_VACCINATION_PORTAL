import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // If you're using a backend API server (e.g., Node.js/Express), you can proxy API requests
      '/api': {
        target: 'http://localhost:5000', // backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'build', // specify the output directory
    sourcemap: true, // useful for debugging
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
