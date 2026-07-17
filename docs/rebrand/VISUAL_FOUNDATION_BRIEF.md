# Visual Foundation Brief

## Visual principles

1. **Editorial clarity:** bold hierarchy and short arguments before decoration.
2. **Engineering evidence:** lines, layers, labels and states explain real relationships.
3. **Controlled contrast:** dark concentration alternates with warm light explanation; avoid a continuous dark tunnel.
4. **Human accountability:** founder photography and decision points interrupt system abstraction.
5. **Progressive enhancement:** every diagram and interaction has a static, mobile and reduced-motion composition.

## Composition and grid

Use 12/6/4 columns at desktop/tablet/mobile with content-driven breakpoints. Maximum shell 1280–1440 px; reading measure 60–75 characters; gutters approximately 24 px at 320–767, 40 px tablet and 64–80 px desktop subject to testing. Prefer asymmetry through column spans and whitespace, not rotated copy or broken reading order. Diagram labels must remain legible at 200% zoom.

## Spacing

Base rhythm 4 px with semantic steps equivalent to 4, 8, 12, 16, 24, 32, 48, 64, 96 and 128 px; section tokens adapt by viewport. Dense technical objects use smaller internal spacing while editorial chapters retain generous separation. Tokens describe purpose (`content-gap`, `section-block`, `control-gap`), not page numbers.

## Color roles and contrast review

| Role | Working color | Use / risk |
|---|---|---|
| Dark canvas | `#090B0F` | Primary dark field; pair with near-white main text |
| Dark surfaces | `#10141A`, `#181E26` | Elevation through border/tonal difference, not shadow alone |
| Warm canvas | `#F2F0E9`, `#FAF9F5` | Editorial explanation and founder/proof breathing space |
| Flow | `#2F6BFF`; light `#78A0FF` | Connection/active state; base blue is not assumed safe for small text on dark |
| Friction/decision | `#FF6A2B` | Marker/shape plus label; avoid small orange text on warm paper |
| Verified | `#35C98B` | Success with icon/text, never color alone |
| Risk | `#FF4D5E` | Actual fault/risk only, with label/icon |
| Secondary text | `#7F8998`, `#B7BEC8` | `steel-500` is likely unsafe for small copy on dark; validate every pairing |

Preliminary risk, not final contrast certification: saturated blue on dark and orange on light may fail AA for normal text; use them as non-text strokes or develop accessible text variants. `steel-500` on `ink-950` needs measured confirmation and should not default to body copy. All interactive states need 4.5:1 text, 3:1 large text/non-text UI where applicable, and visible focus independent of hue. Test in the visual spike with automated calculation and real browser rendering.

## Typography roles

- **Display:** test Inter Tight, Geist Sans and Manrope using Dutch headlines, numerals and long compounds. Choose one based on legibility, character, performance and licensing—not novelty.
- **Body/UI:** Geist Sans or Inter at 16–18 px; body large 20–24 px. Maintain comfortable line height.
- **Mono:** one limited face/subset for metadata, layer names and section numbers; never paragraphs.
- Use fluid type with bounded `clamp`; prevent hero words from forcing overflow at 320 px. Avoid all-caps for long labels.

## Surfaces, borders and radius

Three levels only: canvas, grouped surface and raised/interactive surface. Borders are 1 px functional separators with contrast; shadows are restrained on light sections. Radius: 4 px metadata, 8 px controls, 12–16 px content panels; avoid a uniformly rounded SaaS aesthetic. Focus rings are outside borders and remain visible on every surface.

## Iconography and diagrams

Use a small custom/open-licensed SVG set with 1.5–2 px optical stroke aligned to the Flow Line. No icon font, AI brain, circuit board or generic robot. Diagrams use nodes, connectors, gates, layers and status labels with consistent arrow semantics. Provide title/caption plus adjacent textual equivalent; distinguish observed, assumed and recommended states visually and verbally.

## Imagery and founder photography

Prefer genuine work artifacts: annotated process maps, interface crops, architecture layers and real founder context. Photograph Subor working with a diagram/screen plus a direct portrait; capture horizontal/vertical crops, neutral and dark backgrounds, negative space and natural skin tone. Blue/orange may appear subtly in environment, not as cyberpunk lighting. Never fabricate team activity.

## Data and interface visuals

Use only real, anonymized or explicitly labelled illustrative data. Remove client/PII, secrets and proprietary identifiers. Interface crops must prove a decision or before/after state; avoid fake dashboards. Lab visuals carry a persistent `lab` label in caption and alt/context.

## Dark/light rhythm

Suggested sequence: dark Entry/Conflict → warm Hidden Drag/Diagnosis explanation → dark Two Routes/Method → warm Proof/Founder → dark Scan close. This is a working rhythm; low-fidelity hierarchy takes precedence. Transitions use the Flow Line or shared grid alignment, not decorative gradients.

## Accessibility constraints

WCAG 2.2 AA, 200% zoom, 320 px width, high contrast/forced colors review, color-independent states, touch targets, legible diagram labels, text alternatives, reduced transparency where needed, and no background detail behind critical text without a solid surface. Motion constraints live in `docs/rebrand/MOTION_FEASIBILITY.md`.

## Visual spike outputs

Desktop/mobile hero; Hidden Drag three states; dark/light pairing; navigation/buttons/focus; one case card with evidence label; one accessible diagram; font proof; full token contrast matrix; founder photo art-direction mock; and static/reduced-motion keyframes. Production components wait for approval.
