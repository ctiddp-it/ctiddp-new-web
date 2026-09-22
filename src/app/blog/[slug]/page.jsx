import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchPosts, fetchPostBySlug, fetchRelatedPosts, fetchAdjacentPosts } from '@/lib/api';
import BlogPostView from '@/components/blog/BlogPostView';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

function resolveImageUrl(url) {
  if (!url) return '/images/blog/bl.png';
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE.replace(/\/api\/?$/, '')}${url.startsWith('/') ? '' : '/'}${url}`;
}

export async function generateStaticParams() {
  try {
    const { posts } = await fetchPosts({ limit: 100 });
    return posts.filter((post) => post.slug).map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return { title: 'Post Not Found | CTIDDP' };

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const ogImage = post.seo?.ogImage || resolveImageUrl(post.featuredImage?.url);
  const canonicalUrl = post.seo?.canonicalUrl || `https://www.ctiddp.com/blog/${post.slug}`;
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, relatedPosts, adjacent] = await Promise.all([
    fetchPostBySlug(slug),
    fetchRelatedPosts(slug),
    fetchAdjacentPosts(slug),
  ]);

  if (!post) {
    return <main className="font-sans antialiased bg-white min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1><p className="text-gray-500 mb-6">The article you&apos;re looking for doesn&apos;t exist or has been removed.</p><Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold" style={{ background: '#0B2A6B' }}><FaArrowLeft size={12} /> Back to Blog</Link></div></main>;
  }

  return <BlogPostView post={post} relatedPosts={relatedPosts} adjacent={adjacent} />;
}
