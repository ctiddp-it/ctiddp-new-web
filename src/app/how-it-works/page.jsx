import { FaWhatsapp } from "react-icons/fa6";
import {
  FiPackage,
  FiSearch,
  FiLayers,
  FiFileText,
  FiTruck,
} from "react-icons/fi";
import {
  PackageCheck,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FaShip, FaPlane } from "react-icons/fa6";
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'
import TwoColumnSection from "@/components/sections/TwoColumnSection"

export const metadata = {
  title: 'How DDP Shipping Works | Global Import Process',
  description:
    'Understand how DDP shipping works from supplier pickup to global delivery with full logistics support.',
  keywords: [
    'how DDP shipping works',
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
    title: 'How DDP Shipping Works | Global Import Process',
    description:
      'Understand how DDP shipping works from supplier pickup to global delivery with full logistics support.',
    url: 'https://www.ctiddp.com/how-it-works/',
    siteName: 'CTIDDP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/how-it-works',
  },
};

const PHASE1 = [
  { n: '01', title: 'Vendor Coordination & Pricing', desc: 'We engage existing suppliers or source new ones. Negotiate on your behalf in Mandarin, verify factory credentials.', tag: '1–3 Days' },
  { n: '02', title: 'Pre-Shipment Quality Check', desc: 'Guangzhou warehouse team conducts physical inspection. Quality issues resolved before any goods leave China.', tag: 'Guangzhou  Warehouse' },
  { n: '03', title: 'Multi-Vendor Consolidation & Client Coordination', desc: 'Goods from multiple suppliers consolidated at Foshan. HS code verification, docs finalized.', tag: 'Foshan' },
  { n: '04', title: 'China Export Customs ', desc: 'Export declaration submitted, LEO obtained, EGM verified.', tag: 'Export Clearance' },
]

const PHASE2 = [
  { n: '05', title: 'International DDP Transit', desc: 'Sea freight (28–35 days) or air freight (7–14 days). Full DDP - freight, insurance, risk all on us.', tag: 'Sea / Air' },
  { n: '06', title: 'India Import Customs · 9–15 days', desc: 'BE filing, BCD+IGST+SWS payment, FTA rates applied, OOC obtained at Chennai/Vizag.', tag: '9–15 Working Days' },
  { n: '07', title: 'Warehouse Inbound & Inspection', desc: 'Physical count, condition inspection, inventory updated. Dispatch from our Chennai warehouse.', tag: 'Chennai' },
  { n: '08', title: 'Last-Mile Delivery + POD', desc: 'Dispatched to your customer or warehouse. Proof of Delivery collected and shared on completion.', tag: 'POD Included' },
]

const PROCESS_MAP = [
  { icon: <FiPackage />, label: 'Supplier', sub: 'China' },
  { icon: <FiSearch />, label: 'QC Warehouse', sub: 'Guangzhou' },
  { icon: <FiLayers />, label: 'Consolidation', sub: 'Foshan' },
  { icon: <FiFileText />, label: 'Export Customs', sub: 'Clearance' },
  { icon: <FaShip />, label: 'Sea / Air Transit', sub: '18–35 days' },
  { icon: <FiFileText />, label: 'India Customs', sub: '9–15 days' },
  { icon: <FiTruck />, label: 'Last Mile', sub: 'Delivery' },
]

