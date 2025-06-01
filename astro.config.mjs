// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://sean.vos.cv.ferma.in',
  server: {
    port: 7007
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
