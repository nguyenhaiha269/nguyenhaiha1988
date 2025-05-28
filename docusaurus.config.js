// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HaiHa's Home", // ĐÃ THAY ĐỔI
  tagline: 'Nơi chia sẻ kiến thức học tập', // Giữ nguyên hoặc bạn có thể thay đổi nếu muốn
  url: 'https://nguyenhaiha269.github.io',
  baseUrl: '/nguyenhaiha1988/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // Bạn có thể giữ nguyên hoặc thay thế file này trong thư mục static/img

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
        title: "HaiHa's Home", // ĐÃ THAY ĐỔI
        logo: {
          alt: "HaiHa's Home Logo", // THAY ĐỔI alt text cho phù hợp
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
            href: 'https://github.com/nguyenhaiha269/nguyenhaiha1988',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // Bạn có thể tùy chỉnh các link ở footer này sau
          // Ví dụ:
          // {
          //   title: 'Tài liệu',
          //   items: [
          //     {
          //       label: 'Hướng dẫn',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Cộng đồng',
          //   items: [
          //     {
          //       label: 'Discord',
          //       href: '#', // Thay link Discord của bạn
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HaiHa's Home. Built with Docusaurus.`, // ĐÃ THAY ĐỔI
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
