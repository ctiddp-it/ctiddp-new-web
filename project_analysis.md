# CTIDDP Next.js Web Application — Complete Project Analysis

## Project Overview

**CTIDDP** (China to India DDP Specialists) is a modern, high-performance Next.js 16.2.1 website for an international freight forwarding and logistics company. The platform provides **Delivered Duty Paid (DDP) shipping services** from China to India with a comprehensive suite of tools, information resources, and interactive features.

### Core Business Purpose
CTIDDP specializes in end-to-end DDP freight forwarding from China to India, handling:
- Factory quality checks and consolidation
- Sea and air freight options
- All import duties prepayment (BCD, IGST, SWS)
- India customs clearance
- PAN-India last-mile delivery

The website serves as the primary digital storefront for lead generation, customer education, shipment tracking, quoting, and customer support.

---

## Technical Stack

### Framework & Core
- **Next.js** 16.2.1 (App Router architecture)
- **React** 19.0.0
- **JavaScript/JSX** (ES6+, no TypeScript)

### Styling & Design
- **Tailwind CSS** v4 (with new @theme system)
- **Custom CSS design tokens** in `globals.css` (color palette, spacing, overlays)
- **Dark/Light mode** toggle via `next-themes` with class-based theme switching
- **PostCSS** for CSS processing
- **Fonts**: Playfair Display (serif, 400–700) + Outfit (sans-serif, 200–700) from Google Fonts

### Animation & Interactivity
- **Framer Motion** v12.38.0 (complex animations)
- **Swiper** v12.1.3 (carousel/slider components)
- **Lucide React** v1.7.0 (icon library)

### Data & Mapping
- **D3-Geo** v3.1.1 (geographic data processing)
- **TopoJSON Client** v3.1.0 (map data topology, interactive geography visualization)

### Development & Quality
- **ESLint** v10.1.0 (code linting)
- **eslint-config-next** (Next.js specific rules)

---

## Project Structure

### Root Directory Files
```
nextjs ctiddp web/
├── package.json                    # Dependencies and scripts
├── next.config.mjs                 # Security headers, image formats, redirects
├── jsconfig.json                   # Module path aliasing (@/)
├── eslint.config.mjs               # Linting configuration
├── postcss.config.mjs              # Tailwind CSS v4 setup
├── tailwind.config.js              # (auto-generated from @theme)
└── README.md                        # Project documentation
```

### Public Assets
```
public/
└── images/
    └── our-partners/               # Partner logos and branding
```

### Source Code (`src/`)

#### App Directory (Next.js App Router)
```
src/app/
├── layout.jsx                           # Root layout wrapper
│                                        # ├─ Global metadata config
│                                        # ├─ Font initialization (Playfair, Outfit)
│                                        # ├─ Theme provider wrapper
│                                        # ├─ Theme toggle component
│                                        # ├─ Custom cursor overlay
│                                        # ├─ Floating chatbot widget
│                                        # └─ Organization JSON-LD schema
│
├── globals.css                          # Design system
│                                        # ├─ CSS custom properties (@theme)
│                                        # ├─ Light/dark mode overrides
│                                        # ├─ Component utility classes
│                                        # └─ Animation keyframes
│
├── page.jsx                             # Homepage (/)
│                                        # ├─ FOB vs DDP comparison
│                                        # ├─ Interactive hero section
│                                        # ├─ Services overview cards
│                                        # ├─ 8-step process visualization
│                                        # ├─ Customer testimonials (carousel)
│                                        # ├─ Global presence map
│                                        # ├─ Partner logos + announcements
│                                        # └─ Final CTA section
│
├── robots.js                            # Auto-generated /robots.txt for SEO
├── sitemap.js                           # Auto-generated /sitemap.xml for SEO
│
├── about/page.jsx                       # /about — Team, offices, CSR initiatives
├── blog/page.jsx                        # /blog — Blog index & article listings
├── services/page.jsx                    # /services — 6 DDP service offerings
├── pricing/page.jsx                     # /pricing — 3 subscription plan options
├── canton-fair/page.jsx                 # /canton-fair — Event specialization info
├── how-it-works/page.jsx                # /how-it-works — 8-step DDP process guide
│
├── contact/                             # /contact
│   ├── page.jsx                         # Server component (metadata wrapper)
│   └── ContactClient.jsx                # Interactive contact form + booking system
│                                        # ├─ 3 contact channel cards (email, India office, China office)
│                                        # ├─ SLA response time table
│                                        # ├─ Contact subject dropdown
│                                        # ├─ Time slot booking calendar
│                                        # └─ Form validation + submission
│
├── quote/                               # /get-quote (renamed from /quote)
│   ├── page.jsx                         # Server component (metadata wrapper)
│   └── GetQuoteClient.jsx               # Interactive DDP quote request form
│                                        # ├─ "What you receive" feature list
│                                        # ├─ Form fields (product type, weight, HS code, etc.)
│                                        # ├─ Success confirmation message
│                                        # ├─ FAQ collapsible section
│                                        # └─ FAQ schema JSON-LD
│
├── track/                               # /track — Shipment tracking
│   ├── page.jsx                         # Server component (metadata wrapper)
│   └── TrackClient.jsx                  # Interactive shipment tracker
│                                        # ├─ Dropdown to select from mock shipments
│                                        # ├─ Status cards (origin, destination, cargo, ETA)
│                                        # ├─ Progress bar with milestone dots
│                                        # ├─ Detailed timeline with completed/pending steps
│                                        # ├─ Document list (BOL, invoice, etc.)
│                                        # └─ Status color coding (transit, customs, delivered)
│
└── tools/duty-calculator/               # /tools/duty-calculator
    ├── page.jsx                         # Server component (metadata wrapper)
    └── DutyCalcClient.jsx               # BCD + IGST + SWS duty calculator
                                         # ├─ Form inputs (HS code, CIF, BCD %, IGST %)
                                         # ├─ Real-time calculation (formula: BCD → SWS → IGST)
                                         # ├─ Cost breakdown table
                                         # ├─ HS code reference modal
                                         # ├─ Downloadable invoice
                                         # └─ WebApplication schema JSON-LD
```

#### Components Directory
```
src/components/
│
├── layout/
│   ├── MegaNav.jsx                      # Sticky header navigation
│   │                                    # ├─ Logo + branding
│   │                                    # ├─ Mega dropdown menus (Services, Tools, Resources)
│   │                                    # ├─ Mobile drawer navigation
│   │                                    # ├─ Theme toggle switch (light/dark)
│   │                                    # ├─ Active route highlighting
│   │                                    # ├─ Scroll effect on header
│   │                                    # └─ Responsive breakpoints (mobile, tablet, desktop)
│   │
│   ├── Ticker.jsx                       # Announcement ticker/banner
│   │                                    # └─ Auto-scrolling announcement carousel
│   │
│   └── Footer.jsx                       # 5-column footer
│                                        # ├─ Company links (About, Services, Pricing)
│                                        # ├─ Quick links (Contact, Track, Quote)
│                                        # ├─ Resources (Blog, FAQ, Duty Calculator)
│                                        # ├─ Social links + newsletter signup
│                                        # ├─ Dark themed base color
│                                        # └─ Copyright + legal links
│
├── providers/
│   └── ThemeProvider.jsx                # Next-Themes wrapper for dark mode
│                                        # └─ Enables light/dark toggle across all pages
│
├── sections/
│   ├── HeroSection.jsx                  # Animated hero with canvas waves + particles
│   │                                    # ├─ Slot machine stat counters (30+ team, 250+ containers)
│   │                                    # ├─ Canvas-based wave animation background
│   │                                    # ├─ Particle system animation
│   │                                    # ├─ Swiper carousel for freight mode options
│   │                                    # ├─ CTA button to get quote or contact
│   │                                    # └─ Responsive hero height + typography
│   │
│   ├── GlobalPresence.jsx               # Geographic presence map
│   │                                    # ├─ D3/TopoJSON-rendered world map
│   │                                    # ├─ Highlighted office locations (Guangzhou, Vizag, etc.)
│   │                                    # ├─ Interactive pin markers
│   │                                    # └─ Location info cards
│   │
│   ├── Partners.jsx                     # Partner logos section
│   │                                    # └─ Grid of logos with hover effects
│   │
│   └── TrackingWidget.jsx               # Inline shipment tracker widget
│                                        # └─ Minimal tracking preview
│
├── ui/
│   ├── CustomCursor.jsx                 # Custom cursor implementation
│   │                                    # ├─ Gold dot + ring cursor
│   │                                    # ├─ Hover state changes
│   │                                    # └─ Global mouse tracking
│   │
│   ├── ChatBot.jsx                      # Floating chat widget
│   │                                    # ├─ Sticky bottom-right positioning
│   │                                    # ├─ Expandable message history
│   │                                    # ├─ Real-time chat simulation
│   │                                    # └─ Context-aware responses
│   │
│   ├── ThemeToggle.jsx                  # Light/Dark mode toggle button
│   │                                    # └─ Synced with next-themes provider
│   │
│   └── ScrollRevealInit.jsx             # Scroll reveal initialization
│                                        # └─ Applies reveal animations on page load
```

