import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "super-secret-jwt-key-vaagai-mandrams-2025"
) // Needs to match lib/auth.ts

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("vaagai-session")?.value
  const { pathname } = request.nextUrl

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      // Verify token
      const { payload } = await jwtVerify(token, SECRET_KEY)
      
      // Optionally, pass user data in headers if needed by downstream API or server components that don't easily read cookies via headers
      // (Though in App Router, headers/cookies are easily available)
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set("x-user-role", payload.role as string)
      requestHeaders.set("x-user-mandram", payload.mandram as string)
      
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    } catch (error) {
      // Invalid token
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Redirect authenticated users away from login
  if (pathname === "/login") {
    if (token) {
      try {
        await jwtVerify(token, SECRET_KEY)
        return NextResponse.redirect(new URL("/admin/dashboard", request.url))
      } catch {
        // Just let them go to login if token is invalid
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
}
