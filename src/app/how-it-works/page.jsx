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
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import StepTimeline from '@/components/ui/StepTimeline'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'
import TrustPill from '@/components/ui/TrustPill'
import Image from 'next/image'

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

export default function HowItWorksPage() {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <PageHero
        badge="OUR PROCESS"
        subtitle="From supplier pickup in China to doorstep delivery in India — we handle everything under one contract. No middlemen, no surprises."
        bgImage="/images/services/ian-taylor-jOqJbvo1P9g-unsplash.jpeg"
        titleNode={
          <>
            One Contract.
            <br />
            <span className="text-primary-light">Zero Worry.</span>
          </>
        }
      >
        <div className="flex flex-wrap gap-3 mb-6">
          <TrustPill text="End-to-End Control" light />
          <TrustPill text="100% Transparency" light />
          <TrustPill text="On-time Delivery" light />
          <TrustPill text="Customs Compliant" light />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/quote" variant="primary" arrow>GET FREE QUOTE</Button>
          <Button href="https://wa.me/918790013772" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>
            WHATSAPP US
          </Button>
        </div>
      </PageHero>

      {/* ══════════ THE DDP JOURNEY ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>THE DDP JOURNEY</SectionBadge>
            <h2 className="section-title">
              How It <span className="highlight">Works</span>
            </h2>
            <p className="section-subtitle centered">
              Your shipment goes through 7 managed stages — each handled by our team.
            </p>
          </div>

          <StepTimeline steps={DDP_STEPS} />

          {/* Transit time bar */}
          <div className="mt-8 bg-primary-50 border border-primary-100 rounded-xl py-3 px-5 flex items-center justify-center gap-2 text-center">
            <HiOutlineClock size={18} className="text-primary" />
            <span className="text-[14px] font-600 text-gray-800">
              Total Transit Time: <span className="text-primary">38–60 days</span> (sea) · <span className="text-primary">10–15 days</span> (air)
            </span>
          </div>
        </div>
      </section>

      {/* ══════════ COMPLETE DDP SOLUTION ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <SectionBadge>DELIVERED DUTY PAID</SectionBadge>
              <h2 className="section-title">
                Complete Door-to-Door <span className="highlight">Import Solution</span>
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-5">
                Our DDP model means you receive goods at your doorstep with all duties, taxes, and logistics costs already paid. No customs hassles, no surprise charges.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Complete logistics management from factory to door',
                  'All customs duties (BCD, IGST) pre-paid and included',
                  'No advance payment to suppliers until QC approved',
                  'Real-time tracking at every shipment stage',
                  'On-ground support teams in China and India',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-primary text-[11px] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/quote" variant="primary" arrow>GET FREE QUOTE</Button>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <Image
                src="/images/home/china-to-india-ddp-shipping-warehouse.webp"
                alt="DDP Shipping Warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FACTORY TO DOOR ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>FROM START TO FINISH</SectionBadge>
            <h2 className="section-title">
              From Factory to <span className="highlight">Your Door</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* China Side */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <h3 className="text-[16px] font-600 text-gray-900">From Factory / Warehouse (China)</h3>
              </div>
              <div className="space-y-4">
                {CHINA_STEPS.map((step, i) => (
                  <div key={i} className="card p-5 border-l-4 border-l-primary">
                    <div className="text-[10px] font-700 text-primary tracking-wider mb-1">STEP {String(i + 1).padStart(2, '0')}</div>
                    <h4 className="text-[15px] font-600 text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* India Side */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-orange" />
                <h3 className="text-[16px] font-600 text-gray-900">From Port to Door (India)</h3>
              </div>
              <div className="space-y-4">
                {INDIA_STEPS.map((step, i) => (
                  <div key={i} className="card p-5 border-l-4 border-l-orange">
                    <div className="text-[10px] font-700 text-orange tracking-wider mb-1">STEP {String(i + 5).padStart(2, '0')}</div>
                    <h4 className="text-[15px] font-600 text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST BADGES ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-10">
            <SectionBadge>WHY IMPORTERS CHOOSE CTIDDP</SectionBadge>
            <h2 className="section-title">
              Simple. <span className="highlight">Predictable.</span> Reliable.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="card p-5 text-center group">
                <div className="icon-container icon-container-sm mx-auto mb-3 group-hover:bg-primary-100">
                  {item.icon}
                </div>
                <h4 className="text-[14px] font-600 text-gray-900 mb-1">{item.title}</h4>
                <p className="text-[12px] text-gray-500">{item.desc}</p>
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