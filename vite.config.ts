import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  // The design's screens and logic ship as one chunk (~500 kB, ~117 kB gzipped).
  build: { chunkSizeWarningLimit: 1000 },
});