#### Utilities & Hooks
```
src/lib/
└── useScrollReveal.js                   # Custom React hook
                                         # ├─ IntersectionObserver-based scroll animations
                                         # ├─ Fade-in, slide-in, scale reveal effects
                                         # ├─ Staggered animation support
                                         # └─ Performance optimized (reusable observer)
```

---

## Page-by-Page Breakdown

### 1. **Homepage** (`/`) — `page.jsx`
- **Hero**: Canvas-animated waves + particle system + CTA buttons
- **FOB vs DDP Comparison**: Side-by-side table explaining shipping models
- **Services Overview**: 6 cards highlighting core DDP services
- **Process Visualization**: 8-step flow showing the complete DDP journey (38–50 days door-to-door)
- **Testimonials**: Customer success stories in a carousel (Swiper)
- **Global Presence**
- **Partners**: Grid of partner/client logos
- **Final CTA**: "Get a Quote" or "Start Today" call-to-action

### 2. **How It Works** (`/how-it-works`)
- **Phase 1 (China)**: 
  - Vendor coordination & pricing
  - Pre-shipment QC (Foshan warehouse)
  - Multi-vendor consolidation (Guangzhou)
  - China export customs clearance (48-hour guarantee)
- **Phase 2 (Transit & India)**:
  - International DDP transit (sea 28–35 days, air 4–7 days)
  - India import customs (BE filing, 9–11 working days)
  - Warehouse inbound & inspection (Chennai)
  - Last-mile PAN-India delivery + POD
- **Process Map**: Visual step-by-step diagram with icons and transit time estimates
- **Timeline**: Complete 8-step journey with expected durations

### 3. **Services** (`/services`)
- **6 Core Services**:
  1. China sourcing & vendor management
  2. Quality assurance & inspection
  3. Sea & air freight (LCL/FCL)
  4. Export & import customs clearance
  5. Warehousing & consolidation
  6. PAN-India last-mile delivery
- Each service includes feature breakdown, pricing notes, and use case examples

### 4. **Pricing** (`/pricing`)
- **3 Subscription Plans**:
  - Starter (monthly): Basic DDP for SMEs
  - Professional (quarterly): Mid-volume consolidation
  - Enterprise (annual): White-label + premium support
- **Feature Comparison Table**: Detailed breakdown of included services per tier

