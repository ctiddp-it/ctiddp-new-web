"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    PackageCheck,
    SearchCheck,
    ShieldCheck,
    ClipboardCheck,
    Truck,
    Globe,
    Warehouse,
    CircleDollarSign,
} from "lucide-react";

const ICON_MAP = {
    "package-check": PackageCheck,
    "search-check": SearchCheck,
    "shield-check": ShieldCheck,
    "clipboard-check": ClipboardCheck,
    "truck": Truck,
    "globe": Globe,
    "warehouse": Warehouse,
    "circle-dollar": CircleDollarSign,
};

// ─── Layout Toggle Button ──────────────────────────────────
function LayoutToggle({ currentLayout, onToggle }) {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onToggle}
            className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg text-[10px] font-medium tracking-wider uppercase
                 bg-white/[0.03] border border-white/[0.08] text-slate-400
                 hover:bg-white/[0.06] hover:border-blue-500/30 hover:text-blue-400
                 backdrop-blur-sm transition-all duration-300"
            title="Toggle layout direction"
        >
            ⇄ Switch Layout
        </motion.button>
    );
}

// ─── Content Block ─────────────────────────────────────────
function ContentBlock({ badge, title, subtitle, description, features, closing }) {
    return (
        <div className="flex flex-col justify-center h-full">
            {/* Badge */}
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="font-heading text-[11px] font-semibold tracking-[2px] uppercase text-blue-400">
                        {badge}
                    </span>
                </motion.div>
            )}

            {/* Title */}
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading text-[clamp(28px,3.5vw,42px)] font-light leading-[1.15] text-white mb-3 tracking-tight"
                >
                    {title}
                </motion.h2>
            )}

            {/* Subtitle */}
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="font-heading text-lg text-blue-light font-light mb-6"
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Main Description */}
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-body text-[15px] leading-relaxed text-slate-300 mb-8"
                >
                    {description}
                </motion.p>
            )}

            {/* Features Grid */}
            {features && features.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid gap-4 mb-8"
                >
                    {features.map((feature, idx) => {
                        const Icon = ICON_MAP[feature.icon];

                        return (
                            <div
                                key={idx}
                                className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] 
      hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300 group"
                            >
                                {Icon && (
                                    <div className="flex-shrink-0 mt-0.5 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                                    </div>
                                )}

                                <div>
                                    {feature.title && (
                                        <h4 className="font-heading text-sm font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                                            {feature.title}
                                        </h4>
                                    )}

                                    {feature.description && (
                                        <p className="font-body text-[13px] text-slate-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            )}

            {/* Closing Statement */}
            {closing && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative pl-4 border-l-2 border-blue-500/30"
                >
                    <p className="font-body text-[14px] text-slate-400 italic leading-relaxed">
                        {closing}
                    </p>
                </motion.div>
            )}
        </div>
    );
}

// ─── Image Block ───────────────────────────────────────────
function ImageBlock({ imageSrc, imageAlt, overlayLabel }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-full min-h-[400px] md:min-h-full rounded-2xl overflow-hidden group"
        >
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-950" />

            {/* Image */}
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={imageAlt || "Section image"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            )}

            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/[0.05] pointer-events-none" />

            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />

            {/* Image overlay label */}
            {overlayLabel && (
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                          bg-black/50 backdrop-blur-md border border-white/10">
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-blue-400"
                        />
                        <span className="text-[11px] text-blue-300 font-medium tracking-wider uppercase">
                            {overlayLabel}
                        </span>
                    </div>
                </div>
            )}
        </motion.div>
    );
}

// ─── Main Reusable Component ────────────────────────────────
export default function TwoColumnSection({
    // Layout props
    initialLayout = "content-left",
    showToggle = false,

    // Content props
    badge,
    title,
    subtitle,
    description,
    features = [],
    closing,

    // Image props
    imageSrc,
    imageAlt = "Section image",
    overlayLabel,

    // Style props
    className = "",
    containerClassName = "",
    contentClassName = "",
    imageClassName = "",

    // Custom render props (for maximum flexibility)
    renderContent,
    renderImage,

    // Animation props
    animate = true,

    // Section styling
    bgColor = "bg-[#020617]",
    padding = "py-16 md:py-24",
}) {
    const [layoutDirection, setLayoutDirection] = useState(initialLayout);
    const isContentLeft = layoutDirection === "content-left";

    return (
        <section
            className={`
        relative ${padding} px-6 md:px-12 
        ${bgColor} overflow-hidden
        ${className}
      `}
        >
            {/* Ambient background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/50 to-transparent" />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(59,130,246,0.15), transparent 60%)",
                    }}
                />
            </div>

            {/* Content Container */}
            <div className={`relative z-10 max-w-7xl mx-auto ${containerClassName}`}>
                <div className="relative">
                    {/* Layout Toggle - Desktop */}
                    {showToggle && (
                        <div className="hidden md:block opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <LayoutToggle
                                currentLayout={layoutDirection}
                                onToggle={() =>
                                    setLayoutDirection((prev) =>
                                        prev === "content-left" ? "content-right" : "content-left"
                                    )
                                }
                            />
                        </div>
                    )}

                    {/* Layout Toggle - Mobile */}
                    {showToggle && (
                        <div className="md:hidden flex justify-end mb-4">
                            <LayoutToggle
                                currentLayout={layoutDirection}
                                onToggle={() =>
                                    setLayoutDirection((prev) =>
                                        prev === "content-left" ? "content-right" : "content-left"
                                    )
                                }
                            />
                        </div>
                    )}

                    {/* Two Column Grid */}
                    <div
                        className={`
              grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16
              items-center
            `}
                    >
                        {/* Content Side */}
                        <div
                            className={`
                ${isContentLeft ? "md:order-1" : "md:order-2"}
                ${contentClassName}
              `}
                        >
                            {renderContent ? (
                                renderContent()
                            ) : (
                                <ContentBlock
                                    badge={badge}
                                    title={title}
                                    subtitle={subtitle}
                                    description={description}
                                    features={features}
                                    closing={closing}
                                />
                            )}
                        </div>

                        {/* Image Side */}
                        <div
                            className={`
                h-[400px] md:h-[600px] lg:h-[700px]
                ${isContentLeft ? "md:order-2" : "md:order-1"}
                ${imageClassName}
              `}
                        >
                            {renderImage ? (
                                renderImage()
                            ) : (
                                <ImageBlock
                                    imageSrc={imageSrc}
                                    imageAlt={imageAlt}
                                    overlayLabel={overlayLabel}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}