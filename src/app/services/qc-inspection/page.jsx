// pages/services/qc-inspection.js
import { Fragment } from 'react';
import {
  FaCheckCircle,
  FaCamera,
  FaShieldAlt,
  FaClipboardList,
  FaFileAlt,
  FaEye,
  FaTruck,
  FaClock,
  FaBuilding,
  FaLayerGroup,
  FaExclamationTriangle,
  FaThumbsUp,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChartBar,
  FaUsers,
  FaBoxOpen,
  FaArrowRight,
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';

export const metadata = {
  title: "QC and Pre-Shipment Inspection in China | CTIDDP",
  description:
    "On-ground quality control and pre-shipment inspection in China with photo/video reports, defect classification, and packaging checks.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/qc-inspection",
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
  { icon: <FaEye className="text-[#0181EA]" size={20} />, title: 'Product Quality', subtitle: 'Visual & functional checks' },
  { icon: <FaClipboardList className="text-[#0181EA]" size={20} />, title: 'AQL Sampling', subtitle: 'Standards-based verification' },
  { icon: <FaCamera className="text-[#0181EA]" size={20} />, title: 'Photo / Video Report', subtitle: 'Full visual documentation' },
  { icon: <FaTruck className="text-[#0181EA]" size={20} />, title: 'Shipment Readiness', subtitle: 'Dispatch-aligned clearance' },
];

const HeroSection = () => (
  <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">
    <div className="absolute inset-0">
      <picture>
        <source media="(min-width:1024px)" srcSet="/images/services/ctiddp-service-QC-Inspection-banner.jpeg" />
        <img
          src="/images/services/young-female-warehouse-worker-checks-counting-cardboard-boxes-warehouse-using.jpeg"
          alt="QC and Pre-Shipment Inspection in China"
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
              QUALITY CONTROL & PRE-SHIPMENT INSPECTION
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            QC & Inspection
            <br />
            <span className="text-[#36A0F7]">Before It Leaves China</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[95%] text-base sm:text-lg text-white/85 sm:max-w-xl">
            Ensure every shipment meets your specifications before it leaves the factory - with structured QC checks and report-based decisions.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://www.ctiddp.com/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#FE5101] rounded-md shadow-lg shadow-[#FE5101]/25 hover:shadow-[#FE5101]/50 transition-shadow duration-300"
            >
              Schedule Inspection Now
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
   WHAT IS PSI  (white bg - two-col layout)
───────────────────────────────────────────── */
const validateItems = [
  'Product quality against specs',
  'Quantity and assortment',
  'Workmanship and finish',
  'Packaging and labeling',
  'Carton integrity',
  'Loading readiness',
];

const WhatIsPSI = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

      {/* Left */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            THE QUALITY GATEWAY
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#0B2A6B' }}>
          What is QC & Pre-Shipment Inspection?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Pre-shipment inspection (PSI) is a structured quality check conducted when production is complete (or ~80–100% finished) and goods are ready for dispatch.
        </p>
        <p className="text-gray-600 font-medium mb-4">It validates:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {validateItems.map((item) => (
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
          <FaShieldAlt size={36} className="text-white" />
        </div>
        <p className="text-gray-800 text-lg font-semibold mb-3">
          CTIDDP executes PSI at factory / warehouse level
        </p>
        <div className="flex h-[3px] rounded-full overflow-hidden mb-4" style={{ width: '48px' }}>
          <div className="flex-1" style={{ background: '#0B2A6B' }} />
          <div className="flex-1" style={{ background: '#FE5101' }} />
        </div>
        <p className="text-[#003DA5] text-xl font-bold">
          and aligns results with your DDP shipping plan
        </p>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   QC COVERAGE  (slate-50 bg)
───────────────────────────────────────────── */
const coverageCards = [
  {
    icon: <FaEye className="text-[#003DA5]" size={28} />,
    title: 'Product Quality & Workmanship',
    items: [
      'Visual inspection against samples',
      'Functional checks (where applicable)',
      'Defect identification & categorisation',
    ],
  },
  {
    icon: <FaClipboardList className="text-[#003DA5]" size={28} />,
    title: 'Quantity & Assortment',
    items: [
      'SKU verification',
      'Carton count vs purchase order',
      'Random sampling as per AQL standards',
    ],
  },
  {
    icon: <FaBoxOpen className="text-[#003DA5]" size={28} />,
    title: 'Packaging & Labeling',
    items: [
      'Inner/outer packaging integrity',
      'Barcodes, labels, and markings',
      'Carton strength & stacking suitability',
    ],
  },
  {
    icon: <FaTruck className="text-[#003DA5]" size={28} />,
    title: 'Shipment Readiness',
    items: [
      'Carton dimensions & weight checks',
      'Palletisation (if required)',
      'Container loading readiness (FCL/LCL)',
    ],
  },
];

const QCCoverage = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="COMPREHENSIVE CHECKS"
        title="CTIDDP QC Coverage -"
        highlight="What We Inspect"
        description="Every aspect of your shipment is verified against your specifications."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coverageCards.map((card) => (
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
   INSPECTION METHODS TABLE  (white bg)
───────────────────────────────────────────── */
const methodRows = [
  { method: 'AQL Sampling', purpose: 'Statistical sampling for large batches', outcome: 'Consistent quality benchmarking' },
  { method: 'Visual Inspection', purpose: 'Finish, defects, workmanship', outcome: 'Clear pass/fail indicators' },
  { method: 'Functional Testing', purpose: 'Product operation checks', outcome: 'Performance validation' },
  { method: 'Packaging Audit', purpose: 'Carton, labeling, protection', outcome: 'Transit-ready packaging' },
  { method: 'Quantity Verification', purpose: 'Count and assortment check', outcome: 'Order accuracy confirmation' },
];

const InspectionMethods = () => (
  <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="METHODOLOGY"
        title="Inspection Methods"
        highlight="We Follow"
        description="Structured, standards-based quality verification at every stage."
      />
      <div className="overflow-x-auto shadow-sm rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-100">
            <tr>
              {['Method', 'Purpose', 'Outcome'].map((h) => (
                <th key={h} className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#0B2A6B' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {methodRows.map((row) => (
              <tr key={row.method} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{row.method}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{row.purpose}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-[#003DA5] font-medium">
                    <FaCheckCircle size={13} /> {row.outcome}
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
   PROCESS + REPORT DELIVERABLES  (slate-50 bg)
───────────────────────────────────────────── */
const processSteps = [
  'Inspection request & PO/spec submission',
  'Inspector assigned near factory location',
  'On-site inspection at factory/warehouse',
  'Sampling and checks as per AQL plan',
  'Photo & video documentation captured',
  'Detailed inspection report shared',
  'Approval for shipment / rework coordination',
];

const reportItems = [
  { icon: <FaCamera size={16} className="text-[#003DA5]" />, text: 'High-resolution photos & videos' },
  { icon: <FaExclamationTriangle size={16} className="text-[#003DA5]" />, text: 'Defect list (minor / major / critical)' },
  { icon: <FaClipboardList size={16} className="text-[#003DA5]" />, text: 'Quantity verification summary' },
  { icon: <FaBoxOpen size={16} className="text-[#003DA5]" />, text: 'Packaging & labeling assessment' },
  { icon: <FaThumbsUp size={16} className="text-[#003DA5]" />, text: 'Clear recommendation: Pass / Conditional Pass / Rework' },
];

const ProcessAndReport = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

      {/* Process */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            STEP BY STEP
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Our Inspection Process
        </h2>
        <div className="space-y-3">
          {processSteps.map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-4 p-3 bg-white rounded-lg border border-slate-100 shadow-sm"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full text-white font-bold flex items-center justify-center text-sm"
                style={{ background: '#FE5101' }}
              >
                {i + 1}
              </div>
              <p className="text-gray-800 font-medium text-sm leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Report deliverables */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            DELIVERABLES
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          What You Receive After Inspection
        </h2>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <FaFileAlt size={20} style={{ color: '#003DA5' }} />
            <h3 className="text-lg font-bold" style={{ color: '#0B2A6B' }}>
              Actionable Inspection Report
            </h3>
          </div>
          <div className="space-y-3">
            {reportItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[#0B2A6B]/5 border-l-4 border-[#FE5101] rounded-r">
            <p className="text-gray-800 text-sm font-medium">
              📋 Reports are delivered digitally and are tied directly to your shipment record.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   DDP INTEGRATION + TIMING  (white bg)
───────────────────────────────────────────── */
const ddpFlow = ['QC', 'Approval', 'Pickup', 'Freight', 'Customs', 'Delivery'];
const ddpBenefits = [
  'Shipment moves only after quality validation',
  'Reduced rework at destination',
  'Better coordination with supplier and warehouse',
  'Smooth transition into DDP execution',
];
const timingItems = [
  { icon: <FaCalendarAlt size={22} style={{ color: '#003DA5' }} />, text: 'When production is 80–100% complete' },
  { icon: <FaClock size={22} style={{ color: '#003DA5' }} />, text: 'Before final balance payment (where applicable)' },
  { icon: <FaTruck size={22} style={{ color: '#003DA5' }} />, text: 'Prior to cargo pickup and consolidation' },
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
          Integration with DDP Shipping
        </h2>
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
          <p className="text-gray-700 font-semibold mb-5 text-center">Quality to Delivery - One Flow</p>
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

      {/* Timing */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            TIMING
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          When to Schedule Pre-Shipment Inspection
        </h2>
        <div className="space-y-4">
          {timingItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:shadow-sm transition-shadow"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   INDUSTRIES  (slate-50 bg)
───────────────────────────────────────────── */
const industries = [
  'Consumer Goods',
  'Electronics & Accessories',
  'Machinery & Components',
  'Furniture & Home Products',
  'Packaging Materials',
  'Apparel & Textiles',
];

const IndustriesSection = () => (
  <section className="py-16 md:py-24 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="EXPERTISE ACROSS SECTORS"
        title="Industries"
        highlight="We Cover"
        description="Cross-category QC expertise for every type of product imported from China."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map((ind) => (
          <div
            key={ind}
            className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-3"
          >
            <FaBuilding size={24} style={{ color: '#003DA5' }} />
            <span className="text-sm text-gray-700 font-medium leading-snug">{ind}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   WHY CTIDDP + INSPECTION TYPES  (white bg)
───────────────────────────────────────────── */
const whyPoints = [
  { icon: <FaMapMarkerAlt size={18} style={{ color: '#FE5101' }} />, text: 'On-ground inspection across China manufacturing hubs' },
  { icon: <FaChartBar size={18} style={{ color: '#FE5101' }} />, text: 'Standardised AQL-based checks' },
  { icon: <FaCamera size={18} style={{ color: '#FE5101' }} />, text: 'Clear visual documentation (photo/video)' },
  { icon: <FaCalendarAlt size={18} style={{ color: '#FE5101' }} />, text: 'Alignment with your DDP shipment timeline' },
  { icon: <FaUsers size={18} style={{ color: '#FE5101' }} />, text: 'Coordination with suppliers for next steps' },
];

const inspectionTypes = [
  {
    type: 'Pre-Production Check (PPC)',
    desc: 'Raw material & component verification before manufacturing begins',
  },
  {
    type: 'During Production Inspection (DPI)',
    desc: 'In-process checks while production is ongoing',
  },
  {
    type: 'Pre-Shipment Inspection (PSI)',
    desc: 'Final check when goods are packed and ready',
  },
  {
    type: 'Container Loading Supervision (CLS)',
    desc: 'Loading oversight to prevent damage and errors',
  },
];

const WhyAndTypes = () => (
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
          Why Choose CTIDDP for QC & Inspection
        </h2>
        <div className="space-y-4">
          {whyPoints.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-lg border border-slate-100 bg-slate-50/40 hover:shadow-sm transition-shadow"
            >
              <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inspection Types */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
            FLEXIBLE OPTIONS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0B2A6B' }}>
          Common Inspection Types We Offer
        </h2>
        <div className="space-y-4">
          {inspectionTypes.map((item) => (
            <div
              key={item.type}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: '#0B2A6B' }}
                >
                  <FaLayerGroup size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#0B2A6B' }}>
                    {item.type}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
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
        Book Your QC & Pre-Shipment Inspection
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Validate your goods before they move to shipping. Get photo/video evidence, defect reports, and clear pass/rework recommendations.
      </p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function QCInspectionPage() {
  return (
    <main className="font-sans antialiased">
      <HeroSection />
      <WhatIsPSI />
      <QCCoverage />
      <InspectionMethods />
      <ProcessAndReport />
      <DDPIntegration />
      <IndustriesSection />
      <WhyAndTypes />
      <FinalCTA />
    </main>
  );
} 