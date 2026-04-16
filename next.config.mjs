/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Change 'v0-vaagai-tamil-sangam-website' to your actual repository name if different
  basePath: isProd ? '/v0-vaagai-tamil-sangam-website' : '',
  assetPrefix: isProd ? '/v0-vaagai-tamil-sangam-website/' : '',
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
