import Image from "next/image";
import {
  ShieldCheck,
  Map,
  BadgeCheck,
  Headphones,
  Globe,
  ClipboardList,
  Tag,
  ArrowRight,
  FileText,
  Package
} from "lucide-react";
import { RiCustomerService2Fill } from "react-icons/ri";
import HomeContactForm from "@/components/sections/home/HomeContactForm"
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   ROOT STRUCTURE
   • <> fragment wraps two <section> tags
   • Hero section: bg-[#f5f7fb], overflow-visible so card can hang
   • Next section: bg-white with pt that absorbs the card overlap
   ───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative bg-[#f5f7fb] overflow-visible md:py-5">

        {/* ── DESKTOP background image ─────────────────────────────────
            Positioned absolute, starts at left-[30%] so the left 30%
            is pure #f5f7fb. A strong left-fade makes the transition
            invisible. Hidden on mobile - mobile gets its own image block.
        ──────────────────────────────────────────────────────────────── */}
        <div className="hidden xl:block absolute inset-0 left-[10%]">
          <Image
            src="/images/home/ctiddp-herosection-bg-image.png"
            alt="Logistics"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Strong left-to-right fade: covers ~40% of the image panel */}
          <div className="absolute inset-y-0 left-0 w-[38%] xl:w-[46%] 2xl:w-[48%]
                          bg-linear-to-r from-[#f5f7fb] via-[#f5f7fb]/75 to-transparent" />
        </div>

        {/* ── HERO CONTENT ─────────────────────────────────────────────
            Responsive layout using CSS Grid:
            • Mobile (<768px): single column, stacked
            • Tablet (768–1279px): single column, stacked, centered form
            • Desktop (≥1280px): 2-column grid, content left + form right
        ──────────────────────────────────────────────────────────────── */}
        <div
          className="
            relative z-10
            py-10 sm:py-14 md:py-16 xl:py-0
            xl:min-h-[70vh]
            2xl:min-h-[73vh]
            xl:flex xl:items-center
          "
        >
          <div
            className="
              w-full
               max-w-437.5
              mx-auto
              px-5 sm:px-6 md:px-8 lg:px-8 xl:px-12
              grid
              grid-cols-1
              xl:grid-cols-[minmax(0,1.15fr)_460px]
              gap-10 xl:gap-12
              items-center
            "
          >

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                LEFT COLUMN - Content
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="w-full max-w-[750px]">

              {/* ── Heading ── two lines, whitespace-nowrap on desktop */}
              <h1 className="seg font-extrabold leading-[1.2] tracking-[-0.5px] lg:tracking-[-1px]">
                <span className="block text-[#0B2A6B]
                                 text-[28px] sm:text-[36px]
                                 md:text-[44px] xl:text-[52px] 2xl:text-[54px]
                                 xl:whitespace-nowrap">
                  Global Freight Forwarding
                </span>
                <span className="block text-[#FE5101]
                                 text-[28px] sm:text-[36px]
                                 md:text-[44px] xl:text-[46px]
                                 xl:whitespace-nowrap">
                  Built For International Trade
                </span>
              </h1>

              {/* ── Accent bar - below heading, above description ── */}
              <div className="w-14 h-1.25 rounded-full bg-[#2456D3]
                              mt-4 mb-4 md:mt-5 md:mb-5 xl:mt-7 xl:mb-7" />

              {/* ── Description ── */}
              <p className="text-[14px] sm:text-[15px] md:text-[16px] xl:text-[17px]
                            leading-[1.85] text-slate-800 max-w-[520px]">
                From factory pickup to doorstep delivery, we handle everything –
                shipping, customs clearance, duties, and last-mile delivery.
                One contract. One partner.
              </p>

              {/* ── CTA Buttons ── */}
              <div className="flex flex-row gap-3 mt-6 md:mt-7 xl:mt-8">
                <Link href="/quote">
                  <button
                    className="h-11 md:h-12 px-2 md:px-5 rounded-xl bg-[#003DA5] hover:bg-[#00338a]
               text-white font-semibold text-[13px] md:text-[14px]
               flex items-center gap-2 transition-colors shadow-sm shrink-0"
                  >
                    <FileText size={15} />
                    Get Free Quote
                    <ArrowRight size={15} />
                  </button>
                </Link>

                <a
                  href="https://wa.me/918790018787"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="h-11 md:h-12 px-5 md:px-6 rounded-xl bg-white border border-slate-200
               hover:border-[#25D366]
               font-semibold text-[13px] md:text-[14px] text-slate-800
               flex items-center gap-2 transition-colors shadow-sm shrink-0"
                  >
                    <WhatsAppIcon size={15} />
                    WhatsApp Us
                  </button>
                </a>
              </div>

              {/* ── Stats ─────────────────────────────────────────────
                  Desktop: single row, 4 stats side-by-side
                  Mobile:  2×2 grid
              ────────────────────────────────────────────────────────── */}
              <div
                className="
                  mt-8 md:mt-10
                  pt-6 md:pt-8
                  border-t border-slate-200/70
                  grid grid-cols-2 xl:grid-cols-4
                  gap-y-6 md:gap-y-8 xl:gap-y-0
                "
              >
                <StatItem
                  icon={<ShieldCheck size={20} />}
                  value="500+"
                  label={<>Importers <br /> Trust Us </>}
                />
                <StatItem
                  icon={<Package size={20} />}
                  value="300+"
                  label="Containers Imported"
                />

                <StatItem
                  icon={<BadgeCheck size={20} />}
                  value="1200+"
                  label="Shipments Delivered"
                />

                <StatItem
                  icon={<RiCustomerService2Fill size={20} />}
                  value="16250+"
                  label="CBM Shipped"
                />
              </div>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                RIGHT COLUMN - Contact Form
                • Mobile/Tablet: full-width, centered, max-w-md
                • Desktop (xl+): aligned right, max-w-[480px]
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="w-full max-w-md mx-auto xl:max-w-[480px] xl:mx-0 xl:ml-auto">
              <HomeContactForm />
            </div>
          </div>
        </div>

        {/* ── MOBILE hero image ─────────────────────────────────────────
            Appears below the content block only on mobile/tablet.
            Sits between hero content and floating card.
        ──────────────────────────────────────────────────────────────── */}
        <div className="xl:hidden relative w-full h-[200px] sm:h-[260px] md:h-[300px] -mt-4 overflow-hidden">
          <Image
            src="/images/home/bg-image.png"
            alt="Logistics"
            fill
            priority
            className="object-cover object-[center_40%]"
          />
          {/* Fade top so it connects seamlessly with content */}
          <div className="absolute inset-x-0 top-0 h-24
                          bg-linear-to-b from-[#f5f7fb] via-[#f5f7fb]/60 to-transparent" />
          {/* Fade bottom so it flows into the card */}
          <div className="absolute inset-x-0 bottom-0 h-16
                          bg-linear-to-t from-[#f5f7fb] to-transparent" />
        </div>

        {/* ── FLOATING FEATURE CARD ─────────────────────────────────────
            Sits inside the hero section but hangs below via -mb-[value].
            overflow-visible on <section> ensures it's not clipped.
            The white next-section absorbs it with matching pt.
        ──────────────────────────────────────────────────────────────── */}
        <div className="relative z-20
                        max-w-7xl mx-auto
                        px-5 sm:px-8 lg:px-10
                        -mb-14 lg:-mb-16">
          <div className="bg-white rounded-2xl lg:rounded-[22px]
                          border border-[#E8EDF5]
                          shadow-[0_4px_32px_rgba(15,23,42,0.08)]
                          overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-[#E8EDF5]
                            lg:divide-y-0 lg:divide-x lg:divide-[#E8EDF5]">
              <FeatureCard
                icon={<Globe size={22} />}
                title="Global Network"
                desc="Strong Supplier and agent network worldwide."
              />
              <FeatureCard
                icon={<ClipboardList size={22} />}
                title="End-to-End DDP"
                desc="We take care of everything so you don't have to."
              />
              <FeatureCard
                icon={<Tag size={22} />}
                title="Cost Efficient"
                desc="Save up to 30–40% with optimized solutions."
              />
              <FeatureCard
                icon={<ShieldCheck size={22} />}
                title="Reliable & Secure"
                desc="Safe cargo handling with real-time updates."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEXT SECTION - white, absorbs card overlap
          pt-28 lg:pt-32 = card height offset
          Replace inner content with your real section.
      ══════════════════════════════════════════ */}
      <section className="relative bg-gray-50 pt-28 lg:pt-32">
        {/* ↑ Keep bg-white and pt values. Replace everything below. */}
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WHATSAPP ICON (inline - no extra dep)
───────────────────────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-[17px] h-[17px] text-[#25D366] shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   STAT ITEM
   • Icon left-aligned at top
   • Large bold number
   • Small label below
   • Vertical divider on desktop via border-r (except last)
   • On mobile: 2-col grid, no dividers
───────────────────────────────────────────────────────────────── */
function StatItem({ icon, value, label }) {
  return (
    <div className="group relative flex items-start gap-3 pr-4 lg:pr-6">
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 -left-2 -right-2 -top-2 -bottom-2 rounded-2xl bg-linear-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:from-blue-50/40 group-hover:via-blue-100/30 group-hover:to-blue-50/0" />

      {/* Icon with modern styling */}
      <div className="relative shrink-0 rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 p-2.5 text-[#2456D3] transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
        {icon}
      </div>

      <div className="relative">
        <div className="text-[24px] sm:text-[28px] xl:text-3xl leading-none font-black tracking-tight text-[#0B2A6B] transition-all duration-300 group-hover:text-[#2456D3]">
          {value}
        </div>
        <div className="text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-slate-500 mt-1.5 leading-tight group-hover:text-slate-700">
          {label}
        </div>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────────
   FEATURE CARD
   Borders handled by CSS divide utilities on the grid parent -
   no need for conditional last/border logic per card.
───────────────────────────────────────────────────────────────── */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 p-6 sm:p-7 lg:p-8">
      <div className="w-12 h-12 rounded-full bg-[#F0F4FF]
                      flex items-center justify-center
                      text-[#003DA5] shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] lg:text-[17px] font-bold text-[#0B2A6B] leading-snug">
          {title}
        </h3>
        <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}