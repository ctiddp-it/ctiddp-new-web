import { FaWhatsapp, FaBoxOpen, FaScaleBalanced, FaStore, FaClock, FaIndianRupeeSign } from "react-icons/fa6"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { MdEmergency } from "react-icons/md"
import SectionBadge from '@/components/ui/SectionBadge'
import CTABanner from '@/components/ui/CTABanner'
import Button from '@/components/ui/Button'
import ContactClient from './ContactClient'
import ContactLogisticsExperts from "@/components/sections/contact/Contactlogisticsexperts"

export const metadata = {
  title:
    'Contact CTIDDP | Get a DDP Shipping Quote & Logistics Support',

  description:
    'Contact CTIDDP for DDP shipping, customs clearance, supplier sourcing, QC inspections, warehousing, consolidation, and trade support. Get a quote within 2 hours.',

  keywords: [
    'contact CTIDDP',
    'DDP shipping quote',
    'China to India shipping contact',
    'freight forwarding contact',
    'logistics support India',
    'customs clearance assistance',
    'import export consultation',
    'supplier sourcing support',
    'international shipping quote',
    'shipping company contact India',
    'trade support services',
    'cargo shipping enquiry',
    'global logistics contact',
    'warehouse and consolidation support',
    'China sourcing consultation'
  ],

  openGraph: {
    title:
      'Contact CTIDDP | Logistics Experts Ready to Help',
    description:
      'Speak with our logistics experts. Get support for DDP shipping, sourcing, customs clearance, inspections, and international trade.',
    url: 'https://www.ctiddp.com/contact/',
    siteName: 'CTIDDP',
    type: 'website',    
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Contact CTIDDP',
    description:
      'Get a shipping quote, sourcing support, or logistics consultation.',   
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/contact/'
  }
};

const CONTACT_CHANNELS = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    lines: [
      { type: 'email', label: 'info@ctiddp.com', href: 'mailto:info@ctiddp.com' },
    ],
  },
  {
    icon: <FaPhoneAlt />,
    title: 'India Office',
    lines: [
      { type: 'phone', label: '+91 87900 18787 (Main)', href: 'tel:+918790018787' },
      { type: 'text', label: 'Vizag HQ · Chennai Ops' },
      { type: 'text', label: 'Mon–Fri · 9am–6pm IST' },
      { type: 'text', label: 'Saturday · 9am–1:30pm IST' },
    ],
  },
  {
    icon: <FaPhoneAlt />,
    title: 'China Office',
    lines: [
      { type: 'phone', label: '+86 188 1874 9844', href: 'tel:+8618818749844' },
      { type: 'text', label: 'Guangzhou Warehouse' },
      { type: 'text', label: 'Mon–Sat · 9am–6pm CST' },
    ],
  },
]


const FAQ_CATEGORIES = [
  {
    id: 'ddp-basics', title: 'DDP Basics', icon: <FaBoxOpen />,
    items: [
      { q: 'What does DDP mean?', a: 'DDP stands for Delivered Duty Paid. Under DDP terms, the seller (us) bears full responsibility and cost for delivering goods to your address in India - including all freight, insurance, export customs, import customs, and all duties (BCD, IGST, SWS). You receive the goods free of any port charges.' },
      { q: 'Why use DDP instead of FOB or CIF?', a: 'FOB and CIF leave customs, duties, and last-mile delivery to you. DDP means zero customs complexity - we handle everything. For India importers, this means no dealing with Indian customs, no surprise duty bills at port, and no logistics coordination at the Indian end.' },
      { q: 'Do I need an IEC (Import Export Code) to use your DDP service?', a: 'No. Under DDP, we act as the importer of record. However, if you plan to claim IGST as Input Tax Credit (ITC), you will need your own IEC and GSTIN. We can advise on the best structure for your situation.' },
    ],
  },
  {
    id: 'customs-duties', title: 'Customs & Duties', icon: <FaScaleBalanced />,
    items: [
      { q: 'How do you calculate duties before quoting?', a: 'Our Operations Manager manually verifies the HS code, applies the current BCD rate, calculates SWS (10% of BCD), and computes IGST on the assessable value (CIF + BCD + SWS). This signed duty calculation is included in every DDP quote before goods move.' },
      { q: 'What if actual duties at the port differ from your quote?', a: 'We bear that risk - not you. Our DDP contract fixes the total price. If customs assesses a higher duty due to valuation or classification, we absorb the difference. This is the core benefit of DDP.' },
      { q: 'Do you handle BIS, FSSAI, or other import licences?', a: 'Yes. We support BIS (Bureau of Indian Standards) licence requirements for electronics, FSSAI for food products, and other product-specific certifications. We flag licence requirements upfront in the quotation stage - no surprises at the port.' },
    ],
  },
  {
    id: 'canton-fair', title: 'Canton Fair & Sourcing', icon: <FaStore />,
    items: [
      { q: 'How does Canton Fair support work?', a: 'Our Guangzhou team attends the fair with you (or on your behalf), handles Mandarin negotiation, inspects samples, consolidates purchases from multiple booths, and ships everything DDP to your India address.' },
      { q: 'Can you source products from China year-round?', a: 'Yes. Our on-ground teams in Guangzhou and Foshan identify verified suppliers, negotiate prices in Mandarin, and arrange samples for any product category - not just during the fair.' },
    ],
  },
  {
    id: 'timelines', title: 'Timelines & Logistics', icon: <FaClock />,
    items: [
      { q: 'How long does sea freight DDP take?', a: 'Typically 38–50 days door-to-door: 2–4 days consolidation, 18–28 days ocean transit, 9–11 days India customs, 1–3 days last mile.' },
      { q: 'Can I track my shipment?', a: 'Yes. We provide WhatsApp and email updates at every milestone - cargo ready, vessel departure, arrival at Indian port, customs clearance, and delivery confirmation with POD.' },
      { q: 'Do you deliver to cities other than Chennai?', a: 'Yes - PAN-India. JNPT, Mundra, Chennai, Vizag, Delhi ICD. Last-mile to any Indian city or warehouse included in your DDP price.' },
    ],
  },
  {
    id: 'pricing', title: 'Pricing & Quoting', icon: <FaIndianRupeeSign />,
    items: [
      { q: 'How do I get a DDP quote?', a: 'Fill in our quote form or WhatsApp us. Share cargo category, weight/volume, pickup city, delivery state. Full DDP quote with BCD+IGST breakdown within 2 hours.' },
      { q: 'Are there any hidden charges?', a: 'No. Our quote includes all freight, insurance, BCD, IGST, SWS, and last-mile. The number you see is the final number you pay. Our Operations Manager signs off on every duty calculation before quoting.' },
    ],
  },
]

