import { FaWhatsapp } from 'react-icons/fa6'
import {
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineBuildingStorefront,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCurrencyDollar,
  HiOutlineBuildingOffice2,
  HiOutlineClock,
} from 'react-icons/hi2'
import {
  ShieldCheck,
  Eye,
  Truck,
  FileCheck,
} from "lucide-react";
import {
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineClipboardDocument,
  HiOutlinePaperAirplane,
  HiOutlineDocumentCheck,
  HiOutlineTruck,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import WhychooseusSection from '@/components/sections/howitworks/whychooseussection';

const CHINA_ICONS = [
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineClipboardDocument,
];

const INDIA_ICONS = [
  HiOutlinePaperAirplane,
  HiOutlineDocumentCheck,
  HiOutlineTruck,
  HiOutlineCheckCircle,
];

import StepTimeline from '@/components/ui/StepTimeline'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import TwoColumnSection from "@/components/sections/TwoColumnSection"
import HowItWorksSection from '@/components/sections/howitworks/journeysection';

export const metadata = {
  title:
    'How DDP Shipping Works | End-to-End Import Process',

  description:
    'Learn how CTIDDP manages the complete DDP shipping process-from supplier coordination and QC inspection to customs clearance, freight forwarding, and final delivery under one contract.',

  keywords: [
    'how DDP shipping works',
    'DDP shipping process',
    'China to India import process',
    'freight forwarding process',
    'customs clearance process',
    'supplier coordination',
    'quality inspection China',
    'cargo consolidation',
    'international shipping process',
    'door to door logistics',
    'global trade process',
    'DDP logistics company',
    'import from China guide',
    'end to end import process',
    'cross border shipping workflow'
  ],

  openGraph: {
    title:
      'How DDP Shipping Works | End-to-End Import Process | CTIDDP',
    description:
      'Understand the complete DDP logistics journey-from supplier sourcing and inspection to customs clearance and last-mile delivery.',
    url: 'https://www.ctiddp.com/how-it-works/',
    siteName: 'CTIDDP',
    type: 'website',    
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'How DDP Shipping Works | CTIDDP',
    description:
      'Explore CTIDDP’s step-by-step DDP shipping process from supplier coordination to final delivery.',   
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/how-it-works'
  }
}

const DDP_STEPS = [
  { icon: <HiOutlineChatBubbleLeftRight size={22} />, title: 'Supplier Coordination', description: 'We connect with your supplier and verify shipment readiness.' },
  { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'QC Inspection', description: 'On-site quality checks at supplier facilities (optional).' },
  { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Consolidation', description: 'Collect and combine cargo at our Guangzhou warehouse.' },
  { icon: <HiOutlineDocumentCheck size={22} />, title: 'Export Customs', description: 'Complete China export documentation and clearance.' },
  { icon: <HiOutlineGlobeAlt size={22} />, title: 'Sea/Air Freight', description: 'Ocean or air transport with real-time tracking.' },
  { icon: <HiOutlineShieldCheck size={22} />, title: 'Import Customs', description: 'India import clearance with all duties pre-paid.' },
  { icon: <HiOutlineTruck size={22} />, title: 'Last Mile Delivery', description: 'Door-to-Door delivery anywhere with POD.' },
]

const CHINA_STEPS = [
  { title: 'Vendor Coordination', desc: 'Direct communication with your suppliers to verify order readiness, packaging, and documentation.' },
  { title: 'Product Inspection', desc: 'On-site quality checks, sample verification, and defect screening at the factory.' },
  { title: 'Cargo Consolidation', desc: 'Multi-vendor cargo collected and consolidated at our Guangzhou warehouse.' },
  { title: 'Export Customs', desc: 'Complete export documentation, HS code verification, and Chinese customs clearance.' },
]

const INDIA_STEPS = [
  { title: 'Ocean/Air Freight', desc: 'Sea or air shipment with real-time tracking, insurance coverage, and vessel monitoring.' },
  { title: 'Import Customs', desc: 'Complete Indian customs clearance - BCD, IGST, and all duties handled and pre-paid.' },
  { title: 'Last-Mile Delivery', desc: 'Door-to-door delivery coverage with partner carriers.' },
  { title: 'Proof of Delivery', desc: 'Digital POD, invoice closure, and post-delivery support for next shipment cycle.' },
]

const TRUST_ITEMS = [
  { icon: <HiOutlineDocumentCheck size={18} />, title: 'One Contract', desc: 'Single agreement covers the entire process.' },
  { icon: <HiOutlineCurrencyDollar size={18} />, title: 'No Hidden Costs', desc: 'Transparent pricing, always.' },
  { icon: <HiOutlineBuildingOffice2 size={18} />, title: 'Expert Team', desc: 'On-ground in China and India.' },
  { icon: <HiOutlineClock size={18} />, title: 'Real-time Updates', desc: 'Track every stage of your shipment.' },
  { icon: <HiOutlineChatBubbleLeftRight size={18} />, title: '24/7 Support', desc: 'Dedicated account manager.' },
]

const ProcessCard = ({
  step,
  index,
  icon: Icon,
  accent,
  last = false,
}) => {
  const isBlue = accent === "blue";

  return (
    <div className="relative pl-10 sm:pl-12">

      {/* Number */}
      <div
        className={`
          absolute left-0 top-7 z-20
          w-7 h-7 sm:w-8 sm:h-8
          rounded-full
          flex items-center justify-center
          text-[10px] sm:text-[11px]
          font-semibold
          text-white
          ${isBlue ? "bg-[#003DA5]" : "bg-[#FE5101]"}
        `}
      >
        {String(index).padStart(2, "0")}
      </div>

      {!last && (
        <div
          className={`
            absolute left-[13px]
            top-[56px]
            bottom-[-26px]
            border-l border-dashed
            ${isBlue
              ? "border-[#003DA5]/20"
              : "border-[#FE5101]/20"}
          `}
        />
      )}

      <div
        className="
          bg-white
          rounded-[18px]
          border border-[#E8EDF6]
          p-4 sm:p-5
          shadow-[0_6px_20px_rgba(15,23,42,0.05)]
          hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]
          transition
        "
      >
        <div className="flex items-start gap-3 sm:gap-4">

          {/* Icon */}
          <div
            className={`
              shrink-0
              w-[56px]
              h-[56px]
              sm:w-[68px]
              sm:h-[68px]
              rounded-[16px]
              flex items-center justify-center
              ${isBlue
                ? "bg-[#F4F7FF] text-[#1B4DFF]"
                : "bg-[#FFF5EF] text-[#FE5101]"
              }
            `}
          >
            <Icon size={26} />
          </div>

          <div className="min-w-0">

            <div
              className={`
                text-[10px]
                tracking-[0.14em]
                uppercase
                font-bold
                mb-1
                ${isBlue
                  ? "text-[#003DA5]"
                  : "text-[#FE5101]"
                }
              `}
            >
              STEP {String(index).padStart(2, "0")}
            </div>

            <h4 className="text-[15px] sm:text-[17px] font-semibold text-[#0B2A6B] mb-1">
              {step.title}
            </h4>

            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-slate-600">
              {step.desc}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: ShieldCheck,
    title: "End-to-End Control",
  },
  {
    icon: Eye,
    title: "100% Transparency",
  },
  {
    icon: Truck,
    title: "On-time Delivery",
  },
  {
    icon: FileCheck,
    title: "Customs Compliant",
  },
];

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-start gap-2">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-semibold text-white">
        {title}
      </p>
    </div>
  );
}

