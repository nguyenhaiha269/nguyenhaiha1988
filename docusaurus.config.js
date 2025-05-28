// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trang Web Của Ha', // THAY ĐỔI
  tagline: 'Nơi chia sẻ kiến thức học tập', // THAY ĐỔI
  url: 'https://nguyenhaiha269.github.io', // THAY ĐỔI
  baseUrl: '/nguyenhaiha1988/', // THAY ĐỔI
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // Bạn có thể giữ nguyên hoặc thay thế file này trong thư mục static/img

  organizationName: 'nguyenhaiha269', // THAY ĐỔI
  projectName: 'nguyenhaiha1988', // THAY ĐỔI

  i18n: {
    defaultLocale: 'vi', // THAY ĐỔI
    locales: ['vi'], // THAY ĐỔI
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nguyenhaiha269/nguyenhaiha1988/tree/main/', // THAY ĐỔI
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/nguyenhaiha269/nguyenhaiha1988/tree/main/', // THAY ĐỔI
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
        title: 'Trang Web Của Ha', // THAY ĐỔI
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg', // Bạn có thể giữ nguyên hoặc thay thế file này trong thư mục static/img
        },
        items: [
          {
            type: 'doc',
            docId: 'intro', // File tài liệu đầu tiên
            position: 'left',
            label: 'Hướng Dẫn', // Tên hiển thị cho mục tài liệu
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nguyenhaiha269/nguyenhaiha1988', // THAY ĐỔI
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // Bạn có thể tùy chỉnh các link ở footer này sau
          // ... (giữ nguyên hoặc tùy chỉnh phần links)
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nguyenhaiha269. Built with Docusaurus.`, // THAY ĐỔI
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;