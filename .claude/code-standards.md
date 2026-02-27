# Code Standards

## Project: markshust.com (Astro v5 Blog)

## Language & Framework
- Astro v5 with MDX support
- TypeScript (strict mode via astro/base tsconfig)
- No React, Vue, or Svelte — Astro components only
- No Tailwind — plain CSS with custom properties

## CSS Standards
- Use CSS custom properties (design tokens) from `src/styles/tokens.css`
- Prefer BEM-like class naming: `.section-title`, `.nav-link`, `.post-card`
- Component-scoped styles via `<style>` blocks in .astro files
- Global utility styles in src/styles/ files
- Never use inline styles except for dynamic CSS custom properties (e.g., `style="--mx: {x}%"`)
- Use `clamp()` for responsive font sizes and spacing
- Use CSS Grid and Flexbox (no floats except legacy compatibility)

## Astro Component Standards
- Props typed with interface Props `{ prop: type }`
- Use `Astro.props` destructuring
- Prefer `const` over `let`/`var`
- Client-side JS in `<script>` blocks (not type="module" unless needed)
- Images from public/ are referenced as `/path/to/image` (not imported)
- Images from src/ are imported with `import { Image } from 'astro:assets'`

## JavaScript Standards
- Vanilla JS only (no external JS libraries)
- Use IntersectionObserver for scroll effects
- Use passive: true for scroll event listeners
- Wrap scripts in IIFE when in global scope: `(function() { 'use strict'; ... })()`
- Use `const`/`let`, arrow functions, template literals

## File Organization
```
src/
  components/     # Reusable Astro components
  layouts/        # Page layouts
  pages/          # Astro/MDX/MD pages
  styles/         # Global CSS files
  scripts/        # Client-side JS files
public/
  images/         # Static images
  favicon.ico
```

## Accessibility
- All images have `alt` attributes
- Interactive elements are keyboard accessible
- Color contrast meets WCAG AA

## Performance
- No render-blocking scripts (use defer/async or inline at end of body)
- Fonts loaded with preconnect
- Images optimized (use Astro `<Image>` for imported images)
