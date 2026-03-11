# 4C Electrical Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a professional, SEO-optimised single-page landing page for 4C Electrical (4ce.co.za) deployable to Railway with zero build steps.

**Architecture:** Single `index.html` with Tailwind CSS loaded via CDN, a minimal Express static file server for Railway hosting, and embedded JSON-LD schema markup for local SEO. No build pipeline, no frameworks, no database.

**Tech Stack:** HTML5, Tailwind CSS CDN, Vanilla JS (mobile nav only), Node.js + Express (static server), Railway (hosting)

**Design:** White base · Deep Navy `#1B2A4A` · Gold `#C9A84C` · Inter font via Google Fonts CDN

**Reference:** `docs/plans/2026-03-11-landing-page-design.md`

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `server.js`
- Create: `.gitignore`
- Create: `index.html` (empty shell)

**Step 1: Create `package.json`**

```json
{
  "name": "4c-electrical",
  "version": "1.0.0",
  "description": "4C Electrical landing page",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

**Step 2: Install dependencies**

```bash
npm install
```

Expected: `node_modules/` created, `package-lock.json` written.

**Step 3: Create `server.js`**

```js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`4C Electrical running on port ${PORT}`);
});
```

**Step 4: Create `.gitignore`**

```
node_modules/
.DS_Store
*.log
```

**Step 5: Create empty `index.html` shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Electrical Services Garden Route | 4C Electrical</title>
</head>
<body>
  <p>Coming soon</p>
</body>
</html>
```

**Step 6: Verify server starts**

```bash
node server.js
```

Open `http://localhost:3000` — expected: "Coming soon" text.

**Step 7: Commit**

```bash
git init
git add .
git commit -m "feat: project scaffold with Express static server"
```

---

### Task 2: HTML Head — Meta, Fonts, Tailwind, Schema

**Files:**
- Modify: `index.html` — replace `<head>` contents

**Step 1: Replace `<head>` with full meta + CDN tags**

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Meta -->
  <title>Electrical Services Garden Route | 4C Electrical</title>
  <meta name="description" content="4C Electrical offers professional electrical services across the Garden Route — new installations, fault finding, VSDs, and solar. Call 065 865 6575." />
  <meta name="keywords" content="electrician Garden Route, electrical contractor George, electrical services Mossel Bay, solar installation Garden Route, VSD installation, fault finding electrician" />
  <meta name="author" content="4C Electrical" />
  <link rel="canonical" href="https://4ce.co.za" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Electrical Services Garden Route | 4C Electrical" />
  <meta property="og:description" content="Professional electrical solutions for homes and businesses across the Garden Route. New installations, fault finding, VSDs, and solar." />
  <meta property="og:url" content="https://4ce.co.za" />
  <meta property="og:image" content="https://4ce.co.za/logo.jpeg" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: '#1B2A4A',
            gold: '#C9A84C',
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- JSON-LD Schema Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "4C Electrical",
    "telephone": "+27658656575",
    "email": "johan@4ce.co.za",
    "url": "https://4ce.co.za",
    "logo": "https://4ce.co.za/logo.jpeg",
    "image": "https://4ce.co.za/logo.jpeg",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Garden Route",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -33.9646,
        "longitude": 22.4617
      },
      "geoRadius": "150000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "New Electrical Installations"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fault Finding"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "VSD Installations"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Solar Installations"}}
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27658656575",
      "contactType": "customer service",
      "availableLanguage": ["English", "Afrikaans"]
    }
  }
  </script>
</head>
```

**Step 2: Verify in browser**

```bash
node server.js
```

Open `http://localhost:3000` — check page title in browser tab reads "Electrical Services Garden Route | 4C Electrical". Open DevTools → Elements → confirm Tailwind script tag loads.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: SEO meta tags, Tailwind CDN config, JSON-LD schema"
```

---

### Task 3: Sticky Navigation

**Files:**
- Modify: `index.html` — add `<body>` opening and `<nav>` section

**Step 1: Replace `<body>` content with nav**

```html
<body class="font-sans text-gray-800 antialiased">

  <!-- Sticky Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="#" class="flex items-center space-x-3">
          <img src="/logo.jpeg" alt="4C Electrical Logo" class="h-10 w-10 rounded-full object-cover" />
          <span class="text-white font-bold text-lg tracking-wide">4C Electrical</span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="#services" class="text-gray-300 hover:text-gold transition-colors text-sm font-medium">Services</a>
          <a href="#why-us" class="text-gray-300 hover:text-gold transition-colors text-sm font-medium">Why Us</a>
          <a href="#coverage" class="text-gray-300 hover:text-gold transition-colors text-sm font-medium">Coverage</a>
          <a href="tel:+27658656575" class="text-gray-300 hover:text-gold transition-colors text-sm font-medium">065 865 6575</a>
          <a href="#contact" class="bg-gold text-navy font-bold text-sm px-5 py-2 rounded hover:bg-yellow-500 transition-colors">
            Get a Quote
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <button id="menu-btn" class="md:hidden text-gray-300 hover:text-white focus:outline-none" aria-label="Toggle menu">
          <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-navy border-t border-gray-700">
      <div class="px-4 pt-2 pb-4 space-y-2">
        <a href="#services" class="block text-gray-300 hover:text-gold py-2 text-sm font-medium">Services</a>
        <a href="#why-us" class="block text-gray-300 hover:text-gold py-2 text-sm font-medium">Why Us</a>
        <a href="#coverage" class="block text-gray-300 hover:text-gold py-2 text-sm font-medium">Coverage</a>
        <a href="tel:+27658656575" class="block text-gray-300 hover:text-gold py-2 text-sm font-medium">065 865 6575</a>
        <a href="#contact" class="block bg-gold text-navy font-bold text-sm px-4 py-2 rounded text-center mt-2 hover:bg-yellow-500 transition-colors">
          Get a Quote
        </a>
      </div>
    </div>
  </nav>
```

**Step 2: Add mobile menu JS just before `</body>`**

```html
  <script>
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });
  </script>
</body>
```

**Step 3: Verify in browser**

Open `http://localhost:3000` — confirm navy bar sticks on scroll. Resize to mobile width — confirm hamburger appears and menu toggles.

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: sticky navigation with mobile hamburger menu"
```

---

### Task 4: Hero Section

**Files:**
- Modify: `index.html` — add hero after `</nav>`

**Step 1: Add hero section**

```html
  <!-- Hero Section -->
  <section class="min-h-screen flex items-center bg-white pt-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="max-w-3xl">

        <!-- Eyebrow -->
        <div class="flex items-center space-x-2 mb-6">
          <div class="w-8 h-0.5 bg-gold"></div>
          <span class="text-gold font-semibold text-sm uppercase tracking-widest">Garden Route</span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
          Reliable Electrical<br/>Services in the<br/>
          <span class="text-gold">Garden Route</span>
        </h1>

        <!-- Subheading -->
        <p class="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
          Professional electrical solutions for homes and businesses. New installations, expert fault finding, VSD installations, and solar — done right, every time.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="tel:+27658656575"
             class="inline-flex items-center justify-center bg-navy text-white font-bold text-base px-8 py-4 rounded hover:bg-blue-900 transition-colors shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call 065 865 6575
          </a>
          <a href="mailto:johan@4ce.co.za"
             class="inline-flex items-center justify-center bg-gold text-navy font-bold text-base px-8 py-4 rounded hover:bg-yellow-500 transition-colors shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email Us
          </a>
        </div>

        <!-- Trust bar -->
        <div class="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-100">
          <div class="flex items-center space-x-2 text-gray-500 text-sm">
            <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Licensed & Insured</span>
          </div>
          <div class="flex items-center space-x-2 text-gray-500 text-sm">
            <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span>Garden Route</span>
          </div>
          <div class="flex items-center space-x-2 text-gray-500 text-sm">
            <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span>COC Certified</span>
          </div>
          <div class="flex items-center space-x-2 text-gray-500 text-sm">
            <svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span>Residential & Commercial</span>
          </div>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Verify in browser**

Confirm: full-height hero, headline legible, both CTAs visible, trust bar renders. Check on mobile (resize browser).

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: hero section with CTAs and trust bar"
```

---

### Task 5: Services Section

**Files:**
- Modify: `index.html` — add services section after hero

**Step 1: Add services section**

```html
  <!-- Services Section -->
  <section id="services" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center mb-14">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <div class="w-8 h-0.5 bg-gold"></div>
          <span class="text-gold font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <div class="w-8 h-0.5 bg-gold"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-navy">Our Services</h2>
        <p class="text-gray-500 mt-3 max-w-xl mx-auto">End-to-end electrical solutions delivered with precision and care across the Garden Route.</p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- New Installations -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gold transition-all group">
          <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
            <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-navy font-bold text-lg mb-2">New Installations</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Complete electrical installations for new builds and renovations — residential and commercial.</p>
        </div>

        <!-- Fault Finding -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gold transition-all group">
          <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
            <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <h3 class="text-navy font-bold text-lg mb-2">Fault Finding</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Expert diagnosis and repair of electrical faults. Fast, accurate, and reliable.</p>
        </div>

        <!-- VSDs -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gold transition-all group">
          <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
            <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>
          </div>
          <h3 class="text-navy font-bold text-lg mb-2">VSD Installations</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Variable Speed Drive installation and commissioning for industrial and commercial motor control.</p>
        </div>

        <!-- Solar -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gold transition-all group">
          <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
            <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <h3 class="text-navy font-bold text-lg mb-2">Solar Installations</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Grid-tied and off-grid solar solutions. Reduce your energy costs with a professionally installed system.</p>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Verify in browser**

Confirm 4 cards render correctly. Hover each card — border turns gold, icon background changes. Check 2-column layout on mobile.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: services section with 4 animated cards"
```

---

### Task 6: Why 4C Electrical Section

**Files:**
- Modify: `index.html` — add why-us section after services

**Step 1: Add why-us section**

```html
  <!-- Why 4C Electrical -->
  <section id="why-us" class="py-20 bg-navy">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center mb-14">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <div class="w-8 h-0.5 bg-gold"></div>
          <span class="text-gold font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <div class="w-8 h-0.5 bg-gold"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white">The 4C Electrical Difference</h2>
        <p class="text-gray-400 mt-3 max-w-xl mx-auto">We don't just fix wires. We deliver peace of mind.</p>
      </div>

      <!-- Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Safety First -->
        <div class="text-center p-8">
          <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-xl mb-3">Safety First</h3>
          <p class="text-gray-400 leading-relaxed">Every job meets South African electrical standards. We issue Certificates of Compliance (COCs) and never cut corners on safety.</p>
        </div>

        <!-- Quality Workmanship -->
        <div class="text-center p-8">
          <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-xl mb-3">Quality Workmanship</h3>
          <p class="text-gray-400 leading-relaxed">Skilled technicians using quality materials. Whether it's a single circuit or a full commercial installation, we do it properly.</p>
        </div>

        <!-- Reliable Service -->
        <div class="text-center p-8">
          <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-xl mb-3">Reliable Service</h3>
          <p class="text-gray-400 leading-relaxed">We show up when we say we will. Serving homes and businesses across the Garden Route with consistent, dependable service.</p>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Verify in browser**

