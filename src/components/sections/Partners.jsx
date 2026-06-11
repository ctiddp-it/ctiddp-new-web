'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const PARTNER_LOGOS = [
  { name: 'Decathlon', src: '/images/our-partners/decathlon.png' },
  { name: 'Waaree', src: '/images/our-partners/waaree.png' },
  { name: 'Dahua', src: '/images/our-partners/dahua.png' },
  { name: 'Crompton', src: '/images/our-partners/crompton.png' },
  { name: 'Butterfly', src: '/images/our-partners/butterfly.png' },
  { name: 'Voltas', src: '/images/our-partners/voltas.png' },
  { name: 'Asian Paints', src: '/images/our-partners/asian-paints.png' },
]

export default function Partners({ className = '' }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animId
    let pos = 0
    const speed = 0.5

    const animate = () => {
      pos -= speed
      const halfWidth = track.scrollWidth / 2
      if (Math.abs(pos) >= halfWidth) pos = 0
      track.style.transform = `translateX(${pos}px)`
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  // Double the logos for seamless loop
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

  return (
    <section className={`section-padding bg-white ${className}`}>
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[12px] font-600 tracking-[2px] uppercase text-gray-400 mb-2">
            TRUSTED BY 500+ IMPORTERS WORLDWIDE
          </p>
        </div>

        {/* Logo carousel */}
        <div className="overflow-hidden relative">
          {/* Left/Right fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={trackRef}
            className="flex items-center gap-12 md:gap-16 whitespace-nowrap will-change-transform"
          >
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}