# Task 010: Footer Component (Updated)

**Status**: completed
**Depends on**: 001
**Retry count**: 0

## Description
Replace the existing Footer.astro with the Supernova design — gradient top bar, 3-column grid layout, brand mark, links, and copyright.

## Context
- Reference: concept lines 1276-1333 CSS, lines 1723-1739 HTML
- Gradient top bar: linear-gradient(90deg, orange, blue, green)
- 3-column grid: brand (left), links (center), copyright (right)
- Brand: "mark.shust" with orange dot + "builder · writer · teacher" tagline
- Links: M.academy, GitHub, YouTube, Twitter, LinkedIn (JetBrains Mono, uppercase)
- Copyright: "© 1985–{year} Mark Shust. Cleveland, Ohio."
- Dark card background (#111118)

## Requirements (Test Descriptions)
- [ ] `Footer renders with dark-card background and gradient top bar`
- [ ] `Footer shows brand "mark.shust" with orange dot and tagline`
- [ ] `Footer renders 5 social/external links in center column`
- [ ] `Footer shows dynamic copyright year with "Cleveland, Ohio" text`
- [ ] `Footer uses 3-column grid layout on desktop`
- [ ] `Responsive: single column centered on <=768px`

## Acceptance Criteria
- Replaces existing Footer.astro completely
- Works on both homepage and blog pages
- Links open in new tabs

## Implementation Notes
Overwrite `src/components/Footer.astro`.

The gradient top bar is a `::before` pseudo-element with `height: 3px` and the three-color gradient.

Links are plain `<a>` tags (no need for HeaderLink component anymore since active states are handled differently in the new nav).
