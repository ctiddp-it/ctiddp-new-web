

'use client'

import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useEffect, useRef } from 'react'
import Link from 'next/link'

// Fixed positions — no Math.random() = no hydration mismatch
const PARTICLES = [
  { left: '12%', top: '75%', dur: '7s', delay: '0s', drift: '28px' },
  { left: '24%', top: '82%', dur: '9s', delay: '1s', drift: '-22px' },
  { left: '48%', top: '88%', dur: '6.5s', delay: '0.5s', drift: '36px' },
  { left: '68%', top: '76%', dur: '8s', delay: '2s', drift: '-28px' },
  { left: '84%', top: '68%', dur: '7.5s', delay: '1.5s', drift: '18px' },
  { left: '38%', top: '84%', dur: '10s', delay: '0.3s', drift: '-38px' },
  { left: '56%', top: '78%', dur: '8.5s', delay: '2.5s', drift: '22px' },
  { left: '76%', top: '86%', dur: '6s', delay: '3s', drift: '-16px' },
]

const FLARES = [
  { left: '20%', top: '85%', w: 4, h: 4, bg: 'rgba(37,99,235,0.9)', shadow: 'rgba(37,99,235,0.8)', fdur: '8s', fdelay: '0s' },
  { left: '45%', top: '90%', w: 6, h: 6, bg: 'rgba(96,165,250,0.8)', shadow: 'rgba(96,165,250,0.7)', fdur: '10s', fdelay: '1.5s' },
  { left: '65%', top: '82%', w: 3, h: 3, bg: 'rgba(147,197,253,0.9)', shadow: 'rgba(147,197,253,0.8)', fdur: '7s', fdelay: '3s' },
  { left: '80%', top: '88%', w: 5, h: 5, bg: 'rgba(37,99,235,0.7)', shadow: 'rgba(37,99,235,0.6)', fdur: '9.5s', fdelay: '0.7s' },
  { left: '33%', top: '86%', w: 4, h: 4, bg: 'rgba(96,165,250,0.9)', shadow: 'rgba(96,165,250,0.8)', fdur: '11s', fdelay: '2s' },
  { left: '58%', top: '92%', w: 7, h: 7, bg: 'rgba(37,99,235,0.6)', shadow: 'rgba(37,99,235,0.5)', fdur: '12s', fdelay: '4s' },
]

const STATS = [
  { digits: '30', suffix: '+', label: 'Expert Team Members' },
  { digits: '250', suffix: '+', label: 'Containers Imported' },
  { digits: '1200', suffix: '+', label: 'Shipments Cleared' },
  { digits: '16250', suffix: '+', label: 'CBM Shipped' },
]

const ALL_DIGITS = '0123456789'
const CELL_H = 56
const LOOP_COUNT = 30

