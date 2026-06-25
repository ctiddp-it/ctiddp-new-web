'use client'

import Image from 'next/image'
import {
    TbBuilding,
    TbUsersGroup,
    TbShieldCheck,
    TbTargetArrow,
    TbClipboardList,
    TbBuildingBank,
    TbAnchor,
    TbTruckDelivery,
    TbUsers,
    TbAward,
    TbTrendingUp,
    TbWorld,
    TbUser,
} from 'react-icons/tb'

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOUNDERS = [
    {
        id: 'mallesh',
        name: 'Mallesh Gujjala',
        role: 'Founder & CEO',
        image: '/images/about/founders/founder-cti.png',
        // Card tint - the full card bg colour (very light blue)
        cardBg: '#EEF4FF',
        // The circle behind the bust photo
        circleBg: '#C8DCFF',
        accentColor: '#0B2A6B',
        accentBg: '#DCE9FF',
        iconBg: '#0B2A6B',
        profileIcon: TbTargetArrow,
        profile:
            'Visionary behind CTIDDP. Built the end-to-end DDP framework for Global imports - factory coordination, supplier relations, quality inspection & compliance.',
        specialties: [
            { Icon: TbBuilding, label: 'Factory\nCoordination' },
            { Icon: TbUsersGroup, label: 'Supplier\nRelations' },
            { Icon: TbShieldCheck, label: 'Quality &\nCompliance' },
        ],
        imageWidth: 250,
        imageHeight: 280,
        imageOffsetY: 0,
    },
    {
        id: 'balu',
        name: 'Balu Gujjala',
        role: 'Co-Founder & India Operations',
        image: '/images/about/founders/co-founder-cti.png',
        // Card tint - full card bg (very light peach)
        cardBg: '#FFF3EC',
        // The circle behind the bust photo
        circleBg: '#FFD4B3',
        accentColor: '#FE5101',
        accentBg: '#FFE8D6',
        iconBg: '#FE5101',
        profileIcon: TbClipboardList,
        profile:
            'Oversees all India-side operations, customs compliance, and client relationships. Licensed CHA in Indian import logistics - port handling, customs clearance & last-mile delivery.',
        specialties: [
            { Icon: TbBuildingBank, label: 'Customs\nCompliance' },
            { Icon: TbAnchor, label: 'Port Handling &\nClearance' },
            { Icon: TbTruckDelivery, label: 'Last-Mile\nDelivery' },
        ],
        imageWidth: 250,
        imageHeight: 280,
        imageOffsetY: 0,
    },
]

const VALUES = [
    {
        Icon: TbUsers,
        title: 'People First',
        desc: 'We believe in building lasting relationships with our clients and partners.',
    },
    {
        Icon: TbAward,
        title: 'Integrity Always',
        desc: 'Transparent communication and honest practices in every step we take.',
    },
    {
        Icon: TbTrendingUp,
        title: 'Results Driven',
        desc: 'Focused on delivering measurable results and business growth.',
    },
    {
        Icon: TbWorld,
        title: 'Global Mindset, Local Focus',
        desc: 'Bringing global standards with deep understanding of local needs.',
    },
]

// ─── Founder Card ─────────────────────────────────────────────────────────────

