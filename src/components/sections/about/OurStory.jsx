'use client'

import { useRef, useEffect, useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    TbShip,
    TbBuildingWarehouse,
    TbRoute,
    TbAward,
    TbSearch,
    TbClipboardCheck,
    TbPackageExport,
    TbTruckDelivery,
    TbShieldCheck,
} from 'react-icons/tb'
import { HiArrowRight } from 'react-icons/hi2'
import { MdVerified } from 'react-icons/md'

// ─── Data ─────────────────────────────────────────────────────────────────────

const METRICS = [
    { Icon: TbShip, value: '1200+', label: 'DDP Shipments\nDelivered' },
    { Icon: TbAward, value: '10+', label: 'Years Combined\nExperience' },
    { Icon: TbBuildingWarehouse, value: '6', label: 'Strategic\nLocations' },
    { Icon: TbRoute, value: '100%', label: 'Focused Trade Route\nExpertise' },
]

const PROCESS_STEPS = [
    {
        Icon: TbSearch,
        title: 'Supplier Sourcing',
        desc: 'We help you connect with trusted suppliers and verify products.',
    },
    {
        Icon: TbClipboardCheck,
        title: 'Quality Check & Consolidation',
        desc: 'We inspect, consolidate, and prepare your goods for shipping.',
    },
    {
        Icon: TbPackageExport,
        title: 'Customs Clearance & DDP Shipping',
        desc: 'We handle documentation, customs, duties & international shipping.',
    },
    {
        Icon: TbTruckDelivery,
        title: 'Delivery to Your Doorstep',
        desc: 'We deliver safely to your warehouse or business address anywhere in India.',
    },
]

const TRUST_PILLS = [
    { text: 'End-to-end DDP solutions' },
    { text: 'Transparent pricing' },
    { text: 'On-time delivery' },
]

// ─── Animated counter ─────────────────────────────────────────────────────────

function useCountUp(target, duration = 1500, started = false) {
    const numeric = parseInt(target.replace(/\D/g, ''), 10)
    const suffix = target.replace(/[0-9]/g, '')
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!started || !numeric) return
        let startTime = null
        const step = (ts) => {
            if (!startTime) startTime = ts
            const p = Math.min((ts - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(eased * numeric))
            if (p < 1) requestAnimationFrame(step)
            else setCount(numeric)
        }
        requestAnimationFrame(step)
    }, [started])

    return `${count}${suffix}`
}

function AnimatedValue({ value, started }) {
    const display = useCountUp(value, 1400, started)
    return <>{display}</>
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function OurStorySection() {
    const ref = useRef(null)
    const [vis, setVis] = useState(false)

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } },
            { threshold: 0.15 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        <section
            ref={ref}
            className="bg-white py-15 overflow-hidden"
        >
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* ══════════════════════════════════════════
                        LEFT COLUMN
                    ══════════════════════════════════════════ */}
                    <div className="flex-1 min-w-0 lg:max-w-[690px] pl-0 xl:pl-30">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                            <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
                                Our Story
                            </span>
                            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.08] mb-6">
                            <span style={{ color: '#0B2A6B' }}>Built to Simplify</span>
                            <br />
                            <span style={{ color: '#FE5101' }}>Global Trade.</span>
                        </h2>

                        {/* Body */}
                        <div className="space-y-3.5 text-slate-600 text-[15px] leading-relaxed mb-7">
                            <p>
                                <strong className="text-slate-800 font-semibold">
                                    Cross Border Trade International Delivered Duty Paid (CTIDDP)
                                </strong>{' '}
                                is a specialized logistics partner focused on simplifying imports.
                                We work closely with businesses, e-commerce brands, and bulk importers to handle the
                                entire shipping process - from supplier pickup to final delivery.
                            </p>
                            <p>
                                Our journey started with a simple observation: most importers struggle not with
                                sourcing, but with shipping, customs clearance, and coordination. That's where we
                                built our expertise.
                            </p>
                            <p>
                                We provide end-to-end DDP shipping services - with
                                on-ground presence in China and active coordination with clients, bridging
                                the gap between suppliers and delivery.
                            </p>
                        </div>

                        {/* Process steps */}
                        <div className="flex flex-col mb-6">
                            {PROCESS_STEPS.map(({ Icon, title, desc }, i) => (
                                <div key={title} className="flex gap-4 items-start">
                                    {/* Icon + dashed line */}
                                    <div className="flex flex-col items-center shrink-0">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                            style={{
                                                background: '#FFF0E8',
                                                border: '1.5px solid rgba(254,81,1,0.2)',
                                            }}
                                        >
                                            <Icon size={18} color="#FE5101" />
                                        </div>
                                        {i < PROCESS_STEPS.length - 1 && (
                                            <div
                                                className="w-px mt-1 mb-0"
                                                style={{
                                                    height: '32px',
                                                    background:
                                                        'repeating-linear-gradient(to bottom,#CBD5E1 0,#CBD5E1 4px,transparent 4px,transparent 9px)',
                                                }}
                                            />
                                        )}
                                    </div>
                                    {/* Text */}
                                    <div className="pb-2">
                                        <p
                                            className="font-bold text-[14px] mb-0.5"
                                            style={{ color: '#0B2A6B' }}
                                        >
                                            {title}
                                        </p>
                                        <p className="text-slate-500 text-[13px] leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                        RIGHT COLUMN - single image, cards overlaid
                    ══════════════════════════════════════════ */}
                    {/* RIGHT COLUMN */}
                    <div className="flex-1 min-w-0">

                        <div className="relative rounded-3xl overflow-hidden">

                            {/* Image - hidden on mobile */}
                            <div className="hidden md:block relative min-h-[630px]">
                                <Image
                                    src="/images/about/ctiddp-storysection-bg-image.png"
                                    alt="China to India trade route with cargo ship"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width:1024px) 100vw, 600px"
                                    priority
                                />

                                <div
                                    className="absolute inset-0 z-[1]"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, rgba(235,243,255,0) 0%, rgba(235,243,255,0) 45%, rgba(235,243,255,0.6) 68%, rgba(235,243,255,0.92) 100%)',
                                    }}
                                />
                            </div>

                            {/* Metrics */}
                            <div
                                className="
                                grid grid-cols-2 gap-2
                                md:absolute md:z-10 md:px-8
                                px-0
                            "
                                style={{
                                    bottom: '20px',
                                    left: 0,
                                    right: 0,
                                }}
                            >
                                {METRICS.map(({ Icon, value, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2 rounded-xl px-4 py-4"
                                        style={{
                                            background: '#ffffff',
                                            border: '1px solid #E8EEF8',
                                            boxShadow: '0 2px 20px rgba(11,42,107,0.10)',
                                        }}
                                    >
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: '#FFF0E8' }}
                                        >
                                            <Icon size={22} color="#FE5101" />
                                        </div>

                                        <div>
                                            <div
                                                className="text-[18px] md:text-[28px] font-extrabold leading-none"
                                                style={{ color: '#0B2A6B' }}
                                            >
                                                <AnimatedValue value={value} started={vis} />
                                            </div>

                                            <div className="text-slate-600 text-[11px] leading-snug mt-0.5 whitespace-pre-line">
                                                {label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>                           

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}