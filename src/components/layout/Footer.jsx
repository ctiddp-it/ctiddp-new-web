'use client'

import { FaWhatsapp } from "react-icons/fa6";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
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
  { label: 'Facebook', href: '#', icon: <FaFacebookF /> },
  { label: 'X / Twitter', href: '#', icon: <FaXTwitter /> },
  { label: 'Instagram', href: '#', icon: <FaInstagram /> },
  { label: 'LinkedIn', href: '#', icon: <FaLinkedinIn /> },
];

/* Accordion for mobile */
function MobileSection({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[rgba(37,99,235,0.1)]">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
      >
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold">{title}</span>
        <svg
          width="12" height="12" viewBox="0 0 10 10" fill="none"
          className={`transition-transform duration-200 text-gold shrink-0 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  )
}

/* Contact icon wrapper */
function IconBorderWrapper({ children }) {
  return (
     <div className="w-8 h-8 rounded-full border border-[rgba(37,99,235,0.35)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center text-gold-light shrink-0 mt-0.5 transition-all duration-300 group-hover:border-gold group-hover:bg-[rgba(37,99,235,0.15)]">
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[var(--overlay-footer)] border-t border-[rgba(37,99,235,0.12)]">

      {/* ── MAIN GRID ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-16 pt-16 pb-10">

        {/* DESKTOP: 4-column grid */}
        <div className="hidden lg:grid grid-cols-[1.8fr_1fr_1.4fr_1.6fr] gap-12 xl:gap-16">

          {/* ── COL 1: Brand ── */}
          <div>
            {/* Logo mark — ship icon placeholder with brand text */}
            <div className="mb-5">
              <div className="w-[72px] h-[72px] rounded-full bg-[rgba(37,99,235,0.06)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center mb-4">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  {/* Ship silhouette */}
                  <rect x="8" y="20" width="22" height="10" rx="2" fill="rgba(37,99,235,0.9)" />
                  <polygon points="12,20 26,20 22,12 16,12" fill="rgba(37,99,235,0.6)" />
                  <rect x="17" y="8" width="2" height="6" fill="rgba(255,255,255,0.5)" />
                  {/* Waves */}
                  <path d="M4 33 Q10 30 16 33 Q22 36 28 33 Q34 30 38 33" stroke="rgba(59,130,246,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-[var(--font-cormorant),'Cormorant_Garamond',serif] text-[22px] font-bold tracking-[2px]">
                <span className="text-gold-light">
                  CTI<span className="text-white">DDP</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-muted leading-[1.8] max-w-[230px] mb-6">
              Professional China to India Door-to-Door (DDP) shipping solutions. We handle everything from factory pickup to your doorstep with complete customs clearance and transparency.
            </p>

            {/* Social */}
            <div>
              <p className="text-[9px] font-bold tracking-[2px] uppercase text-gold mb-3">Follow Us</p>
              <div className="flex items-center gap-2">
                {SOCIAL.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.04)] flex items-center justify-center text-muted hover:text-gold-light hover:border-[rgba(37,99,235,0.45)] hover:bg-[rgba(37,99,235,0.1)] transition-all duration-200 no-underline"
                  >
                    <span className="text-[14px]">
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white mb-5 pb-3 border-b border-[rgba(37,99,235,0.15)]">
              Quick Links
            </h4>
            <ul className="list-none flex flex-col gap-0">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-muted text-[13px] no-underline py-[7px] hover:text-gold-light transition-colors duration-200 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 text-gold text-xs leading-none">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Our Services ── */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white mb-5 pb-3 border-b border-[rgba(37,99,235,0.15)]">
              Our Services
            </h4>
            <ul className="list-none flex flex-col gap-0">
              {SERVICES.map(svc => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="block py-[7px] no-underline group"
                  >
                    <span className="text-[12.5px] font-medium text-white/90 group-hover:text-gold-light transition-colors duration-200 block leading-tight">
                      {svc.title}
                    </span>
                    <span className="text-[11px] text-muted leading-snug">
                      {svc.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Contact Us ── */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white mb-5 pb-3 border-b border-[rgba(37,99,235,0.15)]">
              Contact Us
            </h4>

            {/* 2-sub-column contact layout */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              {/* China Office */}
              <div className="flex gap-2.5 items-start">
                <IconBorderWrapper>
                  <HiOutlineMapPin size={14} />
                </IconBorderWrapper>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight">China Office</p>
                  <p className="text-[11px] text-muted mt-0.5">Guangzhou & Foshan</p>
                </div>
              </div>

              {/* India Office */}
              <div className="flex gap-2.5 items-start">
                <IconBorderWrapper>
                  <HiOutlineMapPin size={14} />
                </IconBorderWrapper>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight">India Office</p>
                  <p className="text-[11px] text-muted mt-0.5">Visakhapatnam,</p>
                  <p className="text-[11px] text-muted">Andhra Pradesh</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-2.5 items-start">
                <IconBorderWrapper>
                  <HiOutlinePhone size={14} />
                </IconBorderWrapper>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight">Call Us</p>
                  <p className="text-[11px] text-muted mt-0.5">+86 XXX XXXX XXXX</p>
                  <p className="text-[11px] text-muted">+91 XXX XXXX XXXX</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-2.5 items-start">
                <IconBorderWrapper>
                  <HiOutlineEnvelope size={14} />
                </IconBorderWrapper>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight">Email Us</p>
                  <a href="mailto:info@ctiddp.com" className="text-[11px] text-gold-light no-underline hover:underline mt-0.5 block">info@ctiddp.com</a>
                </div>
              </div>

              {/* Business Hours — full width */}
              <div className="col-span-2 flex gap-2.5 items-start pt-1">
                <IconBorderWrapper>
                  <HiOutlineClock size={14} />
                </IconBorderWrapper>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight mb-1">Business Hours</p>
                  <div className="grid grid-cols-[50px_1fr] gap-x-2 gap-y-0.5">
                    <span className="text-[11px] text-muted">Mon – Fri:</span>
                    <span className="text-[11px] text-white/80">9:00 am – 6:00 pm</span>
                    <span className="text-[11px] text-muted">Sat:</span>
                    <span className="text-[11px] text-white/80">9:00 am – 1:30 pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-[rgba(74,222,128,1)] py-2.5 px-4 rounded-sm text-[11px] font-medium no-underline transition-all duration-200 hover:bg-[rgba(37,211,102,0.12)] hover:border-[rgba(37,211,102,0.5)] w-full justify-center"
            >
              <FaWhatsapp size={22} />WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden">
          {/* Brand block */}
          <div className="pb-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[rgba(37,99,235,0.06)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center mx-auto mb-3">
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
                <rect x="8" y="20" width="22" height="10" rx="2" fill="rgba(37,99,235,0.9)" />
                <polygon points="12,20 26,20 22,12 16,12" fill="rgba(37,99,235,0.6)" />
                <rect x="17" y="8" width="2" height="6" fill="rgba(255,255,255,0.5)" />
                <path d="M4 33 Q10 30 16 33 Q22 36 28 33 Q34 30 38 33" stroke="rgba(59,130,246,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-[var(--font-cormorant),'Cormorant_Garamond',serif] text-[20px] font-bold tracking-[2px]">
              <span className="text-gold-light">
                CTI<span className="text-white">DDP</span>
              </span>
            </div>
            <p className="text-xs text-muted leading-[1.8] mt-3 max-w-[280px] mx-auto">
              Professional China to India Door-to-Door (DDP) shipping solutions. Complete customs clearance and transparency.
            </p>
            {/* Social mobile */}
            <div className="mt-4">
              <p className="text-[9px] font-bold tracking-[2px] uppercase text-gold mb-2.5">Follow Us</p>
              <div className="flex items-center justify-center gap-2">
                {SOCIAL.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.04)] flex items-center justify-center text-muted hover:text-gold-light transition-all duration-200 no-underline">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion sections */}
          <MobileSection title="Quick Links">
            <ul className="list-none flex flex-col gap-0">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="block text-muted text-[13px] no-underline py-2 hover:text-gold-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileSection>

          <MobileSection title="Our Services">
            <ul className="list-none flex flex-col gap-1">
              {SERVICES.map(svc => (
                <li key={svc.href}>
                  <Link href={svc.href} className="block py-2 no-underline group">
                    <span className="text-[12.5px] font-medium text-white/90 group-hover:text-gold-light transition-colors duration-200 block">{svc.title}</span>
                    <span className="text-[11px] text-muted">{svc.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </MobileSection>

          <MobileSection title="Contact Us">
            <div className="flex flex-col gap-4 pt-1">
              {[
                { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>, title: 'China Office', lines: ['Guangzhou & Foshan, Guangdong'] },
                { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>, title: 'India Office', lines: ['Visakhapatnam, Andhra Pradesh'] },
                { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01-.01 1.17 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>, title: 'Call Us', lines: ['+86 XXX XXXX XXXX', '+91 XXX XXXX XXXX'] },
              ].map(c => (
                <div key={c.title} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full border border-[rgba(37,99,235,0.25)] flex items-center justify-center text-gold shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-[12px] font-semibold text-white">{c.title}</p>
                    {c.lines.map(l => <p key={l} className="text-[11px] text-muted">{l}</p>)}
                  </div>
                </div>
              ))}
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-[rgba(74,222,128,1)] py-3 px-4 rounded-sm text-[11px] font-medium no-underline">
                <FaWhatsapp size={22} />WhatsApp Us
              </a>
            </div>
          </MobileSection>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-[rgba(37,99,235,0.08)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-muted/60 text-center sm:text-left">
            © {new Date().getFullYear()} CTIDDP. All rights reserved. China to India DDP Specialists.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-[11px] text-gold/60 no-underline hover:text-gold transition-colors duration-200">Privacy Policy</Link>
            <span className="text-[rgba(37,99,235,0.2)] text-xs">|</span>
            <Link href="/terms" className="text-[11px] text-gold/60 no-underline hover:text-gold transition-colors duration-200">Terms of Service</Link>
            <span className="text-[rgba(37,99,235,0.2)] text-xs hidden sm:inline">·</span>
            <p className="text-[11px] text-muted/50 hidden sm:block">
              Offices: Guangzhou 🇨🇳 · Foshan 🇨🇳 · Visakhapatnam 🇮🇳
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}