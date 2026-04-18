import { FaWhatsapp } from "react-icons/fa6";
import {
  FaStore,
  FaComments,
  FaSearch,
  FaBoxes,
  FaShip,
} from "react-icons/fa"
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'
import CantonFairClient from './CantonFairClient'

export const metadata = {
  title: 'Canton Fair Shipping Support | Global DDP Experts',
  description:
    'Get end-to-end Canton Fair sourcing and shipping support with DDP delivery to India and global markets.',
  keywords: [
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
    'China trade fair shipping company',
    'import from Canton Fair to India',
    'Canton Fair support services',
  ],
  openGraph: {
    title: 'Canton Fair Shipping Support | Global DDP Experts',
    description:
      'Get end-to-end Canton Fair sourcing and shipping support with DDP delivery to India and global markets.',
    url: 'https://www.ctiddp.com/canton-fair/',
    siteName: 'CTIDDP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/canton-fair/',
  },
};

// ── Data ────────────────────────────────────────────────────────────────────
const PHASES_SPRING = [
  { phase: 'Phase 1 · Electronics', dates: 'Apr 15–19' },
  { phase: 'Phase 2 · Consumer Goods', dates: 'Apr 23–27' },
  { phase: 'Phase 3 · Textiles & Home', dates: 'May 1–5' },
]

const SCOPE = [
  { icon: <FaStore />, title: 'Fair Attendance', desc: 'Our Guangzhou team attends all three phases with you or as your sole representative.' },
  { icon: <FaComments />, title: 'Translation & Negotiation', desc: 'Full Mandarin support for supplier conversations, price negotiation, contract terms.' },
  { icon: <FaSearch />, title: 'Sample & QC Inspection', desc: 'On-spot quality inspection of samples. Defect reporting and suitability assessment.' },
  { icon: <FaBoxes />, title: 'Consolidation & DDP Shipping', desc: 'Multi-supplier consolidation at Guangzhou warehouse, then full DDP to your India door.' },
]

const FEATURES = [
  { icon: <FaComments />, title: 'Mandarin Negotiation', desc: 'Direct negotiation in Mandarin for better prices and terms' },
  { icon: <FaSearch />, title: 'On-the-Spot QC', desc: 'Quality verification of samples before you commit to any supplier' },
  { icon: <FaBoxes />, title: 'Multi-Booth Consolidation', desc: 'Collect from multiple exhibitors, consolidate at Guangzhou warehouse' },
  { icon: <FaShip />, title: 'Direct DDP to India', desc: 'All goods shipped DDP to your India address — one price, no surprises' },
]

const STEPS = [
  { n: '01', t: 'Contact us 4+ weeks before the fair', d: 'Via WhatsApp or the form below — share your product categories.' },
  { n: '02', t: 'We assign your Guangzhou support team', d: 'Dedicated Mandarin-speaking team member confirmed for your visit.' },
  { n: '03', t: 'Attend the fair together (or we go solo)', d: 'Your choice — attend with us or let us represent you fully.' },
  { n: '04', t: 'Goods consolidated and shipped DDP', d: 'Everything collected, consolidated at Guangzhou, shipped DDP to India.' },
]

const SOURCING_ITEMS = [
  'Identify verified suppliers for any product category',
  'Mandarin price negotiation on your behalf',
  'Factory credential verification',
  'Sample arrangement and DDP dispatch to India',
  'Ongoing supplier relationship management',
]

