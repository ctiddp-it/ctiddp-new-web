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
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px]"
      style={{ background: "rgba(254,81,1,0.10)", color: "#FE5101" }}
    >
      <ShieldCheck className="h-3 w-3" />
      {text}
    </span>
  );
}

// ─────────────────────────────────────────────
// Feature Row (inside content card)
// ─────────────────────────────────────────────
function FeatureRow({ feature, isLast }) {
  const Icon = ICON_MAP[feature.icon];
  return (
    <div
      className={`flex gap-4 py-4 ${!isLast ? "border-b border-slate-100" : ""}`}
    >
      {Icon && (
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "rgba(0,61,165,0.08)", color: "#003DA5" }}
        >
          <Icon className="h-4 w-4" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-sm font-bold mb-0.5" style={{ color: "#0B2A6B" }}>
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
// Pill Card (below image - icon + label)
// ─────────────────────────────────────────────
function PillCard({ feature }) {
  const Icon = ICON_MAP[feature.icon];
  return (
    <div
      className="flex items-center gap-2 rounded-xl px-3 py-3 flex-1 min-w-0"
      style={{ background: "#ffffff", border: "1px solid #E8EEF8" }}
    >
      {Icon && (
        <Icon className="h-4 w-4 shrink-0" style={{ color: "#003DA5" }} />
      )}
      <span className="text-xs font-medium text-slate-700 leading-snug truncate">
        {feature.title}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// Left block: Badge + Title + accent + Content card
// ─────────────────────────────────────────────
function ContentColumn({ badge, title, subtitle, description, features, renderContent }) {
  return (
    <div className="flex flex-col gap-5">
      {/* Badge + Title + orange accent */}
      <div className="space-y-4">

        {/* Eyebrow */}
        {badge && (
          <div className="flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FE5101]">
              {badge}
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>
        )}

        {/* Title */}
        <h2
          className="text-[clamp(28px,3.5vw,44px)] font-extrabold leading-tight"
          style={{ color: "#0B2A6B" }}
        >
          {title}
        </h2>

        {/* Two-tone underline */}
        <div
          className="flex h-[3.5px] rounded-full overflow-hidden"
          style={{ width: "72px" }}
        >
          <div className="flex-1 bg-[#0B2A6B]" />
          <div className="flex-1 bg-[#FE5101]" />
        </div>

      </div>

      {/* Content card */}
      {renderContent ? (
        <div
          className="rounded-2xl p-6 lg:p-7 shadow-sm"
          style={{ background: "#ffffff", border: "1px solid #E8EEF8" }}
        >
          {renderContent()}
        </div>
      ) : (
        <div
          className="rounded-2xl p-6 lg:p-7 shadow-sm"
          style={{ background: "#ffffff", border: "1px solid #E8EEF8" }}
        >
          {subtitle && (
            <p
              className="mb-3 text-sm font-semibold"
              style={{ color: "#003DA5" }}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mb-5 text-sm text-slate-500 leading-7">
              {description}
            </p>
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
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Image block: tall image + pills row below
// ─────────────────────────────────────────────
function ImageColumn({ imageSrc, imageAlt, overlayLabel, features, renderImage }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Image card */}
      {renderImage ? (
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ minHeight: 685 }}
        >
          {renderImage()}
        </div>
      ) : (
        <div
          className="group relative w-full overflow-hidden rounded-2xl"
          style={{ minHeight: 685 }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0B2A6B 0%, #003DA5 100%)",
              }}
            >
              <Globe
                className="h-20 w-20"
                style={{ color: "rgba(255,255,255,0.15)" }}
              />
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Overlay label pill */}
          {overlayLabel && (
            <div className="absolute bottom-5 left-5 z-10">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-md"
                style={{ background: "#FE5101" }}
              >
                <Globe className="h-3.5 w-3.5" />
                {overlayLabel}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Pills row */}
      {features.length > 0 && (
        <div className="flex gap-2 sm:gap-3">
          {features.slice(0, 3).map((feature, i) => (
            <PillCard key={i} feature={feature} />
          ))}
        </div>
      )}
    </div>
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
    closing,
    imageSrc,
    imageAlt = "Section image",
    overlayLabel,
    renderImage,
    renderContent,
    className = "",
    containerClassName = "",
    initialLayout = "content-left",
    // showToggle kept for API compatibility, not rendered
    showToggle,
  } = props;

  // "content-left"  → content on left,  image on right
  // "content-right" → image on left,    content on right
  const isContentLeft = initialLayout !== "content-right";

  const contentCol = (
    <ContentColumn
      badge={badge}
      title={title}
      subtitle={subtitle}
      description={description}
      features={features}
      renderContent={renderContent}
    />
  );

  const imageCol = (
    <ImageColumn
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      overlayLabel={overlayLabel}
      features={features}
      renderImage={renderImage}
    />
  );

  return (
    <section
      className={`relative isolate overflow-hidden py-16 lg:py-20 px-5 sm:px-6 lg:px-12 ${className}`}
      style={{ background: "#ffffff" }}
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full blur-3xl -z-10"
        style={{ background: "rgba(0,61,165,0.05)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[380px] w-[380px] rounded-full blur-3xl -z-10"
        style={{ background: "rgba(254,81,1,0.04)" }}
      />

      <div className={`mx-auto max-w-7xl ${containerClassName}`}>

        {/*
          Mobile:  always content first, image second (single column)
          Desktop: respect initialLayout - content-left or content-right
        */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">

          {/* On mobile: content always comes first via order utilities */}
          <div className={isContentLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
            {contentCol}
          </div>

          <div className={isContentLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
            {imageCol}
          </div>

        </div>

        {/* Full-width closing strip */}
        {closing && (
          <div
            className="mt-5 flex items-start gap-4 rounded-2xl px-5 py-5 shadow-sm"
            style={{ background: "#ffffff", border: "1px solid #E8EEF8" }}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5"
              style={{ background: "#003DA5" }}
            >
              <ShieldCheck className="h-4 w-4 text-white" />
            </div>
            <p className="text-sm text-slate-500 leading-7">{closing}</p>
          </div>
        )}

      </div>
    </section>
  );
}