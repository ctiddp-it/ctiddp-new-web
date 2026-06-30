import {
  ShieldCheck,
  Eye,
  Truck,
  FileCheck,
} from "lucide-react";
import OurStoryBanner from '@/components/sections/about/OurStory'
import VisionMission from '@/components/sections/about/Vissionmissionsection'
import LeadershipSection from '@/components/sections/about/LeadershipSection'
import GlobalPresenceSection from '@/components/sections/about/GlobalPresenceSection'

export const metadata = {
  title:
    'About CTIDDP | Global DDP Shipping, Trade & Logistics Experts',

  description:
    'Learn about CTIDDP, a global logistics and DDP shipping company helping businesses import from China and trade worldwide. Discover our mission, leadership team, global offices, and end-to-end supply chain solutions.',

  keywords: [
    'about CTIDDP',
    'CTIDDP company profile',
    'China to India DDP shipping company',
    'global freight forwarding company',
    'international logistics experts',
    'cross border trade solutions',
    'China sourcing and shipping company',
    'customs clearance specialists',
    'global supply chain management',
    'freight forwarding India',
    'import export logistics company',
    'DDP logistics provider',
    'China import specialists',
    'global trade ecosystem',
    'international shipping company India'
  ],

  openGraph: {
    title:
      'About CTIDDP | Global DDP Shipping, Trade & Logistics Experts',
    description:
      'Meet the team behind CTIDDP and discover how we simplify global trade through DDP shipping, customs clearance, supplier sourcing, warehousing, and supply chain management.',
    url: 'https://www.ctiddp.com/about/',
    siteName: 'CTIDDP',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'About CTIDDP | Global DDP Shipping, Trade & Logistics Experts',
    description:
      'Discover CTIDDP’s story, leadership, mission, global offices, and logistics expertise.',  },
  alternates: {
    canonical: 'https://www.ctiddp.com/about'
  }
}

const TEAM = [
  {
    image: '/images/about/ctiddp-founders/mallesh-gujjala-founder-ceo-ctiddp.png',
    name: 'Mallesh Gujjala',
    role: 'Founder & CEO',
    bio: 'Visionary behind CTIDDP. Built the end-to-end DDP framework for China-to-India imports - factory coordination, supplier relations, quality inspection & compliance.',
    linkedin: '#',
  },
  {
    image: '/images/about/ctiddp-founders/balu-gujjala-co-founder-head-of-india-operations-ctiddp.png',
    name: 'Balu Gujjala',
    role: 'Co-Founder & India Operations',
    bio: 'Oversees all India-side operations, customs compliance, and client relationships. Licensed CHA in Indian import logistics - port handling, customs clearance & last-mile delivery.',
    linkedin: '#',
  },
]

const OFFICES = [
  {
    city: 'Visakhapatnam',
    officeName: 'India Head Office',
    address: 'Ward No, Visakhapatnam, Andhra Pradesh, India – 600069',
    phone: '+91 87900 18787',
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
            "@context": "https://schema.org",
            "@graph": [

              {
                "@type": "Organization",
                "@id": "https://www.ctiddp.com/#organization",

                "name": "CTIDDP",

                "url": "https://www.ctiddp.com",

                "logo":
                  "https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png",

                "description":
                  "CTIDDP is a global logistics and trade solutions company specializing in DDP shipping, customs clearance, supplier sourcing, quality inspection, warehousing, consolidation, supplier payments, and last-mile delivery.",

                "founder": [
                  {
                    "@type": "Person",
                    "name": "Mallesh Gujjala",
                    "jobTitle": "Founder & CEO"
                  },
                  {
                    "@type": "Person",
                    "name": "Balu Gujjala",
                    "jobTitle": "Co-Founder & India Operations"
                  }
                ],

                "telephone": "+91-8790018787",

                "email": "info@ctiddp.com",

                "areaServed": [
                  "India",
                  "China",
                  "United States",
                  "Europe",
                  "Middle East",
                  "Australia"
                ],

                "knowsAbout": [
                  "DDP Shipping",
                  "International Logistics",
                  "Freight Forwarding",
                  "Customs Clearance",
                  "Supplier Sourcing",
                  "Quality Inspection",
                  "Warehousing",
                  "Cargo Consolidation",
                  "Cross Border Trade"
                ]
              },

              {
                "@type": "AboutPage",

                "@id":
                  "https://www.ctiddp.com/about/#aboutpage",

                "url":
                  "https://www.ctiddp.com/about/",

                "name":
                  "About CTIDDP",

                "description":
                  "Learn about CTIDDP, our mission, leadership team, global offices, and how we simplify international trade."
              },

              {
                "@type": "Place",

                "name": "CTIDDP India Office",

                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Visakhapatnam",
                  "addressRegion": "Andhra Pradesh",
                  "addressCountry": "India"
                }
              },

              {
                "@type": "Place",

                "name": "CTIDDP China Office",

                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Guangzhou",
                  "addressRegion": "Guangdong",
                  "addressCountry": "China"
                }
              },

              {
                "@type": "WebSite",

                "@id": "https://www.ctiddp.com/#website",

                "url": "https://www.ctiddp.com",

                "name": "CTIDDP",

                "publisher": {
                  "@id":
                    "https://www.ctiddp.com/#organization"
                }
              },

              {
                "@type": "BreadcrumbList",

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

                    "name": "About Us",

                    "item":
                      "https://www.ctiddp.com/about/"
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
            src="/images/about/ctiddp-aboutus-banner.png"
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
                businesses move goods seamlessly with complete transparency.
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
      <LeadershipSection />

      {/* ══════════ OFFICE LOCATIONS ══════════ */}
      <GlobalPresenceSection />

    </main>
  )
}