export const CTIDDP_CONTENT1 = {
  badge: "Delivered Duty Paid",
  title: "Complete Door-to-Door Import Solution",
  subtitle: "Cross Border Trade International",

  description:
    "Cross Border Trade International Delivered Duty Paid (CTIDDP) simplifies global sourcing by offering a complete Door-to-Door Service that transforms complex international shipping into a smooth, predictable experience. From the moment your supplier in China confirms production, our process begins with vendor coordination, pricing validation, and a detailed breakdown of your Landed Cost, so you know exactly what you'll pay before your shipment even leaves the factory.",

  features: [
    {
      title: "Hassle-Free Logistics",
      description:
        "Unlike traditional freight models that leave you dealing with multiple agents, hidden charges, and confusing customs procedures, our approach is built around simplicity.",
      icon: "package-check",
    },
    {
      title: "Complete Transparency",
      description:
        "Every shipment is carefully documented, verified, and prepared for international transit, ensuring there are no surprises during export.",
      icon: "search-check",
    },
    {
      title: "Fully Managed Import Solution",
      description:
        "By integrating logistics, compliance, and cost control into one streamlined workflow, we eliminate the need for you to coordinate with multiple vendors.",
      icon: "shield-check",
    },
  ],

  closing:
    "This is not just shipping - it's a fully managed import solution where your time is protected, your risks are minimized, and your business can scale without logistical barriers.",

  imageSrc: "/stock-logistics.jpg",
  imageAlt: "Global logistics and supply chain management",
  overlayLabel: "Global Network",
};

export const CTIDDP_CONTENT2 = {
  badge: "Delivered Duty Paid",
  title: "End-to-End Import Clearance & Final Delivery",
  subtitle: "Cross Border Trade International",

  description:
    "Once your cargo is in transit, Cross Border Trade International Delivered Duty Paid (CTIDDP) continues managing every stage until final delivery in India. Our team handles import customs clearance, duty payments, GST processing, and regulatory documentation to ensure complete compliance with Indian import laws. Through our structured Door-to-Door Service model, importers avoid delays, unexpected costs, and operational complexity while maintaining full visibility throughout the shipping journey.",

  features: [
    {
      title: "Customs & Compliance Management",
      description:
        "We manage import customs clearance, duty payments, GST processing, and all required documentation to ensure your shipment complies with Indian import regulations without delays.",
      icon: "clipboard-check",
    },
    {
      title: "Predictable Landed Costs",
      description:
        "All logistics expenses are pre-calculated and managed upfront, helping you eliminate hidden charges, reduce uncertainty, and protect your profit margins.",
      icon: "globe",
    },
    {
      title: "Warehouse & Last-Mile Delivery",
      description:
        "After customs clearance, shipments move through inspection, sorting, and coordinated last-mile delivery before reaching your warehouse or doorstep anywhere in India.",
      icon: "truck",
    },
  ],

  closing:
    "CTIDDP is designed to remove friction from global trade by offering a single point of responsibility from factory pickup to final delivery. Whether you import for manufacturing, retail, or eCommerce, our streamlined logistics system helps you scale confidently with speed, reliability, and complete peace of mind.",

  imageSrc: "/stock-logistics.jpg",
  imageAlt: "Global logistics and supply chain management",
  overlayLabel: "Seamless Delivery",
};

function StepItem({ s }) {
  return (
    <div className="reveal flex gap-4 items-start py-5 px-5 border-b border-[rgba(37,99,235,0.08)] last:border-0 hover:bg-[rgba(37,99,235,0.02)] transition-colors">
      <div className="font-heading text-[32px] font-light text-[rgba(37,99,235,0.35)] leading-none shrink-0">
        {s.n}
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-white mb-1">{s.title}</div>
        <div className="text-xs text-muted leading-relaxed">{s.desc}</div>
        <span className="inline-block mt-2.5 text-[9px] font-semibold tracking-[1px] uppercase text-blue bg-[rgba(37,99,235,0.08)] py-1 px-2.5 rounded-sm">
          {s.tag}
        </span>
      </div>
    </div>
  )
}

