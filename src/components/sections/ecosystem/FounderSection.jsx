// components/FounderSection.jsx
// Usage: <FounderSection /> inside any Server or Client page

import Image from "next/image";

export default function FounderSection() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE5101] opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#003DA5] opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />

            {/* Background map image - top right */}
            <div className="absolute top-0 right-0 w-[800px] h-[500px] hidden sm:block opacity-[0.08] pointer-events-none select-none">
                <Image
                    src="/images/bg-map.png"
                    alt="World map background"
                    fill
                    className="object-contain object-top"
                    sizes="500px"
                    priority={false}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block w-8 h-0.5 bg-[#FE5101]" />
                    <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#FE5101]">
                        Founder's Message
                    </span>
                </div>

                {/* Section heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B2A6B] leading-tight mb-14 max-w-2xl">
                    Driven by Execution,{" "}
                    <span className="block text-[#FE5101]">Built for Scale</span>
                </h2>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* — Photo column (5/12) */}
                    <div className="lg:col-span-5 relative">
                        {/* Orange accent bar */}
                        <span
                            className="absolute -left-3 top-8 w-1.5 h-20 bg-[#FE5101] hidden lg:block rounded-full"
                            aria-hidden="true"
                        />

                        {/* Photo frame - Artistic brush style */}
                        <div className="relative aspect-[4/5] group">
                            {/* Organic brush stroke background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FE5101]/20 via-[#003DA5]/10 to-[#FE5101]/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-3 scale-105" />

                            {/* Main container with organic shape */}
                            <div className="absolute inset-2 bg-gradient-to-br from-white via-[#E8EDF5] to-white rounded-[40%_60%_60%_40%/40%_40%_60%_60%] shadow-2xl flex items-center justify-center p-6 overflow-hidden">
                                <Image
                                    src="/images/about/ctiddp-founders/mallesh-gujjala-founder-ceo-ctiddp.png"
                                    alt="Mallesh Gujjala, CEO & Founder of CTIDDP"
                                    fill
                                    className="object-contain transition-all duration-700 ease-in-out scale-100"
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                    priority
                                />
                            </div>

                            {/* Floating accent circle */}
                            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#FE5101] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#003DA5] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                        </div>

                        {/* Founder name badge */}
                        <div className="mt-5 pl-1 md:hidden">
                            <p className="text-[16px] font-bold text-[#0B2A6B]">
                                Mallesh Gujjala
                            </p>
                            <p className="text-[13px] tracking-wide text-[#003DA5] font-medium">
                                CEO &amp; Founder, CTIDDP
                            </p>
                        </div>
                    </div>

                    {/* — Quote column (7/12) */}
                    <div className="lg:col-span-7 flex flex-col">

                        {/* Opening quote mark */}
                        <span
                            className="font-serif text-[100px] leading-[0.6] text-[#FE5101] mb-3 select-none opacity-70"
                            aria-hidden="true"
                        >
                            &ldquo;
                        </span>

                        {/* Body copy with improved readability */}
                        <div className="space-y-5 text-slate-700 text-[16px] leading-[1.9] mb-8 max-w-2xl">
                            <p>
                                Global trade has historically been a fragmented puzzle.
                                Importers and infrastructure developers have had to juggle
                                disconnected customs brokers, unpredictable freight timelines,
                                and unverified supplier networks just to get a single project
                                off the ground.
                            </p>
                            <p>
                                We built the CTIDDP Ecosystem to eliminate that friction
                                entirely. By unifying end-to-end DDP logistics, B2B
                                sourcing platform, and hands-on turnkey project execution into a single
                                operational layer, we remove the middlemen and the guesswork.
                            </p>
                            <p>
                                Our mission is simple: to provide a seamless, transparent
                                pipeline where your business can source globally, ship
                                reliably, and scale without boundaries.
                            </p>
                        </div>

                        {/* Divider */}
                        <span className="w-12 h-0.5 bg-[#003DA5] mb-6 rounded-full" />

                        {/* Attribution with enhanced styling */}
                        <div className="flex items-center gap-4">
                            <span className="w-6 h-px bg-[#FE5101] flex-shrink-0" />
                            <div>
                                <p className="text-[14px] font-semibold text-[#003DA5]">
                                    Mallesh Gujjala
                                </p>
                                <p className="text-[12px] text-slate-500">
                                    CEO &amp; Founder, CTIDDP
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}