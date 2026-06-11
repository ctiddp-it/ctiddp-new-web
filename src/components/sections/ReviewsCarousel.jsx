'use client'

import { useRef } from 'react'
import SectionBadge from '@/components/ui/SectionBadge'
import TestimonialCard from '@/components/ui/TestimonialCard'

const REVIEWS = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Excellent service from pickup to delivery. CTIDDP handled everything — from supplier coordination in Guangzhou to customs clearance and last-mile delivery in Hyderabad. No hidden charges, very transparent.',
    timeAgo: '2 months ago',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'First time importing from China and was worried about the process. CTIDDP made it so simple. Their team guided me through every step. The DDP model saved me from all duty headaches.',
    timeAgo: '3 months ago',
  },
  {
    name: 'Vikram Patel',
    rating: 5,
    text: 'We have been using CTIDDP for over a year. Reliable, on-time, and the best rates we have found. Their warehouse consolidation saves us significant costs on every shipment.',
    timeAgo: '1 month ago',
  },
  {
    name: 'Anita Reddy',
    rating: 5,
    text: 'The Canton Fair support was incredible. They helped us meet suppliers, inspect products, negotiate prices, and shipped everything DDP to our warehouse in Chennai. One contract, zero stress.',
    timeAgo: '4 months ago',
  },
  {
    name: 'Mohammed Saleem',
    rating: 5,
    text: 'Very professional team. Their QC inspection caught defects before shipment which saved us from a major loss. Highly recommend for anyone importing from China to India.',
    timeAgo: '2 weeks ago',
  },
  {
    name: 'Sunita Agarwal',
    rating: 4,
    text: 'Great experience with their DDP shipping service. Everything arrived on time with all duties pre-paid. Will definitely use them again for our next order.',
    timeAgo: '6 weeks ago',
  },
]

export default function ReviewsCarousel({ className = '' }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const cardWidth = 320
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className={`section-padding bg-gray-50 ${className}`}>
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionBadge>TRUSTED BY IMPORTERS</SectionBadge>
            <h2 className="section-title">
              What Our Clients <span className="highlight">Say</span>
            </h2>
            <p className="section-subtitle">
              Real reviews from real importers who trust CTIDDP for their China-to-India shipping.
            </p>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-2 shrink-0">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
              <path d="M15.68 8.18c0-.57-.05-1.12-.15-1.64H8v3.1h4.31a3.68 3.68 0 0 1-1.6 2.42v2h2.59c1.52-1.4 2.38-3.45 2.38-5.88Z" fill="#4285F4"/>
              <path d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.59-2c-.72.48-1.63.76-2.71.76-2.09 0-3.86-1.41-4.49-3.31H.84v2.07A7.99 7.99 0 0 0 8 16Z" fill="#34A853"/>
              <path d="M3.51 9.51A4.8 4.8 0 0 1 3.26 8c0-.53.09-1.04.25-1.51V4.42H.84A7.99 7.99 0 0 0 0 8c0 1.29.31 2.51.84 3.58l2.67-2.07Z" fill="#FBBC05"/>
              <path d="M8 3.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3C11.97.79 10.16 0 8 0A7.99 7.99 0 0 0 .84 4.42l2.67 2.07C4.14 4.59 5.91 3.18 8 3.18Z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="text-[14px] font-600 text-gray-900">4.9</div>
              <div className="text-[11px] text-gray-400">Based on 50+ reviews</div>
            </div>
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="relative">
          {/* Nav arrows */}
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-card items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-card items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
            aria-label="Next"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEWS.map((review, i) => (
              <div key={i} className="snap-start shrink-0 w-[300px] sm:w-[320px]">
                <TestimonialCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}