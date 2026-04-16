'use client'

import { useState } from 'react'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'

export default function DutyCalcClient() {
  const [hs, setHs] = useState('')
  const [cif, setCif] = useState('')
  const [bcdRate, setBcdRate] = useState('')
  const [igstRate, setIgstRate] = useState('18')
  const [result, setResult] = useState(null)

  const calc = () => {
    const cifV = parseFloat(cif) || 0
    const bcdR = parseFloat(bcdRate) || 0
    const igstR = parseFloat(igstRate) || 18
    if (!cifV) return
    const bcdV = cifV * bcdR / 100
    const swsV = bcdV * 0.1
    const base = cifV + bcdV + swsV
    const igstV = base * igstR / 100
    const total = cifV + bcdV + swsV + igstV
    setResult({ cif: cifV, bcd: bcdV, sws: swsV, igst: igstV, total })
  }

  const fmt = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <>
      <ScrollRevealInit />
      <main className="bg-black text-white font-['Outfit',sans-serif]">

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                name: 'India Import Duty Calculator',
                applicationCategory: 'Finance',
                description: 'Calculate BCD, SWS, and IGST for imports to India. Estimate your total landed cost instantly.',
                url: 'https://ctiddp.com/resources/duty-calculator',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ctiddp.com' },
                  { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://ctiddp.com/resources' },
                  { '@type': 'ListItem', position: 3, name: 'Duty Calculator', item: 'https://ctiddp.com/resources/duty-calculator' },
                ],
              },
            ],
          }) }}
        />

        {/* Breadcrumb */}
        <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
          <span className="text-[11px] text-muted/60 whitespace-nowrap">
            <Link href="/" className="text-muted/60 no-underline">Home</Link>
          </span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-muted/60 whitespace-nowrap">Resources</span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-blue-light whitespace-nowrap">Duty Calculator</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[38vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[90px] pb-[40px] sm:pb-[60px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-[740px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              India Import Duty Calculator
            </div>
            <h1 className="font-garamond text-[clamp(34px,5.5vw,68px)] font-light leading-[1.1] mb-[14px]">
              Know Your Duties<br />
              <em className="italic bg-linear-to-br from-gold to-blue-pale bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Before You Ship.
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[500px] mx-auto px-2">
              Estimate BCD + IGST + SWS instantly. In our DDP service, all these duties are pre-paid by us.
            </p>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-deep">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[60px] items-start">
            
            {/* Left Column - Explanation */}
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                How India Duties Work
              </span>
              <h2 className="font-garamond text-[clamp(24px,3.2vw,40px)] font-light leading-[1.1] mb-[14px]">
                What Duties Apply<br />
                <em className="italic text-blue-light">To Your Goods?</em>
              </h2>
              <p className="text-[rgba(250,250,248,0.6)] text-[13.5px] leading-[1.8] mb-6">
                India levies multiple taxes on imports. Understanding them upfront prevents costly port surprises.
              </p>

              {/* Duty Cards */}
              <div className="flex flex-col gap-[14px] mb-[22px]">
                {[
                  { icon: '💰', title: 'BCD — Basic Customs Duty', desc: 'Primary import tariff on CIF value. Rates vary by HS code — typically 0–30%. Applied first.' },
                  { icon: '📊', title: 'SWS — Social Welfare Surcharge', desc: '10% surcharge on BCD amount. Mandatory for most goods.' },
                  { icon: '🧾', title: 'IGST — Integrated GST', desc: '5–28% GST on (CIF + BCD + SWS). You can claim this as Input Tax Credit (ITC).' },
                ].map(d => (
                  <div key={d.title} className="flex gap-3 items-start">
                    <div className="w-[38px] h-[38px] bg-[rgba(37,99,235,0.1)] rounded-[9px] flex items-center justify-center text-base shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <strong className="text-[12.5px] text-white block mb-1">{d.title}</strong>
                      <p className="text-[11.5px] text-muted leading-[1.5]">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* DDP Highlight */}
              <div className="p-3.5 sm:p-4 bg-[rgba(37,99,235,0.07)] border-l-2 border-gold text-xs text-muted italic">
                <strong>In our DDP service</strong>, all duties are paid by us — included in your quoted price. No port surprises.
              </div>

              {/* Formula Breakdown */}
              <div className="mt-7 bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.12)] rounded-[4px] p-4 sm:p-5">
                <div className="text-[10px] text-blue tracking-[2px] uppercase mb-3.5">Calculation Formula</div>
                {[
                  'BCD = CIF × BCD Rate',
                  'SWS = BCD × 10%',
                  'IGST Base = CIF + BCD + SWS',
                  'IGST = IGST Base × IGST Rate',
                  'Total Landed = CIF + BCD + SWS + IGST',
                ].map((f, i) => (
                  <div
                    key={i}
                    className={`font-mono text-xs py-1.5 ${i < 4 ? 'border-b border-[rgba(255,255,255,0.04)]' : ''} ${i === 4 ? 'text-blue-light font-semibold' : 'text-[rgba(250,250,248,0.6)]'}`}
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Calculator Card */}
            <div className="bg-[var(--overlay-input)] border border-border rounded-[4px] p-5 sm:p-7">
              <h3 className="font-garamond text-xl font-semibold mb-5 text-blue-light">
                📊 Calculate Your Landed Cost
              </h3>

              {/* HS Code Field */}
              <div className="mb-4">
                <label className="block text-[11px] text-muted uppercase tracking-[1px] mb-1.5">HS Code (First 4 digits)</label>
                <input
                  type="text"
                  placeholder="e.g. 8544 (Wiring Harnesses)"
                  value={hs}
                  onChange={e => setHs(e.target.value)}
                  className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>

              {/* CIF Value Field */}
              <div className="mb-4">
                <label className="block text-[11px] text-muted uppercase tracking-[1px] mb-1.5">CIF Value (USD)</label>
                <input
                  type="number"
                  placeholder="e.g. 12000"
                  value={cif}
                  onChange={e => setCif(e.target.value)}
                  className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>

              {/* BCD Rate Field */}
              <div className="mb-4">
                <label className="block text-[11px] text-muted uppercase tracking-[1px] mb-1.5">BCD Rate (%)</label>
                <input
                  type="number"
                  placeholder="e.g. 20"
                  step="0.5"
                  value={bcdRate}
                  onChange={e => setBcdRate(e.target.value)}
                  className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>

              {/* IGST Rate Select */}
              <div className="mb-5">
                <label className="block text-[11px] text-muted uppercase tracking-[1px] mb-1.5">IGST Rate (%)</label>
                <select
                  value={igstRate}
                  onChange={e => setIgstRate(e.target.value)}
                  className="w-full bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                >
                  <option value="18">18% (Standard)</option>
                  <option value="5">5% (Essential goods)</option>
                  <option value="12">12%</option>
                  <option value="28">28% (Luxury / demerit)</option>
                  <option value="0">0% (Exempt)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calc}
                className="w-full bg-linear-to-br from-gold to-gold-light text-black px-6 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none mb-5"
              >
                Calculate Landed Cost →
              </button>

              {/* Results */}
              {result && (
                <div className="mt-4 pt-4 border-t border-[rgba(37,99,235,0.15)]">
                  {[
                    { label: 'CIF Value', val: fmt(result.cif) },
                    { label: `BCD (${bcdRate || 0}%)`, val: fmt(result.bcd) },
                    { label: 'SWS (10% of BCD)', val: fmt(result.sws) },
                    { label: `IGST (${igstRate}%)`, val: fmt(result.igst) },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
                      <span className="text-xs text-muted">{r.label}</span>
                      <span className="text-[13px] font-medium text-white">{r.val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-3 mt-1 bg-[rgba(37,99,235,0.05)] -mx-2 px-2 rounded">
                    <span className="text-[13px] font-semibold text-white">Total Landed Cost</span>
                    <span className="text-base font-bold text-blue-light">{fmt(result.total)}</span>
                  </div>
                  <div className="mt-3.5 p-2.5 bg-[rgba(74,222,128,0.06)] border border-[rgba(74,222,128,0.15)] rounded-[3px] text-[11px] text-green-400">
                    ✓ In our DDP service, this entire amount is pre-paid. You receive goods free of all port charges.
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-5 pt-4 border-t border-[var(--overlay-card-border)]">
                <div className="text-[10px] text-muted leading-relaxed">
                  <strong className="text-[rgba(250,250,248,0.5)]">Disclaimer:</strong> This is an estimate only. Actual duties depend on final HS classification, invoice value, and applicable exemptions. Always verify with a licensed customs broker.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common HS Rates Table */}
        <section className="px-4 sm:px-[60px] py-[60px] sm:py-[90px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Quick Reference
              </span>
              <h2 className="font-garamond text-[clamp(30px,4vw,56px)] font-light leading-[1.1]">
                Common BCD Rates<br />
                <em className="italic text-blue-light">for China Imports</em>
              </h2>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr className="border-b border-[rgba(37,99,235,0.2)]">
                    {['HS Chapter', 'Product Category', 'Typical BCD', 'IGST', 'Notes'].map(h => (
                      <th key={h} className="text-left px-3 sm:px-3.5 py-2.5 text-[10px] tracking-[1.5px] uppercase text-blue font-semibold whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Ch. 85', 'Electronics & Electrical Equipment', '10–20%', '18%', 'BIS license may be required'],
                    ['Ch. 50–63', 'Textiles & Garments', '10–20%', '5–12%', 'Vary by fabric type'],
                    ['Ch. 84', 'Machinery & Mechanical', '7.5–10%', '18%', 'Some capital goods at 0%'],
                    ['Ch. 39', 'Plastics & Articles', '10–15%', '18%', ''],
                    ['Ch. 73', 'Iron & Steel Articles', '10–15%', '18%', 'Anti-dumping may apply'],
                    ['Ch. 64', 'Footwear', '20–25%', '18%', 'High duty category'],
                    ['Ch. 94', 'Furniture', '25%', '18%', 'High duty — DDP savings significant'],
                    ['Ch. 95', 'Toys & Games', '60%', '12%', 'Very high BCD'],
                  ].map(([ch, cat, bcd, igst, note]) => (
                    <tr key={ch} className="border-b border-[rgba(255,255,255,0.04)]">
                      <td className="px-3 sm:px-3.5 py-3 text-blue-light font-mono text-[11px] whitespace-nowrap">{ch}</td>
                      <td className="px-3 sm:px-3.5 py-3 text-white whitespace-nowrap">{cat}</td>
                      <td className="px-3 sm:px-3.5 py-3 text-muted font-medium whitespace-nowrap">{bcd}</td>
                      <td className="px-3 sm:px-3.5 py-3 text-muted whitespace-nowrap">{igst}</td>
                      <td className="px-3 sm:px-3.5 py-3 text-muted text-[11px]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-t border-b border-[rgba(37,99,235,0.15)] px-4 sm:px-[60px] py-12 sm:py-[60px] text-center">
          <h2 className="font-garamond text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] mb-3.5">
            Duties Calculated.<br />
            <em className="italic text-blue-light">Now Let Us Pay Them.</em>
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-[500px] mx-auto px-2">
            In our DDP service, every duty is pre-paid and included in your quote. Zero port surprises.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-linear-to-br from-gold to-gold-light text-black px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none"
            >
              Get Full DDP Quote →
            </Link>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
            >
              💬 Ask About Duties
            </a>
          </div>
        </div>

      </main>

      {/* Keyframes for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

    </>
  )
}