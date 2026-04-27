"use client"

import { motion } from "framer-motion"

export default function Hero({
  title,
  subtitle,
  badge = "Service Detail",
  bgImage = "/images/hero-default.jpg", // fallback image
}) {
  return (
    <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[40vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[52px] sm:pb-[64px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Dark Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Glow (keep your design identity) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[920px]">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
          {badge}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[clamp(30px,4.6vw,54px)] font-medium leading-[1.12] mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[15px] text-white/80 max-w-[800px] mx-auto"
        >
          {subtitle}
        </motion.p>

      </div>
    </section>
  )
}