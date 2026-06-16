"use client";

import {
    FileCheck2,
    CircleDollarSign,
    Building2,
    Clock3,
    HeadphonesIcon,
} from "lucide-react";

// ─────────────────────────────────────────────
// Data — swap with your TRUST_ITEMS prop/import
// ─────────────────────────────────────────────
const TRUST_ITEMS = [
    {
        icon: <FileCheck2 strokeWidth={1.5} className="h-8 w-8" />,
        title: "One Contract",
        desc: "Single agreement covers the entire process.",
    },
    {
        icon: <CircleDollarSign strokeWidth={1.5} className="h-8 w-8" />,
        title: "No Hidden Costs",
        desc: "Transparent pricing, always.",
    },
    {
        icon: <Building2 strokeWidth={1.5} className="h-8 w-8" />,
        title: "Expert Team",
        desc: "On-ground in China and India.",
    },
    {
        icon: <Clock3 strokeWidth={1.5} className="h-8 w-8" />,
        title: "Real-time Updates",
        desc: "Track every stage of your shipment.",
    },
    {
        icon: <HeadphonesIcon strokeWidth={1.5} className="h-8 w-8" />,
        title: "24/7 Support",
        desc: "Dedicated account manager.",
    },
];

// ─────────────────────────────────────────────
// Trust Card
// ─────────────────────────────────────────────
function TrustCard({ icon, title, desc }) {
    return (
        <div
            className="relative flex flex-col bg-white rounded-2xl overflow-hidden
                 shadow-sm hover:shadow-lg transition-all duration-300 group
                 hover:-translate-y-1"
            style={{ border: "1px solid rgba(11,42,107,0.08)" }}
        >
            {/* Card body */}
            <div className="flex flex-col flex-1 px-4 sm:px-6 py-5 sm:py-8">
                {/* Icon circle with centered icon */}
                <div className="flex justify-center mb-5">
                    <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                        style={{
                            background: "rgba(0,61,165,0.08)",
                            color: "#003DA5",
                        }}
                    >
                        {icon}
                    </div>
                </div>

                {/* Orange dash accent */}
                <div className="flex justify-center gap-1 mb-4">
                    <div
                        className="h-[3px] w-8 rounded-full"
                        style={{ background: "#FE5101" }}
                    />
                    <div
                        className="h-[3px] w-2 rounded-full"
                        style={{ background: "rgba(254,81,1,0.35)" }}
                    />
                </div>

                {/* Title */}
                <h4
                    className="text-[13px] sm:text-[15px] text-center font-bold mb-2 leading-snug"
                    style={{ color: "#0B2A6B" }}
                >
                    {title}
                </h4>

                {/* Description */}
                <p className="text-[12px] sm:text-[13px] text-center leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────
export default function WhyChooseUsSection({ items = TRUST_ITEMS }) {
    return (
        <section
            className="relative isolate overflow-hidden py-20 px-5 sm:px-6 lg:px-12 section-padding"
            style={{
                background:
                    "linear-gradient(160deg, #eef3fb 0%, #f5f8ff 50%, #eef3fb 100%)",
            }}
        >
            {/* Dot pattern — left */}
            <DotGrid className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30" />
            {/* Dot pattern — right */}
            <DotGrid className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 scale-x-[-1]" />

            <div className="container-main mx-auto max-w-7xl relative z-10">
                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center mb-12">
                    {/* Eyebrow */}
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <div className="inline-flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                            <span className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-semibold text-[#FE5101]">
                                Why Importers Choose Us
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                        </div>
                    </div>

                    {/* Title */}
                    <h2
                        className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-3"
                        style={{ color: "#0B2A6B" }}
                    >
                        Simple.{" "}
                        <span style={{ color: "#FE5101" }}>Predictable.</span>{" "}
                        Reliable.
                    </h2>

                    {/* Two-tone underline */}
                    <div
                        className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
                        style={{ width: '72px' }}
                    >
                        <div className="flex-1" style={{ background: '#0B2A6B' }} />
                        <div className="flex-1" style={{ background: '#FE5101' }} />
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm mt-1 max-w-xl mx-auto leading-relaxed" style={{ color: "#1E293B" }}>
                        Built for importers who need clarity, control, and consistency in every shipment.
                    </p>
                </div>

                {/* ── Cards grid ── */}
                            {/*
                    Mobile:  2 cols
                    sm:      3 cols (so 5 items = 3+2)
                    lg:      5 cols (all in a row)
                    */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                    {items.map((item) => (
                        <TrustCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────
// Dot grid SVG (decorative)
// ─────────────────────────────────────────────
function DotGrid({ className = "" }) {
    return (
        <svg
            width="180"
            height="320"
            viewBox="0 0 180 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            {Array.from({ length: 10 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                    <circle
                        key={`${row}-${col}`}
                        cx={col * 30 + 15}
                        cy={row * 32 + 16}
                        r="2"
                        fill="#003DA5"
                    />
                ))
            )}
        </svg>
    );
}