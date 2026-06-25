// pages/services/global-ddp-shipping.js
import { Fragment } from 'react';
import {
  FaShip,
  FaPlane,
  FaGlobe,
  FaLandmark,
  FaCheckCircle,
  FaBuilding,
  FaFileAlt,
  FaClock,
  FaCoins,
  FaBoxOpen,
  FaStar,
  FaChevronRight,
  FaTruck,
  FaWarehouse,
  FaClipboardList,
} from 'react-icons/fa';
import { GiFactory } from "react-icons/gi";
import { BsArrowRight, BsShieldCheck } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';


export const metadata = {
  title: "Global DDP Shipping from China to India | CTIDDP",
  description:
    "Move goods from China to India under a single fixed DDP contract. CTIDDP manages pickup, freight, customs, duties, and final delivery.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/global-ddp-shipping",
  },
}

/* ─────────────────────────────────────────────
   SHARED: SectionHeader  (identical to design ref)
───────────────────────────────────────────── */
const SectionHeader = ({ eyebrow, title, highlight, description }) => (
  <div className="flex flex-col items-center text-center mb-12 md:mb-16">
    <div className="flex items-center gap-2 mb-4">
      <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
      <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
        {eyebrow}
      </span>
      <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
      {title} <span style={{ color: '#FE5101' }}>{highlight}</span>
    </h2>
    <div className="flex h-[3.5px] rounded-full overflow-hidden mb-5" style={{ width: '72px' }}>
      <div className="flex-1" style={{ background: '#0B2A6B' }} />
      <div className="flex-1" style={{ background: '#FE5101' }} />
    </div>
    {description && (
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">{description}</p>
    )}
  </div>
);

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
const heroFeatures = [
  { icon: <GiFactory className="text-[#0181EA]" size={20} />, title: 'Origin Management', subtitle: 'Factory pickup in China' },
  { icon: <FaShip className="text-[#0181EA]" size={20} />, title: 'International Freight', subtitle: 'Air & Sea freight options' },
  { icon: <FaLandmark className="text-[#0181EA]" size={20} />, title: 'Customs Clearance', subtitle: 'Duty & GST managed' },
  { icon: <FaTruck className="text-[#0181EA]" size={20} />, title: 'Last-Mile Delivery', subtitle: 'PAN India doorstep' },
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">
    <div className="absolute inset-0">
      <picture>
        <source media="(min-width:1024px)" srcSet="/images/services/aerial-view-commercial-dock.jpeg" />
        <img
          src="/images/services/aerial-view-commercial-dock.jpeg"
          alt="Global DDP Shipping from China to India"
          className="h-full w-full object-cover object-center"
        />
      </picture>
    </div>

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/80 to-[#041c4a]/20 lg:via-[#041c4a]/85" />

    {/* Content */}
    <div className="relative z-10 h-full">
      <div className="flex h-full items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-[#0181EA]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              END-TO-END DDP SOLUTION
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            Global DDP Shipping
            <br />
            <span className="text-[#36A0F7]">China to India</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Move your goods from factory floor in China to your warehouse in India under a single, fixed DDP contract with one accountable partner.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://www.ctiddp.com/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#FE5101] rounded-md shadow-lg shadow-[#FE5101]/25 hover:shadow-[#FE5101]/50 transition-shadow duration-300"
            >
              Get DDP Quote
            </a>
          </div>

          {/* Desktop features */}
          <div className="hidden lg:grid mt-10 grid-cols-4 gap-x-8 gap-y-5">
            {heroFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="mt-1">{f.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{f.title}</div>
                  <div className="text-xs text-white/70">{f.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WHAT IS DDP  (white bg)
───────────────────────────────────────────── */
const WhatIsDDP = () => {
  const cards = [
    {
      icon: <GiFactory className="text-[#003DA5]" size={32} />,
      title: 'Origin Management',
      description:
        'Factory pickup in China, export documentation, and cargo consolidation with multi-vendor support.',
    },
    {
      icon: <FaShip className="text-[#003DA5]" size={32} />,
      title: 'International Freight',
      description:
        'Air or Sea freight with route planning and carrier booking for cost-optimised transit.',
    },
    {
      icon: <FaLandmark className="text-[#003DA5]" size={32} />,
      title: 'Destination Clearance',
      description:
        'Import customs clearance, duty & GST management, and last-mile PAN India delivery.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="THE DDP ADVANTAGE"
          title="What is Global DDP"
          highlight="Shipping?"
          description="Delivered Duty Paid (DDP) is a complete logistics model where your logistics partner handles the entire shipment lifecycle end-to-end."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0B2A6B' }}>
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Footnote callout */}
        <div className="mt-10 p-5 bg-[#0B2A6B]/5 border-l-4 border-[#FE5101] rounded-r max-w-3xl mx-auto">
          <p className="text-gray-800 font-medium">
            📦 With CTIDDP, DDP is structured for India-bound imports with operational control in China and execution in India.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SCOPE & DELIVERABLES  (slate-50 bg)
───────────────────────────────────────────── */
const scopeItems = [
  'Supplier coordination & cargo readiness',
  'Cross-border supplier payments',
  'Multi-vendor cargo consolidation in China',
  'Export clearance in China',
  'Air Freight / Sea Freight (FCL / LCL)',
  'Import customs clearance in India',
  'Duty & GST management',
  'Last-mile PAN India delivery',
];

const tableRows = [
  { component: 'Supplier Coordination', handles: 'Pickup scheduling, documentation alignment', outcome: 'Faster dispatch readiness' },
  { component: 'Freight Management', handles: 'Route planning, carrier booking (Air/Sea)', outcome: 'Cost-optimised transit' },
  { component: 'Customs Clearance', handles: 'Documentation, compliance, duty calculation', outcome: 'Smooth port clearance' },
  { component: 'Duty & Tax Handling', handles: 'BCD, IGST, SWS pre-managed', outcome: 'Predictable landed cost' },
  { component: 'Cargo Consolidation', handles: 'Multi-vendor aggregation in China', outcome: 'Reduced shipping cost' },
  { component: 'Last-Mile Delivery', handles: 'Port to warehouse (PAN India)', outcome: 'Complete door delivery' },
];

const ScopeSection = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="WHAT'S INCLUDED"
        title="Scope &"
        highlight="Deliverables"
        description="Everything under one contract - from supplier coordination to door delivery."
      />

      {/* Checklist */}
      <h3 className="text-xl font-bold mb-6" style={{ color: '#0B2A6B' }}>
        End-to-End Coverage
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {scopeItems.map((item) => (
          <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
            <FaCheckCircle className="text-[#003DA5] mt-0.5 flex-shrink-0" size={18} />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <h3 className="text-xl font-bold mb-6" style={{ color: '#0B2A6B' }}>
        What You Get Under One Contract
      </h3>
      <div className="overflow-x-auto shadow-sm rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-100">
            <tr>
              {['Component', 'What CTIDDP Handles', 'Outcome for You'].map((h) => (
                <th key={h} className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B2A6B' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {tableRows.map((row) => (
              <tr key={row.component} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{row.component}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{row.handles}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-[#003DA5] font-medium">
                    <FaCheckCircle size={14} /> {row.outcome}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SHIPPING MODES + PROCESS FLOW  (white bg)
───────────────────────────────────────────── */
const shippingModes = [
  {
    icon: <FaShip className="text-[#003DA5] flex-shrink-0" size={28} />,
    title: 'Sea Freight (FCL / LCL)',
    desc: 'Ideal for bulk shipments and heavy cargo. Cost-efficient for large volumes with consolidation options available.',
  },
  {
    icon: <FaPlane className="text-[#003DA5] flex-shrink-0" size={28} />,
    title: 'Air Freight',
    desc: 'Faster transit for urgent shipments. Ideal for high-value or time-sensitive cargo.',
  },
  {
    icon: <FaGlobe className="text-[#003DA5] flex-shrink-0" size={28} />,
    title: 'Hybrid Solutions',
    desc: 'Mix of air + sea for cost and speed balance - best of both worlds.',
  },
];

const processSteps = [
  'Supplier finalisation & shipment readiness',
  'Pickup from factory (China)',
  'Warehouse consolidation (if required)',
  'Export clearance & freight dispatch',
  'Transit (Air / Sea)',
  'Import customs clearance (India)',
  'Duties & tax processing',
  'Last-mile delivery to your warehouse',
];

const ModesAndFlow = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

      {/* Shipping Modes */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            CHOOSE YOUR MODE
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Shipping Modes We Offer
        </h2>
        <div className="space-y-5">
          {shippingModes.map((mode) => (
            <div
              key={mode.title}
              className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:shadow-sm transition-shadow"
            >
              <div className="mt-1">{mode.icon}</div>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#0B2A6B' }}>
                  {mode.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{mode.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            STEP BY STEP
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Process Flow - China to Your Warehouse
        </h2>
        <div className="space-y-3">
          {processSteps.map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-4 p-3 border border-slate-100 rounded-lg bg-slate-50/30"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full text-white font-bold flex items-center justify-center text-sm"
                style={{ background: '#FE5101' }}
              >
                {i + 1}
              </div>
              <p className="text-gray-800 font-medium text-sm leading-tight flex-1">{step}</p>
              {i < processSteps.length - 1 && (
                <FaChevronRight className="text-gray-300 flex-shrink-0" size={12} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   INDUSTRIES WE SERVE  (slate-50 bg)
───────────────────────────────────────────── */
const industries = [
  { icon: <FaBoxOpen size={26} />, label: 'Industrial Machinery & Equipment' },
  { icon: <FaBuilding size={26} />, label: 'Electronics & Components' },
  { icon: <FaWarehouse size={26} />, label: 'Consumer Goods & Retail' },
  { icon: <FaTruck size={26} />, label: 'Automotive Parts' },
  { icon: <FaBuilding size={26} />, label: 'Furniture & Interiors' },
  { icon: <FaBoxOpen size={26} />, label: 'Packaging & Raw Materials' },
];

const IndustriesSection = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="EXPERTISE ACROSS SECTORS"
        title="Industries We"
        highlight="Serve"
        description="Deep experience across product categories imported from China to India."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map((ind) => (
          <div
            key={ind.label}
            className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-3"
          >
            <div style={{ color: '#003DA5' }}>{ind.icon}</div>
            <span className="text-sm text-gray-700 font-medium leading-snug">{ind.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WHY CTIDDP + COST STRUCTURE  (white bg)
───────────────────────────────────────────── */
const whyPoints = [
  'Single point of contact for entire shipment',
  'Integrated China + India logistics execution',
  'Transparent cost structure (DDP model)',
  'Multi-vendor shipment capability',
  'Real-time coordination across supply chain',
  'Dedicated support for business importers',
];

const costItems = [
  'Freight Charges (Air / Sea)',
  'Duty & GST (as per product category)',
  'Handling & Clearance Charges',
  'Last-Mile Delivery',
];

const WhyCTIDDP = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

      {/* Why CTIDDP */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            TRUSTED PARTNER
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Why Businesses Choose CTIDDP
        </h2>
        <div className="space-y-4">
          {whyPoints.map((item) => (
            <div key={item} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/40">
              <HiSparkles className="flex-shrink-0 mt-0.5" size={18} style={{ color: '#FE5101' }} />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Structure */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            NO SURPRISES
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Cost Structure
        </h2>
        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <p className="text-gray-600 mb-6">Key pricing components included in your single DDP quote:</p>
          <div className="space-y-4 mb-8">
            {costItems.map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-gray-700 font-medium">{item}</span>
                <FaCoins className="flex-shrink-0" size={16} style={{ color: '#003DA5' }} />
              </div>
            ))}
          </div>
          <div className="p-4 bg-[#0B2A6B]/5 border-l-4 border-[#FE5101] rounded-r">
            <p className="text-gray-800 font-medium text-sm">
              📦 CTIDDP provides a single consolidated DDP quote - eliminating fragmented cost planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   DOCUMENTATION + USE CASES  (slate-50 bg)
───────────────────────────────────────────── */
const docs = [
  'Commercial Invoice',
  'Packing List',
  'Bill of Lading / Airway Bill',
  'Import documentation for Indian customs',
  'Duty classification & tax alignment',
];

const useCases = [
  'First-time importers needing guidance',
  'Businesses scaling imports from China',
  'Multi-supplier sourcing (Canton Fair, etc.)',
  'Bulk procurement from China',
  'Businesses needing predictable cost & delivery',
];

const DocsAndUseCases = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

      {/* Documentation */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            FULL COMPLIANCE
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Documentation Support
        </h2>
        <div className="space-y-3">
          {docs.map((doc) => (
            <div key={doc} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-slate-100 shadow-sm">
              <FaClipboardList className="flex-shrink-0" size={18} style={{ color: '#003DA5' }} />
              <span className="text-gray-700">{doc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            PERFECT FIT
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          When Should You Choose DDP Shipping?
        </h2>
        <div className="space-y-3">
          {useCases.map((uc) => (
            <div key={uc} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-slate-100 shadow-sm">
              <FaClock className="flex-shrink-0" size={18} style={{ color: '#003DA5' }} />
              <span className="text-gray-700">{uc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   FINAL CTA  (navy bg)
───────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="py-16 md:py-20 bg-[#0B2A6B] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Get Your Global DDP Quote Today
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Plan your next shipment with full visibility and control. One contract. One price. One accountable partner.
      </p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function GlobalDDPShippingPage() {
  return (
    <main className="font-sans antialiased">
      <HeroSection />
      <WhatIsDDP />
      <ScopeSection />
      <ModesAndFlow />
      <IndustriesSection />
      <WhyCTIDDP />
      <DocsAndUseCases />
      <FinalCTA />
    </main>
  );
}