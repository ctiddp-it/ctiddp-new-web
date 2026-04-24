export default function sitemap() {
  const BASE = 'https://www.ctiddp.com'
  const now = new Date()

  const routes = [
    { url: '/',                          priority: 1.0, changeFrequency: 'weekly'  },
    { url: '/about',                     priority: 0.7, changeFrequency: 'monthly' },
    { url: '/how-it-works',              priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services',                  priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/global-ddp-shipping', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services/supplier-payments', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services/qc-inspection', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services/warehousing', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services/customs-clearance', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services/last-mile-delivery', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services/multi-vendor-consolidation', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services/canton-fair-support', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/eco-system',                 priority: 0.8, changeFrequency: 'monthly' },
    { url: '/canton-fair',                priority: 0.8, changeFrequency: 'monthly' },
    { url: '/blog',                  priority: 0.7, changeFrequency: 'weekly'  },
    { url: '/contact',                   priority: 0.8, changeFrequency: 'monthly' },
    { url: '/quote',                 priority: 0.9, changeFrequency: 'monthly' },
  ]

  return routes.map(r => ({
    url: new URL(r.url, BASE).toString(),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}