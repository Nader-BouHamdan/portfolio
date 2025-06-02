/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ensure static export
  images: {
    unoptimized: true,  // Required for static export
  },
  reactStrictMode: true,
}

export default nextConfig
