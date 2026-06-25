import Image from 'next/image'
import Button from './Button'

/**
 * CTABanner - Navy/gradient CTA section at bottom of pages
 * @param {string} badge - Optional badge text
 * @param {string|React.ReactNode} title - Main heading
 * @param {string} subtitle - Supporting text
 * @param {Array} buttons - Array of { label, href, variant, icon, external }
 * @param {string} bgImage - Optional background image
 * @param {React.ReactNode} children - Additional content
 * @param {'center'|'left'} align
 * @param {string} className
 */
export default function CTABanner({
  badge,
  title,
  subtitle,
  buttons = [],
  bgImage,
  children,
  align = 'center',
  className = '',
}) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background */}
      {bgImage ? (
        <div className="absolute inset-0">
          <Image src={bgImage} alt="" fill sizes="100vw" className="object-cover" quality={75} />
          <div className="absolute inset-0 bg-navy-900/90" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-navy-900" />
      )}

      {/* Content */}
      <div className={`relative z-10 container-main py-14 sm:py-16 lg:py-20 ${align === 'center' ? 'text-center' : ''}`}>
        {badge && (
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 text-primary-light text-[11px] font-600 tracking-[1.5px] uppercase px-4 py-1.5 rounded-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
            {badge}
          </div>
        )}

        {typeof title === 'string' ? (
          <h2
            className="text-[clamp(26px,3.5vw,40px)] font-700 text-white leading-[1.2] mb-3"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-700 text-white leading-[1.2] mb-3">{title}</h2>
        )}

        {subtitle && (
          <p className={`text-[14px] text-gray-300 mb-7 leading-relaxed ${align === 'center' ? 'max-w-[480px] mx-auto' : 'max-w-[480px]'}`}>
            {subtitle}
          </p>
        )}

        {buttons.length > 0 && (
          <div className={`flex flex-col sm:flex-row gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
            {buttons.map((btn, i) => (
              <Button
                key={i}
                variant={btn.variant || (i === 0 ? 'primary' : 'secondary')}
                href={btn.href}
                external={btn.external}
                icon={btn.icon}
                arrow={btn.arrow !== false}
                className={btn.variant === 'secondary' ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white' : ''}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
