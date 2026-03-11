# 4C Electrical — Landing Page Design

**Date:** 2026-03-11
**Domain:** 4ce.co.za
**Hosting:** Railway

---

## Business Details

| Field | Value |
|---|---|
| Business name | 4C Electrical |
| Phone | 065 865 6575 |
| Email | johan@4ce.co.za |
| Service area | Garden Route, South Africa |
| Logo | `logo.jpeg` (1024×1024, square) |

---

## Goals

1. Establish credibility and professional web presence
2. Local SEO dominance for "electrician Garden Route" and related searches
3. Drive phone and email enquiries
4. Minimal infrastructure — easy Railway deployment

---

## Tech Stack

- **HTML5** — single `index.html`
- **Tailwind CSS** — loaded via CDN (no build step)
- **Vanilla JS** — minimal, for mobile nav toggle only
- **Node.js + Express** — minimal static file server for Railway deployment

---

## Visual Design

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Background | White | `#FFFFFF` |
| Primary / Nav / Cards | Deep Navy | `#1B2A4A` |
| Accent / CTAs | Gold | `#C9A84C` |
| Body text | Dark grey | `#1F2937` |
| Muted text | Grey | `#6B7280` |

### Typography

- **Headings:** Inter or system-ui, bold, navy
- **Body:** Inter or system-ui, regular, dark grey
- **CTAs:** Bold, gold background, navy text

### Design Principles

- Clean, minimal, lots of white space
- Mobile-first responsive layout
- No stock photos — logo + CSS/SVG icon accents only
- Fast load: CDN-only external dependency

---

## Page Sections

### 1. Sticky Navigation
- Logo (left)
- Phone number (centre/right, clickable `tel:` link)
- "Get a Quote" button — gold, links to contact section
- Mobile: hamburger menu revealing nav links

### 2. Hero
- Full viewport height on desktop, tall on mobile
- Headline: *"Reliable Electrical Services in the Garden Route"*
- Subheading: *"Professional electrical solutions for homes and businesses — new installations, fault finding, VSDs, and solar."*
- Two CTAs: **Call Now** (tel link) + **Email Us** (mailto link)
- Background: white with subtle navy accent stripe or geometric element

### 3. Services (4 Cards)
Grid of 4 cards, 2×2 on mobile, 4×1 on desktop:
- ⚡ New Installations
- ⚡ Fault Finding
- ⚡ VSDs (Variable Speed Drives)
- ⚡ Solar Installations

Each card: gold icon, navy heading, brief description, white background with navy border/shadow.

### 4. Why 4C Electrical (Trust Pillars)
3 columns:
- **Safety First** — Licensed, compliant, COC-certified work
- **Quality Workmanship** — Expert technicians, quality materials
- **Reliable Service** — On time, every time, across the Garden Route

### 5. Coverage Area
Simple centred text block:
*"Proudly serving the Garden Route"*
Brief mention of George, Mossel Bay, and surrounding areas for SEO.

### 6. Contact
- Large clickable phone number
- Clickable email address
- Simple enquiry form: Name, Phone, Message, Send button
- Form uses `mailto:` action (no backend required)

### 7. Footer
- Logo
- Business name and tagline
- Phone + email
- Copyright notice
- "Garden Route, South Africa"

---

## SEO Implementation

### Meta Tags
```html
<title>Electrical Services Garden Route | 4C Electrical</title>
<meta name="description" content="4C Electrical offers professional electrical services across the Garden Route — new installations, fault finding, VSDs, and solar. Call 065 865 6575.">
```

### JSON-LD Schema
Type: `Electrician` (subtype of `LocalBusiness`)
```json
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "4C Electrical",
  "telephone": "+27658656575",
  "email": "johan@4ce.co.za",
  "url": "https://4ce.co.za",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Garden Route"
  },
  "serviceType": [
    "New Electrical Installations",
    "Fault Finding",
    "VSD Installations",
    "Solar Installations"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  }
}
```

### Open Graph
- og:title, og:description, og:image (logo), og:url

---

## Railway Deployment

```
/
├── index.html
├── logo.jpeg
├── server.js          # Express static server
├── package.json
└── docs/
    └── plans/
```

`server.js` — serves `index.html` and static assets on `process.env.PORT`.

---

## Out of Scope

- CMS or dynamic content
- Backend form processing (mailto action used)
- Analytics (can be added later)
- Multiple pages
