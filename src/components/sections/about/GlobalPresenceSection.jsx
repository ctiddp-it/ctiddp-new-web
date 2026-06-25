import {
    TbMapPin,
    TbPhone,
    TbMail,
    TbClock,
    TbBuilding,
    TbBuildingWarehouse,
    TbStar,
} from 'react-icons/tb'

// ─── Data ─────────────────────────────────────────────────────────────────────

const INDIA_OFFICES = [
    {
        id: 'vizag',
        city: 'Visakhapatnam',
        tag: 'India Head Office',
        tagType: 'head',
        Icon: TbStar,
        address: ' 2nd Floor, PVR Building, Lawsons Bay Colony, Pedda Waltair, Visakhapatnam, Andhra Pradesh 530017',
        phone: '+91 87900 18787',
        email: 'info@ctiddp.com',
        hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    },
    {
        id: 'bangalore',
        city: 'Bangalore',
        tag: 'India Branch Office',
        tagType: 'branch',
        Icon: TbBuilding,
        address: '1st Floor, 1315, 25th Main Rd, Kottapalya, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560041',
        phone: '+91 98866 75587',
        email: null,
        hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    },
    {
        id: 'chennai',
        city: 'Chennai',
        tag: 'India Warehouse',
        tagType: 'warehouse',
        Icon: TbBuildingWarehouse,
        address: null,
        phone: '+91 97019 07318',
        email: null,
        hours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    },
    {
        id: 'Kolkata',
        city: 'Kolkata',
        tag: 'India Warehouse',
        tagType: 'warehouse',
        Icon: TbBuildingWarehouse,
        address: null,
        phone: '+91 97019 07318',
        email: null,
        hours: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
    },
]

const CHINA_OFFICES = [    
    {
        id: 'foshan',
        city: 'Foshan',
        tag: 'China Office',
        tagType: 'branch',
        Icon: TbBuilding,
        address: 'Room 102, No. 9, Zhenhua Road, Lecong, Shunde District, Foshan City, Guangdong Province',
        phone: '+86 181 1814 9844',
        email: null,
        hours: 'Mon – Sat: 9:00 AM – 6:00 PM CST',
    },{
        id: 'guangzhou',
        city: 'Guangzhou',
        tag: 'China Warehouse',
        tagType: 'warehouse',
        Icon: TbBuildingWarehouse,
        phone: '+86 181 1814 9844',
        email: 'info@ctiddp.com',
        hours: 'Mon – Sat: 9:00 AM – 6:00 PM CST',
    }
]

// ─── Tag badge styles ──────────────────────────────────────────────────────────

const TAG_STYLES = {
    head:      { bg: '#0B2A6B', color: '#ffffff' },
    branch:    { bg: '#EBF3FF', color: '#003DA5' },
    china:     { bg: '#FFF3EE', color: '#FE5101' },
    warehouse: { bg: '#FFF3EE', color: '#FE5101' },
}

// ─── Country divider ──────────────────────────────────────────────────────────

function CountryHeader({ flag, country, count, accentColor }) {
    return (
        <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl leading-none select-none">{flag}</span>
            <div>
                <p
                    className="font-extrabold text-[15px] tracking-wide uppercase"
                    style={{ color: accentColor }}
                >
                    {country}
                </p>
                <p className="text-slate-400 text-[11px] font-medium">
                    {count} {count === 1 ? 'location' : 'locations'}
                </p>
            </div>
            {/* Rule */}
            <div
                className="flex-1 h-px ml-1"
                style={{ background: `${accentColor}22` }}
            />
        </div>
    )
}

// ─── Office Card ──────────────────────────────────────────────────────────────

