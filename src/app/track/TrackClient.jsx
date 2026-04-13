'use client'

import { useState } from 'react'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Link from 'next/link'

const SHIPMENTS = {
  'CTI-2025-04817': {
    id: 'CTI-2025-04817',
    status: 'In Transit', statusClass: 'status-transit',
    origin: 'Guangzhou', originSub: 'Guangdong, China 🇨🇳',
    dest: 'Chennai Port', destSub: 'Tamil Nadu, India 🇮🇳',
    cargo: 'Electronics', cargoSub: '12 CBM · 2,400 KG',
    eta: '22 Mar 2025', etaSub: 'On schedule', etaColor: '#4ADE80',
    pct: 65,
    progressPoints: ['Factory Pickup', 'China Customs', 'Vessel Loaded', '🚢 Ocean Transit', 'India Customs', 'Delivered ✓'],
    activePoint: 3,
    timeline: [
      { done: true,   date: '05 Mar 2025 · 09:30', event: '✓ Factory Pickup Completed',             loc: '📍 Guangzhou, China' },
      { done: true,   date: '06 Mar 2025 · 15:00', event: '✓ Arrived at CTIDDP Warehouse',          loc: '📍 Guangzhou Hub' },
      { done: true,   date: '08 Mar 2025 · 11:00', event: '✓ Export Customs Cleared',               loc: '📍 Guangzhou Nansha Port' },
      { done: true,   date: '09 Mar 2025 · 20:00', event: '✓ Vessel Loaded — MV Chennai Express',   loc: '📍 Nansha International Terminal' },
      { active: true, date: 'Currently in transit', event: '🚢 Ocean Transit — ETA Chennai 22 Mar', loc: '📍 South China Sea' },
      { done: false,  date: 'Upcoming',             event: 'India Customs Clearance',               loc: '📍 Chennai Port' },
      { done: false,  date: 'Upcoming',             event: 'Last-Mile Delivery',                    loc: '📍 Your Warehouse' },
    ],
    docs: ['📄 Bill of Lading', '📋 Packing List', '🧾 Commercial Invoice', '📑 Export Declaration'],
  },
  'CTI-2025-03291': {
    id: 'CTI-2025-03291',
    status: 'Customs Clearance', statusClass: 'status-customs',
    origin: 'Yiwu', originSub: 'Zhejiang, China 🇨🇳',
    dest: 'Chennai Port', destSub: 'Tamil Nadu, India 🇮🇳',
    cargo: 'Textiles', cargoSub: '8 CBM · 1,200 KG',
    eta: '05 Mar 2025', etaSub: '⚠️ Slight delay', etaColor: '#FCD34D',
    pct: 82,
    progressPoints: ['Factory Pickup', 'China Customs', 'Vessel Loaded', 'Ocean Transit', '🛃 India Customs', 'Delivered ✓'],
    activePoint: 4,
    timeline: [
      { done: true,   date: '10 Feb 2025 · 10:00', event: '✓ Factory Pickup Completed',   loc: '📍 Yiwu, China' },
      { done: true,   date: '12 Feb 2025 · 14:00', event: '✓ Export Customs Cleared',     loc: '📍 Ningbo Port' },
      { done: true,   date: '14 Feb 2025 · 18:00', event: '✓ Vessel Departed — MV Indus', loc: '📍 Ningbo International Terminal' },
      { done: true,   date: '06 Mar 2025 · 07:00', event: '✓ Vessel Arrived Chennai',     loc: '📍 Chennai Port' },
      { active: true, date: 'In progress',          event: '🛃 BE Filed — Awaiting OOC',  loc: '📍 Chennai Customs' },
      { done: false,  date: 'Upcoming',             event: 'Last-Mile Delivery',           loc: '📍 Your Warehouse' },
    ],
    docs: ['📄 Bill of Lading', '📋 Packing List', '🧾 Commercial Invoice', '📑 Bill of Entry'],
  },
  'CTI-2025-01154': {
    id: 'CTI-2025-01154',
    status: 'Delivered', statusClass: 'status-delivered',
    origin: 'Shenzhen', originSub: 'Guangdong, China 🇨🇳',
    dest: 'Visakhapatnam', destSub: 'Andhra Pradesh, India 🇮🇳',
    cargo: 'Machine Parts', cargoSub: '22 CBM · 5,600 KG',
    eta: '12 Feb 2025', etaSub: '✅ Delivered on time', etaColor: '#4ADE80',
    pct: 100,
    progressPoints: ['Factory Pickup', 'China Customs', 'Vessel Loaded', 'Ocean Transit', 'India Customs', '✅ Delivered'],
    activePoint: 5,
    timeline: [
      { done: true, date: '02 Jan 2025 · 09:00', event: '✓ Factory Pickup Completed', loc: '📍 Shenzhen, China' },
      { done: true, date: '04 Jan 2025 · 16:00', event: '✓ Export Customs Cleared',   loc: '📍 Yantian Port' },
      { done: true, date: '06 Jan 2025 · 20:00', event: '✓ Vessel Loaded',            loc: '📍 Yantian Terminal' },
      { done: true, date: '01 Feb 2025 · 08:00', event: '✓ Vessel Arrived Vizag',     loc: '📍 Visakhapatnam Port' },
      { done: true, date: '10 Feb 2025 · 11:00', event: '✓ Customs OOC Obtained',     loc: '📍 Vizag Customs' },
      { done: true, date: '12 Feb 2025 · 15:30', event: '✓ Delivered — POD Signed',   loc: '📍 Client Warehouse, Vizag' },
    ],
    docs: ['📄 Bill of Lading', '📋 Packing List', '🧾 Commercial Invoice', '📑 Bill of Entry', '✅ Proof of Delivery'],
  },
}

