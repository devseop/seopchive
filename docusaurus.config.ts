import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import blog from './config/blog.config';
import navbar from './config/navbar.config';

const config: Config = {
  title: 'seopchive',
  tagline: '동적인 것을 좋아하는 정적인 개발자',
  favicon: 'img/favicon.svg',
  baseUrl: '/',
  url: 'https://seopchive.vercel.app',
  projectName: 'seopchive',
  organizationName: 'devseop',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner: false,

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        blog: blog,
        theme: {
          customCss: './src/css/global.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: navbar,
    prism: {},
  } satisfies Preset.ThemeConfig,
};

export default config;
