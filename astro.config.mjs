// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  
  // Custom domain configuration
  site: 'https://sean.vos.cv.ferma.in',
  base: '/',
  
  // GitHub Pages fallback (if custom domain not configured):
  // site: 'https://fermain.github.io',
  // base: '/sean.vos.cv',
  
  server: {
    port: 7007
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
