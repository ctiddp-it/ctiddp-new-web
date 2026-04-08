export default function sitemap() {
  const BASE = 'https://ctiddp.com'
  const now = new Date()

  const routes = [
    { url: '/',                          priority: 1.0, changeFrequency: 'weekly'  },
    { url: '/how-it-works',              priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services',                  priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/canton-fair',      priority: 0.8, changeFrequency: 'monthly' },
    // Sub-service pages — uncomment when pages are built:
    // { url: '/services/qc-sourcing',   priority: 0.8, changeFrequency: 'monthly' },
    // { url: '/services/consolidation', priority: 0.8, changeFrequency: 'monthly' },
    // { url: '/services/customs-clearance', priority: 0.8, changeFrequency: 'monthly' },
    // { url: '/services/last-mile',     priority: 0.8, changeFrequency: 'monthly' },
    { url: '/track',                     priority: 0.7, changeFrequency: 'monthly' },
    { url: '/tools/duty-calculator',     priority: 0.8, changeFrequency: 'monthly' },
    { url: '/pricing',                   priority: 0.8, changeFrequency: 'monthly' },
    { url: '/insights',                  priority: 0.7, changeFrequency: 'weekly'  },
    { url: '/faq',                       priority: 0.8, changeFrequency: 'monthly' },
    { url: '/about',                     priority: 0.7, changeFrequency: 'monthly' },
    { url: '/contact',                   priority: 0.7, changeFrequency: 'monthly' },
    { url: '/get-quote',                 priority: 0.9, changeFrequency: 'monthly' },
  ]

  return routes.map(r => ({
    url: `${BASE}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}