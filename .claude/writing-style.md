# Writing Style

Voice, tone, and punctuation conventions for blog posts on markshust.com. Apply automatically when drafting or editing any post under `src/pages/`.

These rules were distilled from watching Mark line-edit a full draft back into his own voice. They are **format patterns, not phrases**. See "Don't canonize phrases" below -- reuse the *shape*, never the exact words.

## Voice

- First-person, conversational, honest. Write like one person talking to another, not an essay being read aloud.
- Contractions everywhere. "It isn't", "you're", "that's".
- Leave the small hedges in. "Some", "a bit", "kind of", "basically", "pretty much". Warmth lives in those; sanding them off makes it sound like a machine.
- Openly opinionated is good. A dry, slightly combative edge ("it isn't the tournament being unfair") beats a neutral hand.
- Self-aware parenthetical asides are on-voice -- use them to wink at the obvious counterpoint before the reader raises it (e.g. a parenthetical that concedes "yes, in *this* other context the opposite is true"). Parentheses are the default aside delimiter.

## Structure

- **Anecdote-led open.** Start with a specific, concrete moment, not an abstract premise. The premise must be **literally true** -- never invent a confirming detail (don't write "it matched the posted standings" if no standings exist). If the real story is "nothing told me the answer, so I worked it out", that mystery is a *stronger* open than a tidy one.
- **Problem before mechanism.** Set up *why* this matters before *how* it works. The reader should feel the itch before you hand them the fix. A section that jumps straight to the solution needs a lead-in that first states the problem it solves.
- **Ground every term before you lean on it.** If a concept is load-bearing, give it a quick refresher the paragraph before you build on it. Don't use "bit" cold in a piece about binary; explain binary first, in two or three plain sentences.
- **After a rule, give the why.** When you state how something works, follow it with *why* it works that way. Don't leave the reason implicit and assume the reader connects it.
- **Each section earns the next.** Don't make the same point in two places. If the "why" belongs in section two, pull it out of section four.
- **Headings -- two modes, match the post:**
  - Reflective / opinion posts: headings are observations or lessons ("The model is not the workflow").
  - Technical explainers: short, plain, functional headings ("The compass draw", "In code", "Place value"). Code-forward -- show the thing running; a runnable snippet is often the best closing beat.
  - Never "Closing" or "Conclusion". "Recap" is fine.
- Paragraph density: typically 2-4 sentences, with occasional earned one-liners. Calibrate against `src/pages/2026/05/18/curiosity-is-expensive/` and the older technical posts like `src/pages/2017/08/25/php-7s-null-coalesce-operator-usage-objects-and-arrays/`.

## Sentence rhythm

- **Vary sentence length.** Merge choppy fragment-pairs into compound sentences joined with a semicolon, or with `and` / `but` / `so` / `because`. A wall of clipped three-word sentences reads as "me Tarzan" -- avoid it.
- **But keep the earned one-liner.** The short sentence that lands a point stays short. The goal is to break the machine-gun cadence, not to smooth every punch flat.
- Sentence-initial `And` / `But` / `So` is the cadence, not an error. Keep it.

## Don't scaffold

The single most common thing to cut. Mark strips out every sentence whose only job is to announce that the next sentence matters.

- No meta-labeling of your own rhetoric: kill "here's the hook", "and that's what sold me", "the second half of what convinced me", "the key insight is", "worth remembering". State the thing; let it *be* the thing.
- No marketing-speak, no throat-clearing windups ("Here's the uncomfortable truth...").
- If a sentence exists only to set up another sentence, delete it and start with the payoff.

## Punctuation (used as pacing)

- **No em-dashes.** Never `—`. Use a spaced double hyphen ` -- `, never flush against words.
- **Two independent clauses take a semicolon, never a comma.** Fix comma splices on sight. This is especially the shape of a contrast: "It isn't asking how many you won; it's asking how long you survived".
- **Spaced ` -- ` to set off a punchy closing aside, appositive, or kicker.** It gives a beat with more snap than a comma. "...available to me the entire time -- same as everyone else."
- **Ellipsis `...` for a deliberate trailing pause** before a payoff word or phrase ("encodes all of that, ...for free"). This is Mark's device; never delete, "fix", or convert one he's written.
- **Sequence steps with a connective, not a clipped list.** "read it as base 2, then add one", not "read it as base 2, add one".
- **Give abstract nouns something concrete to attach to.** "a quirk in the system", not a bare "a quirk".
- **Logical quoting:** periods and commas go OUTSIDE closing quotes. `the word was "performance".`

## Closers

- End flat and declarative. No lesson-y wrap-up ("Worth remembering next time...", "At the end of the day...").
- Land on a dry, slightly opinionated kicker that ties back to the core concept or the title.
- "So the next time you hit X, you'll know why" is a valid shape. So is a two-or-three-word button that names the thing the whole piece was really about.

## Don't canonize phrases

Everything above is **format, not vocabulary.** Rotate the actual words every single post.

- A concept-tying kicker is the pattern; "It's just base 2" was one instance of it -- never reuse that phrase.
- The "So the next time..." closer is a shape, not a template to paste.
- Any wording that showed up in a previous post ("walking wounded", "haggling over the cheap ones", "me Tarzan") is burned; find a fresh way to say the same structural thing.
- Signature phrases become tics. If a line feels familiar from a past piece, replace it.

## Italics and bold

- **Italics are for impact, not decoration.** One or two per article, max -- the single word the reader's eye must land on. More than two dilutes them to zero.
- Bold is for small toolkit/list items and the named mental model (e.g. `**XY problem**`). Sparingly.
- When in doubt, don't. The prose should carry the emphasis.

## Frontmatter

Posts live at `src/pages/YYYY/MM/DD/<slug>/index.mdx`:

```yaml
---
title: "..."
date: "YYYY-MM-DDT00:00:00.000Z"
tags: ["..."]
layout: "../../../../../layouts/BlogPost.astro"
---
```

The title names the *repeatable pattern or lesson*, not the specific anecdote, unless the anecdote itself is the point. Tags are usually a single topical word.

**Slug: strip filler and stop words.** The slug is keyword-first, not the sentence. Drop articles and filler ("a", "the", "is", "are", "just", "your", "of") and keep only the load-bearing nouns. The title `Tennis tournament rankings are just binary numbers` becomes the slug `tennis-tournament-rankings-binary-numbers` -- same keywords, none of the connective words.

## Self-edit pass

Before presenting any draft, run one pass hunting only for these, and fix each:

1. Comma splices → semicolons.
2. Scaffolding phrases ("the hook", "what sold me", "worth remembering") → delete, start with the payoff.
3. Machine-gun fragments → merge into compound sentences (keep the earned one-liners).
4. A rule stated without its *why* → add the why.
5. A load-bearing term used before it's grounded → add a two-sentence refresher first.
6. An aside or kicker muffled by a comma → promote it to a spaced ` -- `.
7. Any invented confirming detail → verify against what actually happened, or cut it.
8. Any phrase that echoes a previous post → replace with fresh wording.

## Why this matters

Em-dashes, comma splices, inside-quote periods, and rhetorical scaffolding are the common AI tells. The deeper tell is a draft written *about* an idea instead of *from* it -- one that announces its own structure, smooths every sentence to the same length, and wraps up with a moral. Mark's voice is plainer, more opinionated, and paced with punctuation. Matching the format above -- while never recycling the exact phrases -- is the difference between a post that sounds like him and one that sounds like a generic essay.
