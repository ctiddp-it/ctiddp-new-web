import {
  FiPackage,
  FiMapPin,
  FiZap,
  FiTarget,
  FiRepeat,
  FiShield
} from "react-icons/fi";
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About CTIDDP — China to India Shipping (DDP) | CTIDDP Logistics Company',
  description: 'Learn about CTIDDP — China to India DDP shipping specialists. End-to-end freight forwarding, door-to-door delivery across India, zero hidden costs. Meet the founders.',
  openGraph: {
    title: 'About CTIDDP — China to India DDP Specialists',
    description: 'Founded by Mallesh and Balu Gujjala. 500+ DDP shipments, 17 SOPs, zero hidden charges. Full-service China to India import logistics.',
    url: 'https://ctiddp.com/about',
  },
  alternates: { canonical: 'https://ctiddp.com/about' },
}

const TEAM = [
  { image: '/images/mallesh-gujjala-founder-ceo-ctiddp.png', name: 'Mallesh Gujjala', role: 'Founder & CEO', bio: 'Visionary behind CTIDDP. Built the end-to-end DDP framework for China-to-India imports from the ground up — from supplier networks in Guangdong to last-mile delivery across India.' },
  { image: '/images/balu-gujjala-co-founder-head-of-india-operations-ctiddp.png', name: 'Balu Gujjala', role: 'Co-Founder & India Operations', bio: 'Based in Visakhapatnam. Oversees all India-side operations, customs compliance, and client relationships. Licensed CHA with 10+ years in Indian import logistics and port operations.' },
]

const LOCATIONS = [
  { flag: '🇨🇳', city: 'Guangzhou', country: 'China', details: ['Primary operations hub', 'Canton Fair management', 'Supplier coordination', 'Export customs filing'] },
  { flag: '🇨🇳', city: 'Foshan', country: 'China', details: ['QC warehouse facility', 'Pre-shipment inspection', 'Multi-vendor consolidation', 'Packing verification'] },
  { flag: '🇮🇳', city: 'Visakhapatnam', country: 'India', details: ['Head office · India', 'Client management', 'Import consulting', 'Vizag port operations'] },
  { flag: '🇮🇳', city: 'Chennai', country: 'India', details: ['India dispatch warehouse', 'Chennai port clearance', 'South India last-mile hub'] },
]

const MISSION_POINTS = [
  'Simplify international shipping with end-to-end DDP logistics',
  'Eliminate hidden costs and delays in imports',
  'Support Indian businesses in scaling through reliable supply chains',
  'Build a seamless connection between China manufacturers and Indian markets',
]

const WHY_US = [
  { icon: <FiRepeat />, title: 'End-to-End DDP Shipping', desc: 'Supplier pickup in China to door delivery in India — fully managed under one system. No handoffs, no gaps.', keyword: 'DDP shipping services' },
  { icon: <FiShield />, title: 'No Hidden Costs', desc: 'Clear, upfront pricing before every shipment. What you\'re quoted is what you pay — every time.', keyword: 'transparent freight forwarding' },
  { icon: <FiMapPin />, title: 'On-Ground China Coordination', desc: 'We coordinate directly with suppliers and warehouses in Guangzhou. Nothing is managed blindly.', keyword: 'China to India freight forwarding' },
  { icon: <FiPackage />, title: 'Built for Importers & E-commerce', desc: 'Repeat shipments, tight timelines, inventory pressure — our process is designed for how importers actually work.', keyword: 'import logistics India' },
  { icon: <FiZap />, title: 'Faster, Controlled Deliveries', desc: 'We plan shipments before they leave the supplier — reducing delays through proactive coordination.', keyword: 'door-to-door delivery India' },
  { icon: <FiTarget />, title: 'Dedicated Single-Team Support', desc: 'No chasing multiple agents. One team handles your entire shipment from China pickup to Indian delivery.', keyword: 'dedicated import support' },
]

