# Task 002: Copy Image Asset and Update BaseHead

**Status**: completed
**Depends on**: none
**Retry count**: 0

## Description
Copy mark-shust.png to public/images/ and update BaseHead.astro to include Google Fonts (Space Grotesk, Inter, JetBrains Mono) and import the new CSS architecture.

## Context
- Source image: `/Users/markshust/Sites/markshust.com/mark-shust.png` (project root)
- Destination: `public/images/mark-shust.png`
- BaseHead.astro currently imports `../styles/global.css` — update to import new CSS files
- Must preserve: Google Analytics, code-titles.js, meta tags, Open Graph tags
- Font URL: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap`

## Requirements (Test Descriptions)
- [ ] `mark-shust.png exists at public/images/mark-shust.png`
- [ ] `public/images/ directory is created if it doesn't exist`
- [ ] `BaseHead.astro includes Google Fonts preconnect links`
- [ ] `BaseHead.astro includes Google Fonts CSS link`
- [ ] `BaseHead.astro imports the new CSS (tokens + base via global.css rewrite)`
- [ ] `BaseHead.astro preserves Google Analytics snippet`
- [ ] `BaseHead.astro preserves code-titles.js script`
- [ ] `BaseHead.astro preserves all meta/OG/Twitter tags`

## Acceptance Criteria
- Image accessible at /images/mark-shust.png
- Fonts load on all pages
- No removed functionality in BaseHead

## Implementation Notes
```bash
mkdir -p public/images
cp mark-shust.png public/images/mark-shust.png
```

Add to BaseHead.astro before the closing meta tags:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```
