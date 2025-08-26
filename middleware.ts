import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Force non-www redirect
  if (hostname.startsWith('www.')) {
    const newUrl = new URL(url)
    newUrl.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Remove trailing slashes (except for root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const newUrl = new URL(url)
    newUrl.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Block URLs with query parameters from being indexed as separate pages
  // This helps prevent Google from discovering duplicate content
  if (url.search && !url.pathname.includes('/api/')) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }
  
  // Add security headers
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}