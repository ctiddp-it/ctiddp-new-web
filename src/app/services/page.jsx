import { FaWhatsapp } from 'react-icons/fa6'
import {
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineCreditCard,
  HiOutlineMagnifyingGlass,
  HiOutlineBuildingStorefront,
  HiOutlineCube,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentCheck,
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
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import IconCard from '@/components/ui/IconCard'
import StepTimeline from '@/components/ui/StepTimeline'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'
import TrustPill from '@/components/ui/TrustPill'

export const metadata = {
  title: 'Our Services | DDP Shipping, Customs, QC & More | CTIDDP',
  description:
    'Explore CTIDDP services — DDP shipping, customs clearance, QC inspection, warehousing, supplier payments, last-mile delivery, and Canton Fair support.',
  openGraph: {
    title: 'Our Services | CTIDDP',
    description: 'End-to-end logistics services for China to India imports.',
    url: 'https://www.ctiddp.com/services/',
  },
  alternates: { canonical: 'https://www.ctiddp.com/services' },
}

const SERVICES = [
  {
    icon: <HiOutlineGlobeAlt size={22} />,
    title: 'Global DDP Shipping',
    description: 'End-to-end sea and air freight with all duties, taxes, and customs charges pre-paid. Your goods arrive at your doorstep, ready to use.',
    tags: ['SEA FREIGHT', 'AIR FREIGHT', 'DDP'],
    href: '/services/global-ddp-shipping',
  },
  {
    icon: <HiOutlineCreditCard size={22} />,
    title: 'Supplier Payments',
    description: 'Secure payment processing to your Chinese suppliers with buyer protection, currency management, and complete transaction transparency.',
    tags: ['SECURE', 'BUYER PROTECTION'],
    href: '/services/supplier-payments',
  },
  {
    icon: <HiOutlineMagnifyingGlass size={22} />,
    title: 'QC & Pre-Shipment Inspection',
    description: 'On-site quality checks at supplier facilities in China. Defect screening, sample verification, and compliance reporting before shipment.',
    tags: ['QUALITY', 'ON-SITE', 'REPORTS'],
    href: '/services/qc-inspection',
  },
  {
    icon: <HiOutlineBuildingStorefront size={22} />,
    title: 'Warehousing & Consolidation',
    description: 'Collect cargo from multiple suppliers, consolidate at our Guangzhou warehouse, and ship as one for significant cost savings.',
    tags: ['STORAGE', 'CONSOLIDATION', 'GUANGZHOU'],
    href: '/services/warehousing',
  },
  {
    icon: <HiOutlineShieldCheck size={22} />,
    title: 'Customs Clearance',
    description: 'Expert import customs clearance at all Indian ports. Compliant documentation, duty calculation, BCD & IGST handling included.',
    tags: ['ALL PORTS', 'COMPLIANT', 'BCD/IGST'],
    href: '/services/customs-clearance',
  },
  {
    icon: <HiOutlineTruck size={22} />,
    title: 'Last-Mile Delivery',
    description: 'Door-to-door delivery anywhere in India. Real-time tracking, proof of delivery, and dedicated support until cargo arrives.',
    tags: ['PAN-INDIA', 'TRACKED', 'POD'],
    href: '/services/last-mile-delivery',
  },
  {
    icon: <HiOutlineCube size={22} />,
    title: 'Multi-Vendor Consolidation',
    description: 'Combine shipments from multiple vendors into a single DDP shipment. Reduce per-unit freight costs significantly.',
    tags: ['COST-SAVING', 'MULTI-VENDOR'],
    href: '/services/multi-vendor-consolidation',
  },
  {
    icon: <HiOutlineCalendarDays size={22} />,
    title: 'Canton Fair Support',
    description: 'On-ground trade fair sourcing support in Guangzhou. We attend with you, negotiate, inspect, and ship everything DDP to India.',
    tags: ['GUANGZHOU', 'SOURCING', '2026'],
    href: '/services/canton-fair-support',
  },
]

const PROCESS_STEPS = [
  { icon: <HiOutlineChatBubbleLeftRight size={22} />, title: 'Supplier Coordination', description: 'We connect with your supplier directly.' },
  { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'QC & Inspection', description: 'Quality checks before shipment.' },
  { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehouse & Consolidation', description: 'Collected and combined in Guangzhou.' },
  { icon: <HiOutlineDocumentCheck size={22} />, title: 'Export Customs', description: 'China-side documentation and clearance.' },
  { icon: <HiOutlineGlobeAlt size={22} />, title: 'Sea/Air Freight', description: 'Tracked shipping to India.' },
  { icon: <HiOutlineShieldCheck size={22} />, title: 'Import Customs', description: 'Indian port clearance, duties pre-paid.' },
  { icon: <HiOutlineTruck size={22} />, title: 'Last Mile Delivery', description: 'Doorstep delivery with POD.' },
]

const WHY_STRIP = [
  { icon: <HiOutlineBuildingOffice2 size={20} />, text: 'Expert Team' },
  { icon: <HiOutlineCurrencyDollar size={20} />, text: 'Transparent Pricing' },
  { icon: <HiOutlineClock size={20} />, text: 'Real-time Tracking' },
  { icon: <HiOutlineShieldCheck size={20} />, text: 'Secure & Reliable' },
  { icon: <HiOutlineChatBubbleLeftRight size={20} />, text: '24/7 Support' },
]

const features = [
  {
    icon: ShieldCheck,
    title: "One Contract",
  },
  {
    icon: Eye,
    title: "100% Secure",
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

export default function ServicesPage() {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <section className="relative h-[50vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/services/ctiddp-services-hero.png"
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
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl">
                Everything You Need,
                <br />
                <span className="text-[#36a0f7]">
                  Under One Contract.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                From Factory gate in China to your doorstep in India -
                end-to-end logistics solutions, one accountable partner.
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

      {/* ══════════ SERVICES GRID ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>OUR SERVICES</SectionBadge>
            <h2 className="section-title">
              Comprehensive <span className="highlight">Logistics Solutions</span>
            </h2>
            <p className="section-subtitle centered">
              We handle every step of your import journey — from supplier coordination in China to last-mile delivery in India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc) => (
              <IconCard key={svc.href} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE STRIP ══════════ */}
      <section className="bg-primary py-6">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {WHY_STRIP.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white">
                <span className="opacity-80">{item.icon}</span>
                <span className="text-[13px] font-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>OUR PROCESS</SectionBadge>
            <h2 className="section-title">
              Simple Process. <span className="highlight">Complete Peace of Mind.</span>
            </h2>
          </div>

          <StepTimeline steps={PROCESS_STEPS} />

          <div className="flex flex-wrap gap-3 justify-center mt-10">
            <Button href="/quote" variant="primary" arrow>GET FREE QUOTE</Button>
            <Button href="https://wa.me/918790013772" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>
              WHATSAPP US
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title="Need All Services in <span class='text-primary-light'>One Go?</span>"
        subtitle="Get a complete DDP quote covering all services — shipping, customs, QC, warehousing, and delivery."
        buttons={[
          { label: 'GET FREE QUOTE NOW', href: '/quote', variant: 'primary' },
          { label: 'SPEAK TO OUR EXPERT', href: 'https://wa.me/918790013772', variant: 'secondary', external: true },
        ]}
      />
    </main>
  )
}