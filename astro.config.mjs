import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://uibm.github.io',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true
    }
  }
});
