# Writing Style

Voice, tone, and punctuation conventions for blog posts on markshust.com. Apply automatically when drafting or editing any post under `src/pages/`.

## Voice

- First-person, conversational, honest.
- Anecdote-led: open with a specific concrete moment, not an abstract premise.
- Section headings (`##`) are *observations or lessons*, not generic topic labels. Prefer "How do I is rarely the real question" over "Asking the right question".
- Short paragraphs, occasional one-line punchlines for emphasis where they're earned.
- Calibrate paragraph density against recent posts like `src/pages/2026/05/29/the-agent-files-that-ignored-my-local-model/` and `src/pages/2026/05/18/curiosity-is-expensive/` -- typically 2-4 sentences per paragraph, with occasional one-liners. Do not break every sentence onto its own line.

## Punctuation

**1. No em-dashes.** Never write `—` (U+2014). When a dash is needed, use a short double hyphen with a space on either side: ` -- `. Never flush against adjacent words. If a sentence reads cleanly with a comma, semicolon, or period instead, prefer those over forcing a ` -- `.

**2. Semicolons and ellipses are part of the voice.** Use semicolons to join related clauses where another writer might split into two sentences. Use ellipses (`...`) to show hesitation, trailing thought, or a beat of reflection -- not for omission.

**3. Periods and commas go OUTSIDE closing quotes.** Logical quoting, not American typographic quoting.

- Correct: `She said the word was "performance".`
- Incorrect: `She said the word was "performance."`

This applies to single-word quotes, phrases, and quoted clauses alike.

**4. Line breaks: slightly more than standard prose, but not aggressive.** One-line punches are great when they land. Walls of one-sentence paragraphs are not. Match the rhythm of existing posts.

## Frontmatter

Posts live at `src/pages/YYYY/MM/DD/<slug>/index.mdx` and use this shape:

```yaml
---
title: "..."
date: "YYYY-MM-DDT00:00:00.000Z"
tags: ["..."]
layout: "../../../../../layouts/BlogPost.astro"
---
```

The slug and title should name the *repeatable pattern or lesson*, not the specific anecdote, unless the anecdote itself is the point.

## Why this matters

Em-dashes and inside-quote periods are common AI tells. Keeping the voice human means watching for those specifically. The line-break rhythm and the anecdote-first structure are how Mark actually thinks on the page; matching them is the difference between a post that sounds like him and a post that sounds like a generic essay.
