# Task 009: Archive Section Component

**Status**: completed
**Depends on**: 001
**Retry count**: 0

## Description
Create ArchiveSection.astro — the dark archive section with year-grouped posts, sticky year labels, and hover effects.

## Context
- Reference: concept lines 1157-1271 CSS, lines 1658-1721 HTML
- Dark background with subtle radial gradient glows
- Posts grouped by year with large sticky year labels and colored dots
- Each post row: title (left) + date (right), slide-right hover effect
- Grid: 200px year column + 1fr posts column
- Year dot colors cycle through orange, blue, green, gray

## Requirements (Test Descriptions)
- [ ] `ArchiveSection renders with dark background and radial gradient glows`
- [ ] `ArchiveSection shows title "The Archive — by year"`
- [ ] `ArchiveSection groups posts by year with large year labels`
- [ ] `Year labels have colored dots (cycling orange, blue, green, gray)`
- [ ] `Each post shows title and abbreviated date`
- [ ] `Post rows have subtle background, border, and slide-right hover`
- [ ] `Section accepts grouped posts data as prop`
- [ ] `Responsive: stacked layout on <=768px with non-sticky year labels`

## Acceptance Criteria
- Renders all 97 blog posts grouped by year
- Year labels are sticky on desktop
- Visual hover effect on post rows

## Implementation Notes
Create `src/components/ArchiveSection.astro`.

Props interface:
```typescript
interface Props {
  postsByYear: Record<string, Array<{ url: string; title: string; date: string }>>;
}
```

Year dot color assignment: use an array of colors and cycle with modulo:
```
const dotColors = ['var(--orange)', 'var(--blue)', 'var(--green)', 'var(--gray)'];
```

Posts within each year are sorted by date descending. Date display: month + day only (e.g., "Oct 9").
