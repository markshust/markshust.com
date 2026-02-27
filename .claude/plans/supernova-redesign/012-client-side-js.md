# Task 012: Client-Side JavaScript (Scroll Reveal, Counters, Glow)

**Status**: completed
**Depends on**: 011
**Retry count**: 0

## Description
Create the client-side JavaScript for scroll-triggered reveal animations, counter number animations, project card cursor glow, and smooth scroll for hash links.

## Context
- Reference: concept lines 1743-1828 (JavaScript section)
- Scroll reveal: IntersectionObserver adds `.visible` class to `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` elements
- Counter: IntersectionObserver triggers count-up animation on `.counter[data-target]` elements
- Glow: mousemove on `.project-poster` sets `--mx` and `--my` CSS custom properties
- Smooth scroll: hash links use scrollIntoView
- Nav behaviors (toggle, shrink) are already in Nav.astro from task 003

## Requirements (Test Descriptions)
- [ ] `Scroll reveal observer adds .visible to .reveal elements when intersecting`
- [ ] `Scroll reveal handles .reveal-left, .reveal-right, .reveal-scale variants`
- [ ] `Reveal observer uses threshold 0.12 and unobserves after triggering`
- [ ] `Counter animation counts from 0 to data-target with eased timing`
- [ ] `Counter uses requestAnimationFrame for smooth 60fps animation`
- [ ] `Project poster mousemove sets --mx and --my CSS properties`
- [ ] `Hash links use smooth scrollIntoView behavior`
- [ ] `All event listeners use passive: true where appropriate`

## Acceptance Criteria
- Scroll reveal animations trigger as user scrolls
- Counters animate when teaching section enters viewport
- Project cards have cursor-following glow
- No console errors

## Implementation Notes
Create `src/scripts/supernova.js` (or add to homepage inline `<script>`).

The script should be included in index.astro as an inline `<script>` tag (not a module import) so it runs after DOM is ready.

Wrap in IIFE: `(function() { 'use strict'; ... })();`

The reveal CSS classes (.reveal, .visible, etc.) should be defined in base.css or a dedicated animations section.
