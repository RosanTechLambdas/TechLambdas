import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',         // output directory (default is fine, but explicit here)
    emptyOutDir: true,      // clear dist before build
  },
  base: '/', // if hosted at subpath, change it like '/app/'
});
