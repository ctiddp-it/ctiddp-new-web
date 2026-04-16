const ITEMS = [
  'Canton Fair 2026 is LIVE - Book Your DDP Shipping Slot Now',
  'Peak Season Shipping Started - Avoid Delays & Price Surge',
  'Talk to Our Experts Today: +91 8790013772',
  'WhatsApp response under 2 hours · Mon-Sat',
  'Save Up to 30-40% on Bulk Imports from China',
  'From Factory Pickup to Final Delivery – We Handle Everything',
  'Limited Container Slots Available This Month – Enquire Today'
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