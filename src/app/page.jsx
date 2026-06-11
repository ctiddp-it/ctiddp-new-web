import dynamic from 'next/dynamic'
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
  HiOutlineClipboardDocumentCheck,
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa6'
import StatBar from '@/components/ui/StatBar'
import SectionBadge from '@/components/ui/SectionBadge'
import IconCard from '@/components/ui/IconCard'
import StepTimeline from '@/components/ui/StepTimeline'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'
import TrustPill from '@/components/ui/TrustPill'

import HeroSection from '@/components/sections/HeroSection'

const Partners = dynamic(() => import('@/components/sections/Partners'))
const ReviewsCarousel = dynamic(() => import('@/components/sections/ReviewsCarousel'))

export const metadata = {
  title: 'CTIDDP — China to India DDP Shipping Specialists | End-to-End Logistics',
  description:
    'End-to-end China to India DDP shipping. Sea & air freight, customs clearance, QC inspection, warehousing, supplier payments, and last-mile PAN-India delivery. All duties pre-paid. Zero hidden charges.',
  openGraph: {
    title: 'CTIDDP — China to India DDP Shipping Specialists',
    description: 'End-to-end DDP freight from China to India. All duties pre-paid. Zero surprises.',
    url: 'https://www.ctiddp.com/',
  },
}

/* ── DATA ── */
const HERO_STATS = [
  { value: '500', suffix: '+', label: 'Importers Served' },
  { value: '1200', suffix: '+', label: 'Shipments Delivered' },
  { value: '100', suffix: '%', label: 'Customs Compliant' },
  { value: '24', suffix: '/7', label: 'Support Available' },
]

const PROCESS_STEPS = [
  {
    icon: <HiOutlineClipboardDocumentCheck size={22} />,
    title: 'Share Your Details',
    description: 'Tell us about your shipment requirements.',
  },
  {
    icon: <HiOutlineCube size={22} />,
    title: 'We Pick Up',
    description: "We collect cargo from your supplier's location in China.",
  },
  {
    icon: <HiOutlineGlobeAlt size={22} />,
    title: 'We Ship',
    description: 'Sea or air freight with full tracking and insurance.',
  },
  {
    icon: <HiOutlineShieldCheck size={22} />,
    title: 'Customs Clearance',
    description: 'Complete import clearance with all duties pre-paid.',
  },
  {
    icon: <HiOutlineTruck size={22} />,
    title: 'Doorstep Delivery',
    description: 'Last-mile delivery anywhere in India.',
  },
]

const SERVICES = [
  {
    icon: <HiOutlineGlobeAlt size={22} />,
    title: 'Global DDP Shipping',
    description: 'End-to-end sea and air freight with all duties, taxes, and customs charges pre-paid.',
    tags: ['SEA', 'AIR', 'DDP'],
    href: '/services/global-ddp-shipping',
  },
  {
    icon: <HiOutlineCreditCard size={22} />,
    title: 'Supplier Payments',
    description: 'Secure payment processing to your Chinese suppliers with full protection.',
    tags: ['SECURE', 'FAST'],
    href: '/services/supplier-payments',
  },
  {
    icon: <HiOutlineMagnifyingGlass size={22} />,
    title: 'QC & Inspection',
    description: 'On-site quality checks and pre-shipment inspections at supplier facilities.',
    tags: ['QUALITY', 'ON-SITE'],
    href: '/services/qc-inspection',
  },
  {
    icon: <HiOutlineBuildingStorefront size={22} />,
    title: 'Warehousing & Consolidation',
    description: 'Collect and consolidate cargo from multiple suppliers at our Guangzhou warehouse.',
    tags: ['STORAGE', 'CONSOLIDATION'],
    href: '/services/warehousing',
  },
  {
    icon: <HiOutlineShieldCheck size={22} />,
    title: 'Customs Clearance',
    description: 'Expert import customs clearance at all Indian ports with compliant documentation.',
    tags: ['COMPLIANT', 'ALL PORTS'],
    href: '/services/customs-clearance',
  },
  {
    icon: <HiOutlineTruck size={22} />,
    title: 'Last-Mile Delivery',
    description: 'Door-to-door delivery across India with real-time tracking and proof of delivery.',
    tags: ['PAN-INDIA', 'TRACKED'],
    href: '/services/last-mile-delivery',
  },
  {
    icon: <HiOutlineCube size={22} />,
    title: 'Multi-Vendor Consolidation',
    description: 'Combine shipments from multiple vendors into a single DDP shipment for cost savings.',
    tags: ['COST-SAVING'],
    href: '/services/multi-vendor-consolidation',
  },
  {
    icon: <HiOutlineCalendarDays size={22} />,
    title: 'Canton Fair Support',
    description: 'On-ground trade fair sourcing, inspection, and shipping support in Guangzhou.',
    tags: ['SOURCING', 'GUANGZHOU'],
    href: '/services/canton-fair-support',
  },
]

const WHY_CHOOSE = [
  {
    icon: <HiOutlineDocumentCheck size={22} />,
    title: 'One Contract',
    description: 'Single agreement covers pickup, shipping, customs, duties, and delivery.',
  },
  {
    icon: <HiOutlineCurrencyDollar size={22} />,
    title: 'Transparent Pricing',
    description: 'Complete cost breakdown upfront. No hidden fees, no surprise charges.',
  },
  {
    icon: <HiOutlineTruck size={22} />,
    title: 'On-Time Delivery',
    description: '99% on-time delivery rate with real-time tracking at every stage.',
  },
  {
    icon: <HiOutlineChatBubbleLeftRight size={22} />,
    title: 'Dedicated Support',
    description: 'Personal account manager assigned to every shipment, available 24/7.',
  },
  {
    icon: <HiOutlineBuildingOffice2 size={22} />,
    title: 'China & India Offices',
    description: 'Local teams in Guangzhou, Vizag, Chennai, and Bangalore for on-ground support.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <HeroSection />

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>HOW IT WORKS</SectionBadge>
            <h2 className="section-title">
              Simple Process. <span className="highlight">Seamless Delivery.</span>
            </h2>
            <p className="section-subtitle centered">
              From your order in China to delivery at your doorstep in India — in 5 simple steps.
            </p>
          </div>

          <StepTimeline steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>OUR SERVICES</SectionBadge>
            <h2 className="section-title">
              End-to-End <span className="highlight">Logistics Solutions</span>
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

          <div className="text-center mt-10">
            <Button href="/services" variant="secondary" arrow>
              VIEW ALL SERVICES
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE CTIDDP ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>WHY CHOOSE CTIDDP</SectionBadge>
            <h2 className="section-title">
              Your Success. <span className="highlight">Our Commitment.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="card p-5 text-center group">
                <div className="icon-container mx-auto mb-4 group-hover:bg-primary-100">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-600 text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <ReviewsCarousel />

      {/* ══════════ PARTNERS ══════════ */}
      <Partners />

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title="Ready to Ship from <span class='text-primary-light'>China to India?</span>"
        subtitle="Get a complete DDP quote in under 2 hours. No hidden costs, no surprises."
        bgImage="/images/services/aerial-view-commercial-dock.jpeg"
        buttons={[
          { label: 'GET FREE QUOTE', href: '/quote', variant: 'primary' },
          {
            label: 'CHAT ON WHATSAPP',
            href: 'https://wa.me/918790013772',
            variant: 'whatsapp',
            icon: <FaWhatsapp size={18} />,
            external: true,
          },
        ]}
      />
    </main>
  )
}