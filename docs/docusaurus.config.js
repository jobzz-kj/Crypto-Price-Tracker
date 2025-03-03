// docusaurus.config.js
module.exports = {
    title: 'Crypto Price Tracker Docs',
    tagline: 'Documentation for the Crypto Price Tracker',
    url: 'http://localhost',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'Blockhouse',
    projectName: 'crypto-tracker-docs',
    themeConfig: {
        navbar: {
            title: 'Crypto Tracker Docs',
            items: [
                {
                    to: 'docs/introduction',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: 'https://github.com/jobzz-kj/Crypto-Price-Tracker',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebar.js'),
                },
            },
        ],
    ],
};
