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
  FaShieldAlt,
  FaChartLine,
  FaCamera,
  FaTags,
  FaArrowRight,
} from 'react-icons/fa';
import {
  ShieldCheck,
  Eye,
  Truck,
  FileCheck,
  FileCheck2,
  CircleDollarSign,
  Building2,
  Clock3,
  HeadphonesIcon,
  ArrowRight,
  Phone,
  Globe,
  Ship,
} from "lucide-react";
import Link from 'next/link'

export const metadata = {
  title:
    'Our Services | Shipping, Customs Clearance & Global Delivery',

  description:
    'Explore CTIDDP’s end-to-end logistics services including DDP shipping, customs clearance, QC inspection, supplier payments, warehousing, consolidation, last-mile delivery, and Canton Fair sourcing support.',

  keywords: [
    'logistics services',
    'DDP shipping services',
    'global freight forwarding',
    'customs clearance services',
    'supplier payments China',
    'quality inspection services',
    'warehousing and consolidation',
    'last mile delivery India',
    'multi vendor consolidation',
    'Canton Fair sourcing support',
    'international logistics company',
    'freight forwarding India',
    'global trade solutions',
    'door to door shipping',
    'end to end import services',
    'China sourcing services',
    'supply chain solutions',
    'cargo consolidation services'
  ],

  openGraph: {
    title:
      'CTIDDP Logistics Services | End-to-End Import & Shipping Solutions',
    description:
      'Discover CTIDDP’s complete logistics ecosystem covering shipping, customs, inspections, supplier payments, warehousing, and delivery.',
    url: 'https://www.ctiddp.com/services/',
    siteName: 'CTIDDP',
    type: 'website',    
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'CTIDDP Logistics Services',
    description:
      'Complete import, sourcing, shipping and logistics solutions under one contract.',    
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/services'
  }
};

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
    description: 'Door-to-door delivery. Real-time updates, proof of delivery, and dedicated support until cargo arrives.',
    tags: ['REAL-TIME UPDATES','POD'],
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
    title: 'Trade Fair Support',
    description: 'On-ground trade fair sourcing support. We attend with you, negotiate, inspect, and ship everything DDP.',
    tags: ['GUANGZHOU', 'SOURCING'],
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
    title: "Cross-Border DDP",
  },
  {
    icon: Eye,
    title: "Multi-Vendor Consolidation",
  },
  {
    icon: FileCheck,
    title: "Customs Compliant",
  },
  {
    icon: Truck,
    title: "Global Delivery Network",
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
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@graph": [

              {
                "@type": "WebPage",

                "@id":
                  "https://www.ctiddp.com/services/#webpage",

                "url":
                  "https://www.ctiddp.com/services/",

                "name":
                  "CTIDDP Logistics Services",

                "description":
                  "Explore CTIDDP's comprehensive logistics and global trade services."
              },

              {
                "@type": "ItemList",

                "@id":
                  "https://www.ctiddp.com/services/#services",

                "name":
                  "CTIDDP Service Portfolio",

                "numberOfItems": 8,

                "itemListElement": [

                  {
                    "@type": "Service",
                    "position": 1,
                    "name": "Global DDP Shipping"
                  },

                  {
                    "@type": "Service",
                    "position": 2,
                    "name": "Supplier Payments"
                  },

                  {
                    "@type": "Service",
                    "position": 3,
                    "name": "QC & Pre-Shipment Inspection"
                  },

                  {
                    "@type": "Service",
                    "position": 4,
                    "name": "Warehousing & Consolidation"
                  },

                  {
                    "@type": "Service",
                    "position": 5,
                    "name": "Customs Clearance"
                  },

                  {
                    "@type": "Service",
                    "position": 6,
                    "name": "Last-Mile Delivery"
                  },

                  {
                    "@type": "Service",
                    "position": 7,
                    "name": "Multi-Vendor Consolidation"
                  },

                  {
                    "@type": "Service",
                    "position": 8,
                    "name": "Canton Fair Support"
                  }
                ]
              },

              {
                "@type": "Organization",

                "@id":
                  "https://www.ctiddp.com/#organization",

                "name":
                  "CTIDDP",

                "url":
                  "https://www.ctiddp.com",

                "logo":
                  "https://www.ctiddp.com/images/CTIDDP-LOGO%20Social%20Media.png",

                "telephone":
                  "+91-8790018787",

                "email":
                  "info@ctiddp.com"
              },

              {
                "@type": "BreadcrumbList",

                "@id":
                  "https://www.ctiddp.com/services/#breadcrumb",

                "itemListElement": [

                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.ctiddp.com/"
                  },

                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.ctiddp.com/services/"
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
                  Our Services
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
                From Factory gate in China to your doorstep.
                End-to-end logistics solutions, one accountable partner.
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
      <section className="w-full py-16 px-4 md:py-24 md:px-8">
        <div className="max-w-screen-2xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
              <span
                className="font-semibold text-[12px] tracking-[0.18em] uppercase"
                style={{ color: '#FE5101' }}
              >
                Our Services
              </span>
              <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            </div>


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
              Comprehensive Logistics <span style={{ color: '#FE5101' }}>Services</span>
            </h2>
            {/* Two-tone underline */}
            <div
              className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
              style={{ width: '72px' }}
            >
              <div className="flex-1" style={{ background: '#0B2A6B' }} />
              <div className="flex-1" style={{ background: '#FE5101' }} />
            </div>

            <p className="text-lg md:text-md text-gray-700 max-w-3xl mx-auto">
              We handle every step of your import journey with precision, transparency, and reliability.
            </p>


          </div>
          {/* Services Grid - 4 columns on large, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Desktop & Tablet: Entire card clickable */}
                <Link
                  href={service.href}
                  className="hidden md:block absolute inset-0 z-10"
                  aria-label={`View ${service.title} service details`}
                />

                <div className="p-6 flex flex-col h-full">
                  {/* Icon Section */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rounded-full"
                    style={{ backgroundColor: "#003DA5" }}
                  >
                    <div className="text-white text-2xl">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3 transition-colors"
                    style={{ color: "#0B2A6B" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: "#F0F4FA",
                          color: "#003DA5",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Section */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    {/* Mobile: Real clickable link */}
                    <Link
                      href={service.href}
                      className="md:hidden inline-flex items-center gap-2 font-semibold transition-all"
                      style={{ color: "#FE5101" }}
                    >
                      View Service Details
                      <FaArrowRight className="text-xs" />
                    </Link>

                    {/* Desktop: Visual CTA only (card itself is clickable) */}
                    <div
                      className="hidden md:flex items-center gap-2 font-semibold"
                      style={{ color: "#FE5101" }}
                    >
                      <span>View Service Details</span>
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#FE5101" }}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div
            className="mt-16 md:mt-20 rounded-[24px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0B2A6B 0%, #003DA5 100%)",
            }}
          >
            <div className="px-6 py-8 lg:px-10 lg:py-10">

              {/* Small Label */}
              <div className="mb-8">
                <span className="text-white text-xs font-bold uppercase tracking-[0.18em]">
                  WHY CHOOSE CTIDDP?
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">

                {[
                  {
                    title: "Expert Team",
                    desc: "Logistics experts with 10+ years of experience",
                    icon: <Building2 className="h-8 w-8" />,
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden charges, 100% clear process",
                    icon: <CircleDollarSign className="h-8 w-8" />,
                  },
                  {
                    title: "Real-time Updates",
                    desc: "Live updates at every step of shipment",
                    icon: <Clock3 className="h-8 w-8" />,
                  },
                  {
                    title: "Secure & Reliable",
                    desc: "Your cargo is our responsibility",
                    icon: <FileCheck2 className="h-8 w-8" />,
                  },
                  {
                    title: "Dedicated Support",
                    desc: "We're always here when you need us",
                    icon: <HeadphonesIcon className="h-8 w-8" />,
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 lg:px-6 ${index !== 4
                      ? "lg:border-r lg:border-white/15"
                      : ""
                      }`}
                  >
                    <div className="text-white shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-[15px] mb-1">
                        {item.title}
                      </h4>

                      <p className="text-white/75 text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}