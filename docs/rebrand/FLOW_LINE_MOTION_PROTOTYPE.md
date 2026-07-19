# Flow Line Motion Prototype

**Branch:** `prototype/flow-line-motion` (from `feat/four-act-homepage-prototype` @ `08cbf67`)
**Route:** `/prototype/four-act-homepage`
**Scope:** Only the Flow Line state progression — `fragmented → paused → mapped → organized → verified`. No other motion category is introduced.

---

## Narrative Purpose

The four-act homepage tells one story — Chaos → Bezinning → Arbeid → Resultaat. The Flow Line is the through-line: a single abstract process that is **broken** in Chaos, **held still** for investigation in Bezinning, **understood** (but not yet fixed) later in Bezinning, turned into **controlled execution** in Arbeid, and **calm and connected** in Resultaat.

This sprint adds exactly the first motion layer: the progression of that line. The aim is that scrolling the page feels like watching *one line develop*, not like seeing five unrelated diagrams. Motion is only used where it carries that meaning; the static page already tells the same story without it.

---

## Existing Static Contract

The reviewed static prototype (see `STATIC_PROTOTYPE_REVIEW.md`) defines five Flow Line figures, placed in the page in story order:

| Order | State | Act | Source |
|---|---|---|---|
| 1 | `fragmented` | Act 1 — Chaos | `acts.tsx` ChaosAct |
| 2 | `paused` | Act 2 — Bezinning (top) | `acts.tsx` ReflectionAct |
| 3 | `mapped` | Act 2 — Bezinning (mid) | `acts.tsx` ReflectionAct |
| 4 | `organized` | Act 3 — Arbeid | `acts.tsx` WorkAct |
| 5 | `verified` | Act 4 — Resultaat | `acts.tsx` ResultAct |

Each is an independent SVG (`viewBox="0 0 640 160"`, `aria-hidden`, with a text `<figcaption>`) sharing a horizontal spine at `y=80` and the same stroke tokens (`--flow`, `--signal`, `--verified`, muted dashed). **That shared geometry — not a single continuous SVG — is what makes them read as one line.**

The static contract is the baseline and is never weakened:

- The SVG path data for every state is **unchanged** from the reviewed static version. `organized` keeps its six gate rectangles, matching the six static delivery steps.
- With JS off, or under `prefers-reduced-motion: reduce`, the page renders the reviewed static states, fully visible, in the same order. Nothing in the motion depends on JavaScript.
- Every review fix from `08cbf67` is untouched (`acts.tsx` was not modified): per-scene CTAs, the `Plan een verkennend gesprek` fallback, the founder-bio placeholder, the `ResultAct` closing conclusion, `<main id="four-act-content">`, and the disabled intake button all remain intact.

---

## Motion Architecture

**Chosen model: independent figures, progressive-enhancement reveal, one ambient loop on Chaos.** No new dependency. The technique stack follows the brief's preference order exactly:

1. **CSS transitions and transforms** — the actual animation (stroke-dashoffset draw-in for spines, opacity fade for nodes/gates/groups).
2. **Intersection Observer** — the only trigger; reveals each figure when it enters the viewport and tracks whether it is active.
3. **Existing React state** — `useState` for `motionOk` / `revealed` / `active`, written to `data-*` attributes.
4. *(Motion for React / GSAP not used — neither is present and neither is needed.)*

**Why not one continuous SVG?** The brief explicitly says it is not required, and lists "shared geometry, consistent nodes, shared stroke properties, section handoffs, state-matching, subtle crossfades between equivalent shapes" as valid continuity. The five figures already share a spine and tokens, so the continuity is geometric and stylistic, reinforced by the reveal order matching the story order. A page-spanning SVG or a scroll-scrubbed crossfade would add real risk (scroll-jacking, pin length, INP, refresh-mid-page correctness) for little gain over the shared-spine approach.

**The motion has three layers:**

1. **Reveal (one-shot, every figure).** When a figure enters the viewport, its spine draws in via `stroke-dashoffset` (normalised with `pathLength={100}` so one CSS rule fits every geometry) and its nodes/gates/groups fade in, staggered by inline `transition-delay`. Each state therefore *assembles differently*: fragmented scatters its three nodes; paused drops its pause bars; mapped raises its measurement ticks; organized lights its six gates left-to-right; verified settles its checkmarks.
2. **Ambient (only `fragmented`).** A single, slow (6 s) opacity flicker on Chaos's broken `flowMuted` segments — the only looping motion on the page. It reads as an intermittent, leaky connection. Every later figure is still once revealed, so Chaos feels restless and Resultaat ends in stillness.
3. **Handoff.** There is no crossfade between figures. Continuity across the (large) scroll distances is by section handoff: the previous figure's ambient stops as it leaves the viewport (`data-active` flips off → the animation rule no longer matches → it stops), and the next figure reveals on entry. This is robust under fast scroll, back-scroll, resize, refresh-mid-page and anchor jumps because state is always derived from the current viewport position by the observer.

