/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['naderbh.com', 'www.naderbh.com'],
  },
  // Vercel specific optimizations
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // Domain redirects
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.naderbh.com',
          },
        ],
        destination: 'https://naderbh.com',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 