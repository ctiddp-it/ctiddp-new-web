"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const partners = [
  { id: 1, name: "Bussiness Partner", logo: "/images/our-partners/alibaba-group-logo.png" },
  { id: 2, name: "Bussiness Partner", logo: "/images/our-partners/Amazon-logo.png" },
  { id: 3, name: "Delivery Partner", logo: "/images/our-partners/blue-dart-logo2.png" },
  { id: 4, name: "Bussiness Partner", logo: "/images/our-partners/canton-fair-logo.png" },
  { id: 5, name: "Delivery Partner", logo: "/images/our-partners/DHL-Logo.png" },
  { id: 6, name: "Delivery Partner", logo: "/images/our-partners/Dtdc-logo2.png" },
  { id: 7, name: "Delivery Partner", logo: "/images/our-partners/Fedex-logo.png" },
  { id: 8, name: "Bussiness Partner", logo: "/images/our-partners/indiamart-logo.png" },
  { id: 9, name: "Bussiness Partner", logo: "/images/our-partners/Made-in-China -logo.png" },
  { id: 10, name: "Bussiness Partner", logo: "/images/our-partners/Rcl-logo.png" },
  { id: 11, name: "Bussiness Partner", logo: "/images/our-partners/tradeindia-logo.jpg" },
];

const VISIBLE = 7;
const CENTER = Math.floor(VISIBLE / 2);

const CONFIG = {
  mobile: {
    sizes: [40, 55, 70, 90, 70, 55, 40],
    margins: [4, 6, 8, 8, 6, 4, 0],
    scale: 1.6
  },
  tablet: {
    sizes: [60, 75, 95, 120, 95, 75, 60],
    margins: [8, 10, 12, 12, 10, 8, 0],
    scale: 1.2
  },
  desktop: {
    sizes: [70, 90, 120, 160, 120, 90, 70],
    margins: [10, 14, 18, 18, 14, 10, 0],
    scale: 1.4
  }
};

const OPACITIES = [0.2, 0.35, 0.6, 1, 0.6, 0.35, 0.2];
function mod(n, m) {
  return ((n % m) + m) % m;
}


export default function PartnersSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const hovered = useRef(false);

  const [config, setConfig] = useState(CONFIG.desktop);

  // derived values (AFTER config is defined)
  const scale = config.scale;
  const SIZES = config.sizes.map(s => s * scale);
  const MARGINS = config.margins.map(m => m * scale);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setConfig(CONFIG.mobile);
      } else if (window.innerWidth < 1024) {
        setConfig(CONFIG.tablet);
      } else {
        setConfig(CONFIG.desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const advance = useCallback(() => {
    setCurrent((c) => mod(c + 1, partners.length));
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 2200);
  }, [advance]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = (idx) => {
    setCurrent(mod(idx, partners.length));
    if (!hovered.current) startTimer();
  };

  const slots = Array.from({ length: VISIBLE }, (_, s) => {
    const pi = mod(current - CENTER + s, partners.length);
    return { ...partners[pi], slotIndex: s, isCenter: s === CENTER };
  });

  return (
    <section className="py-16 px-6 overflow-hidden text-center bg-gray-100 dark:bg-black">
      <div className="text-center max-w-150 mx-auto mb-0 md:mb-11">
        <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-blue-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
          Trusted by industry leaders
        </span>
        <h2 className="font-garamond text-[clamp(32px,4vw,52px)] font-light leading-[1.1] mb-3.5">
          Our<br />
          <em className="italic text-blue-light">Global Partners</em>
        </h2>
        <p className="text-[15px] text-muted leading-relaxed max-w-141 mx-auto">
          Collaborating with world-class platforms and logistics providers to deliver excellence.
        </p>
      </div>

      {/* Stage */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: `${160 * scale}px` }}
        onMouseEnter={() => {
          hovered.current = true;
          if (timerRef.current) clearInterval(timerRef.current);
        }}
        onMouseLeave={() => {
          hovered.current = false;
          startTimer();
        }}
      >
        {/* Spotlight glow behind center */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200 * scale,
            height: 120 * scale,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo track */}
        <div className="flex items-center justify-center relative z-10">
          {slots.map(({ id, name, logo, slotIndex, isCenter }) => {
            const size = SIZES[slotIndex];
            const opacity = OPACITIES[slotIndex];
            const mr = MARGINS[slotIndex];
            const imgSize = size - (isCenter ? 24 * scale : 18 * scale);

            return (
              <div
                key={`${slotIndex}-${id}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: size,
                  opacity,
                  marginRight: mr,
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-xl bg-gray-100 dark:bg-[#fff]"
                  style={{
                    width: size,
                    height: size,
                    padding: isCenter ? 14 : 10,
                    gap: 6,
                    border: isCenter
                      ? "0.5px solid rgba(99,102,241,0.4)"
                      : "0.5px solid rgba(0,0,0,0.08)",
                    boxShadow: isCenter
                      ? "0 20px 40px rgba(0,0,0,0.18), 0 6px 12px rgba(0,0,0,0.12)"
                      : "0 8px 20px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
                    transition: "all 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Logo image */}
                  <div
                    className="relative"
                    style={{ width: imgSize, height: imgSize - (isCenter ? 8 : 4) }}
                  >
                    <Image
                      src={logo}
                      alt={name}
                      fill
                      className="object-contain"
                      sizes={`${size}px`}
                    />
                  </div>

                  {/* Name label — center slot only */}
                  {isCenter && (
                    <span
                      className="block whitespace-nowrap font-medium"
                      style={{
                        fontSize: 14,
                        color: "#6b7280",
                        letterSpacing: "0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 justify-center mt-6">
        {partners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: i === current ? 20 : 6,
              background: i === current ? "#6366f1" : "rgba(0,0,0,0.15)",
            }}
            aria-label={`Go to ${partners[i].name}`}
          />
        ))}
      </div>

      <p className="mt-8 text-xs text-gray-400 tracking-wide">
        12 trusted partners across logistics &amp; trade
      </p>
    </section>
  );
}