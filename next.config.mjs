import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['assets.aceternity.com','static.wixstatic.com'],
    },
    typescript: {
        ignoreBuildErrors: true, // Désactive les vérifications TypeScript
    },
    basePath: '/web3Project',
    assetPrefix: '/web3Project/',
};

export default withNextIntl(nextConfig);
