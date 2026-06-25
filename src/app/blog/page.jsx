// pages/blog/index.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaShip,
  FaFileAlt,
  FaShieldAlt,
  FaTruck,
  FaStar,
  FaChartBar,
  FaSearch,
  FaArrowRight,
  FaEnvelope,
  FaUserCircle,
  FaClock,
} from 'react-icons/fa';


/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const TOPICS = [
  { icon: <FaShip size={26} />, label: 'DDP Shipping', count: 24 },
  { icon: <FaFileAlt size={26} />, label: 'Import Guide', count: 18 },
  { icon: <FaShieldAlt size={26} />, label: 'Customs & Compliance', count: 16 },
  { icon: <FaTruck size={26} />, label: 'Logistics Tips', count: 22 },
  { icon: <FaStar size={26} />, label: 'Canton Fair', count: 12 },
  { icon: <FaChartBar size={26} />, label: 'Market Insights', count: 15 },
];

const FEATURED = {
  category: 'FEATURED ARTICLE',
  categoryColor: '#0B2A6B',
  title: 'The Ultimate Guide to DDP Shipping from China to India',
  excerpt: 'A complete guide covering costs, timeline, process, and everything you need to know about DDP shipping.',
  author: 'Team CTIDDP',
  date: 'May 28, 2026',
  readTime: '8 min read',
  image: '/images/blog/featured-ddp.jpg',
  slug: 'guide-ddp-shipping-china-india-2025',
};

