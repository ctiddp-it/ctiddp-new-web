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




# Frontend Forms Upgrade - Dev Notes

## Overview
Refactored and standardized all public website forms using a shared architecture based on:

- React Hook Form
- Zod validation
- Shared submit utilities
- Consistent UX/error handling

Forms covered:
- Contact Form
- Quote Form
- Canton Fair Form

---

# Shared Form Architecture

## Added Shared Utilities

### Files
- `src/lib/forms/common.js`
- `src/lib/forms/schemas.js`
- `src/lib/forms/submitForm.js`

### Purpose
Centralize:
- validation rules
- sanitization helpers
- regex patterns
- API submission handling
- reusable form schemas

This reduces duplicated validation logic across forms.

---

# Validation Improvements

## Implemented via Zod

### Common Rules
- required validation
- trim handling
- min/max length validation
- regex validation
- email validation
- phone validation
- enum validation
- no-HTML/script injection prevention

### Benefits
- consistent validation behavior
- safer inputs
- cleaner form components
- scalable architecture

---

# React Hook Form Integration

All forms migrated to:
- `react-hook-form`
- `@hookform/resolvers/zod`

### Benefits
- reduced rerenders
- cleaner state management
- better performance
- easier error handling

---

# UX Improvements

## Loading States
Used:
```js
formState.isSubmitting
```

### Behavior
- disables submit button
- prevents accidental double submissions
- improves UX clarity

---

## Error Handling

### Before
Raw backend/server errors could surface.

### Now
Only safe user-friendly messages are shown.

Example:
```txt
Something went wrong. Please try again later.
```

---

## Success States

Improved success feedback shown after valid submission.

---

# Quote Form Changes

Updated Quote form fields to optional:

- service type
- delivery location
- estimated weight
- estimated volume
- product expected budget
- supplier name
- supplier contact details

Updated:
- frontend schema
- form UI behavior
- backend model compatibility

---

# ESLint Fix

## Problem
Lint setup became incompatible due to config/version mismatch.

## Fix
- migrated to working flat-config setup
- configured `@next/eslint-plugin-next`
- ignored `.next/`
- aligned ESLint/plugin versions

Result:
```bash
npm run lint
```
works successfully again.

---

# Future Improvements

## Recommended Next Steps
- add Cloudflare Turnstile
- add analytics tracking
- add form abandonment tracking
- add reusable field components
- add admin lead dashboard
- add toast notification abstraction


## Commit: feat(revamp): Initial commit; complete CTIDDP website UI/UX redesign implementation\
# CTIDDP Website Revamp - Implementation Summary

## Overview
Successfully completed the CTIDDP website redesign and modernization initiative.

The project transformed the website from a dark-themed, serif-based interface into a modern, light-themed logistics platform while preserving all business logic, APIs, form workflows, validations, SEO configurations, and application functionality.

---

## Major Changes Implemented

### Design System

* Introduced a unified design system based on the approved logistics brand aesthetic.
* Established consistent color tokens, typography scales, spacing rules, shadows, and component patterns.
* Migrated all pages to the new design language.
* Standardized responsive behavior across desktop, tablet, and mobile devices.

### Theme Simplification

* Removed dark mode support.
* Removed ThemeProvider integration.
* Removed ThemeToggle functionality.
* Eliminated all dark theme CSS references.
* Converted the application to a dedicated light-theme experience.

### UI Modernization

* Replaced legacy layouts with modern card-based interfaces.
* Improved visual hierarchy and content readability.
* Standardized CTA placement and interaction patterns.
* Added reusable UI primitives for consistent implementation.

### Component Architecture

Created a reusable component library including:

* PageHero
* CTABanner
* StepTimeline
* IconCard
* StatBar
* TeamCard
* OfficeCard
* TestimonialCard
* TrustPill
* BlogCard
* NewsletterCTA
* FAQSection
* ConnectChannel
* ComparisonTable
* PhaseCard
* Additional shared UI utilities

### Homepage Redesign

Implemented:

* New static hero section
* Services overview
* Process timeline
* Trust indicators
* Client testimonials
* Partner showcase

Removed:

* Globe visualization
* Legacy comparison sections
* Inline quote form
* Video CTA section
* Obsolete homepage components

### Page Revamps

Redesigned:

* Homepage
* About
* How It Works
* Services
* Ecosystem
* Quote
* Contact
* Canton Fair
* Blog Listing
* Blog Detail
* Legal Pages

