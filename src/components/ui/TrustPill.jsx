/**
 * TrustPill — Checkmark/icon + text horizontal badge
 * @param {React.ReactNode} icon — Optional icon (defaults to checkmark)
 * @param {string} text — Label text
 * @param {boolean} light — White text for dark backgrounds
 */
export default function TrustPill({ icon, text, light = false }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[13px] font-500 ${light ? 'text-gray-200' : 'text-gray-700'}`}>
      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] shrink-0 ${
        light
          ? 'bg-white/10 border border-white/20 text-white'
          : 'bg-primary-50 border border-primary-100 text-primary'
      }`}>
        {icon || '✓'}
      </span>
      {text}
    </div>
  )
}
