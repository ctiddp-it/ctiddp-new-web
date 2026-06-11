/**
 * SectionBadge — Small section label with orange dot indicator
 * Usage: <SectionBadge>OUR SERVICES</SectionBadge>
 */
export default function SectionBadge({ children, className = '' }) {
  return (
    <div className={`section-badge ${className}`}>
      {children}
    </div>
  )
}
