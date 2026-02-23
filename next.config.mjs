/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/portfolio' : ''

const nextConfig = {
    output: "export",
    basePath,
    assetPrefix: basePath ? `${basePath}/` : '',
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
        unoptimized: true,
    },
    // Force rebuild for GitHub Pages deployment
    trailingSlash: true,
};

export default nextConfig;
