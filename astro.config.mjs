// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: "https://nikonosfive.github.io",
  base: isProd ? '/Geodic' : '/',

  integrations: [
      starlight({
          title: '地理の扉',
          defaultLocale: 'root',
          locales: {
              root: {
                  label: '日本語',
                  lang: 'ja',
              },
          },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nikonosfive' }],
          sidebar: [
              {
                  label: '地理資料集',
                  autogenerate: { directory: 'material' },
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});