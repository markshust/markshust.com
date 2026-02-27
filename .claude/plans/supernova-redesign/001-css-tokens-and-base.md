# Task 001: CSS Design Tokens and Base Reset

**Status**: completed
**Depends on**: none
**Retry count**: 0

## Description
Create the CSS foundation: design tokens as custom properties, global reset, and base typography. This replaces the old Bear Blog global.css entirely.

## Context
- Replace: `src/styles/global.css` (Bear Blog derived, white bg, Verdana)
- Create: `src/styles/tokens.css`, `src/styles/base.css`
- Tokens from concept: orange (#FF6B35), blue (#3B82F6), green (#10B981), dark (#0A0A0F), etc.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (monospace)
- The old global.css import in BaseHead.astro will be updated in task 002

## Requirements (Test Descriptions)
- [ ] `tokens.css defines all color custom properties from concept (:root vars)`
- [ ] `tokens.css defines font-family tokens (--font-heading, --font-body, --font-mono)`
- [ ] `tokens.css defines spacing and sizing tokens`
- [ ] `base.css includes box-sizing reset for all elements`
- [ ] `base.css sets dark background, Inter font, smooth scrolling on html/body`
- [ ] `base.css styles base typography (headings use Space Grotesk, body uses Inter)`
- [ ] `base.css styles links with appropriate colors for dark theme`
- [ ] `base.css styles code blocks and pre tags for dark theme (preserving .remark-code-title)`
- [ ] `base.css styles blockquotes, tables, images for dark theme`
- [ ] `old global.css is replaced (deleted or emptied and redirected)`

## Acceptance Criteria
- tokens.css has all CSS custom properties needed by other tasks
- base.css provides a complete dark-theme foundation
- No visual regressions on code blocks (remark-code-title preserved)
- Files are at src/styles/tokens.css and src/styles/base.css

## Implementation Notes
Create src/styles/tokens.css with :root variables:
```css
:root {
  --orange: #FF6B35;
  --orange-bright: #FF8C5A;
  --orange-deep: #E85A20;
  --blue: #3B82F6;
  --blue-bright: #60A5FA;
  --blue-deep: #2563EB;
  --green: #10B981;
  --green-bright: #34D399;
  --green-deep: #059669;
  --dark: #0A0A0F;
  --dark-card: #111118;
  --dark-subtle: #1A1A25;
  --white: #F5F5F7;
  --gray: #7878A0;
  --gray-light: #BBBBD0;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

Replace global.css content with imports of tokens.css and base.css (or just rewrite global.css to contain both).