Implemented a unified visual structure across all pages.

### Service Pages

Created a standardized service-detail page template featuring:

* Hero section
* Service overview
* Feature highlights
* Process flow
* Related services
* Conversion-focused CTA blocks

### Performance & Cleanup

Removed unused functionality and dependencies:

* Custom cursor
* Legacy scroll reveal implementation
* Dark mode infrastructure
* Globe-related visualization dependencies
* Obsolete page components

Performed code cleanup and component consolidation to improve maintainability.

---

## Business Logic Preservation

The redesign preserved:

* Form validation schemas
* Form submission workflows
* API integrations
* SEO metadata
* Routing structure
* WhatsApp integrations
* Existing content management logic

No business workflows were altered during the redesign.

---

## Testing & Validation

Validated:

* Responsive layouts
* Navigation flows
* Form submissions
* Browser compatibility
* SEO integrity
* Accessibility improvements
* Cross-page visual consistency

---

## Outcome

The CTIDDP platform now follows a modern logistics-focused design system with improved usability, scalability, maintainability, and conversion-focused user experience while retaining all existing operational functionality.


## Commit: refactor(typography): centralize font system and update homepage sections

- replace Poppins-only setup with Montserrat (headings) and Inter (body)
- add self-hosted fonts via next/font/google
- introduce --font-heading and --font-body theme tokens
- apply global typography defaults through globals.css
- migrate StatsSection digit cells to heading font token
- remove legacy font references and external Google Fonts import
- clean up stray font utility classes in services page
- refactor Hero, Know Before You Ship, Services, DDP Journey, and Partners sections to align with centralized typography system
- preserve existing font-heading/font-body utility compatibility

Build verified: all 22 routes compile successfully


## refactor(blog): migrated blog listing to CMS-driven architecture & implemented dynamic CMS-powered blog detail page
Introduced a centralized API layer (src/lib/api.js) for all blog, category, and tag data fetching with ISR support.
Refactored the blog listing page from hardcoded content to a fully CMS-driven implementation.
Split the listing page into a Server Component for SEO-friendly initial rendering and a Client Component (BlogListingClient) for interactive filtering.
Added dynamic search, category filtering, tag filtering, and paginated blog listing.
Replaced hardcoded featured article, categories, tags, and latest posts with CMS-powered data.
Synced search and filter state with URL query parameters for shareable and bookmarkable pages.
Implemented client-side data updates while preserving server-rendered initial content.
Rebuilt the blog detail page as a dynamic App Router route (/blog/[slug]) powered entirely by CMS content.
Added reusable TiptapRenderer to render rich Tiptap JSON content while preserving the site's existing typography and design system.
Implemented dynamic breadcrumb generation based on post category hierarchy.
Added dynamic author profile, featured image, article metadata, and tag rendering.
Integrated related posts and previous/next article navigation using CMS APIs.
Replaced static social links with dynamic share URLs based on the current blog slug.
Added dynamic SEO metadata generation including Open Graph, Twitter cards, canonical URLs, and BlogPosting JSON-LD schema.
Preserved the existing UI/UX, responsive layout, and visual design while replacing all hardcoded content with CMS-managed data.

Result:

Blog listing and detail pages are now fully CMS-driven.
Rich article content is rendered dynamically from Tiptap JSON.
Improved SEO through server-side rendering, dynamic metadata, and structured data.
Enhanced maintainability by centralizing API interactions and removing hardcoded blog content.

## feat(blog): add Google Forms newsletter subscription integration

- Added a client-side NewsletterSubscribe component for blog sidebar subscriptions
- Integrated Google Forms as a temporary backend for collecting newsletter emails
- Implemented email validation and Google Forms formResponse submission via fetch
- Added loading state and subscription success/error handling
- Replaced static newsletter widget with an interactive subscription form
- Kept the blog page as a Server Component by isolating interactive logic in a Client Component
- Structured the implementation for easy future migration to a dedicated backend or email service


## feat(newsletter): add secure API proxy for Google Forms subscriptions

- Added Next.js API route to securely proxy newsletter subscriptions
- Moved Google Forms integration from client to server to hide the form endpoint
- Implemented server-side email validation and structured API responses
- Refactored newsletter component to consume the internal API endpoint
- Improved architecture for future migration to a dedicated backend or email service