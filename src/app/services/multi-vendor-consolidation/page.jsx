// app/services/multi-vendor-consolidation/page.jsx
import {
  FaCheckCircle,
  FaTruck,
  FaWarehouse,
  FaFileInvoice,
  FaBoxOpen,
  FaUsers,
  FaBuilding,
  FaLayerGroup,
  FaCodeBranch,
  FaBoxes,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaGlobe,
  FaCamera,
  FaClipboardList,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";
import { BsGraphDown } from "react-icons/bs";

export const metadata = {
  title: "Multi-Vendor Consolidation in China | CTIDDP",
  description:
    "Combine shipments from multiple China suppliers into one cost-efficient DDP cargo with pickup, consolidation, and dispatch management.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/multi-vendor-consolidation",
  },
};

/* ---------- Shared section header (matches site-wide design system) ---------- */
const SectionHeader = ({ eyebrow, title, highlight, description }) => (
  <div className="flex flex-col items-center text-center mb-12 md:mb-16">
    <div className="flex items-center gap-2 mb-4">
      <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
      <span
        className="font-semibold text-[12px] tracking-[0.18em] uppercase"
        style={{ color: "#FE5101" }}
      >
        {eyebrow}
      </span>
      <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
    </div>

    <h2
      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
      style={{ color: "#0B2A6B" }}
    >
      {title} <span style={{ color: "#FE5101" }}>{highlight}</span>
    </h2>

    <div
      className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
      style={{ width: "72px" }}
    >
      <div className="flex-1" style={{ background: "#0B2A6B" }} />
      <div className="flex-1" style={{ background: "#FE5101" }} />
    </div>

    {description && (
      <p className="text-lg md:text-md text-gray-700 max-w-3xl mx-auto">
        {description}
      </p>
    )}
  </div>
);

/* Left-aligned eyebrow (used for two-column sections, single dot) */
const Eyebrow = ({ label }) => (
  <div className="flex items-center gap-2 mb-4">
    <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
    <span
      className="font-semibold text-[12px] tracking-[0.18em] uppercase"
      style={{ color: "#FE5101" }}
    >
      {label}
    </span>
  </div>
);


