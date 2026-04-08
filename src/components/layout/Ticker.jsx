const ITEMS = [
  'Canton Fair Spring 2026 — Book your DDP shipment slot now',
  'New LCL route: Foshan → Bangalore · Every 14 days',
  'BIS compliance support now available for electronics importers',
  'WhatsApp response under 2 hours · Mon–Sat',
  'Hyderabad office opening August 2026',
]

export default function Ticker() {
  // Doubled for seamless infinite scroll
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="bg-linear-to-r from-blue-600 to-cyan-500 text-white border-b border-white/20 py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-[tickScroll_38s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-span text-[#ffffff] text-sm font-medium tracking-wide pr-18">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}