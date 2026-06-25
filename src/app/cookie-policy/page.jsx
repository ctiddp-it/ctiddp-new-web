import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy | CTIDDP',
  description:
    'Read the official Cookie Policy for CTIDDP regarding website cookies, analytics, tracking technologies, and user preferences.',
  alternates: {
    canonical: 'https://www.ctiddp.com/cookie-policy',
  },
}

const sections = [
  { id: 'introduction',    number: '01', title: 'Introduction' },
  { id: 'what-are-cookies', number: '02', title: 'What Are Cookies?' },
  { id: 'types',           number: '03', title: 'Types of Cookies' },
  { id: 'third-party',     number: '04', title: 'Third-Party Cookies' },
  { id: 'how-we-use',      number: '05', title: 'How We Use Cookies' },
  { id: 'managing',        number: '06', title: 'Managing Cookies' },
  { id: 'data-protection', number: '07', title: 'Data Protection' },
  { id: 'updates',         number: '08', title: 'Policy Updates' },
  { id: 'contact',         number: '09', title: 'Contact Information' },
]

/* ── Section Number Badge ── */
const SectionBadge = ({ number }) => (
  <span
    className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold text-white flex-shrink-0"
    style={{ background: '#0B2A6B' }}
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

/* ── Section card wrapper ── */
const SectionCard = ({ id, number, title, children }) => (
  <div
    id={id}
    className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6 md:p-8 scroll-mt-28"
  >
    {/* Badge + title row — wraps gracefully on very narrow screens */}
    <div className="flex items-start gap-3 mb-4">
      <SectionBadge number={number} />
      <h2
        className="text-lg sm:text-xl md:text-2xl font-bold leading-snug pt-1"
        style={{ color: '#0B2A6B' }}
      >
        {title}
      </h2>
    </div>
    {/* Content indented to align with title on md+ */}
    <div className="md:pl-12">{children}</div>
  </div>
)

const Para = ({ children }) => (
  <p className="text-gray-600 leading-relaxed text-[15px]">{children}</p>
)

/* ── Cookie type sub-cards ── */
const cookieTypes = [
  {
    name: 'Essential Cookies',
    color: '#003DA5',
    description:
      'These cookies are necessary for core website functionality, including navigation, security, and form submissions.',
  },
  {
    name: 'Performance & Analytics Cookies',
    color: '#0B2A6B',
    description:
      'These cookies help us understand how visitors interact with our website by collecting anonymous usage and performance data.',
  },
  {
    name: 'Functional Cookies',
    color: '#1A56DB',
    description:
      'These cookies remember user preferences and improve personalized experiences on the website.',
  },
  {
    name: 'Marketing & Advertising Cookies',
    color: '#FE5101',
    description:
      'These cookies may be used to deliver relevant advertisements, measure campaign effectiveness, and track interactions with marketing content.',
  },
]

export default function CookiePolicyPage() {
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

            {/* Heading — tighter scale on mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
              Cookie <span className="text-[#36A0F7]">Policy</span>
            </h1>

            {/* Meta */}
            <p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              Effective Date: 01-05-2026 &nbsp;·&nbsp; CTIDDP &nbsp;·&nbsp;{' '}
              <Link href="https://www.ctiddp.com" className="text-[#36A0F7] hover:underline">
                www.ctiddp.com
              </Link>
            </p>

            {/* Divider */}
            <div className="flex justify-center mt-5">
              <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
                <div className="flex-1" style={{ background: '#ffffff' }} />
                <div className="flex-1" style={{ background: '#FE5101' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-slate-50 py-10 md:py-16 lg:py-20 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14">

          {/* ── Sticky TOC (Desktop) ── */}
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
          <div className="flex-1 min-w-0 space-y-5">

            {/* Mobile TOC — horizontal pill scroll */}
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
                This Cookie Policy explains how CTIDDP uses cookies and similar
                technologies when you visit our website. By continuing to use our
                website, you agree to the use of cookies as described in this policy.
              </Para>
            </SectionCard>

            {/* 02 — What Are Cookies? */}
            <SectionCard id="what-are-cookies" number="02" title="What Are Cookies?">
              <Para>
                Cookies are small text files stored on your device when you visit a
                website. They help websites function efficiently, remember user
                preferences, and improve browsing experience.
              </Para>
            </SectionCard>

            {/* 03 — Types */}
            <SectionCard id="types" number="03" title="Types of Cookies We Use">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.name}
                    className="rounded-lg border border-slate-100 bg-slate-50 p-4 sm:p-5 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: cookie.color }}
                      />
                      <h3 className="text-sm font-bold leading-snug" style={{ color: '#0B2A6B' }}>
                        {cookie.name}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      {cookie.description}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* 04 — Third-Party */}
            <SectionCard id="third-party" number="04" title="Third-Party Cookies">
              <Para>
                CTIDDP may use third-party services such as analytics tools,
                advertising platforms, chat integrations, or embedded content that
                place cookies on your device. These third parties manage their own
                cookie and privacy practices.
              </Para>
            </SectionCard>

            {/* 05 — How We Use */}
            <SectionCard id="how-we-use" number="05" title="How We Use Cookies">
              <Para>Cookies may be used to:</Para>
              <BulletList
                items={[
                  'Maintain website security and functionality',
                  'Analyze website traffic and user behavior',
                  'Improve website performance and experience',
                  'Remember user settings and preferences',
                  'Support marketing and advertising activities',
                ]}
              />
            </SectionCard>

            {/* 06 — Managing */}
            <SectionCard id="managing" number="06" title="Managing Cookies">
              <Para>
                Most web browsers allow you to control or disable cookies through
                browser settings. Disabling certain cookies may affect website
                functionality and user experience.
              </Para>
            </SectionCard>

            {/* 07 — Data Protection */}
            <SectionCard id="data-protection" number="07" title="Data Protection">
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Information collected through cookies is handled securely and in
                accordance with our{' '}
                <Link href="/privacy" className="text-[#1A56DB] font-medium hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </SectionCard>

            {/* 08 — Updates */}
            <SectionCard id="updates" number="08" title="Updates to This Cookie Policy">
              <Para>
                CTIDDP may update this Cookie Policy periodically. Continued use of
                the website after updates indicates acceptance of the revised policy.
              </Para>
            </SectionCard>

            {/* 09 — Contact (Navy CTA card) */}
            <div
              id="contact"
              className="rounded-xl p-5 sm:p-6 md:p-8 scroll-mt-28"
              style={{ background: '#0B2A6B' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold flex-shrink-0 bg-white/15 text-white">
                  09
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug pt-1">
                  Contact Information
                </h2>
              </div>

              <div className="md:pl-12">
                <p className="text-white/70 leading-relaxed mb-5 text-[15px]">
                  For questions related to this Cookie Policy, please contact:
                </p>
                {/* Contact cards — stacks to 1-col on mobile, 3-col on sm+ */}
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