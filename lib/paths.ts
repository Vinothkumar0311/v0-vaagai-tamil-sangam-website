/**
 * Helper to prefix paths for GitHub Pages sub-folder deployment
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  
  // Empty for custom domain support
  const basePath = '';
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Append a cache-buster (?v=2) to local images to invalidate browser and Next.js caches
  if (!normalizedPath.startsWith('http://') && !normalizedPath.startsWith('https://')) {
    if (/\.(png|jpg|jpeg|gif|webp|svg)/i.test(normalizedPath) && !normalizedPath.includes('?')) {
      return `${basePath}${normalizedPath}?v=2`;
    }
  }
  
  return `${basePath}${normalizedPath}`;
}
