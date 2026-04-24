## feat(seo, services): fix sitemap issues, normalize URLs, add service pages with schema

Sitemap & Robots Fixes

Fixed sitemap URL generation in src/app/sitemap.js
Removed trailing slash from base URL (https://www.ctiddp.com)
Switched to new URL(r.url, BASE).toString() for safe URL construction
Eliminated double-slash URLs (//) in sitemap entries
Normalized robots.txt config in src/app/robots.js
Updated host to https://www.ctiddp.com (no trailing slash)
Ensured sitemap points to /sitemap.xml

Canonical & URL Normalization

Removed trailing slashes from canonical URLs on non-home pages to avoid duplication and redirect ambiguity:
/about, /how-it-works, /services, /eco-system, /canton-fair, /blog, /contact, /quote
Verified and cleaned any remaining malformed absolute URLs across the codebase

Service Pages Implementation

Created reusable ServiceDetailPage component:
Breadcrumb navigation
Hero section with H1 + intro
Structured content blocks (H2/H3)
Bullet sections and table support
CTA section with quote action
Built and populated 8 service detail pages:
/services/global-ddp-shipping
/services/supplier-payments
/services/qc-inspection
/services/warehousing
/services/customs-clearance
/services/last-mile-delivery
/services/multi-vendor-consolidation
/services/canton-fair-support
Added canonical metadata for each service page

SEO & Crawlability Improvements

Updated sitemap to include all service detail routes
Improved internal linking from /services listing page to all detail pages
Ensured proper crawl paths and indexability

Structured Data (JSON-LD)

Implemented reusable JSON-LD injection in ServiceDetailPage:
Service
WebPage
BreadcrumbList
Added consistent schema across all service pages:
Stable @id values
Canonical URL alignment
Organization/provider reference
Proper breadcrumb hierarchy

Quality & Validation

Fixed JSX formatting issues from bulk updates
Ran lint checks across all updated files (no errors)
Verified sitemap no longer contains malformed URLs

Impact

Resolves Search Console issues:
“Page with redirect” (caused by malformed sitemap URLs)
“Alternate page with proper canonical tag”
Improves indexing, canonical clarity, and SEO structure
Enables full crawlability of newly added service pages