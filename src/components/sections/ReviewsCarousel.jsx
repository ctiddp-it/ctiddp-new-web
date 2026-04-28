// components/ReviewsCarousel.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Default sample data (replace with your actual TESTIMONIALS import) ───────
const DEFAULT_TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    stars: 5,
    text: "CTIDDP made our China sourcing seamless. Their DDP model meant zero customs headaches - everything arrived at our warehouse ready to sell. Truly professional team.",
    time: "2 weeks ago",
  },
  {
    name: "Priya Shankar",
    stars: 5,
    text: "Worked with them for our bulk textile imports. Communication with the China team was smooth, pricing transparent, and delivery on time. Highly recommended.",
    time: "1 month ago",
  },
  {
    name: "Anil Mehta",
    stars: 5,
    text: "The end-to-end DDP service is a game changer. No surprise duties, no freight delays. CTIDDP handled everything from Guangzhou to our Bangalore store.",
    time: "3 weeks ago",
  },
  {
    name: "Sunita Reddy",
    stars: 5,
    text: "Outstanding support from the Vizag office. They tracked our shipment at every stage and kept us informed. Best logistics partner we've worked with.",
    time: "5 days ago",
  },
  {
    name: "Mohammed Farhan",
    stars: 5,
    text: "Reliable, affordable, and extremely professional. The team at CTIDDP understands Indian import regulations deeply and keeps everything compliant.",
    time: "2 months ago",
  },
];

const AVATAR_COLORS = [
  "from-[#1A73E8] to-[#0D47A1]",
  "from-[#34A853] to-[#1E7E34]",
  "from-[#EA4335] to-[#B31412]",
  "from-[#FBBC05] to-[#E37400]",
  "from-[#6B48FF] to-[#3D1ECC]",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const StarRating = ({ count = 5 }) => (
  <div className="flex text-[#FBBC05]">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ t, colorClass, className = "" }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.text.length > 160;
  const displayText = !expanded && isLong ? t.text.slice(0, 160) + "…" : t.text;

  return (
    <div
      className={`rounded-2xl border border-[#E8EAED] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#C5CAE9] overflow-hidden flex flex-col ${className}`}
    >
      {/* Card Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-start gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-semibold text-sm shadow-sm flex-shrink-0`}
          >
            {t.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-[14px] font-semibold text-white truncate">{t.name}</h4>
              <GoogleIcon className="w-4 h-4 flex-shrink-0" />
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <StarRating count={t.stars} />
              <span className="text-white text-xs">· {t.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        <p className="text-[13.5px] text-white leading-relaxed flex-1">
          {displayText}
          {isLong && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="ml-1 text-[#1A73E8] text-[13px] font-medium hover:underline"
            >
              {expanded ? "Show less" : "More"}
            </button>
          )}
        </p>

        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#F1F3F4]">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#34A853]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-[11px] font-medium text-white uppercase tracking-wide">Verified</span>
          </div>
          <div className="ml-auto">
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Carousel Component ──────────────────────────────────────────────────
/**
 * ReviewsCarousel
 *
 * Props:
 * @param {Array}   testimonials   - Array of { name, stars, text, time }. Falls back to sample data.
 * @param {string}  rating         - Display rating string, e.g. "4.9"
 * @param {string}  reviewCount    - Display count string, e.g. "150+"
 * @param {string}  reviewsUrl     - URL for the "Read all reviews" CTA button
 * @param {number}  autoPlayMs     - Auto-play interval in ms. Default 4500. Pass 0 to disable.
 * @param {string}  headingLine1   - First line of the heading
 * @param {string}  headingLine2   - Second line (accent colored)
 */
const ReviewsCarousel = ({
  testimonials = DEFAULT_TESTIMONIALS,
  rating = "4.9",
  reviewCount = "150+",
  reviewsUrl = "#",
  autoPlayMs = 4500,
  headingLine1 = "What our clients are",
  headingLine2 = "saying on Google",
}) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = testimonials.length;
  const maxIndex = total - 1;

  const go = useCallback(
    (dir) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((prev) => {
        if (dir === 1) return prev >= maxIndex ? 0 : prev + 1;
        return prev <= 0 ? maxIndex : prev - 1;
      });
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, maxIndex]
  );

  const goTo = (idx) => {
    if (isAnimating || idx === current) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlayMs || isPaused) return;
    const timer = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(timer);
  }, [go, isPaused, autoPlayMs]);

  // Touch/swipe handlers
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getVisibleIndices = (count) =>
    Array.from({ length: count }, (_, i) => (current + i) % total);

  return (
    <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[90px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center max-w-[600px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#F8F9FA] border border-[#E8EAED]">
            <GoogleIcon className="w-5 h-5" />
            <span className="font-medium text-[#5F6368] text-sm tracking-wide">Google Reviews</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-whitetext-4xl font-semibold">{rating}</span>
            <StarRating />
          </div>

          <p className="text-white text-sm font-medium mb-5">
            Based on verified Google Reviews
          </p>

          <h2 className="font-heading text-[clamp(28px,4vw,46px)] font-light leading-[1.15] text-white">
            {headingLine1}
            <br />
            <span className="font-semibold text-blue-light">{headingLine2}</span>
          </h2>
        </div>

        {/* ── Carousel ── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          {/* Cards - responsive slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6">
            {/* Mobile: 1 card */}
            {[current].map((idx) => (
              <ReviewCard
                key={`m-${idx}`}
                t={testimonials[idx]}
                colorClass={AVATAR_COLORS[idx % AVATAR_COLORS.length]}
                className="md:hidden"
              />
            ))}
            {/* Tablet: 2 cards */}
            {getVisibleIndices(2).map((idx, i) => (
              <ReviewCard
                key={`t-${idx}-${i}`}
                t={testimonials[idx]}
                colorClass={AVATAR_COLORS[idx % AVATAR_COLORS.length]}
                className="hidden md:block lg:hidden"
              />
            ))}
            {/* Desktop: 3 cards */}
            {getVisibleIndices(3).map((idx, i) => (
              <ReviewCard
                key={`d-${idx}-${i}`}
                t={testimonials[idx]}
                colorClass={AVATAR_COLORS[idx % AVATAR_COLORS.length]}
                className="hidden lg:block"
              />
            ))}
          </div>
        </div>

        {/* ── Dot Indicators ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current
                  ? "w-6 h-2.5 bg-[#1A73E8]"
                  : "w-2.5 h-2.5 bg-[#DADCE0] hover:bg-[#BDC1C6]"
                }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsCarousel;