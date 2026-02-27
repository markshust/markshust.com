# Task 007: Building Section Component

**Status**: completed
**Depends on**: 001
**Retry count**: 0

## Description
Create BuildingSection.astro — the blue-backgrounded building section with project poster grid, cursor glow effect setup, and section labeling.

## Context
- Reference: concept lines 850-981 CSS, lines 1540-1608 HTML
- Full blue background with "BUILDING" ghost text
- 2x2 grid of project poster cards (dark bg)
- Each card: emoji, name, description, tags, gradient top bar (unique per card), ghost number
- Cards have cursor-following glow effect (CSS custom properties --mx, --my set by JS)
- Projects: docker-magento, Marko, qklnk, Claude Code Workflows

## Requirements (Test Descriptions)
- [ ] `BuildingSection renders with blue background and "BUILDING" ghost text`
- [ ] `BuildingSection shows section label "02 / Building" and title "Tools that developers love."`
- [ ] `BuildingSection renders 4 project poster cards in a 2-column grid`
- [ ] `Each card shows emoji, project name, description, and tags`
- [ ] `Each card has unique gradient top bar color`
- [ ] `Cards have hover lift effect and radial gradient glow placeholder`
- [ ] `Tags use JetBrains Mono, uppercase, blue-tinted background`
- [ ] `Responsive: single column on <=1024px`

## Acceptance Criteria
- Visually matches concept building section
- Projects link to correct external URLs
- Card styling is complete

## Implementation Notes
Create `src/components/BuildingSection.astro`.

Project data is hardcoded in the component (these are static, not from CMS):
1. docker-magento → github.com/markshust/docker-magento
2. Marko → # (placeholder)
3. qklnk → qklnk.co
4. Claude Code Workflows → github.com/markshust/claude-code-workflows

The cursor glow CSS uses `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), ...)` — the JS to set these vars is in task 012.
