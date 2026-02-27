# Task 011: Homepage Assembly (index.astro)

**Status**: completed
**Depends on**: 003, 004, 005, 006, 007, 008, 009, 010
**Retry count**: 0

## Description
Rewrite index.astro to assemble all homepage components: Nav, Hero, DiagonalBand+Marquee, WritingSection, DiagonalBand, BuildingSection, TeachingSection, ArchiveSection, Footer. Pull real blog post data for writing and archive sections.

## Context
- Current index.astro is a simple bio page — complete rewrite
- Must read blog post frontmatter (reuse the fast fs.readFileSync approach from blog.astro)
- Pass latest 4 posts to WritingSection
- Pass all posts grouped by year to ArchiveSection
- Wrap everything in a `.site-wrapper` div with max-width 2560px

## Requirements (Test Descriptions)
- [ ] `index.astro imports and renders Nav with homepage=true`
- [ ] `index.astro imports and renders Hero component`
- [ ] `index.astro renders DiagonalBand with MarqueeTrack between hero and writing`
- [ ] `index.astro imports and renders WritingSection with latest 4 posts`
- [ ] `index.astro renders DiagonalBand (blue, empty) between writing and building`
- [ ] `index.astro imports and renders BuildingSection`
- [ ] `index.astro imports and renders TeachingSection`
- [ ] `index.astro imports and renders ArchiveSection with all posts by year`
- [ ] `index.astro imports and renders Footer`
- [ ] `Page wrapped in .site-wrapper with max-width 2560px`
- [ ] `BaseHead used with appropriate title and description`

## Acceptance Criteria
- Full homepage renders matching concept
- Real blog posts appear in writing and archive sections
- Page builds without errors
- All sections are in correct order

## Implementation Notes
Rewrite `src/pages/index.astro`.

Reuse the fast frontmatter reading approach from blog.astro (fs.readFileSync + regex parse) to avoid compiling all MDX.

```astro
---
import BaseHead from '../components/BaseHead.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import DiagonalBand from '../components/DiagonalBand.astro';
import MarqueeTrack from '../components/MarqueeTrack.astro';
import WritingSection from '../components/WritingSection.astro';
import BuildingSection from '../components/BuildingSection.astro';
import TeachingSection from '../components/TeachingSection.astro';
import ArchiveSection from '../components/ArchiveSection.astro';
import Footer from '../components/Footer.astro';
// ... data fetching ...
---
```

Group posts by year for archive: `Object.groupBy` or manual reduce.
