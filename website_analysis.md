## Project Overview

CTIDDP is a modern, high-performance digital platform for a global freight forwarding and logistics company specializing in Delivered Duty Paid (DDP) shipping solutions.

The platform enables seamless cross-border logistics from China and India to worldwide destinations, offering a complete suite of tools, information resources, and customer-focused services.

### Core Business Purpose

CTIDDP provides end-to-end DDP freight forwarding, managing the entire logistics lifecycle across international trade routes, including:

    - Factory coordination, quality checks, and consolidation
    - Air and sea freight across global routes
    - Prepaid import duties and taxes (including applicable customs charges per destination country)
    - Export and destination customs clearance
    - Warehousing, distribution, and last-mile delivery worldwide

The platform acts as a central digital hub for:
    - Lead generation and quote requests
    - Customer education on DDP logistics
    - Shipment tracking and visibility
    - Cost estimation and duty calculation
    - Customer communication and support

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