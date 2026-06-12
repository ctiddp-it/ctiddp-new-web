import { FaWhatsapp } from 'react-icons/fa6'
import {
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineBuildingStorefront,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentCheck,
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
import StepTimeline from '@/components/ui/StepTimeline'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import TwoColumnSection from "@/components/sections/TwoColumnSection"

export const metadata = {
  title: 'How DDP Shipping Works | China to India | CTIDDP',
  description:
    'Understand the complete DDP shipping process from China to India. Supplier coordination, QC inspection, consolidation, customs clearance, and last-mile delivery.',
  openGraph: {
    title: 'How DDP Shipping Works | China to India | CTIDDP',
    description: 'Complete DDP shipping process from China to India explained step by step.',
    url: 'https://www.ctiddp.com/how-it-works/',
  },
  alternates: { canonical: 'https://www.ctiddp.com/how-it-works' },
}

const DDP_STEPS = [
  { icon: <HiOutlineChatBubbleLeftRight size={22} />, title: 'Supplier Coordination', description: 'We connect with your supplier and verify shipment readiness.' },
  { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'QC Inspection', description: 'On-site quality checks at supplier facilities (optional).' },
  { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Consolidation', description: 'Collect and combine cargo at our Guangzhou warehouse.' },
  { icon: <HiOutlineDocumentCheck size={22} />, title: 'Export Customs', description: 'Complete China export documentation and clearance.' },
  { icon: <HiOutlineGlobeAlt size={22} />, title: 'Sea/Air Freight', description: 'Ocean or air transport with real-time tracking.' },
  { icon: <HiOutlineShieldCheck size={22} />, title: 'Import Customs', description: 'India import clearance with all duties pre-paid.' },
  { icon: <HiOutlineTruck size={22} />, title: 'Last Mile Delivery', description: 'Door delivery anywhere in India with POD.' },
]

const CHINA_STEPS = [
  { title: 'Vendor Coordination', desc: 'Direct communication with your suppliers to verify order readiness, packaging, and documentation.' },
  { title: 'Product Inspection', desc: 'On-site quality checks, sample verification, and defect screening at the factory.' },
  { title: 'Cargo Consolidation', desc: 'Multi-vendor cargo collected and consolidated at our Guangzhou warehouse.' },
  { title: 'Export Customs', desc: 'Complete export documentation, HS code verification, and Chinese customs clearance.' },
]

const INDIA_STEPS = [
  { title: 'Ocean/Air Freight', desc: 'Sea or air shipment with real-time tracking, insurance coverage, and vessel monitoring.' },
  { title: 'Import Customs', desc: 'Complete Indian customs clearance — BCD, IGST, and all duties handled and pre-paid.' },
  { title: 'Last-Mile Delivery', desc: 'Door-to-door delivery across India — PAN-India coverage with partner carriers.' },
  { title: 'Proof of Delivery', desc: 'Digital POD, invoice closure, and post-delivery support for next shipment cycle.' },
]

const TRUST_ITEMS = [
  { icon: <HiOutlineDocumentCheck size={18} />, title: 'One Contract', desc: 'Single agreement covers the entire process.' },
  { icon: <HiOutlineCurrencyDollar size={18} />, title: 'No Hidden Costs', desc: 'Transparent pricing, always.' },
  { icon: <HiOutlineBuildingOffice2 size={18} />, title: 'Expert Team', desc: 'On-ground in China and India.' },
  { icon: <HiOutlineClock size={18} />, title: 'Real-time Updates', desc: 'Track every stage of your shipment.' },
  { icon: <HiOutlineChatBubbleLeftRight size={18} />, title: '24/7 Support', desc: 'Dedicated account manager.' },
]

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

export default function HowItWorksPage() {
  return (
    <main>
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
                One Contract.
                <br />
                <span className=" text-[#36a0f7]">
                  Zero Worry.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                CTIDDP is a specialized end-to-end DDP logistics partner helping businesses move goods seamlessly from China to India with complete transparency.
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
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Header - Centered */}
          <div className="mb-16 text-center">
            {/* Badge */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[2px] w-10 bg-[#0181EA]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0181EA]">
                THE DDP JOURNEY
              </span>
              <div className="h-[2px] w-10 bg-[#0181EA]" />
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#0B1B3A] md:text-5xl">
              How It <span className="text-[#0181EA]">Works</span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              Your shipment goes through 7 managed stages — each handled by our team
              with full visibility and control.
            </p>
          </div>

          {/* Timeline Container - Full width, open design */}
          <div className="relative w-full rounded-2xl border border-gray-100 bg-white px-4 py-12 shadow-sm md:px-8 lg:px-12">
            {/* Accent glow line */}
            <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-2xl bg-[#0181EA]" />

            <StepTimeline steps={DDP_STEPS} />
          </div>

          {/* Transit Time Card */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 rounded-xl border border-[#0181EA]/20 bg-[#0181EA]/5 px-6 py-4 shadow-sm">
              <HiOutlineClock className="text-[#0181EA]" size={20} />

              <p className="text-sm font-medium text-gray-800 md:text-base">
                Total Transit Time:
                <span className="ml-2 font-semibold text-[#0181EA]">
                  38–60 days
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="font-semibold text-[#0181EA]">
                  10–15 days (air)
                </span>
              </p>
            </div>
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

      {/* ══════════ FACTORY TO DOOR ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">

          {/* Header */}
          <div className="text-center mb-14">
            {/* Badge  */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[2px] w-10 bg-[#0181EA]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0181EA]">
                FROM START TO FINISH
              </span>
              <div className="h-[2px] w-10 bg-[#0181EA]" />
            </div>
            <h2 className="section-title">
              From Factory to <span className="text-[#0181EA]">Your Door</span>
            </h2>
            <p className="text-gray-500 mt-3 text-[14px] max-w-2xl mx-auto">
              End-to-end logistics visibility from China manufacturing units to final delivery in India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

            {/* ================= CHINA SIDE ================= */}
            <div className="relative">

              {/* Side Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-3 h-3 rounded-full bg-[#0181EA]" />
                <h3 className="text-[16px] font-semibold text-gray-900">
                  From Factory / Warehouse (China)
                </h3>
              </div>

              {/* Vertical line */}
              <div className="absolute left-[6px] top-12 bottom-0 w-[2px] bg-[#0181EA]/20" />

              <div className="space-y-6">
                {CHINA_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className="relative pl-6 bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                  >
                    {/* Dot */}
                    <span className="absolute left-[-2px] top-6 w-3 h-3 rounded-full bg-[#0181EA]" />

                    <div className="text-[10px] font-bold text-[#0181EA] tracking-widest mb-1">
                      STEP {String(i + 1).padStart(2, '0')}
                    </div>

                    <h4 className="text-[15px] font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h4>

                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= INDIA SIDE ================= */}
            <div className="relative">

              {/* Side Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-3 h-3 rounded-full bg-[#0181EA]" />
                <h3 className="text-[16px] font-semibold text-gray-900">
                  From Port to Door (India)
                </h3>
              </div>

              {/* Vertical line */}
              <div className="absolute left-[6px] top-12 bottom-0 w-[2px] bg-[#0181EA]/20" />

              <div className="space-y-6">
                {INDIA_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className="relative pl-6 bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                  >
                    {/* Dot */}
                    <span className="absolute left-[-2px] top-6 w-3 h-3 rounded-full bg-[#0181EA]" />

                    <div className="text-[10px] font-bold text-[#0181EA] tracking-widest mb-1">
                      STEP {String(i + 5).padStart(2, '0')}
                    </div>

                    <h4 className="text-[15px] font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h4>

                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
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

      {/* ══════════ TRUST BADGES ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">

          {/* Header */}
          <div className="text-center mb-12">
             {/* Badge  */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[2px] w-10 bg-[#0181EA]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0181EA]">
                WHY IMPORTERS CHOOSE US
              </span>
              <div className="h-[2px] w-10 bg-[#0181EA]" />
            </div>

            <h2 className="section-title">
              Simple. <span className="text-[#0181EA]">Predictable.</span> Reliable.
            </h2>

            <p className="text-gray-500 text-[14px] mt-3 max-w-2xl mx-auto">
              Built for importers who need clarity, control, and consistency in every shipment.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">

            {TRUST_ITEMS.map((item) => (
              <div
                key={item.title}
                className="relative bg-white border border-gray-100 rounded-xl p-5 text-center
                     shadow-sm hover:shadow-md transition group overflow-hidden"
              >

                {/* subtle top accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0181EA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                {/* Icon */}
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center
                       rounded-full bg-[#0181EA]/10 text-[#0181EA]
                       group-hover:bg-[#0181EA] group-hover:text-white transition"
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-[14px] font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title="Ready to Experience <span class='text-primary-light'>Hassle-Free Imports?</span>"
        subtitle="Get a complete DDP quote with transparent pricing in under 2 hours."
        bgImage="/images/services/aerial-view-commercial-dock.jpeg"
        buttons={[
          { label: 'GET FREE QUOTE', href: '/quote', variant: 'primary' },
          { label: 'CHAT ON WHATSAPP', href: 'https://wa.me/918790013772', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
        ]}
      />
    </main>
  )
}