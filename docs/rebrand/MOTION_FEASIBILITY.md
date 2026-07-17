# Motion Feasibility

## Decision framework

- **Essential:** materially explains the brand/story; must ship only with static, mobile and reduced-motion states.
- **Valuable:** improves comprehension but may be removed without breaking the journey.
- **Optional:** polish after budgets and usability pass.
- **Reject:** spectacle, access, control or performance cost exceeds explanatory value.

Native scroll, focus order and browser history are invariant. No information is animation-only, hover-only or canvas-only. Reduced motion means meaningful static end states and instant state changes—not merely shorter animation.

## Interaction matrix

| Interaction | Class | Story value / desktop behavior | Mobile / accessibility / reduced motion | Risk, complexity, likely technology |
|---|---|---|---|---|
| Flow Line | **Essential** | Connects friction→diagnosis→route→roadmap; short SVG path/state transitions, not a permanent loop | Simplified segments in document flow; decorative paths hidden from AT, text supplies meaning; static resolved line | Medium; SVG + CSS, GSAP only for measured cross-section timeline |
| Hero system map | **Valuable** | Shows workflow and app friction share one system | Static labelled diagram at mobile; reading order independent; reduced motion final state | Medium; accessible SVG/HTML, CSS transform/opacity; avoid canvas |
| Hidden Drag transformation | **Essential** | Makes handoffs, waiting and human checks visible; one bounded scrub may be pinned without scroll-jacking | Mobile uses before/after cards or tap steps; adjacent text; reduced motion shows both states | High; SVG/HTML + ScrollTrigger after prototype; watch pin length, INP and label collision |
| Diagnostic layer stack | **Valuable** | Demonstrates analysis before solution; focus/tap reveals layer explanation | Ordered accordion/list; full keyboard and status semantics; no spatial animation under reduced motion | Low–medium; semantic HTML + CSS, optional SVG overlay |
| Decision lens | **Valuable** | Shows multiple routes and makes “no default rewrite” credible | Select/list with one-sentence definitions; focus state; instant reduced-motion change | Medium; React state + CSS/SVG; avoid drag-only lens |
| Workflow/application split | **Essential** | Enables self-selection inside one story | Stacked links plus `onzeker/gecombineerd`; no swipe requirement; static fork | Low; semantic links/cards + SVG decoration |
| Method timeline | **Valuable** | Links delivery steps to control gates/artifacts | Vertical ordered list; reduced motion all steps visible | Low–medium; CSS/SVG intersection enhancement; no long pin |
| Case expansion | **Optional** | Quick comparison can reduce navigation for validated cases | Standard details/link; keyboard state and URL access; instant state | Low; native details or small React disclosure. Reject carousel-only proof |
| Page transitions | **Reject for v1** | Low explanatory value relative to navigation/performance risk | Can disrupt history, focus and reduced motion; normal navigation is correct fallback | High; defer to P2 spike only after launch budgets |
| Sticky scan CTA | **Valuable** | Keeps safe next step available after intent is established | Must not obscure content/form, respect safe areas, dismiss/compact if necessary; no animated chase | Low; CSS sticky; announce nothing repeatedly |
| Entry logo draw | **Optional** | Brief brand cue only | Never a loader; skip/instant under reduced motion | Low; CSS/SVG ≤1 s |
| Magnetic buttons/custom cursor/background loops | **Reject** | No meaningful story gain | Input/accessibility mismatch and distraction | Unnecessary JS/CPU |

## Prototype order

1. Static semantic hero + Hidden Drag in desktop/mobile/reduced-motion keyframes.
2. Flow Line SVG performance spike.
3. Hidden Drag scroll/tap prototype with keyboard and 320 px tests.
4. Diagnostic layers/decision lens only if low-fidelity testing shows comprehension benefit.
5. Method timeline and sticky CTA after vertical-slice budgets pass.

## Budgets and acceptance

One dominant timeline per section maximum; no hero autoplay media; no WebGL; lazy-load noncritical motion; pause/dispose offscreen observers/timelines; prefer transform/opacity and limited SVG stroke work; reserve layout dimensions; no forced synchronous layout loops. Prototype on a representative mid-range mobile device.

Each approved interaction documents purpose, start/end, input, focus behavior, mobile state, reduced-motion state, text equivalent, cleanup, loaded bytes, main-thread impact and fallback. Accept only if users understand the intended cause/effect more accurately than with the static design and Core Web Vitals remain within requirements.

## Reduced-motion specification

At `prefers-reduced-motion: reduce`: remove scroll-scrub, parallax, path drawing, automatic sequencing and large spatial transitions; render final or side-by-side states; retain immediate focus/hover feedback without motion; do not autoplay video; and keep all controls/content in the same logical order. Test both OS preference and runtime navigation.
