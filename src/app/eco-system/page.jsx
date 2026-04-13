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
  IoBarChartOutline
} from "react-icons/io5";
import { TbDeviceAnalytics, TbWorld } from "react-icons/tb";
import { GiCargoShip } from "react-icons/gi";
import { MdOutlineWarehouse, MdOutlineInstallMobile } from "react-icons/md";
import { motion } from "framer-motion";


export default function EcosystemPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-amber-600/10 animate-gradient-x" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} 
          />
        </div>

        {/* Hero image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" 
            alt="Global Trade"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        </div>

        <div className="relative container mx-auto px-5 py-20 md:py-28 lg:py-36">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm border border-[#fff] mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-[#fff]">Global Trade Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-[#fff]">
                Building a Complete
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Global Trade Ecosystem
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              From sourcing to delivery to execution, we power global business expansion 
              with an integrated, seamless platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/25 inline-flex items-center justify-center gap-2 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Join Our Network
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group bg-transparent hover:bg-[#fff]/10 text-[#fff] font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-[#fff]/30 hover:border-[#fff]/50 inline-flex items-center justify-center gap-2 backdrop-blur-sm">
                Watch Demo
                <MdOutlineArrowOutward className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[#fff]/10">
              {[
                { label: "Active Users", value: "10K+" },
                { label: "Countries", value: "45+" },
                { label: "Success Rate", value: "99.8%" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-[#fff]">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fade into page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-deep)] to-transparent" />
      </section>

      {/* 2. ECOSYSTEM OVERVIEW - 3 Pillars */}
      <section className="py-20 sm:py-28 bg-deep relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3 block">
              Integrated Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Three Pillars. One Unified Platform.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto">
              A complete, integrated ecosystem designed for seamless global trade
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Pillar 1 - CTIDDP */}
            <motion.div 
              variants={fadeInUp}
              className="group relative bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[var(--overlay-card-border)]"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                  <FiTruck className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  CTIDDP
                </h3>
                <p className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
                  The Execution Layer
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  End-to-end DDP logistics handling supplier pickup, shipping, customs clearance, and final delivery with real-time tracking.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn more 
                  <FiChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tl-full" />
              </div>
            </motion.div>

            {/* Pillar 2 - Connect */}
            <motion.div 
              variants={fadeInUp}
              className="group relative bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[var(--overlay-card-border)]"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-emerald-400" />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                  <HiOutlineGlobeAlt className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  Connect
                </h3>
                <p className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">
                  The B2B Trade Network
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  A platform connecting global suppliers with verified buyers, enabling direct sourcing and faster business expansion with escrow protection.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn more 
                  <FiChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-tl-full" />
              </div>
            </motion.div>

            {/* Pillar 3 - Projects */}
            <motion.div 
              variants={fadeInUp}
              className="group relative bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[var(--overlay-card-border)] sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 to-amber-400" />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                  <MdEngineering className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Projects
                </h3>
                <p className="text-sm font-semibold text-amber-400 mb-3 uppercase tracking-wide">
                  Infrastructure & Turnkey Execution
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  From design to delivery and installation, we handle complete project execution for large-scale imports and infrastructure development.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-amber-400 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn more 
                  <FiChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500/10 to-transparent rounded-tl-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ECOSYSTEM FLOW */}
      <section className="py-20 sm:py-28 bg-surface relative">
        <div className="container mx-auto px-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              One Ecosystem.
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> Multiple Advantages.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto">
              A seamless journey from discovery to delivery, powered by our integrated platform
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Animated gradient line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-0.5">
                <div className="h-full w-full bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500 rounded-full animate-pulse" />
              </div>
              
              {[
                { 
                  icon: FiGlobe, 
                  title: "Supplier Discovery", 
                  desc: "Find verified global suppliers through Connect platform with AI-powered matching",
                  badge: "Connect", 
                  color: "blue", 
                  align: "left" 
                },
                { 
                  icon: HiOutlineShieldCheck, 
                  title: "Verification & Payment", 
                  desc: "Secure transactions and verified supplier network with escrow protection",
                  badge: "CTIDDP", 
                  color: "emerald", 
                  align: "right" 
                },
                { 
                  icon: GiCargoShip, 
                  title: "Shipping & Customs", 
                  desc: "End-to-end logistics with real-time tracking and customs clearance",
                  badge: "CTIDDP", 
                  color: "emerald", 
                  align: "left" 
                },
                { 
                  icon: MdOutlineWarehouse, 
                  title: "Warehouse Delivery", 
                  desc: "Final mile delivery to your facility with inventory management",
                  badge: "CTIDDP", 
                  color: "emerald", 
                  align: "right" 
                },
                { 
                  icon: MdOutlineInstallMobile, 
                  title: "Installation & Execution", 
                  desc: "Complete project execution for large-scale imports and infrastructure",
                  badge: "Projects", 
                  color: "amber", 
                  align: "left" 
                },
              ].map((step, idx) => {
                const colorMap = {
                  blue:    { icon: "text-blue-400",    badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",    step: "bg-blue-500/10 text-blue-300",    node: "bg-card border-blue-500/40" },
                  emerald: { icon: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30", step: "bg-emerald-500/10 text-emerald-300", node: "bg-card border-emerald-500/40" },
                  amber:   { icon: "text-amber-400",   badge: "bg-amber-500/10 text-amber-300 border-amber-500/30",  step: "bg-amber-500/10 text-amber-300",   node: "bg-card border-amber-500/40" },
                };
                const c = colorMap[step.color];
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: step.align === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative flex items-start mb-16 ${step.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-5/12" />
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-2xl ${c.node} shadow-xl border-2 flex items-center justify-center z-10`}>
                      <step.icon className={`w-6 h-6 ${c.icon}`} />
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`w-5/12 ${step.align === 'left' ? 'text-right pr-10' : 'text-left pl-10'}`}
                    >
                      <div className={`inline-block px-3 py-1 rounded-full ${c.step} text-xs font-semibold mb-3 tracking-wide`}>
                        Step {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-muted leading-relaxed">{step.desc}</p>
                      <span className={`inline-block mt-3 text-xs font-medium px-3 py-1.5 rounded-full ${c.badge} border`}>
                        {step.badge}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {[
                { icon: FiGlobe, title: "Supplier Discovery", desc: "Find verified global suppliers through Connect platform", color: "blue", badge: "Connect" },
                { icon: HiOutlineShieldCheck, title: "Verification & Payment", desc: "Secure transactions with escrow protection", color: "emerald", badge: "CTIDDP" },
                { icon: GiCargoShip, title: "Shipping & Customs", desc: "End-to-end logistics with tracking", color: "emerald", badge: "CTIDDP" },
                { icon: MdOutlineWarehouse, title: "Warehouse Delivery", desc: "Final mile delivery to your facility", color: "emerald", badge: "CTIDDP" },
                { icon: MdOutlineInstallMobile, title: "Installation", desc: "Complete project execution", color: "amber", badge: "Projects" },
              ].map((step, idx) => {
                const colorMap = {
                  blue:    { icon: "text-blue-400",    bg: "bg-blue-500/10",    badge: "bg-blue-500/10 text-blue-300" },
                  emerald: { icon: "text-emerald-400", bg: "bg-emerald-500/10", badge: "bg-emerald-500/10 text-emerald-300" },
                  amber:   { icon: "text-amber-400",   bg: "bg-amber-500/10",   badge: "bg-amber-500/10 text-amber-300" },
                };
                const c = colorMap[step.color];
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-deep hover:bg-card transition-colors duration-300 border border-[var(--overlay-card-border)]"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center`}>
                      <step.icon className={`w-6 h-6 ${c.icon}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-white">{step.title}</h4>
                        <span className="text-xs font-medium text-muted">Step {idx + 1}</span>
                      </div>
                      <p className="text-muted text-sm">{step.desc}</p>
                      <span className={`inline-block mt-2 text-xs font-medium px-2.5 py-1 rounded-full ${c.badge}`}>
                        {step.badge}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY THIS ECOSYSTEM MATTERS */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#fff]">
              Businesses Choose Our Ecosystem
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their global trade operations
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {[
              { icon: TbDeviceAnalytics, title: "Reduce sourcing cost by up to 50%", color: "text-green-400", stat: "50%" },
              { icon: IoPeopleOutline, title: "Eliminate middlemen dependencies", color: "text-blue-400", stat: "100%" },
              { icon: HiOutlineShieldCheck, title: "Minimize import risks", color: "text-amber-400", stat: "99%" },
              { icon: IoRocketOutline, title: "Scale faster with reliable execution", color: "text-purple-400", stat: "3x" },
              { icon: HiOutlineUserGroup, title: "Single partner for complete operations", color: "text-rose-400", stat: "All-in-one" },
              { icon: TbWorld, title: "Access to 45+ countries", color: "text-cyan-400", stat: "Global" },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#fff]/5 backdrop-blur-sm border border-[#fff]/10 transition-all duration-300 cursor-default"
              >
                <div className="relative">
                  <benefit.icon className={`w-6 h-6 ${benefit.color} flex-shrink-0 mt-0.5`} />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-400">{benefit.stat}</span>
                  <p className="text-base md:text-lg font-medium text-[#fff]">{benefit.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="container mx-auto px-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3 block">
              Built For
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Who This Is For
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto">
              Tailored solutions for every participant in the global trade ecosystem
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
          >
            {[
              { icon: FiPackage,        title: "Importers & Traders",      desc: "Streamline your import operations",    accent: "blue" },
              { icon: IoBusinessOutline,title: "Manufacturers",            desc: "Expand your sourcing network",         accent: "emerald" },
              { icon: MdEngineering,    title: "Infrastructure Developers",desc: "Execute large-scale projects",         accent: "amber" },
              { icon: FiGlobe,          title: "Project Buyers",           desc: "Source globally with confidence",      accent: "purple" },
              { icon: FiUsers,          title: "B2B Distributors",         desc: "Scale your distribution network",      accent: "rose" },
            ].map((item, idx) => {
              const accentMap = {
                blue:    { bg: "bg-blue-500/10",    icon: "text-blue-400",    border: "border-blue-500/20",    title: "text-blue-300" },
                emerald: { bg: "bg-emerald-500/10", icon: "text-emerald-400", border: "border-emerald-500/20", title: "text-emerald-300" },
                amber:   { bg: "bg-amber-500/10",   icon: "text-amber-400",   border: "border-amber-500/20",   title: "text-amber-300" },
                purple:  { bg: "bg-purple-500/10",  icon: "text-purple-400",  border: "border-purple-500/20",  title: "text-purple-300" },
                rose:    { bg: "bg-rose-500/10",     icon: "text-rose-400",    border: "border-rose-500/20",    title: "text-rose-300" },
              };
              const a = accentMap[item.accent];
              return (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className={`group relative bg-card rounded-2xl p-6 text-center transition-all duration-300 cursor-default shadow-sm hover:shadow-xl border ${a.border}`}
                >
                  <div className={`w-14 h-14 mx-auto rounded-xl ${a.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-7 h-7 ${a.icon}`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${a.title}`}>{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. JOIN OUR ECOSYSTEM + VISION */}
      <section className="py-20 sm:py-28 bg-deep relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--overlay-card-border)] to-transparent" />
        
        <div className="container mx-auto px-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3 block">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Global Trade Ecosystem
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
              Whether you are a supplier, importer, or business owner, we help you grow faster with the right network and execution.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="group relative bg-white text-[var(--color-black)] hover:bg-white/90 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg overflow-hidden">
                <span className="relative z-10">Join as Supplier</span>
              </button>
              <button className="group relative bg-primary-light hover:bg-blue-400 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-600/25 overflow-hidden">
                <span className="relative z-10">Join as Importer</span>
              </button>
              <button className="group border-2 border-[var(--overlay-card-border)] text-white hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300">
                Get DDP Quote
              </button>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 sm:p-12 text-white overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} 
                />
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <FiZap className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#fff]">Our Vision</h3>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl text-[#fff]/90 max-w-3xl mx-auto leading-relaxed">
                  To build a seamless global trade ecosystem where businesses can 
                  <span className="text-amber-400 font-semibold"> source, ship, and scale </span>
                  without barriers.
                </p>
                
                <div className="flex items-center justify-center gap-8 mt-8 text-[#fff]/60">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Trusted Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Global Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}