---

## State Definitions

Each state's meaning is carried by the (unchanged) static graphic; motion only reinforces it.

- **`fragmented`** — disjoint segments on two y-levels, a backward orange risk branch, three junction nodes. *Motion:* spine draws, nodes scatter in, then the broken segments keep a subtle flicker. Reads as controlled instability, not constant chaos (no particles, no decorative effects).
- **`paused`** — a line interrupted by two pause bars. *Motion:* spine draws, the pause bars drop in like a held switch, then still. Reads as "stopped for inspection."
- **`mapped`** — a continuous spine with five measurement nodes and probe ticks above/below. *Motion:* spine draws, nodes rise in sequence. Reads as "now we see what is actually happening" — explicitly **not** a success state.
- **`organized`** — a continuous spine passing through **six** gate rectangles (Scope → Map → Simplify → Build → Verify → Transfer) plus a controlled branch. *Motion:* spine draws, the six gates activate left-to-right. Gate count matches the six static delivery steps.
- **`verified`** — a green connected spine with four checkmark nodes. *Motion:* spine draws, checkmarks settle in, then still. Reads as a calm, beheersbaar eindstation — **not** a celebration (no confetti, no glow, no excessive checkmark animation). Green is used sparingly; verified is also distinguished by its checkmark *shape*, not colour alone.

---

## State Transitions

Transitions are experienced as you scroll from one figure to the next. There is no teleport and no arbitrary fade between unrelated drawings; each transition is a section handoff between shapes that share a spine.

- **fragmented → paused** (Chaos → Bezinning): Chaos's flicker stops as it leaves view; Bezinning's line draws in straighter, the divergent risk branch is gone, and the pause bars drop. Reads as movement slowing and the process being held.
- **paused → mapped** (within Bezinning): the pause gives way to measurement nodes and ticks rising along the same spine. Reads as "now we understand what is really happening."
- **mapped → organized** (Bezinning → Arbeid): analysis points become execution gates on the same spine. The line gains direction and gates. Reads as "insight becomes controlled execution."
- **organized → verified** (Arbeid → Resultaat): the gates resolve and movement decreases; the green connected line with checkmarks arrives as a quiet final state. Reads as "beheersbaar, getest en overdraagbaar."

---

## Trigger Model

- One `IntersectionObserver` per figure (`threshold: 0.2`, `rootMargin: 0 0 -8% 0`).
- On intersect: `data-active="true"` and, on first intersect, `data-revealed="true"` (one-shot — re-entering after scrolling away does not re-hide, it simply stays revealed).
- On leave: `data-active="false"` (ambient stops; the figure stays visible).
- CSS keys off the `data-*` attributes. No scroll listeners, no requestAnimationFrame loops, no per-frame geometry math.
- **State is always derivable from position.** On `#scan-entry` anchor jumps, on refresh mid-page, after fast scroll and after back-scroll, the observer resolves the correct `revealed`/`active` state from the current viewport. (Verified: reload at ~70 % scroll reveals `verified`; scrolling back up reveals `paused`.)

---

## Desktop Behaviour

- Figures reveal once on entry: spine draws in (~900 ms), nodes/gates fade in staggered (~520 ms each). Total reveal under ~1.4 s.
- Only `fragmented` keeps an ambient loop, and only while on screen.
- `1024 × 900` sits above the `56rem` breakpoint and keeps the multi-column desktop layout; the Flow Line figure spans the content width and reveals identically.
- No layout shift: the SVG has a fixed `viewBox` and reserved figure height; only `opacity`, `transform` and `stroke-dashoffset` animate.

---

## Mobile Behaviour

Tested at `375 × 812` and `320 × 700`.

- **No extra page length, no horizontal overflow** (0 px at both), **no sticky sequence.**
- The desktop motion is not literally copied: strokes are thicker (`--flow-stroke` 4 → 5.5) and nodes larger (CSS `r` 8/10/15 → 11/12/16) below `38rem`, so the five states stay legible and distinguishable. This directly addresses the static review's finding that the states were nearly identical at 320 px.
- `verified` stays visually distinct via its checkmark shape, not green alone.
- `<figcaption>` text is unchanged and always present.
- Transitions are kept short; the reveal feels the same, just on a smaller glyph.

