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
import OurStoryBanner from '@/components/sections/about/OurStory'
import VisionMission from '@/components/sections/about/Vissionmissionsection'
import LeadershipSection from '@/components/sections/about/LeadershipSection'
import GlobalPresenceSection from '@/components/sections/about/GlobalPresenceSection'

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
            </div>

          </div>

        </div>

      </section>

      {/* ══════════ OUR STORY ══════════ */}
      <OurStoryBanner />

      {/* ══════════ MISSION & VISION ══════════ */}
      <VisionMission />

      {/* ══════════ LEADERSHIP ══════════ */}
      <LeadershipSection/>

      {/* ══════════ OFFICE LOCATIONS ══════════ */}
      <GlobalPresenceSection/>
      
    </main>
  )
}