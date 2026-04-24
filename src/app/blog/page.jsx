import { FaWhatsapp } from "react-icons/fa6";
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'

export const metadata = {
  title: 'Insights & Blog — China India DDP Import Guides',
  description:
    'Import guides, duty update alerts, Canton Fair tips, and DDP shipping intelligence for Indian importers buying from China.',
  keywords: [
    'how to import from China to India',
    'best products to import from China',
    'China import business ideas India',
    'DDP vs CIF vs FOB',
    'import duty India calculator',
    'shipping cost China to India guide',
    'China sourcing tips India',
    'Canton Fair buying guide',
    'import export business India tips',
    'freight forwarding explained',
    'international logistics trends',
    'China wholesale sourcing guide',
    'import documentation India guide',
    'customs clearance India guide',
    'global trade insights blog',
  ],
  openGraph: {
    title: 'DDP Shipping Insights & Guides — CTIDDP',
    description:
      'Import guides, duty updates, and Canton Fair tips for Indian importers buying from China.',
    url: 'https://www.ctiddp.com/blog/',
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/blog',
  },
};

const POSTS = [
  { emoji: '📦', category: 'DDP Guide', date: '12 Mar 2025', title: 'The Complete Guide to DDP Shipping from China to India in 2025', excerpt: "Everything Indian importers need to know about DDP Incoterms — what's included, what it costs, and why it's the safest way to import from China.", slug: 'guide-ddp-shipping-china-india-2025' },
  { emoji: '💰', category: 'Duty Rates', date: '05 Mar 2025', title: 'India Import Duty Rates for Electronics from China: BCD, IGST & SWS Explained', excerpt: 'A plain-English breakdown of how Basic Customs Duty, IGST, and Social Welfare Surcharge apply to electronics imports — with worked examples.', slug: 'india-import-duty-electronics-china' },
  { emoji: '🎪', category: 'Canton Fair', date: '28 Feb 2025', title: 'Canton Fair Spring 2025: Your Complete DDP Shipping Guide', excerpt: 'How to consolidate Canton Fair purchases, ship them DDP to India, and avoid the common mistakes that cost importers weeks of delays.', slug: 'canton-fair-spring-2025-ddp-guide' },
  { emoji: '🚢', category: 'Logistics', date: '20 Feb 2025', title: 'Sea vs Air Freight from China to India: A DDP Cost Comparison', excerpt: 'When does air freight make sense over sea? We break down the real costs, timelines, and duty implications for both modes under a DDP contract.', slug: 'sea-vs-air-freight-china-india-ddp' },
  { emoji: '🔍', category: 'Compliance', date: '14 Feb 2025', title: 'BIS Certification for Electronics Imports: What Every India Importer Must Know', excerpt: "India's BIS compulsory registration scheme (CRS) applies to dozens of electronics categories. Here's what you need before goods leave China.", slug: 'bis-certification-electronics-imports-india' },
  { emoji: '📋', category: 'Process', date: '07 Feb 2025', title: 'How India Customs Clearance Works: A Step-by-Step Guide for Importers', excerpt: "From Bill of Entry filing to Out of Charge — we document every step of India's import customs process, including typical timelines at JNPT, Chennai, and Vizag.", slug: 'india-customs-clearance-step-by-step-guide' },
]

