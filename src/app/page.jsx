import { FaWhatsapp } from "react-icons/fa6";
import {
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineCreditCard,
  HiOutlineBuildingStorefront,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
  HiOutlineCursorArrowRays,
  HiOutlineClipboardDocumentList,
  HiOutlineLockClosed,
  HiOutlineBolt,
  HiOutlineBellAlert,
} from "react-icons/hi2";
import { HeroSection } from '@/components/sections/HeroSection'
import GlobalPresence from '@/components/sections/GlobalPresence'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Partners from "@/components/sections/Partners";
import SampleComponent from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import Link from 'next/link'

export const metadata = {
  title: 'CTIDDP | Global Shipping & China to India DDP Experts',
  description:
    'Global shipping made simple with China to India DDP delivery, customs clearance, and end-to-end logistics solutions.',
  keywords: [
    'shipping from China to India cost',
    'import from China to India',
    'DDP shipping China to India',
    'door to door shipping China India',
    'China to India shipping company',
    'best freight forwarder India China',
    'China import logistics company India',
    'shipping agent China to India',
    'international shipping company India',
    'global logistics company India',
    'cross border shipping solutions',
    'import without customs hassle India',
    'China sourcing and shipping service',
    'full service logistics provider India',
    'end to end import services India',
  ],
  openGraph: {
    title: 'CTIDDP | Global Shipping & China to India DDP Experts',
    description:
      'Global shipping made simple with China to India DDP delivery, customs clearance, and end-to-end logistics solutions.',
    url: 'https://www.ctiddp.com/',
    siteName: 'CTIDDP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/',
  },
};

const STATS = [
  { digits: '30', suffix: '+', label: 'Expert Team Members' },
  { digits: '300', suffix: '+', label: 'Containers Imported' },
  { digits: '1200', suffix: '+', label: 'Shipments Cleared' },
  { digits: '16250', suffix: '+', label: 'CBM Shipped' },
];

const DDP_COMPARE = [
  {
    badge: 'FOB',
    title: 'Free On Board',
    desc: 'Seller loads goods onto the vessel. After that — sea freight, insurance, customs, duties, last-mile — all your responsibility.',
    marker: '⚠️ Risk transfers at port',
    markerBg: 'rgba(251,191,36,0.15)',
    markerBorder: 'rgba(251,191,36,0.3)',
    markerText: '#FCD34D',
    cardBg: 'bg-surface',
    cardBorder: 'border-[var(--overlay-card-border)]',
    highlight: false,
  },
  {
    badge: 'CIF',
    title: 'Cost, Insurance & Freight',
    desc: 'Seller handles sea freight and insurance. But you still handle Indian customs, BCD+IGST payment, port formalities, and delivery.',
    marker: '⚠️ Duties & last-mile still yours',
    markerBg: 'rgba(251,191,36,0.15)',
    markerBorder: 'rgba(251,191,36,0.3)',
    markerText: '#FCD34D',
    cardBg: 'bg-surface',
    cardBorder: 'border-[var(--overlay-card-border)]',
    highlight: false,
  },
  {
    badge: 'DDP — What We Do',
    title: 'Delivered Duty Paid',
    desc: 'We handle everything: China export, sea freight, insurance, Indian customs filing, BCD+IGST payment, and last-mile delivery. One invoice.',
    marker: '✓ We handle it all',
    markerBg: 'rgba(74,222,128,0.1)',
    markerBorder: 'rgba(74,222,128,0.3)',
    markerText: '#4ADE80',
    cardBg: 'bg-[rgba(37,99,235,0.06)]',
    cardBorder: 'border-[rgba(37,99,235,0.3)]',
    highlight: true,
  },
]

