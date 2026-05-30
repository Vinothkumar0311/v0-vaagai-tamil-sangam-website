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
    // Must be true for static export (GitHub Pages), but false in dev
    // so Next.js optimizer can cache & serve Google Drive images efficiently
    unoptimized: isExport,

    // Allow Next.js image optimizer to proxy Google Drive & CDN images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // Explicitly set the Turbopack root to the project directory
  // to avoid scanning parent directories containing other lockfiles.
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig

