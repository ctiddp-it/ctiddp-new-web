// pages/blog/[slug].js  (or app/blog/[slug]/page.js)
'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaWhatsapp,
  FaClock,
  FaFolder,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaShieldAlt,
  FaBoxOpen,
  FaDollarSign,
  FaTruck,
  FaLeaf,
  FaTh,
  FaEnvelope,
  FaHeadset,
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

/* ─────────────────────────────────────────────
   STATIC DATA  (swap with CMS/MDX fetch)
───────────────────────────────────────────── */
const POST = {
  category: 'DDP SHIPPING GUIDE',
  categoryColor: '#0B2A6B',
  title: 'What is DDP?',
  titleHighlight: 'A Complete Guide for Importers',
  intro:
    'DDP (Delivered Duty Paid) is the most convenient Incoterm® for importers. In this guide, learn how DDP shipping works, its benefits, costs, and why it\'s the preferred choice for global importers shipping to India.',
  author: 'Team CTIDDP',
  date: 'May 26, 2026',
  readTime: '8 min read',
  category2: 'DDP Shipping',
  image: '/images/blog/bl.png',
  prevPost: { label: 'How to Choose the Right Shipping Method', href: '/blog/choose-shipping-method' },
  nextPost: { label: 'DDP Shipping from China to India: Costs & Guide', href: '/blog/ddp-shipping-china-india-costs' },
};

const TOC = [
  { num: '1.', label: 'What is DDP?', href: '#what-is-ddp' },
  { num: '2.', label: 'How Does DDP Shipping Work?', href: '#how-ddp-works' },
  { num: '3.', label: 'Who Pays for What in DDP?', href: '#who-pays' },
  { num: '4.', label: 'Benefits of DDP Shipping', href: '#benefits' },
  { num: '5.', label: 'DDP vs Other Incoterms', href: '#ddp-vs-others' },
  { num: '6.', label: 'When Should You Use DDP?', href: '#when-to-use' },
  { num: '7.', label: 'Why Choose CTIDDP for DDP Shipping?', href: '#why-ctiddp' },
];

const FLOW_STEPS = [
  { num: '01', label: 'Supplier Picks Up Cargo' },
  { num: '02', label: 'International Shipping' },
  { num: '03', label: 'Customs Clearance (Export)' },
  { num: '04', label: 'Freight to India' },
  { num: '05', label: 'Customs Clearance (Import & Duties)' },
  { num: '06', label: 'Delivery to Your Doorstep' },
];

const COST_ROWS = [
  { item: 'Export Packing & Handling', paidBy: 'Seller' },
  { item: 'Origin Transportation', paidBy: 'Seller' },
  { item: 'Export Customs Clearance', paidBy: 'Seller' },
  { item: 'International Freight', paidBy: 'Seller' },
  { item: 'Insurance (if any)', paidBy: 'Seller' },
  { item: 'Import Customs Clearance & Duties', paidBy: 'Seller' },
  { item: 'Destination Delivery', paidBy: 'Seller' },
  { item: 'Unloading at Destination', paidBy: 'Buyer' },
];

const BENEFITS = [
  { icon: <FaShieldAlt size={22} />, title: 'Hassle-Free', desc: 'We handle everything from start to finish.' },
  { icon: <FaDollarSign size={22} />, title: 'No Hidden Costs', desc: 'All duties, taxes, and fees are included.' },
  { icon: <FaClock size={22} />, title: 'Time Saving', desc: 'Single point of contact for your shipment.' },
  { icon: <FaTruck size={22} />, title: 'Predictable Delivery', desc: 'On-time delivery to your doorstep.' },
  { icon: <FaLeaf size={22} />, title: 'Peace of Mind', desc: 'We take care of the risks and compliance.' },
];

const POPULAR = [
  { title: 'DDP vs FOB: Which is Better for Importers?', date: 'May 20, 2026', readTime: '6 min read', image: '/images/blog/bl.png', href: '/blog/ddp-vs-fob' },
  { title: 'Step-by-Step Import Process from China to India', date: 'May 18, 2026', readTime: '7 min read', image: '/images/blog/bl.png', href: '/blog/import-process' },
  { title: 'How to Reduce Shipping Costs Without Compromising on Quality', date: 'May 12, 2026', readTime: '6 min read', image: '/images/blog/bl.png', href: '/blog/reduce-costs' },
  { title: 'Canton Fair 2026: A Complete Guide for Indian Buyers', date: 'May 10, 2026', readTime: '5 min read', image: '/images/blog/bl.png', href: '/blog/canton-fair-2026' },
];

/* ─────────────────────────────────────────────
   BREADCRUMB
───────────────────────────────────────────── */
const Breadcrumb = () => (
  <nav className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-3 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
      <Link href="/" className="hover:text-[#0B2A6B] transition-colors">Home</Link>
      <span className="text-gray-300">›</span>
      <Link href="/blog" className="hover:text-[#0B2A6B] transition-colors">Blog</Link>
      <span className="text-gray-300">›</span>
      <Link href="/blog/category/ddp-shipping" className="hover:text-[#0B2A6B] transition-colors">DDP Shipping</Link>
      <span className="text-gray-300">›</span>
      <span className="text-gray-700 font-medium">What is DDP?</span>
    </div>
  </nav>
);

/* ─────────────────────────────────────────────
   POST HEADER  (title + meta + image)
───────────────────────────────────────────── */
const PostHeader = () => {
  const copyLink = () => navigator.clipboard.writeText(window.location.href);

  return (
    <section className="py-10 md:py-14 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left - text */}
          <div>
            {/* Category badge */}
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-5"
              style={{ background: '#EEF2FF', color: '#0B2A6B' }}
            >
              {POST.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2" style={{ color: '#111827' }}>
              {POST.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#0181EA' }}>
              {POST.titleHighlight}
            </h2>

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed mb-7 text-base">
              {POST.intro}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm text-gray-500">
              {/* Author avatar + name */}
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: '#0B2A6B' }}
                >
                  CT
                </div>
                <span className="font-medium text-gray-700">{POST.author}</span>
              </div>
              <span className="text-gray-300">·</span>
              <span>{POST.date}</span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1">
                <FaClock size={12} /> {POST.readTime}
              </span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1">
                <FaFolder size={12} /> {POST.category2}
              </span>
            </div>

            {/* Share row */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600">Share:</span>
              {[
                { icon: <FaFacebookF size={14} />, bg: '#1877F2', href: '#' },
                { icon: <FaLinkedinIn size={14} />, bg: '#0A66C2', href: '#' },
                { icon: <FaTwitter size={14} />, bg: '#1DA1F2', href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </a>
              ))}
              <button
                onClick={copyLink}
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-gray-500 hover:border-[#0B2A6B] hover:text-[#0B2A6B] transition-colors"
              >
                <FaLink size={13} />
              </button>
            </div>
          </div>

          {/* Right - featured image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={POST.image}
              alt={POST.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────── */
const TableOfContents = () => (
  <div className="border border-slate-200 rounded-xl p-6 mb-8 bg-slate-50/50">
    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
      TABLE OF CONTENTS
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
      {TOC.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0181EA] transition-colors group"
        >
          <span className="text-gray-400 text-xs w-5 flex-shrink-0">{item.num}</span>
          <span className="group-hover:underline">{item.label}</span>
        </a>
      ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   SIDEBAR
───────────────────────────────────────────── */
const Sidebar = () => {
  const [email, setEmail] = useState('');

  return (
    <aside className="space-y-6 sticky top-6">

      {/* Newsletter widget */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#0B2A6B' }}
          >
            <FaEnvelope size={16} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Stay Updated</p>
            <p className="text-xs text-gray-500 leading-snug">Get the latest shipping insights and tips straight to your inbox.</p>
          </div>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border border-slate-200 rounded-lg py-2.5 px-3 text-sm text-gray-700 outline-none focus:border-[#0B2A6B] focus:ring-1 focus:ring-[#0B2A6B]/20 transition-all placeholder:text-gray-400 mb-3"
        />
        <button
          className="w-full py-2.5 rounded-lg text-white text-sm font-bold uppercase tracking-wider"
          style={{ background: '#0B2A6B' }}
        >
          Subscribe
        </button>
        <p className="text-[11px] text-gray-400 text-center mt-2">🔒 No spam. Unsubscribe anytime.</p>
      </div>

      {/* Popular articles */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-5">Popular Articles</h3>
        <div className="space-y-4">
          {POPULAR.map((article) => (
            <Link key={article.href} href={article.href} className="flex gap-3 group">
              <div className="flex-shrink-0 w-16 h-14 rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0B2A6B] transition-colors leading-snug line-clamp-2 mb-1">
                  {article.title}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><FaClock size={9} /> {article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA widget */}
      <div
        className="rounded-xl p-6 text-white"
        style={{ background: 'linear-gradient(135deg, #0B2A6B 60%, #003DA5)' }}
      >
        <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-4">
          <FaHeadset size={18} className="text-white" />
        </div>
        <h3 className="font-bold text-lg mb-2 text-white">Need Help with Your DDP Shipment?</h3>
        <p className="text-white/75 text-sm mb-5 leading-relaxed">
          Our experts are here to help you ship hassle-free.
        </p>
        <div className="space-y-3">
          <a
            href="/contact"
            className="w-full flex items-center justify-center py-2.5 rounded-lg border border-white text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0B2A6B] transition-all"
          >
            Talk to an Expert
          </a>
          <a
            href="https://wa.me/918790018787"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-white text-sm font-semibold uppercase tracking-wider"
            style={{ background: '#25D366' }}
          >
            <FaWhatsapp size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
};

/* ─────────────────────────────────────────────
   ARTICLE BODY
───────────────────────────────────────────── */
const ArticleBody = () => (
  <article className="prose-custom space-y-12">

    {/* Table of Contents */}
    <TableOfContents />

    {/* Section 1 - What is DDP */}
    <section id="what-is-ddp">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
        1. What is DDP?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        DDP stands for Delivered Duty Paid. It is an Incoterm® rule where the seller is responsible for delivering the goods to the buyer's specified place in the destination country, cleared for import, and ready for unload.
      </p>
      <p className="text-gray-600 leading-relaxed mb-5">
        This includes covering all costs, risks, duties, taxes, and customs clearance.
      </p>

      {/* Callout box */}
      <div className="flex items-start gap-4 p-5 border border-[#0B2A6B]/20 rounded-xl bg-[#EEF2FF]">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: '#0B2A6B' }}
        >
          <FaShieldAlt size={18} className="text-white" />
        </div>
        <div>
          <p className="font-bold text-gray-800 mb-1">In simple words:</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            The seller takes care of everything until the goods reach your doorstep in India.
          </p>
        </div>
      </div>
    </section>

    {/* Divider */}
    <hr className="border-slate-100" />

    {/* Section 2 - How Does DDP Work */}
    <section id="how-ddp-works">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
        2. How Does DDP Shipping Work?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        The entire shipping process is managed by the seller or their logistics partner.
      </p>

      {/* Flow steps */}
      <div className="overflow-x-auto pb-2">
        <div className="flex items-start gap-0 min-w-max">
          {FLOW_STEPS.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center text-center w-28">
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-2"
                  style={{ borderColor: '#0B2A6B', background: '#EEF2FF' }}
                >
                  <span className="text-xs font-bold" style={{ color: '#0B2A6B' }}>{step.num}</span>
                </div>
                <p className="text-[11px] text-gray-600 font-medium leading-tight">{step.label}</p>
              </div>
              {/* Arrow between steps */}
              {i < FLOW_STEPS.length - 1 && (
                <div className="flex-shrink-0 px-1 -mt-6">
                  <BsArrowRight size={20} style={{ color: '#FE5101' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <hr className="border-slate-100" />

    {/* Section 3 - Who Pays */}
    <section id="who-pays">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
        3. Who Pays for What in DDP?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        In DDP terms, the seller bears almost all costs and risks until the goods are delivered.
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr style={{ background: '#EEF2FF' }}>
              <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0B2A6B' }}>
                Cost / Responsibility
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0B2A6B' }}>
                Paid By
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {COST_ROWS.map((row) => (
              <tr key={row.item} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-3 text-sm text-gray-700 flex items-center gap-2">
                  <FaCheckCircle size={13} style={{ color: '#003DA5', flexShrink: 0 }} />
                  {row.item}
                </td>
                <td className="px-5 py-3 text-sm font-semibold" style={{ color: row.paidBy === 'Seller' ? '#003DA5' : '#FE5101' }}>
                  {row.paidBy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <hr className="border-slate-100" />

    {/* Section 4 - Benefits */}
    <section id="benefits">
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#0B2A6B' }}>
        4. Benefits of DDP Shipping
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:shadow-sm transition-shadow"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
              style={{ background: '#EEF2FF', color: '#0B2A6B' }}
            >
              {b.icon}
            </div>
            <p className="text-[13px] font-bold text-gray-800 mb-1">{b.title}</p>
            <p className="text-[11px] text-gray-500 leading-snug">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <hr className="border-slate-100" />

    {/* Section 5 - DDP vs Others */}
    <section id="ddp-vs-others">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
        5. DDP vs Other Incoterms
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Unlike FOB or CIF, where the buyer takes on risk and responsibility midway, DDP ensures the seller manages everything - making it the most importer-friendly Incoterm for India-bound shipments.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead style={{ background: '#EEF2FF' }}>
            <tr>
              {['Incoterm', 'Who Handles Freight', 'Who Handles Customs', 'Who Pays Duty', 'Best For'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider" style={{ color: '#0B2A6B' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white text-sm">
            {[
              { term: 'DDP', freight: 'Seller', customs: 'Seller', duty: 'Seller', best: 'Importers wanting zero hassle' },
              { term: 'CIF', freight: 'Seller', customs: 'Buyer', duty: 'Buyer', best: 'Experienced importers' },
              { term: 'FOB', freight: 'Buyer', customs: 'Buyer', duty: 'Buyer', best: 'Importers with own forwarder' },
            ].map((row) => (
              <tr key={row.term} className="hover:bg-slate-50/50">
                <td className="px-4 py-3 font-bold" style={{ color: row.term === 'DDP' ? '#0B2A6B' : '#374151' }}>
                  {row.term}
                </td>
                <td className="px-4 py-3 text-gray-600">{row.freight}</td>
                <td className="px-4 py-3 text-gray-600">{row.customs}</td>
                <td className="px-4 py-3 text-gray-600">{row.duty}</td>
                <td className="px-4 py-3 text-gray-500 text-xs">{row.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <hr className="border-slate-100" />

    {/* Section 6 - When to Use */}
    <section id="when-to-use">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
        6. When Should You Use DDP?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-5">
        DDP is the right choice when you want a predictable, hassle-free import experience. It works best for:
      </p>
      <div className="space-y-3">
        {[
          'First-time importers from China who need full support',
          'Businesses sourcing from multiple suppliers (Canton Fair buyers)',
          'Importers who want a single fixed landed cost with no surprises',
          'Companies that lack in-house customs or logistics expertise',
          'Anyone shipping FCL, LCL, or air freight regularly to India',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <FaCheckCircle className="flex-shrink-0 mt-0.5" size={15} style={{ color: '#003DA5' }} />
            <span className="text-gray-700 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </section>

    <hr className="border-slate-100" />

    {/* Section 7 - Why CTIDDP */}
    <section id="why-ctiddp">
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B2A6B' }}>
        7. Why Choose CTIDDP for DDP Shipping?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        CTIDDP is a China-to-India specialist logistics company built entirely around the DDP model. With offices in Guangzhou, Foshan, and across India, we manage the entire pipeline - from factory pickup to your warehouse door.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          'On-ground presence in China manufacturing hubs',
          'Integrated QC, supplier payments & warehousing',
          'Single fixed DDP quote - no hidden fees',
          'Real-time coordination across supply chain',
          'Dedicated account manager for every shipment',
          'Experts in India customs compliance & duty planning',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 p-4 rounded-lg border border-slate-100 bg-white shadow-sm">
            <FaCheckCircle className="flex-shrink-0 mt-0.5" size={15} style={{ color: '#FE5101' }} />
            <span className="text-gray-700 text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Inline CTA banner */}
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-xl"
      style={{ background: 'linear-gradient(90deg, #EEF2FF 0%, #DBEAFE 100%)', border: '1px solid #BFDBFE' }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: '#0B2A6B' }}
        >
          <FaBoxOpen size={20} className="text-white" />
        </div>
        <div>
          <p className="font-bold text-gray-900">Get Your DDP Quote in 2 Hours</p>
          <p className="text-sm text-gray-600">Share your shipment details and receive a complete landed cost.</p>
        </div>
      </div>
      <a
        href="/quote"
        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-bold uppercase tracking-wider whitespace-nowrap"
        style={{ background: '#0B2A6B' }}
      >
        GET FREE QUOTE <FaArrowRight size={12} />
      </a>
    </div>
  </article>
);

/* ─────────────────────────────────────────────
   POST NAVIGATION  (prev / back / next)
───────────────────────────────────────────── */
const PostNav = () => (
  <section className="py-8 bg-white border-t border-slate-100 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-4 items-center">

        {/* Prev */}
        <Link
          href={POST.prevPost.href}
          className="flex items-start gap-3 group"
        >
          <FaArrowLeft size={14} className="flex-shrink-0 mt-1 text-gray-400 group-hover:text-[#0B2A6B] transition-colors" />
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Previous Article</p>
            <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0B2A6B] transition-colors leading-snug line-clamp-2">
              {POST.prevPost.label}
            </p>
          </div>
        </Link>

        {/* Back to Blog */}
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/blog"
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#0B2A6B] transition-colors group"
          >
            <FaTh size={20} className="group-hover:text-[#FE5101] transition-colors" />
            <span className="text-[12px] font-medium">Back to Blog</span>
          </Link>
        </div>

        {/* Next */}
        <Link
          href={POST.nextPost.href}
          className="flex items-start gap-3 group justify-end text-right"
        >
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Next Article</p>
            <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0B2A6B] transition-colors leading-snug line-clamp-2">
              {POST.nextPost.label}
            </p>
          </div>
          <FaArrowRight size={14} className="flex-shrink-0 mt-1 text-gray-400 group-hover:text-[#0B2A6B] transition-colors" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function BlogPostPage() {
  return (
    <main className="font-sans antialiased bg-white">
      <Breadcrumb />
      <PostHeader />

      {/* Main content + Sidebar */}
      <section className="py-6 md:py-10 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 xl:gap-16">
            <ArticleBody />
            <Sidebar />
          </div>
        </div>
      </section>

      <PostNav />

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