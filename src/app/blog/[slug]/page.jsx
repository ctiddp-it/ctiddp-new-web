import Link from 'next/link';
import {
  FaClock,
  FaFolder,
  FaArrowRight,
  FaArrowLeft,
  FaTh,
  FaEnvelope,
  FaHeadset,
  FaWhatsapp,
} from 'react-icons/fa';
import { fetchPosts, fetchPostBySlug, fetchRelatedPosts, fetchAdjacentPosts } from '@/lib/api';
import TiptapRenderer from '@/components/blog/TiptapRenderer';
import ShareButtons from '@/components/blog/ShareButtons';
import NewsletterSubscribe from '@/components/blog/NewsletterSubscribe';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * generateStaticParams — Pre-render all published blog posts at build time.
 * Fetches all published post slugs from the API so Next.js can generate
 * static HTML for each post during the build. New posts are picked up
 * via ISR revalidation (revalidate: 60 in api.js).
 */
export async function generateStaticParams() {
  try {
    const { posts } = await fetchPosts({ limit: 100 });
    return posts
      .filter((post) => post.slug)
      .map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

/**
 * Resolve image URL — handles relative /uploads/... paths from the backend.
 */
function resolveImageUrl(url) {
  if (!url) return '/images/blog/bl.png';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = API_BASE.replace(/\/api\/?$/, '');
  return `${base}${url.startsWith('/') ? '' : '/'}${url}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/* ─────────────────────────────────────────────
   SEO METADATA (dynamic)
───────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found | CTIDDP' };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const ogImage = post.seo?.ogImage || resolveImageUrl(post.featuredImage?.url);
  const canonicalUrl = post.seo?.canonicalUrl || `https://www.ctiddp.com/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seo?.ogTitle || title,
      description: post.seo?.ogDescription || description,
      url: canonicalUrl,
      type: post.seo?.ogType || 'article',
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: post.seo?.twitterCard || 'summary_large_image',
      title: post.seo?.twitterTitle || title,
      description: post.seo?.twitterDescription || description,
      images: post.seo?.twitterImage ? [post.seo.twitterImage] : ogImage ? [ogImage] : [],
    },
  };
}

/* ─────────────────────────────────────────────
   BREADCRUMB
───────────────────────────────────────────── */
function Breadcrumb({ post }) {
  return (
    <nav className="px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-3 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#0B2A6B] transition-colors">Home</Link>
        <span className="text-gray-300">›</span>
        <Link href="/blog" className="hover:text-[#0B2A6B] transition-colors">Blog</Link>
        {post.category && (
          <>
            <span className="text-gray-300">›</span>
            <Link
              href={`/blog?category=${post.category.slug}`}
              className="hover:text-[#0B2A6B] transition-colors"
            >
              {post.category.name}
            </Link>
          </>
        )}
        <span className="text-gray-300">›</span>
        <span className="text-gray-700 font-medium">{post.title}</span>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   POST HEADER  (title + meta + image)
───────────────────────────────────────────── */
function PostHeader({ post }) {
  const imageUrl = resolveImageUrl(post.featuredImage?.url);
  const authorAvatarUrl = post.author?.avatar?.url ? resolveImageUrl(post.author.avatar.url) : null;
  const shareUrl = `https://www.ctiddp.com/blog/${post.slug}`;

  return (
    <section className="py-10 md:py-14 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left - text */}
          <div>
            {/* Category badge */}
            {post.category && (
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-5"
                style={{ background: '#EEF2FF', color: '#0B2A6B' }}
              >
                {post.category.name}
              </span>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ color: '#111827' }}>
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-gray-600 leading-relaxed mb-7 text-base">
                {post.excerpt}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm text-gray-500">
              {/* Author avatar + name */}
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 overflow-hidden"
                  style={{ background: '#0B2A6B' }}
                >
                  {authorAvatarUrl ? (
                    <img src={authorAvatarUrl} alt={post.author?.name || ''} className="w-full h-full object-cover" />
                  ) : (
                    (post.author?.name || 'CT').slice(0, 2).toUpperCase()
                  )}
                </div>
                <div>
                  <span className="font-medium text-gray-700">{post.author?.name || 'Team CTIDDP'}</span>
                  {post.author?.designation && (
                    <span className="block text-xs text-gray-400">{post.author.designation}</span>
                  )}
                </div>
              </div>
              <span className="text-gray-300">·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1">
                <FaClock size={12} /> {post.readingTime || 5} min read
              </span>
              {/* {post.category && (
                <>
                  <span className="text-gray-300">·</span>
                  <span className="flex items-center gap-1">
                    <FaFolder size={12} /> {post.category.name}
                  </span>
                </>
              )} */}
            </div>

            {/* Share row */}
            <ShareButtons url={shareUrl} title={post.title} />
          </div>

          {/* Right - featured image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={imageUrl}
              alt={post.featuredImage?.alt || post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            {post.featuredImage?.caption && (
              <p className="text-xs text-gray-400 text-center py-2 bg-slate-50">
                {post.featuredImage.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────── */
function TableOfContents({ toc }) {
  if (!toc || toc.length === 0) return null;

  return (
    <div className="border border-slate-200 rounded-xl p-6 mb-8 bg-slate-50/50">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
        TABLE OF CONTENTS
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {toc.map((item, index) => (
          <a
            key={item.id || index}
            href={`#${item.id}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0181EA] transition-colors group"
          >
            <span className="text-gray-400 text-xs w-5 flex-shrink-0">{index + 1}.</span>
            <span className="group-hover:underline">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TAG CHIPS (for post detail)
───────────────────────────────────────────── */
function PostTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-100">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">Tags:</span>
      {tags.map((tag) => (
        <Link
          key={tag._id}
          href={`/blog?tag=${tag.slug}`}
          className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-gray-600 hover:bg-[#0B2A6B]/10 hover:text-[#0B2A6B] transition-all"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SIDEBAR
───────────────────────────────────────────── */
function Sidebar({ relatedPosts }) {
  return (
    <aside className="space-y-6 sticky top-6">
      {/* Newsletter widget */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#FE5101' }}
          >
            <FaEnvelope size={16} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Stay Updated</p>
            <p className="text-xs text-gray-500 leading-snug">Get the latest shipping insights and tips straight to your inbox.</p>
          </div>
        </div>
       <NewsletterSubscribe />
      </div>

      {/* Related / Popular articles */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-5">Related Articles</h3>
          <div className="space-y-4">
            {relatedPosts.map((article) => (
              <Link key={article._id || article.slug} href={`/blog/${article.slug}`} className="flex gap-3 group">
                <div className="flex-shrink-0 w-16 h-14 rounded-lg overflow-hidden">
                  <img
                    src={resolveImageUrl(article.featuredImage?.url)}
                    alt={article.featuredImage?.alt || article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0B2A6B] transition-colors leading-snug line-clamp-2 mb-1">
                    {article.title}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    <span>{formatDate(article.publishedAt)}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><FaClock size={9} /> {article.readingTime || 5} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

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
}

/* ─────────────────────────────────────────────
   POST NAVIGATION  (prev / back / next)
───────────────────────────────────────────── */
function PostNav({ adjacent }) {
  if (!adjacent) return null;

  return (
    <section className="py-8 bg-white border-t border-slate-100 px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 items-center">

          {/* Prev */}
          {adjacent.prev ? (
            <Link
              href={`/blog/${adjacent.prev.slug}`}
              className="flex items-start gap-3 group"
            >
              <FaArrowLeft size={14} className="flex-shrink-0 mt-1 text-gray-400 group-hover:text-[#0B2A6B] transition-colors" />
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Previous Article</p>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0B2A6B] transition-colors leading-snug line-clamp-2">
                  {adjacent.prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

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
          {adjacent.next ? (
            <Link
              href={`/blog/${adjacent.next.slug}`}
              className="flex items-start gap-3 group justify-end text-right"
            >
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Next Article</p>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0B2A6B] transition-colors leading-snug line-clamp-2">
                  {adjacent.next.title}
                </p>
              </div>
              <FaArrowRight size={14} className="flex-shrink-0 mt-1 text-gray-400 group-hover:text-[#0B2A6B] transition-colors" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE (Server Component)
───────────────────────────────────────────── */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  // Fetch all data in parallel
  const [post, relatedPosts, adjacent] = await Promise.all([
    fetchPostBySlug(slug),
    fetchRelatedPosts(slug),
    fetchAdjacentPosts(slug),
  ]);

  if (!post) {
    return (
      <main className="font-sans antialiased bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-500 mb-6">The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold"
            style={{ background: '#0B2A6B' }}
          >
            <FaArrowLeft size={12} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const shareUrl = `https://www.ctiddp.com/blog/${post.slug}`;
  const canonicalUrl = post.seo?.canonicalUrl || shareUrl;

  return (
    <main className="font-sans antialiased bg-white">
      {/* JSON-LD — BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.seo?.metaDescription || post.excerpt,
            image: resolveImageUrl(post.featuredImage?.url),
            author: {
              '@type': 'Person',
              name: post.author?.name || 'Team CTIDDP',
            },
            publisher: {
              '@type': 'Organization',
              name: 'CTIDDP',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png',
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
            url: canonicalUrl,
          }).replace(/</g, '\\u003c'),
        }}
      />

      <Breadcrumb post={post} />
      <PostHeader post={post} />

      {/* Main content + Sidebar */}
      <section className="py-6 md:py-10 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 xl:gap-16">
            {/* Article body */}
            <article className="prose-custom space-y-0">
              <TableOfContents toc={post.tableOfContents} />
              <TiptapRenderer content={post.content} />
              <PostTags tags={post.tags} />
            </article>

            <Sidebar relatedPosts={relatedPosts} />
          </div>
        </div>
      </section>

      <PostNav adjacent={adjacent} />

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .prose-custom th {
          background-color: #EEF2FF !important;
          background: #EEF2FF !important;
          color: #0B2A6B !important;
        }
      `}</style>
    </main>
  );
}
