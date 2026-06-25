import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa6'
import Image from 'next/image';
import {
  HiOutlineMagnifyingGlass,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBuildingStorefront,
  HiOutlineMapPin,
  HiOutlineTruck,
} from 'react-icons/hi2'
import {
  FaMicrochip, FaGift, FaTshirt,
  FaUserAstronaut,
  FaShoppingCart,
  FaLanguage,
  FaStore,
  FaBox,
  FaGlobe,
  FaUsers,
  FaCommentDots,
  FaSearch,
  FaShip,
  FaTruck,
  FaCheck
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import Link from 'next/link'
import Button from '@/components/ui/Button'
import CantonFairClient from './CantonFairClient'

export const metadata = {
  title:
    'Trade Fair Support Services | Global Sourcing & Exhibition Assistance',

  description:
    'Attend international trade fairs with confidence. CTIDDP provides sourcing assistance, supplier verification, negotiation support, inspection, consolidation, DDP shipping, and post-fair procurement services.',

  keywords: [
    'trade fair support services',
    'international trade fair assistance',
    'China trade fair sourcing',
    'business exhibition support',
    'supplier sourcing services',
    'trade show procurement support',
    'Canton Fair support',
    'global sourcing partner',
    'trade fair logistics',
    'supplier verification services',
    'China sourcing company',
    'trade exhibition consultant',
    'import sourcing assistance',
    'B2B trade fairs',
    'buyer delegation services',
    'factory visit support',
    'trade fair interpreter services',
    'trade fair procurement',
    'business sourcing platform',
    'international supplier network'
  ],

  openGraph: {
    title:
      'Trade Fair Support Services | CTIDDP',
    description:
      'From supplier discovery to DDP delivery, CTIDDP helps businesses maximize opportunities at international trade fairs and exhibitions.',
    url: 'https://www.ctiddp.com/trade-fair/',
    siteName: 'CTIDDP',
    type: 'website',    
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Trade Fair Support Services | CTIDDP',
    description:
      'End-to-end sourcing, supplier verification, negotiation, and logistics support for global trade fairs.',  
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/trade-fair'
  }
};

const PHASES = [
  {
    phase: "Phase 1",
    title: "Electronics & Industrial",
    dates: "Oct 15–19",
    categories:
      "Electronics, home appliances, machinery, industrial equipment",
    icon: FaMicrochip,
  },
  {
    phase: "Phase 2",
    title: "Consumer Goods & Gifts",
    dates: "Oct 23–27",
    categories:
      "Housewares, gifts, decoration products, consumer goods",
    icon: FaGift,
  },
  {
    phase: "Phase 3",
    title: "Fashion & Lifestyle",
    dates: "Oct 31–Nov 4",
    categories:
      "Textiles, apparel, footwear, office supplies, health products",
    icon: FaTshirt,
  },
];


const phases = [
  {
    id: 1,
    icon: FaMicrochip,
    dates: "Oct 15 – 19",
    category: "Electronics & Machinery",
    description:
      "Electronics, appliances, industrial equipment, hardware & tools, building materials, new energy vehicles.",
    href: "#phase-1",
  },
  {
    id: 2,
    icon: FaGift,
    dates: "Oct 23 – 27",
    category: "Consumer Goods & Gifts",
    description:
      "Daily consumer goods, gifts, festival decorations, furniture, kitchen, home textiles, bags & cases.",
    href: "#phase-2",
  },
  {
    id: 3,
    icon: FaTshirt,
    dates: "Oct 31 – Nov 4",
    category: "Textiles, Health & Food",
    description:
      "Clothing, toys & baby products, health & healthcare, food & beverages, office & leisure, international pavilions.",
    href: "#phase-3",
  },
];

const FEATURES = [
  { icon: <HiOutlineChatBubbleLeftRight size={22} />, title: 'Mandarin Negotiation', description: 'Direct negotiation in Mandarin for better prices and terms.' },
  { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'On-the-Spot QC', description: 'Quality verification of samples before you commit to any supplier.' },
  { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Multi-Booth Consolidation', description: 'Collect from multiple exhibitors, consolidate at our Guangzhou warehouse.' },
  { icon: <HiOutlineTruck size={22} />, title: 'Direct DDP to India', description: 'All goods shipped DDP to your India address - one price, no surprises.' },
]

const steps = [
  {
    num: "01",
    icon: FaUsers,
    title: "Fair Attendance",
    description:
      "Our team attends all 3 phases with you or as your sole representative.",
  },
  {
    num: "02",
    icon: FaCommentDots,
    title: "Translation & Negotiation",
    description:
      "We negotiate the best prices & terms with suppliers.",
  },
  {
    num: "03",
    icon: FaSearch,
    title: "Sample & QC Inspection",
    description:
      "On-spot quality check and sample consolidation.",
  },
  {
    num: "04",
    icon: FaBox,
    title: "Consolidation & Storage",
    description:
      "Multi-supplier consolidation at our secure warehouse.",
  },
  {
    num: "05",
    icon: FaShip,
    title: "DDP Shipping to India",
    description:
      "Export, freight, import clearance, duties included.",
  },
  {
    num: "06",
    icon: FaTruck,
    title: "Final Delivery",
    description:
      "Delivered safely to your warehouse or address.",
  },
];

const audiences = [
  {
    icon: FaUserAstronaut,
    title: "First-Time Visitors",
    description:
      "Navigate your first Trade Fair with confidence. We guide you through every step.",
  },
  {
    icon: FaShoppingCart,
    title: "Scaling E-commerce Brands",
    description:
      "Source new suppliers and expand your catalog without leaving India.",
  },
  {
    icon: FaLanguage,
    title: "Mandarin-Challenged Buyers",
    description:
      "Break language barriers. We negotiate, clarify specs, and handle contracts.",
  },
  {
    icon: FaStore,
    title: "Multi-Category Sourcers",
    description:
      "Manage multiple booths across different phases. We consolidate everything.",
  },
  {
    icon: FaBox,
    title: "DDP-First Importers",
    description:
      "One price from booth to your India door. No hidden freight, no customs surprises.",
  },
  {
    icon: FaGlobe,
    title: "Remote Sourcers",
    description:
      "Can't travel to Guangzhou? We attend as your sole representative.",
  },
];

const withoutItems = [
  "Language barriers with 90% of suppliers",
  "No quality check before payment",
  "Managing 5–10 suppliers across 3 phases manually",
  "Shipping coordination nightmare",
  "Hidden costs at Indian customs",
];

const withItems = [
  "Mandarin negotiation handled end-to-end",
  "On-spot QC before you commit to any order",
  "Multi-booth consolidation at our Guangzhou warehouse",
  "One DDP shipment to your India door",
  "All-inclusive pricing, zero customs surprises",
];

const bullets = [
  "Supplier verification & background checks",
  "Product sourcing based on your requirements",
  "Factory audits & quality inspections",
  "Sample arrangement & shipment to India",
  "DDP Imports all year – not just during the fair",
];

export default function CantonFairPage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@graph": [

              {
                "@type": "Service",

                "@id":
                  "https://www.ctiddp.com/trade-fair/#service",

                "name":
                  "Trade Fair Support Services",

                "provider": {
                  "@type": "Organization",
                  "name": "CTIDDP",
                  "url": "https://www.ctiddp.com"
                },

                "description":
                  "Comprehensive trade fair support including supplier sourcing, negotiation, factory visits, quality inspections, consolidation, procurement management, and DDP shipping.",

                "serviceType": [
                  "Trade Fair Support",
                  "Supplier Sourcing",
                  "Factory Visits",
                  "Supplier Verification",
                  "Procurement Support",
                  "Trade Show Assistance",
                  "DDP Shipping"
                ],

                "areaServed": {
                  "@type": "Place",
                  "name": "Worldwide"
                }
              },

              {
                "@type": "HowTo",

                "@id":
                  "https://www.ctiddp.com/trade-fair/#howto",

                "name":
                  "How CTIDDP Trade Fair Support Works",

                "description":
                  "Step-by-step support for buyers attending international trade fairs.",

                "step": [

                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Pre-Fair Planning",
                    "text": "Identify target suppliers, exhibitors, and sourcing opportunities."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Trade Fair Assistance",
                    "text": "Receive on-ground support, interpretation, and supplier coordination."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Supplier Verification",
                    "text": "Verify supplier capabilities and business credentials."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Sample Inspection",
                    "text": "Inspect product samples and evaluate quality standards."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Factory Visits",
                    "text": "Visit shortlisted manufacturers and assess production facilities."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Order Placement",
                    "text": "Negotiate pricing, payment terms, and procurement contracts."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "DDP Shipping",
                    "text": "Manage consolidation, customs clearance, and doorstep delivery."
                  }
                ]
              },

              {
                "@type": "FAQPage",

                "@id":
                  "https://www.ctiddp.com/trade-fair/#faq",

                "mainEntity": [

                  {
                    "@type": "Question",
                    "name":
                      "What trade fairs does CTIDDP support?",

                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "CTIDDP supports major international trade fairs including Canton Fair, industry exhibitions, sourcing expos, manufacturing events, and B2B trade shows."
                    }
                  },

                  {
                    "@type": "Question",
                    "name":
                      "Can CTIDDP arrange factory visits?",

                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Yes. CTIDDP organizes factory visits, supplier audits, and capability assessments before order placement."
                    }
                  },

                  {
                    "@type": "Question",
                    "name":
                      "Does CTIDDP help after the trade fair?",

                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Yes. We support supplier negotiations, inspections, procurement management, cargo consolidation, customs clearance, and DDP delivery."
                    }
                  }
                ]
              },

              {
                "@type": "WebPage",

                "@id":
                  "https://www.ctiddp.com/trade-fair/#webpage",

                "url":
                  "https://www.ctiddp.com/trade-fair/",

                "name":
                  "Trade Fair Support Services",

                "description":
                  "End-to-end sourcing and trade fair assistance for international buyers.",

                "mainEntity": {
                  "@id":
                    "https://www.ctiddp.com/trade-fair/#service"
                },

                "isPartOf": {
                  "@id":
                    "https://www.ctiddp.com/#website"
                }
              },

              {
                "@type": "BreadcrumbList",

                "@id":
                  "https://www.ctiddp.com/trade-fair/#breadcrumb",

                "itemListElement": [

                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.ctiddp.com/"
                  },

                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.ctiddp.com/services/"
                  },

                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Trade Fair Support",
                    "item": "https://www.ctiddp.com/trade-fair/"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <section className="relative h-[50vh] min-h-[500px] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/canton-fair/caaa.png"
            alt="Trade Fair DDP"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/45 to-[#041c4a]/0" />

        {/* Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_45%)]" />

        {/* Content */}
        <div className="relative z-10 h-full">

          <div className="flex h-full items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">

            <div className="max-w-4xl">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

                <div className="h-2 w-2 rounded-full bg-[#FE5101]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  140TH EDITION · AUTUMN 2026
                </span>

              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl">

                Trade Fair DDP.
                <br />

                <span className="text-[#36A0F7]">
                  Booth to Your Door.
                </span>

              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">

                We attend the 140th Trade Fair with you, handle everything in Mandarin,
                inspect goods, and ship DDP to India - under one service.

              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#canton-fair-support-form"
                  className="inline-flex items-center rounded-xl bg-[#FE5101] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ea4a00]"
                >
                  BOOK CANTON FAIR SUPPORT →
                </a>

                <button
                  className="h-11 md:h-12 px-5 md:px-6 rounded-xl bg-white border border-slate-200
                             hover:border-[#25D366]
                             font-semibold text-[13px] md:text-[14px] text-slate-800
                             flex items-center gap-2 transition-colors shadow-sm shrink-0"
                >
                  <FaWhatsapp className='text-green-500' size={26} />
                  WhatsApp Us
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <div className="flex flex-col items-left mb-10">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                  <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
                    Trade Fair Support
                  </span>
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-left mb-4">
                  <span style={{ color: '#0B2A6B' }}>We Go to the Fair.&nbsp;</span>
                  <span style={{ color: '#FE5101' }}>You Get the Goods.</span>
                </h2>

                {/* Underline accent - two-tone bar */}
                <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
                  <div className="flex-1" style={{ background: '#0B2A6B' }} />
                  <div className="flex-1" style={{ background: '#FE5101' }} />
                </div>
              </div>

              <p className="text-[15px] text-gray-500 leading-relaxed mb-7">
                The Canton Fair, held twice a year in Guangzhou. The 140th edition runs October–November 2026. With our team already on the ground, we attend on your behalf and handle everything.
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
            </div>

            {/* Right - 140th Schedule Card */}
            <div className="card p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[18px] font-600 text-[#0B2A6B]">
                  140th Canton Fair Schedule
                </h3>

                <span className="text-[10px] font-700 tracking-[1.5px] uppercase bg-orange/10 border border-orange/20 text-orange px-2.5 py-1 rounded-full">
                  Autumn 2026
                </span>
              </div>

              <div className="flex flex-col gap-0 mb-5">
                {PHASES.map((p, idx) => {
                  const Icon = p.icon;

                  return (
                    <div
                      key={p.phase}
                      className={`py-3 ${idx < PHASES.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                    >
                      <div className="flex justify-between items-start gap-3 mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                            <Icon size={14} className="text-primary" />
                          </div>

                          <span className="text-[13px] font-bold text-gray-900">
                            {p.phase} · {p.title}
                          </span>
                        </div>

                        <span className="text-[12px] font-600 text-primary shrink-0">
                          {p.dates}
                        </span>
                      </div>

                      <p className="text-[11px] text-gray-500 leading-relaxed pl-10">
                        {p.categories}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3 mb-5">
                <HiOutlineMapPin
                  size={14}
                  className="text-primary mt-0.5 shrink-0"
                />
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  China Import and Export Fair Complex, Pazhou Island, Haizhu District,
                  Guangzhou, Guangdong
                </p>
              </div>

              <div className="bg-primary-50 border border-primary-100 rounded-xl p-3 mb-5">
                <div className="text-[10px] text-primary font-700 tracking-[1px] uppercase mb-1">
                  ⚡ Limited Slots - Book Early
                </div>

                <div className="text-[12px] text-gray-600 leading-relaxed">
                  Phase 1 (Oct 15) fills fastest. Book at least 4 weeks before to confirm
                  your dedicated support team.
                </div>
              </div>

              <Button
                href="#canton-fair-support-form"
                variant="primary"
                arrow
                className="w-full justify-center"
              >
                RESERVE YOUR SUPPORT SLOT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PHASE GUIDE ══════════ */}
      <section className="bg-[#f0f4fb] px-6 py-[72px] sm:py-20 text-center font-[Outfit,Inter,sans-serif]">

        <div className="flex flex-col items-center mb-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
              3 Phases
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4">
            <span style={{ color: '#0B2A6B' }}>3 Phases.</span>
            <span style={{ color: '#FE5101' }}>Endless Oppurtunities</span>
          </h2>

          {/* Underline accent - two-tone bar */}
          <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
            <div className="flex-1" style={{ background: '#0B2A6B' }} />
            <div className="flex-1" style={{ background: '#FE5101' }} />
          </div>
        </div>

        {/* Subtext */}
        <p className="text-base text-slate-800 max-w-xl mx-auto leading-relaxed mb-12">
          Different product categories in each phase. We support you across all three phases.
        </p>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.id}
                className="bg-white border border-slate-200 rounded-2xl p-7 text-left flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)]"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-13 h-13 min-w-[52px] min-h-[52px] rounded-full bg-[#e8eef8] flex items-center justify-center">
                    <Icon className="text-[#003DA5] text-[22px]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-[#0B2A6B] tracking-[0.04em] uppercase">
                      PHASE {phase.id}
                    </span>
                    <span className="text-sm text-slate-500 font-normal">
                      {phase.dates}
                    </span>
                  </div>
                </div>

                {/* Category */}
                <h3 className="text-[1.05rem] font-bold text-[#FE5101] leading-snug mb-2.5">
                  {phase.category}
                </h3>

                {/* Description */}
                <p className="text-[0.9rem] text-slate-800 leading-relaxed mb-6 flex-1">
                  {phase.description}
                </p>

                {/* CTA */}
                <a
                  href={phase.href}
                  className="group inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[#003DA5] mt-auto no-underline hover:opacity-75 transition-opacity duration-200"
                >
                  Book Slot
                  <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════ WHO IT'S FOR ══════════ */}
      <section className="relative px-6 py-20 overflow-hidden">

        {/* Dot-grid decorative bg (bottom-left) */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #003DA5 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Dot-grid decorative bg (top-right) */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-64 h-64 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #003DA5 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="flex flex-col items-center mb-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
              Who It&apos;s For
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4">
            <span style={{ color: '#0B2A6B' }}>Who It&apos;s&nbsp;</span>
            <span style={{ color: '#FE5101' }}>For.</span>
          </h2>

          {/* Underline accent - two-tone bar */}
          <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
            <div className="flex-1" style={{ background: '#0B2A6B' }} />
            <div className="flex-1" style={{ background: '#FE5101' }} />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto relative z-10">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-7 flex gap-5 items-start transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)]"
              >
                {/* Icon */}
                <div className="min-w-[56px] h-14 rounded-full bg-[#e8eef8] flex items-center justify-center flex-shrink-0">
                  <Icon className="text-[#003DA5] text-2xl" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[0.95rem] font-bold text-[#0B2A6B] leading-snug">
                    {item.title}
                  </h3>
                  {/* Orange underline accent */}
                  <div className="w-8 h-0.5 bg-[#FE5101] rounded-full" />
                  <p className="text-[0.875rem] text-slate-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════ WITH VS WITHOUT ══════════ */}
      <section className="relative bg-[#f0f4fb] px-6 py-20 overflow-hidden">

        {/* Dot-grid decorative - bottom left */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #003DA5 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="flex flex-col items-center mb-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
              CTIDDP SUPPORT
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4">
            <span style={{ color: '#0B2A6B' }}>With & Without&nbsp;</span>
            <span style={{ color: '#FE5101' }}>CTIDDP Support</span>
          </h2>

          {/* Underline accent - two-tone bar */}
          <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
            <div className="flex-1" style={{ background: '#0B2A6B' }} />
            <div className="flex-1" style={{ background: '#FE5101' }} />
          </div>
        </div>


        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto relative z-10">

          {/* WITHOUT column */}
          <div className="rounded-2xl border border-red-200 bg-red-50/60 overflow-hidden">
            {/* Column Header */}
            <div className="flex items-center gap-3 px-7 py-5 border-b border-red-200">
              <FaTimesCircle className="text-red-500 text-2xl flex-shrink-0" />
              <h3 className="text-[1rem] font-bold text-[#0B2A6B]">
                Without CTIDDP
              </h3>
            </div>
            {/* Items */}
            <ul className="divide-y divide-red-100">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-center gap-4 px-7 py-5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-red-400 flex items-center justify-center">
                    <MdCancel className="text-red-500 text-base" />
                  </span>
                  <span className="text-[0.9rem] text-slate-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH column */}
          <div className="rounded-2xl border border-[#c5d5f0] bg-white overflow-hidden">
            {/* Column Header */}
            <div className="flex items-center gap-3 px-7 py-5 border-b border-[#e2eaf8]">
              <FaCheckCircle className="text-[#003DA5] text-2xl flex-shrink-0" />
              <h3 className="text-[1rem] font-bold text-[#0B2A6B]">
                With CTIDDP Support
              </h3>
            </div>
            {/* Items */}
            <ul className="divide-y divide-slate-100">
              {withItems.map((item) => (
                <li key={item} className="flex items-center gap-4 px-7 py-5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#003DA5] flex items-center justify-center">
                    <MdCheckCircle className="text-white text-base" />
                  </span>
                  <span className="text-[0.9rem] text-slate-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 relative z-10">
          <a
            className="group inline-flex items-center gap-3 bg-[#003DA5] hover:bg-[#0B2A6B] text-white text-[0.95rem] font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Import Smarter. Import Safer. Import with CTIDDP.
          </a>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="relative px-6 py-20 overflow-hidden">

        {/* Dot-grid - bottom left */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #003DA5 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Dot-grid - top right */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-72 h-72 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #003DA5 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="flex flex-col items-center mb-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="text-[#FE5101] font-semibold text-[10px] md:text-[12px] tracking-[0.18em] uppercase">
              Our Full Trade Fair Service Scope
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4">
            <span style={{ color: '#0B2A6B' }}>End-to-End Support in&nbsp;</span>
            <span style={{ color: '#FE5101' }}>Every Step</span>
          </h2>

          {/* Underline accent - two-tone bar */}
          <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
            <div className="flex-1" style={{ background: '#0B2A6B' }} />
            <div className="flex-1" style={{ background: '#FE5101' }} />
          </div>
        </div>

        {/* Timeline + Cards */}
        <div className="relative z-10 mt-14 max-w-6xl mx-auto">

          {/* Icon row */}
          <div className="hidden lg:flex items-center justify-between px-10 mb-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="flex items-center">
                  {/* Circle icon */}
                  <div className="w-[88px] h-[88px] rounded-full bg-[#dce8f8] flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#003DA5] text-[2rem]" />
                  </div>
                  {/* Dashed connector */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center mx-1">
                      <span className="text-[#003DA5] tracking-[4px] text-sm select-none opacity-60">
                        ········→
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white border border-slate-200 rounded-2xl px-4 py-5 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)]"
                >
                  {/* Mobile icon (hidden on lg since row above shows it) */}
                  <div className="lg:hidden w-14 h-14 rounded-full bg-[#dce8f8] flex items-center justify-center mb-3">
                    <Icon className="text-[#003DA5] text-xl" />
                  </div>

                  {/* Step badge */}
                  <div className="w-8 h-8 rounded-full bg-[#003DA5] flex items-center justify-center mb-3">
                    <span className="text-white text-[10px] font-bold">{step.num}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[0.82rem] font-bold text-[#0B2A6B] leading-snug mb-2">
                    {step.title}
                  </h3>

                  {/* Orange accent */}
                  <div className="w-6 h-0.5 bg-[#FE5101] rounded-full mb-3" />

                  {/* Description */}
                  <p className="text-[0.78rem] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ FORM ══════════ */}
      <CantonFairClient />

      <section className="bg-[#0B2A6B] rounded-2xl max-w-[1600px] mx-auto mx-6 my-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[340px]">

          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col justify-center px-10 py-12 gap-5">

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-blue-300 font-semibold tracking-[0.18em] uppercase">
                * BEYOND THE FAIR
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[1.75rem] sm:text-[2rem] font-extrabold text-white leading-tight tracking-tight">
              Year-Round Sourcing Support
            </h2>

            {/* Body */}
            <p className="text-[0.875rem] text-blue-200 leading-relaxed max-w-sm">
              Can't make it to the fair? Our teams in Guangzhou & Foshan source products,
              verify suppliers, and manage your imports all year round.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-2.5 mt-1">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <FaCheck className="text-blue-300 text-[13px] mt-0.5 flex-shrink-0" />
                  <span className="text-[0.875rem] text-blue-100 leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 border border-white text-white text-[0.8rem] font-bold tracking-[0.1em] uppercase px-6 py-3 rounded-lg hover:bg-white hover:text-[#0B2A6B] transition-all duration-200"
              >
                Learn More About Our Services
                <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Image collage ── */}
          <div className="relative hidden lg:block">

            {/* Large left image */}
            <div className="absolute left-0 top-0 bottom-0 w-[58%] overflow-hidden rounded-2xl">
              <Image
                src="/images/canton-fair/ctiddp-eventday-canton-fair-client-interaction.jpg"
                alt="Visitors and exhibitors at Trade Fair"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Top-right image */}
            <div className="absolute right-0 top-0 h-[48%] w-[40%] overflow-hidden rounded-2xl">
              <Image
                src="/images/canton-fair/ctiddp-event-day-canton-fair.jpg"
                alt="Guangzhou skyline"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom-right image */}
            <div className="absolute right-0 bottom-0 h-[48%] w-[40%] overflow-hidden rounded-2xl">
              <Image
                src="/images/canton-fair/ctiddp-event-day-canton-fair-client-interaction.jpg"
                alt="Business meeting at Trade Fair booth"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}