Confirm navy background section renders, 3 gold-circle icons visible, text legible in white/gray on navy.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: why-us section with trust pillars on navy background"
```

---

### Task 7: Coverage Area Section

**Files:**
- Modify: `index.html` — add coverage section

**Step 1: Add coverage section**

```html
  <!-- Coverage Area -->
  <section id="coverage" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <div class="flex items-center justify-center space-x-2 mb-4">
        <div class="w-8 h-0.5 bg-gold"></div>
        <span class="text-gold font-semibold text-sm uppercase tracking-widest">Where We Work</span>
        <div class="w-8 h-0.5 bg-gold"></div>
      </div>

      <h2 class="text-3xl sm:text-4xl font-extrabold text-navy mb-4">Serving the Garden Route</h2>
      <p class="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
        Based in the Garden Route, we provide electrical services to homes, farms, and businesses across the region — including George, Mossel Bay, Knysna, Wilderness, Sedgefield, and surrounding areas.
      </p>

      <!-- Area Tags -->
      <div class="flex flex-wrap justify-center gap-3">
        {['George', 'Mossel Bay', 'Knysna', 'Wilderness', 'Sedgefield', 'Hartenbos', 'Great Brak River', 'Albertinia'].map(area => `
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">${area}</span>
        `).join('')}
      </div>

    </div>
  </section>
```

> **Note:** The area tags use a simple inline JS template — replace with static HTML spans if preferred:
```html
      <div class="flex flex-wrap justify-center gap-3">
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">George</span>
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">Mossel Bay</span>
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">Knysna</span>
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">Wilderness</span>
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">Sedgefield</span>
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">Hartenbos</span>
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">Great Brak River</span>
        <span class="bg-gray-50 border border-gray-200 text-navy font-medium text-sm px-4 py-2 rounded-full">Albertinia</span>
      </div>
```

**Step 2: Use the static HTML version** (no JS template literals in HTML). Use the static spans above.

**Step 3: Verify in browser**

Confirm area tags render as pill badges in a wrapping row.

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: coverage area section with Garden Route location tags"
```

---

### Task 8: Contact Section

**Files:**
- Modify: `index.html` — add contact section

**Step 1: Add contact section**

```html
  <!-- Contact Section -->
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-14">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <div class="w-8 h-0.5 bg-gold"></div>
          <span class="text-gold font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <div class="w-8 h-0.5 bg-gold"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-navy">Contact 4C Electrical</h2>
        <p class="text-gray-500 mt-3">Ready to get started? Reach out — we'll get back to you promptly.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Contact Details -->
        <div class="space-y-8">
          <div>
            <h3 class="text-navy font-bold text-xl mb-6">Speak to Us Directly</h3>

            <!-- Phone -->
            <a href="tel:+27658656575" class="flex items-center space-x-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-gold hover:shadow-md transition-all group mb-4">
              <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-400 text-xs font-medium uppercase tracking-wide mb-0.5">Phone</p>
                <p class="text-navy font-bold text-lg">065 865 6575</p>
              </div>
            </a>

            <!-- Email -->
            <a href="mailto:johan@4ce.co.za" class="flex items-center space-x-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-gold hover:shadow-md transition-all group">
              <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-400 text-xs font-medium uppercase tracking-wide mb-0.5">Email</p>
                <p class="text-navy font-bold text-lg">johan@4ce.co.za</p>
              </div>
            </a>
          </div>

          <!-- Service area note -->
          <div class="flex items-start space-x-3 p-4 bg-navy/5 rounded-lg border border-navy/10">
            <svg class="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-gray-600 text-sm">Serving the entire Garden Route — George, Mossel Bay, Knysna, and surrounding areas.</p>
          </div>
        </div>

        <!-- Enquiry Form -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
          <h3 class="text-navy font-bold text-xl mb-6">Send an Enquiry</h3>
          <form action="mailto:johan@4ce.co.za" method="post" enctype="text/plain" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="John Smith"
                     class="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="082 000 0000"
                     class="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1.5">How Can We Help?</label>
              <textarea id="message" name="message" rows="4" required placeholder="Describe your electrical need..."
                        class="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"></textarea>
            </div>
            <button type="submit"
                    class="w-full bg-navy text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-900 transition-colors shadow-sm">
              Send Enquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
```

**Step 2: Verify in browser**

