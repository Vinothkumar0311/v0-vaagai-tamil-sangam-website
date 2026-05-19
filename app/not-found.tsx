"use client"

import { useEffect } from "react"

/**
 * Custom 404 page for static GitHub Pages deployment.
 * GitHub Pages doesn't support SPA routing, so it shows this 404 page 
 * for any direct access to sub-paths (like /login or /mandram).
 * 
 * This component catches that 404 and redirects back to the home page (index.html)
 * with the intended path encoded as a query parameter (?p=).
 */
export default function NotFound() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get current location info
      const path = window.location.pathname
      const search = window.location.search
      const hash = window.location.hash
      
      // Avoid infinite redirect loop
      if (path !== "/" && path !== "/index.html" && path !== "/404.html") {
        // Redirect to the root index page with the path encoded
        // The RootLayout's GitHubPagesRedirect component will then read this
        // and navigate the user to the correct internal route.
        const redirectUrl = window.location.origin + "/?p=" + encodeURIComponent(path + search) + hash
        window.location.replace(redirectUrl)
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 text-center">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6" />
      <h1 className="text-3xl font-bold text-foreground mb-2">பக்கத்தைத் தேடுகிறது...</h1>
      <p className="text-muted-foreground">இப்பொழுது முகப்புப் பக்கத்திற்குச் செல்கிறது...</p>
    </div>
  )
}
