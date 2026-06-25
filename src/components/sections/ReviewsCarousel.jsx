"use client";

import { useState, useRef, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaQuoteLeft, FaGoogle } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

// ─── Data ─────────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    name: "Rajesh Agarwal",
    // company: "Agarwal Furnishings Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    rating: 5,
    date: "March 2026",
    text: "CTIDDP made our first China import completely stress-free. From factory coordination in Foshan to delivery at our Mumbai warehouse, every step was handled professionally. The DDP pricing had zero hidden charges - exactly what was quoted.",
    tag: "Furniture Import",
  },
  {
    name: "Priya Menon",
    // company: "Sparkline Electronics",
    location: "Bengaluru, Karnataka",
    rating: 5,
    date: "January 2026",
    text: "We sourced LED components from Guangzhou for the first time and were nervous about customs. CTIDDP handled the BE filing, BCD+IGST payment, and last-mile delivery seamlessly. Shipment arrived in 42 days - right on schedule.",
    tag: "Electronics Import",
  },
  {
    name: "Sunil Khanna",
    // company: "Khanna Textiles",
    location: "Surat, Gujarat",
    rating: 5,
    date: "February 2025",
    text: "The all-inclusive pricing model is a game changer. No surprises at customs, no extra freight charges. Our fabric order from Foshan reached Surat in perfect condition. Highly recommend CTIDDP to any importer.",
    tag: "Textile Import",
  },
  {
    name: "Anita Sharma",
    // company: "HomePro Interiors",
    location: "Delhi NCR",
    rating: 4.5,
    date: "April 2025",
    text: "Very professional team. They coordinated with 3 different suppliers across China for our consolidated shipment. Quality inspection before dispatch gave us real peace of mind. Minor delay in clearance but the team kept us updated throughout.",
    tag: "Multi-Vendor Consolidation",
  },
  {
    name: "Mohammed Irfan",
    // company: "Irfan Auto Parts",
    location: "Hyderabad, Telangana",
    rating: 5,
    date: "May 2025",
    text: "Third shipment with CTIDDP and each time better than the last. Air freight option for urgent orders is a lifesaver for our business. OOC clearance and POD documentation are always clean and timely.",
    tag: "Auto Parts Import",
  },
  {
    name: "Deepa Nair",
    // company: "Nair Plastics Industries",
    location: "Kochi, Kerala",
    rating: 5,
    date: "March 2025",
    text: "Single point of contact means I don't have to chase 5 different agencies. My relationship manager at CTIDDP handles everything end-to-end. Transparent tracking portal is excellent - I always know where my cargo is.",
    tag: "Industrial Import",
  },
];

const STATS = [
  { value: "4.9", label: "Average Rating", sub: "across platforms" },
  { value: "500+", label: "Happy Importers", sub: "across India" },
  { value: "98%", label: "On-Time Delivery", sub: "rate" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={i} size={14} color="#FE5101" />
      ))}
      {half && <FaStarHalfAlt size={14} color="#FE5101" />}
    </div>
  );
}

