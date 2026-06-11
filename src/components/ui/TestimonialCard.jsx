import { FaStar } from 'react-icons/fa6'

/**
 * TestimonialCard — Google-style review card
 * @param {string} name
 * @param {string} avatar — Avatar URL or initials
 * @param {number} rating — Star count (1-5)
 * @param {string} text — Review text
 * @param {string} timeAgo — e.g., "2 months ago"
 */
export default function TestimonialCard({ name, avatar, rating = 5, text, timeAgo, className = '' }) {
  return (
    <div className={`card p-5 sm:p-6 flex flex-col h-full ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[15px] font-600 text-primary">
              {name?.charAt(0)?.toUpperCase()}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h4 className="text-[14px] font-600 text-gray-900 truncate">{name}</h4>
          {timeAgo && <p className="text-[11px] text-gray-400">{timeAgo}</p>}
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            size={13}
            className={i < rating ? 'text-orange' : 'text-gray-200'}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[13px] text-gray-600 leading-relaxed flex-grow">{text}</p>

      {/* Google badge */}
      <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M15.68 8.18c0-.57-.05-1.12-.15-1.64H8v3.1h4.31a3.68 3.68 0 0 1-1.6 2.42v2h2.59c1.52-1.4 2.38-3.45 2.38-5.88Z" fill="#4285F4"/>
          <path d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.59-2c-.72.48-1.63.76-2.71.76-2.09 0-3.86-1.41-4.49-3.31H.84v2.07A7.99 7.99 0 0 0 8 16Z" fill="#34A853"/>
          <path d="M3.51 9.51A4.8 4.8 0 0 1 3.26 8c0-.53.09-1.04.25-1.51V4.42H.84A7.99 7.99 0 0 0 0 8c0 1.29.31 2.51.84 3.58l2.67-2.07Z" fill="#FBBC05"/>
          <path d="M8 3.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3C11.97.79 10.16 0 8 0A7.99 7.99 0 0 0 .84 4.42l2.67 2.07C4.14 4.59 5.91 3.18 8 3.18Z" fill="#EA4335"/>
        </svg>
        <span className="text-[11px] text-gray-400">Google Review</span>
      </div>
    </div>
  )
}
