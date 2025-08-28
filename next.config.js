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
  },
  trailingSlash: true,
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
      // Redirect any old blog post URLs to main blog page
      {
        source: '/blog/:id',
        destination: '/blog',
        permanent: true,
      },
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
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig