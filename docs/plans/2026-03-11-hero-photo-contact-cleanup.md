# Hero Photo + Contact Cleanup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a full-bleed background photo with dark overlay to the hero banner, and simplify the contact section to phone/email cards only (no form).

**Architecture:** Two independent edits to `public/index.html`. Hero gets a relative-positioned background image with an absolute dark overlay and z-indexed content. Contact section drops the form column and centres the cards full-width.

**Tech Stack:** HTML, Tailwind CSS CDN (inline style for background-image, Tailwind utilities for overlay/layout)

---

### Task 1: Hero — Background Photo + Overlay

**Files:**
- Modify: `public/index.html` lines 146–214 (hero section)

**Step 1: Find a suitable Unsplash electrical photo**

Use WebSearch or WebFetch to find a direct Unsplash image URL for an electrical/industrial/solar photo. Good search terms: `site:unsplash.com electrical panel` or `unsplash.com solar installation`. The URL must be a direct image link ending in `.jpg` or use the Unsplash CDN format:
`https://images.unsplash.com/photo-<ID>?auto=format&fit=crop&w=1920&q=80`

Recommended searches:
- "unsplash electrical contractor south africa"
- "unsplash solar panels roof"
- "unsplash electrical switchboard"

Pick a high-quality landscape-orientation photo. Note the full URL.

**Step 2: Replace hero section opening tag**

Find:
```html
  <section class="min-h-screen flex items-center bg-white pt-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
```

Replace with:
```html
  <section class="relative min-h-screen flex items-center pt-16 bg-cover bg-center bg-navy" style="background-image: url('PHOTO_URL_HERE')">
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-navy/75"></div>
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
```

Replace `PHOTO_URL_HERE` with the Unsplash URL found in Step 1.

**Step 3: Update hero text colours for dark background**

Make these replacements (all within the hero section):

| Find | Replace |
|---|---|
| `class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6"` | `class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"` |
| `class="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"` | `class="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"` |
| `class="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-100"` | `class="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/20"` |

Also replace all four trust bar item classes from `text-gray-500` to `text-gray-300`:
```html
class="flex items-center space-x-2 text-gray-500 text-sm"
```
→
```html
class="flex items-center space-x-2 text-gray-300 text-sm"
```
(There are 4 of these — replace all.)

**Step 4: Close the new inner div**

Find the closing tags of the hero section (currently two `</div>` closing the inner content div and the section):
```html
      </div>
    </div>
  </section>
```

The structure now needs three closing divs (inner content, overlay wrapper doesn't need closing — it's self-contained, the extra `<div class="relative z-10...">` needs closing):
```html
      </div>
    </div>
  </section>
```
This remains the same — the `relative z-10` div wraps `<div class="max-w-3xl">` which already closes before the section ends. Verify the nesting is correct after editing.

**Step 5: Verify in browser**

Start server: `node server.js &`
Run: `curl -s http://localhost:3000 | grep -E "(bg-cover|bg-navy/75|absolute inset-0)" | head -5`
Expected: All three classes present.
Kill server.

**Step 6: Commit**

```bash
git add public/index.html
git commit -m "feat: hero background photo with dark overlay"
```

---

### Task 2: Contact — Remove Form, Full-Width Cards

**Files:**
- Modify: `public/index.html` lines 382–451 (contact section inner content)

**Step 1: Replace the contact section inner grid**

Find the entire block from the grid opening to the section closing (lines 382–452):
```html
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Contact Details -->
        <div class="space-y-8">
          <div>
            <h3 class="text-navy font-bold text-xl mb-6">Speak to Us Directly</h3>

            <!-- Phone -->
            <a href="tel:+27658656575" class="flex items-center space-x-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-gold hover:shadow-md transition-all group mb-4">
              <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg class="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
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
```

Replace with this clean full-width layout:
```html
      <div class="max-w-2xl mx-auto">

        <!-- Phone + Email Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

          <!-- Phone -->
          <a href="tel:+27658656575" class="flex items-center space-x-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-gold hover:shadow-md transition-all group">
            <div class="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
              <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <svg class="w-6 h-6 text-gold group-hover:text-navy transition-colors" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div class="flex items-start justify-center space-x-3 p-4 bg-navy/5 rounded-lg border border-navy/10">
          <svg class="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          <p class="text-gray-600 text-sm">Serving the entire Garden Route — George, Mossel Bay, Knysna, and surrounding areas.</p>
        </div>

      </div>
```

**Step 2: Verify**

Start server: `node server.js &`
Run: `curl -s http://localhost:3000 | grep -c "Send an Enquiry"`
Expected: `0` (form is gone)

Run: `curl -s http://localhost:3000 | grep -c "max-w-2xl mx-auto"`
Expected: `1` (new layout present)
Kill server.

**Step 3: Commit**

```bash
git add public/index.html
git commit -m "feat: remove contact form, expand cards to full-width"
```

---

### Task 3: Push to GitHub

```bash
git push
```

Verify at https://github.com/marc-axis/4c-electrical that both commits appear.