function OfficeCard({ office }) {
    const { city, tag, tagType, Icon, address, phone, email, hours } = office
    const tagStyle = TAG_STYLES[tagType]

    return (
        <div
            className="flex flex-col rounded-2xl overflow-hidden h-full"
            style={{
                background: '#ffffff',
                border: '1px solid #E8EEF8',
                boxShadow: '0 2px 24px rgba(11,42,107,0.07)',
            }}
        >
            {/* Card header */}
            <div
                className="px-5 pt-5 pb-4"
                style={{
                    background:
                        tagType === 'head'
                            ? 'linear-gradient(135deg,#EBF3FF 0%,#DCE9FF 100%)'
                            : tagType === 'china' || tagType === 'warehouse'
                            ? 'linear-gradient(135deg,#FFF3EE 0%,#FFE8D8 100%)'
                            : '#F8FAFF',
                }}
            >
                {/* Tag + Icon row */}
                <div className="flex items-start justify-between gap-2 mb-3">
                    <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wide uppercase"
                        style={{ background: tagStyle.bg, color: tagStyle.color }}
                    >
                        {tag}
                    </span>
                    <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255,255,255,0.75)' }}
                    >
                        <Icon size={18} color="#003DA5" strokeWidth={1.7} />
                    </div>
                </div>

                {/* City name */}
                <h3
                    className="text-[20px] font-extrabold leading-tight"
                    style={{ color: '#0B2A6B' }}
                >
                    {city}
                </h3>
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-3 px-5 py-4 flex-1">

                {address && (
                    <div className="flex items-start gap-2.5">
                        <TbMapPin
                            size={15}
                            color="#003DA5"
                            strokeWidth={2}
                            className="shrink-0 mt-[2px]"
                        />
                        <p className="text-slate-600 text-[13px] leading-snug">
                            {address}
                        </p>
                    </div>
                )}

                <div className="flex items-center gap-2.5">
                    <TbPhone
                        size={15}
                        color="#003DA5"
                        strokeWidth={2}
                        className="shrink-0"
                    />
                    <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="text-slate-700 text-[13px] font-medium hover:underline"
                        style={{ color: '#1e3a6e' }}
                    >
                        {phone}
                    </a>
                </div>

                {email && (
                    <div className="flex items-center gap-2.5">
                        <TbMail
                            size={15}
                            color="#003DA5"
                            strokeWidth={2}
                            className="shrink-0"
                        />
                        <a
                            href={`mailto:${email}`}
                            className="text-[13px] font-medium hover:underline"
                            style={{ color: '#FE5101' }}
                        >
                            {email}
                        </a>
                    </div>
                )}

                <div className="flex items-center gap-2.5">
                    <TbClock
                        size={15}
                        color="#003DA5"
                        strokeWidth={2}
                        className="shrink-0"
                    />
                    <p className="text-slate-500 text-[12px]">{hours}</p>
                </div>
            </div>
        </div>
    )
}

// ─── Stat pill ────────────────────────────────────────────────────────────────

function StatPill({ value, label }) {
    return (
        <div
            className="flex flex-col items-center justify-center px-8 py-4 rounded-2xl"
            style={{
                background: '#ffffff',
                border: '1px solid #E8EEF8',
                boxShadow: '0 2px 16px rgba(11,42,107,0.07)',
            }}
        >
            <span
                className="text-[28px] font-extrabold leading-none"
                style={{ color: '#0B2A6B' }}
            >
                {value}
            </span>
            <span className="text-slate-500 text-[12px] font-medium mt-1 text-center">
                {label}
            </span>
        </div>
    )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function GlobalPresenceSection() {
    return (
        <section className="relative bg-white py-16 md:py-14 overflow-hidden">

            {/* ── Subtle radial bg blobs ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 60% 40% at 0% 0%, rgba(235,243,255,0.7) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 35% at 100% 100%, rgba(255,243,238,0.6) 0%, transparent 55%)
                    `,
                }}
            />

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">

                {/* ── Section Header ── */}
                <div className="flex flex-col items-center mb-12 md:mb-16">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                        <span
                            className="font-semibold text-[12px] tracking-[0.18em] uppercase"
                            style={{ color: '#FE5101' }}
                        >
                            Global Presence
                        </span>
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight mb-4 px-2"
                        style={{ color: '#0B2A6B' }}
                    >
                        Two Countries.{' '}
                        <span style={{ color: '#FE5101' }}>Six Locations.</span>
                    </h2>

                    {/* Two-tone underline */}
                    <div
                        className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
                        style={{ width: '72px' }}
                    >
                        <div className="flex-1" style={{ background: '#0B2A6B' }} />
                        <div className="flex-1" style={{ background: '#FE5101' }} />
                    </div>

                    <p className="text-slate-400 text-[14px] sm:text-[15px] text-center max-w-2xl px-4 leading-relaxed">
                        With offices across India and China, we&apos;re on-the-ground at every critical
                        point of your supply chain - from factory floor to your doorstep.
                    </p>

                    {/* Stat pills */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <StatPill value="2" label="Countries" />
                        <StatPill value="6" label="Locations" />
                        <StatPill value="3" label="Branch Offices" />
                        <StatPill value="3" label="Warehouse Facilities" />
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    INDIA - 3 cards
                ══════════════════════════════════════════ */}
                <CountryHeader
                    flag="🇮🇳"
                    country="India"
                    count={INDIA_OFFICES.length}
                    accentColor="#003DA5"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {INDIA_OFFICES.map((o) => (
                        <OfficeCard key={o.id} office={o} />
                    ))}
                </div>

                {/* ══════════════════════════════════════════
                    CHINA - 2 cards
                ══════════════════════════════════════════ */}
                <CountryHeader
                    flag="🇨🇳"
                    country="China"
                    count={CHINA_OFFICES.length}
                    accentColor="#FE5101"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 lg:max-w-[67%]">
                    {CHINA_OFFICES.map((o) => (
                        <OfficeCard key={o.id} office={o} />
                    ))}
                </div>
            </div>
        </section>
    )
}