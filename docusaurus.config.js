// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HaiHa's Home",
  tagline: 'Nơi chia sẻ kiến thức học tập',
  url: 'https://nguyenhaiha269.github.io',
  baseUrl: '/nguyenhaiha1988/', // Đảm bảo đây là baseUrl chính xác
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
            'https://github.com/nguyenhaiha269/nguyenhaiha1988/tree/main/', // Kiểm tra lại tên nhánh chính (main hoặc master)
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/nguyenhaiha269/nguyenhaiha1988/tree/main/', // Kiểm tra lại tên nhánh chính (main hoặc master)
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['vi'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "HaiHa's Home",
        logo: {
          alt: "HaiHa's Home Logo", // Alt text cho logo navbar
          src: 'img/favicon.ico', // Sử dụng favicon.ico làm logo navbar
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
        style: 'dark', // Giữ 'dark' hoặc đổi thành 'light' tùy sở thích
        links: [], // Để trống mảng này để không có các cột link mặc định
        copyright: `
          <div class="footer-slogan-container">
            <div class="footer-slogan-logo">
              <img src="/nguyenhaiha1988/img/favicon.ico" alt="Logo nhỏ HaiHa's Home" />
            </div>
            <div class="footer-slogan-text">
              <p>Sức mạnh của niềm tin là chìa khóa mở cánh cửa hạnh phúc.</p>
            </div>
          </div>
          Bản quyền © ${new Date().getFullYear()} HaiHa's Home. Xây dựng với Docusaurus.
        `.trim(), // trim() để loại bỏ khoảng trắng thừa
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
