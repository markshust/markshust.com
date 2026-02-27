# Task 006: Writing Section Component

**Status**: completed
**Depends on**: 001
**Retry count**: 0

## Description
Create WritingSection.astro — the orange-backgrounded writing section with featured post card, post stack, background ghost text, and section label.

## Context
- Reference: concept lines 630-837 CSS, lines 1496-1535 HTML
- Full orange background with "WRITING" ghost text
- Featured post: large dark card with gradient top bar, ghost number, pulsing "Latest" badge, arrow circle
- Post stack: 3 smaller dark cards with dates and titles
- Posts are passed as props (pulled from real blog data in index.astro)
- Noise texture overlay via ::after

## Requirements (Test Descriptions)
- [ ] `WritingSection renders with orange background and "WRITING" ghost text`
- [ ] `WritingSection shows section label "01 / Writing" and title "Words that ship ideas."`
- [ ] `WritingSection renders featured post card with title, date, "Latest" badge, arrow circle`
- [ ] `WritingSection renders 3 post stack cards with date and title`
- [ ] `Featured post card has dark bg, orange gradient top bar, hover lift effect`
- [ ] `Post stack cards have dark bg, hover lift effect, ghost numbers`
- [ ] `Section accepts posts array as prop`
- [ ] `Responsive: single column grid on <=1024px`

## Acceptance Criteria
- Visually matches concept writing section
- Posts link to actual blog post URLs
- Card hover effects work

## Implementation Notes
Create `src/components/WritingSection.astro`.

Props interface:
```typescript
interface Props {
  posts: Array<{ url: string; title: string; date: string }>;
}
```

The first post becomes the featured post. Posts 2-4 go in the stack. All cards are `<a>` tags linking to post URLs.

Featured post has `.arrow-circle` with SVG arrow icon. Ghost numbers are absolutely positioned pseudo-content.
