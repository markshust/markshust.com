# Task 003: Navigation Component (Nav.astro)

**Status**: completed
**Depends on**: 001
**Retry count**: 0

## Description
Create a new Nav.astro component with fixed positioning, backdrop blur, colored hover underlines per section, mobile hamburger menu, and scroll-shrink behavior.

## Context
- Replaces old Header.astro for the homepage (Header.astro is kept but updated for blog pages)
- Reference: concept-10-supernova2.html nav.main-nav section (lines 114-207 CSS, lines 1422-1435 HTML)
- Nav links: Writing (#writing), Building (#building), Teaching (#teaching), Archive (/blog), Contact (mailto:mark@shust.com)
- For blog pages, nav links should point to absolute URLs (/#writing, /#building, etc.)
- Logo: "mark.shust" with orange dot

## Requirements (Test Descriptions)
- [ ] `Nav.astro renders a fixed nav with backdrop blur`
- [ ] `Nav.astro shows logo "mark.shust" with orange-colored dot`
- [ ] `Nav.astro renders nav links: Writing, Building, Teaching, Archive, Contact`
- [ ] `Nav links have color-coded hover effects (orange/blue/green/white/white)`
- [ ] `Nav.astro includes hamburger toggle button hidden on desktop`
- [ ] `Mobile nav overlay shows on toggle click (via client script)`
- [ ] `Nav shrinks on scroll (via client script with .scrolled class)`
- [ ] `CSS is scoped or in a dedicated nav section of components.css`

## Acceptance Criteria
- Nav works as both homepage anchor nav and site-wide nav
- Accepts a `homepage` boolean prop to toggle between #anchor and /page links
- Mobile hamburger works at 768px breakpoint
- Smooth transitions on scroll shrink

## Implementation Notes
Create `src/components/Nav.astro`. The component accepts `homepage?: boolean` prop.

When `homepage=true`: links go to #writing, #building, #teaching, #archive
When `homepage=false`: links go to /#writing, /#building, /#teaching, /blog

Include client-side `<script>` for:
1. Mobile toggle (classList.toggle('open'))
2. Nav shrink on scroll (add .scrolled class when scrollY > 60)

CSS goes into a `<style>` block in the component or into src/styles/components.css.