// ── Slot Machine Stat Item ──────────────────────────────────────────────────
function SlotStatItem({ digits, suffix, label, baseDelay = 0 }) {
  const reelRefs = useRef([])

  useEffect(() => {
    const digitArr = digits.split('')
    const rafIds = []

    digitArr.forEach((finalDigit, colIndex) => {
      const track = reelRefs.current[colIndex]
      if (!track) return

      const direction = colIndex % 2 === 0 ? 'up' : 'down'
      const startDelay = baseDelay + 400 + colIndex * 350
      const spinDuration = 2500 + colIndex * 400
      const settleDuration = 1500

      // Build digit list
      const pool = []
      for (let i = 0; i < LOOP_COUNT; i++) {
        pool.push(ALL_DIGITS[Math.floor(Math.random() * 10)])
      }
      pool.push(finalDigit)
      if (direction === 'down') {
        pool.reverse()
        pool.unshift(finalDigit)
      }

      // Populate cells
      track.innerHTML = ''
      pool.forEach(d => {
        const cell = document.createElement('div')
        cell.style.cssText = `
      height: ${CELL_H}px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      font-weight: 600;
      font-family: 'Cormorant Garamond', Georgia, serif;
      line-height: 1;
      flex-shrink: 0;
      user-select: none;
      background: linear-gradient(to right, #2563eb, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `;
        cell.textContent = d
        track.appendChild(cell)
      })

      const finalIdx = direction === 'up' ? LOOP_COUNT : 0
      const startOffset = direction === 'up' ? 0 : -LOOP_COUNT * CELL_H
      track.style.transform = `translateY(${startOffset}px)`

      const targetY = -(finalIdx * CELL_H)
      const totalTrackLen = pool.length * CELL_H

      function easeInOut(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      }
      function easeOut(t) {
        return 1 - Math.pow(1 - t, 3)
      }

      let spinStart = null
      let settled = false

      function tick(now) {
        if (!spinStart) spinStart = now
        const elapsed = now - spinStart

        if (!settled) {
          const progress = Math.min(elapsed / spinDuration, 1)
          const eased = easeInOut(progress)

          const spinAmount =
            direction === 'up'
              ? -(totalTrackLen - CELL_H) * eased
              : (totalTrackLen - CELL_H) * eased

          const baseY =
            direction === 'up' ? 0 : -((pool.length - 1) * CELL_H)
          track.style.transform = `translateY(${baseY + spinAmount}px)`

          if (progress < 1) {
            const id = requestAnimationFrame(tick)
            rafIds.push(id)
          } else {
            settled = true
            const settleStart = performance.now()
            const currentY = parseFloat(
              track.style.transform.match(/-?\d+\.?\d*/)?.[0] || 0
            )

            function settle(now2) {
              const t = Math.min((now2 - settleStart) / settleDuration, 1)
              const y = currentY + (targetY - currentY) * easeOut(t)
              track.style.transform = `translateY(${y}px)`
              if (t < 1) {
                const id = requestAnimationFrame(settle)
                rafIds.push(id)
              } else {
                track.style.transform = `translateY(${targetY}px)`
              }
            }
            const id = requestAnimationFrame(settle)
            rafIds.push(id)
          }
        }
      }

      const timeoutId = setTimeout(() => {
        const id = requestAnimationFrame(tick)
        rafIds.push(id)
      }, startDelay)

      rafIds.push({ isTimeout: true, id: timeoutId })
    })

    return () => {
      rafIds.forEach(entry => {
        if (entry && entry.isTimeout) clearTimeout(entry.id)
        else cancelAnimationFrame(entry)
      })
    }
  }, [digits, baseDelay])

  return (
    <div className="text-center">
      {/* Reel row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1px',
          height: `${CELL_H}px`,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {digits.split('').map((_, i) => (
          <div
            key={i}
            style={{
              width: '28px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              ref={el => (reelRefs.current[i] = el)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                willChange: 'transform',
              }}
            />
          </div>
        ))}
        {/* Suffix */}
        {suffix && (
          <div
            style={{
              fontSize: '42px',
              fontWeight: 600,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              background: 'linear-gradient(to right, #2563eb, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: `${CELL_H}px`,
              paddingLeft: '1px',
            }}
          >
            {suffix}
          </div>
        )}
      </div>

      {/* Label */}
      <span
        className="block text-[10px] tracking-[1.5px] uppercase mt-2 text-muted"
      >
        {label}
      </span>
    </div>
  )
}

