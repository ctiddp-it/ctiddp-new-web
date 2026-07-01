'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackConversion } from '@/lib/forms/trackConversion'

/**
 * Site-wide ViewContent tracker.
 *
 * Fires a Meta ViewContent event on every page navigation.
 * Placed in layout.jsx so it covers the entire website.
 *
 * Uses `usePathname()` to detect route changes (including
 * client-side navigations in Next.js App Router).
 *
 * Optional props can be passed for enriched content tracking
 * on specific pages (e.g. blog posts).
 */
export default function ViewContentTracker({ contentName, contentCategory, contentId }) {
  const pathname = usePathname()

  useEffect(() => {
    // Derive content info from the page if not explicitly provided
    const pageName = contentName || document.title || pathname
    const pageCategory = contentCategory || deriveCategory(pathname)

    trackConversion({
      eventName: 'ViewContent',
      customData: {
        content_name: pageName,
        content_category: pageCategory,
        content_ids: contentId ? [contentId] : [pathname],
        content_type: deriveContentType(pathname),
      },
    })
  }, [pathname, contentName, contentCategory, contentId])

  return null
}

/**
 * Derive a content category from the URL path.
 */
function deriveCategory(pathname) {
  if (pathname === '/') return 'Home'
  // e.g. "/services/warehousing" → "Services"
  const segment = pathname.split('/').filter(Boolean)[0] || 'Page'
  return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
}

/**
 * Derive a content type from the URL path.
 */
function deriveContentType(pathname) {
  if (pathname.startsWith('/blog/')) return 'article'
  if (pathname.startsWith('/services/')) return 'service'
  return 'page'
}
