'use client'

import { FaWhatsapp } from 'react-icons/fa6'
import {
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineCreditCard,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineBuildingStorefront,
  HiOutlineChartBarSquare,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
  HiOutlineComputerDesktop,
} from 'react-icons/hi2'
import dynamic from 'next/dynamic'
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import StepTimeline from '@/components/ui/StepTimeline'
import IconCard from '@/components/ui/IconCard'
import CTABanner from '@/components/ui/CTABanner'
import StatBar from '@/components/ui/StatBar'
import Button from '@/components/ui/Button'
import TrustPill from '@/components/ui/TrustPill'

const HERO_STATS = [
  { value: '5000', suffix: '+', label: 'Businesses Served' },
  { value: '60', suffix: '+', label: 'Global Markets' },
  { value: '100', suffix: '%', label: 'Client Retention' },
  { value: '24', suffix: '/7', label: 'Support Available' },
]

const JOURNEY_STEPS = [
  { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'Supplier Discovery', description: 'Find verified suppliers across China.' },
  { icon: <HiOutlineCreditCard size={22} />, title: 'Verification & Payment', description: 'Supplier vetting and secure payment.' },
  { icon: <HiOutlineCube size={22} />, title: 'Procurement & Consolidation', description: 'QC, packaging, and warehouse consolidation.' },
  { icon: <HiOutlineGlobeAlt size={22} />, title: 'Shipping & Customs', description: 'DDP sea/air freight with customs clearance.' },
  { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehouse Delivery', description: 'Last-mile delivery to your facility.' },
  { icon: <HiOutlineShieldCheck size={22} />, title: 'Execution & Support', description: 'Post-delivery support and repeat orders.' },
]

const WHY_CARDS = [
  { icon: <HiOutlineChartBarSquare size={22} />, title: 'Reduce Costs', description: 'Consolidated shipping and transparent pricing reduce your per-unit import costs significantly.' },
  { icon: <HiOutlineShieldCheck size={22} />, title: 'Minimize Risks', description: 'Supplier verification, QC inspection, and buyer protection at every stage.' },
  { icon: <HiOutlineGlobeAlt size={22} />, title: 'Scale Faster', description: 'Standardized processes let you scale from 1 shipment to 100 without additional overhead.' },
  { icon: <HiOutlineTruck size={22} />, title: 'End-to-End Control', description: 'Single platform for sourcing, shipping, customs, and delivery — full visibility at every stage.' },
]

const SOLUTIONS = [
  { icon: <HiOutlineUserGroup size={22} />, title: 'Importers & Traders', description: 'End-to-end DDP logistics for regular importers looking for reliable China-to-India shipping.' },
  { icon: <HiOutlineBuildingOffice2 size={22} />, title: 'Manufacturers', description: 'Raw material and component sourcing from Chinese suppliers with QC and DDP delivery.' },
  { icon: <HiOutlineCube size={22} />, title: 'Project Buyers', description: 'One-time or project-based imports with full sourcing, inspection, and logistics support.' },
  { icon: <HiOutlineTruck size={22} />, title: 'Distributors & Retailers', description: 'Bulk imports with warehousing, consolidation, and last-mile delivery across India.' },
  { icon: <HiOutlineComputerDesktop size={22} />, title: 'E-commerce Sellers', description: 'Product sourcing, quality checks, and reliable shipping for online business inventory.' },
]

export default function EcosystemClient() {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <PageHero
        badge="INTEGRATED TRADE ECOSYSTEM"
        subtitle="A single platform connecting sourcing, verification, logistics, and delivery — designed for businesses importing from China to India."
        bgImage="/images/services/aerial-view-commercial-dock.jpeg"
        titleNode={
          <>
            One Platform.
            <br />
            <span className="text-primary-light">Endless Global Opportunities.</span>
          </>
        }
        bottomContent={<StatBar stats={HERO_STATS} />}
      >
        <div className="flex flex-wrap gap-3 mb-6">
          <TrustPill text="Seamless Operations" light />
          <TrustPill text="Real-Time Visibility" light />
          <TrustPill text="Cost Efficiency" light />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/quote" variant="primary" arrow>JOIN AS A BUYER</Button>
          <Button href="https://wa.me/918790013772" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>
            TALK TO US
          </Button>
        </div>
      </PageHero>

      {/* ══════════ ECOSYSTEM JOURNEY ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>OUR ECOSYSTEM JOURNEY</SectionBadge>
            <h2 className="section-title">
              How Our Ecosystem <span className="highlight">Works</span>
            </h2>
            <p className="section-subtitle centered">
              From supplier discovery to final delivery — a seamless 6-step process.
            </p>
          </div>
          <StepTimeline steps={JOURNEY_STEPS} />
        </div>
      </section>

      {/* ══════════ WHY BUSINESSES CHOOSE US ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>WHY BUSINESSES CHOOSE US</SectionBadge>
            <h2 className="section-title">
              Built for Global <span className="highlight">Trade Success</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CARDS.map((card) => (
              <div key={card.title} className="card p-6 text-center group">
                <div className="icon-container mx-auto mb-4 group-hover:bg-primary-100">{card.icon}</div>
                <h3 className="text-[16px] font-600 text-gray-900 mb-2">{card.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SOLUTIONS FOR EVERY BUSINESS ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>WHO IT&apos;S FOR</SectionBadge>
            <h2 className="section-title">
              Solutions for <span className="highlight">Every Business</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((sol) => (
              <div key={sol.title} className="card p-6 group">
                <div className="icon-container mb-4 group-hover:bg-primary-100">{sol.icon}</div>
                <h3 className="text-[16px] font-600 text-gray-900 mb-2">{sol.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        badge="GET STARTED TODAY"
        title="Join a Global Trade Ecosystem <br /><span class='text-primary-light'>That Works for You</span>"
        subtitle="Get started with CTIDDP and transform your China-to-India import operations."
        buttons={[
          { label: 'JOIN AS A BUYER', href: '/quote', variant: 'primary' },
          { label: 'TALK TO US ON WHATSAPP', href: 'https://wa.me/918790013772', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
        ]}
      />
    </main>
  )
}