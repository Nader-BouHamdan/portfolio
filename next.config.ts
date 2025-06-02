import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix when using custom domain
  trailingSlash: true,
}

export default nextConfig
