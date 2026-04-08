'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rx = useRef(0)
  const ry = useRef(0)
  const mx = useRef(0)
  const my = useRef(0)
  const rafId = useRef(0)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      ring.style.left = rx.current + 'px'
      ring.style.top = ry.current + 'px'
      rafId.current = requestAnimationFrame(animRing)
    }
    animRing()

    const INTERACTIVE = 'a,button,.wf-card,.t-card,.ddp-card,.blog-card,.loc-card,.team-card,.pricing-card,.mega-item,.qr-b,.nav-link,.btn-primary,.btn-ghost,.btn-wa,.nav-btn-wa,.nav-btn-quote'

    const expand = (e) => {
      if ((e.target)?.closest(INTERACTIVE)) ring.classList.add('expanded')
    }
    const shrink = (e) => {
      if ((e.target)?.closest(INTERACTIVE)) ring.classList.remove('expanded')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', expand)
    document.addEventListener('mouseout', shrink)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', expand)
      document.removeEventListener('mouseout', shrink)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
