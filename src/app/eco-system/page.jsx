import {
  ShieldCheck,
  Eye,
  Truck,
  FileCheck,
  Truck as TruckIcon,
  Users as UsersIcon,
  Building2 as BuildingIcon,
  TrendingDown, UserX, Shield, Rocket, Layers, Globe 
} from "lucide-react";
import {
  FaGlobe,
  FaShippingFast,
  FaHandshake,
  FaBuilding,
  FaCheckCircle,
  FaArrowRight,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUsers,
  FaDollarSign,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaBoxes,
  FaCogs,
  FaWarehouse,
  FaTruck,
  FaClipboardCheck,
  FaSearchDollar,
  FaUserTie,
  FaHardHat,
  FaStore,
  FaIndustry
} from 'react-icons/fa';

import Image from 'next/image'
import Link from 'next/link'
import { TbArrowRight } from 'react-icons/tb'
import { HiUsers } from 'react-icons/hi2'
import { MdPublic } from 'react-icons/md'
import { PiInfinityBold } from 'react-icons/pi'
import { Search, Ship, Warehouse, Wrench } from 'lucide-react';
import WhoThisIsFor from "@/components/sections/ecosystem/WhoThisIsFor";
import GetStartedToday from "@/components/sections/ecosystem/GetStartedToday"

  const metrics = [
    {
      icon: TrendingDown,
      value: "50%",
      label: "Reduce Sourcing Costs",
      description: "Reduce sourcing costs by up to 50%",
      color: "#0B2A6B"
    },
    {
      icon: UserX,
      value: "100%",
      label: "Eliminate Middlemen",
      description: "Eliminate middlemen dependencies completely",
      color: "#FE5101"
    },
    {
      icon: Shield,
      value: "99%",
      label: "Minimize Risks",
      description: "Minimize import risks significantly",
      color: "#0B2A6B"
    },
    {
      icon: Rocket,
      value: "3x",
      label: "Scale Faster",
      description: "Scale faster with reliable, consistent execution",
      color: "#FE5101"
    }
  ];

  const differentiators = [
    {
      icon: Layers,
      title: "All-in-One",
      subtitle: "Unified Operations",
      description: "A single partner managing your complete end-to-end supply chain operations",
      features: ["Single Dashboard", "Unified Communication", "Streamlined Process"]
    },
    {
      icon: Globe,
      title: "Global",
      subtitle: "Expansive Coverage",
      description: "Gain direct access to 45+ countries global networks",
      features: ["45+ Countries", "Local Expertise", "Global Standards"]
    }
  ];

const features = [
  {
    icon: ShieldCheck,
    title: "End-to-End Control",
  },
  {
    icon: Eye,
    title: "100% Transparency",
  },
  {
    icon: Truck,
    title: "On-time Delivery",
  },
  {
    icon: FileCheck,
    title: "Customs Compliant",
  },
];

const STATS = [
  {
    Icon: HiUsers,
    value: '5,000+',
    label: 'Businesses Served',
  },
  {
    Icon: MdPublic,
    value: '60+',
    label: 'Global Markets',
  },
  {
    Icon: FaDollarSign,
    value: '$2.5B+',
    label: 'Transaction Value',
  },
]
function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-start gap-2">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-semibold text-white">
        {title}
      </p>
    </div>
  );
}

 const services = [
    {
      icon: Search,
      title: "Supplier Discovery",
      description: "Find verified global suppliers through AI-powered matching.",
      color: "#0B2A6B"
    },
    {
      icon: ShieldCheck,
      title: "Verification & Payment",
      description: "Ensure a seamless and verified supplier network with eco-centric processes.",
      color: "#0B2A6B"
    },
    {
      icon: Ship,
      title: "Shipping & Customs",
      description: "End-to-end logistics with real-time tracking and customs clearance.",
      color: "#0B2A6B"
    },
    {
      icon: Warehouse,
      title: "Warehouse Delivery",
      description: "Final mile delivery by our facility with inventory management.",
      color: "#0B2A6B"
    },
    {
      icon: Wrench,
      title: "Installation & Execution",
      description: "Complete project execution for large-scale imports and infrastructure.",
      color: "#0B2A6B"
    }
  ];