export const CTIDDP_CONTENT1 = {
  badge: "Delivered Duty Paid",
  title: (
    <>
      Complete <span className="text-[#FE5101]">Door-to-Door</span> Import Solution
    </>
  ),
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
  title: (
    <>
      <span className="text-[#FE5101]">End-to-End</span>  Import Clearance & Final Delivery
    </>
  ),
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

export default function HowItWorksPage() {
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
                "@type": "HowTo",

                "@id":
                  "https://www.ctiddp.com/how-it-works/#howto",

                "name":
                  "How DDP Shipping Works",

                "description":
                  "Complete step-by-step DDP shipping process managed by CTIDDP from supplier coordination to final delivery.",

                "totalTime": "P40D",

                "supply": [
                  {
                    "@type": "HowToSupply",
                    "name": "Supplier Information"
                  },
                  {
                    "@type": "HowToSupply",
                    "name": "Commercial Invoice"
                  },
                  {
                    "@type": "HowToSupply",
                    "name": "Packing List"
                  }
                ],

                "step": [

                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Supplier Coordination",
                    "text":
                      "Coordinate with suppliers, negotiate requirements, verify documentation, and prepare goods for shipment."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Quality Inspection",
                    "text":
                      "Conduct pre-shipment quality checks and supplier verification before cargo movement."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Cargo Consolidation",
                    "text":
                      "Combine cargo from one or multiple suppliers into a consolidated shipment."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Export Customs Clearance",
                    "text":
                      "Complete export declarations, customs documentation, and regulatory compliance."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "International Freight",
                    "text":
                      "Move cargo via sea freight, air freight, or hybrid logistics solutions."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 6,
                    "name": "Import Customs Clearance",
                    "text":
                      "Manage customs clearance, duty payments, compliance documentation, and release procedures."
                  },

                  {
                    "@type": "HowToStep",
                    "position": 7,
                    "name": "Last-Mile Delivery",
                    "text":
                      "Deliver cargo safely to the final destination with proof of delivery."
                  }
                ]
              },

              {
                "@type": "Service",

                "@id":
                  "https://www.ctiddp.com/how-it-works/#service",

                "name":
                  "End-to-End DDP Shipping",

                "provider": {
                  "@id":
                    "https://www.ctiddp.com/#organization"
                },

                "description":
                  "Complete DDP shipping service covering supplier coordination, quality inspection, freight forwarding, customs clearance, and last-mile delivery.",

                "areaServed": {
                  "@type": "Place",
                  "name": "Worldwide"
                }
              },

              {
                "@type": "WebPage",

                "@id":
                  "https://www.ctiddp.com/how-it-works/#webpage",

                "url":
                  "https://www.ctiddp.com/how-it-works/",

                "name":
                  "How DDP Shipping Works",

                "description":
                  "Learn the complete CTIDDP import and logistics workflow from supplier pickup to final delivery.",

                "mainEntity": {
                  "@id":
                    "https://www.ctiddp.com/how-it-works/#howto"
                },

                "isPartOf": {
                  "@id":
                    "https://www.ctiddp.com/#website"
                }
              },

              {
                "@type": "BreadcrumbList",

                "@id":
                  "https://www.ctiddp.com/how-it-works/#breadcrumb",

                "itemListElement": [

                  {
                    "@type": "ListItem",
                    "position": 1,

                    "name": "Home",

                    "item":
                      "https://www.ctiddp.com/"
                  },

                  {
                    "@type": "ListItem",
                    "position": 2,

                    "name": "How It Works",

                    "item":
                      "https://www.ctiddp.com/how-it-works/"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <section className="relative h-[50vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/howitworks/CTIDDP-how-it-works22.png"
            alt="Global Logistics"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/85 to-[#041c4a]/20" />

        {/* World Map Pattern (Optional) */}
        <div className="absolute inset-0 opacity-10">
          {/* Add SVG Pattern Here */}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">

          <div className="flex h-full items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">

            <div className="max-w-4xl">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-[#0181EA]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  Our Process
                </span>
              </div>

              {/* Heading */}
              <h1 className=" text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl">
                From Factory to Door Step
                <br />
                <span className=" text-[#36a0f7]">
                  How It Works.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                CTIDDP handles the sourcing, quality checks, customs, and freight. Here is exactly how we get your goods to India seamlessly.
              </p>

              {/* Features */}
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 lg:grid-cols-4">
                {features.map((feature) => (
                  <Feature
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ══════════ THE DDP JOURNEY ══════════ */}
      <HowItWorksSection />

      <TwoColumnSection
        {...CTIDDP_CONTENT1}
        initialLayout="content-left"
        showToggle={false}
        imageSrc="/images/howitworks/landed-cost-logistics-india-delivery-ctiddp.jpeg"
        imageAlt="Global cargo shipping"
      />

      {/* ══════════ FACTORY TO DOOR ══════════ */}
      <section className="bg-[#FAFBFE] py-16 sm:py-20 lg:py-24">

        <div className="container-main">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">

            <div className="inline-flex items-center gap-2 mb-4">

              <span className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />

              <span className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-semibold text-[#FE5101]">
                Our Process
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />

            </div>

            <h2 className="section-title text-[#0B2A6B] leading-tight text-4xl md:text-5xl">
              From Factory to{" "}
              <span className="text-[#FE5101]">
                Your Door
              </span>
            </h2>

            {/* Two-tone underline */}
            <div
              className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
              style={{ width: '72px' }}
            >
              <div className="flex-1" style={{ background: '#0B2A6B' }} />
              <div className="flex-1" style={{ background: '#FE5101' }} />
            </div>

            <p className="mt-3 max-w-[640px] mx-auto text-[14px] sm:text-[15px] text-slate-600">
              End-to-end logistics visibility from manufacturing units to final delivery.
            </p>

          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-[72px]">

            {/* CHINA */}
            <div>

              <div className="mb-10">

                <div className="inline-flex items-center gap-4 rounded-full bg-[#F4F7FF] px-6 py-4">

                  <div className="w-14 h-14 rounded-full bg-[#003DA5] text-white flex items-center justify-center">
                    <HiOutlineBuildingOffice2 size={26} />
                  </div>

                  <h3 className="font-semibold text-[#003DA5] text-[24px]">
                    From Factory / Warehouse
                  </h3>

                </div>

              </div>

              <div className="space-y-8">

                {CHINA_STEPS.map((step, i) => (
                  <ProcessCard
                    key={i}
                    step={step}
                    index={i + 1}
                    icon={CHINA_ICONS[i]}
                    accent="blue"
                  />
                ))}

              </div>

            </div>

            {/* INDIA */}
            <div>

              <div className="mb-10">

                <div className="inline-flex items-center gap-4 rounded-full bg-[#FFF5EF] px-6 py-4">

                  <div className="w-14 h-14 rounded-full bg-[#FE5101] text-white flex items-center justify-center">
                    <HiOutlineTruck size={26} />
                  </div>

                  <h3 className="font-semibold text-[#FE5101] text-[24px]">
                    From Port to Door
                  </h3>

                </div>

              </div>

              <div className="space-y-8">

                {INDIA_STEPS.map((step, i) => (
                  <ProcessCard
                    key={i}
                    step={step}
                    index={i + 5}
                    icon={INDIA_ICONS[i]}
                    accent="orange"
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      <TwoColumnSection
        {...CTIDDP_CONTENT2}
        initialLayout="content-right"
        showToggle={false}
        imageSrc="/images/howitworks/door-to-door-service-china-india-ctiddp.jpeg"
        imageAlt="Global Delivery"
      />

      {/* ══════════ TRUST BADGES ══════════ */}
      <WhychooseusSection />

    </main>
  )
}