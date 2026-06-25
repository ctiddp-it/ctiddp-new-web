import {
  FaShip,
  FaTruck,
  FaShieldHalved,
  FaFileInvoice,
  FaIndianRupeeSign,
  FaWhatsapp,
} from 'react-icons/fa6'
import {
  ShieldCheck,
  Eye,
  Truck,
  FileCheck,
} from "lucide-react";
import SectionBadge from '@/components/ui/SectionBadge'
import CTABanner from '@/components/ui/CTABanner'
import GetQuoteClient from './GetQuoteClient'

export const metadata = {
  title:
    'Get a DDP Shipping Quote | China to India Import Cost',
 
  description:
    'Request a complete DDP shipping quote from CTIDDP. Receive transparent pricing including freight, customs clearance, duties, taxes, insurance, and doorstep delivery.',
 
  keywords: [
    'DDP shipping quote',
    'China to India shipping cost',
    'import cost calculator',
    'freight quote India',
    'door to door shipping quote',
    'DDP freight cost',
    'customs included shipping',
    'cargo shipping quote',
    'international shipping rates',
    'air freight quote',
    'sea freight quote',
    'China import quote',
    'shipping estimate India',
    'logistics quotation',
    'freight forwarding quote'
  ],
 
  openGraph: {
    title:
      'Get Your Full DDP Shipping Quote | CTIDDP', 
    description:
      'Get an accurate DDP quote including freight, customs clearance, duties, taxes, insurance, and last-mile delivery.', 
    url: 'https://www.ctiddp.com/quote/', 
    siteName: 'CTIDDP', 
    type: 'website',   
  },
 
  twitter: {
    card: 'summary_large_image', 
    title:
      'Get a DDP Shipping Quote', 
    description:
      'Receive a complete China to India DDP quotation within 2 business hours.',    
  },
   alternates: {
    canonical: 'https://www.ctiddp.com/quote/'
  }
};

const features = [
  {
    icon: ShieldCheck,
    title: "All-Inclusive",
    subtitle: "No Hidden Costs"
  },
  {
    icon: Eye,
    title: "Accurate",
    subtitle: "Real-time Rates"
  },
  {
    icon: Truck,
    title: "Door-to-Door",
    subtitle: "End to End Service"
  },
];

function Feature({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
        <Icon className="h-5 w-5 text-white" />
      </div>

      <div className="min-w-0 flex flex-col">
        <p className="text-sm font-semibold text-white leading-tight">
          {title}
        </p>

        <p className="mt-1 text-[13px] text-white/75 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function GetQuotePage() {
  return (
    <>
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
 
      "@graph": [
 
        {
          "@type": "WebPage",
 
          "@id":
            "https://www.ctiddp.com/quote/#webpage",
 
          "url":
            "https://www.ctiddp.com/quote/",
 
          "name":
            "Get a DDP Shipping Quote",
 
          "description":
            "Request a complete DDP shipping quotation covering freight, customs clearance, duties, taxes, insurance, and delivery.",
 
          "isPartOf": {
            "@id":
              "https://www.ctiddp.com/#website"
          }
        },
 
        {
          "@type": "Service",
 
          "@id":
            "https://www.ctiddp.com/quote/#service",
 
          "name":
            "DDP Shipping Quote Service",
 
          "provider": {
            "@type": "Organization",
            "name": "CTIDDP",
            "url": "https://www.ctiddp.com"
          },
 
          "description":
            "Complete quotation service covering freight, customs clearance, duties, taxes, cargo insurance, and final delivery.",
 
          "serviceType":
            "DDP Shipping Quotation",
 
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        },
 
        {
          "@type": "ContactPoint",
 
          "@id":
            "https://www.ctiddp.com/quote/#contact",
 
          "contactType":
            "sales",
 
          "telephone":
            "+91-8790018787",
 
          "email":
            "info@ctiddp.com",
 
          "availableLanguage": [
            "English",
            "Hindi",
            "Telugu"
          ]
        },
 
        {
          "@type": "FAQPage",
 
          "@id":
            "https://www.ctiddp.com/quote/#faq",
 
          "mainEntity": [
 
            {
              "@type": "Question",
 
              "name":
                "How quickly can I receive a quote?",
 
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Most complete DDP quotations are shared within 2 business hours after receiving shipment details."
              }
            },
 
            {
              "@type": "Question",
 
              "name":
                "What is included in a DDP quote?",
 
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "DDP quotations include freight, export handling, customs clearance, duties, taxes, cargo insurance, and last-mile delivery."
              }
            },
 
            {
              "@type": "Question",
 
              "name":
                "Do I need an HS Code to request a quote?",
 
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "No. If unavailable, CTIDDP can help identify the appropriate HS code during quotation review."
              }
            }
          ]
        },
 
        {
          "@type": "BreadcrumbList",
 
          "@id":
            "https://www.ctiddp.com/quote/#breadcrumb",
 
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
              "name": "Get Quote",
              "item": "https://www.ctiddp.com/quote/"
            }
          ]
        }
      ]
    })
  }}
