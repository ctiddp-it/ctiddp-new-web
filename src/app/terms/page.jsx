import Link from 'next/link'

export const metadata = {
  title: 'Terms and Conditions | CTIDDP',
  description:
    'Read the official Terms and Conditions for CTIDDP logistics, sourcing, shipping, customs clearance, warehousing, and related services.',
  alternates: {
    canonical: 'https://www.ctiddp.com/terms',
  },
}

const sections = [
  { id: 'acceptance',          number: '01', title: 'Acceptance of Terms' },
  { id: 'scope',               number: '02', title: 'Scope of Services' },
  { id: 'user-responsibilities', number: '03', title: 'User Responsibilities' },
  { id: 'pricing',             number: '04', title: 'Pricing & Payment' },
  { id: 'shipment',            number: '05', title: 'Shipment & Delivery' },
  { id: 'customs',             number: '06', title: 'Customs & Compliance' },
  { id: 'inspection',          number: '07', title: 'Inspection & QA' },
  { id: 'warehousing',         number: '08', title: 'Warehousing' },
  { id: 'liability',           number: '09', title: 'Limitation of Liability' },
  { id: 'insurance',           number: '10', title: 'Insurance' },
  { id: 'cancellation',        number: '11', title: 'Cancellation & Refund' },
  { id: 'force-majeure',       number: '12', title: 'Force Majeure' },
  { id: 'ip',                  number: '13', title: 'Intellectual Property' },
  { id: 'privacy',             number: '14', title: 'Privacy & Data' },
  { id: 'governing-law',       number: '15', title: 'Governing Law' },
  { id: 'updates',             number: '16', title: 'Updates to Terms' },
  { id: 'contact',             number: '17', title: 'Contact Information' },
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

export default function TermsPage() {
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

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
              Terms &amp; <span className="text-[#36A0F7]">Conditions</span>
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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14">

          {/* ── Sticky TOC (Desktop only) ── */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">
                On This Page
              </p>
              {/* max-h scroll on desktop since 17 sections is a long list */}
              <nav className="space-y-1 max-h-[calc(100vh-160px)] overflow-y-auto pr-2">
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

            {/* 01 — Acceptance */}
            <SectionCard id="acceptance" number="01" title="Acceptance of Terms">
              <Para>
                By accessing or using our services, you agree to comply with these
                Terms &amp; Conditions. If you do not agree, you should not use our
                services.
              </Para>
            </SectionCard>

            {/* 02 — Scope */}
            <SectionCard id="scope" number="02" title="Scope of Services">
              <Para>
                CTIDDP provides end-to-end logistics and sourcing solutions,
                including:
              </Para>
              <BulletList
                items={[
                  'Global DDP Shipping (China to India)',
                  'QC & Pre-Shipment Inspection',
                  'Multi-Vendor Consolidation',
                  'Warehousing & Cargo Handling',
                  'Customs Clearance & Duty Management',
                  'Last-Mile Delivery Across India',
                  'Supplier Payments Assistance',
                  'Canton Fair Support & Sourcing',
                ]}
              />
              <p className="text-gray-600 leading-relaxed mt-4 text-[15px]">
                All services are provided under a single contract model, unless
                stated otherwise.
              </p>
            </SectionCard>

            {/* 03 — User Responsibilities */}
            <SectionCard id="user-responsibilities" number="03" title="User Responsibilities">
              <Para>You agree to:</Para>
              <BulletList
                items={[
                  'Provide accurate shipment, product, and documentation details',
                  'Ensure goods comply with Indian import laws and regulations',
                  'Avoid restricted or prohibited items',
                  'Make timely payments as per agreed terms',
                ]}
              />
              <p className="text-gray-600 leading-relaxed mt-4 text-[15px]">
                Failure to comply may result in delays, penalties, or shipment
                rejection.
              </p>
            </SectionCard>

            {/* 04 — Pricing */}
            <SectionCard id="pricing" number="04" title="Pricing & Payment Terms">
              <BulletList
                items={[
                  'All quotes are based on provided shipment details and may vary if details change',
                  'Payments must be made in advance or as per agreed milestones',
                  'Duties, taxes, and applicable charges under DDP will be included unless stated otherwise',
                  'Delayed payments may lead to service suspension',
                ]}
              />
            </SectionCard>

            {/* 05 — Shipment */}
            <SectionCard id="shipment" number="05" title="Shipment & Delivery Terms">
              <BulletList
                items={[
                  'Delivery timelines are estimated, not guaranteed',
                  'Delays due to customs, port congestion, weather, or government actions are beyond our control',
                  'CTIDDP will make all reasonable efforts to ensure timely delivery',
                ]}
              />
            </SectionCard>

            {/* 06 — Customs */}
            <SectionCard id="customs" number="06" title="Customs & Compliance">
              <BulletList
                items={[
                  'We assist with customs clearance, but final authority lies with Indian customs authorities',
                  "Any penalties, seizures, or delays due to incorrect documentation or non-compliance are the client's responsibility",
                  'HS code classification and duty estimation are provided based on best knowledge',
                ]}
              />
            </SectionCard>

            {/* 07 — Inspection */}
            <SectionCard id="inspection" number="07" title="Inspection & Quality Assurance">
              <BulletList
                items={[
                  'QC and inspection services are conducted as per agreed standards (e.g., AQL)',
                  'Reports are shared for transparency',
                  'CTIDDP is not liable for manufacturing defects beyond inspection scope',
                ]}
              />
            </SectionCard>

            {/* 08 — Warehousing */}
            <SectionCard id="warehousing" number="08" title="Warehousing & Consolidation">
              <BulletList
                items={[
                  'Goods stored in our partner warehouses are handled with care',
                  'Storage duration limits and charges will be communicated in advance',
                  'Unclaimed goods beyond agreed timelines may incur additional charges',
                ]}
              />
            </SectionCard>

            {/* 09 — Liability */}
            <SectionCard id="liability" number="09" title="Limitation of Liability">
              <Para>CTIDDP is not liable for:</Para>
              <BulletList
                items={[
                  'Indirect or consequential losses',
                  'Supplier-related issues',
                  'Delays beyond operational control',
                ]}
              />
              <p className="text-gray-600 leading-relaxed mt-4 text-[15px]">
                Maximum liability (if applicable) is limited to the service fee paid.
              </p>
            </SectionCard>

            {/* 10 — Insurance */}
            <SectionCard id="insurance" number="10" title="Insurance">
              <BulletList
                items={[
                  'Cargo insurance may be included or optional, based on agreement',
                  'Clients are encouraged to verify coverage details before shipment',
                ]}
              />
            </SectionCard>

            {/* 11 — Cancellation */}
            <SectionCard id="cancellation" number="11" title="Cancellation & Refund Policy">
              <BulletList
                items={[
                  'Orders can be cancelled before shipment processing begins',
                  'Once shipment is in transit, cancellation is not possible',
                  'Refunds (if applicable) will be processed after deducting incurred costs',
                ]}
              />
            </SectionCard>

            {/* 12 — Force Majeure */}
            <SectionCard id="force-majeure" number="12" title="Force Majeure">
              <Para>
                CTIDDP is not responsible for delays or failures caused by events
                beyond control, including:
              </Para>
              <BulletList
                items={[
                  'Natural disasters',
                  'Government restrictions',
                  'War, strikes, or pandemics',
                ]}
              />
            </SectionCard>

            {/* 13 — IP */}
            <SectionCard id="ip" number="13" title="Intellectual Property">
              <Para>
                All website content, branding, and materials are owned by CTIDDP
                and cannot be used without permission.
              </Para>
            </SectionCard>

            {/* 14 — Privacy */}
            <SectionCard id="privacy" number="14" title="Privacy & Data Protection">
              <p className="text-gray-600 leading-relaxed text-[15px]">
                User data is handled securely and used only for service-related
                purposes. Please refer to our{' '}
                <Link href="/privacy" className="text-[#1A56DB] font-medium hover:underline">
                  Privacy Policy
                </Link>{' '}
                for details.
              </p>
            </SectionCard>

            {/* 15 — Governing Law */}
            <SectionCard id="governing-law" number="15" title="Governing Law & Jurisdiction">
              <Para>
                These Terms shall be governed by the laws of India. Any disputes
                shall be subject to the jurisdiction of courts in Visakhapatnam.
              </Para>
            </SectionCard>

            {/* 16 — Updates */}
            <SectionCard id="updates" number="16" title="Updates to Terms">
              <Para>
                CTIDDP reserves the right to update these Terms at any time.
                Continued use of services implies acceptance of revised terms.
              </Para>
            </SectionCard>

            {/* 17 — Contact (Navy CTA card) */}
            <div
              id="contact"
              className="rounded-xl p-5 sm:p-6 md:p-8 scroll-mt-28"
              style={{ background: '#0B2A6B' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <SectionBadge number="17" ghost />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug pt-1">
                  Contact Information
                </h2>
              </div>

              <div className="md:pl-12">
                <p className="text-white/70 leading-relaxed mb-5 text-[15px]">
                  For any queries related to these Terms:
                </p>
                {/* 1-col on mobile → 2-col from sm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}