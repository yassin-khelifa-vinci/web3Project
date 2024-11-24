import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com','static.wixstatic.com'],
    },
    typescript: {
        ignoreBuildErrors: true, // Désactive les vérifications TypeScript
    }
};

export default withNextIntl(nextConfig);