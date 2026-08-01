# Rebrand Prototype Design Direction

## Concept

**Control room editorial.** The page behaves like a calm technical field report: strong assertions, inspectable diagrams, visible decisions, and disciplined transitions from dark concentration to warm explanation. It should feel like a specialist has mapped a messy operational system and made the next decision legible.

## Brand principles

1. Recognition before explanation.
2. Diagnosis before tools.
3. Evidence before confidence.
4. Controlled change before transformation language.
5. Direct founder accountability without false agency scale.
6. Every visual device must encode a relationship, state, or decision.

## Visual direction

- Dark ink sections concentrate attention around the problem, route choice, method, and final action.
- Warm paper sections slow the rhythm for diagnosis, evidence, and human accountability.
- A single blue Flow Line represents controlled movement; orange marks friction or a human decision only.
- Fine borders, clipped corners, and aligned baselines communicate engineering precision without a dashboard aesthetic.
- Layout asymmetry comes from a wide editorial grid and deliberate offset, not random floating objects.
- Illustrations are built from text, lines, nodes, and state changes. No stock images, fake dashboards, or generated client artifacts are required.

## Typography

- **Primary:** Geist Sans, loaded locally through the `geist` package.
- **Technical labels:** Geist Mono, used sparingly for state and route vocabulary.
- Hero uses an ultra-wide measure and a two-to-three-line maximum on desktop.
- Body copy stays between roughly 60 and 75 characters per line.
- Fluid type is bounded at mobile and wide desktop sizes to prevent overflow and overlong display wraps.

The deterministic `gpt-taste` run selected Satoshi. Geist is used instead because it is the documented working direction, supports Dutch text, has a straightforward local package, and avoids adding an unrelated brand decision solely for the prototype.

## Colour system

| Role | Token | Value | Use |
|---|---|---|---|
| Dark canvas | `--ink-950` | `#090B0F` | Primary concentration sections |
| Dark surface | `--ink-900` | `#10141A` | Grouped technical surfaces |
| Raised surface | `--ink-800` | `#181E26` | Interactive or emphasized objects |
| Warm canvas | `--paper-100` | `#F2F0E9` | Explanatory chapters |
| Warm surface | `--paper-50` | `#FAF9F5` | Raised light objects |
| Main light text | `--text-on-dark` | `#F7F6F1` | Readable text on dark |
| Secondary light text | `--text-muted-dark` | `#C7CDD6` | Supporting text on dark |
| Main dark text | `--text-on-light` | `#11151B` | Readable text on paper |
| Flow | `--flow-blue` | `#78A0FF` | Lines, focus, and active state |
| Friction | `--signal-orange` | `#FF7A45` | Markers and human decision points |
| Verified | `--verified-green` | `#35C98B` | Confirmed state with text label |

Accent colours are not used as small body text where contrast is uncertain. State is always repeated in text or shape.

## Spacing and layout

- 12-column desktop composition, 6-column tablet adaptation, and single-flow mobile composition.
- Maximum shell: 1440 px.
- Content gutters: 20 px mobile, 36 px tablet, 64 px desktop.
- Major chapter spacing is generous but not uniformly viewport-sized; rhythm follows content importance.
- Dense technical objects use compact internal spacing while arguments receive larger surrounding whitespace.
- Radius remains restrained: 4 px metadata, 8 px controls, 12 px grouped surfaces.

## Component architecture

- **Asymmetric hero:** copy dominates the left and centre; a system-friction map occupies the offset right column.
- **Workflow transformation:** one coherent before/after field rather than a card collection.
- **Route split:** two strong routes and one combined bridge, expressed as connected editorial panels.
- **Method stack:** chapters overlap subtly on desktop to show accumulation of control; mobile becomes a normal ordered list.
- **Evidence ledger:** replaces a testimonial carousel because no approved testimonials or cases exist.
- **Scan roadmap:** the Flow Line resolves into current state, decisions, and first step.

The deterministic `gpt-taste` component selection included horizontal accordions, a testimonial carousel, and an infinite partner marquee. Horizontal disclosure behavior is adapted into the route comparison only where keyboard and touch behavior remain clear. The carousel and marquee are rejected: they would require invented proof or purposeless looping and would weaken trust.

## Interaction principles

- Anchor navigation uses native document flow and meaningful targets.
- Route panels respond to hover and focus but never hide their content.
- The mobile menu uses a native disclosure pattern and works without JavaScript.
- Clickable surfaces do not masquerade as controls; links retain explicit labels.
- Focus is highly visible, offset from component borders, and not colour-only.

## Motion rules

- Motion may show fragmented handoffs resolving into a controlled route.
- The selected scroll-pinning and card-stacking paradigms are constrained to a short desktop chapter with native scrolling.
- No content waits for an entrance animation.
- No autoplay loops, parallax, cursor effects, magnetic buttons, or page transitions.
- The motion layer is progressive and can be removed without changing the story.
- At `prefers-reduced-motion: reduce`, scrub, pin, line drawing, and large transitions are removed; both process states remain visible.

## React Bits decision

React Bits is intentionally not used. No proposed component improves the user journey enough to justify a second interaction dependency or recognizable demo behavior. The required diagrams and disclosure states are specific to the Digitech narrative and are simpler to implement with semantic HTML, CSS, SVG, and one bounded GSAP enhancement.

## Smooth scrolling

Use native CSS `scroll-behavior: smooth` only when motion is allowed. Anchored headings use `scroll-margin-top` so the sticky header does not obscure them. Reduced-motion switches to `auto`. There is no scroll interception, artificial easing, or history manipulation.

## Accessibility rules

- One `h1`; sequential `h2` structure.
- Skip link, semantic landmarks, keyboard-safe disclosure, and visible focus.
- Diagrams include captions and adjacent text equivalents.
- No information conveyed only by colour, hover, or animation.
- Minimum comfortable touch target of 44 px where practical.
- Mobile reading order matches DOM order.
- Contrast is checked for all text and interface states.
- Prototype contact does not collect or submit personal data.

## Explicit anti-patterns

- No generic three-card services row.
- No purple-blue AI gradient, glassmorphism, glowing border, bento filler, or stock technology image.
- No fake metrics, logos, testimonials, dashboards, or case outcomes.
- No marketing superlatives or unsupported delivery claims.
- No decorative pills, section-number labels, or trust badges without artifacts.
- No repeated left-copy/right-card section template.
- No animation that delays reading or changes the available information.

## `gpt-taste` influence

The skill materially sharpened the two-to-three-line hero constraint, forced an explicit anti-generic layout decision, increased the editorial scale and spacing contrast, required a pre-flight check before UI code, and introduced a strict review of button contrast, grid density, and motion purpose. Its randomized testimonial, marquee, and font selections were deliberately rejected where they conflicted with evidence, performance, or the authoritative project documentation.

