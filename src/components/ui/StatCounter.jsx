'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * StatCounter — Animated counting number + label
 * @param {string} value — Target number as string (e.g., "500")
 * @param {string} suffix — Suffix after number (e.g., "+")
 * @param {string} prefix — Prefix before number (e.g., "$")
 * @param {string} label — Description text below
 * @param {boolean} light — Use white text (for dark backgrounds)
 */
export default function StatCounter({ value, suffix = '', prefix = '', label, light = false }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 1500
    const steps = 40
    const increment = numValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), numValue)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numValue])

  return (
    <div ref={ref} className="text-center">
      <div className={`text-[clamp(28px,4vw,40px)] font-700 leading-none mb-1 ${light ? 'text-white' : 'text-primary'}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className={`text-[12px] font-500 ${light ? 'text-gray-300' : 'text-gray-500'}`}>
        {label}
      </div>
    </div>
  )
}
