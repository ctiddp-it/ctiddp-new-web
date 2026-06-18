"use client";

import {
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaBell,
    FaCheck,
    FaGlobe,
    FaBolt,
    FaUsers,
    FaShieldAlt,
    FaBox,
    FaMapMarkerAlt,
    FaShip,
    FaExclamationTriangle
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

/* ─── Data ─────────────────────────────────────────────── */

const STATS = [
    { icon: <FaBox />, num: "500+", label: "DDP Shipments", sub: "Delivered Successfully", accent: false },
    { icon: <FaBell />, num: "10+", label: "Years of Experience", sub: "in Global Logistics", accent: true },
    { icon: <FaGlobe />, num: "5", label: "Global Locations", sub: "in 2 Countries", accent: false },
    { icon: <FaShieldAlt />, num: "98%", label: "On-Time Deliveries", sub: "Track Record", accent: true },
];

const SLAS = [
    { label: 'WhatsApp (Business Hours)', val: 'Under 2 hours', color: '#22c55e' },
    { label: 'Quote Response', val: '2 hours', color: '#3B82F6' },
    { label: 'Email', val: '4–6 hours', color: '#3B82F6' },
    { label: 'Shipment Escalation', val: '6-8 hours SLA', color: '#ef4444' },
]


const CONTACT_CHANNELS = [
    {
        icon: <FaEnvelope />,
        title: 'Email',
        lines: [
            { type: 'email', label: 'info@ctiddp.com', href: 'mailto:info@ctiddp.com' },
        ],
    },
    {
        icon: <FaPhoneAlt />,
        title: 'India Office',
        lines: [
            { type: 'phone', label: '+91 87900 13772 (Main)', href: 'tel:+918790013772' },
            { type: 'text', label: 'Vizag HQ · Chennai Ops' },
            { type: 'text', label: 'Mon–Fri · 9am–6pm IST' },
            { type: 'text', label: 'Saturday · 9am–1:30pm IST' },
        ],
    },
    {
        icon: <FaPhoneAlt />,
        title: 'China Office',
        lines: [
            { type: 'phone', label: '+86 188 1874 9844', href: 'tel:+8618818749844' },
            { type: 'text', label: 'Guangzhou Warehouse' },
            { type: 'text', label: 'Mon–Sat · 9am–6pm CST' },
        ],
    },
]

export default function ContactLogisticsExperts() {
    return (
        <section className="px-4 sm:px-6 py-16 sm:py-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* ══ SECTION HEADING ══ */}
                <div className="text-center">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="block w-5 h-px bg-[#FE5101]" />
                        <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#FE5101]">
                            GET IN TOUCH
                        </span>
                        <span className="block w-5 h-px bg-[#FE5101]" />
                    </div>
                    <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold text-[#0B2A6B] leading-tight tracking-tight">
                        Contact Our{" "}
                        <span className="text-[#FE5101]">Logistics Experts</span>
                    </h2>
                    <p className="mt-3 text-[0.95rem] text-slate-500">
                        Real people. Real support. Real results.
                    </p>
                </div>

                {/* ══ WhatsApp hero card + 2 contact cards ══ */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">

                    {/* ── WhatsApp hero card (spans 2 cols) ── */}
                    <div className="lg:row-span-2 bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)] transition-all duration-200"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(37,211,102,0.06) 0%, rgba(37,211,102,0.02) 50%, rgba(255,255,255,1) 100%)",
                            borderColor: "rgba(37,211,102,0.18)",
                            boxShadow: "0 12px 40px rgba(37,211,102,0.08)",
                        }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

                            {/* Left: copy */}
                            <div className="flex flex-col gap-4"
                            >
                                <div>
                                    <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#00ac3f] mb-1">
                                        FASTEST RESPONSE
                                    </p>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                                            <FaWhatsapp className="text-white text-2xl" />
                                        </div>
                                        <h3 className="text-[1.5rem] font-extrabold leading-tight">
                                            Chat on <span className="text-[#25D366]">WhatsApp</span>
                                        </h3>
                                    </div>
                                    <p className="text-[0.875rem] text-slate-500 leading-relaxed">
                                        Get quotes, shipment updates, customs support and supplier assistance — instantly.
                                    </p>
                                </div>

                                {/* Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { icon: <FaGlobe />, label: "English • Telugu • Hindi" },
                                    ].map((p) => (
                                        <span
                                            key={p.label}
                                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#003DA5] bg-[#e8eef8] px-3 py-1 rounded-full"
                                        >
                                            <span className="text-[10px]">{p.icon}</span>
                                            {p.label}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA row */}
                                <div className="flex flex-wrap items-center gap-4 mt-1">
                                    <a
                                        href="https://wa.me/918790013772"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#00ac3f] text-white text-[0.85rem] font-bold px-5 py-3 rounded-xl transition-all duration-200"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                        Chat on WhatsApp
                                        <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                                    </a>
                                    <div className="flex items-center gap-2">
                                        <FaBolt className="text-[#FE5101] text-sm" />
                                        <div>
                                            <p className="text-[10px] text-slate-400 leading-none">Avg. Response Time</p>
                                            <p className="text-[13px] font-bold text-[#0B2A6B]">Under 2 Hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: WhatsApp image */}
                            <div className="relative h-56 sm:h-72 flex items-center justify-center">
                                <Image
                                    src="/images/contact/whatsap.png"
                                    alt="WhatsApp Support"
                                    width={400}
                                    height={400}
                                    className="w-auto h-full object-contain rounded-4xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    {/* ── Row 1a: India + China team cards stacked ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        {/* India Team */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-2 hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)] transition-all duration-200">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-10 h-10 rounded-full bg-[#e8eef8] flex items-center justify-center">
                                    <FaPhoneAlt className="text-[#003DA5] text-base" />
                                </div>
                                <h4 className="text-[1rem] font-bold text-[#0B2A6B]">India Support</h4>
                            </div>
                            <a className="text-[0.85rem] font-semibold text-[#003DA5] no-underline hover:underline">
                                +91 87900 13772
                            </a>
                            <p className="text-[0.78rem] text-[#0B2A6B] leading-relaxed">Mon – Sat: 9AM – 7PM IST</p>

                            <div className="flex items-center gap-1.5 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-[0.78rem] font-medium text-green-600">Active Now</span>
                            </div>
                        </div>

                        {/* Urgent Support */}
                        <div className="bg-white border border-red-200 rounded-2xl p-5 flex flex-col gap-2 hover:shadow-[0_8px_32px_rgba(239,68,68,0.10)] transition-all duration-200">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                    <FaPhoneAlt className="text-red-500 text-base" />
                                </div>
                                <h4 className="text-[1rem] font-bold text-[#FE5101]">China Support</h4>
                            </div>
                            <p className="text-[0.78rem] text-[#FE5101] leading-relaxed">
                                +86 181 1814 9844
                            </p>
                            <p className="text-[0.78rem] text-[#0B2A6B] leading-relaxed">Mon – Sat: 9AM – 7PM IST</p>
                            <div className="flex items-center gap-1.5 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-[0.78rem] font-medium text-green-600">Active Now</span>
                            </div>
                        </div>
                    </div>

                    {/* ══ ROW 1b: Email + Urgent (beneath right col on lg, separate row on mobile) ══ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        {/* Email */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-2 hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)] transition-all duration-200">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-10 h-10 rounded-full bg-[#e8eef8] flex items-center justify-center">
                                    <FaEnvelope className="text-[#003DA5] text-base" />
                                </div>
                                <h4 className="text-[1rem] font-bold text-[#0B2A6B]">Email Support</h4>
                            </div>
                            <a href="mailto:info@ctiddp.com" className="text-[0.85rem] font-semibold text-[#003DA5] no-underline hover:underline">
                                info@ctiddp.com
                            </a>
                            <p className="text-[0.78rem] text-slate-500 leading-relaxed">
                                We typically reply in 4–6 business hours.
                            </p>
                        </div>

                        {/* Urgent Support */}
                        <div className="bg-white border border-red-200 rounded-2xl p-5 flex flex-col gap-2 hover:shadow-[0_8px_32px_rgba(239,68,68,0.10)] transition-all duration-200">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                    <FaBell className="text-red-500 text-base" />
                                </div>
                                <h4 className="text-[1rem] font-bold text-[#FE5101]">Urgent Support</h4>
                            </div>
                            <p className="text-[0.85rem] font-bold text-[#FE5101]">Escalation Desk (24/7)</p>
                            <p className="text-[0.78rem] text-slate-500 leading-relaxed">
                                For urgent cargo issues, delays or customs matters.
                            </p>
                            <a
                                href="tel:+918790013772"
                                className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-red-500 no-underline hover:text-red-600 mt-1"
                            >
                                <FaPhoneAlt className="text-xs" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>


                {/* ══ ROW 2: Map card + Why Choose ══ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    {/* ── Two Countries card ── */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-7 relative overflow-hidden hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)] transition-all duration-200">
                        <h3 className="text-[1rem] font-bold text-[#0B2A6B] mb-1">
                            Response Time Commitments
                        </h3>

                        <p className="text-[0.82rem] text-slate-500 mb-6 max-w-sm">
                            Defined service response windows so every request has clear expectations.
                        </p>

                        <div className="space-y-3">
                            {SLAS.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-all duration-200 px-4 py-4 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span
                                            className="w-2.5 h-2.5 rounded-full shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        />

                                        <p className="text-[0.86rem] text-slate-700 font-medium leading-tight">
                                            {item.label}
                                        </p>
                                    </div>

                                    <div
                                        className="px-3 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap"
                                        style={{
                                            backgroundColor: `${item.color}15`,
                                            color: item.color,
                                        }}
                                    >
                                        {item.val}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative accent */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#003DA5]/5 blur-2xl" />
                    </div>

                    {/* ── Why Businesses Choose CTIDDP ── */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-7 relative overflow-hidden hover:shadow-[0_8px_32px_rgba(0,61,165,0.10)] transition-all duration-200">
                        <h3 className="text-[1rem] font-bold text-[#0B2A6B] mb-1">
                            Emergency Escalation
                        </h3>

                        <p className="text-[0.82rem] text-slate-500 mb-6 max-w-sm">
                            Dedicated escalation support for active shipments facing critical issues.
                        </p>

                        <div className="space-y-4">
                            {/* Availability */}
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                        <FaExclamationTriangle className="text-red-500 text-sm" />
                                    </div>

                                    <div>
                                        <p className="text-[0.86rem] font-bold text-[#0B2A6B]">
                                            Availability
                                        </p>
                                        <p className="text-[0.8rem] text-slate-600">
                                            24/7 for active shipments only
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[0.78rem] text-slate-500 leading-relaxed">
                                    Cargo held • Damage discovered • Critical shipment delays
                                </p>
                            </div>

                            {/* Hotline */}
                            <div className="rounded-xl bg-[#003DA5] p-5 text-white">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaPhoneAlt className="text-lg" />

                                    <div>
                                        <p className="text-[0.72rem] uppercase tracking-wider opacity-80">
                                            Escalation Hotline
                                        </p>

                                        <a
                                            href="tel:+918790013772"
                                            className="text-[1.05rem] font-bold hover:opacity-90"
                                        >
                                            +91 87900 13772
                                        </a>
                                    </div>
                                </div>

                                <p className="text-[0.75rem] text-white/80">
                                    Calls are scheduled during working hours.
                                </p>
                            </div>

                            {/* Working Hours */}
                            <div className="rounded-xl border border-slate-200 p-4">
                                <p className="text-[0.84rem] font-bold text-[#0B2A6B] mb-3">
                                    Working Hours (IST)
                                </p>

                                <div className="space-y-2 text-[0.8rem]">
                                    <div className="flex justify-between text-slate-700">
                                        <span>Monday – Friday</span>
                                        <span className="font-semibold">9:00 AM – 6:00 PM</span>
                                    </div>

                                    <div className="flex justify-between text-slate-700">
                                        <span>Saturday</span>
                                        <span className="font-semibold">9:00 AM – 1:30 PM</span>
                                    </div>

                                    <div className="flex justify-between text-slate-400">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative accent */}
                        <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-[#FE5101]/5 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}