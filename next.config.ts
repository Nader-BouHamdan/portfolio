/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['naderbh.com', 'www.naderbh.com'],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
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

export default nextConfig
