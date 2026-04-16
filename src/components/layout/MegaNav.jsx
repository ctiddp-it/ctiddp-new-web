'use client'

import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Ticker from './Ticker'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: "Services", href: "/services" },
  { label: "Ecosystem", href: "/eco-system" },
  { label: 'Canton Fair', href: '/canton-fair' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const dropPos = (item) => item.dropAlign === 'right' ? 'right-0' : 'left-0'

/* Reusable mega-dropdown item */
function MegaItem({ child }) {
  return (
    <Link href={child.href} className="flex items-start gap-2.5 py-2.5 px-3 rounded-sm no-underline transition-colors duration-150 cursor-none hover:bg-[rgba(37,99,235,0.07)]">
      <div className="w-[34px] h-[34px] rounded-lg bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] flex items-center justify-center text-sm shrink-0 transition-colors duration-150 group-hover/item:bg-[rgba(37,99,235,0.15)]">{child.icon}</div>
      <div>
        <span className="text-[12.5px] font-medium text-white block mb-0.5">{child.title}</span>
        <span className="text-[11px] text-muted leading-[1.4]">{child.desc}</span>
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setDrawerOpen(false); setOpenSection(null) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) return
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) setDrawerOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [drawerOpen])

  const toggleSection = (label) => setOpenSection(prev => prev === label ? null : label)
  const isActiveParent = (item) => item.children?.some(c => pathname === c.href || pathname.startsWith(c.href + '/'))

  return (
    <>
      <Ticker />

      {/* ── NAVBAR ── */}
      <nav className={`sticky top-0 z-[1000] flex items-center justify-between px-4 lg:px-13 h-[78px] bg-[var(--overlay-nav)] backdrop-blur-xl border-b border-[rgba(37,99,235,0.1)] transition-shadow duration-300${scrolled ? ' shadow-[0_4px_40px_var(--shadow-scroll)]' : ''}`}>

        {/* Logo */}
        <Link href="/" className="font-[var(--font-cormorant),'Cormorant_Garamond',serif] text-[21px]  tracking-[2px] px-2 py-2 text-[#ffff] font-semibold rounded-lg shrink-0">
          <span className="text-white"> CTIDDP</span>
          <span className="block font-[var(--font-outfit),'Outfit',sans-serif] text-[9px] tracking-[2px] uppercase text-muted font-normal mt-px"> DDP Specialists</span>
        </Link>

        {/* ── DESKTOP MENU ── */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none h-[68px] absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative h-full flex items-center group">

              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center gap-[5px] h-full px-3.5 text-gray-900 dark:text-white no-underline text-xs font-semibold tracking-[0.7px] uppercase transition-colors duration-200 border-b-2 whitespace-nowrap cursor-none cursor-pointer${pathname === item.href ? ' text-primary-light border-b-[rgba(37,99,235,0.5)]' : ' border-transparent hover:text-primary-light hover:border-b-[rgba(37,99,235,0.5)]'}`}
                >
                  {item.label}
                  {item.label === 'Canton Fair' && (
                    <sup className="text-[8px] font-bold text-[#ffff] bg-[rgba(122,153,219,0.2)] bg-linear-to-r from-blue-600 to-cyan-500 border py-[3px] px-2.5 rounded-full ml-[3px] tracking-[1px] leading-none align-super">
                      2026
                    </sup>
                  )}
                </Link>
              ) : (
                <>
                  <a
                    href="#"
                    className={`flex items-center gap-[5px] h-full px-3.5 text-muted no-underline text-xs font-normal tracking-[0.7px] uppercase transition-colors duration-200 border-b-2 whitespace-nowrap cursor-none cursor-pointer${isActiveParent(item) ? ' text-primary-light border-b-[rgba(37,99,235,0.5)]' : ' border-transparent hover:text-primary-light hover:border-b-[rgba(37,99,235,0.5)]'}`}
                    onClick={e => e.preventDefault()}
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-200 shrink-0 group-hover:rotate-180">
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>

                  {/* ── DROPDOWN ── */}
                  <div className={`absolute top-[66px] ${dropPos(item)} bg-[var(--overlay-dropdown)] backdrop-blur-xl border border-[rgba(37,99,235,0.15)] border-t-2 border-t-primary rounded-b-md p-7 hidden group-hover:block z-[999] shadow-[0_20px_60px_var(--shadow-scroll)]`}>

                    {item.twoCol ? (
                      /* ── TWO-COLUMN LAYOUT (Resources) ── */
                      <div className="grid grid-cols-2 min-w-[480px]">
                        {/* Col 1 */}
                        <div className="pr-5 border-r border-[rgba(37,99,235,0.1)]">
                          <div className="text-[9px] font-bold tracking-[2px] uppercase text-primary mb-3.5 pb-2.5 border-b border-[rgba(37,99,235,0.1)]">
                            {item.col1.heading}
                          </div>
                          {item.col1.items.map(child => <MegaItem key={child.href} child={child} />)}
                        </div>
                        {/* Col 2 */}
                        <div className="pl-5">
                          <div className="text-[9px] font-bold tracking-[2px] uppercase text-primary mb-3.5 pb-2.5 border-b border-[rgba(37,99,235,0.1)]">
                            {item.col2.heading}
                          </div>
                          {item.col2.items.map(child => <MegaItem key={child.href} child={child} />)}
                        </div>
                      </div>
                    ) : (
                      /* ── STANDARD GRID (Services) ── */
                      <div
                        className="grid gap-1.5"
                        style={{
                          gridTemplateColumns: (item.children?.length ?? 0) >= 5 ? '1fr 1fr' : '1fr',
                          minWidth: (item.children?.length ?? 0) >= 5 ? 560 : 300,
                        }}
                      >
                        <div className="col-span-full text-[9px] tracking-[2px] uppercase text-primary font-semibold mb-3.5 pb-2.5 border-b border-[rgba(37,99,235,0.1)]">{item.label}</div>
                        {item.children?.map(child => <MegaItem key={child.href} child={child} />)}
                      </div>
                    )}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* ── DESKTOP ACTIONS ── */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a href="https://wa.me/8790013772" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 border border-[rgba(74,222,128,0.35)] text-green  py-2 px-4 rounded-sm text-[11px] font-medium no-underline tracking-[0.3px] transition-all duration-200 whitespace-nowrap cursor-none hover:bg-[rgba(74,222,128,0.07)] hover:border-[rgba(74,222,128,0.6)]">
            <FaWhatsapp size={22} className="text-green-500" />
          </a>
          <Link href="/quote" className="px-2 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#ffff] font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">Get Free Quote</Link>
          <div className="flex items-center border border-[rgba(37,99,235,0.2)] rounded-sm overflow-hidden">
            <button className="bg-[rgba(37,99,235,0.15)] border-none text-primary-light font-[var(--font-outfit),'Outfit',sans-serif] text-[10px] font-medium tracking-[1px] uppercase py-[7px] px-2.5 cursor-none transition-all duration-200">EN</button>
            <div className="w-px h-7 bg-[rgba(37,99,235,0.2)]" />
            <button className="bg-transparent border-none text-muted font-[var(--font-outfit),'Outfit',sans-serif] text-[10px] font-medium tracking-[1px] uppercase py-[7px] px-2.5 cursor-none transition-all duration-200 hover:bg-[rgba(37,99,235,0.15)] hover:text-primary-light">中文</button>
          </div>
          <ThemeToggle />
        </div>

        {/* ── MOBILE RIGHT ── */}
        <div className="flex lg:hidden items-center gap-3">
          <Link href="/quote" className="text-[10px] uppercase tracking-wider px-2 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#ffff] font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Quote
          </Link>
          <button
            onClick={() => setDrawerOpen(o => !o)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-sm border border-[rgba(37,99,235,0.25)] bg-transparent cursor-pointer"
          >
            <span className={`block w-5 h-[1.5px] bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-300 origin-center${drawerOpen ? ' rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-300${drawerOpen ? ' opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-300 origin-center${drawerOpen ? ' -rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`fixed inset-0 bg-[var(--overlay-dim)] z-[998] lg:hidden transition-opacity duration-300${drawerOpen ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── MOBILE DRAWER ── */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-75 max-w-[85vw] z-[1000] lg:hidden flex flex-col bg-[var(--overlay-drawer)] border-l border-[rgba(37,99,235,0.15)] transition-transform duration-300 ease-in-out${drawerOpen ? ' translate-x-0' : ' translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 h-[68px] border-b border-[rgba(37,99,235,0.1)] shrink-0">
          <Link href="/" className="font-[var(--font-cormorant),'Cormorant_Garamond',serif] text-[18px] tracking-[2px] px-2 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#ffff] font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => setDrawerOpen(false)}>
            CTI<span className="text-[#ffff]">DDP</span>
          </Link>
          <button onClick={() => setDrawerOpen(false)} className="w-8 h-8 flex items-center justify-center text-muted hover:text-white text-lg border border-[rgba(37,99,235,0.2)] rounded-sm bg-transparent cursor-pointer">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center justify-between px-5 py-3 text-[13px] font-medium tracking-wide uppercase no-underline transition-colors duration-150${pathname === item.href ? ' text-primary-light' : ' text-muted hover:text-white'}`}
                >
                  {item.label}
                  {item.label === 'Canton Fair' && (
                    <sup className="text-[8px] font-bold text-[#ffff] bg-[rgba(122,153,219,0.2)] bg-linear-to-r from-blue-600 to-cyan-500 border  py-[3px] px-2.5 rounded-full ml-[3px] tracking-[1px] leading-none align-super">
                      2026
                    </sup>
                  )}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className={`w-full flex items-center justify-between px-5 py-3 text-[13px] font-medium tracking-wide uppercase bg-transparent border-none cursor-pointer transition-colors duration-150${isActiveParent(item) ? ' text-primary-light' : ' text-muted hover:text-white'}`}
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200${openSection === item.label ? ' rotate-180' : ''}`}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300${openSection === item.label ? ' max-h-[600px]' : ' max-h-0'}`}>
                    <div className="bg-[var(--overlay-card)] border-t border-[rgba(37,99,235,0.07)] py-2">
                      {item.twoCol ? (
                        <>
                          <div className="text-[9px] font-bold tracking-[2px] uppercase text-primary px-5 pt-1.5 pb-1">
                            {item.col1.heading}
                          </div>
                          {item.col1.items.map(child => (
                            <Link key={child.href} href={child.href} onClick={() => setDrawerOpen(false)}
                              className={`flex items-center gap-3 px-5 py-2.5 no-underline transition-colors duration-150${pathname === child.href ? ' bg-[rgba(37,99,235,0.08)]' : ' hover:bg-[var(--overlay-card)]'}`}>
                              <span className="text-[15px] shrink-0">{child.icon}</span>
                              <div className="min-w-0">
                                <div className={`text-xs font-medium leading-tight${pathname === child.href ? ' text-primary-light' : ' text-white'}`}>{child.title}</div>
                                <div className="text-[11px] text-muted mt-0.5 leading-snug truncate">{child.desc}</div>
                              </div>
                            </Link>
                          ))}
                          <div className="text-[9px] font-bold tracking-[2px] uppercase text-primary px-5 pt-2.5 pb-1 border-t border-[rgba(37,99,235,0.07)] mt-1">
                            {item.col2.heading}
                          </div>
                          {item.col2.items.map(child => (
                            <Link key={child.href} href={child.href} onClick={() => setDrawerOpen(false)}
                              className={`flex items-center gap-3 px-5 py-2.5 no-underline transition-colors duration-150${pathname === child.href ? ' bg-[rgba(37,99,235,0.08)]' : ' hover:bg-[var(--overlay-card)]'}`}>
                              <span className="text-[15px] shrink-0">{child.icon}</span>
                              <div className="min-w-0">
                                <div className={`text-xs font-medium leading-tight${pathname === child.href ? ' text-primary-light' : ' text-white'}`}>{child.title}</div>
                                <div className="text-[11px] text-muted mt-0.5 leading-snug truncate">{child.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </>
                      ) : (
                        item.children?.map(child => (
                          <Link key={child.href} href={child.href} onClick={() => setDrawerOpen(false)}
                            className={`flex items-center gap-3 px-5 py-2.5 no-underline transition-colors duration-150${pathname === child.href ? ' bg-[rgba(37,99,235,0.08)]' : ' hover:bg-[var(--overlay-card)]'}`}>
                            <span className="text-[15px] shrink-0">{child.icon}</span>
                            <div className="min-w-0">
                              <div className={`text-xs font-medium leading-tight${pathname === child.href ? ' text-primary-light' : ' text-white'}`}>{child.title}</div>
                              <div className="text-[11px] text-muted mt-0.5 leading-snug truncate">{child.desc}</div>
                            </div>
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="shrink-0 p-5 border-t border-[rgba(37,99,235,0.1)] flex flex-col gap-3">
          <Link href="/quote" onClick={() => setDrawerOpen(false)} className="bg-linear-to-br bg-linear-to-r from-blue-600 to-cyan-500 text-[#ffff] py-3 px-8 rounded-sm font-bold text-xs tracking-[1px] uppercase no-underline inline-flex items-center justify-center gap-2 shadow-[0_8px_28px_rgba(37,99,235,0.3)] transition-all duration-200 cursor-none text-center">
            Get Free Quote →
          </Link>
          <a href="https://wa.me/8790013772" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[rgba(37,211,102,0.07)] border border-[rgba(37,211,102,0.3)] text-green py-3 px-8 rounded-sm text-xs font-medium no-underline transition-all duration-200 cursor-none text-center">
            <FaWhatsapp size={22} />WhatsApp Us
          </a>
          <div className="flex justify-center items-center gap-3 mt-1">
            <ThemeToggle />
            <div className="flex items-center border border-[rgba(37,99,235,0.2)] rounded-sm overflow-hidden">
              <button className="bg-[rgba(37,99,235,0.15)] border-none text-primary-light font-[var(--font-outfit),'Outfit',sans-serif] text-[10px] font-medium tracking-[1px] uppercase py-[7px] px-2.5 cursor-none transition-all duration-200">EN</button>
              <div className="w-px h-7 bg-[rgba(37,99,235,0.2)]" />
              <button className="bg-transparent border-none text-muted font-[var(--font-outfit),'Outfit',sans-serif] text-[10px] font-medium tracking-[1px] uppercase py-[7px] px-2.5 cursor-none transition-all duration-200">中文</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}