"use client";

import { useRef } from "react";
import Image from "next/image";
import { Building2, Truck } from "lucide-react";

// ─── Partner Data ────────────────────────────────────────────────────────────

const BUSINESS_PARTNERS = [
  { name: "Alibaba Group", logo: "/images/our-partners/alibaba-group-logo.png", bg: "#fff" },
  { name: "Amazon", logo: "/images/our-partners/Amazon-logo.png", bg: "#fff" },
  { name: "Canton Fair", logo: "/images/our-partners/canton-fair-logo.png", bg: "#fff" },
  { name: "IndiaMart", logo: "/images/our-partners/indiamart-logo.png", bg: "#fff" },
  { name: "Made-in-China", logo: "/images/our-partners/made-in-china-logo.png", bg: "#fff" },
  { name: "RCL", logo: "/images/our-partners/Rcl-logo.png", bg: "#fff" },
  { name: "Trade India", logo: "/images/our-partners/trade-india-logo.jpg", bg: "#fff" },
];

const LOGISTICS_PARTNERS = [
  { name: "DHL", logo: "/images/our-partners/dhl-logo2.png", bg: "#fff" },
  { name: "DTDC", logo: "/images/our-partners/dtdc-logoo.png", bg: "#fff" },
  { name: "FedEx", logo: "/images/our-partners/Fedex-logo.png", bg: "#fff" },
  { name: "Blue Dart", logo: "/images/our-partners/bluedart-logo - 2.png", bg: "#fff" },
];

const STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003DA5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "50+",
    label: "Global Partners",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003DA5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    value: "30+",
    label: "Countries Covered",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#003DA5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    value: "10K+",
    label: "Shipments Delivered",
  },
];

// ─── Partner Logo Card ────────────────────────────────────────────────────────

function PartnerCard({ partner }) {
  return (
    <div
      className="flex-shrink-0 w-[140px] md:w-[168px] h-[88px] md:h-[100px] rounded-xl border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden p-3 md:p-4"
      style={{ background: partner.bg || "#fff" }}
    >
      <div className="relative w-full h-full">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 140px, 168px"
        />
      </div>
    </div>
  );
}

// ─── Scrollable Partner Row ───────────────────────────────────────────────────

function PartnerRow({ icon, title, description, accentColor, partners }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div className="mb-8">
      <div className="flex items-start gap-6">

        {/* Category label — desktop only */}
        <div className="flex-shrink-0 w-[240px] hidden md:block">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
            style={{ background: `${accentColor}18` }}
          >
            {icon}
          </div>

          <h3 className="font-bold text-lg mb-2" style={{ color: "#0B2A6B" }}>
            {title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>

          <div
            className="mt-4 h-[3px] w-12 rounded-full"
            style={{ background: accentColor }}
          />
        </div>

        {/* Logos + nav */}
        <div className="flex-1 min-w-0">

          {/* Desktop nav arrows */}
          <div className="hidden md:flex justify-end gap-2 mb-4">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-[#003DA5] hover:border-[#003DA5] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-[#003DA5] hover:border-[#003DA5] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile category header — replaces the desktop sidebar label */}
          <div className="md:hidden flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${accentColor}18` }}
            >
              {/* Resize icon for mobile */}
              <span style={{ color: accentColor }} className="flex items-center justify-center [&>svg]:w-[18px] [&>svg]:h-[18px]">
                {icon}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[13px] leading-tight" style={{ color: "#0B2A6B" }}>
                {title}
              </h3>
              {description && (
                <p className="text-slate-500 text-[11px] mt-0.5 leading-snug">{description}</p>
              )}
            </div>
            <div
              className="ml-auto h-[3px] w-8 rounded-full flex-shrink-0"
              style={{ background: accentColor }}
            />
          </div>

          {/* Scroll fade hint on mobile */}
          <div className="relative">
            <div
              className="md:hidden absolute right-0 top-0 bottom-0 w-10 pointer-events-none z-10"
              style={{
                background: "linear-gradient(to right, transparent, rgb(249 250 251))",
              }}
            />
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {partners.map((p, i) => (
                <PartnerCard key={i} partner={p} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PartnersSection() {
  return (
    <section className="bg-gray-50 py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="relative text-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/images/bg-map.png"
              alt=""
              fill
              className="object-contain opacity-10"
              priority={false}
            />
          </div>
          <div className="relative z-10 py-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: "#FE5101" }} />
              <div className="h-1 w-6 rounded-full mx-1" style={{ backgroundColor: "#003DA5" }} />
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: "#FE5101" }} />
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
              style={{ color: "#0B2A6B" }}
            >
              Trusted Global Partner{" "}
              <span style={{ color: "#FE5101" }}>Ecosystem</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We collaborate with leading sourcing platforms, logistics carriers, and
              international trade networks to simplify global procurement and
              door-to-door imports for businesses across global.
            </p>
          </div>
        </div>

        {/* Dot-grid bg + rows */}
        <div className="relative">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #003DA5 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <PartnerRow
              icon={<Building2 className="h-8 w-8 text-[#003DA5]" />}
              title="Business & Trade Partners"
              accentColor="#003DA5"
              partners={BUSINESS_PARTNERS}
            />
            <div className="border-t border-slate-100 my-2" />
            <PartnerRow
              icon={<Truck className="h-8 w-8 text-[#FE5101]" />}
              title="Logistics & Delivery Partners"
              accentColor="#FE5101"
              partners={LOGISTICS_PARTNERS}
            />
          </div>
        </div>

        {/* Stats + CTA bar */}
        <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-0">

          {/* Stats — 3-col grid on mobile, row with dividers on desktop */}
          <div className="w-full md:flex-1">

            {/* Mobile: compact 3-col grid */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 md:hidden">
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-1 px-2 py-1">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4"
                    style={{ background: "#003DA512" }}
                  >
                    {s.icon}
                  </div>
                  <div className="text-lg font-extrabold leading-none text-center" style={{ color: "#0B2A6B" }}>
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-[10px] text-center leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Desktop: horizontal row with dividers */}
            <div className="hidden md:flex flex-wrap justify-start divide-x divide-slate-200">
              {STATS.map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-1 first:pl-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#003DA512" }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold leading-none" style={{ color: "#0B2A6B" }}>
                      {s.value}
                    </div>
                    <div className="text-slate-500 text-[13px] mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0 text-center md:text-right flex flex-col items-center md:items-end gap-4">
            <div>
              <p className="font-bold text-base" style={{ color: "#0B2A6B" }}>
                Let's build success together.
              </p>
              <p className="text-slate-500 text-sm">
                Partner with CTIDDP for a stronger global future.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: "#FE5101" }}
              >
                BECOME A PARTNER →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}