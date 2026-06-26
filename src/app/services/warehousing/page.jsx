import { Fragment } from 'react';
import {
  FaCheckCircle,
  FaBoxes,
  FaSearch,
  FaMapMarkerAlt,
  FaTruck,
  FaClipboardList,
  FaBox,
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaClock,
  FaLayerGroup,
  FaShieldAlt,
  FaCodeBranch,
  FaArrowTrendDown,
  FaWarehouse,
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';

export const metadata = {
  title: "Warehousing and Consolidation in China | CTIDDP",
  description:
    "Reduce shipping costs with warehousing and consolidation in China. CTIDDP receives, verifies, repacks, and ships cargo to India under DDP.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/warehousing",
  },
}

/* ─────────────────────────────────────────────
   SHARED: SectionHeader
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
  { icon: <FaTruck className="text-[#0181EA]" size={20} />, title: 'Inbound Handling', subtitle: 'Multi-supplier receiving' },
  { icon: <FaClipboardList className="text-[#0181EA]" size={20} />, title: 'Verification', subtitle: 'Quantity & condition check' },
  { icon: <FaBoxes className="text-[#0181EA]" size={20} />, title: 'Consolidation', subtitle: 'Combined into one load' },
  { icon: <FaSearch className="text-[#0181EA]" size={20} />, title: 'Pre-Shipment Prep', subtitle: 'Export-ready dispatch' },
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">
    <div className="absolute inset-0">
      <picture>
        <source media="(min-width:1024px)" srcSet="/images/services/ctiddp-service-warehousing-banner.jpeg" />
        <img
          src="/images/services/warehouse-workers-checking-inventory-goods-distribution-large-storehouse.jpeg"
          alt="Warehousing and Consolidation in China"
          className="h-full w-full object-cover object-center"
        />
      </picture>
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/80 to-[#041c4a]/20 lg:via-[#041c4a]/85" />

    <div className="relative z-10 h-full">
      <div className="flex h-full items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-[#0181EA]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              WAREHOUSE CONSOLIDATION
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            Warehousing &
            <br />
            <span className="text-[#36A0F7]">Consolidation in China</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Reduce shipping cost and simplify multi-supplier sourcing. CTIDDP receives goods, verifies, consolidates, and ships as a single optimised DDP shipment to India.
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
   WHAT IS WAREHOUSING & CONSOLIDATION  (white bg)
───────────────────────────────────────────── */
const consolidationSteps = [
  'Receives goods at our China warehouse',
  'Verifies quantity and condition',
  'Combines shipments into one load',
  'Optimises packaging for freight',
  'Dispatches as a single shipment to India',
];

