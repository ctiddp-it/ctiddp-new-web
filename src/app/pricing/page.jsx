import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'

export const metadata = {
  title: 'DDP Pricing & Plans — China to India Shipping',
  description: 'Transparent all-inclusive DDP pricing for China to India shipments. LCL Express, FCL DDP, and Volume Partner plans.',
  keywords: ['DDP shipping price China India', 'China India freight cost', 'landed cost calculation India', 'LCL FCL DDP rates India'],
  openGraph: { title: 'DDP Pricing — One Price, Everything Included', description: 'LCL, FCL, and enterprise DDP plans. BCD+IGST pre-paid.', url: 'https://ctiddp.com/pricing' },
  alternates: { canonical: 'https://ctiddp.com/pricing' },
}

const PLANS = [
  { tier: 'Starter', name: 'LCL Express', tagline: 'For importers shipping less than a full container', price: 'Custom', per: '/shipment', featured: false, ctaLabel: 'Get LCL Quote →', ctaHref: '/quote', features: ['LCL consolidation from 1 CBM', 'Full DDP door-to-door', 'BCD+IGST pre-paid', 'WhatsApp shipment updates', 'PAN-India last-mile delivery'], noFeatures: ['Dedicated account manager', 'Pre-shipment inspection'] },
  { tier: 'Business', name: 'FCL DDP', tagline: 'Full container load — best value per CBM', price: 'Custom', per: '/container', featured: true, ctaLabel: 'Get FCL Quote →', ctaHref: '/quote', features: ['FCL 20ft or 40ft container', 'Full DDP door-to-door', 'BCD+IGST+SWS pre-paid', 'Dedicated account manager', 'WhatsApp milestone updates', 'Pre-shipment QC inspection', 'FTA duty optimisation'], noFeatures: [] },
  { tier: 'Enterprise', name: 'Volume Partner', tagline: '5+ containers/month — dedicated rates and SLAs', price: 'Custom', per: '/programme', featured: false, ctaLabel: 'Talk to Sales →', ctaHref: '/contact', features: ['Multi-container programme pricing', 'Full DDP door-to-door', 'Dedicated China + India ops team', 'Real-time KPI dashboard access', 'Canton Fair sourcing support', 'Supplier payment management', 'Trade consulting & HS strategy'], noFeatures: [] },
]

const PRICING_FAQS = [
  { q: 'How is DDP price calculated?', a: 'Your DDP quote includes: sea freight + marine insurance + China export charges + BCD + IGST + SWS + India port handling + last-mile to your door. All pre-calculated and fixed before goods move.' },
  { q: 'Are there any charges not included?', a: 'No. Our quote is all-inclusive. If BIS certification or special compliance is needed, that cost is confirmed upfront in your quote.' },
  { q: 'How do I get a quote?', a: 'Fill in our quote form or WhatsApp us with cargo details — category, weight, volume, origin city, destination. We respond within 2 hours with a full breakdown.' },
  { q: 'Do you offer volume discounts?', a: 'Yes. Regular shippers with 3+ containers/month receive preferential rates. Talk to our team about a dedicated rate agreement.' },
]

const EXAMPLE_ROWS = [
  { id: 'A', desc: 'Cost of Goods FOB China', detail: '40 × 1000 × 10.8', amount: '43,200' },
  { id: 'B', desc: 'Freight Charges (5000 per CBM)', detail: '1 CBM', amount: '5,000' },
  { id: 'C', desc: 'Value for Levying Commission', detail: 'A + B', amount: '48,200' },
  { id: 'D', desc: 'Commission 3% on 48,200', detail: '3%', amount: '1,446' },
  { id: 'E', desc: 'Custom Duty @ 25%', detail: '[C + D] × 25%', amount: '12,411.50' },
  { id: 'F', desc: 'Social Welfare Surcharge @ 10% of Custom Duty', detail: 'E × 10%', amount: '1,241.15' },
  { id: 'G', desc: 'Total Cost', detail: '[C+D+E+F]', amount: '63,298.65' },
  { id: 'H', desc: 'GST on the Bill', detail: 'G × 18%', amount: '11,393.76' },
  { id: 'I', desc: 'Total', detail: '[G+H]', amount: '74,692.41' },
  { id: 'J', desc: 'Cartage from Port to Doorstep', detail: 'Last mile', amount: '1,500' },
  { id: 'K', desc: 'Landed Cost at Doorstep', detail: '[I+J]', amount: '76,192.41', highlight: true },
]