/>

      <main>
        {/* ══════════ HERO ══════════ */}
       <section className="relative h-[58vh] min-h-[520px] lg:h-[50vh] overflow-hidden">

  {/* Responsive Background */}
  <div className="absolute inset-0">

    <picture>
      {/* Desktop */}
      <source
        media="(min-width:1024px)"
        srcSet="/images/quote/quo.png"
      />

      {/* Mobile */}
      <img
        src="/images/quote/quo-mob.png"
        alt="Global Logistics"
        className="h-full w-full object-cover object-center"
      />
    </picture>

  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/80 to-[#041c4a]/20 lg:via-[#041c4a]/85" />

  {/* Optional pattern */}
  <div className="absolute inset-0 opacity-[0.06]" />

  {/* Content */}
  <div className="relative z-10 h-full">

    <div className="flex h-full items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">

      <div className="max-w-4xl">

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

          <div className="h-2 w-2 rounded-full bg-[#0181EA]" />

          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
            DDP Quote Request
          </span>

        </div>

        {/* Heading */}
        <h1 className="
          text-5xl
          leading-[1.08]
          font-bold
          text-white
          sm:text-[2.5rem]
          md:text-5xl
          lg:text-5xl
        ">
          Get Your Full
          <br />

          <span className="text-[#36A0F7]">
            DDP Quote.
          </span>
        </h1>

        {/* Description */}
        <p className="
          mt-5
          max-w-[95%]
          text-[18px]
          leading-relaxed
          text-white/85
          sm:max-w-xl
          sm:text-base
          md:text-lg
        ">
          Fill in the form. Receive a full DDP quote with BCD + IGST + SWS
          pre-calculation within 2 hours.
        </p>

        {/* Desktop only */}
        <div className="hidden lg:grid mt-10 grid-cols-4 gap-x-8 gap-y-5">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </div>

      </div>

    </div>

  </div>

</section>

        {/* ══════════ MAIN CONTENT ══════════ */}
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* ── LEFT: What You Get ── */}
              <div>
                <div className="flex flex-col items-left mb-10">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                    <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
                      What You Recieve
                    </span>
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                  </div>

                  {/* Headline */}
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-left mb-4">
                    <span style={{ color: '#0B2A6B' }}>A Quote that&nbsp;</span>
                    <span style={{ color: '#FE5101' }}>Covers Everything</span>
                  </h2>

                  {/* Underline accent - two-tone bar */}
                  <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
                    <div className="flex-1" style={{ background: '#0B2A6B' }} />
                    <div className="flex-1" style={{ background: '#FE5101' }} />
                  </div>
                </div>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-7">
                  No vague estimates. A single number that includes every cost from factory to your door.
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    { icon: <FaTruck />, title: 'Origin Freight', desc: 'From supplier to China port or airport, including domestic trucking.' },
                    { icon: <FaShip />, title: 'Sea / Air Freight', desc: 'LCL or FCL ocean freight, or air freight - whichever mode you need.' },
                    { icon: <FaFileInvoice />, title: 'Customs Clearance (Both Ends)', desc: 'China export + India import documentation, filing, and handling.' },
                    { icon: <FaIndianRupeeSign />, title: 'All India Duties Pre-Paid', desc: 'BCD + SWS + IGST - calculated, signed off, and included.' },
                    { icon: <FaTruck />, title: 'Last-Mile Delivery', desc: 'From Indian port to your delivery address anywhere in India.' },
                    { icon: <FaShieldHalved />, title: 'Cargo Insurance', desc: 'All-risk marine cargo insurance included end-to-end.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 items-start group">
                      <div className="icon-container icon-container-sm shrink-0 group-hover:bg-primary-100">
                        <span className="text-[14px]">{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-[14px] font-600 text-gray-900 mb-0.5">{item.title}</div>
                        <div className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Guarantee Box */}
                <div className="mt-7 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-[13px] text-green-700 flex gap-2 items-start">
                    <span className="shrink-0 text-green-600 mt-0.5">✓</span>
                    <span>Our Operations Manager personally reviews and signs off every duty calculation before quoting. You will never receive a vague or incomplete number.</span>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Form (client) ── */}
              <GetQuoteClient />
            </div>
          </div>
        </section>

        {/* ══════════ VIDEO ══════════ */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-[1000px] mx-auto text-center px-5">
            <div className="flex flex-col items-center mb-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
                  How to Get a Quote
                </span>
                <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4">
                <span style={{ color: '#0B2A6B' }}>How to Send Your&nbsp;</span>
                <span style={{ color: '#FE5101' }}>Quote Request</span>
              </h2>

              {/* Underline accent - two-tone bar */}
              <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
                <div className="flex-1" style={{ background: '#0B2A6B' }} />
                <div className="flex-1" style={{ background: '#FE5101' }} />
              </div>
            </div>
            <p className="section-subtitle centered mb-8">
              Watch this quick 60-second walkthrough to understand how to submit your shipment details.
            </p>
            <div className="relative w-full overflow-hidden aspect-video rounded-2xl shadow-elevated">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/tF9U_erUUb4"
                title="Send DDP Quote Request in Under 60 Seconds"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[12px] text-gray-400 mt-4">
              Takes less than 60 seconds · Response within 2 hours
            </p>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="relative overflow-hidden rounded-[24px] lg:rounded-[32px] border border-[#dbe7ff]">

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5ff]" />

          {/* Background map */}
          <div
            className="
      absolute inset-0
      bg-[url('/images/bg-map.png')]
      bg-no-repeat
      bg-center
      bg-cover
      opacity-[0.07]
      lg:opacity-[0.09]
      scale-110
    "
          />

          {/* Color accents */}
          <div className="absolute -top-20 -right-20 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-[#003DA5]/5 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-[#FE5101]/8 blur-3xl" />

          {/* Content */}
          <div className="relative px-5 py-10 sm:px-8 sm:py-14 lg:px-16">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

              {/* Left */}
              <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#003DA5]/10 bg-white/70 backdrop-blur-sm px-3 py-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <FaWhatsapp className="text-[#003DA5] text-sm" />
                  </div>

                  <span className="text-[12px] sm:text-[13px] font-semibold text-slate-700">
                    Quick Support · Mon–Sat
                  </span>

                </div>

                <h2
                  className="
            text-[1.85rem]
            sm:text-[2.4rem]
            lg:text-[3rem]
            font-extrabold
            leading-[1.12]
            tracking-tight
            text-[#0B2A6B]
          "
                  dangerouslySetInnerHTML={{
                    __html:
                      "Have a Question <span style='color:#FE5101'>Before You Quote?</span>",
                  }}
                />

                <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 max-w-xl mx-auto lg:mx-0">
                  WhatsApp us directly. Our team responds in
                  <span className="font-semibold text-[#003DA5]">
                    {" "}under 2 hours
                  </span>
                  , Monday–Saturday.
                </p>

              </div>

              {/* CTA */}
              <div className="flex flex-col w-full lg:w-auto gap-3 sm:gap-4">

                <a
                  href="https://wa.me/918790018787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            w-full lg:w-auto
            min-w-[250px]
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-[#FE5101]
            px-6
            py-4
            text-[13px]
            sm:text-sm
            font-bold
            uppercase
            tracking-wide
            text-white
            shadow-[0_12px_30px_rgba(254,81,1,.22)]
            transition
            hover:-translate-y-0.5
          "
                >
                  <FaWhatsapp size={18} />
                  WHATSAPP US NOW
                </a>

                <a
                  href="/contact"
                  className="
            w-full lg:w-auto
            min-w-[250px]
            inline-flex
            items-center
            justify-center
            rounded-2xl
            border
            border-[#003DA5]/15
            bg-white/80
            backdrop-blur-sm
            px-6
            py-4
            text-[13px]
            sm:text-sm
            font-bold
            uppercase
            tracking-wide
            text-[#003DA5]
            transition
            hover:bg-[#003DA5]/5
          "
                >
                  READ OUR FAQ
                </a>

              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  )
}