const STEPS = [
  { num: '01', title: 'Supplier Coordination', desc: 'We connect with your supplier in China and verify shipment readiness — quantities, packaging, and documentation — before anything moves.' },
  { num: '02', title: 'Pickup & Consolidation', desc: 'Goods are picked up from factories or warehouses. If you have multiple vendors, we consolidate into a single shipment to save cost.' },
  { num: '03', title: 'DDP Shipping', desc: 'We handle everything: Air or Sea freight, China export customs, India import customs clearance, duties and taxes — fully covered under DDP terms.' },
  { num: '04', title: 'Final Delivery in India', desc: 'Your shipment is delivered directly to your warehouse or address across India — safely, on time, with full documentation.' },
  { num: '05', title: 'Continuous Support', desc: 'We assist with real-time tracking updates, post-delivery queries, and proactive planning for your next shipment cycle.' },
]

const SOPS = [
  'SOP-01 Client Onboarding', 'SOP-02 Quotation & Duty Calc', 'SOP-03 Vendor Coordination', 'SOP-04 Purchase Order Review',
  'SOP-05 Pre-Shipment QC', 'SOP-06 LCL Consolidation', 'SOP-07 FCL Booking', 'SOP-08 Export Documentation',
  'SOP-09 China Customs Clearance', 'SOP-10 Ocean Freight Monitoring', 'SOP-11 Air Freight Booking', 'SOP-12 Vessel Arrival Prep',
  'SOP-13 India Import Filing', 'SOP-14 Duty Payment & OOC', 'SOP-15 Warehouse Inbound', 'SOP-16 Last-Mile Dispatch',
  'SOP-17 POD & Invoice Closure',
]

