/** @type {import('next').NextConfig} */

const isExport = process.env.IS_EXPORT === 'true';

const nextConfig = {
  // Only use static export when IS_EXPORT is true (e.g. in GitHub Actions)
  // This allows local dynamic routes to still work during npm run dev.
  output: isExport ? "export" : undefined,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