function ReviewCard({ review, active }) {
  return (
    <div
      className={`flex-shrink-0 w-full transition-all duration-500 ${
        active ? "opacity-100 scale-100" : "opacity-40 scale-95"
      }`}
    >
      <div
        className="bg-white rounded-2xl border border-slate-100 shadow-md p-7 h-full flex flex-col gap-4 relative overflow-hidden"
        style={{ minHeight: "300px" }}
      >
        {/* Decorative quote mark */}
        <FaQuoteLeft
          size={56}
          className="absolute top-4 right-5 opacity-[0.05]"
          color="#003DA5"
        />

        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ background: "#003DA5" }}
            >
              {review.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="font-bold text-[14px]" style={{ color: "#0B2A6B" }}>
                  {review.name}
                </p>
                <MdVerified size={15} color="#003DA5" />
              </div>
              {/* <p className="text-slate-500 text-[12px]">{review.company}</p> */}
            </div>
          </div>
          {/* Google badge */}
          {/* <div className="flex items-center gap-1 flex-shrink-0 mt-0.5">
            <FaGoogle size={13} color="#4285F4" />
            <span className="text-[11px] text-slate-400 font-medium">Google</span>
          </div> */}
        </div>

        {/* Stars + date */}
        <div className="flex items-center gap-2">
          <StarRating rating={review.rating} />
          <span className="text-slate-400 text-[12px]">· {review.date}</span>
        </div>

        {/* Review text */}
        <p className="text-slate-600 text-[14px] leading-relaxed flex-1">
          "{review.text}"
        </p>

        {/* Tag */}
        <div className="mt-auto pt-2">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full"
            style={{ background: "#EEF3FB", color: "#003DA5" }}
          >
            <TbWorld size={12} />
            {review.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  // Responsive slides
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else if (window.innerWidth < 1100) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = REVIEWS.length - slidesPerView;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, [maxIndex]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
  };

  const handlePrev = () => { prev(); resetAuto(); };
  const handleNext = () => { next(); resetAuto(); };
  const handleDot  = (i) => { setCurrent(i); resetAuto(); };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
              <span className="text-[#FE5101] font-semibold text-sm tracking-[0.18em] uppercase">
                Customer Reviews
              </span>
              <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color: "#0B2A6B" }}
            >
              Trusted by Importers
              <br />
              <span style={{ color: "#FE5101" }}>Across Global</span>
            </h2>
            <p className="text-slate-600 text-[16px] mt-4 max-w-lg leading-relaxed">
              Real businesses. Real shipments. See what our clients say about
              their end-to-end DDP experience with CTIDDP.
            </p>
          </div>

          {/* Overall rating pill */}
          {/* <div className="flex-shrink-0 flex items-center gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-4">
            <div className="text-center">
              <div className="text-4xl font-extrabold leading-none" style={{ color: "#0B2A6B" }}>
                4.9
              </div>
              <div className="flex justify-center mt-1 gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={13} color="#FE5101" />
                ))}
              </div>
              <div className="text-slate-400 text-[11px] mt-1">500+ Reviews</div>
            </div>
            <div className="w-px h-12 bg-slate-100" />
            <div className="flex items-center gap-2">
              <FaGoogle size={20} color="#4285F4" />
              <div>
                <div className="font-bold text-[13px]" style={{ color: "#0B2A6B" }}>Google</div>
                <div className="text-slate-400 text-[11px]">Verified Reviews</div>
              </div>
            </div>
          </div> */}
        </div>

        {/* ── Carousel ── */}
        <div className="overflow-hidden" ref={trackRef}>
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current * (100 / slidesPerView)}% - ${current * (20 / slidesPerView)}px))`,
            }}
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                style={{ flex: `0 0 calc(${100 / slidesPerView}% - ${(20 * (slidesPerView - 1)) / slidesPerView}px)` }}
              >
                <ReviewCard review={review} active={i >= current && i < current + slidesPerView} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  background: i === current ? "#003DA5" : "#CBD5E1",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-all"
              style={{
                borderColor: current === 0 ? "#E2E8F0" : "#003DA5",
                color: current === 0 ? "#CBD5E1" : "#003DA5",
                background: "white",
              }}
              aria-label="Previous"
            >
              <HiArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={current >= maxIndex}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
              style={{
                background: current >= maxIndex ? "#E2E8F0" : "#003DA5",
                color: current >= maxIndex ? "#94A3B8" : "#fff",
                border: "none",
              }}
              aria-label="Next"
            >
              <HiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Stats bar ── */}
        {/* <div className="mt-14 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-4 px-8 py-6">
              <div>
                <div className="text-3xl font-extrabold leading-none" style={{ color: "#0B2A6B" }}>
                  {s.value}
                </div>
                <div className="font-semibold text-[14px] mt-1" style={{ color: "#0B2A6B" }}>
                  {s.label}
                </div>
                <div className="text-slate-400 text-[12px]">{s.sub}</div>
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}