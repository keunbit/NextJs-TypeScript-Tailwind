/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
