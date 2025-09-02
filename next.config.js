/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '' : '',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['maximaxmobileadvertising.com', 'maximaxadvertising.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  trailingSlash: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  // Note: These redirects don't work on static exports (GitHub Pages)
  // They only function in server-rendered deployments
  async redirects() {
    return [
      // Redirect www to non-www (only works in server environments)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.maximaxmobileadvertising.com',
          },
        ],
        destination: 'https://maximaxmobileadvertising.com/:path*',
        permanent: true,
      },
      // Note: Removed the catch-all redirect that was blocking actual blog posts
      // Individual redirects for old blog URLs can be added here if needed
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Performance headers
          {
            key: 'Cache-Control',
            value: isProd ? 'public, max-age=31536000, immutable' : 'no-store'
          },
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig