'use client'

import { FaWhatsapp } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa6";

import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
} from "react-icons/hi2";
import Link from 'next/link'
import { useState } from 'react'

const SERVICES = [
  { title: 'DDP Shipping (Air & Sea)', desc: 'Door-to-door with duties paid', href: '/services' },
  { title: 'Customs Clearance', desc: 'Expert documentation & compliance', href: '/services/customs-clearance' },
  { title: 'QC & Sourcing', desc: 'Supplier verification & quality check', href: '/services/qc-sourcing' },
  { title: 'Consolidation', desc: 'Multi-vendor LCL groupage from Guangzhou', href: '/services/consolidation' },
  { title: 'Last-Mile PAN-India', desc: 'Doorstep delivery with POD, all states', href: '/services/last-mile' },
  { title: 'Trade Consulting', desc: 'Import strategy & optimisation', href: '/about/sop' },
]

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Canton Fair 2026', href: '/canton-fair' },
  { label: 'Get Quote', href: '/quote' },
]

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/chinatoindiaddp', icon: <FaFacebookF /> },
  { label: 'Youtube', href: 'https://www.youtube.com/@chinatoindiaddp', icon: <FaYoutube  /> },
  { label: 'Instagram', href: 'https://www.instagram.com/chinatoindiaddp', icon: <FaInstagram /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/chinatoindiaddp', icon: <FaLinkedinIn /> },
];

