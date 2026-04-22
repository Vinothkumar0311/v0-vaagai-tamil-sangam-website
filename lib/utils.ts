import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts any Google Drive sharing / view URL into a proxied image URL.
 * Routes through /api/drive-image to avoid CORS and Google cookie issues.
 */
export function driveToImageUrl(url: string | undefined): string {
  if (!url) return ""

  // Already proxied static asset or local path
  if (url.startsWith("/") || url.startsWith("blob:") || url.startsWith("data:")) return url

  let fileId: string | null = null

  // Match common Google Drive URL patterns
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      fileId = match[1]
      break
    }
  }

  // Raw Drive ID fallback (looks like a long alphanumeric string)
  if (!fileId && /^[a-zA-Z0-9_-]{25,}$/.test(url)) {
    fileId = url
  }

  if (fileId) {
    return `/api/drive-image?id=${fileId}`
  }

  // Fallback – return original URL
  return url
}

