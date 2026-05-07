"use client"

import Link from "next/link"

export default function CTA({
  title,
  text,
  buttonLabel,
  href = "/quote",
}) {
  return (
    <section className="relative text-center px-4 sm:px-[60px] py-12 sm:py-16 overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">

      {/* Title */}
      <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.2] mb-3">
        {title}
      </h2>

      {/* Text */}
      <p className="text-sm text-muted max-w-[500px] mx-auto mb-7">
        {text}
      </p>

      {/* Button */}
      <div className="flex gap-3 justify-center flex-wrap">
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
        >
          {buttonLabel}
        </Link>
      </div>

    </section>
  )
}