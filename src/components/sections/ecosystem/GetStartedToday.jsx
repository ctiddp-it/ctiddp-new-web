import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Building2,
  Globe,
  Headphones,
  Quote,
  Users,
  TrendingUp,
  Shield,
  Package2
} from 'lucide-react';
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

const GetStartedToday = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: Globe, value: "45+", label: "Countries" },
    { icon: TrendingUp, value: "200%", label: "Avg. Growth" },
    { icon: Shield, value: "100%", label: "Secure" }
  ];

  const features = [
    { icon: Star, label: "Trusted Network" },
    { icon: Globe, label: "Global Coverage" },
    { icon: Headphones, label: "Support" }
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 overflow-hidden"
      style={{ background: '#0B2A6B' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #ffffff 1px, transparent 1px),
              linear-gradient(-30deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, #FE5101, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
          style={{
            background: 'radial-gradient(circle, #ffffff, transparent 70%)',
            transform: 'translate(-30%, 30%)'
          }}
        />

        {/* Dots Pattern */}
        <div className="absolute top-20 left-10 flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </div>
        <div className="absolute bottom-20 right-10 flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span
              className="font-semibold text-[12px] tracking-[0.18em] uppercase"
              style={{ color: '#FE5101' }}
            >
              Get Started Today
            </span>
            <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Join Our Global Trade{' '}
            <span style={{ color: '#FE5101' }}>Ecosystem</span>
          </h2>

          {/* Two-tone underline */}
          <div
            className="flex h-[3.5px] rounded-full overflow-hidden mb-5"
            style={{ width: '72px' }}
          >
            <div className="flex-1 bg-white/60" />
            <div className="flex-1 bg-[#FE5101]" />
          </div>

          <p className="text-lg md:text-md text-white/70 max-w-3xl mx-auto">
            Whether you are a supplier, importer, or business owner, we help you grow faster
            with the right network and execution.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Join as Supplier */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FE5101]/20 cursor-pointer">
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at center, rgba(254, 81, 1, 0.15), transparent 70%)'
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#FE5101]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FE5101]/30 transition-all duration-300">
                <Building2 className="w-8 h-8 text-[#FE5101]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Join as Supplier
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                List your products, get verified, and connect with buyers from 45+ countries.
                Expand your reach globally.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                  <span>Access to global buyer network</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                  <span>Verified supplier badge</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
                  <span>AI-powered matching</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#FE5101] font-semibold group/btn cursor-pointer"
              >
                <span className="relative">
                  JOIN AS SUPPLIER
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FE5101] scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#FE5101] to-transparent" />
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-[#FE5101] to-transparent" />
            </div>
          </div>

          {/* Join as Importer */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 cursor-pointer">
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%)'
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                <Package2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Join as Importer
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Source products seamlessly with end-to-end logistics, verified suppliers,
                and complete supply chain management.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>End-to-end logistics</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Verified supplier access</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Real-time updates</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold group/btn cursor-pointer"
              >
                <span className="relative">
                  JOIN AS IMPORTER
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-white to-transparent" />
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-white to-transparent" />
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Star className="w-4 h-4 text-[#FE5101] fill-[#FE5101]" />
            <span className="text-sm font-semibold text-white/80">Our Vision</span>
          </div>

          <blockquote className="relative">
            <FaQuoteLeft className="w-10 h-10 text-[#FE5101]/30 absolute -top-4 -left-4 md:-left-8" />
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed italic">
              To build a seamless global trade ecosystem where businesses can
              source, ship, and scale without barriers.
            </p>
          </blockquote>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-default"
            >
              <feature.icon className="w-4 h-4 text-[#FE5101]" />
              <span className="text-sm font-medium text-white/90">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-1">
            <div className="w-12 h-1 rounded-full bg-[#FE5101]/50" />
            <div className="w-8 h-1 rounded-full bg-[#FE5101]/30" />
            <div className="w-4 h-1 rounded-full bg-[#FE5101]/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedToday;