'use client'

import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Services', href: '/services' },
  { label: 'Ecosystem', href: '/eco-system' },
  { label: 'Canton Fair 2026', href: '/canton-fair' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const SERVICES = [
  { title: 'DDP Shipping (Air & Sea)', href: '/services/global-ddp-shipping' },
  { title: 'Customs Clearance', href: '/services/customs-clearance' },
  { title: 'QC & Inspection', href: '/services/qc-inspection' },
  { title: 'Warehousing & Consolidation', href: '/services/warehousing' },
  { title: 'Supplier Payments', href: '/services/supplier-payments' },
  { title: 'Last-Mile Delivery', href: '/services/last-mile-delivery' },
  { title: 'Trade Consulting', href: '/about' },
]

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/ctiddp', icon: <FaFacebookF size={14} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/chinatoindiaddp', icon: <FaLinkedinIn size={14} /> },
  { label: 'Youtube', href: 'https://www.youtube.com/@ctiddp', icon: <FaYoutube size={14} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/ctiddp', icon: <FaInstagram size={14} /> },
]

function MobileSection({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
        aria-expanded={open}
      >
        <span className="text-[13px] font-600 tracking-[1.5px] uppercase text-white">{title}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform duration-300 text-gray-400 shrink-0 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  )
}

export default function Footer() {
  const whatsappNumber = '918790013772'
  const whatsappMessage =
    "Hello, I'm reaching out from your website. Could you share details about your services and how you can help?"

  return (
    <footer className="bg-navy-900 text-white">
      {/* ── MAIN GRID ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-8 lg:pt-16 lg:pb-10">
        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-[1.3fr_0.8fr_1fr_1.4fr] gap-8 xl:gap-12">
          {/* COL 1: Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/ctiddp-logo.png"
                alt="CTIDDP Logo"
                width={140}
                height={35}
                className="h-10 w-auto object-contain bg-white p-2 rounded-lg"
              />
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6 max-w-[260px]">
              Your trusted partner for China to India DDP shipping. We handle everything from pickup to delivery at your door.
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2: Quick Links */}
          <div>
            <h3 className="text-[13px] font-600 tracking-[1.5px] uppercase text-white mb-5 pb-3 border-b border-white/[0.08]">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-400 no-underline py-1 block hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: Our Services */}
          <div>
            <h3 className="text-[13px] font-600 tracking-[1.5px] uppercase text-white mb-5 pb-3 border-b border-white/[0.08]">
              Our Services
            </h3>
            <ul className="space-y-1.5">
              {SERVICES.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-[13px] text-gray-400 no-underline py-1 block hover:text-white transition-colors duration-200"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: Contact */}
          <div>
            <h3 className="text-[13px] font-600 tracking-[1.5px] uppercase text-white mb-5 pb-3 border-b border-white/[0.08]">
              Contact Us
            </h3>

            <div className="space-y-4">
              {/* India Office */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary-light shrink-0 mt-0.5">
                  <HiOutlineMapPin size={15} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-orange" />
                    <p className="text-[13px] font-600 text-white">India Office</p>
                  </div>
                  <p className="text-[12px] text-gray-400">Visakhapatnam, AP, India</p>
                  <a href="tel:+918790013772" className="text-[12px] text-gray-400 hover:text-primary-light transition-colors block">
                    +91 87900 13772
                  </a>
                </div>
              </div>

              {/* China Office */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary-light shrink-0 mt-0.5">
                  <HiOutlineMapPin size={15} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <p className="text-[13px] font-600 text-white">China Office</p>
                  </div>
                  <p className="text-[12px] text-gray-400">Guangzhou, China</p>
                  <a href="tel:+8618818749844" className="text-[12px] text-gray-400 hover:text-primary-light transition-colors block">
                    +86 181 1814 9844
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary-light shrink-0 mt-0.5">
                  <HiOutlineEnvelope size={15} />
                </div>
                <div>
                  <a href="mailto:info@ctiddp.com" className="text-[12px] text-primary-light hover:underline block">
                    info@ctiddp.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary-light shrink-0 mt-0.5">
                  <HiOutlineClock size={15} />
                </div>
                <div>
                  <p className="text-[13px] font-600 text-white mb-1">Business Hours</p>
                  <div className="grid grid-cols-[60px_1fr] gap-x-2 gap-y-0.5">
                    <span className="text-[12px] text-gray-400">Mon–Fri</span>
                    <span className="text-[12px] text-gray-300">9:00 AM – 7:00 PM IST</span>
                    <span className="text-[12px] text-gray-400">Saturday</span>
                    <span className="text-[12px] text-gray-300">10:00 AM – 1:00 PM IST</span>
                    <span className="text-[12px] text-gray-400">Sunday</span>
                    <span className="text-[12px] text-gray-300">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 px-5 rounded-lg text-[13px] font-600 no-underline transition-all duration-200 hover:bg-green-500/90 w-full"
            >
              <FaWhatsapp size={18} />
              WHATSAPP US
            </a>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden">
          <div className="pb-6 text-center border-b border-white/[0.08] mb-4">
            <Image
              src="/images/ctiddp-logo.png"
              alt="CTIDDP Logo"
              width={140}
              height={40}
              className="block mx-auto h-auto bg-white p-2 rounded-lg"
            />
            <p className="text-[13px] text-gray-400 leading-relaxed mt-3 max-w-[300px] mx-auto">
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
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <MobileSection title="Quick Links">
            <ul className="space-y-1">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block text-gray-400 text-[13px] no-underline py-2 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileSection>

          <MobileSection title="Our Services">
            <ul className="space-y-1">
              {SERVICES.map((svc) => (
                <li key={svc.href}>
                  <Link href={svc.href} className="block text-gray-400 text-[13px] no-underline py-2 hover:text-white transition-colors">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileSection>

          <MobileSection title="Contact Us">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary-light shrink-0">
                  <HiOutlineMapPin size={14} />
                </div>
                <div>
                  <p className="text-[13px] font-600 text-white">India Office</p>
                  <p className="text-[12px] text-gray-400">Visakhapatnam, AP</p>
                  <a href="tel:+918790013772" className="text-[12px] text-gray-400 hover:text-primary-light transition-colors">+91 87900 13772</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary-light shrink-0">
                  <HiOutlineMapPin size={14} />
                </div>
                <div>
                  <p className="text-[13px] font-600 text-white">China Office</p>
                  <p className="text-[12px] text-gray-400">Guangzhou, China</p>
                  <a href="tel:+8618818749844" className="text-[12px] text-gray-400 hover:text-primary-light transition-colors">+86 181 1814 9844</a>
                </div>
              </div>
              <a href="mailto:info@ctiddp.com" className="text-[12px] text-primary-light hover:underline">info@ctiddp.com</a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-lg text-[13px] font-600 no-underline mt-2"
              >
                <FaWhatsapp size={18} />
                WHATSAPP US
              </a>
            </div>
          </MobileSection>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} CTIDDP Logistics Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-[12px] text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10 text-[12px]">|</span>
            <Link href="/terms" className="text-[12px] text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/10 text-[12px]">|</span>
            <Link href="/cookie-policy" className="text-[12px] text-gray-500 hover:text-white transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}