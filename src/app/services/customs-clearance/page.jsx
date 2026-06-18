// app/services/customs-clearance/page.jsx
import {
  FaCheckCircle,
  FaShieldAlt,
  FaFileInvoice,
  FaCalculator,
  FaTruck,
  FaClock,
  FaBuilding,
  FaBoxOpen,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaUsers,
  FaChartBar,
  FaGlobe,
  FaChartLine,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";

export const metadata = {
  title: "Customs Clearance Services | China to India Import Compliance",
  description:
    "End-to-end customs clearance under DDP for China to India imports including documentation, duty calculation, and clearance coordination.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/customs-clearance",
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
  { icon: <FaFileInvoice className="text-[#0181EA]" size={20} />, title: "Documentation", subtitle: "Filing & classification handled" },
  { icon: <FaCalculator className="text-[#0181EA]" size={20} />, title: "Duty Calculation", subtitle: "Transparent, structured assessment" },
  { icon: <FaShieldAlt className="text-[#0181EA]" size={20} />, title: "Full Compliance", subtitle: "Regulatory coordination built-in" },
  { icon: <FaClock className="text-[#0181EA]" size={20} />, title: "Faster Clearance", subtitle: "Pre-planned to reduce delays" },
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">
    <div className="absolute inset-0">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/images/services/worker-factory-checking-number-white-plastic-bottles-warehouse.jpeg"
        />
        <img
          src="/images/services/worker-factory-checking-number-white-plastic-bottles-warehouse.jpeg"
          alt="Customs Clearance - China to India Import Compliance"
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
              INDIA IMPORT COMPLIANCE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            Customs Clearance
            <br />
            <span className="text-[#36A0F7]">China to India, Fully DDP</span>
          </h1>

          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Ensure fast, compliant entry of your cargo into India with end-to-end customs clearance under DDP. CTIDDP manages documentation, duty calculation, and clearance execution, so your shipments move from port to delivery without friction.
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

/* ---------- What is Customs Clearance ---------- */
const WhatIsSection = () => {
  const points = [
    "Import documentation and filing",
    "Duty & tax assessment",
    "Coordination with customs authorities",
    "Clearance at port/airport",
    "Handover for last-mile delivery",
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <Eyebrow label="THE GATEWAY TO INDIA" />
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#0B2A6B" }}>
            What is Customs Clearance in DDP Shipping?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Customs clearance is the process of getting your goods legally approved for import into India. Under a DDP model, CTIDDP handles:
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
          <FaGlobe className="text-[#003DA5] mx-auto mb-5" size={56} />
          <p className="text-gray-800 text-lg font-semibold">Single accountable workflow</p>
          <p className="text-2xl font-bold mt-2" style={{ color: "#FE5101" }}>
            from origin to doorstep
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Clearance Scope (3 cards) ---------- */
const ClearanceScope = () => {
  const cards = [
    {
      icon: <FaFileInvoice className="text-[#003DA5]" size={32} />,
      title: "Documentation Management",
      items: [
        "Commercial invoice & packing list validation",
        "HS code classification support",
        "Import documentation preparation",
        "Bill of Entry filing",
      ],
    },
    {
      icon: <FaCalculator className="text-[#003DA5]" size={32} />,
      title: "Duty & Tax Handling",
      items: [
        "BCD, IGST, SWS calculation",
        "Duty planning aligned with product category",
        "FTA applicability guidance (where relevant)",
      ],
    },
    {
      icon: <FaShieldAlt className="text-[#003DA5]" size={32} />,
      title: "Clearance Execution",
      items: [
        "Port and airport clearance coordination",
        "Examination handling & query resolution",
        "Release of cargo for onward delivery",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="COMPLETE COVERAGE"
          title="CTIDDP Customs Clearance"
          highlight="Scope"
          description="End-to-end customs handling from documentation to cargo release"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#0B2A6B" }}>
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

/* ---------- Clearance Flow (numbered steps) ---------- */
const ClearanceFlow = () => {
  const steps = [
    { step: "Pre-Arrival Preparation", desc: "Documents reviewed and aligned before cargo arrival" },
    { step: "Filing & Assessment", desc: "Bill of Entry filed with correct classification" },
    { step: "Customs Review", desc: "Queries handled with supporting documents" },
    { step: "Duty Settlement", desc: "Applicable duties and taxes processed" },
    { step: "Cargo Release", desc: "Shipment cleared and moved to delivery network" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="STEP BY STEP"
          title="End-to-End Clearance"
          highlight="Flow"
          description="Structured process from pre-arrival to cargo release"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg bg-slate-50/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FE5101] text-white font-bold flex items-center justify-center text-sm">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold leading-tight" style={{ color: "#0B2A6B" }}>
                  {item.step}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Compliance + Scenarios ---------- */
const ComplianceAndScenarios = () => {
  const compliance = [
    { icon: FaChartBar, text: "HS code accuracy and classification" },
    { icon: FaUsers, text: "Importer details and KYC alignment" },
    { icon: FaShieldAlt, text: "Product-specific compliance requirements" },
    { icon: FaBoxOpen, text: "Labeling and packaging checks (as applicable)" },
    { icon: FaBuilding, text: "Regulatory coordination with authorities" },
  ];

  const scenarios = [
    { icon: FaMapMarkerAlt, text: "China to India DDP shipments" },
    { icon: FaLayerGroup, text: "Multi-category imports under one shipment" },
    { icon: FaTruck, text: "Bulk shipments (FCL/LCL/Air)" },
    { icon: FaChartLine, text: "Regular importers scaling operations" },
    { icon: FaBuilding, text: "Canton Fair sourcing shipments" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="REGULATORY EXCELLENCE" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Compliance Areas We Manage
          </h3>
          <div className="space-y-3">
            {compliance.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
                <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow label="PERFECT FIT" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Suitable for These Import Scenarios
          </h3>
          <div className="space-y-3">
            {scenarios.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
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
    "QC & Inspection",
    "Warehousing & Consolidation",
    "Global DDP Shipping",
    "Last-Mile Delivery",
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#0B2A6B]/15 bg-gradient-to-br from-[#0B2A6B]/5 to-transparent p-8 md:p-12">
          <SectionHeader
            eyebrow="SEAMLESS INTEGRATION"
            title="Integrated with CTIDDP"
            highlight="Ecosystem"
            description="One Partner, One Flow - complete visibility across every stage"
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
            Customs clearance is fully integrated with the entire supply chain, ensuring complete visibility and coordination.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Advantages + Shipment Types ---------- */
const AdvantagesAndShipmentTypes = () => {
  const advantages = [
    { icon: FaMapMarkerAlt, text: "Dedicated customs handling for China–India trade" },
    { icon: FaClock, text: "Pre-planned documentation to reduce processing time" },
    { icon: FaCalculator, text: "Structured duty calculation and transparency" },
    { icon: FaUsers, text: "Direct coordination with port and customs teams" },
    { icon: FaTruck, text: "Integrated delivery after clearance" },
  ];

  const shipmentTypes = [
    { type: "Sea Freight", desc: "FCL & LCL shipments" },
    { type: "Air Freight", desc: "Time-sensitive cargo" },
    { type: "Consolidated Cargo", desc: "Multi-supplier shipments" },
    { type: "Multi-Supplier Shipments", desc: "Combined from different vendors" },
    { type: "Commercial Imports", desc: "Across all product categories" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="OPERATIONAL STRENGTH" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Key Advantages of CTIDDP Customs Clearance
          </h3>
          <div className="space-y-3">
            {advantages.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
                <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow label="FLEXIBLE CAPABILITIES" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Shipment Types Covered
          </h3>
          <div className="space-y-3">
            {shipmentTypes.map((item) => (
              <div key={item.type} className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 bg-white">
                <FaBoxOpen className="text-[#003DA5] flex-shrink-0" size={16} />
                <span className="text-sm font-semibold text-gray-800">{item.type}</span>
                <span className="text-xs text-gray-500 ml-auto text-right">{item.desc}</span>
              </div>
            ))}
          </div>
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
        Clear Your Shipments with Confidence
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Streamline your imports with structured, compliant customs clearance. One partner. One workflow. Complete peace of mind from port to delivery.
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
      <ClearanceScope />
      <ClearanceFlow />
      <ComplianceAndScenarios />
      <EcosystemSection />
      <AdvantagesAndShipmentTypes />
      <FinalCTA />
    </main>
  );
}