# Task 013: Blog Post Layout (Dark Theme)

**Status**: completed
**Depends on**: 001, 003, 010
**Retry count**: 0

## Description
Restyle BlogPost.astro layout to match the Supernova dark theme with the new Nav, Footer, proper typography, and code block styling.

## Context
- Current layout: white bg, Verdana, basic styling
- New: dark bg, Inter/Space Grotesk fonts, styled article with proper heading hierarchy
- Must preserve: title, date display, slot for MDX content, code-titles.js functionality
- Nav should use homepage=false (links point to homepage sections)
- Article content needs good readability on dark background
- Code blocks already use github-dark Shiki theme — just needs surrounding styling

## Requirements (Test Descriptions)
- [ ] `BlogPost layout uses dark background (var(--dark))`
- [ ] `BlogPost layout renders Nav with homepage=false`
- [ ] `BlogPost layout renders Footer`
- [ ] `Article title uses Space Grotesk font, large size`
- [ ] `Article date is styled with JetBrains Mono, gray color`
- [ ] `Article body text uses Inter font with good line-height for readability`
- [ ] `Headings (h1-h6) use Space Grotesk and light color`
- [ ] `Links in article body use orange color`
- [ ] `Code blocks and .remark-code-title styling preserved and enhanced`
- [ ] `Article max-width ~65-75ch for readability, centered`
- [ ] `Images in posts are responsive (max-width: 100%)`

## Acceptance Criteria
- Blog posts render correctly with dark theme
- All 97 existing posts still work
- Code blocks with titles display properly
- Good readability with proper contrast

## Implementation Notes
Overwrite `src/layouts/BlogPost.astro`.

The article area should be wrapped in a container with max-width (about 800px or 70ch) and centered. Add padding-top to account for fixed nav.

Article-specific styles go in the layout's `<style>` block or in a `src/styles/blog.css` file imported by the layout.

Key content styles needed:
- `article a { color: var(--orange); }`
- `article h1-h6 { color: var(--white); font-family: var(--font-heading); }`
- `article p, li { color: var(--gray-light); line-height: 1.8; }`
- `article code { background: var(--dark-subtle); }`
- `article blockquote { border-left: 3px solid var(--orange); }`
