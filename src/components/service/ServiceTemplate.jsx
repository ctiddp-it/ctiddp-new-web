import { FaWhatsapp } from 'react-icons/fa6'
import PageHero from '@/components/ui/PageHero'
import SectionBadge from '@/components/ui/SectionBadge'
import StepTimeline from '@/components/ui/StepTimeline'
import CTABanner from '@/components/ui/CTABanner'
import IconCard from '@/components/ui/IconCard'
import Button from '@/components/ui/Button'
import TrustPill from '@/components/ui/TrustPill'
import Image from 'next/image'

/**
 * ServiceTemplate - Unified service detail page layout
 *
 * @param {string} badge - Hero badge text
 * @param {React.ReactNode} titleNode - Hero H1
 * @param {string} subtitle - Hero subtitle
 * @param {string} bgImage - Hero background image
 * @param {string[]} trustPills - Hero trust pill texts
 *
 * @param {string} overviewTitle - Overview section title
 * @param {string} overviewText - Overview description
 * @param {string[]} overviewBullets - Overview bullet points
 * @param {string} overviewImage - Overview image
 *
 * @param {Array} features - Feature cards: { icon, title, description }
 * @param {string} featuresTitle - Features section title
 *
 * @param {Array} processSteps - Process steps: { icon, title, description }
 * @param {string} processTitle - Process section title
 *
 * @param {string[]} included - What's included list items
 *
 * @param {Array} relatedServices - Related service cards: { icon, title, description, href }
 *
 * @param {string} ctaTitle - CTA heading
 * @param {string} ctaSubtitle - CTA subtitle
 */
export default function ServiceTemplate({
  badge,
  titleNode,
  subtitle,
  bgImage,
  trustPills = [],
  overviewTitle,
  overviewText,
  overviewBullets = [],
  overviewImage,
  features = [],
  featuresTitle = 'Key Features',
  processSteps = [],
  processTitle = 'Our Process',
  included = [],
  relatedServices = [],
  ctaTitle,
  ctaSubtitle,
}) {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <PageHero
        badge={badge}
        subtitle={subtitle}
        bgImage={bgImage}
        titleNode={titleNode}
      >
        {trustPills.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {trustPills.map((t) => (
              <TrustPill key={t} text={t} light />
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-3">
          <Button href="/quote" variant="primary" arrow>GET FREE QUOTE</Button>
          <Button href="https://wa.me/918790018787" variant="whatsapp" external icon={<FaWhatsapp size={18} />}>
            WHATSAPP US
          </Button>
        </div>
      </PageHero>

      {/* ══════════ OVERVIEW ══════════ */}
      {(overviewTitle || overviewText) && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionBadge>OVERVIEW</SectionBadge>
                {overviewTitle && (
                  <h2 className="section-title" dangerouslySetInnerHTML={{ __html: overviewTitle }} />
                )}
                {overviewText && (
                  <p className="text-[15px] text-gray-500 leading-relaxed mb-5">{overviewText}</p>
                )}
                {overviewBullets.length > 0 && (
                  <ul className="space-y-2.5 mb-6">
                    {overviewBullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center text-primary text-[11px] mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <Button href="/quote" variant="primary" arrow>GET YOUR QUOTE</Button>
              </div>
              {overviewImage && (
                <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
                  <Image src={overviewImage} alt={overviewTitle || ''} fill sizes="(max-width:1024px)100vw,50vw" className="object-cover" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ KEY FEATURES ══════════ */}
      {features.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <div className="text-center mb-12">
              <SectionBadge>WHAT WE OFFER</SectionBadge>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: featuresTitle }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={i} className="card p-6 group">
                  <div className="icon-container mb-4 group-hover:bg-primary-100">{f.icon}</div>
                  <h3 className="text-[16px] font-600 text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ PROCESS ══════════ */}
      {processSteps.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="text-center mb-12">
              <SectionBadge>OUR PROCESS</SectionBadge>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: processTitle }} />
            </div>
            <StepTimeline steps={processSteps} />
          </div>
        </section>
      )}

      {/* ══════════ WHAT'S INCLUDED ══════════ */}
      {included.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-main max-w-[800px]">
            <div className="text-center mb-10">
              <SectionBadge>WHAT&apos;S INCLUDED</SectionBadge>
              <h2 className="section-title">Everything You Get</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-primary-100 transition-colors">
                  <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-[11px] mt-0.5 shrink-0">✓</span>
                  <span className="text-[14px] text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ RELATED SERVICES ══════════ */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="text-center mb-10">
              <SectionBadge>EXPLORE MORE</SectionBadge>
              <h2 className="section-title">Related <span className="highlight">Services</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((svc) => (
                <IconCard key={svc.href} {...svc} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ CTA ══════════ */}
      <CTABanner
        title={ctaTitle || "Ready to Get Started?"}
        subtitle={ctaSubtitle || "Get a complete DDP quote in under 2 hours."}
        buttons={[
          { label: 'GET FREE QUOTE', href: '/quote', variant: 'primary' },
          { label: 'CHAT ON WHATSAPP', href: 'https://wa.me/918790018787', variant: 'whatsapp', icon: <FaWhatsapp size={18} />, external: true },
        ]}
      />
    </main>
  )
}