/* ---------- Hero ---------- */
const heroFeatures = [
  { icon: <FaCodeBranch className="text-[#0181EA]" size={20} />, title: "Multi-Supplier Pickup", subtitle: "Collected from any China address" },
  { icon: <FaWarehouse className="text-[#0181EA]" size={20} />, title: "Central Warehouse", subtitle: "Sorted & combined for dispatch" },
  { icon: <BsGraphDown className="text-[#0181EA]" size={20} />, title: "Lower Shipping Cost", subtitle: "One cargo instead of many" },
  { icon: <FaGlobe className="text-[#0181EA]" size={20} />, title: "DDP Ready", subtitle: "Seamless handoff to shipping" },
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[540px] lg:h-[50vh] overflow-hidden">
    <div className="absolute inset-0">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/images/services/arranging-order-deliveries-using-invoice-identification-codes.jpeg"
        />
        <img
          src="/images/services/arranging-order-deliveries-using-invoice-identification-codes.jpeg"
          alt="Multi-Vendor Consolidation in China"
          className="h-full w-full object-cover object-center"
        />
      </picture>
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/80 to-[#041c4a]/20 lg:via-[#041c4a]/85" />
    <div className="absolute inset-0 opacity-[0.06]" />

    <div className="relative z-10 h-full">
      <div className="flex h-full items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-[#0181EA]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              SMART CONSOLIDATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            Multi-Vendor Consolidation
            <br />
            <span className="text-[#36A0F7]">Reduce Costs with Smart DDP Shipping</span>
          </h1>

          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Optimize your imports by combining shipments from multiple suppliers into a single cost-efficient cargo. CTIDDP manages collection, consolidation, documentation, and dispatch, ensuring smooth movement from multiple factories to one final delivery in India.
          </p>

          <div className="mt-8">
            <a
              href="https://www.ctiddp.com/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#FE5101] rounded-md shadow-lg shadow-[#FE5101]/25 hover:shadow-[#FE5101]/50 transition-shadow duration-300"
            >
              Get DDP Quote
            </a>
          </div>

          <div className="hidden lg:grid mt-10 grid-cols-4 gap-x-8 gap-y-5">
            {heroFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{feature.title}</div>
                  <div className="text-xs text-white/70">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- What is Multi-Vendor Consolidation ---------- */
const WhatIsSection = () => {
  const points = [
    "Source products from multiple suppliers in China",
    "Combine them into one shipment",
    "Ship together under a single logistics plan",
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <Eyebrow label="THE SMART APPROACH" />
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#0B2A6B" }}>
            What is Multi-Vendor Consolidation?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Multi-vendor consolidation allows you to source products from multiple suppliers in China and combine them into one shipment under a single logistics plan.
          </p>
          <div className="space-y-3">
            {points.map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-[#003DA5] flex-shrink-0" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#0B2A6B]/5 to-transparent text-center">
          <BsGraphDown className="text-[#003DA5] mx-auto mb-5" size={56} />
          <p className="text-gray-800 text-lg font-semibold">Reduces shipping costs</p>
          <p className="text-2xl font-bold mt-2" style={{ color: "#FE5101" }}>
            and improves operational efficiency
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- How CTIDDP Handles Consolidation (4 cards) ---------- */
const HandlingSection = () => {
  const cards = [
    {
      icon: <FaTruck className="text-[#003DA5]" size={28} />,
      title: "Supplier Pickup & Coordination",
      items: [
        "Cargo collection from multiple factories",
        "Supplier coordination and scheduling",
        "Acceptance from any China address",
      ],
    },
    {
      icon: <FaWarehouse className="text-[#003DA5]" size={28} />,
      title: "Warehouse Consolidation",
      items: [
        "Goods received at consolidation warehouse",
        "Sorting and grouping based on shipment plan",
        "Secure storage before dispatch",
      ],
    },
    {
      icon: <FaFileInvoice className="text-[#003DA5]" size={28} />,
      title: "Documentation & Preparation",
      items: [
        "Packing list and invoice preparation",
        "HS code verification",
        "SWS and duty calculation alignment",
      ],
    },
    {
      icon: <FaBoxOpen className="text-[#003DA5]" size={28} />,
      title: "Shipment Dispatch",
      items: [
        "Consolidated cargo shipped via air or sea",
        "Integrated with DDP shipping process",
        "Routed for customs clearance and delivery",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="How CTIDDP Handles"
          highlight="Consolidation"
          description="End-to-end management from supplier pickup to dispatch"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0B2A6B" }}>
                {card.title}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#FE5101] leading-none mt-0.5">•</span>
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
};

/* ---------- Key Features ---------- */
const KeyFeatures = () => {
  const features = [
    { icon: FaCodeBranch, text: "Accept shipments from multiple suppliers" },
    { icon: FaMapMarkerAlt, text: "Centralised consolidation warehouse in China" },
    { icon: FaClipboardList, text: "Structured documentation handling" },
    { icon: FaCamera, text: "Arrival photo verification for each shipment" },
    { icon: FaGlobe, text: "Ready for DDP shipping execution" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="DESIGNED FOR IMPORTERS"
          title="Key Features of Our"
          highlight="Consolidation Service"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/30 hover:border-[#003DA5]/30 transition"
            >
              <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
              <span className="text-gray-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Workflow + Types ---------- */
const WorkflowAndTypes = () => {
  const steps = [
    "Suppliers dispatch goods to consolidation warehouse",
    "Cargo received, verified, and documented",
    "Shipments combined into one load",
    "Packing list and invoice finalised",
    "Cargo dispatched under DDP shipping",
  ];

  const types = [
    { icon: FaBoxes, text: "LCL (Less than Container Load) consolidation", desc: "Perfect for smaller shipments" },
    { icon: FaLayerGroup, text: "Multi-category product consolidation", desc: "Different products in one shipment" },
    { icon: FaBoxOpen, text: "Small batch + bulk shipment combination", desc: "Flexible volume mixing" },
    { icon: FaGlobe, text: "Air + sea mixed logistics planning", desc: "Optimized mode selection" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="STEP BY STEP" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Consolidation Workflow
          </h3>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-4 p-3 rounded-lg bg-white border border-slate-100"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FE5101] text-white font-bold flex items-center justify-center text-xs">
                  {i + 1}
                </div>
                <span className="text-gray-700 text-sm">{step}</span>
                {i < steps.length - 1 && (
                  <FaArrowRight className="text-slate-300 ml-auto flex-shrink-0" size={12} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow label="FLEXIBLE OPTIONS" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Types of Consolidation Supported
          </h3>
          <div className="space-y-3">
            {types.map((item) => (
              <div key={item.text} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#003DA5]/30 transition">
                <div className="flex items-center gap-3">
                  <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                  <div>
                    <span className="text-gray-800 font-medium text-sm block">{item.text}</span>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Benefits + Use Cases ---------- */
const BenefitsAndUseCases = () => {
  const benefits = [
    { icon: BsGraphDown, text: "Lower shipping cost per unit" },
    { icon: FaBoxOpen, text: "Single shipment instead of multiple dispatches" },
    { icon: FaFileInvoice, text: "Simplified documentation process" },
    { icon: FaUsers, text: "Better control over supplier shipments" },
    { icon: FaCalendarAlt, text: "Improved logistics efficiency" },
  ];

  const useCases = [
    { icon: FaCodeBranch, text: "Sourcing from multiple suppliers in China" },
    { icon: FaBoxOpen, text: "Small shipments that need combining" },
    { icon: BsGraphDown, text: "Importers optimizing logistics costs" },
    { icon: FaBuilding, text: "Businesses scaling product sourcing" },
    { icon: FaMapMarkerAlt, text: "Canton Fair sourcing consolidation" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="BUSINESS ADVANTAGES" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Benefits for Importers
          </h3>
          <div className="space-y-3">
            {benefits.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow label="PERFECT FIT" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Ideal Use Cases
          </h3>
          <div className="space-y-3">
            {useCases.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Ecosystem Integration ---------- */
const EcosystemSection = () => {
  const services = [
    "Supplier Payments",
    "QC & Pre-Shipment Inspection",
    "Global DDP Shipping",
    "Customs Clearance",
    "Last-Mile Delivery",
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#0B2A6B]/15 bg-gradient-to-br from-[#0B2A6B]/5 to-transparent p-8 md:p-12">
          <SectionHeader
            eyebrow="CONNECTED ECOSYSTEM"
            title="Integrated with CTIDDP"
            highlight="Ecosystem"
            description="One partner for complete flow - from supplier to delivery"
          />
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {services.map((service) => (
              <span
                key={service}
                className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium"
                style={{ color: "#0B2A6B" }}
              >
                {service}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto">
            Creating a fully connected logistics system from supplier to delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Final CTA ---------- */
const FinalCTA = () => (
  <section className="py-16 md:py-24 bg-[#0B2A6B] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Consolidate Smart. Ship Efficiently.
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Reduce cost and streamline your imports with expert consolidation. One warehouse. One shipment. One DDP contract.
      </p>
      <a
        href="https://www.ctiddp.com/quote"
        className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold uppercase tracking-wider text-white bg-[#FE5101] rounded-md shadow-lg shadow-[#FE5101]/30 hover:shadow-[#FE5101]/50 transition-all duration-300"
      >
        Get DDP Quote
      </a>
    </div>
  </section>
);

export default function Page() {
  return (
    <main className="font-sans antialiased bg-white">
      <HeroSection />
      <WhatIsSection />
      <HandlingSection />
      <KeyFeatures />
      <WorkflowAndTypes />
      <BenefitsAndUseCases />
      <EcosystemSection />
      <FinalCTA />
    </main>
  );
}