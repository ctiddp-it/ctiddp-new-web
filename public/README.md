# Public assets

This directory is served from the website root. For example public/images/example.png is available as /images/example.png.

Current root-layout metadata uses:
- /images/favicon-32.png
- /images/apple-touch-icon.png
- /images/CTIDDP-LOGO Social Media.png for social metadata and organization structured data.

Do not substitute the older placeholder favicon/logo filenames without also updating src/app/layout.jsx. Navigation branding, page photography and blog fallbacks reference files under images/. User-uploaded blog/author media is stored by the backend under /uploads, not here.

Preserve asset URLs used by existing pages. Public image responses currently use long immutable cache headers; use new versioned filenames when replacing assets. The Next image optimizer emits WebP and serves inline. Open the original /images/...png or .jpg URL when the original format is required.

Use descriptive alt text for meaningful images, dimensions/responsive sizes where applicable and appropriately sized source files. Do not put secrets, private drafts or exported customer records in public/.
