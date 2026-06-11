import { FaWhatsapp } from 'react-icons/fa6'
import {
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBuildingStorefront,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineTruck,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import StepTimeline from '@/components/ui/StepTimeline'
import IconCard from '@/components/ui/IconCard'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'
import TrustPill from '@/components/ui/TrustPill'
import CantonFairClient from './CantonFairClient'

export const metadata = {
  title: 'Canton Fair 140th Edition Shipping Support | Global DDP Experts',
  description:
    'Get end-to-end Canton Fair 140th edition (Autumn 2026) sourcing and shipping support with DDP delivery to India and global markets.',
  keywords: [
    'Canton Fair 140th edition',
    'Canton Fair autumn 2026',
    'Canton Fair shipping to India',
    'Canton Fair sourcing support',
    'Guangzhou sourcing agent India',
  ],
  openGraph: {
    title: 'Canton Fair 140th Edition Shipping Support | Global DDP Experts',
    description: 'Get end-to-end Canton Fair 140th edition sourcing and shipping support with DDP delivery to India.',
    url: 'https://www.ctiddp.com/canton-fair/',
  },
  alternates: { canonical: 'https://www.ctiddp.com/canton-fair' },
}

const PHASES = [
  {
    phase: 'Phase 1',
    dates: 'Oct 15–19',
    title: 'Electronics & Machinery',
    categories: 'Consumer Electronics, Industrial Equipment, Hardware & Tools, New Energy & EV, Building Materials',
    color: 'primary',
  },
  {
    phase: 'Phase 2',
    dates: 'Oct 23–27',
    title: 'Consumer Goods & Gifts',
    categories: 'Daily Consumer Goods, Gifts & Crafts, Fashion Accessories, Furniture & Home Decor, Footwear & Bags',
    color: 'orange',
  },
  {
    phase: 'Phase 3',
    dates: 'Oct 31 – Nov 4',
    title: 'Textiles, Health & Food',
    categories: 'Clothing & Textiles, Toys & Baby Products, Health & Recreation, Food & Beverages, Office & Leisure',
    color: 'primary',
  },
]

const FEATURES = [
  { icon: <HiOutlineChatBubbleLeftRight size={22} />, title: 'Mandarin Negotiation', description: 'Direct negotiation in Mandarin for better prices and terms.' },
  { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'On-the-Spot QC', description: 'Quality verification of samples before you commit to any supplier.' },
  { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Multi-Booth Consolidation', description: 'Collect from multiple exhibitors, consolidate at our Guangzhou warehouse.' },
  { icon: <HiOutlineTruck size={22} />, title: 'Direct DDP to India', description: 'All goods shipped DDP to your India address — one price, no surprises.' },
]

const STEPS = [
  { icon: <HiOutlineChatBubbleLeftRight size={22} />, title: 'Contact Us 4+ Weeks Before', description: 'Share your product categories and target booths via WhatsApp or form.' },
  { icon: <HiOutlineCalendarDays size={22} />, title: 'Team Assignment', description: 'Dedicated Mandarin-speaking team member confirmed for your dates.' },
  { icon: <HiOutlineGlobeAlt size={22} />, title: 'Attend the Fair', description: 'Attend with us or let us represent you fully across all phases.' },
  { icon: <HiOutlineTruck size={22} />, title: 'Consolidated DDP Shipment', description: 'Everything collected, consolidated, and shipped DDP to your India door.' },
]

const WHO_FOR = [
  { title: 'First-Time Visitors', desc: 'Navigate your first Canton Fair with confidence. We guide you through every step.', emoji: '🌱' },
  { title: 'Scaling E-commerce Brands', desc: 'Source new suppliers and expand your catalog without leaving India.', emoji: '📈' },
  { title: 'Mandarin-Challenged Buyers', desc: 'Break language barriers. We negotiate, clarify specs, and handle contracts.', emoji: '🗣️' },
  { title: 'Multi-Category Sourcers', desc: 'Manage multiple booths across different phases. We consolidate everything.', emoji: '📦' },
  { title: 'DDP-First Importers', desc: 'One price from booth to your India door. No hidden freight, no customs surprises.', emoji: '🚪' },
  { title: 'Remote Sourcers', desc: "Can't travel to Guangzhou? We attend as your sole representative.", emoji: '📡' },
]

export default function CantonFairPage() {
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
                '@type': 'Service',
                '@id': 'https://www.ctiddp.com/canton-fair/#service',
                name: 'Canton Fair 140th Edition DDP Support',
                provider: { '@type': 'Organization', name: 'CTIDDP', url: 'https://www.ctiddp.com/' },
                description: 'Attend Canton Fair 140th edition, negotiate in Mandarin, inspect goods, consolidate, and ship DDP to India.',
                serviceType: 'Trade Fair Support & DDP Shipping',
                areaServed: { '@type': 'Country', name: 'India' },
              },
              {
                '@type': 'Event',
                name: '140th Canton Fair - Autumn 2026',
                startDate: '2026-10-15',
                endDate: '2026-11-04',
                location: {
                  '@type': 'Place',
                  name: 'China Import and Export Fair Complex',
                  address: { '@type': 'PostalAddress', addressLocality: 'Guangzhou', addressRegion: 'Guangdong', addressCountry: 'CN' },
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ctiddp.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Canton Fair', item: 'https://www.ctiddp.com/canton-fair/' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <PageHero
        badge="140TH EDITION · AUTUMN 2026"
        subtitle="We attend the 140th Canton Fair with you, handle everything in Mandarin, inspect goods, and ship DDP to India — under one service."
        bgImage="/images/services/arranging-order-deliveries-using-invoice-identification-codes.jpeg"
        titleNode={
          <>
            Canton Fair DDP.
            <br />
            <span className="text-primary-light">Booth to Your Door.</span>
          </>
        }
      >
        <div className="flex flex-wrap gap-3 mb-6">
          <TrustPill text="All 3 Phases" light />
          <TrustPill text="Mandarin Support" light />
          <TrustPill text="On-Site QC" light />
          <TrustPill text="DDP Delivery" light />
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          <Button href="#canton-fair-support-form" variant="primary" arrow>BOOK CANTON FAIR SUPPORT</Button>
          <Button href="https://wa.me/918790013772" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>
            WHATSAPP US
          </Button>
        </div>
        {/* Quick info strip */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/70">
          <span className="flex items-center gap-1.5"><HiOutlineCalendarDays size={14} className="text-primary-light" /> Oct 15 – Nov 4, 2026</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5"><HiOutlineMapPin size={14} className="text-primary-light" /> Pazhou Complex, Guangzhou</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="font-600 text-white">3 Phases · 26,000+ Exhibitors</span>
        </div>
      </PageHero>

      {/* ══════════ FEATURES ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <SectionBadge>CANTON FAIR SUPPORT</SectionBadge>
              <h2 className="section-title">
                We Go to the Fair. <span className="highlight">You Get the Goods.</span>
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-7">
                The Canton Fair is the world&apos;s largest trade fair, held twice a year in Guangzhou. The 140th edition runs October–November 2026. With our team already on the ground, we attend on your behalf and handle everything.
              </p>
              <div className="flex flex-col gap-4">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex gap-3 items-start group">
                    <div className="icon-container icon-container-sm shrink-0 group-hover:bg-primary-100">{f.icon}</div>
                    <div>
                      <div className="text-[14px] font-600 text-gray-900 mb-0.5">{f.title}</div>
                      <div className="text-[12px] text-gray-500 leading-relaxed">{f.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-7">
                <Button href="#canton-fair-support-form" variant="primary" arrow>BOOK SUPPORT</Button>
                <Button href="https://wa.me/918790013772" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>WHATSAPP TEAM</Button>
              </div>
            </div>

            {/* Right — 140th Schedule Card */}
            <div className="card p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[18px] font-600 text-gray-900">140th Canton Fair Schedule</h3>
                <span className="text-[10px] font-700 tracking-[1.5px] uppercase bg-orange/10 border border-orange/20 text-orange px-2.5 py-1 rounded-full">Autumn 2026</span>
              </div>
              <div className="flex flex-col gap-0 mb-5">
                {PHASES.map((p, idx) => (
                  <div key={p.phase} className={`py-3 ${idx < PHASES.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <span className="text-[13px] font-600 text-gray-900">{p.phase} · {p.title}</span>
                      <span className="text-[12px] font-600 text-primary shrink-0">{p.dates}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{p.categories}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3 mb-5">
                <HiOutlineMapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  China Import and Export Fair Complex, Pazhou Island, Haizhu District, Guangzhou, Guangdong
                </p>
              </div>
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 mb-5">
                <div className="text-[10px] text-primary font-700 tracking-[1px] uppercase mb-1">⚡ Limited Slots — Book Early</div>
                <div className="text-[12px] text-gray-600 leading-relaxed">Phase 1 (Oct 15) fills fastest. Book at least 4 weeks before to confirm your dedicated support team.</div>
              </div>
              <Button href="#canton-fair-support-form" variant="primary" arrow className="w-full justify-center">
                RESERVE YOUR SUPPORT SLOT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PHASE GUIDE ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>PHASE BREAKDOWN</SectionBadge>
            <h2 className="section-title">
              Which Phase Is <span className="highlight">Right for You?</span>
            </h2>
            <p className="section-subtitle centered">
              The 140th Canton Fair&apos;s three phases cover different categories. We support across all phases — or just the ones you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PHASES.map((p) => (
              <div key={p.phase} className="card p-6 group hover:border-primary-200">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-[10px] font-700 tracking-[2px] uppercase text-primary mb-1">{p.phase} · {p.dates}</div>
                    <div className="text-[15px] font-600 text-gray-900">{p.title}</div>
                  </div>
                </div>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {p.categories.split(', ').map((cat) => (
                    <li key={cat} className="flex items-center gap-2 text-[12px] text-gray-600">
                      <span className="text-primary shrink-0">✓</span>
                      {cat}
                    </li>
                  ))}
                </ul>
                <Link href="#canton-fair-support-form" className="text-[12px] font-600 text-primary hover:text-primary-dark transition-colors no-underline">
                  Book for this phase →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHO IT'S FOR ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>WHO IT&apos;S FOR</SectionBadge>
            <h2 className="section-title">
              Built for Importers Who Need <span className="highlight">Boots on the Ground</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_FOR.map((item) => (
              <div key={item.title} className="card p-6 group">
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h4 className="text-[15px] font-600 text-gray-900 mb-2">{item.title}</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WITH VS WITHOUT ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>WHY CHOOSE US</SectionBadge>
            <h2 className="section-title">
              With & Without <span className="highlight">CTIDDP Support</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {/* Without */}
            <div className="rounded-2xl p-7 bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-red-500 text-xl">✕</span>
                <h3 className="text-[16px] font-600 text-gray-900">Without CTIDDP</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Language barriers with 90% of suppliers',
                  'No quality check before payment',
                  'Managing 5–10 suppliers across 3 phases manually',
                  'Shipping coordination nightmare',
                  'Hidden costs at Indian customs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-gray-600">
                    <span className="text-red-500 shrink-0 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* With */}
            <div className="rounded-2xl p-7 bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-primary text-xl">✓</span>
                <h3 className="text-[16px] font-600 text-primary">With CTIDDP Support</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Mandarin negotiation handled end-to-end',
                  'On-spot QC before you commit to any order',
                  'Multi-booth consolidation at our Guangzhou warehouse',
                  'One DDP shipment to your India door',
                  'All-inclusive pricing, zero customs surprises',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-gray-800">
                    <span className="text-primary shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-primary-200">
                <Link href="#canton-fair-support-form" className="text-[12px] font-600 text-primary hover:text-primary-dark transition-colors no-underline">
                  Get your 140th edition support plan →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>HOW TO BOOK</SectionBadge>
            <h2 className="section-title">
              Simple <span className="highlight">4-Step Process</span>
            </h2>
          </div>
          <StepTimeline steps={STEPS} />
        </div>
      </section>

      {/* ══════════ FORM ══════════ */}
      <CantonFairClient />

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        badge="140TH EDITION"
        title="Canton Fair Autumn 2026.<br /><span class='text-primary-light'>Phase 1 starts Oct 15.</span>"
        subtitle="All three phases confirmed. Book your 140th edition DDP support slot now — slots fill weeks before the fair opens."
        buttons={[
          { label: 'BOOK SUPPORT', href: '#canton-fair-support-form', variant: 'primary' },
          { label: 'WHATSAPP US', href: 'https://wa.me/918790013772', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
        ]}
      />
    </main>
  )
}