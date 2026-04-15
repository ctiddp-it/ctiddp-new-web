"use client";

import {
  FiTruck,
  FiGlobe,
  FiShield,
  FiUsers,
  FiZap,
  FiPackage,
  FiArrowRight,
  FiCheckCircle,
  FiChevronRight
} from "react-icons/fi";
import {
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineUserGroup
} from "react-icons/hi";
import { MdEngineering, MdOutlineArrowOutward } from "react-icons/md";
import {
  IoPeopleOutline,
  IoRocketOutline,
  IoBusinessOutline,
} from "react-icons/io5";
import { TbDeviceAnalytics, TbWorld } from "react-icons/tb";
import { GiCargoShip } from "react-icons/gi";
import { MdOutlineWarehouse, MdOutlineInstallMobile } from "react-icons/md";
import Link from 'next/link'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'

export default function EcosystemPage() {
  return (
    <>
      <ScrollRevealInit />
      <main className="bg-black text-white font-['Outfit',sans-serif]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
          <span className="text-[11px] text-muted/60 whitespace-nowrap">
            <Link href="/" className="text-muted/60 no-underline">Home</Link>
          </span>
          <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">›</span>
          <span className="text-[11px] text-gold-light whitespace-nowrap">Ecosystem</span>
        </div>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[45vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px] bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-gold-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#2563EB] animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
              Integrated Ecosystem
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,5vw,60px)] font-light leading-[1.1] mb-4">
              One Platform.<br />
              <em className="italic bg-linear-to-br from-gold to-gold-pale bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Endless Global Opportunities
              </em>
            </h1>
            <p className="text-[15px] text-muted max-w-[520px] mx-auto mb-8">
              Connect, trade, and grow with our all-in-one ecosystem designed to simplify international commerce and accelerate your business expansion.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-linear-to-br from-gold to-gold-light text-black px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02] cursor-none shadow-[0_8px_28px_rgba(37,99,235,0.3)]"
              >
                Join Us →
              </Link>
            </div>
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-[rgba(37,99,235,0.15)]">
              {[
                { label: "Businesses Served", value: "5,000+" },
                { label: "Global Markets", value: "60+" },
                { label: "Transaction Value", value: "$2.5B+" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-gold-light">{stat.value}</div>
                  <div className="text-[11px] text-muted tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 PILLARS ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Three Pillars
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                Three Pillars.<br />
                <em className="italic text-gold-light">One Unified Platform.</em>
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-2.5">
                A complete, integrated ecosystem designed for seamless global trade
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FiTruck className="text-[24px]" />, title: "CTIDDP", subtitle: "The Execution Layer", desc: "End-to-end DDP logistics handling supplier pickup, shipping, customs clearance, and final delivery with real-time tracking.", color: "blue", link: "/logistics" },
                { icon: <HiOutlineGlobeAlt className="text-[24px]" />, title: "Connect", subtitle: "The B2B Trade Network", desc: "A platform connecting global suppliers with verified buyers, enabling direct sourcing and faster business expansion with escrow protection.", color: "emerald", link: "/connect" },
                { icon: <MdEngineering className="text-[24px]" />, title: "Projects", subtitle: "Infrastructure & Turnkey Execution", desc: "From design to delivery and installation, we handle complete project execution for large-scale imports and infrastructure development.", color: "amber", link: "/projects" },
              ].map((item, i) => (
                <div key={i} className="reveal bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.12)] rounded-[4px] p-6 sm:p-7 flex flex-col gap-3 hover:border-[rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all">
                  <div className="mb-2">
                    <div className="w-10 h-10 rounded-full border border-[rgba(37,99,235,0.35)] bg-[rgba(37,99,235,0.08)] flex items-center justify-center text-gold-light">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-[18px] font-semibold text-white">{item.title}</div>
                  <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-gold-light">{item.subtitle}</div>
                  <div className="text-[13px] text-white leading-relaxed flex-grow">{item.desc}</div>
                  {/* <Link href={item.link} className="inline-flex items-center gap-2 text-gold-light text-[12px] font-medium mt-2 group">
                    Learn more <FiChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-all" />
                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ECOSYSTEM FLOW (TIMELINE) ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                How It Works
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                One Ecosystem.<br />
                <em className="italic text-gold-light">Multiple Advantages.</em>
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-2.5">
                A seamless journey from discovery to delivery, powered by our integrated platform
              </p>
            </div>

            <div className="max-w-[800px] mx-auto relative">
              <div className="absolute left-[27px] top-7 bottom-7 w-px bg-gradient-to-b from-[rgba(37,99,235,0.5)] to-[rgba(37,99,235,0.08)] z-0 hidden md:block" />
              {[
                { num: "01", title: "Supplier Discovery", desc: "Find verified global suppliers through Connect platform with AI-powered matching", badge: "Connect" },
                { num: "02", title: "Verification & Payment", desc: "Secure transactions and verified supplier network with escrow protection", badge: "CTIDDP" },
                { num: "03", title: "Shipping & Customs", desc: "End-to-end logistics with real-time tracking and customs clearance", badge: "CTIDDP" },
                { num: "04", title: "Warehouse Delivery", desc: "Final mile delivery to your facility with inventory management", badge: "CTIDDP" },
                { num: "05", title: "Installation & Execution", desc: "Complete project execution for large-scale imports and infrastructure", badge: "Projects" },
              ].map((step, i) => (
                <div key={i} className={`reveal flex gap-5 sm:gap-7 items-start relative z-[1] ${i < 4 ? 'mb-6 sm:mb-8' : ''}`}>
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-deep border border-[rgba(37,99,235,0.4)] flex items-center justify-center shrink-0">
                    <span className="font-['Cormorant_Garamond',serif] text-sm sm:text-base font-semibold text-gold-light">{step.num}</span>
                  </div>
                  <div className="bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.1)] rounded-[4px] p-4 sm:p-5 flex-1 hover:border-[rgba(37,99,235,0.25)] transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="text-sm sm:text-[15px] font-semibold text-white">{step.title}</div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[rgba(37,99,235,0.15)] text-gold-light border border-[rgba(37,99,235,0.2)]">
                        {step.badge}
                      </span>
                    </div>
                    <div className="text-[12px] sm:text-[13px] text-white leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY THIS ECOSYSTEM MATTERS ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Why Choose Us
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                Businesses Choose<br />
                <em className="italic text-gold-light">Our Ecosystem</em>
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-2.5">
                Join thousands of businesses that have transformed their global trade operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
              {[
                { icon: <TbDeviceAnalytics className="text-[18px]" />, title: "Reduce sourcing cost by up to 50%", stat: "50%" },
                { icon: <IoPeopleOutline className="text-[18px]" />, title: "Eliminate middlemen dependencies", stat: "100%" },
                { icon: <HiOutlineShieldCheck className="text-[18px]" />, title: "Minimize import risks", stat: "99%" },
                { icon: <IoRocketOutline className="text-[18px]" />, title: "Scale faster with reliable execution", stat: "3x" },
                { icon: <HiOutlineUserGroup className="text-[18px]" />, title: "Single partner for complete operations", stat: "All-in-one" },
                { icon: <TbWorld className="text-[18px]" />, title: "Access to 45+ countries", stat: "Global" },
              ].map((item, i) => (
                <div key={i} className="reveal bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.1)] rounded-[3px] p-4 flex items-center gap-4 hover:border-[rgba(37,99,235,0.2)] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-gold-light shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-medium text-gold-light mb-0.5">{item.stat}</div>
                    <div className="text-[13px] text-white leading-tight">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO THIS IS FOR ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-4">
                Built For
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1]">
                Who This Is For
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-2.5">
                Tailored solutions for every participant in the global trade ecosystem
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: <FiPackage className="text-[20px]" />, title: "Importers & Traders", desc: "Streamline your import operations" },
                { icon: <IoBusinessOutline className="text-[20px]" />, title: "Manufacturers", desc: "Expand your sourcing network" },
                { icon: <MdEngineering className="text-[20px]" />, title: "Infrastructure Developers", desc: "Execute large-scale projects" },
                { icon: <FiGlobe className="text-[20px]" />, title: "Project Buyers", desc: "Source globally with confidence" },
                { icon: <FiUsers className="text-[20px]" />, title: "B2B Distributors", desc: "Scale your distribution network" },
              ].map((item, i) => (
                <div key={i} className="reveal bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.12)] rounded-[4px] p-5 text-center hover:border-[rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-gold-light mx-auto mb-3">
                    {item.icon}
                  </div>
                  <div className="text-[14px] font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-[11px] text-muted">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA + VISION ── */}
        <section className="px-4 sm:px-6 lg:px-[60px] py-[60px] sm:py-[80px] bg-deep">
          <div className="max-w-[900px] mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] text-gold-light text-[10px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] mb-6">
              Get Started Today
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,52px)] font-light leading-[1.1] mb-4">
              Join Our Global Trade Ecosystem
            </h2>
            <p className="text-[15px] text-muted max-w-[500px] mx-auto mb-8">
              Whether you are a supplier, importer, or business owner, we help you grow faster with the right network and execution.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-linear-to-br from-gold to-gold-light text-black px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
              >
                Join as Supplier →
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-linear-to-br from-gold to-gold-light text-black px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
              >
                Join as Importer →
              </Link>
              {/* <Link
                href="/quote"
                className="inline-flex items-center gap-2 border border-[rgba(37,99,235,0.4)] text-gold-light px-6 sm:px-8 py-3 rounded-[3px] text-[13px] tracking-[1px] uppercase transition-all hover:bg-[rgba(37,99,235,0.08)]"
              >
                Get DDP Quote
              </Link> */}
            </div>

            {/* Vision Card */}
            <div className="bg-linear-to-br from-[rgba(37,99,235,0.08)] to-[rgba(37,99,235,0.02)] border border-[rgba(37,99,235,0.25)] rounded-[4px] p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[rgba(37,99,235,0.15)] flex items-center justify-center">
                  <FiZap className="w-4 h-4 text-gold-light" />
                </div>
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-gold-light">Our Vision</span>
              </div>
              <p className="text-lg sm:text-xl text-white leading-relaxed font-['Cormorant_Garamond',serif] italic max-w-[600px] mx-auto">
                To build a seamless global trade ecosystem where businesses can source, ship, and scale without barriers.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-muted text-[11px]">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-3.5 h-3.5 text-gold-light" />
                  <span>Trusted Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-3.5 h-3.5 text-gold-light" />
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-3.5 h-3.5 text-gold-light" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}