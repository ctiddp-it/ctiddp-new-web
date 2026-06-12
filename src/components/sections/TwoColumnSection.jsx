"use client";

import { useState } from "react";
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
  ArrowRight,
  Info,
} from "lucide-react";

// ─────────────────────────────────────────────
// Icon Map
// ─────────────────────────────────────────────
const ICON_MAP = {
  "package-check": PackageCheck,
  "search-check": SearchCheck,
  "shield-check": ShieldCheck,
  "clipboard-check": ClipboardCheck,
  truck: Truck,
  globe: Globe,
  warehouse: Warehouse,
  "circle-dollar": CircleDollarSign,
};

// ─────────────────────────────────────────────
// Badge
// ─────────────────────────────────────────────
function Badge({ text }) {
  if (!text) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0181EA]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#0181EA]">
      {text}
    </span>
  );
}

// ─────────────────────────────────────────────
// Title
// ─────────────────────────────────────────────
function Title({ title }) {
  if (!title) return null;
  return (
    <h2 className="text-[clamp(28px,4vw,42px)] font-serif font-bold leading-tight text-slate-900">
      {title}
    </h2>
  );
}

// ─────────────────────────────────────────────
// Image Card – left column, spans full height
// ─────────────────────────────────────────────
function ImageCard({ imageSrc, imageAlt, overlayLabel, renderImage }) {
  if (renderImage) {
    return (
      <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
        {renderImage()}
      </div>
    );
  }

  return (
    <div className="group relative h-full min-h-[320px] overflow-hidden rounded-2xl bg-slate-100">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt || "Section image"}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        // Placeholder when no image provided
        <div className="absolute inset-0 bg-gradient-to-br from-[#0056b3] via-[#0181EA] to-[#38a3f1] flex items-center justify-center">
          <Globe className="h-20 w-20 text-white/20" />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {overlayLabel && (
        <div className="absolute bottom-5 left-5 z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0181EA] px-4 py-2 text-xs font-medium text-white shadow-md">
            <PackageCheck className="h-3.5 w-3.5" />
            {overlayLabel}
          </span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Stat Cards – 2-up mini metric tiles
// ─────────────────────────────────────────────
function StatCards({ stats = [] }) {
  if (!stats.length) return null;

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-4"
        >
          <p className="text-2xl font-serif font-bold text-slate-900 leading-none">
            {stat.value}
          </p>
          <p className="mt-1.5 text-xs text-slate-500 leading-snug">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Pills Row
// ─────────────────────────────────────────────
function Pills({ features = [] }) {
  if (!features.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {features.slice(0, 4).map((item, i) => (
        <span
          key={i}
          className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-[#0181EA]/40 hover:text-[#0181EA]"
        >
          {item.title}
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Feature Row – contained in card with dividers
// ─────────────────────────────────────────────
function FeatureRow({ feature, isLast }) {
  const Icon = ICON_MAP[feature.icon];
  return (
    <div
      className={`flex gap-4 py-4 group/row ${
        !isLast ? "border-b border-slate-100" : ""
      }`}
    >
      {Icon && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0181EA]/10 text-[#0181EA] transition-colors duration-200 group-hover/row:bg-[#0181EA] group-hover/row:text-white">
          <Icon className="h-4 w-4" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-900 mb-0.5">
          {feature.title}
        </p>
        <p className="text-xs text-slate-500 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Content Card – right column
// ─────────────────────────────────────────────
function ContentCard({ subtitle, description, features = [], renderContent }) {
  if (renderContent) {
    return (
      <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm">
        {renderContent()}
      </div>
    );
  }

  return (
    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm">
      {subtitle && (
        <p className="mb-2 text-sm font-semibold text-[#0181EA]">{subtitle}</p>
      )}
      {description && (
        <p className="mb-6 text-sm text-slate-500 leading-7">{description}</p>
      )}
      <div>
        {features.map((feature, i) => (
          <FeatureRow
            key={i}
            feature={feature}
            isLast={i === features.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Closing Strip – full-width callout band
// ─────────────────────────────────────────────
function ClosingStrip({ closing }) {
  if (!closing) return null;

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white px-6 py-5 shadow-sm">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0181EA]/10 text-[#0181EA] mt-0.5">
        <Info className="h-4 w-4" />
      </div>
      <p className="text-sm text-slate-500 leading-7">{closing}</p>
    </div>
  );
}

// ─────────────────────────────────────────────
// CTA Link (optional)
// ─────────────────────────────────────────────
function CtaLink({ cta }) {
  if (!cta) return null;
  return (
    <a
      href={cta.href || "#"}
      className="inline-flex items-center gap-2 text-sm font-medium text-[#0181EA] transition-all duration-200 hover:gap-3 group"
    >
      {cta.label}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function TwoColumnSection(props) {
  const {
    badge,
    title,
    subtitle,
    description,
    features = [],
    stats = [],
    closing,
    cta,
    imageSrc,
    imageAlt = "Section image",
    overlayLabel,
    renderImage,
    renderContent,
    bgColor = "bg-white",
    className = "",
    containerClassName = "",
  } = props;

  return (
    <section
      className={`relative isolate overflow-hidden py-20 px-6 lg:px-12 ${className}`}
    >
        {/* Background Layer */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#f3f9ff] to-[#e6f3ff]" />

        {/* Soft Blue Glow Blobs */}
        <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#0181EA]/10 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#0181EA]/10 blur-3xl -z-10" />
      
      <div className={`mx-auto max-w-7xl ${containerClassName}`}>

        {/* Header row – badge, title, and optional CTA in same row on large screens */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <Badge text={badge} />
            <Title title={title} />
          </div>
          {cta && <CtaLink cta={cta} />}
        </div>

        {/* Main asymmetric grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* LEFT COLUMN — image (top) + stats + pills (bottom) */}
          <div className="flex flex-col gap-4">
            {/* Image card — flex-1 so it fills remaining height */}
            <div className="flex-1">
              <ImageCard
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                overlayLabel={overlayLabel}
                renderImage={renderImage}
              />
            </div>

            {/* Stats row */}
            {stats.length > 0 && <StatCards stats={stats} />}

            {/* Pills */}
            {features.length > 0 && <Pills features={features} />}
          </div>

          {/* RIGHT COLUMN — content card fills full height */}
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <ContentCard
                subtitle={subtitle}
                description={description}
                features={features}
                renderContent={renderContent}
              />
            </div>
          </div>
        </div>

        {/* Full-width closing strip */}
        {closing && (
          <div className="mt-4">
            <ClosingStrip closing={closing} />
          </div>
        )}

      </div>
    </section>
  );
}
