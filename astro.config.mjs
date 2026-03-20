// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://unmolted.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
