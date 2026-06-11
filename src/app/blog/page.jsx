import { FaWhatsapp } from 'react-icons/fa6'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Insights & Blog - China India DDP Import Guides',
  description:
    'Import guides, duty update alerts, Canton Fair tips, and DDP shipping intelligence for Indian importers buying from China.',
  keywords: [
    'how to import from China to India',
    'DDP vs CIF vs FOB',
    'import duty India calculator',
    'Canton Fair buying guide',
  ],
  openGraph: {
    title: 'DDP Shipping Insights & Guides - CTIDDP',
    description: 'Import guides, duty updates, and Canton Fair tips for Indian importers.',
    url: 'https://www.ctiddp.com/blog/',
  },
  alternates: { canonical: 'https://www.ctiddp.com/blog' },
}

const POSTS = [
  { emoji: '📦', category: 'DDP Guide', date: '12 Mar 2025', title: 'The Complete Guide to DDP Shipping from China to India in 2025', excerpt: "Everything Indian importers need to know about DDP Incoterms — what's included, what it costs, and why it's the safest way to import from China.", slug: 'guide-ddp-shipping-china-india-2025' },
  { emoji: '💰', category: 'Duty Rates', date: '05 Mar 2025', title: 'India Import Duty Rates for Electronics from China: BCD, IGST & SWS Explained', excerpt: 'A plain-English breakdown of how Basic Customs Duty, IGST, and Social Welfare Surcharge apply to electronics imports.', slug: 'india-import-duty-electronics-china' },
  { emoji: '🎪', category: 'Canton Fair', date: '28 Feb 2025', title: 'Canton Fair Spring 2025: Your Complete DDP Shipping Guide', excerpt: 'How to consolidate Canton Fair purchases, ship them DDP to India, and avoid the common mistakes.', slug: 'canton-fair-spring-2025-ddp-guide' },
  { emoji: '🚢', category: 'Logistics', date: '20 Feb 2025', title: 'Sea vs Air Freight from China to India: A DDP Cost Comparison', excerpt: 'When does air freight make sense over sea? We break down the real costs, timelines, and duty implications.', slug: 'sea-vs-air-freight-china-india-ddp' },
  { emoji: '🔍', category: 'Compliance', date: '14 Feb 2025', title: "BIS Certification for Electronics Imports: What Every India Importer Must Know", excerpt: "India's BIS compulsory registration scheme (CRS) applies to dozens of electronics categories.", slug: 'bis-certification-electronics-imports-india' },
  { emoji: '📋', category: 'Process', date: '07 Feb 2025', title: 'How India Customs Clearance Works: A Step-by-Step Guide for Importers', excerpt: "From Bill of Entry filing to Out of Charge — we document every step of India's import customs process.", slug: 'india-customs-clearance-step-by-step-guide' },
]

export default function InsightsPage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Blog',
                '@id': 'https://www.ctiddp.com/blog/#blog',
                name: 'CTIDDP Insights',
                url: 'https://www.ctiddp.com/blog/',
                publisher: { '@type': 'Organization', name: 'CTIDDP' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ctiddp.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.ctiddp.com/blog/' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <PageHero
        badge="IMPORT INTELLIGENCE"
        subtitle="Import guides, duty updates, Canton Fair intelligence, and practical logistics advice for Indian importers buying from China."
        bgImage="/images/services/ian-taylor-jOqJbvo1P9g-unsplash.jpeg"
        titleNode={
          <>
            DDP Shipping
            <br />
            <span className="text-primary-light">Insights & Guides</span>
          </>
        }
      />

      {/* ══════════ FEATURED POST ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionBadge>FEATURED</SectionBadge>
          <div className="card p-8 sm:p-10 relative overflow-hidden mt-4 border-primary-100">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary-light to-primary" />
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <span className="text-[10px] tracking-[1.5px] uppercase py-1 px-2.5 rounded-full bg-primary-50 text-primary border border-primary-100 font-600">
                {POSTS[0].category}
              </span>
              <span className="text-[12px] text-gray-400">{POSTS[0].date}</span>
            </div>
            <h2 className="text-[clamp(20px,2.5vw,30px)] font-600 leading-tight mb-3 text-gray-900">
              {POSTS[0].title}
            </h2>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6 max-w-[640px]">
              {POSTS[0].excerpt}
            </p>
            <Button href="/contact" variant="primary" arrow>REQUEST THIS GUIDE</Button>
          </div>
        </div>
      </section>

      {/* ══════════ ALL ARTICLES ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="mb-8">
            <SectionBadge>ALL ARTICLES</SectionBadge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.slice(1).map((post) => (
              <Link key={post.slug} href="/contact" className="no-underline group">
                <div className="card overflow-hidden transition-all duration-300 hover:border-primary-200 hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-40 bg-gradient-to-br from-primary-50 to-gray-50 flex items-center justify-center relative">
                    <span className="text-[10px] tracking-[1.5px] uppercase text-primary bg-white py-1 px-2.5 rounded-md absolute top-3 left-3 font-600 border border-gray-100">
                      {post.category}
                    </span>
                    <span className="text-[40px]">{post.emoji}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-[11px] text-gray-400 mb-2">{post.date}</div>
                    <h3 className="text-[16px] font-600 text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed mb-3 line-clamp-2 flex-1">{post.excerpt}</p>
                    <div className="text-[12px] text-primary font-600 group-hover:underline">Request article details →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEWSLETTER ══════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-[560px] mx-auto text-center px-5">
          <SectionBadge>STAY UPDATED</SectionBadge>
          <h2 className="section-title">
            Duty Updates & <span className="highlight">Import Intelligence</span>
          </h2>
          <p className="section-subtitle centered mb-7">
            Get monthly duty rate updates, Canton Fair prep guides, and DDP shipping tips directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-gray-200 rounded-lg py-3 px-4 text-gray-800 text-[14px] outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-gray-400"
            />
            <button className="btn btn-primary whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title="Ready to Import <span class='text-primary-light'>the Right Way?</span>"
        subtitle="Put these insights to work. Get a full DDP quote and let us handle everything."
        buttons={[
          { label: 'GET DDP QUOTE', href: '/quote', variant: 'primary' },
          { label: 'WHATSAPP US', href: 'https://wa.me/918790013772', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
        ]}
      />

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  )
}