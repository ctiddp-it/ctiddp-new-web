'use client'

import { FaWhatsapp } from 'react-icons/fa6'
import {
  HiOutlineGlobeAlt,
  HiOutlineCreditCard,
  HiOutlineMagnifyingGlass,
  HiOutlineBuildingStorefront,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineCalendarDays,
} from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Ticker from './Ticker'
import { HiArrowRight } from 'react-icons/hi2'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        href: '/services/global-ddp-shipping',
        title: 'DDP Shipping (Air & Sea)',
        desc: 'End-to-end shipping with pre-paid customs duties.',
        icon: <HiOutlineGlobeAlt size={18} />,
      },
      {
        href: '/services/supplier-payments',
        title: 'Supplier Payments',
        desc: 'Secure and efficient payment processing for suppliers.',
        icon: <HiOutlineCreditCard size={18} />,
      },
      {
        href: '/services/qc-inspection',
        title: 'QC & Inspection',
        desc: 'Thorough quality checks to ensure product standards.',
        icon: <HiOutlineMagnifyingGlass size={18} />,
      },
      {
        href: '/services/warehousing',
        title: 'Warehousing & Consolidation',
        desc: 'Collect and combine cargo for lower freight costs.',
        icon: <HiOutlineBuildingStorefront size={18} />,
      },
      {
        href: '/services/customs-clearance',
        title: 'Customs Clearance',
        desc: 'Smooth import clearance with compliant paperwork.',
        icon: <HiOutlineShieldCheck size={18} />,
      },
      {
        href: '/services/last-mile-delivery',
        title: 'Last-Mile Delivery',
        desc: 'Door delivery in India with duties pre-paid.',
        icon: <HiOutlineTruck size={18} />,
      },
      {
        href: '/services/multi-vendor-consolidation',
        title: 'Multi-Vendor Consolidation',
        desc: 'Combine shipments from multiple vendors for cost savings.',
        icon: <HiOutlineCube size={18} />,
      },
      {
        href: '/services/canton-fair-support',
        title: 'Canton Fair Support',
        desc: 'On-ground trade fair sourcing and shipping support.',
        icon: <HiOutlineCalendarDays size={18} />,
      },
    ],
  },
  { label: 'Ecosystem', href: '/eco-system', highlight: true },
  { label: 'Trade Fair 2026', href: '/trade-fair', badge: '2026' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

/* ── Mega dropdown item ── */
function MegaItem({ child, onClick }) {
  return (
    <Link prefetch={false}
      href={child.href}
      onClick={onClick}
      className="group/item flex items-start gap-3 py-2.5 px-3 rounded-lg no-underline transition-colors duration-150 hover:bg-primary-50"
    >
      <div className="w-9 h-9 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-primary shrink-0 transition-colors group-hover/item:bg-primary-100">
        {child.icon}
      </div>
      <div>
        <span className="text-[13px] font-600 text-gray-800 block mb-0.5 group-hover/item:text-primary transition-colors">
          {child.title}
        </span>
        <span className="text-[11.5px] text-gray-500 leading-[1.4]">{child.desc}</span>
      </div>
    </Link>
  )
}

export default function MegaNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)
  const drawerRef = useRef(null)

  const whatsappNumber = '918790018787'
  const whatsappMessage =
    "Hello, I'm reaching out from your website. Could you share details about your services and how you can help?"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    setOpenSection(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) return
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) setDrawerOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [drawerOpen])

  const toggleSection = (label) => setOpenSection((prev) => (prev === label ? null : label))

  const isActiveParent = (item) =>
    pathname === item.href ||
    pathname.startsWith((item.href || '') + '/') ||
    item.children?.some((c) => pathname === c.href || pathname.startsWith(c.href + '/'))

  const isActive = (href) => pathname === href

  return (
    <>
      <Ticker />

      {/* ── NAVBAR ── */}
      <nav
        className={`sticky top-0 z-[1000] flex items-center justify-between px-4 lg:px-10 h-[72px] bg-white border-b transition-shadow duration-300 ${scrolled ? 'shadow-[var(--shadow-nav)] border-gray-200' : 'border-gray-100'
          }`}
      >
        {/* Logo */}
        <Link prefetch={false} href="/" className="flex items-center shrink-0">
          <Image
            src="/images/ctiddp-nav-logo.webp"
            alt="CTIDDP Logo"
            width={120}
            height={45}
            priority
            className="h-20 md:h-22 w-auto object-contain"
          />
        </Link>

        {/* ── DESKTOP MENU ── */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none h-[72px] absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative h-full flex items-center group">
              {!item.children ? (
                <Link prefetch={false}
                  href={item.href}
                  className={`flex items-center gap-1 h-full px-3 no-underline text-[13.5px] font-500 tracking-wide transition-all duration-200 whitespace-nowrap ${item.highlight
                      ? 'text-[#FE5101] font-bold border-b-2 border-transparent hover:border-[#FE5101]/40'
                      : isActive(item.href)
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-700 border-b-2 border-transparent hover:text-primary hover:border-primary/40'
                    }`}
                >
                  {item.label}
                  {item.highlight && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FE5101]" />
                  )}
                  {item.badge && (
                    <sup className="text-[9px] font-700 text-white bg-primary py-[2px] px-1.5 rounded-full ml-0.5 leading-none align-super">
                      {item.badge}
                    </sup>
                  )}
                </Link>
              ) : (
                <>
                  <Link prefetch={false}
                    href={item.href || '#'}
                    className={`flex items-center gap-1 h-full px-3 no-underline text-[13.5px] font-500 tracking-wide transition-colors duration-200 border-b-2 whitespace-nowrap ${isActiveParent(item)
                      ? 'text-primary border-primary'
                      : 'text-gray-700 border-transparent hover:text-primary hover:border-primary/40'
                      }`}
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="transition-transform duration-200 shrink-0 group-hover:rotate-180"
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>

                  {/* ── DROPDOWN ── */}
                  <div className="absolute top-[70px] left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl p-5 hidden group-hover:block z-[999] shadow-[var(--shadow-elevated)] min-w-[580px]">
                    <div className="text-[10px] font-700 tracking-[2px] uppercase text-primary mb-3 pb-2.5 border-b border-gray-100">
                      {item.label}
                    </div>
                    <div className="grid gap-1 grid-cols-2">
                      {item.children?.map((child) => (
                        <MegaItem key={child.href} child={child} />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* ── DESKTOP ACTIONS ── */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="w-10 h-10 rounded-full border border-green-500/30 bg-green-50 flex items-center justify-center text-green-500 transition-all hover:bg-green-500/10 hover:border-green-500/50"
          >
            <FaWhatsapp size={20} />
          </a>
          <Link prefetch={false}
            href="/quote"
            className="btn btn-primary btn-sm gap-1.5"
          >
            GET FREE QUOTE <HiArrowRight size={14} />
          </Link>
        </div>

        {/* ── MOBILE RIGHT ── */}
        <div className="flex lg:hidden items-center gap-2.5">
          <Link prefetch={false} href="/quote" className="btn btn-primary btn-sm text-[11px] px-3 py-2">
            Quote
          </Link>
          <button
            onClick={() => setDrawerOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg border border-gray-200 bg-white"
          >
            <span
              className={`block w-5 h-[2px] bg-navy-800 transition-all duration-300 origin-center ${drawerOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
            />
            <span
              className={`block w-5 h-[2px] bg-navy-800 transition-all duration-300 ${drawerOpen ? 'opacity-0 scale-x-0' : ''
                }`}
            />
            <span
              className={`block w-5 h-[2px] bg-navy-800 transition-all duration-300 origin-center ${drawerOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`fixed inset-0 bg-black/30 z-[998] lg:hidden transition-opacity duration-300 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── MOBILE DRAWER ── */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[1000] lg:hidden flex flex-col bg-white border-l border-gray-200 transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-[68px] border-b border-gray-100 shrink-0">
          <Link prefetch={false} href="/" onClick={() => setDrawerOpen(false)}>
            <Image
              src="/images/ctiddp-logo.png"
              alt="CTIDDP Logo"
              width={100}
              height={38}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-800 text-lg border border-gray-200 rounded-lg bg-white"
          >
            ✕
          </button>
        </div>

        {/* Drawer menu items */}
        <div className="flex-1 overflow-y-auto py-3">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {!item.children ? (
                <Link prefetch={false}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 text-[14px] font-500 no-underline transition-colors duration-150 ${item.highlight
                      ? 'text-[#FE5101] font-600 bg-[#FE5101]/5 border-l-[3px] border-[#FE5101]'
                      : isActive(item.href)
                        ? 'text-primary bg-primary-50'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}                    
                    {item.badge && (
                      <sup className="text-[9px] font-700 text-white bg-primary py-[2px] px-1.5 rounded-full leading-none">
                        {item.badge}
                      </sup>
                    )}
                  </span>
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className={`w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-500 bg-transparent border-none cursor-pointer transition-colors duration-150 ${isActiveParent(item) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-transform duration-200 ${openSection === item.label ? 'rotate-180' : ''}`}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openSection === item.label ? 'max-h-[800px]' : 'max-h-0'
                      }`}
                  >
                    <div className="bg-gray-50 border-t border-gray-100 py-2">
                      {item.children?.map((child) => (
                        <Link prefetch={false}
                          key={child.href}
                          href={child.href}
                          onClick={() => setDrawerOpen(false)}
                          className={`flex items-center gap-3 px-6 py-3 no-underline transition-colors duration-150 ${pathname === child.href ? 'bg-primary-50' : 'hover:bg-primary-50/50'
                            }`}
                        >
                          <span className="text-primary shrink-0">{child.icon}</span>
                          <div className="min-w-0">
                            <div
                              className={`text-[13px] font-500 leading-tight ${pathname === child.href ? 'text-primary' : 'text-gray-800'
                                }`}
                            >
                              {child.title}
                            </div>
                            <div className="text-[11px] text-gray-500 mt-0.5 leading-snug truncate">{child.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drawer footer */}
        <div className="shrink-0 p-5 border-t border-gray-100 flex flex-col gap-3">
          <Link prefetch={false}
            href="/quote"
            onClick={() => setDrawerOpen(false)}
            className="btn btn-primary w-full justify-center"
          >
            Get Free Quote →
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full justify-center"
          >
            <FaWhatsapp size={20} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  )
}