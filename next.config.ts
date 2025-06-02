import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['vercel.com'], // Add any external image domains you might use
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Remove basePath and assetPrefix when using custom domain
  trailingSlash: true,
}

export default nextConfig
