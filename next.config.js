/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'naderbh.com',
      },
      {
        protocol: 'https',
        hostname: 'vercel.app',
      },
    ],
  },
}

module.exports = nextConfig 