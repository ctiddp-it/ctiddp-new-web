"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CTA({
  title,
  text,
  buttonLabel,
  href = "/quote",
}) {
  return (
    <section className="relative text-center px-4 sm:px-[60px] py-12 sm:py-16 overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-heading text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.2] mb-3"
      >
        {title}
      </motion.h2>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-sm text-muted max-w-[500px] mx-auto mb-7"
      >
        {text}
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex gap-3 justify-center flex-wrap"
      >
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
        >
          {buttonLabel}
        </Link>
      </motion.div>

    </section>
  )
}