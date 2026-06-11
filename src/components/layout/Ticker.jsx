'use client'

import { useEffect, useRef } from 'react'
import {
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa6'

const TICKER_ITEMS = [
  { icon: <HiOutlineGlobeAlt size={13} />, text: 'Canton Fair 2026 Support' },
  { icon: <HiOutlineShieldCheck size={13} />, text: 'DDP Shipping Experts' },
  { icon: <HiOutlineTruck size={13} />, text: 'On-time Delivery' },
  { icon: <HiOutlineClock size={13} />, text: '24/7 Support' },
]

export default function Ticker() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animId
    let pos = 0
    const speed = 0.4

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

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="bg-navy-950 text-white overflow-hidden relative z-[1001]">
      <div className="flex items-center justify-between h-[36px]">
        {/* Scrolling ticker items */}
        <div className="flex-1 overflow-hidden relative">
          <div ref={trackRef} className="flex items-center gap-8 whitespace-nowrap will-change-transform">
            {items.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-gray-300 tracking-wide"
              >
                <span className="text-primary-light">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right WhatsApp badge */}
        <div className="hidden md:flex items-center gap-2 px-4 h-full bg-navy-900/60 border-l border-white/[0.06]">
          <FaWhatsapp size={14} className="text-green-500" />
          <span className="text-[11px] font-medium text-gray-300 whitespace-nowrap">
            WhatsApp Response: Under 2 Hours (Mon–Sat)
          </span>
        </div>
      </div>
    </div>
  )
}