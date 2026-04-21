export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://ctiddp.com/sitemap.xml',
    host: 'https://ctiddp.com',
  }
}
 