'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  FaSearch,
  FaArrowRight,
  FaClock,
  FaUserCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Resolve image URL — handles relative /uploads/... paths from the backend.
 */
function resolveImageUrl(url) {
  if (!url) return '/images/blog/bl.png';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  // Relative path from backend
  const base = API_BASE.replace(/\/api\/?$/, '');
  return `${base}${url.startsWith('/') ? '' : '/'}${url}`;
}

/**
 * Format a date string to human-readable.
 */
function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/* ─────────────────────────────────────────────
   SEARCH + FILTER BAR
───────────────────────────────────────────── */
function SearchFilterBar({ search, setSearch, category, setCategory, categories }) {
  return (
    <section className="py-6 bg-white border-b border-slate-100 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles by title, topic, or keyword..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-gray-700 outline-none focus:border-[#0B2A6B] focus:ring-1 focus:ring-[#0B2A6B]/20 transition-all placeholder:text-gray-400"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full sm:w-52">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none py-3 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-lg text-sm text-gray-700 outline-none focus:border-[#0B2A6B] focus:ring-1 focus:ring-[#0B2A6B]/20 transition-all cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TAG CHIPS
───────────────────────────────────────────── */
function TagChips({ tags, activeTag, setActiveTag }) {
  if (!tags || tags.length === 0) return null;

  return (
    <section className="py-5 bg-white border-b border-slate-100 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Popular Tags:
          </span>
          {tags.map((tag) => (
            <button
              key={tag._id}
              onClick={() => setActiveTag(activeTag === tag.slug ? '' : tag.slug)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTag === tag.slug
                  ? 'bg-[#0B2A6B] text-white'
                  : 'bg-slate-100 text-gray-600 hover:bg-[#0B2A6B]/10 hover:text-[#0B2A6B]'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURED ARTICLE
───────────────────────────────────────────── */
function FeaturedArticle({ post }) {
  if (!post) return null;

  const imageUrl = resolveImageUrl(post.featuredImage?.url);

  return (
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
        <Link href={`/blog/${post.slug}`} className="block group">
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[320px] flex items-end">
            {/* BG image */}
            <img
              src={imageUrl}
              alt={post.featuredImage?.alt || post.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient overlay */}
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
                  {post.title}
                </h2>
                <p className="text-white/75 text-sm md:text-base mb-6 max-w-lg leading-relaxed">
                  {post.excerpt}
                </p>
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0181EA] flex items-center justify-center overflow-hidden">
                      {post.author?.avatar?.url ? (
                        <img
                          src={resolveImageUrl(post.author.avatar.url)}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaUserCircle size={18} className="text-white" />
                      )}
                    </div>
                    <span className="text-white/80 text-sm font-medium">
                      {post.author?.name || 'Team CTIDDP'}
                    </span>
                  </div>
                  <span className="text-white/50 text-sm">|</span>
                  <span className="text-white/70 text-sm">{formatDate(post.publishedAt)}</span>
                  <span className="text-white/50 text-sm">·</span>
                  <span className="flex items-center gap-1 text-white/70 text-sm">
                    <FaClock size={12} /> {post.readingTime || 5} min read
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
}

/* ─────────────────────────────────────────────
   CATEGORIES / TOPICS GRID
───────────────────────────────────────────── */
function CategoriesGrid({ categories, activeCategory, setCategory }) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-10 bg-white border-b border-slate-100 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 text-sm font-medium mb-6 tracking-wide uppercase">
          Explore by Topic
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setCategory(activeCategory === cat.slug ? '' : cat.slug)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all group cursor-pointer ${
                activeCategory === cat.slug
                  ? 'border-[#0B2A6B] shadow-md bg-[#EEF2FF]'
                  : 'border-slate-200 hover:border-[#0B2A6B] hover:shadow-md bg-white'
              }`}
            >
              <span className={`text-[13px] font-semibold text-center leading-tight ${
                activeCategory === cat.slug ? 'text-[#0B2A6B]' : 'text-gray-800'
              }`}>
                {cat.name}
              </span>
              <span className="text-[11px] text-gray-400">{cat.postCount} Articles</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ARTICLES GRID
───────────────────────────────────────────── */
function ArticlesGrid({ posts, isLoading }) {
  if (isLoading) {
    return (
      <section className="py-12 md:py-16 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden animate-pulse">
                <div className="h-44 bg-slate-200" />
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-slate-200 rounded w-1/2" />
                  <div className="h-4 bg-slate-200 rounded w-full" />
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                  <div className="h-3 bg-slate-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="py-12 md:py-16 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-gray-500 text-lg mb-2">No articles found</p>
          <p className="text-gray-400 text-sm">Try adjusting your search or filters.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold" style={{ color: '#0B2A6B' }}>
            Latest Articles
          </h2>
        </div>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => {
            const imageUrl = resolveImageUrl(post.featuredImage?.url);
            return (
              <Link key={post._id || post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  {/* Image area */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={post.featuredImage?.alt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    {post.category && (
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-md"
                        style={{ background: '#0B2A6B' }}
                      >
                        {post.category.name}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-400 text-[11px] mb-2">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <FaClock size={10} /> {post.readingTime || 5} min read
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGINATION
───────────────────────────────────────────── */
function Pagination({ pagination, currentPage, setPage }) {
  if (!pagination || pagination.pages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= pagination.pages; i++) {
    pages.push(i);
  }

  // Show max 5 pages at a time with ellipsis
  const getVisiblePages = () => {
    if (pagination.pages <= 5) return pages;
    if (currentPage <= 3) return [...pages.slice(0, 5)];
    if (currentPage >= pagination.pages - 2) return [...pages.slice(-5)];
    return pages.slice(currentPage - 3, currentPage + 2);
  };

  const visiblePages = getVisiblePages();

  return (
    <section className="py-8 bg-slate-50 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        {/* Prev */}
        <button
          onClick={() => setPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-gray-500 hover:border-[#0B2A6B] hover:text-[#0B2A6B] transition-colors disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-gray-500 cursor-pointer disabled:cursor-not-allowed"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* First page + ellipsis */}
        {visiblePages[0] > 1 && (
          <>
            <button
              onClick={() => setPage(1)}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-gray-600 hover:border-[#0B2A6B] hover:text-[#0B2A6B] transition-colors cursor-pointer"
            >
              1
            </button>
            {visiblePages[0] > 2 && <span className="text-gray-400 px-1">...</span>}
          </>
        )}

        {/* Page numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
              page === currentPage
                ? 'bg-[#0B2A6B] border-[#0B2A6B] text-white'
                : 'border-slate-200 text-gray-600 hover:border-[#0B2A6B] hover:text-[#0B2A6B]'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis + last page */}
        {visiblePages[visiblePages.length - 1] < pagination.pages && (
          <>
            {visiblePages[visiblePages.length - 1] < pagination.pages - 1 && (
              <span className="text-gray-400 px-1">...</span>
            )}
            <button
              onClick={() => setPage(pagination.pages)}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-sm font-medium text-gray-600 hover:border-[#0B2A6B] hover:text-[#0B2A6B] transition-colors cursor-pointer"
            >
              {pagination.pages}
            </button>
          </>
        )}

        {/* Next */}
        <button
          onClick={() => setPage(Math.min(pagination.pages, currentPage + 1))}
          disabled={currentPage === pagination.pages}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-gray-500 hover:border-[#0B2A6B] hover:text-[#0B2A6B] transition-colors disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-gray-500 cursor-pointer disabled:cursor-not-allowed"
        >
          <FaChevronRight size={12} />
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN CLIENT COMPONENT
───────────────────────────────────────────── */
export default function BlogListingClient({
  initialPosts,
  initialPagination,
  initialFeatured,
  categories,
  tags,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read initial state from URL
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [activeTag, setActiveTag] = useState(searchParams.get('tag') || '');
  const [page, setPage] = useState(parseInt(searchParams.get('page'), 10) || 1);

  const [posts, setPosts] = useState(initialPosts);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(false);

  // Determine if any filter is active
  const hasFilters = search || category || activeTag || page > 1;

  // Fetch posts when filters change
  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('limit', '8');
      if (page > 1) params.set('page', page);
      if (search) params.set('search', search);
      if (category) params.set('category', category);
      if (activeTag) params.set('tag', activeTag);

      const res = await fetch(`${API_BASE}/blog?${params.toString()}`);
      const json = await res.json();
      setPosts(json.data || []);
      setPagination(json.pagination || { page: 1, limit: 8, total: 0, pages: 0 });
    } catch (err) {
      console.error('[BlogListingClient] Fetch error:', err.message);
    } finally {
      setIsLoading(false);
    }
  }, [search, category, activeTag, page]);

  // Sync URL with filter state
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category) params.set('category', category);
    if (activeTag) params.set('tag', activeTag);
    if (page > 1) params.set('page', page.toString());

    const qs = params.toString();
    const newUrl = qs ? `/blog?${qs}` : '/blog';
    router.replace(newUrl, { scroll: false });
  }, [search, category, activeTag, page, router]);

  // Debounced fetch on filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPosts();
    }, 300);
    return () => clearTimeout(timer);
  }, [fetchPosts]);

  // Reset page when filters change
  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setPage(1);
  };

  const handleTagChange = (value) => {
    setActiveTag(value);
    setPage(1);
  };

  return (
    <>
      <SearchFilterBar
        search={search}
        setSearch={handleSearchChange}
        category={category}
        setCategory={handleCategoryChange}
        categories={categories}
      />

      {/* Show featured only when no filters are active */}
      {!hasFilters && <FeaturedArticle post={initialFeatured} />}

      <TagChips tags={tags} activeTag={activeTag} setActiveTag={handleTagChange} />

      {/* Show categories grid only when no filters are active */}
      {!hasFilters && (
        <CategoriesGrid
          categories={categories}
          activeCategory={category}
          setCategory={handleCategoryChange}
        />
      )}

      <ArticlesGrid posts={posts} isLoading={isLoading} />
      <Pagination pagination={pagination} currentPage={page} setPage={setPage} />

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
