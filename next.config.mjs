/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    output: "export",
    distDir: 'build',
    reactStrictMode: false
};

export default nextConfig;
