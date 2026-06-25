'use client'

import Image from 'next/image'
import {
    TbEye,
    TbTargetArrow,
    TbPackage,
    TbTag,
    TbUsers,
    TbUsersGroup,
    TbShieldCheck,
    TbWorld,
    TbClock,
    TbHeadset,
} from 'react-icons/tb'

// ─── Data ─────────────────────────────────────────────────────────────────────

const MISSION_ITEMS = [
    {
        Icon: TbPackage,
        text: 'Simplify international shipping with end-to-end DDP logistics',
    },
    {
        Icon: TbTag,
        text: 'Eliminate hidden costs and delays in imports',
    },
    {
        Icon: TbUsers,
        text: 'Support Indian businesses in scaling through reliable supply chains',
    },
    {
        Icon: TbUsersGroup,
        text: 'Build a seamless connection between China manufacturers and Indian markets',
    },
]

const VALUE_PILLARS = [
    {
        Icon: TbShieldCheck,
        title: 'Trusted Partner',
        desc: 'Built on transparency and reliability',
    },
    {
        Icon: TbWorld,
        title: 'Global Standards',
        desc: 'International processes with local expertise',
    },
    {
        Icon: TbClock,
        title: 'On-Time Delivery',
        desc: 'Every shipment, on schedule',
    },
    {
        Icon: TbHeadset,
        title: 'Customer First',
        desc: 'Dedicated support at every step',
    },
]

// ─── Section ──────────────────────────────────────────────────────────────────

export default function VisionMissionSection() {
    return (
        <section className="bg-white py-16 md:py-20 overflow-hidden">
            <div className="max-w-350 mx-auto px-4 md:px-8">

                {/* ── Section Header ── */}
                <div className="flex flex-col items-center mb-10">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                        <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
                            Vision &amp; Mission
                        </span>
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4">
                        <span style={{ color: '#0B2A6B' }}>Where We&apos;re Going,&nbsp;</span>
                        <span style={{ color: '#FE5101' }}>How We&apos;ll Get There.</span>
                    </h2>

                    {/* Underline accent - two-tone bar */}
                    <div className="flex h-[3.5px] rounded-full overflow-hidden" style={{ width: '72px' }}>
                        <div className="flex-1" style={{ background: '#0B2A6B' }} />
                        <div className="flex-1" style={{ background: '#FE5101' }} />
                    </div>
                </div>

                {/* ── Main Cards Row ── */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">

                    {/* ── LEFT: Vision Card ── */}
                    <div
                        className="relative rounded-3xl overflow-hidden"
                        style={{
                            minHeight: '510px',
                            background: 'linear-gradient(135deg, #EBF3FF 0%, #DCE9FF 100%)',
                            border: '1px solid rgba(11,42,107,0.08)',
                        }}
                    >
                        {/* Background image (ship + truck + map) - fills card */}
                        <Image
                            src="/images/about/visionsection.png"
                            alt="Cargo ship and truck with China-India trade route map"
                            fill
                            className="object-cover object-center opacity-50 md:opacity-95"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />

                        {/* Gradient wash so text stays legible */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(235,243,255,0.92) 0%, rgba(220,233,255,0.75) 45%, rgba(220,233,255,0.10) 100%)',
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                            {/* Icon + Title */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                                    style={{
                                        background: 'rgba(255,255,255,0.85)',
                                        boxShadow: '0 2px 16px rgba(11,42,107,0.12)',
                                    }}
                                >
                                    <TbEye size={28} color="#0B2A6B" strokeWidth={1.6} />
                                </div>
                                <h3
                                    className="text-2xl font-extrabold"
                                    style={{ color: '#0B2A6B' }}
                                >
                                    Our Vision
                                </h3>
                            </div>

                            {/* Quote */}
                            <div className="max-w-[300px]">
                                {/* Opening quote mark */}
                                <span
                                    className="block text-5xl font-serif leading-none mb-1 select-none"
                                    style={{ color: '#0B2A6B', opacity: 0.35, lineHeight: '1' }}
                                    aria-hidden
                                >
                                    &ldquo;
                                </span>
                                <p
                                    className="text-[21px] md:text-[18px] font-semibold leading-[1.55]"
                                    style={{ color: '#1a2d5a' }}
                                >
                                    To become the most trusted global logistics partner, delivering consistent, transparent, and scalable shipping solutions that empower businesses to trade seamlessly across borders.
                                </p>                                
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Mission Card ── */}
                    <div
                        className="rounded-3xl px-8 py-10 md:px-10 flex flex-col"
                        style={{
                            background: 'linear-gradient(135deg, #FFF3EE 0%, #FFE8DC 100%)',
                            border: '1px solid rgba(254,81,1,0.10)',
                        }}
                    >
                        {/* Icon + Title */}
                        <div className="flex items-center gap-3 mb-7">
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                                style={{
                                    background: 'rgba(255,255,255,0.80)',
                                    boxShadow: '0 2px 16px rgba(254,81,1,0.14)',
                                }}
                            >
                                <TbTargetArrow size={28} color="#FE5101" strokeWidth={1.6} />
                            </div>
                            <h3
                                className="text-2xl font-extrabold"
                                style={{ color: '#FE5101' }}
                            >
                                Our Mission
                            </h3>
                        </div>

                        {/* Mission list */}
                        <div className="flex flex-col gap-5">
                            {MISSION_ITEMS.map(({ Icon, text }) => (
                                <div key={text} className="flex items-start gap-4">
                                    {/* Icon bubble */}
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                        style={{
                                            background: 'rgba(255,255,255,0.70)',
                                            border: '1px solid rgba(254,81,1,0.15)',
                                        }}
                                    >
                                        <Icon size={20} color="#FE5101" strokeWidth={1.6} />
                                    </div>

                                    {/* Diamond bullet + text */}
                                    <div className="flex items-start gap-2 pt-1.5">                                        
                                        <p
                                            className="text-[14.5px] leading-snug font-medium"
                                            style={{ color: '#2d1a0a' }}
                                        >
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Bottom Value Pillars Strip ── */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl overflow-hidden"
                    style={{
                        border: '1px solid #E8EEF8',
                        boxShadow: '0 2px 20px rgba(11,42,107,0.07)',
                    }}
                >
                    {VALUE_PILLARS.map(({ Icon, title, desc }, i) => (
                        <div
                            key={title}
                            className="flex items-center gap-3 px-5 py-5"
                            style={{
                                background: '#ffffff',
                                borderRight:
                                    i < VALUE_PILLARS.length - 1
                                        ? '1px solid #E8EEF8'
                                        : 'none',
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: '#EBF3FF' }}
                            >
                                <Icon size={20} color="#003DA5" strokeWidth={1.6} />
                            </div>
                            {/* Text */}
                            <div>
                                <p
                                    className="font-bold text-[13px] mb-0.5"
                                    style={{ color: '#0B2A6B' }}
                                >
                                    {title}
                                </p>
                                <p className="text-slate-500 text-[12px] leading-snug">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}