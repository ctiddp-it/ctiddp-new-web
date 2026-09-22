'use client';

import { useEffect, useState } from 'react';
import BlogPostView, { resolveBlogImageUrl } from './BlogPostView';

function setMeta(key, value, property = false) {
  const attribute = property ? 'property' : 'name';
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  if (element.content !== (value || '')) element.content = value || '';
}

function applyMetadata(post) {
  const seo = post.seo || {};
  const title = seo.metaTitle || post.title || 'Blog preview';
  const description = seo.metaDescription || post.excerpt || '';
  const canonical = seo.canonicalUrl || `https://www.ctiddp.com/blog/${post.slug || ''}`;
  const image = resolveBlogImageUrl(seo.ogImage || post.featuredImage?.url);
  if (document.title !== `${title} | CTIDDP`) document.title = `${title} | CTIDDP`;
  setMeta('description', description);
  setMeta('og:title', seo.ogTitle || title, true);
  setMeta('og:description', seo.ogDescription || description, true);
  setMeta('og:image', image, true);
  setMeta('og:url', canonical, true);
  setMeta('og:type', seo.ogType || 'article', true);
  setMeta('twitter:title', seo.twitterTitle || title);
  setMeta('twitter:description', seo.twitterDescription || description);
  setMeta('twitter:image', seo.twitterImage ? resolveBlogImageUrl(seo.twitterImage) : image);
  setMeta('twitter:card', seo.twitterCard || 'summary_large_image');
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
  if (link.getAttribute('href') !== canonical) link.setAttribute('href', canonical);
}

export default function BlogPreviewClient() {
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState('');
  // Next can stream route metadata after hydration. Keep this ephemeral snapshot's
  // head in sync, using idempotent updates; disconnect when the preview unmounts.
  useEffect(() => {
    if (!payload) return;
    const sync = () => applyMetadata(payload.post);
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.head, { childList: true, subtree: true, attributes: true, characterData: true });
    return () => observer.disconnect();
  }, [payload]);
  useEffect(() => {
    const nonce = new URLSearchParams(window.location.search).get('preview');
    let origin;
    try { origin = new URL(process.env.NEXT_PUBLIC_OPERATIONS_URL || 'http://localhost:5173').origin; }
    catch { setError('The website preview origin is not configured correctly.'); return; }
    if (!nonce || !window.opener) { setError('Open Preview from the Operations Panel.'); return; }
    let received = false;
    const receive = event => {
      if (event.source !== window.opener || event.origin !== origin || event.data?.nonce !== nonce) return;
      if (event.data.type === 'CTIDDP_PREVIEW_ERROR') {
        received = true;
        setError(event.data.message || 'Unable to prepare preview.');
        return;
      }
      if (event.data.type !== 'CTIDDP_BLOG_PREVIEW' || !event.data.post || typeof event.data.post !== 'object') return;
      received = true;
      setError('');
      setPayload(event.data);
    };
    const ready = () => {
      if (!received) window.opener?.postMessage({ type: 'CTIDDP_PREVIEW_READY', nonce }, origin);
    };
    window.addEventListener('message', receive);
    ready();
    const retry = window.setInterval(ready, 500);
    const timeout = window.setTimeout(() => {
      window.clearInterval(retry);
      if (!received) setError('Preview timed out. Keep the editor open, check the website/panel origin settings, and open Preview again.');
    }, 45000);
    return () => {
      window.clearInterval(retry);
      window.clearTimeout(timeout);
      window.removeEventListener('message', receive);
    };
  }, []);

  if (payload) return <BlogPostView post={payload.post} relatedPosts={payload.relatedPosts} adjacent={payload.adjacent} />;
  return <main className="min-h-[55vh] flex items-center justify-center bg-white px-6"><div className="text-center" role="status"><h1 className="text-2xl font-bold text-gray-900 mb-3">{error ? 'Preview unavailable' : 'Preparing your preview…'}</h1><p className="text-gray-500">{error || 'Loading the current article.'}</p></div></main>;
}
