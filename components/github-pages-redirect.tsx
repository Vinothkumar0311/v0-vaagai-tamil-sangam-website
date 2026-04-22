"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/**
 * Handles redirects from our custom 404.html on GitHub Pages.
 * 404.html encodes the missing path into the URL as "?p=/requested-path".
 */
export function GitHubPagesRedirect() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const redirectPath = urlParams.get("p")
      
      if (redirectPath) {
        // Clean up the URL by removing the redirect param
        // and navigate to the actual intended page
        router.replace(redirectPath)
      }
    }
  }, [router])

  return null
}
