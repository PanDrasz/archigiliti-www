import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://archigiliti.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/polityka-prywatnosci'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
