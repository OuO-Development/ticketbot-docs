// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ticket Bot',
  tagline: '最好的Ticket Bot',
  url: 'https://docs.ticketbot.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OuO-Development', // Usually your GitHub org/user name.
  projectName: 'ticketbot-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-TW".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OuO-Development/ticketbot-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OuO-Development/ticketbot-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ticket Bot',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs', label: '開始使用', position: 'left'},
          {
            href: 'https://ticketbot.dev/',
            label: '控制面板',
            position: 'left',
          },
          {
            href: 'https://github.com/OuO-Development',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文檔推薦',
            items: [
              {
                label: '入門介紹',
                to: '/docs/',
              },
            ],
          },
          {
            title: '官方社群',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/5HkdGgP6Ek',
              }
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: 'Suggestion Bot',
                href: 'https://discord.com/api/oauth2/authorize?client_id=955419318630375445&permissions=139586825281&scope=bot%20applications.commands',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} OuO 編程社群. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
