'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Clock, Shield,
  IndianRupee, Headphones, Globe,
  ChevronLeft, ChevronRight, Play, Pause,
  Truck, Plane, Ship, FileCheck
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


// ── Main HeroSection ────────────────────────────────────────────────────────
export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const swiperRef = useRef(null);
  const zoomIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/images/home/ctiddp-sea-frieght.JPG",
      icon: Ship,
      title: 'Ocean Shipping',
      highlight: 'Bulk & Container Solutions',
      subtitle: 'FCL and LCL options with optimized routing and consolidation.',
      stats: '40% cost reduction on bulk shipments',
      ctaPrimary: 'Ocean Quote',
      ctaSecondary: 'Port Schedule',
      theme: 'amber',
    },
    {
      id: 2,
      image: "/images/home/ctiddp-air-frieght.JPG",
      icon: Plane,
      title: 'Air Freight Excellence',
      highlight: 'Express Global Delivery',
      subtitle: 'Priority air cargo with real-time tracking and temperature control.',
      stats: '48-72 hour delivery across major Asian hubs',
      ctaPrimary: 'Book Air Freight',
      ctaSecondary: 'Check Rates',
      theme: 'emerald',
    },
    {
      id: 3,
      image: '/images/home/china-to-india-ddp-shipping-warehouse.WEBP',
      icon: FileCheck,
      title: 'Customs Expertise',
      highlight: 'Stress-Free Clearance',
      subtitle: 'Dedicated customs brokerage with guaranteed clearance timelines.',
      stats: '48-hour customs clearance guarantee',
      ctaPrimary: 'Clearance Check',
      ctaSecondary: 'Speak with Expert',
      theme: 'purple',
    },
    {
      id: 4,
      image: '/images/home/door-to-door-delivery-china-imports-india.JPG',
      icon: Truck,
      title: 'Last Mile Delivery',
      highlight: 'Pan-India Network',
      subtitle: 'Warehousing, distribution and final delivery across all Indian states.',
      stats: '98.5% on-time delivery guarantee',
      ctaPrimary: 'Delivery Quote',
      ctaSecondary: 'Warehouse Tour',
      theme: 'indigo',
    },
  ];

  const getThemeColors = (theme) => {
    switch (theme) {
      case 'blue': return { accent: 'text-blue-300', border: 'border-blue-500/30', bg: 'bg-blue-600/20', gradient: 'from-blue-600 to-blue-700', hover: 'hover:bg-blue-700' };
      case 'emerald': return { accent: 'text-emerald-300', border: 'border-emerald-500/30', bg: 'bg-emerald-600/20', gradient: 'from-emerald-600 to-emerald-700', hover: 'hover:bg-emerald-700' };
      case 'amber': return { accent: 'text-amber-300', border: 'border-amber-500/30', bg: 'bg-amber-600/20', gradient: 'from-amber-600 to-amber-700', hover: 'hover:bg-amber-700' };
      case 'purple': return { accent: 'text-purple-300', border: 'border-purple-500/30', bg: 'bg-purple-600/20', gradient: 'from-purple-600 to-purple-700', hover: 'hover:bg-purple-700' };
      case 'indigo': return { accent: 'text-indigo-300', border: 'border-indigo-500/30', bg: 'bg-indigo-600/20', gradient: 'from-indigo-600 to-indigo-700', hover: 'hover:bg-indigo-700' };
      default: return { accent: 'text-blue-300', border: 'border-blue-500/30', bg: 'bg-blue-600/20', gradient: 'from-blue-600 to-blue-700', hover: 'hover:bg-blue-700' };
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    const handleSlideChange = () => setIsFirstLoad(false);
    swiper.on('slideChange', handleSlideChange);
    return () => swiper.off('slideChange', handleSlideChange);
  }, []);

  useEffect(() => {
    return () => { if (zoomIntervalRef.current) clearInterval(zoomIntervalRef.current); };
  }, []);

  const toggleAutoplay = () => {
    if (swiperRef.current?.swiper) {
      if (isPlaying) swiperRef.current.swiper.autoplay.stop();
      else swiperRef.current.swiper.autoplay.start();
      setIsPlaying(!isPlaying);
    }
  };

  const resolveImageUrl = (image) => {
    if (typeof image === 'string') return `url(${image})`;
    if (image?.src) return `url(${image.src})`;
    return undefined;
  };

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden -mt-[78px]">

      {/* ── Carousel ─────────────────────────────────────────────────────── */}
      <div className="relative h-screen">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1200}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            setActiveIndex(swiper.realIndex);
            setTimeout(() => setIsFirstLoad(false), 100);
          }}
          className="absolute inset-0 w-full h-full"
        >
          {slides.map((slide, index) => {
            const theme = getThemeColors(slide.theme);
            const Icon = slide.icon;
            return (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      key={activeIndex === index ? `zoom-${activeIndex}` : `idle-${index}`}
                      className="w-full h-full bg-cover bg-center animate-continuous-zoom"
                      style={{ backgroundImage: resolveImageUrl(slide.image), filter: 'brightness(0.85)', willChange: 'transform' }}
                    />
                    {/* <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 via-gray-900/30 to-transparent z-10" /> */}
                    {/* <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent z-10" /> */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background: "linear-gradient(to right top, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.6) 35%, rgba(17,24,39,0.4) 40%, transparent 50%)"
                      }}
                    />
                  </div>

                  {/* Slide Content */}
                  <div className="relative z-20 h-full flex items-center">
                    <div className="mx-auto px-6 md:px-1 py-12 md:py-12 w-full max-w-7xl md:ml-25">

                      {/* Trust Badge */}
                      <div className={`flex items-center gap-2 ${theme.bg} px-4 py-3 rounded-full mb-6 w-fit border ${theme.border} backdrop-blur-sm ${isFirstLoad && activeIndex === index ? 'animate-slide-in-left-1 opacity-0'
                          : activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                        } transition-all duration-1000 delay-300`}>
                        <Icon className="w-4 h-4 text-[#ffff]" />
                        <span className="text-sm font-medium text-[#ffff]">Trusted by 500+ Indian Importers</span>
                      </div>

                      {/* Heading */}
                      <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isFirstLoad && activeIndex === index ? 'animate-slide-in-left-2 opacity-0'
                          : activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                        } transition-all duration-1000 delay-500`}>
                        <span className="text-[#ffff]">{slide.title}</span><br />
                        <span className={theme.accent}>{slide.highlight}</span>
                      </h1>

                      {/* Subheading */}
                      <p className={`text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl ${isFirstLoad && activeIndex === index ? 'animate-slide-in-left-3 opacity-0'
                          : activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                        } transition-all duration-1000 delay-700`}>
                        {slide.subtitle}
                        <span className={`block text-lg md:text-xl ${theme.accent} mt-2`}>{slide.stats}</span>
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-9">
                        <Link href="/quote"
                          className={`group px-8 py-3 bg-linear-to-r ${theme.gradient} text-[#ffff] font-bold text-lg rounded-lg ${theme.hover} transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform ${isFirstLoad && activeIndex === index ? 'animate-slide-in-left-4 opacity-0'
                              : activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                            } transition-all duration-1000 delay-900`}>
                          {slide.ctaPrimary}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/services"
                          className={`group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-[#ffff] font-bold text-lg rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 transform ${isFirstLoad && activeIndex === index ? 'animate-slide-in-right opacity-0'
                              : activeIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            } transition-all duration-1000 delay-900`}>
                          <Headphones className="w-5 h-5" />
                          {slide.ctaSecondary}
                        </Link>
                      </div>

                      {/* Trust Features */}
                      <div className={`flex flex-wrap items-center gap-6 text-sm text-gray-400 ${isFirstLoad && activeIndex === index ? 'animate-slide-in-bottom opacity-0'
                          : activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        } transition-all duration-1000 delay-1100`}>
                        {/* <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>All-inclusive pricing</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-blue-400" /><span>Customs guarantee</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-yellow-400" /><span>24/7 Tracking</span></div> */}
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="swiper-button-prev hidden! md:flex! absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full items-center justify-center hover:bg-black/50 transition-all duration-300 group">
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button className="swiper-button-next hidden! md:flex! absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full items-center justify-center hover:bg-black/50 transition-all duration-300 group">
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Play/Pause */}
        <button onClick={toggleAutoplay}
          className="absolute bottom-6 md:bottom-8 right-6 md:right-8 z-30 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300 group">
          {isPlaying
            ? <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            : <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />}
        </button>

        {/* Progress Dots */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => { swiperRef.current?.swiper?.slideTo(index); setActiveIndex(index); }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Animation Styles ── */}
      <style>{`
        @keyframes continuousZoom {
          0%   { transform: scale(1); }
          100% { transform: scale(1.07); }
        }
        .animate-continuous-zoom {
          animation: continuousZoom 4s ease-out forwards;
        }
        @keyframes slideInLeft1  { 0% { transform: translateX(-20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideInLeft2  { 0% { transform: translateX(-30px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideInLeft3  { 0% { transform: translateX(-40px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideInLeft4  { 0% { transform: translateX(-50px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight  { 0% { transform: translateX(50px);  opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideInBottom { 0% { transform: translateY(20px);  opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-left-1 { animation: slideInLeft1  0.8s ease-out 0.3s  forwards; }
        .animate-slide-in-left-2 { animation: slideInLeft2  0.8s ease-out 0.5s  forwards; }
        .animate-slide-in-left-3 { animation: slideInLeft3  0.8s ease-out 0.7s  forwards; }
        .animate-slide-in-left-4 { animation: slideInLeft4  0.8s ease-out 0.9s  forwards; }
        .animate-slide-in-right  { animation: slideInRight  0.8s ease-out 0.9s  forwards; }
        .animate-slide-in-bottom { animation: slideInBottom 0.8s ease-out 1.1s  forwards; }
        .glass-panel-entrance {
          animation: fadeSlideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}