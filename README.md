# CTIDDP Website

China to India DDP Shipping Specialists — built with Next.js 16.2.1, Tailwind CSS v4, and full SEO infrastructure.

## Stack

- **Framework** — Next.js 16.2.1 (App Router)
- **Styling** — Tailwind CSS v4 + custom CSS design tokens
- **Fonts** — playfair Garamond + Outfit via `next/font/google`
- **Language** — JavaScript (JSX)
- **Deployment** — Vercel

---

## Getting Started

```bash
npm install
npm run dev       # localhost:3000
npm run build     # production build
npm run start     # serve production build
npm run lint      # lint check
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.jsx                      # Root layout, global metadata, JSON-LD
│   ├── globals.css                     # Design tokens, component styles, animations
│   ├── sitemap.js                      # Auto-generates /sitemap.xml
│   ├── robots.js                       # Auto-generates /robots.txt
│   ├── page.jsx                        # /
│   ├── how-it-works/page.jsx           # /how-it-works
│   ├── services/page.jsx               # /services
│   ├── pricing/page.jsx                # /pricing
│   ├── insights/page.jsx               # /insights
│   ├── faq/page.jsx                    # /faq
│   ├── about/page.jsx                  # /about
│   ├── contact/
│   │   ├── page.jsx                    # server wrapper — exports metadata
│   │   └── ContactClient.jsx           # interactive contact + call booking
│   ├── get-quote/
│   │   ├── page.jsx                    # server wrapper — exports metadata
│   │   └── GetQuoteClient.jsx          # interactive quote form
│   ├── track/
│   │   ├── page.jsx                    # server wrapper — exports metadata
│   │   └── TrackClient.jsx             # interactive shipment tracker
│   └── tools/duty-calculator/
│       ├── page.jsx                    # server wrapper — exports metadata
│       └── DutyCalcClient.jsx          # BCD + IGST + SWS calculator
│
├── components/
│   ├── layout/
│   │   ├── MegaNav.jsx                 # Sticky nav — mega dropdowns desktop, drawer mobile
│   │   ├── Ticker.jsx                  # Announcement ticker
│   │   └── Footer.jsx                  # 5-column footer
│   ├── sections/
│   │   └── HeroSection.jsx             # Canvas wave animation + particles
│   └── ui/
│       ├── CustomCursor.jsx            # Gold dot + ring cursor
│       ├── ChatBot.jsx                 # Floating chat widget
│       └── ScrollRevealInit.jsx        # IntersectionObserver scroll reveal
│
└── lib/
    └── useScrollReveal.js              # Scroll reveal hook
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, process, testimonials, CTA |
| `/how-it-works` | 8-step DDP process map with transit timelines |
| `/services` | All 6 DDP services with feature breakdowns |
| `/track` | Shipment tracker with milestone timeline |
| `/tools/duty-calculator` | BCD + IGST + SWS calculator + HS rate reference table |
| `/pricing` | 3 plan cards + feature comparison table |
| `/insights` | Blog index |
| `/faq` | FAQ with FAQPage JSON-LD for Google rich results |
| `/about` | Team, office locations, SOP list |
| `/contact` | Contact channels + call slot booking |
| `/get-quote` | DDP quote request form |

---

## SEO

Every page has `title`, `description`, `canonical`, `openGraph`, and `BreadcrumbList` JSON-LD.

Additional structured data schemas:

| Schema | Page |
|---|---|
| `Organization` | Root layout (all pages) |
| `FAQPage` | `/faq` |
| `HowTo` | `/how-it-works` |
| `Service` | `/services` |
| `LocalBusiness` | `/about` |
| `Blog` | `/insights` |
| `WebApplication` | `/tools/duty-calculator` |

`/sitemap.xml` and `/robots.txt` are auto-generated at runtime via `src/app/sitemap.js` and `src/app/robots.js`.

### Server / client page split

Pages that need `useState` or `useEffect` cannot export `metadata` directly — Next.js does not allow `'use client'` and `export const metadata` in the same file. These pages are split into a thin server `page.jsx` that exports metadata, and a `*Client.jsx` that handles interactivity. This applies to `/contact`, `/get-quote`, `/track`, and `/tools/duty-calculator`.

---

## Config Files

| File | Purpose |
|---|---|
| `next.config.mjs` | avif/webp image formats, security headers, cache headers |
| `jsconfig.json` | Path alias `@/*` → `./src/*` |
| `postcss.config.mjs` | Tailwind CSS v4 |
| `eslint.config.mjs` | Next.js core web vitals rules |

---

## Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+91XXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_FORM_EMAIL=hello@ctiddp.com
```

---

## Before Going Live

- Replace every `your-number` with the real WhatsApp number
- Replace `https://ctiddp.com` with the real domain in `layout.jsx` and all page metadata
- Replace `hello@ctiddp.com` and `IECGSTGSTIN` placeholder in `Footer.jsx`
- Add `public/og-image.jpg` at 1200×630 for social sharing previews
- Add `public/favicon.ico`, `public/favicon-16x16.png`, `public/apple-touch-icon.png`
- Run `npm run build` and confirm zero errors before deploying

---

## Deployment

```bash
npm install -g vercel
vercel deploy
```

After deploy: verify domain in Google Search Console, submit `/sitemap.xml`, and install GA4 via `@next/third-parties`.

---

## Adding a New Page

1. Create `src/app/your-route/page.jsx`
2. Export `metadata` with `title`, `description`, `canonical`, and `openGraph`
3. Add a `BreadcrumbList` JSON-LD `<script>` inside `<main>`
4. Add the route to `src/app/sitemap.js`
5. If the page needs React state or browser APIs, split it — `page.jsx` stays as a server component, move interactive code to `YourRouteClient.jsx` with `'use client'` at the top