function FounderCard({ founder }) {
    const {
        name, role, image,
        cardBg, circleBg,
        accentColor, accentBg, iconBg,
        profileIcon: ProfileIcon, profile, specialties, imageWidth, imageHeight, imageOffsetY,
    } = founder

    return (
        <div
            className="rounded-3xl overflow-hidden flex flex-col"
            style={{
                background: '#ffffff',
                border: '1px solid #E8EEF8',
                boxShadow: '0 4px 32px rgba(11,42,107,0.08)',
            }}
        >
            {/* ══════════════════════════════════════════
                TOP ZONE - tinted card bg
            ══════════════════════════════════════════ */}
            <div
                className="flex flex-col sm:flex-row gap-0 sm:gap-4"
                style={{ background: cardBg }}
            >
                {/* ── Photo column ──
                    The circle sits at the bottom of this column.
                    The photo is taller than the circle so the bust
                    overflows UPWARD out of the circle into the card bg.
                    We use `overflow: visible` on the column and
                    `overflow: hidden` only on the circle itself.
                ── */}
                <div
                    className="relative shrink-0 flex items-end justify-center sm:justify-start"
                    style={{
                        // on mobile full width, on sm fixed width
                        width: undefined,
                        paddingTop: '16px',
                        paddingLeft: '24px',
                        paddingRight: '0px',
                        // enough height so the photo can tower above the circle
                        minHeight: '220px',
                    }}
                >
                    {/* Tinted circle - anchored to bottom of column */}
                    <div
                        className="absolute rounded-full
                    w-[220px] h-[220px]
                    sm:w-[190px] sm:h-[190px]
                    md:w-[220px] md:h-[220px]
                    left-1/2 sm:left-[30px]
                    -translate-x-1/2 sm:translate-x-0
                    bottom-[12px] sm:bottom-[20px]
                "
                        style={{
                            background: circleBg,
                        }}
                    />

                    {/* Photo - sits in front of circle, taller so bust overflows above */}
                    <div
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            width: `${imageWidth}px`,
                            height: `${imageHeight}px`,
                            transform: `translateY(${imageOffsetY}px)`,
                        }}
                    >
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-contain object-bottom"
                            sizes={`${imageWidth}px`}
                        />
                    </div>
                </div>

                {/* ── Name / role / profile ── */}
                <div className="flex-1 min-w-0 px-6 pt-6 pb-6 sm:pt-7 sm:pr-7">
                    {/* Colored icon badge */}

                    <h3
                        className="text-[19px] sm:text-xl font-extrabold leading-tight mb-0.5"
                        style={{ color: '#0B2A6B' }}
                    >
                        {name}
                    </h3>
                    <p className="text-slate-500 text-[13px] font-medium mb-3">
                        {role}
                    </p>

                    {/* Accent divider */}
                    <div
                        className="mb-4 rounded-full"
                        style={{ width: '32px', height: '3px', background: accentColor }}
                    />

                    {/* Profile block */}
                    <div className="flex items-start gap-2.5">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: accentBg }}
                        >
                            <ProfileIcon size={16} color={accentColor} strokeWidth={1.7} />
                        </div>
                        <div>
                            <p
                                className="text-[12px] font-bold mb-1"
                                style={{ color: accentColor }}
                            >
                                Profile:
                            </p>
                            <p className="text-slate-600 text-[13px] leading-relaxed">
                                {profile}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════
                BOTTOM - specialties strip (white bg)
            ══════════════════════════════════════════ */}
            <div
                className="grid grid-cols-3 mt-auto bg-white"
                style={{ borderTop: '1px solid #F0F4FB' }}
            >
                {specialties.map(({ Icon, label }, i) => (
                    <div
                        key={label}
                        className="flex flex-col items-center gap-2 py-4 px-2 text-center"
                        style={{
                            borderRight: i < specialties.length - 1 ? '1px solid #F0F4FB' : 'none',
                        }}
                    >
                        <Icon size={22} color={accentColor} strokeWidth={1.5} />
                        <span
                            className="text-[11px] sm:text-[11.5px] font-semibold leading-snug whitespace-pre-line"
                            style={{ color: '#0B2A6B' }}
                        >
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function LeadershipSection() {
    return (
        <section className="relative bg-white py-16 md:py-20 overflow-hidden">

            {/* ── BG map - left corner ── */}
            <div
                className="absolute top-0 left-0 w-[280px] md:w-[580px] h-[320px] md:h-[420px] pointer-events-none select-none"
                style={{ opacity: 0.1 }}
            >
                <Image
                    src="/images/bg-map.png"
                    alt=""
                    fill
                    className="object-contain object-left-top"
                    sizes="580px"
                    aria-hidden
                />
            </div>

            {/* ── BG map - right corner ── */}
            <div
                className="absolute top-0 right-0 w-[280px] md:w-[580px] h-[320px] md:h-[420px] pointer-events-none select-none"
                style={{ opacity: 0.1 }}
            >
                <Image
                    src="/images/bg-map.png"
                    alt=""
                    fill
                    className="object-contain object-right-top"
                    sizes="580px"
                    aria-hidden
                    style={{ transform: 'scaleX(-1)' }}
                />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-10 md:mb-12">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                        <span className="text-[#FE5101] font-semibold text-[12px] tracking-[0.18em] uppercase">
                            Leadership &amp; Core Team
                        </span>
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-center mb-4 px-2">
                        <span style={{ color: '#0B2A6B' }}>Leadership That&nbsp;</span>
                        <span style={{ color: '#FE5101' }}>Drives Excellence</span>
                    </h2>

                    {/* Two-tone underline */}
                    <div
                        className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
                        style={{ width: '72px' }}
                    >
                        <div className="flex-1" style={{ background: '#0B2A6B' }} />
                        <div className="flex-1" style={{ background: '#FE5101' }} />
                    </div>

                    <p className="text-slate-400 text-[14px] sm:text-[15px] text-center max-w-xl px-4">
                        Experienced leaders. Deep industry knowledge. One mission - your success.
                    </p>
                </div>

                {/* Founder Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
                    {FOUNDERS.map((f) => (
                        <FounderCard key={f.id} founder={f} />
                    ))}
                </div>

                {/* Values Strip */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
                    style={{
                        border: '1px solid #E8EEF8',
                        boxShadow: '0 2px 20px rgba(11,42,107,0.07)',
                    }}
                >
                    {VALUES.map(({ Icon, title, desc }, i) => (
                        <div
                            key={title}
                            className="flex items-start gap-3 px-5 py-5 bg-white"
                            style={{
                                borderRight: i < VALUES.length - 1 ? '1px solid #E8EEF8' : 'none',
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                style={{ background: '#EBF3FF' }}
                            >
                                <Icon size={20} color="#003DA5" strokeWidth={1.6} />
                            </div>
                            <div>
                                <p
                                    className="font-bold text-[13px] mb-1"
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