// ── Page ────────────────────────────────────────────────────────────────────
export default function CantonFairPage() {
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
                  name: 'Canton Fair DDP Support',
                  provider: {
                    '@type': 'Organization',
                    name: 'CTIDDP',
                    url: 'https://www.ctiddp.com/',
                  },
                  description:
                    'Attend Canton Fair on your behalf, negotiate in Mandarin, inspect goods, consolidate from multiple booths, and ship DDP to India.',
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
                  name: 'Canton Fair Shipping Support | Global DDP Experts',
                  isPartOf: {
                    '@id': 'https://www.ctiddp.com/#website',
                  },
                  mainEntity: {
                    '@id': 'https://www.ctiddp.com/canton-fair/#service',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.ctiddp.com/canton-fair/#breadcrumb',
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
                      name: 'Canton Fair',
                      item: 'https://www.ctiddp.com/canton-fair/',
                    },
                  ],
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
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[38vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[90px] pb-[40px] sm:pb-[60px] bg-black">
          {/* Background radial */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-[740px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7 opacity-100">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              Seasonal · April &amp; October 2026
            </div>

            {/* H1 */}
            <h1 className="font-heading text-[clamp(34px,5.5vw,60px)] font-light leading-[1.1] mb-[14px]">
              Canton Fair DDP.<br />
              <em className="italic text-blue-light">
                Booth to Your Door.
              </em>
            </h1>

            <p className="text-[15px] text-muted max-w-[500px] mx-auto px-2">
              We attend the fair with you, handle everything in Mandarin, inspect goods, and ship DDP to India — under one service.
            </p>
          </div>
        </section>

        {/* ── Main content — two column ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[52px] items-start">

            {/* ── Left column ── */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[11px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                🎪 Canton Fair Support
              </span>

              <h2 className="font-heading text-[clamp(30px,4vw,56px)] font-light leading-[1.1] mb-[14px]">
                We Go to the Fair.<br />
                <em className="italic text-blue-light">You Get the Goods.</em>
              </h2>

              <p className="text-[rgba(250,250,248,0.6)] text-[13.5px] leading-[1.8] mb-6">
                The Canton Fair is the world's largest trade fair, held twice a year in Guangzhou. With our team already on the ground, we attend on your behalf and handle everything.
              </p>

              {/* Feature list */}
              <div className="flex flex-col gap-[14px] mb-7">
                {FEATURES.map(f => (
                  <div key={f.title} className="flex gap-[14px] items-start">
                    <div className="w-10 h-10 bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] rounded-[10px] flex items-center justify-center text-base shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <strong className="text-[13px] text-white block mb-0.5">{f.title}</strong>
                      <span className="text-[12px] text-muted">{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs — scroll to form */}
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href="#canton-fair-support-form"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
                >
                  Book Canton Fair Support →
                </a>
                <a
                  href="https://wa.me/8790013772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-[13px] rounded-[3px] text-[13px] font-medium no-underline transition-all duration-200 cursor-none"
                >
                  <FaWhatsapp size={22} />WhatsApp Team
                </a>
              </div>
            </div>

            {/* ── Right column — schedule card ── */}
            <div className="bg-[var(--overlay-input)] border border-border rounded-[4px] p-5 sm:p-7">
              <h4 className="font-heading text-[20px] font-semibold mb-5 text-blue-light">
                2026 Canton Fair Schedule
              </h4>

              {/* Spring */}
              <div className="mb-1.5">
                <div className="flex justify-between items-center py-2 border-b border-[rgba(37,99,235,0.1)] mb-1">
                  <span className="text-[13px] font-semibold text-white">🌸 Spring Edition</span>
                  <span className="text-[12px] text-blue-light">April 15 – May 5, 2026</span>
                </div>

                {PHASES_SPRING.map(p => (
                  <div
                    key={p.phase}
                    className="flex justify-between items-center py-[10px] border-b border-[rgba(255,255,255,0.04)]"
                  >
                    <span className="text-[12px] text-muted">{p.phase}</span>
                    <span className="text-[13px] font-medium text-white">{p.dates}</span>
                  </div>
                ))}
              </div>

              {/* Autumn */}
              <div className="border-t border-[rgba(37,99,235,0.15)] pt-3 mt-2">
                <div className="flex justify-between items-center py-1">
                  <span className="text-[13px] font-semibold text-white">🍂 Autumn Edition</span>
                  <span className="text-[12px] text-blue-light">Oct 15 – Nov 4, 2026</span>
                </div>
              </div>

              {/* Alert box */}
              <div className="bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.15)] p-[14px] rounded-[3px] my-[18px]">
                <div className="text-[10px] text-blue font-semibold tracking-[1px] uppercase mb-[5px]">
                  ⚡ Limited Spots
                </div>
                <div className="text-[12px] text-muted leading-[1.6]">
                  Book at least 4 weeks before the fair to confirm your support team.
                </div>
              </div>

              {/* Scroll to form */}
              <a
                href="#canton-fair-support-form"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
              >
                Reserve Your Support Slot →
              </a>
            </div>
          </div>
        </section>

        {/* ── Who This Is For ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                Perfect Match
              </span>
              <h2 className="font-heading text-[clamp(30px,4vw,56px)] font-light leading-[1.1] mb-[14px]">
                Who This Is<br />
                <em className="italic text-blue-light">For</em>
              </h2>
              <p className="text-[15px] text-muted max-w-[500px] mx-auto px-2">
                Built for importers who need boots on the ground at the Canton Fair
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "First-Time Visitors", desc: "Navigate your first Canton Fair with confidence. We guide you through every step.", icon: "🌱" },
                { title: "Scaling E-commerce Brands", desc: "Source new suppliers and expand your product catalog without leaving India.", icon: "📈" },
                { title: "Mandarin-Challenged Buyers", desc: "Break language barriers. We negotiate, clarify specs, and handle contracts in Mandarin.", icon: "🗣️" },
                { title: "Multi-Category Sourcers", desc: "Manage multiple booths across different phases. We consolidate everything for you.", icon: "📦" },
                { title: "DDP-First Importers", desc: "One price from booth to your India door. No hidden freight or customs surprises.", icon: "🚪" },
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
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                Why Choose Us
              </span>
              <h2 className="font-heading text-[clamp(30px,4vw,56px)] font-light leading-[1.1] mb-[14px]">
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
                    "Managing 5–10 suppliers manually",
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
                    "On-spot QC before you commit",
                    "Multi-booth consolidation at our warehouse",
                    "One DDP shipment to your India door",
                    "All-inclusive pricing, no customs surprises",
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
                    Get your DDP support plan
                    <span className="text-[14px]">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                What's Included
              </span>
              <h2 className="font-heading text-[clamp(30px,4vw,56px)] font-light leading-[1.1] mb-[14px]">
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
                  <h4 className="font-heading text-[16px] font-semibold mb-2 text-white">
                    {s.icon} {s.title}
                  </h4>
                  <p className="text-[12px] text-muted leading-[1.7]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Year-round sourcing ── */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px] sm:gap-[72px] items-start">

            {/* Left */}
            <div>
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue mb-3 block">
                Beyond the Fair
              </span>
              <h2 className="font-heading text-[clamp(30px,4vw,56px)] font-light leading-[1.1] mb-[14px]">
                Year-Round<br />
                <em className="italic text-blue-light">Sourcing Support</em>
              </h2>

              <p className="text-[15px] font-light text-muted leading-[1.8] max-w-[520px] mb-6">
                Can't make it to the fair? Our Guangzhou and Foshan teams source products, vet suppliers, and negotiate year-round — not just during Canton Fair season.
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

            {/* Right — How to book */}
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

        {/* ── FORM — Client Component ── */}
        <CantonFairClient />

        {/* ── CTA Banner ── */}
        <div className="bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-t border-b border-[rgba(37,99,235,0.15)] px-4 sm:px-[60px] py-[48px] sm:py-[72px] text-center">
          <h2 className="font-heading text-[clamp(32px,4.5vw,58px)] font-light leading-[1.1] mb-[14px]">
            Next Canton Fair:<br />
            <em className="italic text-blue-light">April 15, 2026.</em>
          </h2>

          <p className="text-[15px] text-muted mb-8 max-w-[460px] mx-auto px-2">
            Don't miss the spring edition. Book your DDP support slot now.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#canton-fair-support-form"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
            >
              Book Canton Fair Support →
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-[13px] rounded-[3px] text-[13px] font-medium no-underline transition-all duration-200 cursor-none"
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