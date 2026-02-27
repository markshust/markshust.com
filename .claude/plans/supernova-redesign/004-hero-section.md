# Task 004: Hero Section Component

**Status**: completed
**Depends on**: 001, 002
**Retry count**: 0

## Description
Create the Hero.astro component with the large name, code tagline, role pills, photo with techy blocky frame, floating badges, and scroll indicator.

## Context
- Reference: concept-10-supernova2.html hero section (lines 212-516 CSS, lines 1437-1486 HTML)
- Photo uses CSS background-image pointing to /images/mark-shust.png
- Clip-path polygon creates the techy blocky frame
- Corner brackets with colored accents (orange TL, blue TR, green BL, gray BR)
- Floating code badge and location label
- Scroll cue pill animation at bottom
- Animations: heroReveal, slideUp, photoIn, blink, scanDown, floatBadge, floatLabel

## Requirements (Test Descriptions)
- [ ] `Hero.astro renders hero section with min-height 100vh`
- [ ] `Hero shows "hey, I'm Mark" heading with gradient orange on "Mark"`
- [ ] `Hero renders code tagline with syntax-colored spans`
- [ ] `Hero renders three role pills: Writer (orange), Builder (blue), Teacher (green)`
- [ ] `Hero renders description paragraph`
- [ ] `Hero renders photo with clip-path blocky frame and corner brackets`
- [ ] `Hero includes floating code badge and location label`
- [ ] `Hero includes scroll cue indicator`
- [ ] `CSS includes all keyframe animations (heroReveal, slideUp, photoIn, etc.)`
- [ ] `Responsive: single column on <=1024px, photo above content`

## Acceptance Criteria
- Visually matches concept hero section
- Photo displays correctly with clip-path frame
- Animations play on page load
- Responsive layout works

## Implementation Notes
Create `src/components/Hero.astro`.

The diagonal sweep behind hero uses `::before` pseudo-element with skewX(-12deg).

Photo CSS: `background: var(--dark-card) url('/images/mark-shust.png') center/cover no-repeat`

All keyframe animations are defined in the component's `<style>` block.