// Pure, server-renderable accordion using native <details>/<summary> -
// no client JS needed for open/close state.
function FAQCategory({ category, defaultOpen = false }) {
  return (
    <details className="group card overflow-hidden" {...(defaultOpen ? { open: true } : {})}>
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden w-full px-5 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-primary text-lg">{category.icon}</span>
          <span className="text-[16px] font-600 text-gray-900">{category.title}</span>
          <span className="text-[11px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">{category.items.length}</span>
        </div>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-open:bg-primary-50 group-open:border-primary-200">
          <svg className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="px-5 py-2">
        {category.items.map((item, idx) => (
          <details key={idx} className="group/item border-b border-gray-100 last:border-0">
            <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden py-4 flex justify-between items-center">
              <span className="text-[14px] font-500 text-gray-800 group-hover/item:text-primary transition-colors pr-4">{item.q}</span>
              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-open/item:bg-primary-50 group-open/item:border-primary-200">
                <svg className="w-3 h-3 text-primary transition-transform duration-300 group-open/item:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="text-[13px] text-gray-500 leading-relaxed pr-6 pb-4">{item.a}</p>
          </details>
        ))}
      </div>
    </details>
  )
}

export default function ContactPage() {
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
                "@type": "ContactPage",

                "@id":
                  "https://www.ctiddp.com/contact/#contactpage",

                "url":
                  "https://www.ctiddp.com/contact/",

                "name":
                  "Contact CTIDDP",

                "description":
                  "Contact CTIDDP for DDP shipping, customs clearance, sourcing support, inspections, warehousing, and logistics services."
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

                "email":
                  "info@ctiddp.com",

                "telephone":
                  "+91-8790018787",

                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-8790018787",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": [
                      "English",
                      "Hindi",
                      "Telugu"
                    ]
                  }
                ]
              },

              {
                "@type": "LocalBusiness",

                "@id":
                  "https://www.ctiddp.com/contact/#india-office",

                "name":
                  "CTIDDP India Office",

                "telephone":
                  "+91-8790018787",

                "email":
                  "info@ctiddp.com",

                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Visakhapatnam",
                  "addressRegion": "Andhra Pradesh",
                  "addressCountry": "IN"
                },

                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "10:00",
                    "closes": "13:00"
                  }
                ]
              },

              {
                "@type": "FAQPage",

                "@id":
                  "https://www.ctiddp.com/contact/#faq",

                "mainEntity": [

                  {
                    "@type": "Question",
                    "name":
                      "How quickly can I receive a shipping quote?",

                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Most DDP shipping quotations are provided within 2 business hours after receiving complete shipment details."
                    }
                  },

                  {
                    "@type": "Question",
                    "name":
                      "Can CTIDDP assist with supplier sourcing?",

                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Yes. CTIDDP supports supplier discovery, verification, factory visits, inspections, and procurement assistance."
                    }
                  },

                  {
                    "@type": "Question",
                    "name":
                      "Do I need an IEC to import using DDP shipping?",

                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Requirements depend on shipment type and import structure. Contact our team for guidance."
                    }
                  }
                ]
              },

              {
                "@type": "BreadcrumbList",

                "@id":
                  "https://www.ctiddp.com/contact/#breadcrumb",

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
                    "name": "Contact",
                    "item": "https://www.ctiddp.com/contact/"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* ══════════ HERO + FORM (client) ══════════ */}
      <ContactClient />

      {/* ══════════ SLA / EMERGENCY / HOURS + WHATSAPP / CHANNELS ══════════ */}
      <ContactLogisticsExperts />

      {/* ══════════ FAQ ══════════ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="flex flex-col items-center mb-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
              <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
                Frequently asked questions
              </span>
              <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4">
              <span style={{ color: '#0B2A6B' }}>Everything You Wanted </span>
              <span style={{ color: '#FE5101' }}>Ask</span>
            </h2>

            {/* Underline accent - two-tone bar */}
            <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
              <div className="flex-1" style={{ background: '#0B2A6B' }} />
              <div className="flex-1" style={{ background: '#FE5101' }} />
            </div>
          </div>

          <div className="space-y-3">
            {FAQ_CATEGORIES.map((category) => (
              <FAQCategory key={category.id} category={category} defaultOpen={category.id === 'ddp-basics'} />
            ))}
          </div>

          <div className="mt-10 card p-8 text-center border-primary-100 bg-primary-50/30">
            <h3 className="text-[20px] font-600 text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-[14px] text-gray-500 mb-5 max-w-[400px] mx-auto">
              Our team responds in under 2 hours on WhatsApp. We&apos;re here to help!
            </p>
            <Button href="https://wa.me/918790018787" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>
              WHATSAPP US NOW
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}