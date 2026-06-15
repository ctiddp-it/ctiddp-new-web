"use client";

import {
  MdFactory,
  MdInventory2,
  MdAssignmentTurnedIn,
  MdFlight,
  MdLocalShipping,
} from "react-icons/md";
import {
  FaLocationDot,
  FaClock,
  FaShieldHalved,
  FaBoxOpen,
  FaAward,
} from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import { TbFileCheck } from "react-icons/tb";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    Icon: MdFactory,
    title: "Supplier Coordination & Factory QC",
    description:
      "Vendor sourcing, negotiation, quality inspection at Foshan before goods move.",
    badge: { type: "location", text: "FOSHAN, CHINA" },
  },
  {
    Icon: MdInventory2,
    title: "Cargo Consolidation & Export Preparation",
    description:
      "Multi-vendor consolidation at Guangzhou. HS code check, packing list, commercial invoice.",
    badge: { type: "location", text: "GUANGZHOU, CHINA" },
  },
  {
    Icon: TbFileCheck,
    title: "China Export Customs · 48 hrs",
    description:
      "Export declaration, LEO clearance, EGM verification – all within 48 hours.",
    badge: { type: "time", text: "48 HOURS" },
  },
  {
    Icon: MdFlight,
    title: "International Sea / Air Transit",
    description:
      "Full DDP Incoterms 2020. Freight, insurance, all risk on us throughout transit.",
    badge: { type: "time", text: "18–25 DAYS SEA / 7–9 DAYS AIR" },
  },
  {
    Icon: MdLocalShipping,
    title: "Customs + Last-Mile Delivery",
    description:
      "BE filing, BCD+IGST paid, OOC, Our warehouse, Last mile + POD.",
    badge: { type: "time", text: "9–15 DAYS CLEARANCE" },
  },
];

const USP_PILLS = [
  { Icon: FaShieldHalved, label: "Single Point\nof Contact" },
  { Icon: TbFileCheck,    label: "All-Inclusive\nPricing" },
  { Icon: FaBoxOpen,      label: "100% Safe\n& Secure" },
  { Icon: FaAward,        label: "On-Time\nDelivery" },
];

// ─── Step Row ─────────────────────────────────────────────────────────────────

function StepRow({ step, isLast }) {
  const { Icon, title, description, badge } = step;
  return (
    <div className={`flex items-start gap-5 py-6 ${!isLast ? "border-b border-slate-100" : ""}`}>
      {/* Icon bubble */}
      <div
        className="flex-shrink-0 w-[64px] h-[64px] rounded-full flex items-center justify-center"
        style={{ background: "#EEF3FB" }}
      >
        <Icon size={28} color="#003DA5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-[17px] mb-1 leading-snug" style={{ color: "#0B2A6B" }}>
          {title}
        </h3>
        <p className="text-slate-600 text-[14px] leading-relaxed mb-2">{description}</p>

        {/* Badge */}
        {badge.type === "location" ? (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-wide" style={{ color: "#003DA5" }}>
            <FaLocationDot size={12} color="#003DA5" />
            {badge.text}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-wide" style={{ color: "#003DA5" }}>
            <FaClock size={12} color="#003DA5" />
            {badge.text}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function OneContractSection() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Headline */}
            <div className="mb-6">
              <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.05] mb-0" style={{ color: "#0B2A6B" }}>
                One Contract.
              </h2>
              <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.05]" style={{ color: "#FE5101" }}>
                Zero Worry.
              </h2>
              <div className="mt-4 h-[4px] w-12 rounded-full" style={{ background: "#FE5101" }} />
            </div>

            {/* Sub-copy */}
            <p className="text-slate-700 text-[17px] leading-relaxed mb-8">
              Every step &amp; every cost — from supplier to your door. We handle it all.
            </p>

            {/* Timeline chip */}
            <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 mb-8">
              <div
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: "#EEF3FB" }}
              >
                <LuCalendarClock size={22} color="#003DA5" />
              </div>
              <p className="text-slate-700 text-[14px] leading-snug">
                Typical total:{" "}
                <span className="font-bold" style={{ color: "#003DA5" }}>
                  38–50 days
                </span>
                <br />
                factory pickup → Warehouse
                <br />
                <span className="text-slate-500">(including customs)</span>
              </p>
            </div>

            {/* CTA */}
            <a
              href="/process"
              className="inline-flex items-center gap-3 self-start px-7 py-4 rounded-xl text-white font-bold text-[15px] tracking-wide transition-opacity hover:opacity-90"
              style={{ background: "#FE5101" }}
            >
              SEE FULL PROCESS
              <HiArrowRight size={18} />
            </a>

            {/* USP pills */}
            <div className="mt-10 flex flex-wrap gap-5">
              {USP_PILLS.map(({ Icon, label }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-[88px]">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "#EEF3FB" }}
                  >
                    <Icon size={22} color="#003DA5" />
                  </div>
                  <span className="text-center text-slate-600 text-[12px] leading-tight whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-6">
            {STEPS.map((step, i) => (
              <StepRow key={i} step={step} isLast={i === STEPS.length - 1} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}