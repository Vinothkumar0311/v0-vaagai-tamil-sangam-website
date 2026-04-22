/** @type {import('next').NextConfig} */

const nextConfig = {
  // Always use static export to generate the "out" folder
  output: "export",
  
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