const WhatIsSection = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

      {/* Left */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            THE SMART APPROACH
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#0B2A6B' }}>
          What is Warehousing & Consolidation?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Warehousing & consolidation is the process of collecting shipments from multiple suppliers into a single controlled location, preparing them for efficient export and delivery.
        </p>
        <p className="text-gray-600 font-medium mb-4">Instead of shipping each order separately, CTIDDP:</p>
        <div className="space-y-3">
          {consolidationSteps.map((item) => (
            <div key={item} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <FaCheckCircle className="text-[#003DA5] flex-shrink-0" size={15} />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right - highlight card */}
      <div className="bg-[#0B2A6B]/5 border border-[#0B2A6B]/15 rounded-xl p-10 flex flex-col items-center text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: '#0B2A6B' }}
        >
          <FaWarehouse size={34} className="text-white" />
        </div>
        <p className="text-gray-800 text-lg font-semibold mb-3">
          Results in better cost efficiency
        </p>
        <div className="flex h-[3px] rounded-full overflow-hidden mb-4" style={{ width: '48px' }}>
          <div className="flex-1" style={{ background: '#0B2A6B' }} />
          <div className="flex-1" style={{ background: '#FE5101' }} />
        </div>
        <p className="text-[#003DA5] text-xl font-bold">
          and smoother logistics execution
        </p>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WAREHOUSE NETWORK IN CHINA  (slate-50 bg)
───────────────────────────────────────────── */
const locations = [
  { city: 'Guangzhou', description: "Southern China's manufacturing powerhouse" },
  { city: 'Foshan', description: 'Major hub for furniture and home products' },
];

const networkBenefits = [
  'Faster supplier coordination',
  'Quick cargo movement',
  'Efficient consolidation timelines',
];

const WarehouseNetwork = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="STRATEGIC PRESENCE"
        title="CTIDDP Warehouse Network"
        highlight="in China"
        description="Strategically located near major manufacturing hubs to enable fast, efficient cargo handling."
      />

      {/* Location cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
        {locations.map((loc) => (
          <div
            key={loc.city}
            className="bg-white p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: '#0B2A6B' }}
            >
              <FaMapMarkerAlt size={26} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#0B2A6B' }}>
              {loc.city}
            </h3>
            <p className="text-gray-600">{loc.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {networkBenefits.map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0B2A6B]/20 bg-white text-sm font-medium text-gray-700 shadow-sm"
          >
            <FaCheckCircle size={13} style={{ color: '#003DA5' }} />
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WHAT WE DO INSIDE THE WAREHOUSE  (white bg)
───────────────────────────────────────────── */
const warehouseOps = [
  {
    icon: <FaTruck className="text-[#003DA5]" size={28} />,
    title: 'Inbound Handling',
    items: [
      'Receiving cargo from suppliers',
      'Order-wise segregation',
      'Initial condition check',
    ],
  },
  {
    icon: <FaClipboardList className="text-[#003DA5]" size={28} />,
    title: 'Verification & Control',
    items: [
      'Quantity vs purchase orders',
      'SKU matching & labeling checks',
      'Discrepancy coordination',
    ],
  },
  {
    icon: <FaBoxes className="text-[#003DA5]" size={28} />,
    title: 'Consolidation & Packing',
    items: [
      'Combining multiple shipments',
      'Repacking for space optimisation',
      'Carton restructuring for safe transit',
    ],
  },
  {
    icon: <FaSearch className="text-[#003DA5]" size={28} />,
    title: 'Pre-Shipment Preparation',
    items: [
      'Marking & documentation alignment',
      'Ready for export clearance',
      'Freight booking coordination',
    ],
  },
];

const WarehouseOps = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="WAREHOUSE OPERATIONS"
        title="What We Do Inside"
        highlight="the Warehouse"
        description="End-to-end handling from receiving to dispatch preparation."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {warehouseOps.map((card) => (
          <div
            key={card.title}
            className="bg-white p-7 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-5">{card.icon}</div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#0B2A6B' }}>
              {card.title}
            </h3>
            <ul className="space-y-2">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-[#FE5101] mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WHY CONSOLIDATION MATTERS + USE CASES  (slate-50 bg)
───────────────────────────────────────────── */
const whyMatters = [
  { icon: <MdTrendingDown size={20} style={{ color: '#FE5101' }} />, text: 'Lower overall shipping cost (combined freight)' },
  { icon: <FaUsers size={18} style={{ color: '#FE5101' }} />, text: 'Better control over multiple suppliers' },
  { icon: <FaClipboardList size={18} style={{ color: '#FE5101' }} />, text: 'Reduced handling complexity' },
  { icon: <FaClock size={18} style={{ color: '#FE5101' }} />, text: 'Structured shipment planning' },
  { icon: <FaTruck size={18} style={{ color: '#FE5101' }} />, text: 'Faster transition to DDP delivery' },
];

const useCases = [
  { icon: <FaCodeBranch size={18} style={{ color: '#003DA5' }} />, text: 'Sourcing from multiple suppliers in China' },
  { icon: <FaBox size={18} style={{ color: '#003DA5' }} />, text: 'Small to medium shipments (LCL optimization)' },
  { icon: <FaBuilding size={18} style={{ color: '#003DA5' }} />, text: 'Canton Fair purchases from different vendors' },
  { icon: <FaLayerGroup size={18} style={{ color: '#003DA5' }} />, text: 'Bulk buying across product categories' },
  { icon: <MdTrendingUp size={20} style={{ color: '#003DA5' }} />, text: 'Businesses scaling import operations' },
];

const WhyAndUseCases = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

      {/* Why it matters */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            BUSINESS IMPACT
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Why Consolidation Matters for Importers
        </h2>
        <div className="space-y-4">
          {whyMatters.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            PERFECT FIT
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Ideal Use Cases for Consolidation
        </h2>
        <div className="space-y-4">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   DDP INTEGRATION + HANDLING TYPES  (white bg)
───────────────────────────────────────────── */
const ddpFlow = ['Supplier', 'Warehouse', 'Consolidation', 'Freight', 'Customs', 'Delivery'];
const ddpBenefits = [
  'Coordinated shipments from multiple suppliers',
  'Cost-efficient logistics under one roof',
  'Seamless door delivery under one contract',
];

const handlingTypes = [
  { type: 'Multi-vendor consolidation', desc: 'Combine products from different suppliers' },
  { type: 'LCL shipments', desc: 'Less than Container Load optimization' },
  { type: 'FCL preparation', desc: 'Full Container Load ready for dispatch' },
  { type: 'Mixed product categories', desc: 'Different products in one shipment' },
  { type: 'Palletised or carton-based', desc: 'Flexible packaging formats supported' },
];

const DDPIntegration = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

      {/* DDP flow */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            SEAMLESS INTEGRATION
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Integration with Global DDP Shipping
        </h2>
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
          <p className="text-gray-700 font-semibold mb-5 text-center">One Continuous Flow</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
            {ddpFlow.map((stage, i) => (
              <Fragment key={stage}>
                <span
                  className="px-3 py-1.5 rounded-full text-sm font-semibold text-white"
                  style={{ background: '#0B2A6B' }}
                >
                  {stage}
                </span>
                {i < ddpFlow.length - 1 && (
                  <BsArrowRight className="text-[#FE5101]" size={14} />
                )}
              </Fragment>
            ))}
          </div>
          <div className="space-y-3">
            {ddpBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#003DA5] flex-shrink-0 mt-0.5" size={15} />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Handling types */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            FLEXIBLE OPTIONS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Handling Types We Support
        </h2>
        <div className="space-y-3">
          {handlingTypes.map((item) => (
            <div
              key={item.type}
              className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 bg-slate-50/40 hover:shadow-sm transition-shadow"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: '#0B2A6B' }}
              >
                <FaBox size={15} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm" style={{ color: '#0B2A6B' }}>{item.type}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   QUALITY & CONTROL  (slate-50 bg)
───────────────────────────────────────────── */
const qualityChecks = [
  'Visual inspection during receiving',
  'Packaging condition assessment',
  'Label and marking verification',
  'Shipment readiness confirmation',
];

const QualityControl = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="QUALITY ASSURANCE"
        title="Quality & Control at"
        highlight="Warehouse Level"
        description="Every shipment passing through our China warehouse undergoes structured quality verification."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {qualityChecks.map((check) => (
          <div
            key={check}
            className="flex items-start gap-3 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <FaShieldAlt className="flex-shrink-0 mt-0.5" size={18} style={{ color: '#003DA5' }} />
            <span className="text-gray-700 text-sm font-medium">{check}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WHY CHOOSE CTIDDP  (white bg)
───────────────────────────────────────────── */
const whyPoints = [
  { icon: <FaMapMarkerAlt size={28} style={{ color: '#003DA5' }} />, title: 'Strategic Presence', desc: 'Warehouse presence in China manufacturing hubs (Guangzhou, Foshan)' },
  { icon: <FaUsers size={28} style={{ color: '#003DA5' }} />, title: 'Direct Coordination', desc: 'Direct coordination with your suppliers' },
  { icon: <FaLayerGroup size={28} style={{ color: '#003DA5' }} />, title: 'Integrated Services', desc: 'Integrated with QC, payments, and shipping' },
  { icon: <MdTrendingDown size={30} style={{ color: '#003DA5' }} />, title: 'Cost Efficiency', desc: 'Optimised cargo planning for cost efficiency' },
  { icon: <FaShieldAlt size={28} style={{ color: '#003DA5' }} />, title: 'Single Partner', desc: 'Single partner for complete logistics execution' },
  { icon: <FaClock size={28} style={{ color: '#003DA5' }} />, title: 'Timely Execution', desc: 'Structured timelines for every shipment' },
];

const WhyCTIDDP = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="TRUSTED PARTNER"
        title="Why Choose CTIDDP Warehousing"
        highlight="& Consolidation"
        description=""
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyPoints.map((point) => (
          <div
            key={point.title}
            className="bg-white p-7 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#0B2A6B' }}>{point.title}</h3>
            <p className="text-gray-600 text-sm">{point.desc}</p>
          </div>
        ))}
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
        Consolidate Your Shipments. Reduce Your Costs.
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Bring all your supplier shipments into one streamlined flow. One warehouse. One shipment. One DDP contract.
      </p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function WarehousingPage() {
  return (
    <main className="font-sans antialiased">
      <HeroSection />
      <WhatIsSection />
      <WarehouseNetwork />
      <WarehouseOps />
      <WhyAndUseCases />
      <DDPIntegration />
      <QualityControl />
      <WhyCTIDDP />
      <FinalCTA />
    </main>
  );
}