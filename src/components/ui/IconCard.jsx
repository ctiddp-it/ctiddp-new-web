import Link from 'next/link'

/**
 * IconCard — White card with icon, title, description, optional tags and link
 * @param {React.ReactNode} icon — Icon element
 * @param {string} title
 * @param {string} description
 * @param {string[]} tags — Optional tag labels
 * @param {string} href — Optional link URL
 * @param {string} linkText — Optional link label (default: "VIEW DETAILS")
 * @param {string} className — Additional classes
 */
export default function IconCard({
  icon,
  title,
  description,
  tags = [],
  href,
  linkText = 'VIEW DETAILS',
  className = '',
}) {
  const Wrapper = href ? Link : 'div'
  const wrapperProps = href ? { href } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`card group p-6 sm:p-7 flex flex-col no-underline ${className}`}
    >
      {/* Icon */}
      <div className="icon-container mb-5 group-hover:bg-primary-100 group-hover:border-primary/30">
        <span className="text-[22px]">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-[18px] font-600 text-gray-900 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-gray-500 leading-relaxed flex-grow mb-4">{description}</p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((t) => (
            <span key={t} className="tag text-[9px]">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Link */}
      {href && (
        <div className="flex items-center gap-1.5 text-[12px] font-600 text-primary tracking-wide uppercase mt-auto pt-2">
          {linkText}
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      )}
    </Wrapper>
  )
}
