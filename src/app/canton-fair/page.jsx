import { FaWhatsapp } from "react-icons/fa6";
import {
  FaStore,
  FaComments,
  FaSearch,
  FaBoxes,
  FaShip,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'
import CantonFairClient from './CantonFairClient'

export const metadata = {
  title: 'Canton Fair 140th Edition Shipping Support | Global DDP Experts',
  description:
    'Get end-to-end Canton Fair 140th edition (Autumn 2026) sourcing and shipping support with DDP delivery to India and global markets.',
  keywords: [
    'Canton Fair 140th edition',
    'Canton Fair autumn 2026',
    'Canton Fair shipping to India',
    'how to ship goods from Canton Fair',
    'Canton Fair sourcing support',
    'China exhibition shipping services',
    'Guangzhou sourcing agent India',
    'Canton Fair logistics India',
    'buying from Canton Fair India',
    'Canton Fair import process',
    'ship products from China exhibition',
    'Canton Fair freight forwarder',
    'sourcing agent China for India',
    'Canton Fair delivery to India',
    'Canton Fair support services',
  ],
  openGraph: {
    title: 'Canton Fair 140th Edition Shipping Support | Global DDP Experts',
    description:
      'Get end-to-end Canton Fair 140th edition sourcing and shipping support with DDP delivery to India and global markets.',
    url: 'https://www.ctiddp.com/canton-fair/',
    siteName: 'CTIDDP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/canton-fair',
  },
};

// ── Data ────────────────────────────────────────────────────────────────────

// 140th Canton Fair - Autumn Session (October–November 2026)
const PHASES_AUTUMN = [
  {
    phase: 'Phase 1 · Electronics & Machinery',
    dates: 'Oct 15–19',
    categories: 'Electronics, Appliances, Industrial Equipment, Hardware & Tools, Building Materials, New Energy, Vehicles',
  },
  {
    phase: 'Phase 2 · Consumer Goods & Gifts',
    dates: 'Oct 23–27',
    categories: 'Daily Consumer Goods, Gifts, Fashion Accessories, Footwear, Textiles, Furniture, Home Decor',
  },
  {
    phase: 'Phase 3 · Textiles, Health & Food',
    dates: 'Oct 31 – Nov 4',
    categories: 'Clothing, Toys & Baby Products, Health & Recreation, Food & Beverages, Office & Leisure, Traditional Specialties',
  },
]

const SCOPE = [
  { icon: <FaStore />, title: 'Fair Attendance', desc: 'Our Guangzhou team attends all three phases with you or as your sole representative.' },
  { icon: <FaComments />, title: 'Translation & Negotiation', desc: 'Full Mandarin support for supplier conversations, price negotiation, and contract terms.' },
  { icon: <FaSearch />, title: 'Sample & QC Inspection', desc: 'On-spot quality inspection of samples. Defect reporting and suitability assessment.' },
  { icon: <FaBoxes />, title: 'Consolidation & DDP Shipping', desc: 'Multi-supplier consolidation at Guangzhou warehouse, then full DDP to your India door.' },
]

const FEATURES = [
  { icon: <FaComments />, title: 'Mandarin Negotiation', desc: 'Direct negotiation in Mandarin for better prices and terms' },
  { icon: <FaSearch />, title: 'On-the-Spot QC', desc: 'Quality verification of samples before you commit to any supplier' },
  { icon: <FaBoxes />, title: 'Multi-Booth Consolidation', desc: 'Collect from multiple exhibitors, consolidate at Guangzhou warehouse' },
  { icon: <FaShip />, title: 'Direct DDP to India', desc: 'All goods shipped DDP to your India address - one price, no surprises' },
]

const STEPS = [
  { n: '01', t: 'Contact us 4+ weeks before the fair', d: 'Via WhatsApp or the form below - share your product categories and target booths.' },
  { n: '02', t: 'We assign your Guangzhou support team', d: 'Dedicated Mandarin-speaking team member confirmed for your dates.' },
  { n: '03', t: 'Attend the fair together (or we go solo)', d: 'Your choice - attend with us or let us represent you fully across all phases.' },
  { n: '04', t: 'Goods consolidated and shipped DDP', d: 'Everything collected, consolidated at Guangzhou, shipped DDP to your India door.' },
]

const SOURCING_ITEMS = [
  'Identify verified suppliers for any product category',
  'Mandarin price negotiation on your behalf',
  'Factory credential verification',
  'Sample arrangement and DDP dispatch to India',
  'Ongoing supplier relationship management',
]

// Phase category quick-pick guide (new section)
const PHASE_GUIDE = [
  {
    phase: '01',
    title: 'Phase 1',
    dates: 'Oct 15–19',
    emoji: '⚡',
    color: 'rgba(37,99,235,0.12)',
    border: 'rgba(37,99,235,0.3)',
    textColor: '#60a5fa',
    ideal: 'Electronics, Machinery & Industrial Buyers',
    items: ['Consumer Electronics', 'Industrial Equipment', 'Hardware & Tools', 'New Energy & EV', 'Building Materials'],
  },
  {
    phase: '02',
    title: 'Phase 2',
    dates: 'Oct 23–27',
    emoji: '🛍️',
    color: 'rgba(212,175,55,0.08)',
    border: 'rgba(212,175,55,0.25)',
    textColor: '#D4AF37',
    ideal: 'Consumer Goods, Gifts & E-commerce Sellers',
    items: ['Daily Consumer Goods', 'Gifts & Crafts', 'Fashion Accessories', 'Furniture & Home Decor', 'Footwear & Bags'],
  },
  {
    phase: '03',
    title: 'Phase 3',
    dates: 'Oct 31 – Nov 4',
    emoji: '🧵',
    color: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.25)',
    textColor: '#2dd4bf',
    ideal: 'Apparel, Health, Food & Lifestyle Importers',
    items: ['Clothing & Textiles', 'Toys & Baby Products', 'Health & Recreation', 'Food & Beverages', 'Office & Leisure'],
  },
]