---

## Reduced Motion Behaviour

At `prefers-reduced-motion: reduce`:

- The component never enables motion (`data-motion` stays `"off"`), so no element is ever hidden and no animation runs.
- Every figure renders the reviewed static state, fully visible, in act order — identical content and order to the non-motion page.
- The global `@media (prefers-reduced-motion: reduce)` rule in the CSS module (zeroing transition/animation durations) is a belt-and-suspenders backstop.
- Reduced motion is also honoured if turned on mid-session: a `matchMedia` listener disables motion and disconnects the observer.

(Verified at desktop, 375 and 320: all figures `motion:"off"`, `revealed:"true"`, node opacity `1`.)

---

## Accessibility

- All Flow Line SVGs remain `aria-hidden="true"`; meaning is carried by the visible `<figcaption>` and surrounding copy, never by motion.
- No information is motion-only.
- No focus movement, no DOM-order change, no layout shift.
- No long-running pulsing across the page (the single ambient loop is slow, subtle, confined to Chaos, and removed entirely under reduced motion).
- No flashing.
- Reduced motion = the existing static states, instantly.

---

## Performance

- No scroll listeners; one passive `IntersectionObserver` per figure (5 total), disconnected on unmount.
- Animation uses only `opacity`, `transform`-friendly and `stroke-dashoffset` — no layout reads, no forced reflows, no SVG filters/blur/large masks, no per-frame path calculation.
- The only ambient animation is a single opacity keyframe on Chaos, paused automatically when off screen (the `data-active` rule stops matching).
- No new dependency; no added bundle weight beyond the small client component.
- Observed during testing: no console errors, no hydration warnings, 0 px horizontal overflow at every viewport.

---

## Known Limitations

- **Transitions are reveal-on-entry, not a continuous morph.** The five figures share geometry and reveal in order, so the progression reads as one development, but there is no single animated line that literally morphs from state to state. This is a deliberate trade for robustness and the no-scroll-jacking rule.
- **`organized` gate activation is not synced to the individual delivery steps.** Gates light left-to-right once on reveal, not step-by-step with scroll. Full step sync is explicitly deferred.
- **CSS `r` for larger mobile nodes** is progressive enhancement; browsers that do not support CSS geometry properties fall back to the SVG `r` attributes (smaller, but still correct and distinguishable by shape).
- **One-shot reveal.** After a figure has revealed, scrolling away and back does not replay the reveal (it stays visible). State stays correct; only the entrance animation is not repeated.
- The mobile reduced-motion glyph reuses the desktop geometry (enlarged), rather than a bespoke per-state glyph set. It is sufficient for distinction; a dedicated small-screen glyph family is a later refinement.

---

## Deferred Motion

Explicitly **not** in this sprint (per the brief):

- Chaos hero fragmentation (system-map motion).
- Hidden Drag before/after morph.
- Full delivery-step scroll sync (gate ↔ step).
- Act background crossfades.
- Card reveals.
- Parallax.
- Decorative motion.

---

## Review Checklist

- [x] Correct state per act (5 figures, `data-flow-state` verified).
- [x] Back-scroll reveals the correct state (`paused` → `revealed:true, active:true`).
- [x] Fast scroll: observer is the only trigger; no scroll listeners; final state always matches position.
- [x] Anchor jump to `#scan-entry` reveals `verified`.
- [x] Reload mid-page derives correct state from position (`verified` revealed at ~70 % scroll).
- [x] Reduced motion: all figures static, visible, correct order (desktop, 375, 320).
- [x] Zero horizontal overflow at 320 / 375 / 768 / 1024 / 1440.
- [x] No layout shifts from motion (only opacity / stroke-dashoffset / transform).
- [x] No runtime errors, no hydration warnings.
- [x] Disabled intake button remains disabled; `Plan een verkennend gesprek` fallback CTA remains functional.
- [x] `organized` gate count == six static delivery steps.
- [x] No new heavy dependency.

**Quality gate:** the five states feel like one development; meaning is preserved statically; reduced motion fully works; mobile gains no extra scroll length; no new heavy dependency; no accessibility or conversion regressions; Resultaat is calmer than Chaos; a fast scroller always ends in the correct state.
