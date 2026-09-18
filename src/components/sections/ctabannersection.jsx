
import VideoPreview from '@/components/ui/VideoPreview';

import Image from "next/image";
import { FaWhatsapp, FaLock } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

export default function CTABannerSection() {
    return (
        <section
            className="relative overflow-hidden w-full py-20 px-4 md:px-8"
            style={{
                background: "linear-gradient(120deg, #0B2A6B 0%, #003DA5 100%)",
            }}
        >
            {/* World Map Background */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/bg-map.png"
                    alt=""
                    fill
                    className="object-contain opacity-[0.05]"
                />
            </div>

            {/* Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A6B]/95 via-[#003DA5]/90 to-[#0B2A6B]/95" />

            {/* Shipping Route Lines */}
            <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                viewBox="0 0 1600 600"
                preserveAspectRatio="none"
            >
                <path
                    d="M50 450 C350 150, 700 150, 1500 350"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10 10"
                />

                <circle cx="50" cy="450" r="6" fill="#FE5101" />
                <circle cx="1500" cy="350" r="6" fill="#FE5101" />
            </svg>

            {/* CTIDDP Watermark */}
            <div className="absolute left-[50px] top-1/5 -translate-y-1/2 pointer-events-none hidden lg:block">
                <span
                    className="font-black uppercase leading-none select-none"
                    style={{
                        fontSize: "240px",
                        color: "rgba(255,255,255,0.03)",
                    }}
                >
                    CTIDDP
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left - Video */}
                <div className="relative w-full lg:w-[520px] flex-shrink-0">

                    <div
                        className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        style={{ paddingTop: "56.25%" }}
                    >
                        <VideoPreview videoId="tF9U_erUUb4" title="CTIDDP — How to request a shipping quote" />
                    </div>
                </div>

                {/* Right - Content */}
                <div className="flex-1 min-w-0">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                        Ready to Ship{" "}
                        <br />
                        <span style={{ color: "#FE5101" }}>
                            the Right Way?
                        </span>
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-6">
                        Get a complete DDP quote in under 2 hours.
                        No hidden costs, no surprises.
                        Customs duty, freight, clearance and
                        last-mile delivery included in one transparent quote.
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm text-slate-300">
                        <span>✓ Customs Included</span>
                        <span>✓ Freight Included</span>
                        <span>✓ Door Delivery</span>
                        <span>✓ No Hidden Charges</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-5">
                        <a
                            href="/quote"
                            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px]"
                            style={{ background: "#FE5101" }}
                        >
                            GET FREE QUOTE
                            <HiArrowRight size={18} />
                        </a>

                        <a
                            href="https://wa.me/918790018787"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px]"
                            style={{
                                background: "#12813D",
                                color: "#fff",
                            }}
                        >
                            <FaWhatsapp size={18} />
                            CHAT ON WHATSAPP
                        </a>
                    </div>

                    <p className="text-slate-400 text-xs flex items-center gap-1">
                        <FaLock className="w-2 h-4" />
                        Your details remain confidential and are never shared.
                    </p>
                </div>

            </div>
        </section>
    );
}