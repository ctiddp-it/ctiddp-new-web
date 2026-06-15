'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6'
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiChevronDown,
  HiArrowRight,
} from 'react-icons/hi2'

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: 'Home',             href: '/' },
  { label: 'About Us',         href: '/about' },
  { label: 'How It Works',     href: '/how-it-works' },
  { label: 'Services',         href: '/services' },
  { label: 'Ecosystem',        href: '/eco-system' },
  { label: 'Canton Fair 2026', href: '/canton-fair' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Contact Us',       href: '/contact' },
]

const SERVICES = [
  { title: 'DDP Shipping (Air & Sea)',    href: '/services/global-ddp-shipping' },
  { title: 'Customs Clearance',          href: '/services/customs-clearance' },
  { title: 'QC & Inspection',            href: '/services/qc-inspection' },
  { title: 'Warehousing & Consolidation',href: '/services/warehousing' },
  { title: 'Supplier Payments',          href: '/services/supplier-payments' },
  { title: 'Last-Mile Delivery',         href: '/services/last-mile-delivery' },
  { title: 'Trade Consulting',           href: '/about' },
]

const SOCIAL = [
  { label: 'Facebook',  href: 'https://www.facebook.com/ctiddp',                    icon: <FaFacebookF  size={14} /> },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/chinatoindiaddp',   icon: <FaLinkedinIn size={14} /> },
  { label: 'YouTube',   href: 'https://www.youtube.com/@ctiddp',                    icon: <FaYoutube    size={14} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/ctiddp',                   icon: <FaInstagram  size={14} /> },
]

const HOURS = [
  { day: 'Mon – Fri',  time: '9:00 AM – 7:00 PM IST' },
  { day: 'Saturday',   time: '10:00 AM – 1:00 PM IST' },
  { day: 'Sunday',     time: 'Closed' },
]

const LEGAL = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Shipping Policy',  href: '/cookie-policy' },
]

const WA_NUMBER  = '918790013772'
const WA_MESSAGE = "Hello, I'm reaching out from your website. Could you share details about your services and how you can help?"

// ─── Mobile accordion ─────────────────────────────────────────────────────────

