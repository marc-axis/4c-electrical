# Post-Dev Update: SEO/GEO Round 3 — CORE-EEAT Implementation
**Completed:** 2026-03-11
**Plan:** docs/plans/2026-03-11-landing-page-design.md (continued from SEO/GEO audit session)

## What Was Built

- **`<main>` semantic wrapper** — page content now wrapped in `<main>` element between `</nav>` and `<footer>` (R09 HTML semantics)
- **Hero scope sentence** — expanded subheading with audience callout ("Whether you're a homeowner, farmer, or commercial property owner") and `<cite>SANS 10142</cite>` in-text reference (C05, C06)
- **External SANS 10142 citation links** — `href="https://www.sabs.co.za"` with `<cite>` tags in both Why Us section and FAQ COC answer (R02, R03, R09)
- **`<time>` datetime elements** — added on all four business hours instances: Why Us, Contact, FAQ Q5, footer (R09)
- **Last updated date** — `<time datetime="2026-03-11">March 2026</time>` in footer copyright bar (R06)
- **Review service dates** — each review card now shows service month (Feb/Jan/Mar 2026) with `<time>` elements (T09)
- **About / credentials section** — new `#about` section with Johan bio, registered electrician credentials, SANS 10142 citation link, and four credential chips (Ept01, Ept02, Exp05)
- **"About" nav link** — added to both desktop and mobile navigation menus
- **Contact closure paragraph** — semantic wrap-up paragraph at bottom of contact section (C10)
- **`founder` Person schema** — JSON-LD `founder` property with `knowsAbout` array (SANS 10142, COC, Solar PV, VSDs, Fault Finding) added to Electrician schema (Ept02)

## Key Decisions Made

- Johan bio section placed between Reviews and FAQ — credentials sit naturally between social proof and questions
- Used `<cite>` HTML element on SANS 10142 throughout to signal a verifiable reference to bots/parsers
- `<time datetime="Mo,Tu,We,Th,Fr 07:00-17:00">` format used for opening hours (schema.org compatible pattern)
- No `href` on Johan's name — no personal social profiles exist to link; avoided placeholder links
- Did not add real surname or photo to Johan bio — info not confirmed; used initial avatar instead

## Current State

- `public/index.html` — 1132 lines, fully updated
- `public/robots.txt` — unchanged
- `public/sitemap.xml` — unchanged (two URLs)
- `server.js` — unchanged
- Domain: https://4ce.co.za (Railway hosting, auto-deploy from main branch)
- Schema types active: `Electrician` (with `founder` Person), `FAQPage` (JSON-LD × 2 + microdata)

## Score Estimates (Post Round 3)

| Metric | Round 2 | Round 3 Est. |
|--------|---------|-------------|
| On-Page SEO | ~85/100 | ~88/100 |
| Technical SEO | ~84/100 | ~87/100 |
| CORE-EEAT Weighted | ~54/100 | ~62/100 |
| GEO Readiness | ~7.0/10 | ~7.8/10 |

Key score movers: R dimension improved (external citations added, timestamp added); Ept improved (bio section, founder schema); C improved (scope statement, closure paragraph).

## Remaining Gaps (Next Plan Should Address)

| Item | Benchmark ID | Impact |
|------|-------------|--------|
| No real project count / years stat | R01 | Medium — data precision for AI citations |
| Tailwind CDN → built CSS bundle | Performance | Medium — LCP improvement |
| No author photo | Exp05 | Medium — real photo boosts experience trust |
| External Unsplash hero image | E05, Performance | Medium — own photo preferred |
| No TOS / terms page | T02 | Low |

## What the Next Plan Should Know

- The About section uses `id="about"` — nav links already added for desktop and mobile
- Johan's surname and qualifications number are not on the site — if owner confirms them, add to bio and schema
- The `founder` JSON-LD uses `knowsAbout` array — extend with specific qualification names if confirmed
- Tailwind CDN is still the CSS delivery method — generate a static CSS bundle before any Core Web Vitals audit
