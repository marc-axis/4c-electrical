# Hero Photo + Contact Cleanup Design

**Date:** 2026-03-11

## Changes

### 1. Hero Banner — Background Photo
- Replace `bg-white` with a full-bleed Unsplash electrical/industrial photo
- Dark navy overlay (`bg-navy/70`) over image for text legibility
- All existing hero content unchanged (eyebrow, h1, subheading, CTAs, trust bar)
- Text colours: headline stays `text-navy` → change to `text-white`, subheading to `text-gray-200`, trust bar items to `text-gray-300`
- Trust bar border: `border-gray-100` → `border-white/20`

### 2. Contact Section — Remove Form, Full-Width Layout
- Remove the enquiry form (right column) entirely
- Phone and email cards: change from `lg:grid-cols-2` single-column left side to a centred `sm:grid-cols-2` spanning full width
- Service area note: centred below cards
- Section header unchanged
