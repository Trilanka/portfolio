/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // Force rebuild for GitHub Pages deployment
    trailingSlash: true,
};

export default nextConfig;
