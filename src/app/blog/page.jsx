import { Suspense } from 'react';
import {
  FaEnvelope,
} from 'react-icons/fa';
import { fetchPosts, fetchFeaturedPost, fetchCategories, fetchTags } from '@/lib/api';
import BlogListingClient from '@/components/blog/BlogListingClient';
import NewsletterSubscribe from '@/components/blog/NewsletterSubscribe';


/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata = {
  title: 'Blog & Insights | CTIDDP',
  description:
    'Practical tips, expert insights, and the latest updates on global trade, shipping and DDP logistics from China to India.',
  openGraph: {
    title: 'Blog & Insights | CTIDDP',
    description:
      'Practical tips, expert insights, and the latest updates on global trade, shipping and DDP logistics.',
    url: 'https://www.ctiddp.com/blog/',
    type: 'website',
  },
};

/* ─────────────────────────────────────────────
   HERO SECTION (static — no data needed)
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/blog/ctiddp-blog-banner.png"
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
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   NEWSLETTER SECTION (static)
───────────────────────────────────────────── */
function NewsletterSection() {
  return (
    <section className="py-14 bg-white px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
  <div className="max-w-7xl mx-auto">
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 md:p-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">

        {/* Left */}
        <div className="flex items-start gap-4 flex-1">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#FE5101' }}
          >
            <FaEnvelope size={18} className="text-white" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Stay Updated with Global Trade Insights
            </h3>

            <p className="text-gray-500 leading-relaxed max-w-2xl">
              Subscribe to our newsletter and receive the latest logistics insights,
              DDP shipping updates, import-export guides, and expert advice directly
              in your inbox.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[420px]">
          <NewsletterSubscribe />
        </div>

      </div>
    </div>
  </div>
</section>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA BANNER (static)
───────────────────────────────────────────── */
function CTASection() {
  return (
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
}

/* ─────────────────────────────────────────────
   PAGE (Server Component)
───────────────────────────────────────────── */
export default async function InsightsPage() {
  // Fetch all initial data in parallel on the server
  const [postsResult, featured, categories, tags] = await Promise.all([
    fetchPosts({ page: 1, limit: 8 }),
    fetchFeaturedPost(),
    fetchCategories(),
    fetchTags(),
  ]);

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

      <HeroSection />

      <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading blog...</div>}>
        <BlogListingClient
          initialPosts={postsResult.posts}
          initialPagination={postsResult.pagination}
          initialFeatured={featured}
          categories={categories}
          tags={tags}
        />
      </Suspense>

      <NewsletterSection />
      <CTASection />
    </main>
  );
}