### 5. **Contact** (`/contact`)
- **Contact Channels**:
  - Email: hello@, ops@, compliance@, sales@ (with specified response SLAs)
  - India Office: Vizag HQ, Chennai Ops, Bangalore BD (phone + hours)
  - China Office: Guangzhou warehouse, Foshan QC, WeChat available (phone + hours)
- **Response SLAs**:
  - WhatsApp (business hours): Under 2 hours
  - Email: 4–6 hours
  - Quote request: 24 hours
  - Shipment escalation: 2-hour emergency SLA
- **Call Slot Booking**: Time-slot calendar allows customers to book direct consultation calls

### 6. **Get a Quote** (`/quote` or `/get-quote`)
- **Quote Form Fields**:
  - Product type (Electronics, Textiles, Machine Parts, etc.)
  - Product quantity & weight
  - HS code (with reference lookup)
  - Preferred shipping mode (Sea/Air)
  - Delivery timeline required
- **Form Output**: Displays pre-calculated quote including:
  - Origin freight cost
  - Sea/Air freight cost
  - BCD (Basic Customs Duty) estimate
  - IGST (Integrated GST) estimate
  - SWS (Social Welfare Surcharge)
  - Total landed cost
- **FAQ Section**: Collapsed Q&A about quoting, timelines, payment terms

### 7. **Shipment Tracker** (`/track`)
- **Mock Shipment Data**: 3 sample shipments with different statuses:
  - CTI-2025-04817: In Transit (Electronics, 65% complete)
  - CTI-2025-03291: Customs Clearance (Textiles, 82% complete)
  - CTI-2025-01154: Delivered (Machine Parts, 100% complete)
- **UI Components**:
  - Dropdown selector to switch between shipments
  - Status card showing origin, destination, cargo, ETA
  - Progress bar with milestone dots (Factory, Customs, Loaded, Transit, Clearance, Delivered)
  - Detailed timeline with completed/pending steps, dates, locations
  - Document list (BOL, Packing List, Invoice, Declarations)
  - Status color coding (green=done, blue=active, gray=pending)

### 8. **Duty Calculator** (`/tools/duty-calculator`)
- **Input Fields**:
  - HS Code (Harmonized System code)
  - CIF Value (Cost, Insurance, Freight in USD)
  - BCD Rate % (Basic Customs Duty percentage)
  - IGST Rate % (default 18%, adjustable)
- **Calculation Formula**:
  ```
  BCD = CIF × BCD% 
  SWS = BCD × 10%
  IGST = (CIF + BCD + SWS) × IGST%
  Total = CIF + BCD + SWS + IGST
  ```
- **Output**: Cost breakdown table showing each component
- **HS Code Reference**: Embedded modal for quickly looking up HS codes by product category
- **Export Feature**: Download quote as PDF/invoice

### 9. **About** (`/about`)
- Team member bios with photos
- Company mission & values
- Office locations (Vizag HQ, Chennai, Gandhinagar, Guangzhou)
- Certifications & compliance info
- SOP (Standard Operating Procedure) documentation links

### 10. **Blog** (`/blog`)
- Blog post index & listings
- Article metadata (publish date, author, category, read time)
- Search/filter by category (Logistics Tips, Industry News, Company Updates, etc.)

### 11. **Canton Fair** (`/canton-fair`)
- Specialized information for Canton Fair (Guangzhou import trade fair) exhibitors
- Fast-track sourcing from fair participants
- QC & consolidation for fair purchases
- Expedited customs clearance support

---

## Design System & Styling

### Color Palette (Light/Dark Modes)
**Dark Mode (Default)**
- Primary: `#2563EB` (blue)
- Backgrounds: `#050508` (black), `#0C0C14` (deep), `#13131f` (surface), `#1a1a2e` (card)
- Text: `#FAFAF8` (white), `#8A8A9A` (muted)
- Accent: `#4ADE80` (green for success), `#F87171` (red for alerts)

**Light Mode**
- Backgrounds: `#FAFAF8` (white), `#F0F0EE` (deep), `#FFFFFF` (surface), `#F5F5F3` (card)
- Text: `#1a1a2e` (dark), `#5a5a6a` (muted)
- Maintains primary blue accent

### Typography
- **Headings**: Playfair Display (serif, 400/500/600/700 weights)
- **Body**: Outfit (sans-serif, 200/700 weights)
- **Responsive**: Clamp functions for fluid scaling on all breakpoints

### Component Classes
- **Common utilities**: Generated by Tailwind v4 @theme (e.g., `bg-black`, `text-white`, `border-border`)
- **Layout**: Flex, grid, responsive padding/margins with Tailwind scale
- **Animations**: Scroll reveal, fade-in, slide-in, pulse effects

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:` (640px), `lg:` (1024px), `xl:` (1280px)
- Hamburger menu on mobile; mega-dropdowns on desktop

---

## Key Features & Interactivity

### 1. **Scroll Reveal Animations**
- IntersectionObserver-based library (custom hook)
- Elements fade in and slide up as they enter viewport
- Staggered timing for sequential reveals
- Applied via `<ScrollRevealInit />` component on each page

### 2. **Theme Switching (Light/Dark Mode)**
- Powered by `next-themes`
- Class-based dark mode (`.dark` selector)
- Custom CSS variables flip values per mode
- Toggle button in MegaNav
- Persisted to localStorage

### 3. **Mega Navigation with Dropdowns**
- Desktop: Hover-activated mega dropdowns with submenu items
- Mobile: Hamburger drawer menu with collapsible sections
- Active route highlighting
- Sticky positioning with scroll blur effect and security border

### 4. **Custom Cursor**
- Gold dot with ring effect
- Follows mouse in real-time
- Hover states with scale/color changes
- Fully hidden on mobile

### 5. **Floating Chat Bot**
- Positioned fixed bottom-right
- Expandable message panel
- Context-aware responses (can link to FAQ, quote tool, contact page)
- Simulated real-time chat with typing indicators

### 6. **Announcement Ticker**
- Auto-scrolling banner at top
- Displays rotating announcements/promotions
- Dismissible with close button

### 7. **Interactive Hero Section**
- **Canvas-based wave animation**: Procedurally generated, CPU-efficient
- **Particle system**: Floating particles with motion blur
- **Slot machine stat counters**: Spinning digit animation for team size, container count, CBM volume
- **Swiper carousel**: Sea freight vs. Air freight mode selection with auto-play

### 8. **Shipment Tracker**
- Real-time status visualization with progress bar
- Timeline with completed/in-progress/pending states
- Document attachment list (BOL, customs docs, etc.)
- Status color coding (green, blue, yellow, red)

### 9. **Duty Calculator Engine**
- Real-time calculation as user inputs values
- Pre-populated HS code reference database
- Dynamic rate lookups (BCD rates, IGST default)
- Downloadable quote/invoice

### 10. **Contact Form + Call Booking**
- Form validation (required fields, email format)
- Time-slot selection for calls
- Subject dropdown (pre-filled options)
- Submission success message with reference number

### 11. **Global Presence Map**
- D3-Geo + TopoJSON-based world map
- Highlighted office locations with pin markers
- Hover tooltips showing office details
- Responsive zoom behavior

---

## SEO & Structured Data

### Meta Tags (per page)
- **Title**: Includes primary keyword + brand name
- **Description**: Action-oriented, 155 chars
- **Keywords**: Relevant search terms (DDP shipping, customs clearance, China India imports, etc.)
- **Canonical**: Explicit canonical URLs to prevent duplicate issues
- **Open Graph**: og:title, og:description, og:image, og:url
- **Robots**: index, follow enabled

### JSON-LD Schemas
| Schema | Location | Purpose |
|--------|----------|---------|
| Organization | Root layout | Company identity, logo, contact, foundingDate, areaServed |
| WebPage | Each page | Breadcrumb navigation, structured description |
| BreadcrumbList | Navigation | Hierarchical site structure for search indexing |
| FAQPage | FAQ page | Rich snippet format for FAQ content |
| WebApplication | Duty calculator | App metadata (name, description, category, pricing) |
| LocalBusiness | Contact page | Office addresses, phone numbers, hours |

### Auto-Generated Files
- **robots.js**: Generates `/robots.txt` with Disallow rules for admin, private pages
- **sitemap.js**: Generates `/sitemap.xml` with all public routes + lastmod + priority

---

## Security & Performance

### Security Headers (next.config.mjs)
```javascript
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### Image Optimization
- **Formats**: AVIF, WebP prioritized; PNG/JPG fallback
- **Static assets**: 1-year cache (immutable) with fingerprinting
- **Dynamic images**: Optimized via Next.js Image component