const LATEST = [
  {
    category: 'DDP SHIPPING',
    categoryBg: '#0B2A6B',
    title: 'DDP Shipping vs FOB & CIF: Which is Better for Importers?',
    date: 'May 26, 2026',
    readTime: '6 min read',
    excerpt: 'Understand the key differences, costs, and benefits to choose the right shipping term for your business.',
    image: '/images/blog/bl.png',
    slug: 'ddp-vs-fob-cif',
  },
  {
    category: 'IMPORT GUIDE',
    categoryBg: '#1a7f4b',
    title: 'Step-by-Step Import Process from China to India',
    date: 'May 23, 2026',
    readTime: '7 min read',
    excerpt: 'A simple breakdown of the import process so you can plan, ship, and grow with confidence.',
    image: '/images/blog/bl.png',
    slug: 'import-process-china-india',
  },
  {
    category: 'CUSTOMS',
    categoryBg: '#c0392b',
    title: 'India Customs Clearance Explained in Simple Steps',
    date: 'May 21, 2026',
    readTime: '5 min read',
    excerpt: 'Learn about documentation, duties, and compliance to avoid delays and penalties.',
    image: '/images/blog/bl.png',
    slug: 'india-customs-clearance-guide',
  },
  {
    category: 'LOGISTICS TIPS',
    categoryBg: '#e67e22',
    title: 'How to Reduce Shipping Costs Without Compromising on Quality',
    date: 'May 19, 2026',
    readTime: '6 min read',
    excerpt: 'Practical tips to optimize your supply chain and maximize your profit margins.',
    image: '/images/blog/bl.png',
    slug: 'reduce-shipping-costs',
  },
  {
    category: 'CANTON FAIR',
    categoryBg: '#8e44ad',
    title: 'Canton Fair 2026: A Complete Guide for Indian Buyers',
    date: 'May 16, 2026',
    readTime: '6 min read',
    excerpt: 'Dates, registration, tips, and how CTIDDP can support your sourcing journey.',
    image: '/images/blog/bl.png',
    slug: 'canton-fair-2026-guide',
  },
  {
    category: 'MARKET INSIGHTS',
    categoryBg: '#2980b9',
    title: 'Top Products to Import from China in 2026',
    date: 'May 14, 2026',
    readTime: '5 min read',
    excerpt: 'Explore trending product categories with high demand in the Indian market.',
    image: '/images/blog/bl.png',
    slug: 'top-products-import-china-2026',
  },
  {
    category: 'DDP SHIPPING',
    categoryBg: '#0B2A6B',
    title: 'Transit Time: China to India by Sea vs Air',
    date: 'May 12, 2026',
    readTime: '4 min read',
    excerpt: 'Compare timelines, costs, and which mode suits your shipment type best.',
    image: '/images/blog/bl.png',
    slug: 'transit-time-china-india',
  },
  {
    category: 'CUSTOMS',
    categoryBg: '#c0392b',
    title: 'HS Codes & Duties: How They Impact Your Imports',
    date: 'May 10, 2026',
    readTime: '5 min read',
    excerpt: 'Find out how HS codes are classified and how they affect your landed costs.',
    image: '/images/blog/bl.png',
    slug: 'hs-codes-duties-india',
  },
];

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
const HeroSection = ({ search, setSearch }) => (
  <section className="relative h-[50vh] min-h-[500px] overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/images/blog/bl.png"
        alt="Blog & Insights Hero"
        className="h-full w-full object-cover object-center"
      />
    </div>
    {/* Left-heavy gradient so text is legible, right fades to show image */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#041c4a] via-[#041c4a]/80 to-[#041c4a]/10" />

    <div className="relative z-10 h-full flex items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-xl">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-[#0181EA]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
            Blog & Insights
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] text-white mb-4">
          Insights That Move
          <br />
          <span className="text-[#36a0f7]">Your Business Forward.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
          Practical tips, expert insights, and the latest updates on global trade, shipping and DDP logistics.
        </p>

        {/* Search bar */}
        <div className="flex items-center gap-0 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles, topics, keywords..."
            className="flex-1 bg-white border-0 rounded-l-lg py-3 px-4 text-gray-700 text-sm outline-none placeholder:text-gray-400"
          />
          <button
            className="flex items-center justify-center px-4 py-3 rounded-r-lg text-white"
            style={{ background: '#0B2A6B' }}
          >
            <FaSearch size={16} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   EXPLORE BY TOPIC
───────────────────────────────────────────── */
const TopicsSection = () => (
  <section className="py-10 bg-white border-b border-slate-100 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-gray-500 text-sm font-medium mb-6 tracking-wide uppercase">
        Explore by Topic
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {TOPICS.map((topic) => (
          <button
            key={topic.label}
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200 hover:border-[#0B2A6B] hover:shadow-md transition-all group bg-white"
          >
            <div className="text-[#003DA5] group-hover:text-[#FE5101] transition-colors">
              {topic.icon}
            </div>
            <span className="text-[13px] font-semibold text-gray-800 text-center leading-tight">
              {topic.label}
            </span>
            <span className="text-[11px] text-gray-400">{topic.count} Articles</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   FEATURED ARTICLE
───────────────────────────────────────────── */
const FeaturedSection = () => (
  <section className="py-12 md:py-16 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-5">
        <span className="block w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
        <span className="font-semibold text-[12px] tracking-[0.18em] uppercase" style={{ color: '#FE5101' }}>
          Featured Article
        </span>
      </div>

      {/* Featured card */}
      <Link href={`/blog/${FEATURED.slug}`} className="block group">
        <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[320px] flex items-end">
          {/* BG image */}
          <img
            src={FEATURED.image}
            alt={FEATURED.title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay - bottom-heavy so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#041c4a]/95 via-[#041c4a]/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 w-full">
            <div className="max-w-2xl">
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full mb-4"
                style={{ background: '#FE5101' }}
              >
                Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                {FEATURED.title}
              </h2>
              <p className="text-white/75 text-sm md:text-base mb-6 max-w-lg leading-relaxed">
                {FEATURED.excerpt}
              </p>
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0181EA] flex items-center justify-center">
                    <FaUserCircle size={18} className="text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{FEATURED.author}</span>
                </div>
                <span className="text-white/50 text-sm">|</span>
                <span className="text-white/70 text-sm">{FEATURED.date}</span>
                <span className="text-white/50 text-sm">·</span>
                <span className="flex items-center gap-1 text-white/70 text-sm">
                  <FaClock size={12} /> {FEATURED.readTime}
                </span>
              </div>
              <span
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider text-white transition-all"
                style={{ background: '#0B2A6B' }}
              >
                Read More <FaArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   LATEST ARTICLES GRID
───────────────────────────────────────────── */
const ArticlesGrid = () => (
  <section className="py-12 md:py-16 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold" style={{ color: '#0B2A6B' }}>
          Latest Articles
        </h2>
        <Link
          href="/blog/all"
          className="flex items-center gap-1.5 text-sm font-semibold hover:underline transition-colors"
          style={{ color: '#003DA5' }}
        >
          View All Articles <FaArrowRight size={12} />
        </Link>
      </div>

      {/* 4-col grid, 2 rows = 8 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LATEST.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Image area */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-md"
                  style={{ background: post.categoryBg }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-[11px] mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <FaClock size={10} /> {post.readTime}
                  </span>
                </div>
                <h3
                  className="text-[15px] font-bold leading-snug mb-2 line-clamp-2 group-hover:text-[#0B2A6B] transition-colors"
                  style={{ color: '#1a1a2e' }}
                >
                  {post.title}
                </h3>
                <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2 flex-1 mb-3">
                  {post.excerpt}
                </p>
                <span
                  className="text-[12px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: '#003DA5' }}
                >
                  Read article <FaArrowRight size={10} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   NEWSLETTER SECTION
───────────────────────────────────────────── */
const NewsletterSection = () => (
  <section className="py-14 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-md"
          style={{ background: '#0B2A6B' }}
        >
          <FaEnvelope size={26} className="text-white" />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold mb-1" style={{ color: '#0B2A6B' }}>
            Stay Updated with Global Trade Insights
          </h3>
          <p className="text-gray-500 text-sm">
            Subscribe to our newsletter and get the latest tips, updates, and expert advice straight to your inbox.
          </p>
        </div>

        {/* Form */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-3 min-w-0 sm:min-w-[360px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white border border-slate-200 rounded-lg py-3 px-4 text-gray-700 text-sm outline-none focus:border-[#0B2A6B] focus:ring-1 focus:ring-[#0B2A6B]/20 transition-all placeholder:text-gray-400"
            />
            <button
              className="px-6 py-3 rounded-lg text-white text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
              style={{ background: '#0B2A6B' }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-[11px] text-gray-400 mt-2 text-center sm:text-left">
            ✓ No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   FINAL CTA BANNER
───────────────────────────────────────────── */
const CTASection = () => (
  <section className="py-16 md:py-14 bg-[#0B2A6B] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Ready to Import{' '}
        <span className="text-[#36a0f7]">the Right Way?</span>
      </h2>
      <p className="text-white/80 text-lg max-w-xl mx-auto">
        Get a full DDP quote and let us handle everything.
      </p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function InsightsPage() {
  const [search, setSearch] = useState('');

  return (
    <main className="font-sans antialiased">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Blog',
                '@id': 'https://www.ctiddp.com/blog/#blog',
                name: 'CTIDDP Insights',
                url: 'https://www.ctiddp.com/blog/',
                publisher: { '@type': 'Organization', name: 'CTIDDP' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ctiddp.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.ctiddp.com/blog/' },
                ],
              },
            ],
          }),
        }}
      />

      <HeroSection search={search} setSearch={setSearch} />
      <TopicsSection />
      <FeaturedSection />
      <ArticlesGrid />
      <NewsletterSection />
      <CTASection />

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}