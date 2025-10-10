/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: "export",
    basePath: isProd ? '/portfolio' : '',
    assetPrefix: isProd ? '/portfolio/' : '',
    images: {
        unoptimized: true,
    },
    // Force rebuild for GitHub Pages deployment
    trailingSlash: true,
};

export default nextConfig;