const SERVICES = [
  {
    icon: <HiOutlineGlobeAlt />,
    title: 'Global DDP Shipping',
    desc: ' Our DDP (Delivered Duty Paid) shipping service covers sea and air freight with all duties, taxes, and compliance included. No hidden costs.',
    href: '/services',
    highlight: false,
  },
  {
    icon: <HiOutlineCreditCard />,
    title: 'Supplier Payments',
    desc: 'We manage secure international supplier payments with full documentation, compliance, and traceability. Avoid fraud risks, currency fluctuations, and payment delays.',
    href: '/services',
    highlight: false,
  },
  {
    icon: <HiOutlineMagnifyingGlass />,
    title: 'QC & Pre-Shipment Inspection',
    desc: ' We conduct AQL-based inspections, product testing, and packaging checks with photo/video reports. Ensure your shipment meets quality standards before dispatch.',
    href: '/services',
    highlight: false,
  },
  {
    icon: <HiOutlineBuildingStorefront />,
    title: 'Warehousing & Consolidation',
    desc: ' Our warehouses in Guangzhou & Foshan support inventory storage, repacking, labeling, and dispatch planning for optimized logistics flow.',
    href: '/services',
    highlight: false,
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Customs Clearance',
    desc: 'We handle BCD, IGST, HS code classification, and FTA benefits with accurate pre-calculation. Full compliance with Indian import regulations.',
    href: '/services',
    highlight: false,
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Last-Mile Delivery',
    desc: ' From ports to final destination, we ensure secure last-mile delivery with POD confirmation, warehousing options, and express delivery timelines.',
    href: '/services',
    highlight: false,
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Multi-Vendor Consolidation',
    desc: '  We collect goods from different factories and consolidate them into a single shipment. This reduces freight costs, simplifies documentation, and speeds up delivery.',
    href: '/services',
    highlight: true,
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Canton Fair Support',
    desc: ' Our on-ground team assists with supplier negotiation, product verification, translation, and order management during Canton Fair events.',
    href: '/services',
    highlight: true,
  },
];

const HOW_IT_WORKS = [
  { n: '01', t: 'Supplier Coordination & Factory QC', d: 'Vendor sourcing, negotiation, quality inspection at Foshan before goods move.', tag: 'Foshan · China' },
  { n: '02', t: 'Cargo Consolidation & Export Prep', d: 'Multi-vendor consolidation at Guangzhou. HS code check, packing list, commercial invoice.', tag: 'Guangzhou' },
  { n: '03', t: 'China Export Customs · 48 hrs', d: 'Export declaration, LEO clearance, EGM verification — all within 48 hours.', tag: '48 Hours' },
  { n: '04', t: 'International Sea / Air Transit', d: 'Full DDP Incoterms 2020. Freight, insurance, all risk on us throughout transit.', tag: '18–35 Days Sea' },
  { n: '05', t: 'India Customs + Last-Mile Delivery', d: 'BE filing, BCD+IGST paid, OOC, Chennai warehouse, PAN-India last mile + POD.', tag: '9–11 Days Clearance' },
]

const TESTIMONIALS = [
  { stars: 5, text: 'CTIDDP handled our first China shipment completely — not a single customs document to deal with. The duty pre-calculation was exactly right, zero surprises at Chennai port.', name: 'Rajesh Kumar', role: 'Electronics Importer · Hyderabad' },
  { stars: 5, text: '8 months with CTIDDP. WhatsApp updates on every milestone are excellent. When one shipment hit a customs query, their team handled it all — we just waited for the good news.', name: 'Priya Sharma', role: 'Textile Importer · Bangalore' },
  { stars: 5, text: 'Their Canton Fair support was invaluable. Mandarin-speaking team negotiated for us, saved significant cost. Shipped everything DDP in one container — incredibly smooth.', name: 'Venkat Rao', role: 'Machine Parts Importer · Vizag' },
]

const WHY_US = [
  {
    icon: <HiOutlineCursorArrowRays />,
    title: 'Pure DDP Specialists',
    desc: 'Not a general freight forwarder. Every SOP, every team member, every process built exclusively for China→India DDP.',
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: 'Dual-Country Leadership',
    desc: 'Founders physically based in Guangzhou and Vizag. No vendor chains. Direct control both sides.',
  },
  {
    icon: <HiOutlineClipboardDocumentList />,
    title: '17+ SOPs — Fully Documented',
    desc: 'RACI matrices, control gates, KPI dashboards, escalation protocols. Your cargo never slips through the cracks.',
  },
  {
    icon: <HiOutlineLockClosed />,
    title: 'Zero Hidden Charges',
    desc: 'Full duty calculation before goods move. Freight, BCD, IGST, SWS, last-mile — all in one quote. Always.',
  },
];