/* Accordion for mobile - improved touch target and visual feedback */
function MobileSection({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[rgba(37,99,235,0.1)]">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left active:opacity-70 transition-opacity"
        aria-expanded={open}
      >
        <span className="text-sm font-bold tracking-[2px] uppercase text-blue-light">{title}</span>
        <svg
          width="14" height="14" viewBox="0 0 10 10" fill="none"
          className={`transition-transform duration-300 text-blue-light shrink-0 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] pb-5' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  )
}

/* Contact icon wrapper with improved sizing */
function IconBorderWrapper({ children }) {
  return (
    <div className="w-9 h-9 rounded-full border border-[rgba(37,99,235,0.35)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center text-blue-light shrink-0 mt-0.5 transition-all duration-300 group-hover:border-gold group-hover:bg-[rgba(37,99,235,0.15)]">
      {children}
    </div>
  )
}

export default function Footer() {
  const whatsappNumber = "918790013772" // Removed space from phone number
  const whatsappMessage = "Hello, I’m reaching out from your website. Could you share details about your services and how you can help?"

  return (
    <footer className="bg-[var(--overlay-footer)] border-t border-[rgba(37,99,235,0.12)]">

      {/* ── MAIN GRID ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-8 lg:pt-16 lg:pb-10">

        {/* DESKTOP: 4-column grid with better spacing */}
        <div className="hidden lg:grid grid-cols-[1.4fr_0.6fr_1.6fr_1.8fr] gap-8 xl:gap-12">

          {/* ── COL 1: Brand ── */}
          <div>
            {/* Logo mark - ship icon placeholder with brand text */}
            <div className="mb-5">
              <div className="w-[72px] h-[72px] rounded-full bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.25)] flex items-center justify-center mb-4">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-label="CTIDDP Logo">
                  <rect x="8" y="20" width="22" height="10" rx="2" fill="rgba(37,99,235,0.9)" />
                  <polygon points="12,20 26,20 22,12 16,12" fill="rgba(37,99,235,0.7)" />
                  <rect x="17" y="8" width="2" height="6" fill="rgba(255,255,255,0.6)" />
                  <path d="M4 33 Q10 30 16 33 Q22 36 28 33 Q34 30 38 33" stroke="rgba(59,130,246,0.8)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-heading text-2xl font-bold tracking-[2px]">
                <span className="text-blue-light">
                  CTI<span className="text-[#FFFF]">DDP</span>
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-[240px] mb-6">
              Professional China to India Door-to-Door (DDP) shipping solutions. We handle everything from factory pickup to your doorstep with complete customs clearance.
            </p>

            {/* Social */}
            <div>
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-blue-light mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {SOCIAL.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[rgba(37,99,235,0.3)] bg-[rgba(37,99,235,0.05)] flex items-center justify-center text-gray-300 hover:text-blue-light hover:border-blue-light/50 hover:bg-[rgba(37,99,235,0.12)] transition-all duration-200"
                  >
                    <span className="text-base">
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-[#FFFF] mb-5 pb-3 border-b border-[rgba(37,99,235,0.2)]">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-300 text-sm no-underline py-1.5 hover:text-blue-light transition-colors duration-200 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-200 text-blue-light text-sm">›</span>
                    <span className="ml-0 group-hover:ml-1 transition-all duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Our Services ── */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-[#FFFF] mb-5 pb-3 border-b border-[rgba(37,99,235,0.2)]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map(svc => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="block no-underline group"
                  >
                    <span className="text-sm font-medium text-gray-200 group-hover:text-blue-light transition-colors duration-200 block leading-tight">
                      {svc.title}
                    </span>
                    <span className="text-xs text-gray-400 leading-snug">
                      {svc.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Contact Us ── */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-[#FFFF] mb-5 pb-3 border-b border-[rgba(37,99,235,0.2)]">
              Contact Us
            </h4>

            {/* Contact grid with better spacing */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-5">
              {/* China Office */}
              <div className="flex gap-3 items-start group">
                <IconBorderWrapper>
                  <HiOutlineMapPin size={16} />
                </IconBorderWrapper>
                <div>
                  <p className="text-sm font-semibold text-[#FFFF] leading-tight">China Office</p>
                  <p className="text-xs text-gray-400 mt-0.5">Guangzhou & Foshan</p>
                </div>
              </div>

              {/* India Office */}
              <div className="flex gap-3 items-start group">
                <IconBorderWrapper>
                  <HiOutlineMapPin size={16} />
                </IconBorderWrapper>
                <div>
                  <p className="text-sm font-semibold text-[#FFFF] leading-tight">India Office</p>
                  <p className="text-xs text-gray-400 mt-0.5">Visakhapatnam, AP</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-3 items-start group">
                <IconBorderWrapper>
                  <HiOutlinePhone size={16} />
                </IconBorderWrapper>
                <div>
                  <p className="text-sm font-semibold text-[#FFFF] leading-tight">Call Us</p>
                  <p className="text-xs text-gray-400 mt-0.5">+86 188 1874 9844</p>
                  <p className="text-xs text-gray-400">+91 87900 13772</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-3 items-start group">
                <IconBorderWrapper>
                  <HiOutlineEnvelope size={16} />
                </IconBorderWrapper>
                <div>
                  <p className="text-sm font-semibold text-[#FFFF] leading-tight">Email Us</p>
                  <a href="mailto:info@ctiddp.com" className="text-xs text-blue-light hover:underline mt-0.5 block break-all">info@ctiddp.com</a>
                </div>
              </div>

              {/* Business Hours - full width */}
              <div className="col-span-2 flex gap-3 items-start pt-1 group">
                <IconBorderWrapper>
                  <HiOutlineClock size={16} />
                </IconBorderWrapper>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#FFFF] leading-tight mb-1.5">Business Hours</p>
                  <div className="grid grid-cols-[60px_1fr] gap-x-3 gap-y-1">
                    <span className="text-xs text-gray-400">Mon – Fri:</span>
                    <span className="text-xs text-gray-300">9:00 am – 6:00 pm</span>
                    <span className="text-xs text-gray-400">Sat:</span>
                    <span className="text-xs text-gray-300">9:00 am – 1:30 pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - improved styling */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2.5 bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.35)] text-[#4ade80] py-2.5 px-4 rounded-lg text-sm font-medium no-underline transition-all duration-200 hover:bg-[rgba(37,211,102,0.15)] hover:border-[rgba(37,211,102,0.6)] w-full"
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* ── MOBILE LAYOUT (Improved) ── */}
        <div className="lg:hidden">
          {/* Brand block - centered with better spacing */}
          <div className="pb-6 text-center border-b border-[rgba(37,99,235,0.15)] mb-4">
            <div className="w-16 h-16 rounded-full bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.25)] flex items-center justify-center mx-auto mb-3">
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none" aria-label="CTIDDP Logo">
                <rect x="8" y="20" width="22" height="10" rx="2" fill="rgba(37,99,235,0.9)" />
                <polygon points="12,20 26,20 22,12 16,12" fill="rgba(37,99,235,0.7)" />
                <rect x="17" y="8" width="2" height="6" fill="rgba(255,255,255,0.6)" />
                <path d="M4 33 Q10 30 16 33 Q22 36 28 33 Q34 30 38 33" stroke="rgba(59,130,246,0.8)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-heading text-xl font-bold tracking-[2px]">
              <span className="text-blue-light">
                CTI<span className="text-white">DDP</span>
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mt-3 max-w-[300px] mx-auto">
              Professional China to India Door-to-Door (DDP) shipping solutions. Complete customs clearance and transparency.
            </p>
            {/* Social mobile */}
            <div className="mt-5">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-blue-light mb-3">Follow Us</p>
              <div className="flex items-center justify-center gap-3">
                {SOCIAL.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[rgba(37,99,235,0.3)] bg-[rgba(37,99,235,0.05)] flex items-center justify-center text-gray-300 hover:text-blue-light transition-all duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion sections - improved touch targets */}
          <MobileSection title="Quick Links">
            <ul className="space-y-1 pb-1">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="block text-gray-300 text-sm no-underline py-2 hover:text-blue-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileSection>

          <MobileSection title="Our Services">
            <ul className="space-y-3 pb-1">
              {SERVICES.map(svc => (
                <li key={svc.href}>
                  <Link href={svc.href} className="block py-1.5 no-underline">
                    <span className="text-sm font-medium text-gray-200 hover:text-blue-light transition-colors duration-200 block">{svc.title}</span>
                    <span className="text-xs text-gray-400">{svc.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </MobileSection>

          <MobileSection title="Contact Us">
            <div className="flex flex-col gap-4 pt-1 pb-1">
              {/* China Office */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-[rgba(37,99,235,0.3)] flex items-center justify-center text-blue-light shrink-0">
                  <HiOutlineMapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">China Office</p>
                  <p className="text-xs text-gray-400">Guangzhou & Foshan, Guangdong</p>
                </div>
              </div>

              {/* India Office */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-[rgba(37,99,235,0.3)] flex items-center justify-center text-blue-light shrink-0">
                  <HiOutlineMapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">India Office</p>
                  <p className="text-xs text-gray-400">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-[rgba(37,99,235,0.3)] flex items-center justify-center text-blue-light shrink-0">
                  <HiOutlinePhone size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Call Us</p>
                  <p className="text-xs text-gray-400">+86 188 1874 9844</p>
                  <p className="text-xs text-gray-400">+91 87900 13772</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-[rgba(37,99,235,0.3)] flex items-center justify-center text-blue-light shrink-0">
                  <HiOutlineEnvelope size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email Us</p>
                  <a href="mailto:info@ctiddp.com" className="text-xs text-blue-light hover:underline break-all">info@ctiddp.com</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-[rgba(37,99,235,0.3)] flex items-center justify-center text-blue-light shrink-0">
                  <HiOutlineClock size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-1.5">Business Hours</p>
                  <div className="grid grid-cols-[70px_1fr] gap-x-3 gap-y-1">
                    <span className="text-xs text-gray-400">Mon – Fri:</span>
                    <span className="text-xs text-gray-300">9:00 am – 6:00 pm</span>
                    <span className="text-xs text-gray-400">Sat:</span>
                    <span className="text-xs text-gray-300">9:00 am – 1:30 pm</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.35)] text-[#4ade80] py-3 px-4 rounded-lg text-sm font-medium no-underline mt-2">
                <FaWhatsapp size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </MobileSection>
        </div>
      </div>

      {/* ── BOTTOM BAR (Improved spacing & responsiveness) ── */}
      <div className="border-t border-[rgba(37,99,235,0.12)] bg-[rgba(0,0,0,0.2)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} CTIDDP. All rights reserved. China to India DDP Specialists.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-blue-light transition-colors duration-200">Privacy Policy</Link>
            <span className="text-[rgba(37,99,235,0.3)] text-xs">|</span>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-blue-light transition-colors duration-200">Terms of Service</Link>
            <span className="text-[rgba(37,99,235,0.2)] text-xs hidden md:inline">·</span>
            <p className="text-xs text-gray-500 hidden md:block">
              Offices: Guangzhou 🇨🇳 · Foshan 🇨🇳 · Visakhapatnam 🇮🇳 · Bangalore 🇮🇳 · Chennai 🇮🇳
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}