export default function InsightsPage() {
  return (
    <>
      <ScrollRevealInit />
      <main className="bg-black text-white font-['Outfit',sans-serif]">

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
                  publisher: {
                    '@type': 'Organization',
                    name: 'CTIDDP',
                  },
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.ctiddp.com/blog/#webpage',
                  url: 'https://www.ctiddp.com/blog/',
                  name: 'Insights & Blog — China India DDP Import Guides',
                  description:
                    'Import guides, duty update alerts, Canton Fair tips, and DDP shipping intelligence for Indian importers buying from China.',
                  isPartOf: {
                    '@id': 'https://www.ctiddp.com/#website',
                  },
                  mainEntity: {
                    '@id': 'https://www.ctiddp.com/blog/#blog',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.ctiddp.com/blog/#breadcrumb',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://www.ctiddp.com/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Insights',
                      item: 'https://www.ctiddp.com/blog/',
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb */}
        <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
          <span className="text-[11px] text-muted/60 whitespace-nowrap">
            <Link href="/" className="text-muted/60 no-underline">Home</Link>
          </span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-blue-light whitespace-nowrap">Insights</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[45vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              Import Intelligence
            </div>
            <h1 className="font-heading text-[clamp(36px,5vw,60px)] font-light leading-[1.1] mb-4">
              DDP Shipping<br />
              <em className="italic text-blue-light">
                Insights & Guides
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[520px] mx-auto">
              Import guides, duty updates, Canton Fair intelligence, and practical logistics advice for Indian importers buying from China.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">

            {/* Featured Post */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Featured
              </span>
              <div className="reveal bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.2)] p-8 sm:p-9 rounded-[4px] relative overflow-hidden hover:border-[rgba(37,99,235,0.4)] transition-all">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  <span className="text-[9px] tracking-[1.5px] uppercase py-1 px-2.5 rounded-full bg-[rgba(37,99,235,0.15)] text-blue-light border border-[rgba(37,99,235,0.2)]">
                    {POSTS[0].category}
                  </span>
                  <span className="text-[10px] text-muted">{POSTS[0].date}</span>
                </div>
                <h2 className="font-heading text-[clamp(22px,2.8vw,34px)] font-semibold leading-tight mb-3.5 text-white">
                  {POSTS[0].title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-5 max-w-[640px]">
                  {POSTS[0].excerpt}
                </p>
                <Link
                  href={`/blog/${POSTS[0].slug}`}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-5 sm:px-6 py-2.5 rounded-[3px] font-bold text-xs tracking-[0.8px] uppercase transition-all hover:scale-[1.02] cursor-none"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            {/* All Articles */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px]">
                All Articles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {POSTS.slice(1).map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline group">
                  <div className="reveal bg-[var(--overlay-card)] border border-border rounded-[4px] overflow-hidden transition-all duration-300 hover:border-[rgba(37,99,235,0.4)] hover:-translate-y-1">
                    <div className="h-40 bg-[rgba(37,99,235,0.05)] flex items-center justify-center relative">
                      <span className="text-[9px] tracking-[1.5px] uppercase text-blue bg-[rgba(37,99,235,0.12)] py-1 px-2.5 rounded-sm absolute top-3 left-3">
                        {post.category}
                      </span>
                      <span className="text-[40px]">{post.emoji}</span>
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] text-muted mb-2">{post.date}</div>
                      <h3 className="font-heading text-[17px] font-semibold text-white leading-tight mb-2 group-hover:text-blue-light transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="text-xs text-blue-light group-hover:underline">Read article →</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-black">
          <div className="max-w-[560px] mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
              Stay Updated
            </span>
            <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
              Duty Updates &<br />
              <em className="italic text-blue-light">Import Intelligence</em>
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-2.5 mb-7">
              Get monthly duty rate updates, Canton Fair prep guides, and DDP shipping tips directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[var(--overlay-input)] border border-[var(--overlay-input-border)] rounded-[3px] py-3 px-4 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-muted"
              />
              <button className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]">
                Subscribe →
              </button>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="relative text-center px-4 sm:px-6 lg:px-[60px] py-12 sm:py-16 overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">
          <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.2] mb-3">
            Ready to Import<br />
            <em className="italic text-blue-light">the Right Way?</em>
          </h2>
          <p className="text-sm text-muted max-w-[420px] mx-auto mb-7">
            Put these insights to work. Get a full DDP quote and let us handle everything.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none shadow-[0_8px_28px_rgba(37,99,235,0.3)]"
            >
              Get DDP Quote →
            </Link>
            <a
              href="https://wa.me/918790013772"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
            >
              <FaWhatsapp size={22} />WhatsApp Us
            </a>
          </div>
        </div>

      </main>

      {/* Keyframes for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

    </>
  )
}