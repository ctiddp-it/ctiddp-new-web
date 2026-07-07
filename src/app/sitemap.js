/**
 * Dynamic sitemap generator for the CTIDDP website.
 *
 * Combines static routes (pages, services) with dynamically fetched
 * blog post slugs so every published article is automatically included
 * in sitemap.xml with its accurate lastModified date.
 *
 * Next.js calls this function at build time and during ISR revalidation
 * to produce /sitemap.xml.
 */

const BASE_URL = 'https://www.ctiddp.com';
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default async function sitemap() {
  // ─── Static routes ───
  const staticRoutes = [
    '/',
    '/about',
    '/how-it-works',
    '/services',
    '/services/global-ddp-shipping',
    '/services/supplier-payments',
    '/services/qc-inspection',
    '/services/warehousing',
    '/services/customs-clearance',
    '/services/last-mile-delivery',
    '/services/multi-vendor-consolidation',
    '/services/canton-fair-support',
    '/eco-system',
    '/canton-fair',
    '/blog',
    '/contact',
    '/quote',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  // ─── Dynamic blog post routes ───
  let blogEntries = [];
  try {
    const res = await fetch(`${API_BASE}/blog?limit=100`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const json = await res.json();
      const posts = json.data || [];

      blogEntries = posts
        .filter((post) => post.slug)
        .map((post) => ({
          url: `${BASE_URL}/blog/${post.slug}`,
          lastModified: post.updatedAt
            ? new Date(post.updatedAt)
            : post.publishedAt
              ? new Date(post.publishedAt)
              : new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        }));
    }
  } catch (err) {
    console.error('[sitemap] Failed to fetch blog posts:', err.message);
    // Fallback: static routes only, no blog posts
  }

  return [...staticEntries, ...blogEntries];
}