/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Removed basePath for custom domain support
  basePath: '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuild: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
