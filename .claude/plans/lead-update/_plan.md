# Plan: Lead Update — Assessment-First Funnel

## Created
2026-05-04

## Status
pending

## Objective
Restructure the `/cohort/ai-workflow/` page from a cohort-waitlist landing page into an **assessment-first lead funnel**. The Self-Assessment becomes the hero offer (free, ungated). The cohort waitlist becomes the post-assessment call-to-action (email-gated, founding-rate offer). Result: qualified leads at higher conversion, with the 15-question quiz acting as the natural qualifier.

## Background / Why

Current state: `/cohort/ai-workflow/` is converting at ~3% (7/230) on mostly cold + slightly-warm-from-HCF traffic. For a warm-audience cohort waitlist, expected band is 10-25%. Below par by 3-5x.

Diagnosis:
1. **The lede is buried.** The Self-Assessment is the strongest hook — it's already built, scored, tiered, and qualifies the audience automatically. It's currently relegated to "benefit #3" and only delivered AFTER the user has already given email. Backwards.
2. **No price anchor.** "Founding pricing" with no dollar amount triggers a "probably expensive, not for me" instinct.
3. **Abstract value prop.** "Stop prompting. Start architecting." is poetic but doesn't tell the visitor what they get.
4. **Zero social proof.** 15k+ students taught is referenced as a stat with no testimonials.
5. **Email gate is upstream of value delivery.** User gives email *before* getting the assessment. Modern lead funnels invert this — let the user invest in the experience first, then ask for email at the moment of peak interest (the score reveal).

Strategy:
- **Make the assessment the page.** Take it freely, no gate.
- **Score is shown immediately.** No friction.
- **Personalized breakdown + cohort waitlist + founding pricing = the email-gated offer**, presented at score reveal when commitment is highest.
- **Cohort positioning material** (about, benefits, 8 principles, FAQ, social proof) is layered AROUND the assessment, not before it.

This also self-qualifies: anyone non-technical bounces by Q3. Anyone who finishes is, by definition, the right ICP.

Mark explicitly does NOT want specific dates locked in yet (will lock in 1-2 weeks). Plan accommodates date placeholders that are easy to swap in.

**Hard deadline:** Mark is out the second week of August 2026. Cohort #1 must run in June 2026 to be a success, so this page rewrite must be live well before August.

**Commercial model (intended, build deferred):** When registration opens, the application form will collect a payment card and authorize it only on approval. This filters out non-technical signups and reinforces the "applied and accepted" framing. The page copy in this plan ("application required") is the public-facing signal; the actual application + card-auth flow is a separate build that ships when registration opens.

## Scope

### In Scope
- Rewrite `/cohort/ai-workflow.astro` (cohort page) to assessment-first structure
- Rewrite `/cohort/ai-workflow/assessment.astro` (assessment page) so the score reveal becomes the email capture moment, with founding-rate cohort offer
- Update `CohortBanner.astro` copy to mirror new lead-with-assessment positioning
- Add price anchor ($999 founding / $1,499-1,999 cohort #2+) — no specific dates yet
- Add 5-question FAQ component (new, reusable)
- Add concrete outcome list (what they'll learn / what they'll leave with)
- Add "try one" inline preview question on hero (one Y/N sample question that pre-fills into the full assessment on click — instant proof of value for cold traffic)
- Add a low-friction escape hatch on the hero: small "Not ready? Just join the waitlist" link with secondary Kit form for visitors who don't want to take the assessment
- Move existing cohort positioning content (about, schematic, benefits) into supporting roles
- Keep Kit form integration, but move primary email capture to post-assessment
- Decide: consolidate to single page (`/cohort/ai-workflow/` IS the assessment) OR keep two-page split with new flow. **Recommendation: keep two pages, make `/cohort/ai-workflow/` lead with the assessment CTA + supporting context, and `/cohort/ai-workflow/assessment` is where the actual quiz lives + email capture happens.** This preserves the cohort URL as the canonical landing page for banner/social links.

### Out of Scope
- Testimonials / social-proof / stats block — explicitly skipped. The assessment carries the page on its own merits; placeholder testimonials would look weak and stat blocks ("15k+ devs trained") read as filler. Revisit when real testimonials exist.
- Application form + card-authorization flow (separate build when registration opens; page only references "application required" as positioning copy)
- Specific cohort dates (Mark will lock these in 1-2 weeks; use placeholder copy "June 2026" with note in code)
- Building a separate dedicated landing page for HCF-driven traffic (defer until we see if this fixes conversion)
- Email automation/nurture sequence in Kit (separate plan; this is the page-level fix)
- Paid traffic / ads
- A/B testing infrastructure (no fixed-variant testing yet — ship V2, measure baseline lift)
- Changes to Kit form fields (keep email-only)
- Net-new copywriting for blog posts or other site sections

## Success Criteria
- [ ] Cohort page hero leads with assessment CTA, not waitlist signup
- [ ] Assessment is takable without an email gate
- [ ] Score reveal screen presents email capture in context of personalized result + founding cohort offer
- [ ] Price anchor visible above the fold ($999 founding-member rate)
- [ ] 5-question FAQ section live on cohort page
- [ ] Concrete "what you'll learn" outcome list on cohort page
- [ ] "Try one" inline preview question on hero, click pre-fills into the full assessment
- [ ] Low-friction escape-hatch waitlist link + secondary Kit form on hero
- [ ] Banner copy updated to assessment-first messaging
- [ ] Visual consistency preserved (existing dark/orange/blue/green design system intact)
- [ ] Site builds without errors
- [ ] Mobile responsive at 480/768/1024 breakpoints
- [ ] Conversion tracking still works (Kit form still receives signups)

## Task Overview
| Task | Description | Depends On | Status |
|------|-------------|------------|--------|
| 001 | Rewrite cohort page hero to lead with assessment (incl. escape-hatch waitlist link) | - | pending |
| 002 | Add price anchor + outcome list to cohort page | 001 | pending |
| 003 | Add "try one" inline preview question to hero with pre-fill into full assessment | 001 | pending |
| 004 | Add FAQ component + 5 starter questions | 001 | pending |
| 005 | Restructure cohort page final CTA to drive to assessment, not direct waitlist | 001-004 | pending |
| 006 | Refactor assessment page: remove gate before quiz, add email capture at score reveal | - | pending |
| 007 | Build "founding-member offer" UI inside score reveal card | 006 | pending |
| 008 | Update CohortBanner.astro copy | - | pending |
| 009 | Final QA: build, mobile pass, link audit | 001-008 | pending |

## Detailed Task Plan

### 001 — Rewrite cohort page hero to lead with assessment
**File:** `src/pages/cohort/ai-workflow.astro`

Replace hero content. Keep visual structure (blueprint grid, schematic, hero-inner). Change:

- **H1:** Drop "stop prompting. start architecting." Replace with concrete:
  > `is your AI coding workflow designed, or improvised?`
  >
  > (Same line as the assessment page H1 — intentional. The page's offer is now: find out.)
- **Subhead:**
  > Most AI-assisted coding is improvisation in disguise. 15 questions, 5 minutes, and you'll see exactly where the gaps are.
- **Schematic:** Keep, but reframe caption from abstract Stages → Handoffs → Bounded into the **8 principle areas** the assessment covers (Planning, Stages, Handoffs, Humans-in-Loop, Dependencies, Bounded Roles, Quality Gates, Portability). This makes the schematic an actual artifact preview, not decoration.
- **Primary CTA:** Replace Kit form with a single button:
  > `> take_the_assessment` (5 min · 15 questions · free, no email required)
- **Secondary line below CTA:**
  > Score yours. Get a free founding-member offer for Cohort #1 if you want it after.

Remove the upstream Kit form from the hero's primary slot. The Kit form moves to the assessment result reveal (task 006/007).

**Escape-hatch waitlist (in this task):** Below the primary CTA + "try one" preview (task 003), add a small secondary line:
> *Not ready to take the assessment? [Just join the waitlist →]*

Clicking expands (or scrolls to) a compact, secondary Kit form using the same `502388255d` UID. Visually de-emphasized — smaller font, muted color, no card framing. The point is to capture the visitor who's curious but not in assessment-mode without competing with the primary CTA.

**Why no email gate at entry:** The 15 questions ARE the qualifier. Non-technical people bounce by Q3. Anyone who completes is the right ICP, and now they're invested — peak moment for the email ask.

### 002 — Add price anchor + outcome list to cohort page
**File:** `src/pages/cohort/ai-workflow.astro`

Below hero, before the existing benefits section, insert two blocks:

**Block A — "What you'll leave Cohort #1 with"** (new section)
A concrete bulleted list of takeaways. Draft (Mark can refine):
- A working AI workflow architecture document for your codebase (not a template — yours)
- Defined planning, execution, and review stages with explicit handoffs
- A library of bounded sub-agent roles you've designed for your stack
- Pre- and post-implementation review gates wired into your tooling
- A portability spec — your workflow lifts cleanly to any codebase you touch next
- Five weeks of working through it with Mark + a small cohort, applied to your real code

**Block B — Pricing anchor** (new, compact)
Inline strip-style block showing:
- **Founding rate · Cohort #1 — $999** (lock in via the assessment offer)
- *Cohort #2 onward: $1,499–$1,999*
- Limited to 10 seats. Application required.
- *Note: Application gating is the strategic move from Brian Casel/Jay Klouse hot-seat — protects room dynamics and qualifies the room.*

No specific dates yet. Mark will lock these in within 1-2 weeks. Use copy: "Cohort #1 runs in June 2026. Exact dates announced to the waitlist first."

### 003 — Add "try one" inline preview question to hero
**File:** `src/pages/cohort/ai-workflow.astro` and `src/pages/cohort/ai-workflow/assessment.astro`

Below the hero primary CTA, add a single sample assessment question with two answer buttons. This gives cold traffic immediate proof the assessment is real and substantive, and creates sunk-cost momentum (1 of 15 already done) before they land on the full quiz.

**Cohort page (sample-question card):**
- Label (mono, small): `try one →`
- Question text: *"Do you have an explicit planning phase before code generation begins?"*
- Two answer buttons: `[ yes ]` and `[ no ]`
- Each button links to: `/cohort/ai-workflow/assessment?q1=yes` (or `?q1=no`)
- Pick a question whose answer is genuinely diagnostic — Q1 of the existing assessment ("Do you have a defined planning stage…") is a perfect fit. Confirm question text matches exactly so the pre-fill is accurate.

**Assessment page (pre-fill behavior):**
- On page load, read `?q1=yes` / `?q1=no` from the URL.
- If present, set the corresponding answer for question 1 in the existing answers state and advance progress UI accordingly. Do NOT auto-jump past Q1; the user can still review and change it. Just show it as already-answered with the radio selected.
- If invalid value or absent, behave as today.
- Strip the query param from the URL after pre-fill (`history.replaceState`) so a refresh doesn't re-apply.

**Visual:** Match the existing `q-card` aesthetic from the assessment page (same border, mono labels, button style) so the preview question reads as a genuine quiz fragment, not a marketing widget.

This is the only "try one" surface — only on the cohort page hero, not duplicated elsewhere.

### 004 — Add FAQ component + 5 starter questions
**File:** new `src/components/FAQ.astro` + insert into cohort page before final CTA

Reusable accordion-style FAQ. 5 questions to start (Mark can extend):
1. **What if I can't make every live session?** → Sessions are recorded. Office hours offer makeup time. Total synchronous load: ~6.5 hours over 5 weeks.
2. **What stack does this work with?** → Tool-agnostic. Examples use Claude Code + HCF + Marko (PHP), but the architecture transfers to any language and any AI coding tool.
3. **How is this different from a YouTube AI coding tutorial?** → Tutorials show one task. This builds the *system around* the tasks. You leave with a workflow architecture document for *your* codebase, not a recipe for one toy demo.
4. **Who is this for?** → Senior developers, tech leads, and solo product builders who already use AI to code daily and feel the chaos. Not for people who haven't written code professionally.
5. **What's the application process?** → A short form: codebase context, your current AI workflow pain, and what you want to leave the cohort with. Filters for serious operators.

Keep the FAQ collapsible (details/summary HTML or click-to-expand JS). Match the existing q-card aesthetic from the assessment page.

### 005 — Restructure cohort page final CTA to drive to assessment
**File:** `src/pages/cohort/ai-workflow.astro`

Final CTA section currently has Kit form. Replace with:
- **H2:** `still scrolling? take the 5-minute assessment.`
- **Body:** One paragraph reiterating: assessment is free, ungated, takes 5 min, you'll see your score, and at the end you'll get a founding-rate offer if (and only if) it's a fit.
- **Button:** `> take_the_assessment` linking to `/cohort/ai-workflow/assessment`
- Tiny mono fineprint: `cohort #1 · founding rate $999 · application after assessment`

Kill the duplicate Kit form embed.

### 006 — Refactor assessment page: remove gate, add email capture at score reveal
**File:** `src/pages/cohort/ai-workflow/assessment.astro`

Current state: assessment is fully takable without email (good!), but the score reveal currently shows tier + body + a commented-out cohort link. The gate logic was inverted in the original architecture (email first → assessment as redirect prize). New flow:

**At score reveal, transform the result-revealed section into a two-stage UI:**

Stage 1 — Score visible immediately. Tier pill, score number, headline, body. (This is already built, leave as-is.)

Stage 2 — NEW: Below the existing `rc-meaning` block, insert an "Unlock the founding-member offer" card. This is the email-capture moment. Frame:
- **Heading:** `your personalized cohort offer.`
- **Body:** Based on your score (`{tier}`), here's what Cohort #1 will do for you specifically: [tier-specific copy — see task 007].
- **Offer specifics:** Founding rate $999 · 10 seats · application required after enrollment opens.
- **Form:** Kit embed (same `502388255d` UID currently used). Single email field.
- **CTA copy:** `> claim_founding_offer` (instead of generic "subscribe").
- **Fineprint:** When registration opens, you'll be emailed first with the application link and founding rate locked in. No spam.

**Kit success state:** Use Kit's default submit handler — Kit will swap the form for its built-in thank-you message after submit. No custom JS needed. Leave the existing `rc-waitlist-note` block in place as ambient context around the form (it's outside the Kit form node, so Kit's swap doesn't affect it). Reword it slightly if needed to fit the new "founding offer" framing.

### 007 — Build tier-specific founding offer copy in score reveal
**File:** `src/pages/cohort/ai-workflow/assessment.astro` (extend existing JS `tiers` array)

Each of the 4 tiers (strong / solid / improv / early) gets a custom **offer hook** in addition to the existing `headline` and `body`:

```js
{
  key: 'improv',
  // ...existing fields...
  offerHook: "You're feeling the chaos because you know what good looks like — the system just isn't designed yet. Cohort #1 is built for exactly this score. Five weeks, applied to your codebase, you leave with the architecture installed."
}
```

Render `offerHook` inside the new email-capture card. Tier-personalized copy lifts conversion vs. generic ("here's what you'll get") because it mirrors back what they just learned about themselves.

### 008 — Update CohortBanner.astro copy
**File:** `src/components/CohortBanner.astro`

Current: `stop prompting; start architecting`
New (mirrors the assessment-first lead): `is your AI workflow designed, or improvised? take the 5-min assessment →`

Keep the structure, just swap copy. Mobile fallback also updates: `5-MIN AI WORKFLOW ASSESSMENT`

The banner now drives to the same hero CTA, reinforcing the message instead of competing with it.

### 009 — Final QA
- [ ] `npm run build` (or `deno task build`) succeeds with zero errors
- [ ] Cohort page loads, assessment-first hero CTA visible above fold on desktop AND mobile (480px)
- [ ] Click `take_the_assessment` from cohort page → lands on assessment, no email gate
- [ ] Complete the assessment → score reveals → email-capture card appears with tier-specific offer
- [ ] Submit email → Kit success state fires
- [ ] Banner copy updated, links work
- [ ] FAQ expand/collapse works
- [ ] "Try one" preview question on cohort hero links to assessment with `?q1=yes` / `?q1=no` and pre-fills correctly
- [ ] Escape-hatch waitlist link visible and submits to Kit
- [ ] Existing visual design system unchanged (no broken cards, consistent spacing)

## Architecture Notes

- **Two-page structure preserved.** `/cohort/ai-workflow/` is the marketing/positioning page. `/cohort/ai-workflow/assessment/` is the conversion engine. Single-page collapse considered and rejected — keeping two pages preserves SEO/share-link separation and avoids monster-page scroll fatigue.
- **Kit form stays the same UID** (`502388255d`). Single list, single tag for now. If we want to tag-by-tier later, that's a Kit automation, not a page change.
- **No new dependencies.** Astro + inline JS only, matching existing pattern.
- **Email-capture moves DOWNSTREAM of investment.** This is the core insight: friction at the wrong moment kills conversion; commitment at the right moment lifts it.
- **The assessment IS the qualifier.** No need for additional "are you a senior developer?" gating logic — the questions filter naturally.
- **Application step deferred.** "Application required" is a positioning signal on the page, but the actual application form gets built when registration opens (separate work). For now, founding-rate signups go to Kit waitlist with `founding-cohort-1` tag.
- **Application + card-auth model (intended, not built in this plan).** When registration opens, the application will collect a payment card and authorize it only on approval. Two effects: (1) filters out non-technical signups who won't hand over a card for a tech cohort, (2) the friction itself signals exclusivity — applying and being approved. Page copy in this plan is consistent with that future flow ("application required after enrollment opens"). Pricing committed: $999 founding-member rate · $1,499–1,999 cohort #2+.
- **Date placeholders.** Use `{cohortStartDate}` / `{cohortEndDate}` as JS variables at top of `ai-workflow.astro` and `assessment.astro` so Mark can update one line and have it propagate. Initial values: `'June 2026'` / `'TBA'`.

## Risks & Mitigations

- **Risk:** Removing the upstream email gate means we lose visitors who would've subscribed but bounce on the assessment.
  **Mitigation:** Add a small "Not ready? Just join the waitlist" link at the bottom of the cohort page hero — low-friction escape hatch for those not in assessment-mode. Single Kit form, smaller, secondary positioning.

- **Risk:** Existing 7 waitlist subscribers won't get the new flow.
  **Mitigation:** They've already been delivered the assessment as redirect. They're fine. New flow is for new traffic.

- **Risk:** Assessment completion rate is unknown — if users abandon mid-quiz, conversion gets worse.
  **Mitigation:** Assessment already has localStorage persistence and a sticky progress bar — strong completion ergonomics. Worth instrumenting (Plausible/PostHog event) in a follow-up plan to verify.

- **Risk:** Cold traffic (HCF social) may need a faster proof of value than 15 questions.
  **Mitigation:** Now in scope as task 003 — hero shows a sample question inline ("try one: do you have an explicit planning phase before code generation begins? [yes] [no]"); click pre-fills Q1 in the full assessment via query param.

- **Risk:** Without dates, urgency is lower.
  **Mitigation:** Mark locks dates within 1-2 weeks per his instruction. Date placeholder is a single-line edit when ready. Founding rate + "10 seats" pill provide scarcity in interim.

- **Risk:** No social proof on the page (testimonials/stats explicitly skipped).
  **Mitigation:** The assessment itself is the proof — a substantive 15-question diagnostic signals depth more than a testimonial card grid would. Authority cues (HCF, M.academy) come through naturally in FAQ answers and copy. Revisit when real testimonials exist; thin/placeholder testimonials would hurt more than help.

## Expected Outcome

If we conservatively assume:
- Page-to-assessment-start conversion: 15-25% (vs. current 3% page-to-email)
- Assessment-completion rate: 50-70% (15 questions, well-paced)
- Completion-to-email conversion: 30-50% (peak commitment moment + tier-personalized offer)

Net page-to-email conversion: roughly **3-9%** — same band as current at low end, but with **dramatically higher lead quality** (every captured lead has self-qualified through 15 ICP-specific questions). At the high end, 2-3x current conversion AND better leads.

The qualified-lead lift is the actual win, not raw conversion. 7 self-qualified senior devs > 30 random emails.

## Post-Plan Follow-ups (out of scope, log for later)

- Build Kit nurture sequence (5-email crash course tied to assessment tier)
- Wire conversion analytics (Plausible/PostHog events on assessment start, Q5 reached, completion, email submit)
- Build the actual application form when cohort registration opens
- Cross-post cohort positioning to LinkedIn + email list when ready
- A/B test hero H1 once volume justifies (need ~1k sessions/variant)
