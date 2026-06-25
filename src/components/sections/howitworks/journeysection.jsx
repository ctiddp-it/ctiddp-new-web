import Image from 'next/image'
import {
    TbUsers,
    TbClipboardCheck,
    TbBuildingWarehouse,
    TbFileCheck,
    TbShip,
    TbFileCertificate,
    TbTruckDelivery,
    TbShip as TbShipIcon,
    TbPlane,
} from 'react-icons/tb'

// ─── Data ─────────────────────────────────────────────────────────────────────

const DDP_STEPS = [
    {
        num: '01',
        label: 'STEP 01',
        title: 'Supplier\nCoordination',
        desc: 'We connect with your supplier and verify shipment readiness.',
        Icon: TbUsers,
    },
    {
        num: '02',
        label: 'STEP 02',
        title: 'QC Inspection',
        desc: 'On-site quality checks at supplier facilities.',
        Icon: TbClipboardCheck,
    },
    {
        num: '03',
        label: 'STEP 03',
        title: 'Consolidation',
        desc: 'Collect and combine cargo at our Guangzhou warehouse.',
        Icon: TbBuildingWarehouse,
    },
    {
        num: '04',
        label: 'STEP 04',
        title: 'Export Customs',
        desc: 'Complete China export documentation and clearance.',
        Icon: TbFileCheck,
    },
    {
        num: '05',
        label: 'STEP 05',
        title: 'Sea/Air Freight',
        desc: 'Ocean or air transport with real-time updates.',
        Icon: TbShip,
    },
    {
        num: '06',
        label: 'STEP 06',
        title: 'Import Customs',
        desc: 'Import clearance with all duties pre-paid.',
        Icon: TbFileCertificate,
    },
    {
        num: '07',
        label: 'STEP 07',
        title: 'Last Mile\nDelivery',
        desc: 'Door-to-Door delivery with POD.',
        Icon: TbTruckDelivery,
    },
]

// ─── Step Card ────────────────────────────────────────────────────────────────