function MobileSection({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="text-[12px] font-semibold tracking-[1.6px] uppercase text-gray-300">
          {title}
        </span>
        <HiChevronDown
          size={16}
          className={`text-gray-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[600px] pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

// ─── Shared link list ─────────────────────────────────────────────────────────

function NavList({ items, labelKey = 'label' }) {
  return (
    <ul className="space-y-[2px]">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex items-center gap-1.5 py-[7px] text-[13px] text-gray-400 hover:text-white transition-colors duration-200 no-underline"
          >
            <HiArrowRight
              size={11}
              className="opacity-0 group-hover:opacity-100 text-[#FE5101] shrink-0 transition-opacity duration-200"
            />
            {item[labelKey]}
          </Link>
        </li>
      ))}
    </ul>
  )
}

// ─── Contact icon block ───────────────────────────────────────────────────────

function ContactRow({ icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: 'rgba(254,81,1,0.12)', color: '#FE5101' }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}

// ─── Column heading ───────────────────────────────────────────────────────────

function ColHeading({ children }) {
  return (
    <h3 className="text-[12px] font-semibold tracking-[1.6px] uppercase text-gray-300 mb-5 pb-3 border-b border-white/[0.07]">
      {children}
    </h3>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer style={{ background: '#111318' }} className="text-white">

      {/* ── Top CTA strip ── */}
      <div style={{ background: '#FE5101' }} className="w-full">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-[14px] text-center sm:text-left">
            Get a complete DDP quote in under 2 hours — no hidden costs, no surprises.
          </p>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-white text-[#FE5101] font-bold text-[13px] px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors no-underline"
            >
              GET FREE QUOTE <HiArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[13px] px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity no-underline bg-white text-[#000000]"
              // style={{ background: '#1a1a1a', color: '#fff' }}
            >
              <FaWhatsapp size={25} color="#25D366" /> WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-10">

        {/* DESKTOP grid */}
        <div className="hidden lg:grid grid-cols-[1.4fr_0.85fr_1fr_1.45fr] gap-8 xl:gap-14">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/ctiddp-logo-white.svg"
                alt="CTIDDP Logo"
                width={150}
                height={65}
                priority
                className="h-20 md:h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[255px] -mt-8.5">
              Your trusted partner for China to India DDP shipping. We handle everything
              from pickup to delivery at your door.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-1">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-200 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#FE5101'; e.currentTarget.style.borderColor = '#FE5101' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <NavList items={QUICK_LINKS} />
          </div>

          {/* Col 3 — Services */}
          <div>
            <ColHeading>Our Services</ColHeading>
            <NavList items={SERVICES} labelKey="title" />
          </div>

          {/* Col 4 — Contact */}
          <div>
            <ColHeading>Contact Us</ColHeading>
            <div className="space-y-4">

              <ContactRow icon={<HiOutlineMapPin size={15} />}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FE5101] shrink-0" />
                  <p className="text-[13px] font-semibold text-white">India Office</p>
                </div>
                <p className="text-[12px] text-gray-400">Visakhapatnam, AP, India</p>
                <a href="tel:+918790013772" className="text-[12px] text-gray-400 hover:text-white transition-colors block no-underline">
                  +91 87900 13772
                </a>
              </ContactRow>

              <ContactRow icon={<HiOutlineMapPin size={15} />}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <p className="text-[13px] font-semibold text-white">China Office</p>
                </div>
                <p className="text-[12px] text-gray-400">Guangzhou, China</p>
                <a href="tel:+8618118149844" className="text-[12px] text-gray-400 hover:text-white transition-colors block no-underline">
                  +86 181 1814 9844
                </a>
              </ContactRow>

              <ContactRow icon={<HiOutlineEnvelope size={15} />}>
                <a href="mailto:info@ctiddp.com" className="text-[13px] text-gray-300 hover:text-white transition-colors no-underline">
                  info@ctiddp.com
                </a>
              </ContactRow>

              <ContactRow icon={<HiOutlineClock size={15} />}>
                <p className="text-[13px] font-semibold text-white mb-2">Business Hours (IST)</p>
                <div className="grid grid-cols-[68px_1fr] gap-x-2 gap-y-1">
                  {HOURS.map(({ day, time }) => (
                    <Fragment key={day}>
                      <span className="text-[12px] text-gray-500">{day}</span>
                      <span className="text-[12px] text-gray-300">{time}</span>
                    </Fragment>
                  ))}
                </div>
              </ContactRow>
            </div>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-[13px] font-bold text-white transition-opacity hover:opacity-90 no-underline"
              style={{ background: '#25D366' }}
            >
              <FaWhatsapp size={17} /> WHATSAPP US
            </a>
          </div>
        </div>

        {/* MOBILE layout */}
        <div className="lg:hidden">
          {/* Brand block */}
          <div className="pb-6 text-center border-b border-white/[0.07] mb-2">
            <Link href="/" className="inline-flex justify-center">
              <Image
                src="/images/ctiddp-logo-white.svg"
                alt="CTIDDP Logo"
                width={150}
                height={65}
                priority
                className="h-20 md:h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[290px] mx-auto -mt-2.5">
              Your trusted partner for China to India DDP shipping solutions.
            </p>
            <div className="flex items-center justify-center gap-2.5 mt-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <MobileSection title="Quick Links">
            <NavList items={QUICK_LINKS} />
          </MobileSection>

          <MobileSection title="Our Services">
            <NavList items={SERVICES} labelKey="title" />
          </MobileSection>

          <MobileSection title="Contact Us">
            <div className="flex flex-col gap-4">
              <ContactRow icon={<HiOutlineMapPin size={14} />}>
                <p className="text-[13px] font-semibold text-white">India Office</p>
                <p className="text-[12px] text-gray-400">Visakhapatnam, AP</p>
                <a href="tel:+918790013772" className="text-[12px] text-gray-400 hover:text-white no-underline">+91 87900 13772</a>
              </ContactRow>
              <ContactRow icon={<HiOutlineMapPin size={14} />}>
                <p className="text-[13px] font-semibold text-white">China Office</p>
                <p className="text-[12px] text-gray-400">Guangzhou, China</p>
                <a href="tel:+8618118149844" className="text-[12px] text-gray-400 hover:text-white no-underline">+86 181 1814 9844</a>
              </ContactRow>
              <ContactRow icon={<HiOutlineEnvelope size={14} />}>
                <a href="mailto:info@ctiddp.com" className="text-[13px] text-gray-300 hover:text-white no-underline">info@ctiddp.com</a>
              </ContactRow>
              <ContactRow icon={<HiOutlineClock size={14} />}>
                <p className="text-[13px] font-semibold text-white mb-1.5">Business Hours (IST)</p>
                <div className="grid grid-cols-[68px_1fr] gap-x-2 gap-y-1">
                  {HOURS.map(({ day, time }) => (
                    <Fragment key={day}>
                      <span className="text-[12px] text-gray-500">{day}</span>
                      <span className="text-[12px] text-gray-300">{time}</span>
                    </Fragment>
                  ))}
                </div>
              </ContactRow>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-[13px] font-bold text-white no-underline mt-1"
                style={{ background: '#25D366' }}
              >
                <FaWhatsapp size={17} /> WHATSAPP US
              </a>
            </div>
          </MobileSection>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} CTIDDP Logistics Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {LEGAL.map((l, i) => (
              <span key={l.href} className="flex items-center gap-3">
                <Link href={l.href} className="text-[12px] text-gray-600 hover:text-gray-300 transition-colors no-underline">
                  {l.label}
                </Link>
                {i < LEGAL.length - 1 && (
                  <span className="text-white/10 text-[11px]">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}