// ── Page ────────────────────────────────────────────────────────────────────
export default function CantonFairPage() {
  const whatsappNumber = "918790013772"
  const whatsappMessage = "Hello, I'm reaching out from your website. Could you share details about your Canton Fair 140th edition support services?"

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
                  '@type': 'Service',
                  '@id': 'https://www.ctiddp.com/canton-fair/#service',
                  name: 'Canton Fair 140th Edition DDP Support',
                  provider: {
                    '@type': 'Organization',
                    name: 'CTIDDP',
                    url: 'https://www.ctiddp.com/',
                  },
                  description:
                    'Attend Canton Fair 140th edition on your behalf, negotiate in Mandarin, inspect goods, consolidate from multiple booths, and ship DDP to India.',
                  serviceType: 'Trade Fair Support & DDP Shipping',
                  areaServed: {
                    '@type': 'Country',
                    name: 'India',
                  },
                  url: 'https://www.ctiddp.com/canton-fair/',
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.ctiddp.com/canton-fair/#webpage',
                  url: 'https://www.ctiddp.com/canton-fair/',
                  name: 'Canton Fair 140th Edition Shipping Support | Global DDP Experts',
                  isPartOf: { '@id': 'https://www.ctiddp.com/#website' },
                  mainEntity: { '@id': 'https://www.ctiddp.com/canton-fair/#service' },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.ctiddp.com/canton-fair/#breadcrumb',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ctiddp.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Canton Fair', item: 'https://www.ctiddp.com/canton-fair/' },
                  ],
                },
                {
                  '@type': 'Event',
                  name: '140th Canton Fair - Autumn 2026',
                  startDate: '2026-10-15',
                  endDate: '2026-11-04',
                  location: {
                    '@type': 'Place',
                    name: 'China Import and Export Fair Complex',
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: 'No. 382 Yuejiang Middle Road',
                      addressLocality: 'Guangzhou',
                      addressRegion: 'Guangdong',
                      addressCountry: 'CN',
                    },
                  },
                },
              ],
            }),
          }}
        />

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
          <span className="text-[11px] text-muted/60 whitespace-nowrap">
            <Link href="/" className="text-muted/60 no-underline">Home</Link>
          </span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-blue-light whitespace-nowrap">Canton Fair</span>
        </div>

        {/* ── Page Hero ── */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[42vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[90px] pb-[40px] sm:pb-[60px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-[760px] w-full">
            {/* Edition badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.25)] text-[#D4AF37] text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              140th Edition · Autumn 2026
            </div>

            {/* H1 */}
            <h1 className="font-heading text-[clamp(32px,5.5vw,60px)] font-light leading-[1.1] mb-[14px]">
              Canton Fair DDP.<br />
              <em className="italic text-blue-light">
                Booth to Your Door.
              </em>
            </h1>

            <p className="text-[15px] text-muted max-w-[520px] mx-auto px-2 mb-6">
              We attend the 140th Canton Fair with you, handle everything in Mandarin, inspect goods, and ship DDP to India - under one service.
            </p>

            {/* Quick date strip */}
            <div className="inline-flex flex-wrap justify-center gap-x-5 gap-y-2 bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.15)] rounded-[4px] px-5 py-3 text-[12px] text-muted">
              <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-blue-light text-[10px]" /> Oct 15 – Nov 4, 2026</span>
              <span className="text-[rgba(37,99,235,0.3)] hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-blue-light text-[10px]" /> Pazhou Complex, Guangzhou</span>
              <span className="text-[rgba(37,99,235,0.3)] hidden sm:inline">|</span>
              <span className="text-white font-medium">3 Phases · 26,000+ Exhibitors</span>
            </div>
          </div>
        </section>

        {/* ── Main content - two column ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[52px] items-start">

            {/* ── Left column ── */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[11px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                🎪 Canton Fair Support
              </span>

              <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-light leading-[1.1] mb-[14px]">
                We Go to the Fair.<br />
                <em className="italic text-blue-light">You Get the Goods.</em>
              </h2>

              <p className="text-[rgba(250,250,248,0.6)] text-[13.5px] leading-[1.8] mb-6">
                The Canton Fair is the world's largest trade fair, held twice a year in Guangzhou. The 140th edition runs October–November 2026. With our team already on the ground, we attend on your behalf and handle everything.
              </p>

              {/* Feature list */}
              <div className="flex flex-col gap-[14px] mb-7">
                {FEATURES.map(f => (
                  <div key={f.title} className="flex gap-[14px] items-start">
                    <div className="w-10 h-10 bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] rounded-[10px] flex items-center justify-center text-base shrink-0 text-blue-light">
                      {f.icon}
                    </div>
                    <div>
                      <strong className="text-[13px] text-white block mb-0.5">{f.title}</strong>
                      <span className="text-[12px] text-muted">{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#canton-fair-support-form"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
                >
                  Book Canton Fair Support →
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-[13px] rounded-[3px] text-[13px] font-medium no-underline transition-all duration-200"
                >
                  <FaWhatsapp size={22} />WhatsApp Team
                </a>
              </div>
            </div>

            {/* ── Right column - 140th schedule card ── */}
            <div className="bg-[var(--overlay-input)] border border-border rounded-[4px] p-5 sm:p-7">
              {/* Edition marker */}
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-heading text-[20px] font-semibold text-blue-light">
                  140th Canton Fair Schedule
                </h4>
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] text-[#D4AF37] px-2.5 py-1 rounded-full">
                  Autumn 2026
                </span>
              </div>

              {/* Phases */}
              <div className="flex flex-col gap-0 mb-4">
                {PHASES_AUTUMN.map((p, idx) => (
                  <div
                    key={p.phase}
                    className={`py-[11px] ${idx < PHASES_AUTUMN.length - 1 ? 'border-b border-[rgba(255,255,255,0.05)]' : ''}`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <span className="text-[12.5px] font-semibold text-white leading-tight">{p.phase}</span>
                      <span className="text-[12px] font-medium text-blue-light shrink-0">{p.dates}</span>
                    </div>
                    <p className="text-[11px] text-muted leading-[1.6]">{p.categories}</p>
                  </div>
                ))}
              </div>

              {/* Venue info */}
              <div className="flex items-start gap-2 bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.12)] rounded-[3px] p-3 mb-4">
                <FaMapMarkerAlt className="text-blue-light text-[11px] mt-0.5 shrink-0" />
                <p className="text-[11px] text-muted leading-[1.6]">
                  China Import and Export Fair Complex, Pazhou Island, Haizhu District, Guangzhou, Guangdong
                </p>
              </div>

              {/* Alert */}
              <div className="bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.15)] p-[14px] rounded-[3px] mb-5">
                <div className="text-[10px] text-blue font-semibold tracking-[1px] uppercase mb-[5px]">
                  ⚡ Limited Slots - Book Early
                </div>
                <div className="text-[12px] text-muted leading-[1.6]">
                  Phase 1 (Oct 15) fills fastest. Book at least 4 weeks before to confirm your dedicated support team.
                </div>
              </div>

              <a
                href="#canton-fair-support-form"
                className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
              >
                Reserve Your Support Slot →
              </a>
            </div>
          </div>
        </section>

        {/* ── Phase Guide (NEW) ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                Phase Breakdown
              </span>
              <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-light leading-[1.1] mb-[14px]">
                Which Phase Is<br />
                <em className="italic text-blue-light">Right for You?</em>
              </h2>
              <p className="text-[14px] text-muted max-w-[480px] mx-auto">
                The 140th Canton Fair's three phases cover different categories. We support across all phases - or just the ones you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PHASE_GUIDE.map(p => (
                <div
                  key={p.phase}
                  className="rounded-[4px] border p-5 sm:p-6 flex flex-col gap-4"
                  style={{ background: p.color, borderColor: p.border }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1" style={{ color: p.textColor }}>
                        {p.title} · {p.dates}
                      </div>
                      <div className="text-[11px] text-muted leading-[1.5]">{p.ideal}</div>
                    </div>
                    <span className="text-2xl shrink-0">{p.emoji}</span>
                  </div>

                  <ul className="flex flex-col gap-1.5">
                    {p.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-[12px] text-white/80">
                        <span style={{ color: p.textColor }} className="shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#canton-fair-support-form"
                    className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.5px] uppercase transition-colors"
                    style={{ color: p.textColor }}
                  >
                    Book for this phase →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who This Is For ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                Perfect Match
              </span>
              <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-light leading-[1.1] mb-[14px]">
                Who This Is<br />
                <em className="italic text-blue-light">For</em>
              </h2>
              <p className="text-[15px] text-muted max-w-[500px] mx-auto px-2">
                Built for importers who need boots on the ground at the 140th Canton Fair
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "First-Time Visitors", desc: "Navigate your first Canton Fair with confidence. We guide you through every step from registration to DDP delivery.", icon: "🌱" },
                { title: "Scaling E-commerce Brands", desc: "Source new suppliers and expand your catalog without leaving India. We handle the ground work.", icon: "📈" },
                { title: "Mandarin-Challenged Buyers", desc: "Break language barriers. We negotiate, clarify specs, and handle contracts fully in Mandarin.", icon: "🗣️" },
                { title: "Multi-Category Sourcers", desc: "Manage multiple booths across different phases. We consolidate everything at our Guangzhou warehouse.", icon: "📦" },
                { title: "DDP-First Importers", desc: "One price from booth to your India door. No hidden freight, no customs surprises on arrival.", icon: "🚪" },
                { title: "Remote Sourcers", desc: "Can't travel to Guangzhou? We attend as your sole representative and share live updates throughout.", icon: "📡" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[rgba(37,99,235,0.04)] border border-[rgba(37,99,235,0.15)] p-5 sm:p-[26px] rounded-[3px] hover:border-[rgba(37,99,235,0.3)] transition-all duration-200"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-heading text-[16px] font-semibold mb-2 text-white">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-muted leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── With vs Without ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                Why Choose Us
              </span>
              <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-light leading-[1.1] mb-[14px]">
                With & Without<br />
                <em className="italic text-blue-light">CTIDDP Support</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {/* Without */}
              <div className="bg-[rgba(180,60,50,0.05)] border border-[rgba(180,70,60,0.25)] rounded-[3px] p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-red-400 text-xl">✕</span>
                  <h3 className="text-[18px] font-semibold text-white tracking-wide">Without CTIDDP</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Language barriers with 90% of suppliers",
                    "No quality check before payment",
                    "Managing 5–10 suppliers across 3 phases manually",
                    "Shipping coordination nightmare",
                    "Hidden costs at Indian customs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-muted">
                      <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With */}
              <div className="bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.25)] rounded-[3px] p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
                <div className="flex items-center gap-2 mb-5 relative z-10">
                  <span className="text-blue-light text-xl">✓</span>
                  <h3 className="text-[18px] font-semibold text-blue-light tracking-wide">With CTIDDP Support</h3>
                </div>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Mandarin negotiation handled end-to-end",
                    "On-spot QC before you commit to any order",
                    "Multi-booth consolidation at our Guangzhou warehouse",
                    "One DDP shipment to your India door",
                    "All-inclusive pricing, zero customs surprises",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-white">
                      <span className="text-blue-light shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-[rgba(37,99,235,0.15)]">
                  <a
                    href="#canton-fair-support-form"
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-blue-light hover:text-blue transition-colors"
                  >
                    Get your 140th edition support plan
                    <span className="text-[14px]">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                What's Included
              </span>
              <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-light leading-[1.1] mb-[14px]">
                Full Canton Fair<br />
                <em className="italic text-blue-light">Service Scope</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SCOPE.map(s => (
                <div
                  key={s.title}
                  className="reveal bg-[rgba(37,99,235,0.04)] border border-[rgba(37,99,235,0.15)] p-5 sm:p-[26px] rounded-[3px]"
                >
                  <div className="text-blue-light text-lg mb-3">{s.icon}</div>
                  <h4 className="font-heading text-[16px] font-semibold mb-2 text-white">
                    {s.title}
                  </h4>
                  <p className="text-[12px] text-muted leading-[1.7]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Year-round sourcing ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-black">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px] sm:gap-[72px] items-start">

            {/* Left */}
            <div>
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                Beyond the Fair
              </span>
              <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-light leading-[1.1] mb-[14px]">
                Year-Round<br />
                <em className="italic text-blue-light">Sourcing Support</em>
              </h2>

              <p className="text-[15px] font-light text-muted leading-[1.8] max-w-[520px] mb-6">
                Can't make it to the 140th fair? Our Guangzhou and Foshan teams source products, vet suppliers, and negotiate year-round - not just during Canton Fair season.
              </p>

              <div className="flex flex-col gap-3">
                {SOURCING_ITEMS.map(item => (
                  <div key={item} className="flex gap-2.5 text-[13px] text-white">
                    <span className="text-blue shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - How to book */}
            <div className="bg-surface border border-[rgba(37,99,235,0.15)] p-6 sm:p-8 rounded-[3px]">
              <h3 className="font-heading text-[22px] font-semibold mb-4 text-blue-light">
                How to Book Canton Fair Support
              </h3>

              {STEPS.map((s, idx) => (
                <div
                  key={s.n}
                  className={`flex gap-4 sm:gap-5 py-5 sm:py-6 ${idx < STEPS.length - 1 ? 'border-b border-[rgba(37,99,235,0.07)]' : ''}`}
                >
                  <div className="w-[34px] h-[34px] rounded-full border border-[rgba(37,99,235,0.4)] flex items-center justify-center shrink-0 font-heading text-[13px] font-semibold text-blue">
                    {s.n}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-white mb-[5px]">{s.t}</div>
                    <div className="text-[12px] text-muted leading-[1.6]">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM - Client Component ── */}
        <CantonFairClient />

        {/* ── CTA Banner ── */}
        <div className="bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-t border-b border-[rgba(37,99,235,0.15)] px-4 sm:px-[60px] py-[48px] sm:py-[72px] text-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] text-[#D4AF37] text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5">
            140th Edition
          </div>

          <h2 className="font-heading text-[clamp(30px,4.5vw,56px)] font-light leading-[1.1] mb-[14px]">
            Canton Fair Autumn 2026.<br />
            <em className="italic text-blue-light">Phase 1 starts Oct 15.</em>
          </h2>

          <p className="text-[15px] text-muted mb-8 max-w-[480px] mx-auto px-2">
            All three phases confirmed. Book your 140th edition DDP support slot now - slots fill weeks before the fair opens.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#canton-fair-support-form"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
            >
              Book Canton Fair Support →
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-[13px] rounded-[3px] text-[13px] font-medium no-underline transition-all duration-200"
            >
              <FaWhatsapp size={22} />WhatsApp Us
            </a>
          </div>
        </div>

      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        .reveal.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

    </>
  )
}