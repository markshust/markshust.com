# Task 005: DiagonalBand and MarqueeTrack Components

**Status**: completed
**Depends on**: 001
**Retry count**: 0

## Description
Create DiagonalBand.astro (colored skewed section dividers) and MarqueeTrack.astro (scrolling tech keyword ticker) components.

## Context
- Reference: concept lines 562-628 CSS, lines 1488-1494 HTML
- Band 1 (hero→writing): orange, skewY(-3deg), contains marquee ticker
- Band 2 (writing→building): blue, skewY(3deg), no content (just colored bar)
- Marquee: endless horizontal scroll of tech keywords with dot separators
- Grain texture overlay via SVG data URI ::after pseudo-element

## Requirements (Test Descriptions)
- [ ] `DiagonalBand renders a skewed colored band with configurable color and direction`
- [ ] `DiagonalBand includes grain texture overlay via ::after`
- [ ] `DiagonalBand accepts slot content (for marquee) or renders empty`
- [ ] `MarqueeTrack renders duplicated keyword list for infinite scroll illusion`
- [ ] `MarqueeTrack animates horizontally with CSS @keyframes marqueeScroll`
- [ ] `Keywords are styled with Space Grotesk, uppercase, with dot separators`

## Acceptance Criteria
- Band 1 (orange with ticker) and Band 2 (blue empty) both render correctly
- Marquee scrolls infinitely without gaps
- Bands create smooth diagonal transitions between sections

## Implementation Notes
Create `src/components/DiagonalBand.astro` with props: `color` (CSS color), `direction` ('down' | 'up'), `class` (for specific band styling).

Create `src/components/MarqueeTrack.astro` with hardcoded tech keywords: PHP, DOCKER, MAGENTO, REACT, LINUX, AI, CLAUDE CODE, MYSQL, JAVASCRIPT, NGINX, GRAPHQL, WEBSOCKETS, M.ACADEMY, REDIS, COMPOSER, GIT, NODE.JS, MARKO

Keywords are duplicated in HTML for seamless loop. The CSS `animation: marqueeScroll 40s linear infinite` moves `translateX(0)` to `translateX(-50%)`.