const ASSURANCES = [
  {
    icon: <HiOutlineBolt />,
    title: 'Duty Pre-Approved',
    desc: 'Full BCD+IGST+SWS pre-calc signed off by Operations Manager before any import filing.',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Full Insurance + Claims',
    desc: 'Every DDP shipment fully insured. Damage reported within 2 hours, claim filed same day.',
  },
  {
    icon: <HiOutlineBellAlert />,
    title: '2-Hour Escalation SLA',
    desc: 'All Level 2+ issues escalated to management within 2 hours. Five-tier escalation per shipment.',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://www.ctiddp.com/#organization',
                name: 'CTIDDP',
                url: 'https://www.ctiddp.com/',
                // logo: 'https://www.ctiddp.com/logo.png',
                description:
                  'China to India DDP shipping specialists. All duties pre-paid.',
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    telephone: '+91-87900-13772',
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['English', 'Hindi','Telugu'],
                  },
                  {
                    '@type': 'ContactPoint',
                    telephone: '+86-188-1874-9844',
                    contactType: 'customer service',
                    areaServed: 'CN',
                    availableLanguage: ['Chinese', 'English'],
                  },
                ],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://www.ctiddp.com/#website',
                url: 'https://www.ctiddp.com/',
                name: 'CTIDDP',
                publisher: {
                  '@id': 'https://www.ctiddp.com/#organization',
                },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://www.ctiddp.com/track?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ],
          }),
        }}
      />
      <ScrollRevealInit />
      <main className="bg-black text-white">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* stats  */}
        <StatsSection />

        {/* ── 3. WHAT DOES DDP MEAN ──────────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[90px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[580px] mx-auto mb-11">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Know Before You Ship
              </span>
              <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light leading-[1.1] mb-3.5">
                What Does DDP Mean<br />
                <em className="italic text-blue-light">For Your Shipment?</em>
              </h2>
              <p className="text-[15px] text-muted leading-relaxed max-w-[520px] mx-auto">
                Most importers are surprised by what&apos;s NOT included in their current shipping terms.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DDP_COMPARE.map(card => (
                <div
                  key={card.badge}
                  className={`reveal relative overflow-hidden p-6 sm:p-8 border rounded-[4px] transition-all duration-300 hover:-translate-y-1 ${card.cardBg} ${card.cardBorder}`}
                >
                  {card.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                  )}
                  <div
                    className="inline-block text-[9px] font-bold tracking-[1.5px] uppercase mb-3.5 py-1 px-2.5 rounded-full"
                    style={{
                      color: card.highlight ? '#2563EB' : '#8A8A9A',
                      background: card.highlight ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${card.highlight ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.1)'}`,
                    }}
                  >
                    {card.badge}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed mb-[18px]">{card.desc}</p>
                  <div
                    className="text-[12px] font-medium py-2 px-3.5 rounded-[3px]"
                    style={{ background: card.markerBg, border: `1px solid ${card.markerBorder}`, color: card.markerText }}
                  >
                    {card.marker}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.2)] to-transparent mx-4 sm:mx-[60px]" />

        {/* ── 4. SERVICES──────────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[90px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-11 md:items-end">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                  Our Services
                </span>
                <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                  8 Ways We Power Your<br />
                  <em className="italic text-blue-light">Global Supply Chain</em>
                </h2>
              </div>         
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map(s => (
                <Link key={s.title} href={s.href} className="no-underline group">
                  <div
                    className={`reveal relative overflow-hidden py-6 sm:py-8 px-5 sm:px-7 border rounded-[4px] transition-all duration-300 
                      hover:border-[rgba(37,99,235,0.4)] hover:-translate-y-1 cursor-none
                      before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px]
                      before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent
                      before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100
                      ${s.highlight
                        ? 'bg-[rgba(37,99,235,0.05)] border-[rgba(37,99,235,0.2)]'
                        : 'bg-[var(--overlay-card)] border-[var(--overlay-card-border)]'
                      }`}
                  >
                    <div className="w-11 h-11 border border-[rgba(37,99,235,0.3)] rounded-[10px] flex items-center justify-center mb-[18px] bg-[rgba(37,99,235,0.05)] group-hover:border-gold transition-colors">
                      <span className="text-[20px] text-blue-light">
                        {s.icon}
                      </span>
                    </div>
                    <div className="font-heading text-[19px] font-semibold mb-2 text-white group-hover:text-blue-light transition-colors">
                      {s.title}
                    </div>
                    <div className="text-[13px] text-muted leading-relaxed">{s.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.2)] to-transparent mx-4 sm:mx-[60px]" />

        {/* ── 5. HOW IT WORKS ──────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                The DDP Journey
              </span>
              <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light leading-[1.1] mb-3.5">
                One Contract.<br />
                <em className="italic text-blue-light">Zero Worry.</em>
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Every step, every cost, every risk — from supplier to your warehouse door.
              </p>
              <div className="py-4 px-[18px] bg-[rgba(37,99,235,0.06)] border-l-2 border-gold text-[13px] text-muted mb-6 flex items-start gap-2">
                <HiOutlineCalendarDays className="text-blue-light mt-[2px] shrink-0" size={18} />
                <span>
                  Typical total: <strong className="text-blue-light">38–50 days</strong> factory pickup → India warehouse (including customs)
                </span>
              </div>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 border border-[rgba(37,99,235,0.4)] text-blue-light px-6 sm:px-8 py-3 rounded-[3px] text-[13px] tracking-[1px] uppercase transition-all hover:bg-[rgba(37,99,235,0.08)] hover:border-gold cursor-none"
              >
                See Full Process →
              </Link>
            </div>
            <div>
              {HOW_IT_WORKS.map(s => (
                <div key={s.n} className="reveal flex gap-5 items-start py-6 border-b border-[rgba(37,99,235,0.07)] last:border-0">
                  <div className="w-[34px] h-[34px] rounded-full border border-[rgba(37,99,235,0.4)] flex items-center justify-center shrink-0 font-heading text-[13px] font-semibold text-blue">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">{s.t}</div>
                    <div className="text-xs text-muted leading-relaxed">{s.d}</div>
                    <span className="inline-block mt-2 text-[9px] tracking-[1px] uppercase py-1 px-2.5 rounded-full text-blue bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)]">
                      {s.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.2)] to-transparent mx-4 sm:mx-[60px]" />

        {/* ── 6. PARTNERS ──────────────────────────────────────────────────── */}
        <Partners />

        {/* ── 7. GLOBAL PRESENCE ──────────────────────────────────────────────── */}
        <GlobalPresence />

        {/* ── 8. TESTIMONIALS ──────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[90px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[560px] mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Client Reviews
              </span>
              <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                What Our Clients<br />
                <em className="italic text-blue-light">Say About Us</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="reveal bg-[var(--overlay-card)] border border-[var(--overlay-card-border)] p-6 sm:p-7 rounded-[4px] transition-all duration-300 hover:border-[rgba(37,99,235,0.25)]">
                  <div className="text-blue text-xs mb-3.5">{'★'.repeat(t.stars)}</div>
                  <p className="text-[13px] text-muted leading-relaxed italic mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-base">
                      👤
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">{t.name}</div>
                      <div className="text-[11px] text-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(37,99,235,0.2)] to-transparent mx-4 sm:mx-[60px]" />

        {/* ── 9. WHY US + ASSURANCES ───────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[620px] mx-auto mb-11">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Why CTIDDP
              </span>
              <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                We Don&apos;t Just Ship.<br />
                <em className="italic text-blue-light">We Deliver Certainty.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {WHY_US.map(w => (
                <div
                  key={w.title}
                  className="group reveal relative overflow-hidden bg-[rgba(255,255,255,0.015)] border border-[var(--overlay-card-border)] p-6 sm:p-7 rounded-[4px] transition-all duration-300 hover:border-[rgba(37,99,235,0.3)] hover:-translate-y-1
                    before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px]
                    before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent
                    before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                >
                  <div className="mb-3.5">
                    <div className="w-11 h-11 rounded-full border border-[rgba(37,99,235,0.4)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center transition-all duration-300 group-hover:border-gold group-hover:bg-[rgba(37,99,235,0.15)]">
                      <span className="text-[20px] text-blue-light transition-transform duration-300 group-hover:scale-110">
                        {w.icon}
                      </span>
                    </div>
                  </div>
                  <div className="font-heading text-[19px] font-semibold mb-2 text-white">{w.title}</div>
                  <div className="text-[13px] text-muted leading-relaxed">{w.desc}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ASSURANCES.map(a => (
                <div key={a.title} className="reveal bg-[rgba(37,99,235,0.04)] border border-[rgba(37,99,235,0.15)] p-[26px] rounded-[4px]">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl border border-[rgba(37,99,235,0.4)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-gold group-hover:bg-[rgba(37,99,235,0.15)]">
                      <span className="text-[18px] text-blue-light transition-transform duration-300 group-hover:scale-110">
                        {a.icon}
                      </span>
                    </div>

                    <h4 className="font-heading text-base font-semibold">
                      {a.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. CTA BANNER ────────────────────────────────────────────────── */}
        <div className="relative text-center px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[72px] overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">
          <h2 className="font-heading text-[clamp(32px,4.5vw,58px)] font-light leading-[1.1] mb-3.5">
            Ready to Ship<br />
            <em className="italic text-blue-light">the Right Way?</em>
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-[460px] mx-auto">
            Get a full DDP quote with duty pre-calculation. 24-hour response, no commitment.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none shadow-[0_8px_28px_rgba(37,99,235,0.3)]"
            >
              Request a Quote →
            </Link>
            <a
              href="https://wa.me/918790013772"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
            >
              <FaWhatsapp size={22} />WhatsApp Us Directly
            </a>
          </div>
        </div>

        <SampleComponent />

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
      `}</style>

    </>
  )
}