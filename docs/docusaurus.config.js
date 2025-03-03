module.exports = {
    title: 'Crypto Price Tracker Docs',
    tagline: 'Documentation for the Crypto Price Tracker',
    url: 'http://localhost', // Replace with actual URL
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
                    to: 'docs/api-integration',
                    label: 'API',
                    position: 'left',
                },
                {
                    to: 'docs/state-management',
                    label: 'State Management',
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
