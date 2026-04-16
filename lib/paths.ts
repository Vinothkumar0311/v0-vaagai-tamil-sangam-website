/**
 * Helper to prefix paths for GitHub Pages sub-folder deployment
 */
export function getAssetPath(path: string): string {
  const basePath = '/v0-vaagai-tamil-sangam-website';
  const isProd = process.env.NODE_ENV === 'production';
  
  if (!isProd) return path;
  
  // Ensure we don't double prefix
  if (path.startsWith(basePath)) return path;
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}
