import dynamic from 'next/dynamic'
import {
  FaShip,
  FaMoneyBillWave,
  FaWarehouse,
  FaFileInvoiceDollar,
  FaTruck,
  FaBoxes,
  FaShieldAlt,
  FaChartLine,
  FaCamera,
  FaTags,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaExclamationTriangle,
} from 'react-icons/fa';
import Link from 'next/link';
import { FaGlobe, FaWhatsapp } from 'react-icons/fa6'
import CTABanner from '@/components/ui/CTABanner'
import HeroSection from '@/components/sections/HeroSection'
import DDPJourneyHighConversion from "@/components/sections/DDPJourneyHighConversion";
import Partners from '@/components/sections/Partners'
import CTABannerSection from '@/components/sections/ctabannersection';

const ReviewsCarousel = dynamic(() => import('@/components/sections/ReviewsCarousel'))

export const metadata = {
  title:
    'CTIDDP | Global Freight Forwarding, DDP Shipping & Import Solutions',
  description:
    'Simplify global sourcing and shipping with CTIDDP. DDP shipping, customs clearance, supplier payments, QC inspection, warehousing, consolidation, and last-mile delivery under one contract.',
  keywords: [
    'global freight forwarding',
    'DDP shipping services',
    'China to India DDP shipping',
    'international logistics company',
    'door to door shipping',
    'customs clearance services',
    'supplier payments China',
    'quality inspection services',
    'warehouse consolidation China',
    'multi vendor consolidation',
    'global shipping company India',
    'freight forwarder India',
    'cargo shipping services',
    'international import solutions',
    'end to end logistics provider',
    'cross border trade solutions',
    'China sourcing company',
    'import from China to India',
    'sea freight services',
    'air freight services',
    'last mile delivery India',
    'Canton Fair sourcing support',
    'global trade partner',
    'DDP logistics experts',
    'business import solutions',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.ctiddp.com/',
    title:
      'CTIDDP | Global Freight Forwarding & DDP Shipping Experts',
    description:
      'From supplier coordination to final delivery, CTIDDP handles sourcing, QC inspection, supplier payments, customs clearance, DDP shipping, and last-mile delivery worldwide.',
    url: 'https://www.ctiddp.com/',
    siteName: 'CTIDDP',
    type: 'website',
    images: [
      {
        url: 'https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png',
        width: 1200,
        height: 630,
        alt: 'CTIDDP Global Freight Forwarding & DDP Shipping',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CTIDDP | Global Freight Forwarding & DDP Shipping Experts',
    description:
      'One Contract. Zero Worry. Global sourcing, DDP shipping, customs clearance, supplier payments, warehousing, and delivery solutions.',
    images: [
      'https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png',
    ],
  },
}

const SERVICES = [
  {
    icon: <FaGlobe size={22} />,
    title: 'Global DDP Shipping',
    description: 'Our DDP (Delivered Duty Paid) shipping service covers sea and air freight with all duties, taxes, and compliance included. No hidden costs.',
    tags: ['SEA', 'AIR', 'DDP'],
    href: '/services/global-ddp-shipping',
  },
  {
    icon: <FaCamera size={22} />,
    title: 'QC & Inspection',
    description: 'We conduct AQL-based inspections, product testing, and packaging checks with photo/video reports. Ensure your shipment meets quality standards before dispatch.',
    tags: ['QUALITY', 'ON-SITE'],
    href: '/services/qc-inspection',
  },
  {
    icon: <FaBoxes size={22} />,
    title: 'Multi-Vendor Consolidation',
    description: 'We collect goods from different factories and consolidate them into a single shipment. This reduces freight costs, simplifies documentation, and speeds up delivery.',
    tags: ['COST-SAVING'],
    href: '/services/multi-vendor-consolidation',
  },
  {
    icon: <FaWarehouse size={22} />,
    title: 'Warehousing',
    description: 'Our warehouses in China & India support inventory storage, repacking, labeling, and dispatch planning for optimized logistics flow.',
    tags: ['STORAGE', 'CONSOLIDATION'],
    href: '/services/warehousing',
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: 'Customs Clearance',
    description: 'We handle BCD, IGST, HS code classification, and FTA benefits with accurate pre-calculation. Full compliance with Indian import regulations.',
    tags: ['COMPLIANT', 'ALL PORTS'],
    href: '/services/customs-clearance',
  },
  {
    icon: <FaTruck size={22} />,
    title: 'Last-Mile Delivery',
    description: 'From ports to final destination, we ensure secure last-mile delivery with POD confirmation, and express delivery timelines.',
    tags: ['LAST-MILE'],
    href: '/services/last-mile-delivery',
  },

  {
    icon: <FaMoneyBillWave size={22} />,
    title: 'Supplier Payments',
    description: 'We manage secure international supplier payments with full documentation, compliance, and traceability. Avoid fraud risks, currency fluctuations, and payment delays.',
    tags: ['SECURE', 'FAST'],
    href: '/services/supplier-payments',
  },
  {
    icon: <FaCalendarAlt size={22} />,
    title: 'Canton Fair Support',
    description: 'Our on-ground team assists with supplier negotiation, product verification, translation, and order management during Canton Fair events.',
    tags: ['SOURCING', 'GUANGZHOU'],
    href: '/services/canton-fair-support',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <HeroSection />

      {/* ══════════ KNOW BEFORE YOU SHIP ══════════ */}
      <section className="w-full px-4 pb-12 md:pb-20 md:px-8 bg-gray-50">

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#FE5101' }}></div>
              <div className="h-1 w-6 rounded-full mx-1" style={{ backgroundColor: '#003DA5' }}></div>
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#FE5101' }}></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
              What Does <span style={{ color: '#FE5101' }}>DDP</span> Mean For Your Shipment?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Most importers are surprised by what's NOT included in their shipping terms.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">

            {/* FOB Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <FaShip className="text-2xl" style={{ color: '#003DA5' }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#0B2A6B' }}>FOB</h3>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#FE5101' }}>Free On Board</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Seller loads goods onto the vessel. After that - sea freight, insurance, customs, duties, last-mile - all your responsibility.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#003DA5' }}>Status:</p>
                  <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <FaExclamationTriangle
                      className="flex-shrink-0"
                      style={{ color: "#F59E0B" }}
                    />
                    <span>Risk transfers at port</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CIF Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <FaShieldAlt className="text-2xl" style={{ color: '#003DA5' }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#0B2A6B' }}>CIF</h3>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#FE5101' }}>Cost, Insurance & Freight</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Seller handles sea freight and insurance. But you still handle Import customs, BCD+IGST payment, port formalities, and delivery.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#003DA5' }}>Status:</p>
                  <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <FaExclamationTriangle
                      className="flex-shrink-0"
                      style={{ color: "#F59E0B" }}
                    />
                    <span>Duties &amp; last-mile still yours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DDP Card - Featured */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 relative" style={{ borderColor: '#FE5101' }}>
              <div className="absolute top-0 right-0">
                <div className="px-4 py-1 text-white text-xs font-bold rounded-bl-lg" style={{ backgroundColor: '#FE5101' }}>
                  BEST VALUE
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#003DA5', color: 'white' }}>
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#0B2A6B' }}>DDP</h3>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#FE5101' }}>Delivered Duty Paid - WHAT WE DO</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  We handle everything: China export, sea freight, insurance, customs filing, BCD+IGST payment, and last-mile delivery. <strong>One invoice.</strong>
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#003DA5' }}>Status:</p>
                  <div
                    className="flex items-center gap-2 font-bold"
                    style={{ color: "#FE5101" }}
                  >
                    <FaCheckCircle className="flex-shrink-0" />
                    <span>We handle it all</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Service Banner - CTA Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-10" style={{ backgroundColor: '#F0F4FA' }}>
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-white shadow-md">
                    <FaTruck className="text-3xl" style={{ color: '#003DA5' }} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold" style={{ color: '#0B2A6B' }}>
                      DDP - Delivered Duty Paid
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base max-w-2xl">
                      China export → Sea freight → Insurance → Customs filing → BCD+IGST payment → Last-mile delivery
                    </p>
                  </div>
                </div>
                <Link prefetch={false}
                  href="/quote"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 hover:scale-105 transform whitespace-nowrap cursor-pointer"
                  style={{ backgroundColor: '#FE5101' }}
                >
                  Get a DDP Quote <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr style={{ backgroundColor: '#0B2A6B' }}>
                    <th className="p-4 text-left text-white font-semibold">Included Services</th>
                    <th className="p-4 text-center text-white font-semibold">FOB</th>
                    <th className="p-4 text-center text-white font-semibold">CIF</th>
                    <th className="p-4 text-center text-white font-semibold" style={{ backgroundColor: '#FE5101' }}>DDP</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">China export / loading</td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Sea freight & insurance</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Import customs clearance</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">BCD + IGST payment</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Port formalities</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Last-mile delivery</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center"><FaCheckCircle className="inline" style={{ color: '#003DA5' }} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Quote CTA */}
          <div className="text-center">
            <Link prefetch={false} href="/quote">
              <button
                className="inline-flex items-center cursor-pointer gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:shadow-xl"
                style={{ backgroundColor: '#003DA5' }}
              >
                <FaFileInvoiceDollar className="text-xl" />
                Request Your DDP Shipping Quote Today
              </button>
            </Link>

            <p className="text-sm text-gray-600 mt-4">
              One invoice. No hidden fees. No customs surprises. Door-to-door peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="w-full py-16 px-4 md:py-24 md:px-8">
        <div className="max-w-screen-2xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#FE5101' }}></div>
              <div className="h-1 w-6 rounded-full mx-1" style={{ backgroundColor: '#003DA5' }}></div>
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#FE5101' }}></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
              <span style={{ color: '#FE5101' }}>8 Ways</span> We Power Your Global Supply Chain
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              End-to-end logistics solutions tailored for your Business
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
                <Link prefetch={false}
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
                    <Link prefetch={false}
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
          <div className="mt-16 md:mt-20 text-center">
            <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: '#F0F4FA' }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#0B2A6B' }}>
                    Ready to optimize your supply chain?
                  </h3>
                  <p className="text-gray-700">
                    Get a free consultation and custom quote for your business needs.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link prefetch={false}
                    href="/quote"
                    className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap cursor-pointer"
                    style={{ backgroundColor: '#FE5101' }}
                  >
                    Get a Free Quote
                  </Link>
                  <Link prefetch={false}
                    href="/contact"
                    className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap cursor-pointer"
                    style={{ backgroundColor: '#003DA5' }}
                  >
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <FaShieldAlt style={{ color: '#003DA5' }} />
              <span className="text-sm text-gray-600">100% Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine style={{ color: '#003DA5' }} />
              <span className="text-sm text-gray-600">End-to-End Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCamera style={{ color: '#003DA5' }} />
              <span className="text-sm text-gray-600">Photo/Video Reports</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTags style={{ color: '#003DA5' }} />
              <span className="text-sm text-gray-600">No Hidden Costs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ONE CONTRACT- ZERO WORRY ══════════ */}
      <DDPJourneyHighConversion />

      {/* ══════════ TESTIMONIALS ══════════ */}
      <ReviewsCarousel />

      {/* ══════════ PARTNERS ══════════ */}
      <Partners />

      {/* ══════════ CTA ══════════ */}
      <CTABannerSection />
    </main>
  )
}