### Performance Features
- **Lazy loading**: Next.js automatic code splitting
- **Font optimization**: Google Fonts with `display: swap` for reduced CLS
- **CSS**: Tailwind v4 with purging for minimal bundle
- **Scroll optimization**: Passive event listeners for 60fps scroll smoothness

---

## Development Workflow

### Commands
```bash
npm install              # Install dependencies
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build
npm run start            # Serve production build
npm run lint             # Run ESLint
```

### Environment Variables (if needed)
- API endpoints for shipment tracking queries
- Email service credentials (if contact forms submit via API)
- Map API keys (if dynamic maps require keys)

### File Naming Conventions
- Page files: `page.jsx` (Next.js convention)
- Server wrappers: `page.jsx` with metadata export
- Client components: `*Client.jsx` marked with `'use client'` directive
- Components: PascalCase (e.g., `MegaNav.jsx`, `ContactClient.jsx`)
- Utilities: camelCase (e.g., `useScrollReveal.js`)

### Module Aliasing
- `@/` points to `src/` directory (configured in jsconfig.json)
- Enables clean imports: `import Footer from '@/components/layout/Footer'`

---

## Company Information

### CTIDDP Identity
- **Full Name**: China to India DDP Specialists / CTIDDP
- **Tagline**: "All Duties Paid" shipping specialists
- **Headquarters**: Visakhapatnam (Vizag), Andhra Pradesh, India
- **Offices**:
  - India: Vizag (HQ), Chennai (Ops), Bangalore (Business Dev)
  - China: Guangzhou (Warehouse), Foshan (QC)
- **Languages**: English primary, Mandarin support via China team
- **Target Customers**: Indian importers sourcing from China (especially Canton Fair participants)

### Service Promise
- **DDP Model**: All duties prepaid by CTIDDP (eliminates surprise bills for buyers)
- **Process Timeline**: 38–50 days door-to-door (sea freight); 8–15 days (air freight)
- **Quality Focus**: Pre-shipment QC, factory certifications, compliance verification
- **Support**: 24/7 WhatsApp/email, 2-hour shipment SLA, dedicated account managers

---

## Future Enhancement Opportunities

1. **Multi-language Support**
2. **AI Chatbot**
3. **Email Automation**: Transactional emails for quote requests, shipping updates
4. Blog Subscription pop-up 
---

## Summary

**CTIDDP's Next.js website is a sophisticated, feature-rich business-to-business platform** designed to educate potential customers about DDP shipping, showcase the company's expertise, and provide interactive tools (tracker, calculator, quote form, booking system) to drive engagement and conversions. The stack emphasizes:

- **Modern UX**: Animations, responsive design, dark/light mode, custom cursor
- **Strategic Simplicity**: JavaScript/JSX (no TypeScript) for faster development iteration
- **SEO Excellence**: Comprehensive structured data, auto-generated sitemaps, canonical URLs
- **Performance**: Image optimization, lazy loading, minimal CSS footprint
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Maintainability**: Component-based architecture, clear file organization, modular hooks