export default function AboutPage() {
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
                  '@type': 'LocalBusiness',
                  '@id': 'https://ctiddp.com/about',
                  name: 'CTIDDP',
                  description: 'China to India DDP Shipping Specialists — end-to-end freight forwarding, customs clearance, and door delivery across India.',
                  url: 'https://ctiddp.com',
                  logo: 'https://ctiddp.com/logo.png',
                  founder: [
                    { '@type': 'Person', name: 'Mallesh Gujjala', jobTitle: 'Founder & CEO' },
                    { '@type': 'Person', name: 'Balu Gujjala', jobTitle: 'Co-Founder & India Operations' }
                  ],
                  address: [
                    { '@type': 'PostalAddress', addressLocality: 'Visakhapatnam', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
                    { '@type': 'PostalAddress', addressLocality: 'Guangzhou', addressRegion: 'Guangdong', addressCountry: 'CN' }
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    availableLanguage: ['English', 'Hindi', 'Telugu', 'Chinese']
                  },
                  sameAs: ['https://wa.me/your-number']
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ctiddp.com' },
                    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://ctiddp.com/about' }
                  ]
                },
              ],
            })
          }}
        />

        {/* Breadcrumb */}
        <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
          <span className="text-[11px] text-muted/60 whitespace-nowrap">
            <Link href="/" className="text-muted/60 no-underline">Home</Link>
          </span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-gold-light whitespace-nowrap">About Us</span>
        </div>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[45vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-gold-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              Our Story
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,5vw,60px)] font-light leading-[1.1] mb-4">
              Built for One Route.<br />
              <em className="italic bg-gradient-to-br from-gold to-gold-pale bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                China to India.
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[520px] mx-auto mb-8">
              We&apos;re not a general freight forwarder. We&apos;re specialists — every SOP, every hire, every process built exclusively for China-to-India DDP shipping.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-gold to-gold-light text-black px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none shadow-[0_8px_28px_rgba(37,99,235,0.3)]"
              >
                Get DDP Quote →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[rgba(37,99,235,0.4)] text-gold-light px-6 sm:px-8 py-3 rounded-[3px] text-[13px] tracking-[1px] uppercase transition-all hover:bg-[rgba(37,99,235,0.08)] cursor-none"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Who We Are
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1] mb-5">
                Our Story —<br />
                <em className="italic text-gold-light">How We Started</em>
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-5">
                China to India DDP Shipping (CTI-DDP) is a specialized logistics partner focused on simplifying imports from China to India. We work closely with businesses, e-commerce brands, and bulk importers to handle the entire shipping process — from supplier pickup to final delivery.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-5">
                Our journey started with a simple observation: <strong className="text-white">most importers struggle not with sourcing, but with shipping, customs clearance, and coordination.</strong> That&apos;s where we built our expertise.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                Today we provide end-to-end DDP shipping services from China to India — with on-ground presence in China and active coordination with Indian clients, bridging the gap between suppliers and delivery.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { num: '500+', label: 'Successful DDP Shipments' },
                { num: '17+', label: 'Documented SOPs' },
                { num: '4', label: 'Offices: Guangzhou, Foshan, Vizag, Chennai' },
                { num: '0', label: 'Hidden charges. Ever.' },
              ].map(s => (
                <div key={s.label} className="reveal bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.15)] p-5 sm:p-[22px] rounded-[3px] flex items-center gap-5 hover:border-[rgba(37,99,235,0.3)] transition-colors">
                  <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-[44px] font-semibold text-gold-light leading-none shrink-0">
                    {s.num}
                  </div>
                  <div className="text-[13px] text-muted leading-relaxed">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] ">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                OUR FOUNDERS
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,5vw,60px)] font-light leading-[1.1] mb-4">
                The People Behind <br />
                <em className="italic bg-linear-to-br from-gold to-gold-pale font-semibold bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Your Shipments
                </em>              
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              {TEAM.map(m => (
                <article key={m.name} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={m.image}
                      alt={`${m.name} — ${m.role}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{m.name}</h3>
                    <p className="text-sm font-medium text-blue-600 mt-1">{m.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mt-3">{m.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Vision & Mission
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                Where We&apos;re Going.<br />
                <em className="italic text-gold-light">How We&apos;ll Get There.</em>
              </h2>
            </div>

            {/* Vision Card */}
            <div className="reveal bg-gradient-to-br ttext-white border border-[rgba(37,99,235,0.25)] rounded-[4px] p-8 sm:p-9 mb-8 max-w-[760px] mx-auto">
              <div className="text-[11px] tracking-[0.12em] uppercase text-gold-light mb-3 font-medium">Our Vision</div>
              <p className="text-lg text-white leading-relaxed font-['Cormorant_Garamond',serif] italic">
                &ldquo;To become the most trusted logistics partner for businesses importing from China to India — delivering consistent, transparent, and scalable shipping solutions.&rdquo;
              </p>
            </div>

            {/* Mission Points */}
            <div className="max-w-[760px] mx-auto">
              <div className="text-[11px] tracking-[0.12em] uppercase text-gold-light mb-5 font-medium text-center">Our Mission</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {MISSION_POINTS.map((point, i) => (
                  <div key={i} className="reveal bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.1)] rounded-[3px] p-4 sm:p-[18px] flex items-start gap-3 hover:border-[rgba(37,99,235,0.2)] transition-colors">
                    <span className="text-gold-light text-base leading-none shrink-0 mt-0.5">✦</span>
                    <span className="text-sm text-white leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[580px] mx-auto mb-11">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Why Choose Us
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                Most Companies Ship.<br />
                <em className="italic text-gold-light">We Manage the Whole Import.</em>
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-2.5">
                Most logistics companies only handle transport. We handle the entire process — from supplier to your door.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {WHY_US.map((item, i) => (
                <article key={i} className="reveal bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.12)] rounded-[4px] p-6 sm:p-7 flex flex-col gap-3 hover:border-[rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all">
                  <div className="mb-2">
                    <div className="w-10 h-10 rounded-full border border-[rgba(37,99,235,0.35)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center text-gold-light transition-all duration-300 group-hover:scale-105 group-hover:border-[rgba(37,99,235,0.6)]">
                      <span className="text-[18px] leading-none">
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <div className="text-[15px] font-semibold text-white leading-tight">{item.title}</div>
                  <div className="text-[13px] text-white leading-relaxed flex-grow">{item.desc}</div>
                  <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[rgba(240,150,4,0.85)] mt-1">{item.keyword}</div>
                </article>
              ))}
            </div>
            <p className="text-center mt-10 text-[15px] text-white italic">
              You don&apos;t just get shipping. You get a reliable import system.
            </p>
          </div>
        </section>

        {/* ── HOW WE SERVE ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[560px] mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                How We Serve
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                A Structured Process.<br />
                <em className="italic text-gold-light">Predictable Every Time.</em>
              </h2>
            </div>
            <div className="max-w-[720px] mx-auto relative">
              <div className="absolute left-[27px] top-7 bottom-7 w-px bg-gradient-to-b from-[rgba(37,99,235,0.5)] to-[rgba(37,99,235,0.08)] z-0" />
              {STEPS.map((step, i) => (
                <div key={i} className={`reveal flex gap-5 sm:gap-7 items-start relative z-[1] ${i < STEPS.length - 1 ? 'mb-6 sm:mb-8' : ''}`}>
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-deep border border-[rgba(37,99,235,0.4)] flex items-center justify-center shrink-0">
                    <span className="font-['Cormorant_Garamond',serif] text-sm sm:text-base font-semibold text-gold-light">{step.num}</span>
                  </div>
                  <div className="bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.1)] rounded-[4px] p-4 sm:p-5 flex-1 hover:border-[rgba(37,99,235,0.25)] transition-colors">
                    <div className="text-sm sm:text-[15px] font-semibold text-white mb-2">{step.title}</div>
                    <div className="text-[12px] sm:text-[13px] text-white leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICES ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Our Offices
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                Two Countries.<br />
                <em className="italic text-gold-light">Four Locations.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {LOCATIONS.map(l => (
                <div key={l.city} className="reveal bg-[var(--overlay-card)] border border-border rounded-[4px] p-5 sm:p-6 text-center hover:border-[rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all">
                  <div className="text-3xl mb-2">{l.flag}</div>
                  <div className="font-['Cormorant_Garamond',serif] text-lg font-semibold text-white">{l.city}</div>
                  <div className="text-[10px] tracking-[1.5px] uppercase text-gold mb-3">{l.country}</div>
                  {l.details.map(d => (
                    <div key={d} className="text-xs text-muted leading-relaxed">· {d}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOPs ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[580px] mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Process Excellence
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                17 SOPs. Every<br />
                <em className="italic text-gold-light">Shipment Covered.</em>
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-2.5">
                Every step of the DDP journey is documented with RACI matrices, control gates, and escalation protocols.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {SOPS.map(sop => (
                <span key={sop} className="reveal bg-[rgba(37,99,235,0.06)] border border-[rgba(37,99,235,0.15)] text-muted text-xs py-1.5 px-3 sm:py-2 sm:px-4 rounded-sm hover:border-[rgba(37,99,235,0.3)] hover:bg-[rgba(37,99,235,0.1)] transition-all">
                  {sop}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <div className="relative text-center px-4 sm:px-6 lg:px-[60px] py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.2] mb-3">
            Work With a Team<br />
            <em className="italic text-gold-light">That&apos;s All-In.</em>
          </h2>
          <p className="text-sm text-muted max-w-[420px] mx-auto mb-7">
            No vendor chains. No hidden charges. One team, full accountability — China side and India side.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-gold to-gold-light text-black px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none shadow-[0_8px_28px_rgba(37,99,235,0.3)]"
            >
              Get DDP Quote →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[rgba(37,99,235,0.4)] text-gold-light px-6 sm:px-8 py-3 rounded-[3px] text-[13px] tracking-[1px] uppercase transition-all hover:bg-[rgba(37,99,235,0.08)] cursor-none"
            >
              Meet the Founders
            </Link>
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
      `}</style>

    </>
  )
}