const STATUS_STYLES = {
  'status-transit': {
    bg: 'bg-[rgba(59,130,246,0.1)]',
    text: 'text-blue-400',
    border: 'border-[rgba(59,130,246,0.25)]',
    dot: 'bg-blue-400',
  },
  'status-customs': {
    bg: 'bg-[rgba(245,158,11,0.1)]',
    text: 'text-amber-300',
    border: 'border-[rgba(245,158,11,0.25)]',
    dot: 'bg-amber-300',
  },
  'status-delivered': {
    bg: 'bg-[rgba(74,222,128,0.1)]',
    text: 'text-green-400',
    border: 'border-[rgba(74,222,128,0.25)]',
    dot: null,
  },
}

export default function TrackClient() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [notFound, setNotFound] = useState(false)

  const doTrack = (id) => {
    const v = (id ?? query).trim().toUpperCase()
    const d = SHIPMENTS[v]
    if (d) { setResult(d); setNotFound(false) }
    else { setResult(null); setNotFound(true) }
  }

  const loadDemo = (id) => {
    setQuery(id)
    doTrack(id)
  }

  const sc = result ? STATUS_STYLES[result.statusClass] : null

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
                name: 'CTIDDP Shipment Tracker',
                applicationCategory: 'Logistics',
                description: 'Track China to India DDP shipments with live milestone updates.',
                url: 'https://ctiddp.com/track',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ctiddp.com' },
                  { '@type': 'ListItem', position: 2, name: 'Track', item: 'https://ctiddp.com/track' },
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
          <span className="text-[11px] text-gold-light whitespace-nowrap">Track Shipment</span>
        </div>

        {/* Tracking section */}
        <section className="relative bg-deep px-4 sm:px-[60px] py-[60px] sm:py-[72px] overflow-hidden min-h-[60vh]">
          {/* Background radial */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)]" />

          <div className="relative z-10 max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="text-center mb-11">
              <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.3)] text-gold-light text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-[18px]">
                📍 Live Tracking
              </div>
              <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3.5vw,44px)] font-light text-white mb-2.5">
                Track Your <em className="italic text-gold-light">Shipment</em>
              </h1>
              <p className="text-muted text-sm max-w-[460px] mx-auto">
                Enter your CTIDDP tracking number or Bill of Lading number for real-time status.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-[700px] mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-2.5 mb-3">
                <input
                  className="flex-1 bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.2)] rounded-[3px] px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Enter tracking number — e.g. CTI-2025-04817"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && doTrack()}
                />
                <button
                  className="bg-gradient-to-br from-gold to-gold-light text-black px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase whitespace-nowrap transition-all hover:scale-[1.02] cursor-none"
                  onClick={() => doTrack()}
                >
                  Track →
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5 items-center">
                <span className="text-[rgba(255,255,255,0.3)] text-[10px]">Try demo:</span>
                {Object.keys(SHIPMENTS).map(id => (
                  <button
                    key={id}
                    onClick={() => loadDemo(id)}
                    className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[11px] px-3 py-1 rounded-full cursor-none hover:bg-[rgba(37,99,235,0.15)] transition-colors"
                  >
                    {id}
                  </button>
                ))}
              </div>

              {notFound && (
                <div className="mt-4 px-4 py-3 bg-[rgba(239,68,68,0.07)] border border-[rgba(239,68,68,0.2)] rounded-[3px] text-[13px] text-red-400 text-center">
                  Shipment not found. Please check the ID and try again, or WhatsApp us for help.
                </div>
              )}
            </div>

            {/* Result card */}
            {result && sc && (
              <div className="max-w-[900px] mx-auto bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.18)] rounded-[4px] overflow-hidden">
                {/* Header row */}
                <div className="px-5 sm:px-7 py-5 border-b border-[rgba(255,255,255,0.07)] flex flex-wrap justify-between items-center gap-3">
                  <div>
                    <div className="text-[10px] text-muted tracking-[1.5px] uppercase mb-1">Tracking Number</div>
                    <div className="font-['Cormorant_Garamond',serif] text-[22px] font-semibold text-gold-light">{result.id}</div>
                  </div>
                  <div className={`inline-flex items-center gap-1.5 ${sc.bg} border ${sc.border} ${sc.text} text-xs font-semibold px-3.5 py-1.5 rounded-full`}>
                    {sc.dot && <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} shrink-0`} />}
                    {result.status}
                  </div>
                </div>

                {/* Meta grid - responsive: 2x2 on mobile, 4x1 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[rgba(255,255,255,0.07)]">
                  {[
                    { label: 'Origin', val: result.origin, sub: result.originSub },
                    { label: 'Destination', val: result.dest, sub: result.destSub },
                    { label: 'Cargo', val: result.cargo, sub: result.cargoSub },
                    { label: 'ETA', val: result.eta, sub: result.etaSub, subColor: result.etaColor },
                  ].map((m, idx) => (
                    <div key={m.label} className={`p-4 sm:p-5 ${idx % 2 === 0 ? 'border-r border-[var(--overlay-card-border)]' : ''} lg:border-r lg:border-[var(--overlay-card-border)]`}>
                      <div className="text-[9px] text-muted tracking-[1.5px] uppercase mb-1.5">{m.label}</div>
                      <div className="text-sm font-medium mb-1">{m.val}</div>
                      <div className="text-[10px]" style={{ color: m.subColor ?? 'var(--muted)' }}>{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="px-5 sm:px-7 py-5 border-b border-[rgba(255,255,255,0.07)]">
                  <div className="text-[11px] text-muted mb-2">Shipment Progress</div>
                  <div className="h-1.5 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden mb-2.5">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500"
                      style={{ width: `${result.pct}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
                    {result.progressPoints.map((pt, i) => (
                      <div
                        key={i}
                        className={`text-[9px] text-center leading-tight ${i <= result.activePoint ? 'text-gold-light' : 'text-muted/50'}`}
                      >
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="px-5 sm:px-7 py-5 border-b border-[rgba(255,255,255,0.07)]">
                  <div className="text-[11px] text-muted tracking-[1.5px] uppercase mb-4">Shipment Timeline</div>
                  <div className="space-y-3">
                    {result.timeline.map((item, i) => (
                      <div key={i} className="flex gap-3.5 items-start">
                        <div className="flex flex-col items-center shrink-0">
                          <div
                            className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${
                              item.done ? 'bg-gold' : item.active ? 'bg-gold-light shadow-[0_0_8px_#2563EB] border-2 border-gold-light' : 'bg-[rgba(255,255,255,0.1)]'
                            }`}
                          />
                          {i < result.timeline.length - 1 && (
                            <div className={`w-px h-8 ${item.done ? 'bg-[rgba(37,99,235,0.3)]' : 'bg-[rgba(255,255,255,0.06)]'}`} />
                          )}
                        </div>
                        <div className="pb-2">
                          <div className="text-[10px] text-muted mb-0.5">{item.date}</div>
                          <div className={`text-[13px] ${item.done || item.active ? 'text-white' : 'text-muted/50'} ${item.active ? 'font-medium' : ''}`}>
                            {item.event}
                          </div>
                          <div className="text-[10px] text-muted mt-0.5">{item.loc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents */}
                <div className="px-5 sm:px-7 py-3.5 border-b border-[rgba(255,255,255,0.07)] flex flex-wrap items-center gap-2.5">
                  <span className="text-[9px] text-[rgba(255,255,255,0.35)] font-bold tracking-[1px] uppercase shrink-0">Documents</span>
                  {result.docs.map(doc => (
                    <span key={doc} className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.18)] text-gold-light text-[11px] px-2.5 py-0.5 rounded-[3px]">
                      {doc}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-5 sm:px-7 py-3.5 pb-5 flex flex-wrap items-center justify-between gap-2.5">
                  <span className="text-[11.5px] text-[rgba(255,255,255,0.4)]">
                    Need an update? <strong className="text-[rgba(255,255,255,0.7)]">WhatsApp ops team</strong>
                  </span>
                  <a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-4 py-2 rounded-[3px] text-[11.5px] font-medium no-underline transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
                  >
                    💬 WhatsApp Support
                  </a>
                </div>
              </div>
            )}

            {/* Status variants legend */}
            {!result && !notFound && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-7 max-w-[900px] mx-auto">
                {[
                  { cls: 'status-transit', label: 'In Transit', sub: 'Vessel en route to India' },
                  { cls: 'status-customs', label: 'Customs Clearance', sub: 'Bill of Entry filed' },
                  { cls: 'status-delivered', label: '✅ Delivered', sub: 'POD collected and shared' },
                ].map(s => {
                  const c = STATUS_STYLES[s.cls]
                  return (
                    <div key={s.cls} className="bg-[var(--overlay-card)] border border-[var(--overlay-card-border)] p-4 sm:p-[18px] rounded-[4px] text-center">
                      <div className={`inline-flex items-center gap-1.5 ${c.bg} border ${c.border} ${c.text} text-[11px] font-semibold px-3 py-1 rounded-full mb-2`}>
                        {c.dot && <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />}
                        {s.label}
                      </div>
                      <div className="text-[11px] text-muted">{s.sub}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-t border-b border-[rgba(37,99,235,0.15)] px-4 sm:px-[60px] py-12 sm:py-[60px] text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] mb-3.5">
            Want WhatsApp<br />
            <em className="italic text-gold-light">Milestone Alerts?</em>
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-[500px] mx-auto px-2">
            Every shipment update sent directly to your WhatsApp — cargo ready, vessel departure, customs, delivery.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all hover:bg-[rgba(37,211,102,0.12)] cursor-none"
            >
              💬 Enable WhatsApp Updates
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[var(--overlay-input)] border border-[rgba(37,99,235,0.3)] text-gold-light px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium no-underline transition-all hover:bg-[rgba(37,99,235,0.05)] cursor-none"
            >
              Get a New Quote
            </Link>
          </div>
        </div>

      </main>

      {/* Keyframes for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

    </>
  )
}