function StepCard({ step, index, total }) {
    const { num, label, title, desc, Icon } = step
    const isLast = index === total - 1

    return (
        /* Wrapper holds the card + the arrow connector side by side */
        <div className="flex items-start" style={{ flex: '1 1 0', minWidth: 0 }}>

            {/* Card */}
            <div
                className="flex flex-col items-center text-center w-full rounded-2xl px-3 py-5 relative"
                style={{
                    background: '#ffffff',
                    border: '1px solid #E8EEF8',
                    boxShadow: '0 2px 20px rgba(11,42,107,0.07)',
                }}
            >
                {/* Orange number badge - sits above the card top edge */}
                <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-extrabold text-[12px] z-10"
                    style={{ background: '#FE5101', boxShadow: '0 2px 8px rgba(254,81,1,0.35)' }}
                >
                    {num}
                </div>

                {/* Icon circle */}
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mt-4 mb-4"
                    style={{ background: '#EBF3FF' }}
                >
                    <Icon size={30} color="#003DA5" strokeWidth={1.5} />
                </div>

                {/* Step label */}
                <p
                    className="text-[10.5px] font-bold tracking-widest uppercase mb-1"
                    style={{ color: '#FE5101' }}
                >
                    {label}
                </p>

                {/* Title */}
                <h3
                    className="font-extrabold text-[14px] leading-snug mb-2 whitespace-pre-line"
                    style={{ color: '#0B2A6B' }}
                >
                    {title}
                </h3>

                {/* Desc */}
                <p className="text-slate-500 text-[12px] leading-relaxed">
                    {desc}
                </p>
            </div>

            {/* Dashed arrow connector - between cards, hidden after last */}
            {!isLast && (
                <div className="flex items-center justify-center shrink-0 px-1" style={{ marginTop: '72px' }}>
                    {/* Dashed line + arrowhead */}
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line
                            x1="0" y1="8" x2="20" y2="8"
                            stroke="#CBD5E1"
                            strokeWidth="1.5"
                            strokeDasharray="4 3"
                        />
                        <path
                            d="M18 4L24 8L18 12"
                            stroke="#FE5101"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>
                </div>
            )}
        </div>
    )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function HowItWorksSection() {
    return (
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">

                {/* ── Section Header ── */}
                <div className="flex flex-col items-center mb-14">

                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                        <span
                            className="font-semibold text-[12px] tracking-[0.18em] uppercase"
                            style={{ color: '#FE5101' }}
                        >
                            The DDP Journey
                        </span>
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                    </div>

                    {/* Headline */}
                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-center leading-tight mb-4"
                    >
                        <span style={{ color: '#0B2A6B' }}>How It </span>
                        <span style={{ color: '#FE5101' }}>Works</span>
                    </h2>

                    {/* Two-tone underline */}
                    <div
                        className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
                        style={{ width: '72px' }}
                    >
                        <div className="flex-1" style={{ background: '#0B2A6B' }} />
                        <div className="flex-1" style={{ background: '#FE5101' }} />
                    </div>

                    <p className="text-slate-500 text-[15px] text-center max-w-xl leading-relaxed">
                        Your shipment goes through 7 managed stages - each handled by our team
                        with full visibility and control.
                    </p>
                </div>

                {/* ── Step Timeline - desktop horizontal, mobile vertical ── */}

                {/* DESKTOP: single row with connector arrows */}
                <div className="hidden lg:flex items-start gap-0 mb-14 pt-6">
                    {DDP_STEPS.map((step, i) => (
                        <StepCard
                            key={step.num}
                            step={step}
                            index={i}
                            total={DDP_STEPS.length}
                        />
                    ))}
                </div>

                {/* MOBILE / TABLET: 2-col grid, no arrows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden mb-10 pt-6">
                    {DDP_STEPS.map((step) => (
                        <div
                            key={step.num}
                            className="flex flex-col items-center text-center rounded-2xl px-5 py-6 relative"
                            style={{
                                background: '#ffffff',
                                border: '1px solid #E8EEF8',
                                boxShadow: '0 2px 20px rgba(11,42,107,0.07)',
                            }}
                        >
                            {/* Orange badge */}
                            <div
                                className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-extrabold text-[12px]"
                                style={{ background: '#FE5101', boxShadow: '0 2px 8px rgba(254,81,1,0.35)' }}
                            >
                                {step.num}
                            </div>
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mt-4 mb-3"
                                style={{ background: '#EBF3FF' }}
                            >
                                <step.Icon size={28} color="#003DA5" strokeWidth={1.5} />
                            </div>
                            <p className="text-[10.5px] font-bold tracking-widest uppercase mb-1" style={{ color: '#FE5101' }}>
                                {step.label}
                            </p>
                            <h3 className="font-extrabold text-[15px] leading-snug mb-2 whitespace-pre-line" style={{ color: '#0B2A6B' }}>
                                {step.title}
                            </h3>
                            <p className="text-slate-500 text-[13px] leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ══════════════════════════════════════════
                    TRANSIT TIME BANNER
                    Left: text + two transit cards
                    Right: placeholder image (ship + plane + truck)
                ══════════════════════════════════════════ */}
                <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #EBF3FF 0%, #F0F6FF 100%)',
                        border: '1px solid #DCE9FF',
                        minHeight: '245px',
                    }}
                >
                    {/* Left content */}
                    <div className="relative z-20 flex flex-col justify-center gap-6 px-8 py-8 md:px-10 md:max-w-[48%]">

                        {/* Title */}
                        <div>
                            <h3
                                className="text-[20px] md:text-[22px] font-extrabold mb-2"
                                style={{ color: '#0B2A6B' }}
                            >
                                Estimated Transit Times
                            </h3>
                            {/* Orange accent line */}
                            <div
                                className="h-[3px] w-10 rounded-full"
                                style={{ background: '#FE5101' }}
                            />
                        </div>

                        {/* Two transit cards */}
                        <div className="flex flex-wrap gap-4">

                            {/* Ocean Freight */}
                            <div
                                className="flex items-center gap-3 rounded-2xl px-5 py-4"
                                style={{
                                    background: '#ffffff',
                                    border: '1px solid #E8EEF8',
                                    boxShadow: '0 2px 16px rgba(11,42,107,0.08)',
                                }}
                            >
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ background: '#EBF3FF' }}
                                >
                                    <TbShipIcon size={22} color="#003DA5" strokeWidth={1.6} />
                                </div>
                                <div>
                                    <p
                                        className="text-[13px] font-bold mb-0.5"
                                        style={{ color: '#0B2A6B' }}
                                    >
                                        Ocean Freight
                                    </p>
                                    <p
                                        className="text-[18px] font-extrabold leading-none"
                                        style={{ color: '#FE5101' }}
                                    >
                                        38–60 days
                                    </p>
                                </div>
                            </div>

                            {/* Air Freight */}
                            <div
                                className="flex items-center gap-3 rounded-2xl px-5 py-4"
                                style={{
                                    background: '#ffffff',
                                    border: '1px solid #E8EEF8',
                                    boxShadow: '0 2px 16px rgba(11,42,107,0.08)',
                                }}
                            >
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ background: '#EBF3FF' }}
                                >
                                    <TbPlane size={22} color="#003DA5" strokeWidth={1.6} />
                                </div>
                                <div>
                                    <p
                                        className="text-[13px] font-bold mb-0.5"
                                        style={{ color: '#0B2A6B' }}
                                    >
                                        Air Freight
                                    </p>
                                    <p
                                        className="text-[18px] font-extrabold leading-none"
                                        style={{ color: '#FE5101' }}
                                    >
                                        10–15 days
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: hero image - ship + plane + truck composite
                        Place your image at: /images/how-it-works/transit-visual.png
                    */}
                    {/* Right illustration */}
                <div
                className="
                    absolute
                    right-0
                    bottom-0
                    top-0
                    hidden
                    md:flex
                    items-end
                    justify-end
                    pointer-events-none
                "
                style={{
                    width: '58%',
                }}
                >
                <Image
                    src="/images/howitworks/journey-s.png"
                    alt="Transit illustration"
                    width={980}
                    height={300}
                    className="
                    w-full
                    h-auto
                    object-contain
                    object-right-bottom
                    translate-y-[30px]
                    "
                    priority={false}
                />
                </div>
                </div>

            </div>
        </section>
    )
}