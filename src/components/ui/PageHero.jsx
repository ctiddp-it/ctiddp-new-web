import Image from 'next/image'
import SectionBadge from '@/components/ui/SectionBadge'

/**
 * PageHero — Full-width hero with background image, navy overlay, left-aligned content
 *
 * @param {string} badge — Section badge text (e.g., "OUR PROCESS")
 * @param {string} title — Main heading (can include HTML via dangerouslySetInnerHTML)
 * @param {React.ReactNode} titleNode — Alternative: pass title as JSX node
 * @param {string} subtitle — Supporting paragraph
 * @param {React.ReactNode} children — CTA buttons, trust pills, etc.
 * @param {string} bgImage — Background image path
 * @param {React.ReactNode} rightContent — Optional right-side content (form, stats, etc.)
 * @param {React.ReactNode} bottomContent — Optional content at bottom (stat bar, feature pills)
 * @param {'left'|'center'} align — Content alignment
 * @param {string} className — Additional classes
 */
export default function PageHero({
  badge,
  title,
  titleNode,
  subtitle,
  children,
  bgImage,
  rightContent,
  bottomContent,
  align = 'left',
  className = '',
}) {
  return (
    <section className={`relative overflow-hidden min-h-[420px] lg:min-h-[500px] ${className}`}>
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={80}
          />
          {/* Navy overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.85) 45%, rgba(10,22,40,0.65) 70%, rgba(10,22,40,0.5) 100%)',
            }}
          />
        </div>
      )}

      {/* Fallback dark bg when no image */}
      {!bgImage && <div className="absolute inset-0 bg-navy-900" />}

      {/* Content */}
      <div className="relative z-10 container-main section-padding">
        <div
          className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
            align === 'center' ? 'items-center text-center' : ''
          }`}
        >
          {/* Left content */}
          <div className={`flex-1 ${align === 'center' ? 'max-w-[680px] mx-auto' : 'max-w-[600px]'}`}>
            {badge && (
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light text-[11px] font-600 tracking-[1.5px] uppercase px-4 py-1.5 rounded-md mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                {badge}
              </div>
            )}

            {titleNode ? (
              <h1 className="text-[clamp(32px,5vw,48px)] font-700 leading-[1.15] text-white mb-4">
                {titleNode}
              </h1>
            ) : title ? (
              <h1
                className="text-[clamp(32px,5vw,48px)] font-700 leading-[1.15] text-white mb-4"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ) : null}

            {subtitle && (
              <p className="text-[15px] text-gray-300 leading-relaxed max-w-[520px] mb-6">
                {subtitle}
              </p>
            )}

            {children}
          </div>

          {/* Right content (optional) */}
          {rightContent && (
            <div className="flex-1 w-full lg:max-w-[480px]">
              {rightContent}
            </div>
          )}
        </div>

        {/* Bottom content (stat bar, feature pills) */}
        {bottomContent && <div className="mt-8 lg:mt-10">{bottomContent}</div>}
      </div>
    </section>
  )
}
