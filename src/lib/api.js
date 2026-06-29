/**
 * api.js — Centralized fetch functions for the blog CMS API.
 *
 * Uses server-side fetch with ISR revalidation for Next.js Server Components.
 * All functions handle errors gracefully with fallback values.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Internal fetch wrapper with error handling and ISR caching.
 */
async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      ...options,
    });
    if (!res.ok) {
      console.error(`[api] ${res.status} ${res.statusText} — ${url}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`[api] Fetch failed — ${url}`, err.message);
    return null;
  }
}

// ─── Blog Posts ───

/**
 * Fetch published posts with optional filters.
 * @param {{ page?, limit?, search?, category?, tag? }} params
 */
export async function fetchPosts(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.page) searchParams.set('page', params.page);
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.search) searchParams.set('search', params.search);
  if (params.category) searchParams.set('category', params.category);
  if (params.tag) searchParams.set('tag', params.tag);

  const qs = searchParams.toString();
  const json = await apiFetch(`/blog${qs ? `?${qs}` : ''}`);
  return {
    posts: json?.data || [],
    pagination: json?.pagination || { page: 1, limit: 8, total: 0, pages: 0 },
  };
}

/**
 * Fetch the latest featured published post.
 */
export async function fetchFeaturedPost() {
  const json = await apiFetch('/blog/featured');
  return json?.data || null;
}

/**
 * Fetch a single post by slug.
 */
export async function fetchPostBySlug(slug) {
  const json = await apiFetch(`/blog/${encodeURIComponent(slug)}`);
  return json?.data || null;
}

/**
 * Fetch related posts for a given post slug.
 */
export async function fetchRelatedPosts(slug) {
  const json = await apiFetch(`/blog/${encodeURIComponent(slug)}/related`);
  return json?.data || [];
}

/**
 * Fetch adjacent (prev/next) posts for a given post slug.
 */
export async function fetchAdjacentPosts(slug) {
  const json = await apiFetch(`/blog/${encodeURIComponent(slug)}/adjacent`);
  return json?.data || { prev: null, next: null };
}

// ─── Categories ───

/**
 * Fetch all categories with published post counts.
 */
export async function fetchCategories() {
  const json = await apiFetch('/categories/public');
  return json?.data || [];
}

// ─── Tags ───

/**
 * Fetch tags that have at least one published post.
 */
export async function fetchTags() {
  const json = await apiFetch('/tags/public');
  return json?.data || [];
}
