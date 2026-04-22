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
      const redirectHash = urlParams.get("h")
      
      if (redirectPath) {
        // Construct the full internal URL, preserving hash if present
        const fullPath = redirectPath + (redirectHash ? "#" + redirectHash : "")
        
        // Use router.replace to navigate without adding a duplicate 404 entry in history
        router.replace(fullPath)
        
        // Clean the URL bar of the ?p= redirect params immediately
        window.history.replaceState(null, "", redirectPath)
      }
    }
  }, [router])

  return null
}