export default function HowItWorksPage() {
  const whatsappNumber = "918790013772" // Removed space from phone number
  const whatsappMessage = "Hello, I’m reaching out from your website. Could you share details about your services and how you can help?"

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
                  '@type': 'HowTo',
                  '@id': 'https://www.ctiddp.com/how-it-works/#howto',
                  name: 'How China to India DDP Shipping Works',
                  description:
                    'Complete guide to the China to India DDP freight process.',
                  step: [
                    {
                      '@type': 'HowToStep',
                      position: 1,
                      name: 'Vendor Coordination',
                      text: 'Mandarin negotiation with China suppliers.',
                    },
                    {
                      '@type': 'HowToStep',
                      position: 2,
                      name: 'QC Inspection',
                      text: 'Pre-shipment quality inspection at Foshan.',
                    },
                    {
                      '@type': 'HowToStep',
                      position: 3,
                      name: 'Consolidation',
                      text: 'Multi-vendor LCL groupage at Guangzhou.',
                    },
                    {
                      '@type': 'HowToStep',
                      position: 4,
                      name: 'China Export Customs',
                      text: 'Export declaration within 48 hours.',
                    },
                    {
                      '@type': 'HowToStep',
                      position: 5,
                      name: 'Transit',
                      text: 'Full DDP transit - freight, insurance covered.',
                    },
                    {
                      '@type': 'HowToStep',
                      position: 6,
                      name: 'India Import',
                      text: 'BE filing, BCD+IGST+SWS payment, OOC.',
                    },
                    {
                      '@type': 'HowToStep',
                      position: 7,
                      name: 'Delivery',
                      text: 'Delivery with Proof of Delivery.',
                    },
                  ],
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.ctiddp.com/how-it-works/#webpage',
                  url: 'https://www.ctiddp.com/how-it-works/',
                  name: 'How DDP Shipping Works | Global Import Process',
                  isPartOf: {
                    '@id': 'https://www.ctiddp.com/#website',
                  },
                  mainEntity: {
                    '@id': 'https://www.ctiddp.com/how-it-works/#howto',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.ctiddp.com/how-it-works/#breadcrumb',
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
                      name: 'How It Works',
                      item: 'https://www.ctiddp.com/how-it-works/',
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
          <span className="text-[11px] text-blue-light whitespace-nowrap">How It Works</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[45vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              The DDP Journey
            </div>
            <h1 className="font-heading text-[clamp(36px,5vw,65px)] font-light leading-[1.1] mb-4">
              One Contract.<br />
              <em className="italic text-blue-light">
                Zero Worry.
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[520px] mx-auto">
              Every step of the China→India DDP journey documented, managed, and delivered.
            </p>
          </div>
        </section>

        {/* Process Map */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px]">
                End-to-End Process Map
              </span>
            </div>

            {/* Horizontal Scroll on Mobile, Centered on Desktop */}
            <div className="overflow-x-auto pb-4">
              <div className="flex items-center justify-center min-w-[700px] md:min-w-0 gap-0 py-4">
                {PROCESS_MAP.map((step, i) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex flex-col items-center text-center min-w-[90px] sm:min-w-[110px] px-1 sm:px-2">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[rgba(37,99,235,0.35)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center text-blue-light text-[22px] transition-all duration-300 hover:scale-105 hover:border-[rgba(37,99,235,0.6)]">
                        {step.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-muted font-medium">{step.label}</span>
                      <span className="text-[8px] sm:text-[9px] text-muted/60 mt-0.5">{step.sub}</span>
                    </div>
                    {i < PROCESS_MAP.length - 1 && (
                      <div className="flex items-center justify-center px-1 sm:px-2 mb-4 sm:mb-5">
                        <div className="w-6 sm:w-8 h-px bg-[rgba(37,99,235,0.3)]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Total Timeline Badge */}
            <div className="text-center mt-6">
              <span className="inline-flex items-center gap-2.5 bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.15)] py-2.5 px-5 sm:py-3 sm:px-[22px] rounded-[3px] text-[12px] sm:text-[13px] text-muted">
                <HiOutlineCalendarDays className="text-blue-light mt-[2px] shrink-0" size={22} />
                Total: <strong className="text-blue-light text-sm sm:text-base">38–50 days</strong> factory pickup to India warehouse
              </span>
            </div>
          </div>
        </section>

        <TwoColumnSection
          {...CTIDDP_CONTENT1}
          initialLayout="content-right"
          showToggle={false}
          imageSrc="/images/howitworks/landed-cost-logistics-india-delivery-ctiddp.jpeg"
          imageAlt="Global cargo shipping"
        />

        {/* Phases Section */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[80px] bg-black">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Phase 1 - China */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Phase 1 - China
              </span>
              <h2 className="font-heading text-[32px] sm:text-[38px] font-light text-white leading-[1.2] mb-6">
                From Factory<br />
                <em className="italic text-blue-light">To Port</em>
              </h2>
              <div className="bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.1)] rounded-[4px] overflow-hidden">
                {PHASE1.map(s => <StepItem key={s.n} s={s} />)}
              </div>
            </div>

            {/* Phase 2 - India */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Phase 2 - India
              </span>
              <h2 className="font-heading text-[32px] sm:text-[38px] font-light text-white leading-[1.2] mb-6">
                From Port<br />
                <em className="italic text-blue-light">To Door</em>
              </h2>
              <div className="bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.1)] rounded-[4px] overflow-hidden">
                {PHASE2.map(s => <StepItem key={s.n} s={s} />)}
              </div>
            </div>
          </div>
        </section>

        <TwoColumnSection
          {...CTIDDP_CONTENT2}
          initialLayout="content-left"
          showToggle={false}
          imageSrc="/images/howitworks/door-to-door-service-china-india-ctiddp.jpeg"
          imageAlt="Global Delivery"
        />

        {/* Transit Timelines */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Transit Timelines
              </span>
              <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                How Long Does<br />
                <em className="italic text-blue-light">It Take?</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sea Freight Card */}
              <div className="reveal bg-[var(--overlay-input)] border border-[var(--overlay-card-border)] rounded-[4px] p-6 sm:p-[34px] hover:border-[rgba(37,99,235,0.2)] transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl"><FaShip /></span>
                  <span className="font-heading text-2xl font-semibold text-white">Sea Freight</span>
                </div>
                <div className="space-y-0">
                  {[
                    ['Supplier → China Port', '2–4 days'],
                    ['China Export Customs', '1–2 days'],
                    ['Ocean Transit', '18–28 days'],
                    ['India Import Clearance', '9–15 days'],
                    ['Last Mile', '1–3 days'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center py-2.5 border-b border-[var(--overlay-card-border)] last:border-0">
                      <span className="text-xs text-muted">{label}</span>
                      <span className="text-[13px] text-white font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[rgba(37,99,235,0.15)]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted">Total Door-to-Door</span>
                    <div className="text-right">
                      <span className="font-heading text-[32px] font-semibold text-blue-light">38–50</span>
                      <span className="text-xs text-muted ml-1">days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Air Freight Card */}
              <div className="reveal bg-[var(--overlay-input)] border border-[var(--overlay-card-border)] rounded-[4px] p-6 sm:p-[34px] hover:border-[rgba(37,99,235,0.2)] transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl"><FaPlane /></span>
                  <span className="font-heading text-2xl font-semibold text-white">Air Freight</span>
                </div>
                <div className="space-y-0">
                  {[
                    ['Supplier → Airport', '1–3 days'],
                    ['China Export Customs', 'Same day'],
                    ['Air Transit', '2–6 days'],
                    ['India Import Clearance', '1–3 days'],
                    ['Last Mile', '4–7 days'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center py-2.5 border-b border-[var(--overlay-card-border)] last:border-0">
                      <span className="text-xs text-muted">{label}</span>
                      <span className="text-[13px] text-white font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[rgba(37,99,235,0.15)]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted">Total Door-to-Door</span>
                    <div className="text-right">
                      <span className="font-heading text-[32px] font-semibold text-blue-light">7–14</span>
                      <span className="text-xs text-muted ml-1">days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="relative text-center px-4 sm:px-[60px] py-12 sm:py-16 overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">
          <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] text-white leading-[1.2] mb-3">
            Understand It.<br />
            <em className="italic text-blue-light">Then Let Us Handle It.</em>
          </h2>
          <p className="text-sm text-muted max-w-[420px] mx-auto mb-7">
            Talk to our team about your specific cargo and route.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
            >
              Get DDP Quote →
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
            >
              <FaWhatsapp size={22} />Speak to a Specialist
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