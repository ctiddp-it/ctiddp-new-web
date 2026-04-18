"use client";
import Image from "next/image";
import Link from 'next/link'

const services = [
    {
        title: "DDP Shipment Management",
        desc: "We handle everything from factory pickup to final delivery at your doorstep — customs, duties, and last-mile included.",
    },
    {
        title: "Sourcing & Quality Control",
        desc: "Our China-based team coordinates directly with manufacturers in Guangzhou and Foshan to source products and verify quality before dispatch.",
    },
    {
        title: "Customs Clearance & Compliance",
        desc: "Full import documentation, HS code classification, and duty calculation handled by our experts - zero surprises at the Indian port.",
    },
];

export default function ServicesSection() {
    return (
        <section
            className="w-full bg-surface text-white py-16 px-6 md:px-16"
            style={{ position: "relative", overflow: "hidden" }}
        >
            {/*
             * BG-MAP — anchored to bottom-right corner of the entire section.
             * Bleeds off the right edge intentionally (overflow:hidden on section clips it).
             * Diagonal mask: fully transparent top-left → solid bottom-right,
             * so it only appears in the lower-right quadrant as in the reference.
             */}
            <div
                aria-hidden="true"
                className="hidden md:block"
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "52%",
                    height: "60%",
                    backgroundImage: "url('/images/bg-map.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right bottom",
                    opacity: 80,
                    maskImage:
                        "linear-gradient(135deg, transparent 25%, rgba(0,0,0,0.5) 55%, black 80%)",
                    WebkitMaskImage:
                        "linear-gradient(135deg, transparent 25%, rgba(0,0,0,0.5) 55%, black 80%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            <div className="max-w-full mx-auto" style={{ position: "relative", zIndex: 1 }}>

                <div className="mb-10">
                    <h2
                        className="font-semibold text-white uppercase text-center"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(36px, 5.5vw, 56px)",
                            letterSpacing: "0.01em",
                            lineHeight: 1.05,
                            margin: 0,
                        }}
                    >
                        END-TO-END GLOBAL LOGISTICS
                    </h2>

                </div>

                {/* TWO COLUMN GRID */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-16">

                    {/* LEFT COLUMN: Heading + Image stacked */}
                    <div className="flex flex-col gap-8">
                        <div
                            className="w-full relative rounded-2xl overflow-hidden"
                            style={{ height: "clamp(300px, 42vw, 720px)" }}
                        >
                            <Image
                                src="/images/Home/hassle-free-customs-clearance-india-imports.jpg"
                                alt="Cargo ship at sea"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Services list — no relative/absolute bg here */}
                    <div className="flex flex-col pt-10 md:pt-20">

                        {services.map((item, i) => (
                            <div key={i} className="py-6">

                                <div className="flex items-start gap-4">

                                    {/* ICON */}
                                    <div className="mt-1 flex items-center justify-center w-7 h-7 rounded-md 
          bg-card border border-border text-white text-xs">
                                        ↗
                                    </div>

                                    {/* TEXT */}
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-white leading-tight mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted leading-relaxed max-w-[90%]">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>

                                {/* DIVIDER */}
                                {i < services.length - 1 && (
                                    <div className="mt-6 border-t border-border" />
                                )}
                            </div>
                        ))}

                        {/* BUTTON */}
                        <div className="mt-8">
                            <Link href="/services" className="inline-flex items-center gap-3 px-4 py-2 text-sm rounded-lg 
      bg-card border border-border text-white hover:bg-primary/10 transition">

                                Explore Our Services

                                <span className="flex items-center justify-center w-5 h-5 rounded 
        bg-primary text-[#ffff] text-xs">
                                    ↗
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}