const Ecosystem = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:h-[50vh] lg:min-h-[560px]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/ecosystem/ecosystem.png"
      alt="Global Logistics"
      className="h-full w-full object-cover object-center"
    />
    {/* Optional overlay for better mobile text readability */}
    <div className="absolute inset-0 bg-white/70 sm:bg-white/60 lg:bg-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10 h-full">
    <div className="flex h-full items-center px-5 py-14 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-4xl">
        {/* Badge */}
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-2 sm:px-4"
          style={{
            background: "rgba(0,61,165,0.08)",
            border: "1px solid rgba(0,61,165,0.12)",
          }}
        >
          <PiInfinityBold size={14} color="#003DA5" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#003DA5] sm:text-[11px]">
            Integrated Ecosystem
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[32px] font-extrabold leading-[1.1] text-[#FE5101] sm:text-[42px] md:text-[52px] lg:text-[58px]">
          One Platform.
          <br />
          <span className="text-[#0B2A6B]">Endless Global</span>
          <br />
          <span className="text-[#0B2A6B]">Trade Opportunities</span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-700 sm:text-[16px] md:text-[17px]">
          Connect, trade, and grow with our all-in-one ecosystem designed to
          simplify international commerce and accelerate your business
          expansion.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FE5101] px-6 py-3 text-[14px] font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Join Us
            <TbArrowRight size={18} />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {STATS.map(({ Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#003DA5]/8 sm:h-12 sm:w-12">
                <Icon size={20} color="#003DA5" />
              </div>

              <div>
                <div className="text-[24px] font-extrabold leading-none text-[#0B2A6B] sm:text-[28px]">
                  {value}
                </div>
                <div className="mt-1 text-[12px] text-slate-500">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Three Pillars Section */}
      <section className="relative py-20 bg-[#F8FAFC] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">

          <div className="grid lg:grid-cols-4 gap-6 items-start">

            {/* Left Intro */}
            <div className="lg:pr-6">

              {/* Standard Header Format */}
              <div className="mb-6">

                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                  <span
                    className="font-semibold text-[12px] tracking-[0.18em] uppercase"
                    style={{ color: '#FE5101' }}
                  >
                    Three Pillars
                  </span>
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                </div>

                {/* Heading */}
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  style={{ color: '#0B2A6B' }}
                >
                  Three Pillars.
                  <br />
                  One Unified Platform.
                </h2>

                {/* Underline */}
                <div
                  className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
                  style={{ width: '72px' }}
                >
                  <div className="flex-1 bg-[#0B2A6B]" />
                  <div className="flex-1 bg-[#FE5101]" />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  A complete, integrated ecosystem designed for seamless global
                  trade.
                </p>

              </div>

            </div>

            {/* Card 1 */}
            <div className="relative bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-100">

              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#E8EEF9] shadow-md flex items-center justify-center">
                  <TruckIcon />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#0B2A6B] mb-2">
                CTIDDP
              </h3>

              <p className="uppercase tracking-wide text-[13px] font-semibold text-[#2956B2] mb-5">
                The Execution Layer
              </p>

              <p className="text-gray-600 leading-relaxed">
                End-to-end DDP logistics solution covering factory pickup,
                shipping, customs clearance, and final delivery with real-time
                tracking.
              </p>

            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-100">

              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#E8EEF9] shadow-md flex items-center justify-center">
                  <UsersIcon />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#0B2A6B] mb-2">
                Connect
              </h3>

              <p className="uppercase tracking-wide text-[13px] font-semibold text-[#2956B2] mb-5">
                The B2B Trade Network
              </p>

              <p className="text-gray-600 leading-relaxed">
                AI-powered platform that connects verified suppliers with
                verified buyers, enabling secure sourcing, smart matching,
                and escrow-protected transactions.
              </p>

            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-100">

              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#E8EEF9] shadow-md flex items-center justify-center">
                  <BuildingIcon />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#0B2A6B] mb-2">
                Projects
              </h3>

              <p className="uppercase tracking-wide text-[13px] font-semibold text-[#2956B2] mb-5">
                Infrastructure & Turnkey Execution
              </p>

              <p className="text-gray-600 leading-relaxed">
                From design to delivery and installation, we manage complete
                import projects including infrastructure development and
                equipment supply.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span 
              className="font-semibold text-[12px] tracking-[0.18em] uppercase" 
              style={{ color: '#FE5101' }}
            >
              How It Works
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" 
            style={{ color: '#0B2A6B' }}
          >
            One Ecosystem. Multiple{' '}
            <span style={{ color: '#FE5101' }}>Advantages</span>
          </h2>

          {/* Two-tone underline */}
          <div 
            className="flex h-[3.5px] rounded-full overflow-hidden mb-5" 
            style={{ width: '72px' }}
          >
            <div className="flex-1" style={{ background: '#0B2A6B' }} />
            <div className="flex-1" style={{ background: '#FE5101' }} />
          </div>

          <p className="text-lg md:text-md text-gray-700 max-w-3xl mx-auto">
            A seamless journey from discovery to delivery, powered by our integrated platform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Ecosystem Card - Spans 2 rows on desktop */}
          <div 
            className="lg:col-span-1 lg:row-span-2 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0B2A6B 0%, #0D347F 100%)' }}
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 border-2 border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="absolute top-1/2 left-1/2 w-72 h-72 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 border-2 border-[#FE5101] rounded-full" />
                    <div className="absolute inset-1 border-2 border-white/60 rounded-full" />
                    <div className="absolute inset-2 bg-[#FE5101] rounded-full" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Complete Ecosystem
                </h3>
                <p className="text-blue-100/80 leading-relaxed">
                  Our integrated platform connects every stage of your import journey, 
                  creating a seamless flow from initial supplier discovery to final execution.
                </p>
              </div>

              {/* Progress indicator */}
              <div className="space-y-3 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FE5101]" />
                  <span className="text-sm text-blue-100">Unified Platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FE5101]" />
                  <span className="text-sm text-blue-100">End-to-End Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FE5101]" />
                  <span className="text-sm text-blue-100">Verified Network</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                {/* Step Number */}
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ 
                    background: index % 2 === 0 ? '#0B2A6B' : '#FE5101',
                    color: 'white'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: index % 2 === 0 ? 'rgba(11, 42, 107, 0.1)' : 'rgba(254, 81, 1, 0.1)'
                    }}
                  >
                    <service.icon 
                      className="w-6 h-6"
                      style={{ color: index % 2 === 0 ? '#0B2A6B' : '#FE5101' }}
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ color: '#0B2A6B' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Arrow indicator */}
              {index < services.length - 1 && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#FE5101] transition-colors">
                    <svg 
                      className="w-3 h-3 text-gray-400 group-hover:text-[#FE5101] transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Business Benefits Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span 
              className="font-semibold text-[12px] tracking-[0.18em] uppercase" 
              style={{ color: '#FE5101' }}
            >
              Why Choose Our Ecosystem
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" 
            style={{ color: '#0B2A6B' }}
          >
            Businesses Choose Our{' '}
            <span style={{ color: '#FE5101' }}>Ecosystem</span>
          </h2>

          {/* Two-tone underline */}
          <div 
            className="flex h-[3.5px] rounded-full overflow-hidden mb-5" 
            style={{ width: '72px' }}
          >
            <div className="flex-1" style={{ background: '#0B2A6B' }} />
            <div className="flex-1" style={{ background: '#FE5101' }} />
          </div>

          <p className="text-lg md:text-md text-gray-700 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their global trade operations.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${metric.color}08 0%, ${metric.color}15 100%)` 
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `${metric.color}10`
                  }}
                >
                  <metric.icon 
                    className="w-7 h-7"
                    style={{ color: metric.color }}
                  />
                </div>

                {/* Value with accent */}
                <div className="mb-3">
                  <span 
                    className="text-4xl md:text-5xl font-bold block"
                    style={{ color: metric.color }}
                  >
                    {metric.value}
                  </span>
                </div>

                {/* Label */}
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ color: '#0B2A6B' }}
                >
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.description}
                </p>

                {/* Progress bar indicator */}
                <div className="mt-6 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ 
                      background: metric.color,
                      width: metric.value === '100%' ? '100%' : 
                             metric.value === '99%' ? '95%' : 
                             metric.value === '50%' ? '60%' : '75%'
                    }}
                  />
                </div>
              </div>

              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top right, ${metric.color}15, transparent 70%)`
                }}
              />
            </div>
          ))}
        </div>

        {/* Differentiators Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8 md:p-10 overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              style={{
                background: index === 0 
                  ? 'linear-gradient(135deg, #0B2A6B 0%, #0D347F 50%, #0B2A6B 100%)'
                  : 'linear-gradient(135deg, #FE5101 0%, #FF6B2C 50%, #FE5101 100%)'
              }}
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <div className="absolute inset-0 border-2 border-white rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-4 border-2 border-white rounded-full translate-x-1/3 -translate-y-1/3" />
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 border-2 border-white rounded-full -translate-x-1/2 translate-y-1/2" />
              </div>

              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <item.icon className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold text-sm">
                    {item.title}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {item.subtitle}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg 
                          className="w-3 h-3 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2.5} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <button className="group/btn inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all">
                  Learn More
                  <svg 
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </button>
              </div>

              {/* Glass effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: i % 2 === 0 ? '#0B2A6B' : '#FE5101' }}
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              Trusted by <strong className="text-[#0B2A6B]">1,000+</strong> businesses worldwide
            </span>
          </div>
        </div>
      </div>
    </section>

      {/* Target Audience Section */}
      <WhoThisIsFor />

      {/* CTA Section */}
      <GetStartedToday />

    </div>
  );
};

export default Ecosystem;