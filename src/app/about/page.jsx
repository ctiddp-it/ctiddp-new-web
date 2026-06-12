import dynamic from 'next/dynamic'
import { FaWhatsapp } from 'react-icons/fa6'
import SectionBadge from '@/components/ui/SectionBadge'
import StatCounter from '@/components/ui/StatCounter'
import TeamCard from '@/components/ui/TeamCard'
import OfficeCard from '@/components/ui/OfficeCard'
import CTABanner from '@/components/ui/CTABanner'
import {
  ShieldCheck,
  Eye,
  Truck,
  FileCheck,
} from "lucide-react";
import Button from '@/components/ui/Button'
import Image from 'next/image'

const Partners = dynamic(() => import('@/components/sections/Partners'))

export const metadata = {
  title: 'About CTIDDP | Global Trade & DDP Logistics Experts',
  description:
    'CTIDDP enables global trade with China to India DDP shipping and international logistics solutions.',
  keywords: [
    'global logistics company India',
    'cross border trade company India',
    'DDP logistics experts India',
    'China to India shipping experts',
  ],
  openGraph: {
    title: 'About CTIDDP | Global Trade & DDP Logistics Experts',
    description: 'CTIDDP enables global trade with China to India DDP shipping and international logistics solutions.',
    url: 'https://www.ctiddp.com/about/',
  },
  alternates: { canonical: 'https://www.ctiddp.com/about' },
}

const TEAM = [
  {
    image: '/images/about/founders/mallesh-gujjala-founder-ceo-ctiddp.png',
    name: 'Mallesh Gujjala',
    role: 'Founder & CEO',
    bio: 'Visionary behind CTIDDP. Built the end-to-end DDP framework for China-to-India imports — factory coordination, supplier relations, quality inspection & compliance.',
    linkedin: '#',
  },
  {
    image: '/images/about/founders/balu-gujjala-co-founder-head-of-india-operations-ctiddp.png',
    name: 'Balu Gujjala',
    role: 'Co-Founder & India Operations',
    bio: 'Oversees all India-side operations, customs compliance, and client relationships. Licensed CHA in Indian import logistics — port handling, customs clearance & last-mile delivery.',
    linkedin: '#',
  },
]

const OFFICES = [
  {
    city: 'Visakhapatnam',
    officeName: 'India Head Office',
    address: 'Ward No, Visakhapatnam, Andhra Pradesh, India – 600069',
    phone: '+91 87900 13772',
    email: 'info@ctiddp.com',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    country: 'india',
    featured: true,
  },
  {
    city: 'Bangalore',
    officeName: 'India Branch Office',
    address: 'Koramangala, Bangalore 560054, Karnataka, India',
    phone: '+91 63640 13772',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    country: 'india',
  },
  {
    city: 'Chennai',
    officeName: 'India Branch Office',
    phone: '+91 63640 13772',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    country: 'india',
  },
  {
    city: 'Guangzhou',
    officeName: 'China Office',
    address: 'Haizhu District, Guangzhou, Guangdong, China',
    phone: '+86 181 1814 9844',
    email: 'china@ctiddp.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM CST',
    country: 'china',
    featured: true,
  },
  {
    city: 'Foshan',
    officeName: 'China Warehouse',
    address: 'Baiyun District, Guangzhou, Guangdong, China',
    phone: '+86 181 1814 9844',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM CST',
    country: 'china',
  },
]