export default function PricingPage() {
  return (
    <>
      <ScrollRevealInit />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'WebPage', '@id': 'https://ctiddp.com/pricing', name: 'DDP Shipping Pricing & Plans', url: 'https://ctiddp.com/pricing' }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ctiddp.com' }, { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://ctiddp.com/pricing' }] }] }) }} />

        <nav className="py-3 px-15 text-[11px] text-muted flex items-center gap-2">
          <span><Link href="/" className="text-muted/60 no-underline">Home</Link></span>
          <span className="text-[rgba(37,99,235,0.3)]">›</span><span className="text-gold-light">Pricing</span>
        </nav>

        {/* Hero */}
        <section className="relative py-28 px-10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(37,99,235,0.1),transparent_70%)]" />
          <div className="relative z-[1] max-w-[680px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-gold-light text-[11px] font-medium tracking-[2px] uppercase py-2 px-5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]" />Transparent Pricing
            </div>
            <h1 className="font-[var(--font-playfair),'playfair_Garamond',serif] text-[clamp(36px,5vw,60px)] font-light leading-[1.1] text-white mb-4">Simple, Transparent<br /><em className="italic text-gold-light">DDP Pricing.</em></h1>
            <p className="text-[15px] text-muted leading-[1.7] max-w-[520px] mx-auto">One all-inclusive DDP price. No freight invoice. No customs invoice. No surprises.</p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-11">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-gold block mb-3">DDP Service Plans</span>
              <h2 className="font-[var(--font-playfair),'playfair_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light text-white">Choose Your<br /><em className="italic text-gold-light">Service Level</em></h2>
              <p className="text-sm text-muted leading-[1.7] mt-2.5 max-w-[480px] mx-auto">All plans include full DDP with BCD+IGST pre-paid. Scale up as your volume grows.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PLANS.map(plan => (
                <div key={plan.name} className={`reveal rounded-[3px] py-8 px-7 flex flex-col${plan.featured ? ' bg-[rgba(37,99,235,0.06)] border-2 border-gold relative' : ' bg-surface border border-border'}`}>
                  {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[1.5px] uppercase bg-gold text-black py-1 px-3 rounded-full">Most Popular</div>}
                  <span className="text-[9px] tracking-[2px] uppercase text-gold mb-2">{plan.tier}</span>
                  <div className="font-[var(--font-playfair),'playfair_Garamond',serif] text-2xl font-semibold text-white mb-1">{plan.name}</div>
                  <div className="text-xs text-muted mb-4">{plan.tagline}</div>
                  <div className="font-[var(--font-playfair),'playfair_Garamond',serif] text-4xl font-semibold text-gold-light mb-1">{plan.price}<span className="text-sm text-muted font-normal">{plan.per}</span></div>
                  <div className="h-px bg-[rgba(37,99,235,0.15)] my-5" />
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2 text-xs text-[rgba(250,250,248,0.8)] mb-2">
                      <span className="text-gold shrink-0">✓</span>{f}
                    </div>
                  ))}
                  {plan.noFeatures.map(f => (
                    <div key={f} className="flex items-start gap-2 text-xs text-muted/50 mb-2 line-through">
                      <span className="shrink-0">✕</span>{f}
                    </div>
                  ))}
                  <Link href={plan.ctaHref} className={`mt-auto py-3 text-center rounded-sm text-xs font-bold tracking-[0.8px] uppercase no-underline transition-all duration-200 cursor-none block${plan.featured ? ' bg-linear-to-br from-gold to-gold-light text-black shadow-[0_6px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5' : ' border border-[rgba(37,99,235,0.4)] text-gold-light hover:bg-[rgba(37,99,235,0.08)]'}`}>{plan.ctaLabel}</Link>
                </div>
              ))}
            </div>

            <div className="mt-8 py-5 px-6 bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.12)] rounded-[3px] flex items-start gap-3.5">
              <span className="text-xl shrink-0">ℹ️</span>
              <div>
                <strong className="text-[13px] text-white block mb-1">What&apos;s always included in every DDP quote?</strong>
                <p className="text-xs text-muted leading-[1.7]">Ocean or air freight · Marine insurance · China export customs · Bill of Entry filing · BCD · IGST · SWS · Port handling · Last-mile delivery to your address · Proof of Delivery. One number. Final price.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Landed Cost Example */}
        <section className="py-20 px-10 bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-gold block mb-3">How Landed Cost Works</span>
              <h2 className="font-[var(--font-playfair),'playfair_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light text-white">Example Calculation<br /><em className="italic text-gold-light">of Landed Cost</em></h2>
              <p className="text-sm text-muted leading-[1.7] mt-2.5 max-w-[580px] mx-auto">You bought 100 PU Bags @ 40 RMB/piece from Canton Fair. 1 CBM, 200 KG. Exchange rate 1 RMB = ₹10.8. Here&apos;s how the landed cost breaks down:</p>
            </div>

            <div className="reveal max-w-[820px] mx-auto bg-surface border border-[rgba(37,99,235,0.15)] rounded overflow-hidden">
              <div className="grid grid-cols-[60px_1fr_160px_140px] bg-[rgba(37,99,235,0.1)] border-b-2 border-b-[rgba(37,99,235,0.25)]">
                {['S.NO', 'DESCRIPTION', 'DETAILS', 'AMOUNT (₹)'].map(h => (
                  <div key={h} className="py-3 px-4 text-[10px] font-bold tracking-[1.5px] uppercase text-gold">{h}</div>
                ))}
              </div>
              {EXAMPLE_ROWS.map((row, i) => (
                <div key={row.id} className={`grid grid-cols-[60px_1fr_160px_140px]${i < EXAMPLE_ROWS.length - 1 ? ' border-b border-[rgba(255,255,255,0.04)]' : ''}${row.highlight ? ' bg-[rgba(37,99,235,0.08)]' : ''}`}>
                  <div className="py-[11px] px-4 text-[13px] text-gold-light font-semibold">{row.id}</div>
                  <div className={`py-[11px] px-4 text-[13px]${row.highlight ? ' text-white font-semibold' : ' text-[rgba(250,250,248,0.8)]'}`}>{row.desc}</div>
                  <div className="py-[11px] px-4 text-xs text-muted font-mono">{row.detail}</div>
                  <div className={`py-[11px] px-4${row.highlight ? ' text-base text-gold-light font-bold font-[var(--font-playfair),\'playfair_Garamond\',serif]' : ' text-[13px] text-[rgba(250,250,248,0.8)]'}`}>₹{row.amount}</div>
                </div>
              ))}
            </div>

            <div className="max-w-[820px] mx-auto mt-4 flex flex-col gap-1.5">
              <p className="text-xs text-muted flex gap-2"><span className="text-green shrink-0">✓</span>GST paid (₹11,393.76) can be claimed as Input Tax Credit (ITC) by registered traders and manufacturers.</p>
              <p className="text-xs text-muted flex gap-2"><span className="text-[rgba(37,99,235,0.6)] shrink-0">ℹ</span>Actual charges calculated after final negotiations. In our DDP service, all duties and freight are pre-included in your quote.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
            <div>
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-gold block mb-3">Pricing FAQs</span>
              <h2 className="font-[var(--font-playfair),'playfair_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light text-white">Common Pricing<br /><em className="italic text-gold-light">Questions</em></h2>
            </div>
            <div className="flex flex-col gap-4">
              {PRICING_FAQS.map(faq => (
                <div key={faq.q} className="reveal border-b border-[rgba(37,99,235,0.1)] pb-5">
                  <div className="font-[var(--font-playfair),'playfair_Garamond',serif] text-lg font-semibold text-white mb-2">{faq.q}</div>
                  <div className="text-[13px] text-muted leading-[1.7]">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative text-center py-16 px-10 overflow-hidden bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(37,99,235,0.08),transparent_70%)] border-y border-[rgba(37,99,235,0.1)]">
          <h2 className="font-[var(--font-playfair),'playfair_Garamond',serif] text-[clamp(28px,3.5vw,44px)] font-light text-white mb-3">Want a Quote<br /><em className="italic text-gold-light">Right Now?</em></h2>
          <p className="text-sm text-muted max-w-[420px] mx-auto mb-7">Share your cargo details and get a full DDP price within 2 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/quote" className="bg-linear-to-br from-gold to-gold-light text-black py-[13px] px-8 rounded-sm font-bold text-[13px] tracking-[1px] uppercase no-underline inline-flex items-center gap-2 shadow-[0_8px_28px_rgba(37,99,235,0.3)] transition-all duration-200 cursor-none hover:-translate-y-0.5">Get Your Quote →</Link>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green py-[13px] px-8 rounded-sm text-[13px] font-medium no-underline transition-all duration-200 cursor-none hover:bg-[rgba(37,211,102,0.13)]">💬 WhatsApp Us</a>
          </div>
        </div>
      </main>
    </>
  )
}