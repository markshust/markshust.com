# Task 008: Teaching Section Component

**Status**: completed
**Depends on**: 001
**Retry count**: 0

## Description
Create TeachingSection.astro — the green-backgrounded teaching section with stats, course list, and M.academy poster card.

## Context
- Reference: concept lines 986-1152 CSS, lines 1610-1656 HTML
- Full green background with "TEACHING" ghost text
- Two-column layout: left = title + description + stats row, right = M.academy poster
- Stats: 20+ Courses, 15,000+ Students, 25+ Years (with counter animation targets)
- Academy poster: dark card with logo, subtitle, course list, CTA button
- Counter animation handled by JS in task 012 (data-target attributes)

## Requirements (Test Descriptions)
- [ ] `TeachingSection renders with green background and "TEACHING" ghost text`
- [ ] `TeachingSection shows section label "03 / Teaching" and title "Learn. Build. Ship."`
- [ ] `TeachingSection renders description paragraph`
- [ ] `TeachingSection renders 3 stat blocks with counter spans (data-target attributes)`
- [ ] `M.academy poster card renders with logo, subtitle, course list, CTA button`
- [ ] `Course list shows 5 courses with green dot bullets`
- [ ] `CTA button has green background with arrow SVG`
- [ ] `Responsive: single column on <=1024px`

## Acceptance Criteria
- Visually matches concept teaching section
- M.academy card links to https://m.academy
- Stats have data-target attributes for counter JS

## Implementation Notes
Create `src/components/TeachingSection.astro`.

Stats data:
- 20+ Courses (data-target="20")
- 15,000+ Students (data-target="15000")
- 25+ Years (data-target="25")

Courses list (hardcoded):
1. Set Up Magento 2 Dev Environment with Docker
2. Build a 12 Factor Node.js App with Docker
3. Magento 2 for Beginners
4. Magento 2 Backend Development
5. Advanced Magento Architecture
