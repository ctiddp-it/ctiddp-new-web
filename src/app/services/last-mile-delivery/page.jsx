// app/services/last-mile-delivery/page.jsx
import {
  FaCheckCircle,
  FaTruck,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaClock,
  FaUsers,
  FaChartLine,
  FaWarehouse,
  FaRoute,
  FaCalendarAlt,
  FaShieldAlt,
  FaBoxes,
  FaBullseye,
  FaArrowRight,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";

export const metadata = {
  title: "Last-Mile Delivery in India | CTIDDP",
  description:
    "Reliable last-mile DDP delivery across India from port or airport to your warehouse with scheduled dispatch and delivery coordination.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/last-mile-delivery",
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
  { icon: <FaMapMarkerAlt className="text-[#0181EA]" size={20} />, title: "PAN India Reach", subtitle: "Metro, tier-2 & tier-3 cities" },
  { icon: <FaCalendarAlt className="text-[#0181EA]" size={20} />, title: "Scheduled Dispatch", subtitle: "Planned delivery slots" },
  { icon: <FaShieldAlt className="text-[#0181EA]" size={20} />, title: "Safe Handling", subtitle: "Packaging integrity maintained" },
  { icon: <FaCheckCircle className="text-[#0181EA]" size={20} />, title: "Confirmed Delivery", subtitle: "Tracked till handover" },
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">
    <div className="absolute inset-0">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/images/services/warehouse-logistics-streamlined-delivery-process-with-boxes-loaded-onto-cargo-truck-generative-ai.jpeg"
        />
        <img
          src="/images/services/warehouse-logistics-streamlined-delivery-process-with-boxes-loaded-onto-cargo-truck-generative-ai.jpeg"
          alt="Last-Mile Delivery across India"
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
              PAN INDIA DELIVERY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            Last-Mile Delivery
            <br />
            <span className="text-[#36A0F7]">The Final Step to Your Door</span>
          </h1>

          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Complete your import journey with reliable final delivery from port or airport to your warehouse anywhere in India.
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

/* ---------- What is Last-Mile Delivery ---------- */
const WhatIsSection = () => {
  const points = [
    "Pre-planned alongside customs clearance",
    "Coordinated with transport partners",
    "Executed with delivery tracking and confirmation",
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <Eyebrow label="THE FINAL STAGE" />
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#0B2A6B" }}>
            What is Last-Mile Delivery in DDP Shipping?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Last-mile delivery is the final stage of your shipment, where goods are transported from the port, airport, or warehouse to your destination.
          </p>
          <p className="text-gray-800 font-medium mb-4">
            Under CTIDDP&apos;s DDP model, this stage is:
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
          <FaBullseye className="text-[#003DA5] mx-auto mb-5" size={56} />
          <p className="text-gray-800 text-lg font-semibold">Your shipment arrives on time</p>
          <p className="text-2xl font-bold mt-2" style={{ color: "#FE5101" }}>
            and in expected condition
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- PAN India Coverage ---------- */
const CoverageSection = () => {
  const cities = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Mumbai",
    "Delhi NCR",
    "Tier-2 Cities",
    "Tier-3 Cities",
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="NATIONAL COVERAGE"
          title="CTIDDP Last-Mile Delivery"
          highlight="Coverage"
          description="PAN India delivery network covering major business and industrial hubs"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {cities.map((city) => (
            <div key={city} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 bg-white">
              <FaMapMarkerAlt className="text-[#003DA5] flex-shrink-0" size={15} />
              <span className="text-gray-700 text-sm">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- What We Handle (3 cards) ---------- */
const WhatWeHandle = () => {
  const cards = [
    {
      icon: <FaRoute className="text-[#003DA5]" size={32} />,
      title: "Post-Clearance Movement",
      items: [
        "Cargo pickup from port/airport",
        "Transfer to local delivery network",
        "Route planning based on destination",
      ],
    },
    {
      icon: <FaCalendarAlt className="text-[#003DA5]" size={32} />,
      title: "Delivery Coordination",
      items: [
        "Scheduling delivery slots",
        "Communication with consignee",
        "Delivery confirmation & documentation",
      ],
    },
    {
      icon: <FaShieldAlt className="text-[#003DA5]" size={32} />,
      title: "Cargo Handling",
      items: [
        "Safe loading and unloading",
        "Packaging integrity maintenance",
        "Handling based on shipment type",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="DELIVERY OPERATIONS"
          title="What We Handle in the Final"
          highlight="Delivery Stage"
          description="Complete execution from port/airport to your warehouse"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
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

/* ---------- Delivery Options + DDP Flow ---------- */
const OptionsAndFlow = () => {
  const options = [
    { icon: FaBoxes, text: "Full Container Delivery (FCL)" },
    { icon: FaBoxOpen, text: "Consolidated Cargo Delivery (LCL)" },
    { icon: FaTruck, text: "Air Cargo Final Delivery" },
    { icon: FaWarehouse, text: "Warehouse-to-warehouse transfer" },
    { icon: FaChartLine, text: "Bulk and palletised cargo delivery" },
  ];

  const benefits = [
    "Smooth transition from clearance to delivery",
    "No delays between logistics stages",
    "Consistent coordination across all steps",
  ];

  const stages = ["Supplier", "Pickup", "Freight", "Customs", "Last-Mile"];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="FLEXIBLE EXECUTION" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Delivery Options Based on Shipment Type
          </h3>
          <div className="space-y-3">
            {options.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
                <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow label="SEAMLESS INTEGRATION" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            How Last-Mile Delivery Fits into the DDP Flow
          </h3>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200">
            <p className="text-center text-gray-600 mb-4">End-to-End Shipment Flow</p>
            <div className="flex items-center justify-center gap-1.5 flex-wrap mb-6">
              {stages.map((stage, idx) => (
                <div key={stage} className="flex items-center">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(0,61,165,0.08)", color: "#003DA5" }}
                  >
                    {stage}
                  </span>
                  {idx < stages.length - 1 && (
                    <FaArrowRight className="text-[#FE5101] mx-1.5" size={10} />
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-gray-700 text-sm">
                  <FaCheckCircle className="text-[#003DA5] flex-shrink-0" size={14} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Delivery Process (vertical numbered flow) ---------- */
const DeliveryProcess = () => {
  const steps = [
    "Shipment cleared at port or airport",
    "Cargo transferred to delivery network",
    "Route and schedule finalised",
    "Shipment dispatched to destination",
    "Delivery completed with confirmation",
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="STEP BY STEP"
          title="Delivery Process - Final Stage"
          highlight="Execution"
          description=""
        />
        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-4 p-4 border-b border-slate-100 last:border-0"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FE5101] text-white font-bold flex items-center justify-center text-sm">
                {i + 1}
              </div>
              <span className="text-gray-800 font-medium">{step}</span>
              {i < steps.length - 1 && (
                <FaArrowRight className="text-slate-300 ml-auto flex-shrink-0" size={14} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Why Choose + Use Cases ---------- */
const WhyChooseAndUseCases = () => {
  const reasons = [
    { icon: FaUsers, text: "Single partner handling entire shipment" },
    { icon: FaCalendarAlt, text: "Coordinated delivery scheduling" },
    { icon: FaMapMarkerAlt, text: "Coverage across India" },
    { icon: FaClock, text: "Alignment with DDP shipment timelines" },
    { icon: FaShieldAlt, text: "Structured handover process" },
  ];

  const useCases = [
    { icon: FaBoxes, text: "Bulk imports requiring direct warehouse delivery" },
    { icon: FaMapMarkerAlt, text: "Multi-location deliveries across India" },
    { icon: FaShieldAlt, text: "High-value shipments needing controlled handling" },
    { icon: FaChartLine, text: "Businesses scaling import operations" },
    { icon: FaUsers, text: "Regular importers managing multiple shipments" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="TRUSTED PARTNER" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Why Businesses Choose CTIDDP for Last-Mile Delivery
          </h3>
          <div className="space-y-3">
            {reasons.map((item) => (
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
            Suitable Use Cases
          </h3>
          <div className="space-y-3">
            {useCases.map((item) => (
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
    "Global DDP Shipping",
    "Customs Clearance",
    "Warehousing & Consolidation",
    "Supplier Payments",
    "QC & Inspection",
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#0B2A6B]/15 bg-gradient-to-br from-[#0B2A6B]/5 to-transparent p-8 md:p-12">
          <SectionHeader
            eyebrow="CONNECTED ECOSYSTEM"
            title="Integration with CTIDDP"
            highlight="Services"
            description="Last-mile delivery is integrated with the complete logistics chain"
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
            This creates a continuous logistics flow with no operational gaps.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Final CTA ---------- */
const FinalCTA = () => (
  <section className="py-16 md:py-20 bg-[#0B2A6B] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Deliver Your Shipments with Precision
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Complete your import journey with reliable last-mile execution. One partner. One flow. Door delivery guaranteed.
      </p>
    </div>
  </section>
);

export default function Page() {
  return (
    <main className="font-sans antialiased bg-white">
      <HeroSection />
      <WhatIsSection />
      <CoverageSection />
      <WhatWeHandle />
      <OptionsAndFlow />
      <DeliveryProcess />
      <WhyChooseAndUseCases />
      <EcosystemSection />
      <FinalCTA />
    </main>
  );
}