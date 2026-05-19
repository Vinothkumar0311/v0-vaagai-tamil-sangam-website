/**
 * Helper to prefix paths for GitHub Pages sub-folder deployment
 */
export function getAssetPath(path: string): string {
  // Empty for custom domain support
  const basePath = '';
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}
