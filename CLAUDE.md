# markshust.com

Personal site and blog, built with Astro v5 + MDX. Static site, no test framework, no JS frameworks, plain CSS with design tokens.

## Guidelines

Project standards are split into focused files under `.claude/`. These are imported below so they auto-load into every session.

- @.claude/writing-style.md -- Voice, tone, and punctuation conventions for blog posts. Apply automatically when drafting or editing any post under `src/pages/`.
- @.claude/code-standards.md -- Astro/CSS/JS conventions for components, layouts, and scripts.
- @.claude/testing.md -- How to verify changes (this project has no automated test suite; verification is `npm run build` + dev server).

## Blog post layout

Posts live at `src/pages/YYYY/MM/DD/<slug>/index.mdx` with the frontmatter shape documented in `writing-style.md`.

When asked to draft a new blog post, do not generate it directly. Ask clarifying questions first to anchor it in a specific anecdote and audience, then draft -- this keeps posts from sounding generic or AI-authored.
