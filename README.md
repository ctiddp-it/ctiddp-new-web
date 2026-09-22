# CTIDDP public website

Next.js 16 App Router with React 19, Tailwind 4, Montserrat/Inter via next/font/google, and server-rendered published blog pages. Exact installed versions are pinned by package-lock.json. See [architecture review](../docs/BLOG_ARCHITECTURE_REVIEW.md), [environment audit](../docs/ENVIRONMENT_AUDIT.md) and [asset guide](public/README.md).

## Setup

Use Node.js 22 LTS. Run npm ci, create .env from .env.example for a new setup, then npm run dev. Open http://localhost:3000. The API must be reachable at localhost:5000 for real content and forms.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_OPERATIONS_URL=http://localhost:5173
META_PIXEL_ID=
META_ACCESS_TOKEN=
META_TEST_EVENT_CODE=
```

The API URL includes /api. The operations URL is the exact allowed preview sender origin. Both NEXT_PUBLIC_ values are compiled into browser bundles, so production changes require a rebuild. Never prefix the Meta access token with NEXT_PUBLIC_. Keep it only in the server environment. Use a test event code only for development; remove it for production.

Browser Pixel/GTM/Clarity IDs are currently configured in src/app/layout.jsx. META_PIXEL_ID configures server conversions; it must match the intended browser Pixel. Environment changes alone do not replace hard-coded marketing IDs.

## Blog architecture

- src/app/blog/page.jsx and BlogListingClient: public listing, search, filtering and pagination.
- src/app/blog/[slug]/page.jsx: server-side article/related/adjacent fetching and dynamic SEO metadata.
- src/lib/api.js: public fetch helpers, 60-second Next revalidation, fallback results on failures.
- src/components/blog/BlogPostView.jsx: shared presentation for published and preview views. It has no top-level client directive; published articles remain server-renderable, with interactive child components.
- TiptapRenderer → RichText → richText allowlist: safe structured rendering of headings, marks, links, lists, tables and images.
- src/app/sitemap.js: static routes plus published slugs; src/app/robots.js: crawler policy.

generateStaticParams pre-renders up to the first 100 returned published slugs. Other slugs are handled dynamically by Next. There is no publish webhook for immediate revalidation: the public page can lag editorial changes because cached data is used.

The shared layout includes MegaNav, Footer, chat/scroll helpers and marketing integrations. BlogPostView includes the article header, author/date/read time, featured image, contents, tags, newsletter, related articles and adjacent navigation.

## Editor preview

/blog/preview has noindex/nofollow metadata and renders BlogPreviewClient. It accepts only messages from its opener, the configured operations origin and the matching nonce. It retries readiness during startup and shows an error on missing opener, timeout or failed backend preparation.

The panel calls the protected backend preview preparation endpoint; the website receives the prepared public snapshot. The preview does not request published-only slug endpoints, save a post or publish anything. Content and related selection run through the backend publication helpers. Current SEO fields are applied to the browser head.

Preview is an ephemeral editorial tab, not a shareable URL or a social-crawler preview. For a new draft, publication time and adjacent relationships represent the current snapshot and can change before actual publication. The site-wide ViewContent conversion helper skips preview, but globally installed third-party PageView/marketing scripts still exist in the layout.

## Forms and integrations

Home, Contact, Quote and Canton Fair forms submit to Express modules. Shared form helpers validate/normalize input and report conversion events. /api/meta-capi is a server conversion relay. Do not remove or delay conversions purely to improve Lighthouse scores without reviewing attribution.

The newsletter route forwards to a configured Google Form. It currently does not verify the upstream response status before reporting success; see the review follow-ups.

Home/quote video embeds load after interaction. Hero images are responsive; the ticker respects reduced motion. Optimized images use WebP with inline Content-Disposition. This enables opening them in a tab; it does not preserve the original PNG/JPEG format. Original public asset URLs remain available.

## Commands

| Command | Purpose |
| --- | --- |
| npm run dev | Next dev server, port 3000 |
| npm run build | Production build and static generation |
| npm start | Serve the production build |
| npm run lint | ESLint |
| npm run test:blog-preview | New-tab messaging, unsaved rendering, metadata, reload and direct-open regression |
| npm run test:performance-forms | Isolated form validation/submission/retention tests |
| npm run test:performance-layout | Responsive hero, navigation, reduced-motion and prefetch tests |

Browser tests need Playwright and an installed browser; configure PLAYWRIGHT_MODULE if the local runtime fallback is unavailable. Start a production server first. TEST_BASE_URL overrides the test server origin. Default preview origin is localhost:3000, forms use 127.0.0.1:3001, layout uses 127.0.0.1:3003. Form submissions and conversion requests are intercepted.

next/font needs network access to Google Fonts during build. The blog API is read during static generation. A successful build with an unavailable API is not proof that all content exists: helpers intentionally return fallbacks.

## Deployment

Deploy on a Node-capable Next host (Node routes, ISR and conversion relay require a server). Configure the HTTPS API and operations origins before build. Add real frontend origins to backend CLIENT_URLS. Serve uploaded media durably from the backend/media origin.

next.config.mjs currently allows localhost:5000/uploads/** for remote next/image optimization. Add the actual production media host if using remote next/image sources. Blog media currently uses plain image elements.

Do not run next dev and next build simultaneously against the same .next directory. Stop the dev server, build, then restart. Mixed build/dev artifacts can produce missing chunks and hydration errors.
For parallel local verification, set NEXT_DIST_DIR=.next-preview-check for both the build and the separate start process (for example port 3005). This optional server-only setting isolates output from an existing dev server.

Known operational gaps and launch gates are in the shared review; historical Lighthouse measurements in devnotes.md are not claims about the current deployed score.
