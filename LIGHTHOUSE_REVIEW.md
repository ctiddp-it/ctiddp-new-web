# Lighthouse review — 17 September 2026

## Production-report follow-up

The two subsequent production reports scored **60 mobile / 98 desktop Performance**, **97 mobile / 92 desktop Accessibility**, and **100 Best Practices and SEO** on both.

Implemented: disabled automatic prefetch on homepage/navigation/footer links to prevent unrelated route banners and scripts loading; reduced navbar logo to 12 KB; made desktop hero sourcing conditional on desktop width with high fetch priority; lazy-loaded the below-fold mobile hero; reduced hero encoding quality to 60; replaced per-frame ticker layout reads with CSS animation; removed unnecessary client boundaries from two static sections; fixed all reported contrast failures and partner-carousel button names. Form components and tracking event logic remain unchanged.

Production browser tests passed for forms, navigation, responsive image selection, reduced motion, named carousel controls, and absence of unrelated banner downloads. Set `TEST_BASE_URL` to the production preview URL, then run `npm run test:performance-forms` and `npm run test:performance-layout`. The final verification used port 3004. Build and lint passed.

Audit snapshots taken during implementation, before the final static-section cleanup:

| Metric | Supplied mobile | Local mobile snapshots | Supplied desktop | Local desktop snapshot |
| --- | --- | --- | --- | --- |
| Performance | 60 | 63–71 | 98 | 98 |
| Accessibility | 97 | 100 | 92 | 100 |
| Transferred | 4,061 KiB | 1,073 KiB | 6,146 KiB | 1,174 KiB |
| LCP | 5.9s | 2.9–3.7s | See supplied report | 0.9s |

These are not controlled before/after benchmarks: the local runner uses Edge, while the supplied reports use Chrome; timing and external tags vary. Mobile blocking time still measured 1,180–1,480ms, so mobile performance is improved in some respects but not fully resolved. Both first-party hydration and analytics contribute. Local Best Practices was 77 because of third-party cookie/inspector warnings from existing Meta/Clarity resources; no application console-error or contrast failures remained. Supplied reports had Best Practices 100. Do not suppress tags or intercept requests when comparing scores.

Completed local JSON files are under ignored `tests/artifacts/`. Lighthouse wrote full reports with no report runtimeError, then its Windows launcher failed temporary-profile cleanup with EPERM. This is a runner cleanup failure, not a clean CLI exit.

**Owner action remains:** choose one Clarity project and remove redundant loading in its owning code/GTM configuration; use GTM Preview to identify duplicate or unnecessary GA/Meta tags. Preserve one intended page-view signal and shared Pixel/CAPI event IDs. Repeat mobile/desktop Chrome audits after rebuilding/restarting. Removing essential form code, silently dropping marketing events, or delaying them just beyond an audit window was deliberately avoided.

Technical reference: [Next.js prefetching behavior](https://nextjs.org/docs/app/guides/prefetching).

Changes are local; nothing deployed. Input: Lighthouse 13.4.1 report for http://localhost:3000/, captured 17 September 2026.

## Findings and changes

| Finding | Evidence | Resolution |
| --- | --- | --- |
| Development audit inflates JavaScript costs | Unminified Next dev and entire react-icons chunks; source-map warnings | Validate the production build before deciding on further bundle work. Do not publish source maps just to fix a development-only diagnostic. |
| Broken mobile hero | 400 from optimized `/images/home/bg-image.png`; source file absent | Use the existing hero artwork with responsive sizes. |
| Heavy third-party video on initial load | YouTube player JavaScript, fonts, ad requests and cookies in report | Click-to-play preview on home and quote pages; privacy-enhanced player loads after interaction. Playback still uses an external service. |
| Oversized favicon | Social artwork transferred 1,022,803 bytes | Dedicated 2,009-byte favicon and 180px Apple icon. Social sharing artwork retained. |
| Images download instead of opening | AVIF first in image formats; optimizer defaults to attachment disposition | WebP optimization with explicit inline disposition. Verified HTTP 200, image/webp and inline even when the request advertises AVIF support. Original public asset paths remain unchanged. |
| Extra image priority | Footer logos marked priority | Footer uses lazy loading; above-the-fold priorities retained. |
| Duplicate analytics | Clarity `wrf3e5yjsp` in code and `xfg9g0p694?ref=gtm` in report | Direct Clarity deferred until after load. Account owner must select one destination before removing duplicate instrumentation. Pixel/GTM and form conversion logic preserved. |
| Small controls / text contrast | 8px carousel dots and hero stat text flagged | 24px dot buttons and darker hero text. |

Initial report: Performance 47, Best Practices 73, Accessibility 93, SEO 100; FCP 2.6s, LCP 4.8s, TBT 3,090ms. These are the supplied scores, not scores after the changes.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed after allowing the configured Google Fonts fetch. Blog/sitemap data requests reported the unavailable localhost backend; compilation success does not establish production API readiness.
- Start the production server with `npm run start -- --port 3001`, then run `npm run test:performance-forms`.
- The browser test needs Playwright plus Edge. It uses the bundled Codex Playwright when available; otherwise set `PLAYWRIGHT_MODULE` to the installed module path. No new application dependency was added.
- Browser checks cover home/contact/quote submission payloads and conversion relay, invalid home/quote submission prevention, home failure input retention and retry, video activation, favicon availability, and image response headers.
- All browser POST requests and external requests are intercepted. This checks client behavior without creating real leads or sending analytics. It does not verify live backend delivery, live analytics dashboards, or real YouTube playback.
- No fresh Lighthouse score is claimed. External-script interception in functional tests must not be used for a performance score comparison.

## Steps for the owner

1. **API configuration:** start the backend for local testing. Before production deployment, set the website's `NEXT_PUBLIC_API_URL` and any server API URL to the intended reachable HTTPS backend, then rebuild. Do not ship a production browser bundle pointing to localhost. Confirm one controlled test inquiry reaches the operations panel.
2. **Apply the image change:** rebuild and restart Next.js. If a CDN caches `/_next/image` responses or response headers, invalidate those cached responses. An already downloaded AVIF file will remain AVIF; new optimized responses use WebP and open inline.
3. **Choose one Clarity project:** check the two project IDs above in Clarity and GTM Preview. Keep the project that contains the desired reporting history; remove the other loader through its owning configuration. Also inspect GTM for a second Meta Pixel or GA page-view tag before publishing. Verify one page view and one conversion per controlled test; preserve Pixel/CAPI shared event-ID deduplication.
4. **Audit production:** run `npm run build`, then `npm start`. Use a clean browser profile without extensions or a signed-in YouTube session, mobile Lighthouse, and three runs of the same URL. Compare median values. Repeat against the deployed HTTPS site with normal tracking enabled. Review homepage, quote, and contact separately.
5. **Use remaining production evidence:** third-party cache lifetimes and vendor JavaScript cannot be fixed in this repository. After duplicate tags are removed, assess whether each marketing tag is still needed. Do not disable validation, form tracking, or load essential form code only after interaction just to improve a synthetic score.

References: [Next.js image configuration](https://nextjs.org/docs/pages/api-reference/components/image) and [Chrome's third-party facade guidance](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades).
