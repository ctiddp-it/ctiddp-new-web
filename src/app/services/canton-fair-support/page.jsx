// app/services/canton-fair-support/page.jsx
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaUsers,
  FaBuilding,
  FaBoxOpen,
  FaChartLine,
  FaGlobe,
  FaCalendarAlt,
  FaShieldAlt,
  FaFileInvoice,
  FaHandshake,
  FaClipboardList,
  FaTruck,
  FaCamera,
  FaLanguage,
  FaArrowRight,
  FaPhone,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";
import { HiSparkles, HiCheckBadge } from "react-icons/hi2";

export const metadata = {
  title: "Canton Fair Support Services | CTIDDP",
  description:
    "On-ground Canton Fair support for supplier selection, negotiation, verification, and integrated DDP shipping planning.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/canton-fair-support",
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
  { icon: <FaMapMarkerAlt className="text-[#0181EA]" size={20} />, title: "Guangzhou Team", subtitle: "On-ground at every hall" },
  { icon: <FaLanguage className="text-[#0181EA]" size={20} />, title: "Live Translation", subtitle: "Mandarin-English support" },
  { icon: <HiCheckBadge className="text-[#0181EA]" size={20} />, title: "Verified Suppliers", subtitle: "Background-checked vendors" },
  { icon: <FaGlobe className="text-[#0181EA]" size={20} />, title: "DDP Integration", subtitle: "Sourcing straight into shipping" },
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">
    <div className="absolute inset-0">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/images/services/male-entrepreneur-businessman-expert-reading-documents.jpeg"
        />
        <img
          src="/images/services/male-entrepreneur-businessman-expert-reading-documents.jpeg"
          alt="Canton Fair Support Services"
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
              ON-GROUND EXPERTS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            Canton Fair Support
            <br />
            <span className="text-[#36A0F7]">Source Smarter, On the Ground</span>
          </h1>

          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Maximise your sourcing at the Canton Fair with end-to-end on-ground support. CTIDDP helps you identify reliable suppliers, negotiate effectively, verify products, and plan shipping, all from a single coordinated system.
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

/* ---------- What is Canton Fair Support ---------- */
const WhatIsSection = () => {
  const points = [
    "Navigate the exhibition efficiently",
    "Connect with the right suppliers",
    "Validate product quality and pricing",
    "Plan logistics from sourcing to delivery",
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <Eyebrow label="SOURCING INTELLIGENCE" />
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#0B2A6B" }}>
            What is Canton Fair Support?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Canton Fair support is a structured service designed to help importers navigate the exhibition efficiently and connect with the right suppliers.
          </p>
          <p className="text-gray-800 font-medium mb-4">It helps you:</p>
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
          <HiSparkles className="text-[#003DA5] mx-auto mb-5" size={56} />
          <p className="text-gray-800 text-lg font-semibold">Complete sourcing + shipping strategy</p>
          <p className="text-2xl font-bold mt-2" style={{ color: "#FE5101" }}>
            not just supplier discovery
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- On-Ground Support (2 cards) ---------- */
const OnGroundSupport = () => {
  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-[#003DA5]" size={32} />,
      title: "Guangzhou-Based Expert Team",
      items: [
        "Local team present at Canton Fair",
        "Assistance in navigating halls and categories",
        "Real-time support during meetings",
      ],
    },
    {
      icon: <FaLanguage className="text-[#003DA5]" size={32} />,
      title: "Real-Time Translation & Negotiation",
      items: [
        "Mandarin-English communication support",
        "Assistance in supplier discussions",
        "Clear understanding of specs and pricing",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="LOCAL PRESENCE"
          title="On-Ground Support at"
          highlight="Canton Fair"
          description="Guangzhou-based expert team ready to assist you"
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{card.icon}</div>
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

/* ---------- Supplier Evaluation & Verification ---------- */
const SupplierEvaluation = () => {
  const cards = [
    {
      icon: <HiCheckBadge className="text-[#003DA5]" size={20} />,
      title: "Smart Supplier Selection",
      items: [
        "Background verification of suppliers",
        "Factory-level insights and credibility checks",
        "Assistance in shortlisting reliable vendors",
      ],
    },
    {
      icon: <FaCamera className="text-[#003DA5]" size={20} />,
      title: "Sample Checks & Validation",
      items: [
        "Product sample evaluation",
        "Quality expectation alignment",
        "Packaging and specification review",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="VERIFY FIRST, QUALITY FIRST"
          title="Supplier Evaluation &"
          highlight="Verification"
          description=""
        />
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-slate-50/50 rounded-xl p-6 md:p-8 border border-slate-200">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "#0B2A6B" }}>
                {card.icon}
                {card.title}
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#003DA5] flex-shrink-0 mt-0.5" size={14} />
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

/* ---------- End-to-End Sourcing Support (4 cards) ---------- */
const EndToEndSupport = () => {
  const cards = [
    { icon: FaHandshake, title: "Supplier Coordination", text: "Supplier coordination after meetings" },
    { icon: FaClipboardList, title: "Quotation Optimisation", text: "Quotation comparison and optimisation" },
    { icon: FaGlobe, title: "Shipment Planning", text: "Shipment planning under DDP model" },
    { icon: FaBoxOpen, title: "Multi-Vendor Planning", text: "Multi-vendor consolidation planning" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="COMPLETE JOURNEY"
          title="End-to-End Sourcing"
          highlight="Support"
          description="From fair to shipment planning - everything under one roof"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {cards.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="text-[#003DA5] mx-auto mb-3" size={28} />
              <h3 className="font-bold mb-2 text-sm" style={{ color: "#0B2A6B" }}>
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Post-Fair + Ecosystem ---------- */
const PostFairAndEcosystem = () => {
  const postFair = [
    { icon: FaPhone, text: "Supplier communication management" },
    { icon: FaFileInvoice, text: "Order finalisation guidance" },
    { icon: FaShieldAlt, text: "Documentation and compliance planning" },
    { icon: FaTruck, text: "Integration with shipping and delivery" },
  ];

  const benefits = [
    "Continuity from sourcing to delivery",
    "Single point of coordination",
    "Better planning and execution",
  ];

  const stages = ["Canton Fair", "Selection", "QC", "Consolidation", "Shipping", "Customs", "Delivery"];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="AFTER THE FAIR" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Post-Fair Execution Strategy
          </h3>
          <div className="space-y-3">
            {postFair.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow label="SEAMLESS INTEGRATION" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            How It Fits into CTIDDP Ecosystem
          </h3>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
            <p className="text-center text-gray-600 mb-4">Complete Trade Flow</p>
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
                    <FaArrowRight className="text-[#FE5101] mx-1.5" size={9} />
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

/* ---------- Ideal Importers + Advantages ---------- */
const IdealImportersAndAdvantages = () => {
  const importers = [
    { icon: FaUsers, text: "First-time importers visiting Canton Fair" },
    { icon: FaBuilding, text: "Businesses sourcing from multiple suppliers" },
    { icon: FaChartLine, text: "Importers planning bulk or regular shipments" },
    { icon: FaBoxOpen, text: "Companies expanding product categories" },
    { icon: FaCalendarAlt, text: "Buyers looking for structured sourcing support" },
  ];

  const advantages = [
    { icon: FaMapMarkerAlt, text: "On-ground team in Guangzhou" },
    { icon: FaLanguage, text: "Real-time negotiation support" },
    { icon: HiCheckBadge, text: "Supplier verification and validation" },
    { icon: FaGlobe, text: "Integrated shipping planning" },
    { icon: FaShieldAlt, text: "End-to-end DDP execution" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow label="PERFECT FIT" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Ideal for These Importers
          </h3>
          <div className="space-y-3">
            {importers.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100">
                <item.icon className="text-[#003DA5] flex-shrink-0" size={18} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow label="WHY CHOOSE US" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0B2A6B" }}>
            Key Advantages
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
      </div>
    </section>
  );
};

/* ---------- Final CTA ---------- */
const FinalCTA = () => (
  <section className="py-16 md:py-24 bg-[#0B2A6B] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Make Your Canton Fair Visit Result-Driven
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Turn your sourcing into a complete logistics solution. From exhibition hall to your warehouse - one partner, complete control.
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
      <OnGroundSupport />
      <SupplierEvaluation />
      <EndToEndSupport />
      <PostFairAndEcosystem />
      <IdealImportersAndAdvantages />
      <FinalCTA />
    </main>
  );
}