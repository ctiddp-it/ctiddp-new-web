import BlogPreviewClient from '@/components/blog/BlogPreviewClient';

export const metadata = {
  title: 'Blog preview',
  robots: { index: false, follow: false },
};

export default function BlogPreviewPage() {
  return <BlogPreviewClient />;
}
