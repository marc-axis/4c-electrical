# Post-Dev Update: 4C Electrical Landing Page
**Completed:** 2026-03-11
**Plan:** docs/plans/2026-03-11-4c-electrical-landing-page.md

## What Was Built
- Single-page HTML landing page served by Express static server
- 7 sections: sticky nav, hero, services (4 cards), why-us (3 pillars), coverage (8 area tags), contact (phone/email cards + mailto form), footer
- Tailwind CSS via CDN with custom navy (#1B2A4A) and gold (#C9A84C) tokens
- JSON-LD `Electrician` schema markup for Garden Route local SEO
- Full SEO meta tags + Open Graph tags
- Mobile-responsive with hamburger nav, accessibility (aria-expanded, aria-hidden, labels)
- Railway deployment config (railway.json, NIXPACKS)
- Deployed to GitHub: https://github.com/marc-axis/4c-electrical

## Key Decisions Made
- **`public/` subdirectory** — Originally planned index.html at project root. Changed to `public/` to prevent server.js/package.json exposure over HTTP. Express static now serves from `public/`.
- **Static HTML spans for area tags** — Plan had JS template literals inline in HTML. Changed to static spans (cleaner, no JS required for static content).
- **`aria-hidden`, `aria-expanded` added** — Not in original plan; added during polish pass based on code review feedback.
- **Favicon added** — `<link rel="icon" href="/logo.jpeg">` added to prevent 404 log noise.

## Lessons Learned
- Railway NIXPACKS autodiscovers Node.js via `package.json` + `"start"` script — no Dockerfile needed.
- `express.static(__dirname)` exposes all project files — always serve from a subdirectory.
- Tailwind CDN `hover:border-gold` works with custom colors registered in `tailwind.config` inline config block.
- `bg-navy/5` opacity syntax works with Tailwind CDN v3 (used in contact section service area note).

## Current State
- **Repo:** https://github.com/marc-axis/4c-electrical (public, main branch)
- **Files:** `public/index.html`, `public/logo.jpeg`, `server.js`, `package.json`, `railway.json`
- **Dependencies:** express ^4.18.2 only
- **No environment variables required** — static site, mailto form (no backend)
- **Contact details in page:** Phone 065 865 6575 (tel:+27658656575), Email johan@4ce.co.za
- **Domain:** 4ce.co.za (DNS not yet pointed to Railway)

## What the Next Plan Should Know
- To deploy: connect https://github.com/marc-axis/4c-electrical to Railway → New Project → Deploy from GitHub → set custom domain `4ce.co.za`
- DNS: add CNAME record at registrar pointing `4ce.co.za` to Railway's provided hostname
- Post-launch SEO: submit to Google Search Console, create Google Business Profile for "4C Electrical" in Garden Route
- The `mailto:` contact form requires visitor to have a mail client configured — for higher conversion, consider adding a serverless form handler (Formspree, Netlify Forms, or Railway backend) in a future plan
- Logo is at `public/logo.jpeg` (1024×1024 JPEG, no transparency) — future favicon improvement: convert to `.ico` or `.png` with proper sizes
