/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional isolated output for production verification beside a running dev server.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    formats: ['image/webp'],
    qualities: [60, 75, 80],
    // Opening an optimized image should display it, not force a download.
    contentDispositionType: 'inline',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff2|woff)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        // Redirects any request from ctiddp.com to www.ctiddp.com
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ctiddp.com',
          },
        ],
        destination: 'https://www.ctiddp.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