Confirm phone and email cards are clickable, form renders with focus ring on inputs, layout is 2-col on desktop and stacked on mobile.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: contact section with phone/email cards and mailto form"
```

---

### Task 9: Footer

**Files:**
- Modify: `index.html` — add footer before closing `</body>`

**Step 1: Add footer**

```html
  <!-- Footer -->
  <footer class="bg-navy py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Logo + Name -->
        <div class="flex items-center space-x-3">
          <img src="/logo.jpeg" alt="4C Electrical" class="h-10 w-10 rounded-full object-cover" />
          <div>
            <p class="text-white font-bold">4C Electrical</p>
            <p class="text-gray-400 text-xs">Reliable Electrical Services</p>
          </div>
        </div>

        <!-- Centre: Area -->
        <p class="text-gray-400 text-sm text-center">
          Serving the Garden Route, South Africa
        </p>

        <!-- Right: Contact -->
        <div class="text-center md:text-right">
          <a href="tel:+27658656575" class="block text-gray-300 hover:text-gold text-sm transition-colors">065 865 6575</a>
          <a href="mailto:johan@4ce.co.za" class="block text-gray-300 hover:text-gold text-sm transition-colors">johan@4ce.co.za</a>
        </div>

      </div>

      <div class="border-t border-gray-700 mt-8 pt-6 text-center">
        <p class="text-gray-500 text-xs">&copy; 2026 4C Electrical. All rights reserved.</p>
      </div>
    </div>
  </footer>
```

**Step 2: Verify in browser**

Confirm footer is navy, 3-column on desktop, stacked on mobile. Phone and email links functional.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: footer with logo, contact details, and copyright"
```

---

### Task 10: Smooth Scroll + Polish

**Files:**
- Modify: `index.html` — add smooth scroll CSS and body padding fix

**Step 1: Add smooth scroll to `<html>` tag**

Change opening `<html>` tag:
```html
<html lang="en" class="scroll-smooth">
```

**Step 2: Add `pt-16` padding to first section so nav doesn't cover content**

The hero already has `pt-16` — verify all anchor-target sections have `scroll-mt-16` class:
- `<section id="services"` → add `scroll-mt-16`
- `<section id="why-us"` → add `scroll-mt-16`
- `<section id="coverage"` → add `scroll-mt-16`
- `<section id="contact"` → add `scroll-mt-16`

**Step 3: Verify smooth scroll**

Click each nav link — page scrolls smoothly to section, content is not hidden behind sticky nav.

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: smooth scroll and scroll-margin for sticky nav offset"
```

---

### Task 11: Railway Deployment

**Files:**
- Create: `railway.json` (optional but recommended)
- Verify: `package.json` has correct `start` script

**Step 1: Verify `package.json` start script**

Confirm `"start": "node server.js"` is present in `package.json`.

**Step 2: Create `railway.json`**

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "node server.js",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

**Step 3: Final local test**

```bash
node server.js
```

Open `http://localhost:3000` — scroll through all sections, test all links, test mobile nav at 375px width.

**Step 4: Init git and push to GitHub (if not already)**

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

**Step 5: Deploy on Railway**

1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub repo
3. Select the 4C repo
4. Add custom domain: `4ce.co.za`
5. Set DNS CNAME at your registrar pointing to Railway's provided hostname

**Step 6: Verify live site**

Open `https://4ce.co.za` — confirm all sections load, phone links work on mobile, page title correct in browser.

**Step 7: Final commit**

```bash
git add railway.json
git commit -m "feat: Railway deployment config"
git push
```

---

## Post-Launch Checklist

- [ ] Submit `https://4ce.co.za` to Google Search Console
- [ ] Request indexing in Search Console
- [ ] Add business to Google Business Profile (critical for local SEO)
- [ ] Submit to `garden-route-info.co.za` and `procompare.co.za` directories
- [ ] Validate JSON-LD schema at [validator.schema.org](https://validator.schema.org)
- [ ] Test page speed at [pagespeed.web.dev](https://pagespeed.web.dev)
