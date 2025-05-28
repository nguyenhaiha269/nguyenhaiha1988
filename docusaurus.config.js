// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HaiHa's Home",
  tagline: 'Nơi chia sẻ kiến thức học tập',
  url: 'https://nguyenhaiha269.github.io',
  baseUrl: '/nguyenhaiha1988/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // Đường dẫn đến favicon

  organizationName: 'nguyenhaiha269',
  projectName: 'nguyenhaiha1988',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nguyenhaiha269/nguyenhaiha1988/tree/main/', // Giả sử nhánh chính là main
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/nguyenhaiha269/nguyenhaiha1988/tree/main/', // Giả sử nhánh chính là main
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
        title: "HaiHa's Home",
        logo: {
          alt: "HaiHa's Home Logo",
          src: 'img/favicon.ico', // <<< ĐÃ THAY ĐỔI: Sử dụng favicon.ico làm logo
          // srcDark: 'img/favicon_dark.ico', // Tùy chọn: nếu bạn có favicon riêng cho dark mode
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Hướng Dẫn',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nguyenhaiha269/nguyenhaiha1988',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // ...
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HaiHa's Home. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
