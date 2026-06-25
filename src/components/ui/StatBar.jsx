'use client'

import StatCounter from './StatCounter'

/**
 * StatBar - Blue gradient strip with stat counters
 * @param {Array} stats - Array of { value, suffix, prefix, label }
 * @param {string} className - Additional classes
 */
export default function StatBar({ stats = [], className = '' }) {
  return (
    <div className={`bg-primary rounded-xl py-5 px-6 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="relative">
            <StatCounter
              value={stat.value}
              suffix={stat.suffix || ''}
              prefix={stat.prefix || ''}
              label={stat.label}
              light
            />
            {/* Divider between items on desktop */}
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
