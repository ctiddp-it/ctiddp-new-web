import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | CTIDDP',
  description:
    'Read the official Privacy Policy for CTIDDP regarding data collection, usage, security, cookies, and customer information handling.',
  alternates: {
    canonical: 'https://www.ctiddp.com/privacy-policy',
  },
}

const sections = [
  { id: 'introduction',           number: '01', title: 'Introduction' },
  { id: 'information-we-collect', number: '02', title: 'Information We Collect' },
  { id: 'how-we-use',             number: '03', title: 'How We Use Your Information' },
  { id: 'information-sharing',    number: '04', title: 'Information Sharing' },
  { id: 'data-security',          number: '05', title: 'Data Security' },
  { id: 'cookies',                number: '06', title: 'Cookies & Tracking' },
  { id: 'third-party',            number: '07', title: 'Third-Party Services' },
  { id: 'data-retention',         number: '08', title: 'Data Retention' },
  { id: 'your-rights',            number: '09', title: 'Your Rights' },
  { id: 'children',               number: '10', title: "Children's Privacy" },
  { id: 'updates',                number: '11', title: 'Policy Updates' },
  { id: 'contact',                number: '12', title: 'Contact Information' },
]

/* ── Section Number Badge ── */
const SectionBadge = ({ number, ghost = false }) => (
  <span
    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold text-white flex-shrink-0 ${
      ghost ? 'bg-white/15' : ''
    }`}
    style={ghost ? undefined : { background: '#0B2A6B' }}
  >
    {number}
  </span>
)

/* ── Orange bullet list ── */
const BulletList = ({ items }) => (
  <ul className="space-y-2.5 mt-4">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 text-gray-600 text-[15px] leading-relaxed"
      >
        <span className="text-[#FE5101] mt-1.5 flex-shrink-0 text-xs">●</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

/* ── Reusable white section card ── */
const SectionCard = ({ id, number, title, children }) => (
  <div
    id={id}
    className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6 md:p-8 scroll-mt-28"
  >
    <div className="flex items-start gap-3 mb-4">
      <SectionBadge number={number} />
      <h2
        className="text-lg sm:text-xl md:text-2xl font-bold leading-snug pt-1"
        style={{ color: '#0B2A6B' }}
      >
        {title}
      </h2>
    </div>
    <div className="md:pl-12">{children}</div>
  </div>
)

const Para = ({ children }) => (
  <p className="text-gray-600 leading-relaxed text-[15px]">{children}</p>
)

export default function PrivacyPolicyPage() {
  return (
    <main className="font-sans antialiased">

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#041c4a] via-[#0A2A5E] to-[#0F3572]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative z-10 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 pt-24 pb-14 md:pt-32 md:pb-20">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-[#0181EA]" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                Legal
              </span>
            </div>

            {/* Heading — progressive scale, no overflow on 320px screens */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
              Privacy <span className="text-[#36A0F7]">Policy</span>
            </h1>

            {/* Meta */}
            <p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              Effective Date: 01-05-2026 &nbsp;·&nbsp; CTIDDP &nbsp;·&nbsp;{' '}
              <Link href="https://www.ctiddp.com" className="text-[#36A0F7] hover:underline">
                www.ctiddp.com
              </Link>
            </p>

            {/* Two-tone divider */}
            <div className="flex justify-center mt-5">
              <div
                className="flex h-[3.5px] rounded-full overflow-hidden"
                style={{ width: '72px' }}
              >
                <div className="flex-1" style={{ background: '#ffffff' }} />
                <div className="flex-1" style={{ background: '#FE5101' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-slate-50 py-10 md:py-16 lg:py-20 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/*
          CRITICAL FIX: was bare `flex gap-10` with no direction —
          sidebar and content crushed side-by-side on mobile/tablet.
          Now: flex-col on mobile, flex-row from lg upward.
        */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14">

          {/* ── Sticky TOC (Desktop only) ── */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">
                On This Page
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-[#0B2A6B] hover:bg-white transition-colors"
                  >
                    <span className="text-[10px] font-bold text-gray-300 w-5">{s.number}</span>
                    <span className="font-medium">{s.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Main Content ── */}
          {/*
            min-w-0: prevents flex child from overflowing its container
            when long words or the badge+title row push past the boundary.
          */}
          <div className="flex-1 min-w-0 space-y-5">

            {/* Mobile TOC — horizontal pill scroll */}
            {/*
              FIX: removed `scrollbar-hide` (needs a Tailwind plugin that
              may not be installed). Replaced with inline style which always works.
              FIX: removed `-mx-2 px-2` bleed trick — unreliable inside padded
              containers. Clean overflow-x-auto is sufficient.
            */}
            <div className="lg:hidden">
              <div
                className="flex gap-2 overflow-x-auto pb-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex-shrink-0 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-gray-500 hover:border-[#0B2A6B] hover:text-[#0B2A6B] transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* 01 — Introduction */}
            <SectionCard id="introduction" number="01" title="Introduction">
              <Para>
                CTIDDP values your privacy and is committed to protecting your
                personal and business information. This Privacy Policy explains how
                we collect, use, store, and safeguard your information when you use
                our website or services.
              </Para>
            </SectionCard>

            {/* 02 — Information We Collect */}
            <SectionCard id="information-we-collect" number="02" title="Information We Collect">
              <Para>We may collect the following types of information:</Para>
              <BulletList
                items={[
                  'Name, company name, and contact details',
                  'Email address and phone number',
                  'Shipment and logistics-related information',
                  'Billing and payment-related information',
                  'Business documents and import/export details',
                  'Website usage data, IP address, and browser information',
                ]}
              />
            </SectionCard>

            {/* 03 — How We Use */}
            <SectionCard id="how-we-use" number="03" title="How We Use Your Information">
              <Para>The information collected may be used to:</Para>
              <BulletList
                items={[
                  'Provide logistics and sourcing services',
                  'Process enquiries, shipments, and transactions',
                  'Coordinate customs clearance and delivery operations',
                  'Improve website functionality and user experience',
                  'Send service updates and operational communications',
                  'Maintain legal, accounting, and compliance records',
                ]}
              />
            </SectionCard>

            {/* 04 — Information Sharing */}
            <SectionCard id="information-sharing" number="04" title="Information Sharing">
              <Para>
                CTIDDP does not sell personal information. Information may be shared
                only with:
              </Para>
              <BulletList
                items={[
                  'Logistics and warehousing partners',
                  'Customs brokers and government authorities',
                  'Payment processing providers',
                  'Technology and service providers supporting operations',
                  'Legal authorities where required by law',
                ]}
              />
            </SectionCard>

            {/* 05 — Data Security */}
            <SectionCard id="data-security" number="05" title="Data Security">
              <Para>
                We implement reasonable administrative, technical, and operational
                safeguards to protect your information from unauthorized access,
                misuse, disclosure, or loss. However, no online system can be
                guaranteed as completely secure.
              </Para>
            </SectionCard>

            {/* 06 — Cookies & Tracking */}
            <SectionCard id="cookies" number="06" title="Cookies & Tracking Technologies">
              <Para>
                Our website may use cookies and analytics tools to improve
                functionality, monitor traffic, and enhance user experience. By
                using our website, you consent to the use of such technologies.
              </Para>
            </SectionCard>

            {/* 07 — Third-Party Services */}
            <SectionCard id="third-party" number="07" title="Third-Party Services">
              <Para>
                Our website may contain links to third-party websites or services.
                CTIDDP is not responsible for the privacy practices, content, or
                security of external websites.
              </Para>
            </SectionCard>

            {/* 08 — Data Retention */}
            <SectionCard id="data-retention" number="08" title="Data Retention">
              <Para>
                We retain information only for as long as necessary to provide
                services, comply with legal obligations, resolve disputes, and
                enforce agreements.
              </Para>
            </SectionCard>

            {/* 09 — Your Rights */}
            <SectionCard id="your-rights" number="09" title="Your Rights">
              <Para>Depending on applicable laws, you may have the right to:</Para>
              <BulletList
                items={[
                  'Request access to your personal information',
                  'Request correction of inaccurate information',
                  'Request deletion of information where applicable',
                  'Withdraw consent for certain communications',
                ]}
              />
            </SectionCard>

            {/* 10 — Children's Privacy */}
            <SectionCard id="children" number="10" title="Children's Privacy">
              <Para>
                CTIDDP services are intended for businesses and individuals above
                the age of 18. We do not knowingly collect personal information from
                children.
              </Para>
            </SectionCard>

            {/* 11 — Updates */}
            <SectionCard id="updates" number="11" title="Updates to This Privacy Policy">
              <Para>
                CTIDDP may update this Privacy Policy from time to time. Continued
                use of our website or services after updates indicates acceptance of
                the revised policy.
              </Para>
            </SectionCard>

            {/* 12 — Contact (Navy CTA card) */}
            <div
              id="contact"
              className="rounded-xl p-5 sm:p-6 md:p-8 scroll-mt-28"
              style={{ background: '#0B2A6B' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <SectionBadge number="12" ghost />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug pt-1">
                  Contact Information
                </h2>
              </div>

              <div className="md:pl-12">
                <p className="text-white/70 leading-relaxed mb-5 text-[15px]">
                  For any questions regarding this Privacy Policy, please contact:
                </p>
                {/* 1-col on mobile → 3-col from sm upward */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@ctiddp.com"
                      className="text-[#36A0F7] text-sm font-medium hover:underline break-all"
                    >
                      info@ctiddp.com
                    </a>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Phone
                    </p>
                    <a
                      href="tel:+918790018787"
                      className="text-[#36A0F7] text-sm font-medium hover:underline"
                    >
                      +91 87900 18787
                    </a>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Website
                    </p>
                    <Link
                      href="https://www.ctiddp.com"
                      className="text-[#36A0F7] text-sm font-medium hover:underline"
                    >
                      www.ctiddp.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}