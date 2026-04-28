'use client'

import { useState } from 'react'
import Link from 'next/link'

const DEMO_DATA = {
  id: 'CTI-2025-04817', origin: '🇨🇳 Guangzhou', destination: '🇮🇳 Chennai Port',
  mode: 'Sea LCL', weight: '2,400 KG', cbm: '12 CBM', eta: '22 Mar 2025',
  status: 'In Transit', pct: 65,
}

const MILESTONES = [
  { done: true,   icon: '✓', label: 'Factory Pickup',     date: '05 Mar · Guangzhou',     colr: 'text-blue-light' },
  { done: true,   icon: '✓', label: 'QC Inspection',      date: '06 Mar · Foshan Warehouse', colr: 'text-blue-light' },
  { done: true,   icon: '✓', label: 'Export Customs',      date: '08 Mar · Nansha Port',   colr: 'text-blue-light' },
  { done: false,  icon: '🚢', label: 'Ocean Transit',      date: 'ETA 18 Mar · MV Chennai Express', colr: 'text-[#60a5fa]', active: true },
  { done: false,  icon: '🛃', label: 'India Customs',      date: 'JNPT / Chennai',         colr: 'text-muted' },
  { done: false,  icon: '📦', label: 'Delivered + POD',    date: 'Last-mile delivery',     colr: 'text-muted' },
]

export default function TrackingWidget() {
  const [trackID, setTrackID] = useState('')
  const [showResult, setShowResult] = useState(false)

  const handleTrack = () => {
    if (trackID.trim().toUpperCase() === DEMO_DATA.id || trackID === '') setShowResult(true)
  }

  const d = DEMO_DATA

  return (
    <section className="py-20 px-10 bg-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <div className="text-center mb-12">
          <span className="text-[10px] font-semibold tracking-[3px] uppercase text-blue block mb-3">Shipment Visibility</span>
          <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light text-white">
            Track Your<br /><em className="italic text-blue-light">DDP Shipment</em>
          </h2>
        </div>

        {/* Search */}
        <div className="max-w-[700px] mx-auto mb-8 reveal">
          <div className="flex gap-3">
            <input
              className="flex-1 bg-[var(--overlay-input)] border border-[var(--overlay-input-border)] rounded-sm py-3 px-4 text-white text-sm outline-none  placeholder:text-muted focus:border-gold transition-colors duration-200"
              placeholder="Enter tracking number - e.g. CTI-2025-04817"
              value={trackID} onChange={e => setTrackID(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleTrack()}
            />
            <button className="bg-linear-to-br from-gold to-gold-light text-black border-none py-3 px-7 rounded-sm text-xs font-bold tracking-[0.8px] uppercase cursor-none transition-all duration-200 whitespace-nowrap hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]" onClick={handleTrack}>Track →</button>
          </div>
          <div className="flex justify-center gap-2 mt-3 items-center">
            <span className="text-[rgba(255,255,255,0.3)] text-[10px]">Try demo:</span>
            <button
              className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[11px] py-[3px] px-3 rounded-full cursor-none  transition-colors duration-200 hover:bg-[rgba(37,99,235,0.15)]"
              onClick={() => { setTrackID(DEMO_DATA.id); setShowResult(true) }}
            >
              {DEMO_DATA.id}
            </button>
          </div>
        </div>

        {/* Result Card */}
        {showResult && (
          <div className="max-w-[900px] mx-auto bg-[var(--overlay-input)] border border-border rounded reveal visible">
            {/* Header */}
            <div className="p-5 border-b border-[rgba(255,255,255,0.07)] flex justify-between items-center flex-wrap gap-3">
              <div>
                <div className="text-[10px] text-muted tracking-[1.5px] uppercase mb-1">Tracking Number</div>
                <div className="font-heading text-[20px] font-semibold text-blue-light">{d.id}</div>
              </div>
              <span className="inline-flex items-center gap-2 bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.25)] text-[#60a5fa] text-xs font-semibold py-1.5 px-4 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-[pulse_2s_ease-in-out_infinite]" />
                {d.status}
              </span>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-5 border-b border-[rgba(255,255,255,0.07)]">
              {[
                { label: 'Origin', val: d.origin },
                { label: 'Destination', val: d.destination },
                { label: 'Mode', val: d.mode },
                { label: 'Cargo', val: `${d.weight} · ${d.cbm}` },
                { label: 'ETA', val: d.eta, hl: true },
              ].map(m => (
                <div key={m.label} className="py-3 px-4 border-r border-[var(--overlay-card-border)] last:border-r-0">
                  <div className="text-[9px] text-muted tracking-[1.5px] uppercase mb-1">{m.label}</div>
                  <div className={`text-[13px] font-medium${m.hl ? ' text-green' : ''}`}>{m.val}</div>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="p-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="text-[10px] text-muted mb-2">Shipment Progress</div>
              <div className="h-[6px] bg-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden">
                <div className="h-full rounded-sm bg-linear-to-r from-gold to-gold-light" style={{ width: `${d.pct}%` }} />
              </div>
            </div>

            {/* Timeline */}
            <div className="p-5 grid grid-cols-6 gap-3">
              {MILESTONES.map((ms, i) => (
                <div key={i} className="text-center">
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs mb-2${ms.done ? ' bg-[rgba(37,99,235,0.15)] border border-gold' : ms.active ? ' bg-[rgba(59,130,246,0.1)] border border-[#60a5fa]' : ' bg-[var(--overlay-input)] border border-[var(--overlay-input-border)]'}`}>
                    {ms.icon}
                  </div>
                  <div className={`text-[11px] font-medium ${ms.colr}`}>{ms.label}</div>
                  <div className="text-[9px] text-muted mt-0.5">{ms.date}</div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-[rgba(255,255,255,0.07)] flex items-center justify-between flex-wrap gap-2">
              <span className="text-[11px] text-[rgba(255,255,255,0.4)]">WhatsApp real-time updates for this shipment? <strong className="text-[rgba(255,255,255,0.7)]">Enable now</strong></span>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green py-[6px] px-3.5 rounded-sm text-[11px] font-medium no-underline cursor-none">💬 WhatsApp Support</a>
            </div>
          </div>
        )}

        {/* Bottom */}
        <div className="text-center mt-8">
          <Link href="/track" className="text-blue-light text-[13px] no-underline border-b border-[rgba(37,99,235,0.4)] cursor-none transition-all duration-200 hover:border-gold">Open Full Tracker →</Link>
        </div>
      </div>
    </section>
  )
}
