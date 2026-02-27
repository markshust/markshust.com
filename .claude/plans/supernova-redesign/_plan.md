# Plan: Supernova Redesign

## Created
2026-02-26

## Status
completed

## Objective
Transform markshust.com from a minimal Bear Blog-derived Astro site into the bold maximalist Supernova2 design — dark theme, three-color identity (orange/blue/green), diagonal bands, scroll animations, responsive mobile nav, and full design system applied to all pages.

## Scope

### In Scope
- CSS architecture with design tokens (custom properties)
- Homepage rebuild: nav, hero, writing, building, teaching, archive, footer
- Blog listing page restyled to match archive section
- Blog post layout restyled with dark theme + code block styling
- About page restyled
- Scroll reveal animations, counter animations, cursor glow
- Mobile responsive nav with hamburger
- Copy mark-shust.png to public/images/
- Google Fonts integration (Space Grotesk, Inter, JetBrains Mono)

### Out of Scope
- Content changes to blog posts themselves
- New blog posts or pages
- RSS/sitemap config changes
- Astro config changes (beyond what's needed for the redesign)
- JavaScript frameworks or new dependencies

## Success Criteria
- [ ] Homepage matches concept-10-supernova2.html visually
- [ ] Blog listing page uses dark archive styling
- [ ] Blog post pages use dark theme with proper typography
- [ ] About page uses dark theme
- [ ] Mobile responsive at 480px, 768px, 1024px breakpoints
- [ ] All existing blog posts render correctly
- [ ] Code block titles still work
- [ ] Site builds without errors

## Task Overview
| Task | Description | Depends On | Status |
|------|-------------|------------|--------|
| 001 | CSS design tokens and base reset | - | pending |
| 002 | Copy mark-shust.png and update BaseHead with fonts | - | pending |
| 003 | Navigation component (Nav.astro) | 001 | pending |
| 004 | Hero section component | 001, 002 | pending |
| 005 | DiagonalBand and MarqueeTrack components | 001 | pending |
| 006 | Writing section component (featured posts) | 001 | pending |
| 007 | Building section component (project posters) | 001 | pending |
| 008 | Teaching section component (stats + academy) | 001 | pending |
| 009 | Archive section component | 001 | pending |
| 010 | Footer component | 001 | pending |
| 011 | Homepage assembly (index.astro) | 003-010 | pending |
| 012 | Client-side JS (scroll reveal, counters, glow) | 011 | pending |
| 013 | Blog post layout (dark theme) | 001, 003, 010 | pending |
| 014 | Blog listing page (archive style) | 001, 003, 010 | pending |
| 015 | About page restyle | 013 | pending |

## Architecture Notes
- CSS split into: `tokens.css` (variables), `base.css` (reset + typography), `components.css` (nav, footer, cards), `homepage.css` (homepage-specific sections), `blog.css` (blog post + listing styles)
- All CSS imported through BaseHead.astro so it's available globally
- Components are Astro-only (no React/Vue) — client JS via inline `<script>` tags
- Hero photo references `/images/mark-shust.png` from public/ (not Astro image optimization, since it's a large decorative image used via CSS background)
- Blog posts keep their existing MDX structure and frontmatter — only layout styling changes

## Risks & Mitigations
- Code block styling conflict: Preserve `.remark-code-title` styles in new CSS, adapt to dark theme
- 97 blog posts must still render: Only change layout wrapper, not content styles
- Performance of scroll animations: Use IntersectionObserver (already in concept), passive event listeners