// ── HeroSection ────────────────────────────────────────────────────────────
export default function HeroSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const waves = [
      { amp: 38, freq: 0.008, speed: 0.018, y: 0.48, alpha: 0.22, width: 1.2 },
      { amp: 28, freq: 0.012, speed: 0.024, y: 0.52, alpha: 0.16, width: 0.9 },
      { amp: 50, freq: 0.006, speed: 0.012, y: 0.55, alpha: 0.12, width: 1.5 },
      { amp: 22, freq: 0.018, speed: 0.03, y: 0.44, alpha: 0.1, width: 0.7 },
      { amp: 42, freq: 0.005, speed: 0.009, y: 0.6, alpha: 0.08, width: 1.8 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      waves.forEach((w, i) => {
        ctx.beginPath()
        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            canvas.height * w.y +
            Math.sin(x * w.freq + t * w.speed + (i * Math.PI) / 2.5) * w.amp +
            Math.sin(x * w.freq * 1.7 + t * w.speed * 0.7) * w.amp * 0.3
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0)
        grad.addColorStop(0, 'rgba(37,99,235,0)')
        grad.addColorStop(0.3, `rgba(37,99,235,${w.alpha})`)   // blue
        grad.addColorStop(0.6, `rgba(6,182,212,${w.alpha})`)   // cyan
        grad.addColorStop(1, 'rgba(6,182,212,0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = w.width
        ctx.stroke()
      })
      t++
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 sm:px-6 md:px-10 pt-12 md:pt-10 pb-20 bg-black">

      {/* ── Background layers ── */}

      {/* Base gradient: gold top-centre glow + sky-blue bottom-left ellipse */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 30% 85%, rgba(14,165,233,0.12) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Canvas — animated gold waves */}
      <canvas
        id="heroWave"
        ref={canvasRef}
        className="absolute inset-0 z-[2] pointer-events-none w-full h-full"
      />

      {/* ── Particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none z-[4]"
          style={{
            left: p.left,
            top: p.top,
            width: '3px',
            height: '3px',
            background: 'linear-gradient(to right, #2563eb, #06b6d4)',
            boxShadow: '0 0 6px rgba(37,99,235,0.6), 0 0 10px rgba(6,182,212,0.5)',
            animation: `particleFloat ${p.dur} ease-in-out ${p.delay} infinite`,
            '--drift': p.drift,
          }}
        />
      ))}

      {/* ── Flares ── */}
      {FLARES.map((f, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none z-[4]"
          style={{
            left: f.left,
            top: f.top,
            width: `${f.w}px`,
            height: `${f.h}px`,
            background: 'radial-gradient(circle, rgba(6,182,212,0.9) 0%, rgba(37,99,235,0.4) 40%, transparent 70%)',
            boxShadow: `0 0 ${f.w * 2 + 4}px ${f.shadow}`,
            animation: `flareFloat ${f.fdur} ease-in-out ${f.fdelay} infinite`,
          }}
        />
      ))}

      {/* ── Hero content ── */}
      <div className="relative z-[5] max-w-[940px] w-full">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 
          border border-[rgba(37,99,235,0.25)] 
          text-[11px] font-medium tracking-[2px] uppercase 
          py-2 px-5 rounded-full mb-7 
          bg-[rgba(37,99,235,0.1)] 
          text-primary-pale
          opacity-0 animate-[fadeUp_0.8s_ease_forwards_0.3s]"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-500  shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite]"
          />
          DDP Specialists · Est. 2018
        </div>

        {/* Headline */}
        <h1

          className="leading-none tracking-[-1px] font-light mb-5.5 opacity-0 animate-[fadeUp_1s_ease_forwards_0.5s]"
          style={{
            fontFamily: "var(--Cormorant_Garamond, serif)",
            fontSize: 'clamp(48px, 7.5vw, 105px)',
          }}
        >
          Global Shipping Made <br />
          <em
            className="italic bg-linear-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          >
            Simple.
          </em>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg font-light max-w-[580px] mx-auto mb-9 leading-relaxed text-muted opacity-0 animate-[fadeUp_1s_ease_forwards_0.7s]"
        >
          Shipping with all duties, customs, and delivery handled. No hidden charges. No delays.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-3 justify-center flex-wrap opacity-0 animate-[fadeUp_1s_ease_forwards_0.95s]">

          {/* Primary — Request a Quote */}
          <Link
            href="/get-quote"
            className="group inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#ffff] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all duration-200 hover:-translate-y-0.5 cursor-none shadow-[0_8px_28px_rgba(37,99,235,0.3)] hover:shadow-[0_14px_36px_rgba(37,99,235,0.45)]"
          >
            <HiOutlineDocumentText className="w-[14px] h-[14px]" />
            Request a Quote
          </Link>

          {/* Ghost — Explore Services */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[rgba(27,69,160,0.4)] text-[rgb(12,113,228)] px-6 sm:px-8 py-3 rounded-[3px] text-[13px] tracking-[1px] uppercase transition-all duration-200 hover:bg-[rgba(37,99,235,0.08)] hover:border-gold cursor-none"
          >
            Explore Services
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-[rgba(37,211,102,0.9)] px-6 sm:px-8 py-3 rounded-[3px] text-[13px] font-medium transition-all duration-200 hover:bg-[rgba(37,211,102,0.13)] hover:border-[rgba(37,211,102,0.6)] cursor-none"
          >
            <FaWhatsapp size={22} />WhatsApp Us
          </a>
        </div>

        {/* ── Stats — Slot Machine ── */}
        <div
          className="flex gap-8 sm:gap-12 justify-center flex-wrap mt-15 pt-11 opacity-0 animate-[fadeUp_1s_ease_forwards_1.2s] "
          style={{ borderTop: '1px solid rgba(37,99,235,0.1)' }}
        >
          {STATS.map((s, i) => (
            <SlotStatItem
              key={s.label}
              digits={s.digits}
              suffix={s.suffix}
              label={s.label}
              baseDelay={1200 + i * 80}
            />
          ))}
        </div>
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.15); 
          }
        }
        
        @keyframes particleFloat {
          0% { 
            transform: translateY(0) translateX(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 0.7; 
          }
          90% { 
            opacity: 0.3; 
          }
          100% { 
            transform: translateY(-120px) translateX(var(--drift, 0px)); 
            opacity: 0; 
          }
        }
        
        @keyframes flareFloat {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-8px) scale(1.2); 
            opacity: 0.4; 
          }
        }
        
        @keyframes dotAppear {
          from { 
            opacity: 0; 
            transform: scale(0); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
      `}</style>
    </section>
  )
}