const STATS = [
  { value: '500', suffix: '+', label: 'Successful DDP Shipments' },
  { value: '10', suffix: '+', label: 'Years of Combined Experience' },
  { value: '5', label: 'Strategic Locations' },
  { value: '100', suffix: '%', label: 'Focused Trade Route Expertise' },
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

export default function AboutPage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'LocalBusiness',
                '@id': 'https://www.ctiddp.com/#business',
                name: 'CTIDDP',
                description: 'China to India DDP Shipping Specialists.',
                url: 'https://www.ctiddp.com/',
                logo: 'https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png',
                founder: [
                  { '@type': 'Person', name: 'Mallesh Gujjala', jobTitle: 'Founder & CEO' },
                  { '@type': 'Person', name: 'Balu Gujjala', jobTitle: 'Co-Founder & India Operations' },
                ],
                address: [
                  { '@type': 'PostalAddress', addressLocality: 'Visakhapatnam', addressRegion: 'AP', addressCountry: 'IN' },
                  { '@type': 'PostalAddress', addressLocality: 'Guangzhou', addressRegion: 'Guangdong', addressCountry: 'CN' },
                ],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ctiddp.com/' },
                  { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.ctiddp.com/about/' },
                ],
              },
            ],
          }),
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
                  About CTIDDP
                </span>
              </div>

              {/* Heading */}
              <h1 className=" text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl">
                Built for One Route
                <br />
                <span className=" text-[#36a0f7]">
                  Trusted Across Borders
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                CTIDDP is a specialized end-to-end DDP logistics partner helping
                businesses move goods seamlessly from China to India with complete transparency.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-xl bg-primary-light px-6 py-3 font-semibold text-white">
                  GET DDP QUOTE →
                </button>

                <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm">
                  MEET THE FOUNDERS
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ══════════ OUR STORY ══════════ */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text */}
            <div>
              <SectionBadge>OUR STORY</SectionBadge>
              <h2 className="section-title">
                Our Story — <span className="highlight">Built to Simplify Global Trade</span>
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-5">
                Cross Border Trade International Delivered Duty Paid (CTIDDP) is a specialized logistics partner focused on simplifying imports from China to India. We work closely with businesses, e-commerce brands, and bulk importers to handle the entire shipping process — from supplier pickup to final delivery.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-5">
                Our journey started with a simple observation: <strong className="text-gray-800">most importers struggle not with sourcing, but with shipping, customs clearance, and coordination.</strong> That&apos;s where we built our expertise.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Today we provide end-to-end DDP shipping services from China to India — with on-ground presence in China and active coordination with Indian clients, bridging the gap between suppliers and delivery.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="card p-6 flex flex-col items-center justify-center text-center">
                  <StatCounter value={s.value} suffix={s.suffix || ''} label={s.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MISSION & VISION ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>VISION & MISSION</SectionBadge>
            <h2 className="section-title">
              Where We&apos;re Going. <span className="highlight">How We&apos;ll Get There.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {/* Vision */}
            <div className="rounded-2xl p-7 bg-gradient-to-br from-primary to-primary-dark text-white">
              <div className="text-[11px] tracking-[1.5px] uppercase font-600 text-primary-100 mb-3">Our Vision</div>
              <p className="text-[15px] leading-relaxed italic">
                &ldquo;To become the most trusted logistics partner for businesses importing from China to India — delivering consistent, transparent, and scalable shipping solutions.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl p-7 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
              <div className="text-[11px] tracking-[1.5px] uppercase font-600 text-primary-light mb-3">Our Mission</div>
              <ul className="space-y-2.5">
                {[
                  'Simplify international shipping with end-to-end DDP logistics',
                  'Eliminate hidden costs and delays in imports',
                  'Support Indian businesses in scaling through reliable supply chains',
                  'Build a seamless connection between China manufacturers and Indian markets',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[14px] leading-relaxed">
                    <span className="text-primary-light mt-0.5 shrink-0">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LEADERSHIP ══════════ */}
      <section id="founders" className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>LEADERSHIP & CORE TEAM</SectionBadge>
            <h2 className="section-title">
              Leadership That Drives <span className="highlight">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {TEAM.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ OFFICE LOCATIONS ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionBadge>OUR GLOBAL PRESENCE</SectionBadge>
            <h2 className="section-title">
              Two Countries, <span className="highlight">Five Locations</span>
            </h2>
            <p className="section-subtitle centered">
              Real people. Fast responses. Reach us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICES.map((office) => (
              <OfficeCard key={office.city + office.officeName} {...office} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRUSTED BY ══════════ */}
      <Partners />

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title="Work With a Team That&apos;s <span class='text-primary-light'>All-In.</span>"
        subtitle="No vendor chains. No hidden charges. One team, full accountability — China side and India side."
        bgImage="/images/services/aerial-view-commercial-dock.jpeg"
        buttons={[
          { label: 'GET DDP QUOTE', href: '/quote', variant: 'primary' },
          { label: 'CONNECT WITH US', href: 'https://wa.me/918790013772', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
        ]}
      />
    </main>
  )
}