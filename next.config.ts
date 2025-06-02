import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // Vercel handles image optimization
  },
  // Remove basePath and assetPrefix when using custom domain
  trailingSlash: true,
}

export default nextConfig
