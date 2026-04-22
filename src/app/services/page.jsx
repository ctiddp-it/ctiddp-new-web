import { FaWhatsapp } from "react-icons/fa6";
import {
  FaShip,
  FaSearch,
  FaBoxes,
  FaFileInvoiceDollar,
  FaStore,
  FaTruck
} from "react-icons/fa"
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'

export const metadata = {
  title: 'DDP Shipping Services | Global Freight & India Imports',
  description:
    'Explore global freight services including DDP shipping, air and sea cargo, and door-to-door logistics.',
  keywords: [
    'what is DDP shipping',
    'import process China to India',
    'customs clearance process India import',
    'how to import goods from China',
    'step by step import guide India',
    'shipping process China to India',
    'DDP vs DDU difference',
    'import documentation India',
    'international shipping process explained',
    'freight forwarding process',
    'China import steps for beginners',
    'import tax India calculation',
    'how logistics works globally',
    'customs duty India process',
  ],
  openGraph: {
    title: 'DDP Shipping Services | Global Freight & India Imports',
    description:
      'Explore global freight services including DDP shipping, air and sea cargo, and door-to-door logistics.',
    url: 'https://www.ctiddp.com/services/',
    siteName: 'CTIDDP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/services/',
  },
};

const SERVICES = [
  {
    icon: FaShip,
    title: 'China to India DDP Shipping',
    desc: 'Full DDP sea and air freight from China to any Indian port...',
    tags: ['Sea LCL / FCL', 'Air Freight', 'Full DDP', 'All Ports'],
    bullets: [
      'JNPT, Chennai, Vizag, Mundra covered',
      'BCD + IGST + SWS pre-paid',
      'Full cargo insurance included',
      'Real-time WhatsApp tracking'
    ]
  },
  {
    icon: FaSearch,
    title: 'QC & Pre-Shipment Inspection',
    desc: 'Catch problems before goods leave China...',
    tags: ['Foshan Warehouse', 'Photo Report', 'AQL Standard'],
    bullets: [
      'Random sampling to AQL 2.5',
      'Full photo & video documentation',
      'Defect resolution before export',
      'Dimensional and packaging checks'
    ]
  },
  {
    icon: FaBoxes,
    title: 'Multi-Vendor Consolidation',
    desc: 'Source from 10 suppliers across Guangdong...',
    tags: ['LCL Groupage', 'Guangzhou Hub', 'HS Code Verify'],
    bullets: [
      'Accept from any China address',
      'HS code verification & SWS calc',
      'Packing list & invoice prep',
      'Arrival photo at consolidation'
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'India Customs Clearance',
    desc: 'We handle 100% of the India import process...',
    tags: ['BE Filing', 'BCD + IGST', 'FTA Rates', '4 Major Ports'],
    bullets: [
      'BCD + IGST + SWS pre-calculated',
      'FTA preferential rates applied',
      'Examination & stuffing handled',
      'OOC in 9–11 working days'
    ]
  },
  {
    icon: FaStore,
    title: 'Canton Fair Support',
    desc: 'We attend the Canton Fair Spring & Autumn...',
    tags: ['Spring & Autumn', 'Mandarin Negotiation', 'Sample Inspection'],
    bullets: [
      'Guangzhou-based team on the floor',
      'Real-time translation & negotiation',
      'Sample dispatch to India',
      'Consolidate fair + Alibaba orders'
    ]
  },
  {
    icon: FaTruck,
    title: 'Last-Mile PAN-India Delivery',
    desc: 'From our Chennai warehouse to your doorstep...',
    tags: ['All India States', 'POD Included', 'B2B & B2C'],
    bullets: [
      'Next-day metro, 2–3 day other cities',
      'Cold chain on request',
      'Proof of Delivery (POD) guaranteed',
      'Warehouse storage available'
    ]
  },
]

export default function ServicesPage() {
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
                  '@id': 'https://www.ctiddp.com/services/#service',
                  name: 'China to India DDP Shipping',
                  provider: {
                    '@type': 'Organization',
                    name: 'CTIDDP',
                    url: 'https://www.ctiddp.com/',
                  },
                  serviceType: 'Freight Forwarding',
                  description: 'End-to-end DDP freight from China to India.',
                  areaServed: {
                    '@type': 'Country',
                    name: 'India',
                  },
                  url: 'https://www.ctiddp.com/services/',
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.ctiddp.com/services/#webpage',
                  url: 'https://www.ctiddp.com/services/',
                  name: 'DDP Shipping Services | Global Freight & India Imports',
                  isPartOf: {
                    '@id': 'https://www.ctiddp.com/#website',
                  },
                  mainEntity: {
                    '@id': 'https://www.ctiddp.com/services/#service',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.ctiddp.com/services/#breadcrumb',
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
                      name: 'Services',
                      item: 'https://www.ctiddp.com/services/',
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
          <span className="text-[11px] text-blue-light whitespace-nowrap">Services</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[45vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              Six Core Services
            </div>
            <h1 className="font-heading text-[clamp(36px,5vw,60px)] font-light leading-[1.1] mb-4">
              Everything You Need.<br />
              <em className="italic text-blue-light">
                Under One Contract.
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[520px] mx-auto">
              From factory gate in China to customer door in India — six specialised services, one accountable partner.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.map((s, idx) => (
                <div
                  key={s.title}
                  className="reveal bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.12)] rounded-[4px] p-6 sm:p-7 transition-all duration-300 hover:border-[rgba(37,99,235,0.35)] hover:bg-[var(--overlay-card)] group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-md 
                  bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] 
                  text-blue-light mb-4 group-hover:scale-120 transition-all">
                    <s.icon size={20} />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-blue-light transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-[12px] text-muted leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="list-none flex flex-col gap-1.5 mb-5">
                    {s.bullets.map(b => (
                      <li key={b} className="text-[11px] sm:text-xs text-muted flex items-start gap-2">
                        <span className="text-blue shrink-0 mt-0.5">✓</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span
                        key={t}
                        className="text-[9px] tracking-[1px] uppercase text-blue bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] py-1 px-2.5 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="relative text-center px-4 sm:px-[60px] py-12 sm:py-16 overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">
          <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.2] mb-3">
            Need All Six?<br />
            <em className="italic text-blue-light">We Bundle Them.</em>
          </h2>
          <p className="text-sm text-muted max-w-[420px] mx-auto mb-7">
            One DDP contract covers the entire journey. Ask about our full-service bundles.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
            >
              Get DDP Quote →
            </Link>
            <a
              href="https://wa.me/918790013772"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
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
      `}</style>

    </>
  )
}