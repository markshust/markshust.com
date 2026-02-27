# Task 014: Blog Listing Page (Archive Style)

**Status**: completed
**Depends on**: 001, 003, 010
**Retry count**: 0

## Description
Restyle blog.astro to use the dark archive design with year-grouped posts, matching the archive section styling from the homepage.

## Context
- Current blog.astro: simple list with date + title per line, white bg
- New design: dark bg, year-grouped posts with archive styling
- Reuse archive section CSS patterns (but as a full page, not just a section)
- Keep the existing fast frontmatter reading approach
- Use Nav (homepage=false) and Footer

## Requirements (Test Descriptions)
- [ ] `Blog page uses dark background`
- [ ] `Blog page renders Nav with homepage=false`
- [ ] `Blog page renders Footer`
- [ ] `Blog page shows page title "The Archive — all posts"`
- [ ] `Posts are grouped by year with large year labels`
- [ ] `Each post row shows title and date with hover effect`
- [ ] `Posts sorted by date descending within each year`
- [ ] `Year labels have colored dots cycling through theme colors`
- [ ] `Styling matches the homepage archive section`

## Acceptance Criteria
- All 97 posts display correctly
- Year grouping works for all years (2009-2025)
- Links go to correct post URLs
- Page builds without errors

## Implementation Notes
Rewrite `src/pages/blog.astro`.

Reuse the same fast frontmatter reading code. Group posts by year using reduce:
```javascript
const postsByYear = posts.reduce((acc, post) => {
  const year = post.pubDate.split('-')[0];
  (acc[year] ??= []).push(post);
  return acc;
}, {});
```

Style the page using the same archive CSS classes, or create a standalone page that imports archive-specific styles. The page should have padding-top for the fixed nav.
