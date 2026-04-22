/** @type {import('next').NextConfig} */

// This variable is set in the build script to trigger static export
const isExport = process.env.IS_EXPORT === 'true';

const nextConfig = {
  // Static export mode for GitHub Pages
  output: isExport ? "export" : undefined,
  
  // Mandatory for GitHub Pages deep-linking and consistent paths
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
