# Wireframe Artifact Strategy

## Recommendation

Use a **two-layer artifact system**:

1. This repository’s Markdown specifications are the durable, version-controlled source for content hierarchy, behavior, responsive rules, accessibility, evidence and decisions.
2. Create the actual clickable low-fidelity wireframes in **Figma**, using grayscale components, auto layout, named content blocks and desktop/320 px frames. Export reviewed PDF/PNG snapshots and link the exact Figma version from a repository manifest during the next sprint.

Figma is recommended because stakeholder review, responsive component variants, clickable journey testing and later motion/visual handoff outweigh the imperfect textual diff. Markdown remains authoritative for requirements that Figma comments cannot reliably preserve.

## Comparison

| Format | Speed | Version control | Responsive behavior | Review/testing | Motion/handoff | Assessment |
|---|---|---|---|---|---|---|
| Text-only wireframes | Very fast | Excellent | Described, not experienced | Weak for spatial review/user tests | Strong Codex context, weak visual handoff | Keep as specification layer; insufficient alone |
| Mermaid/ASCII | Fast for flows | Excellent | Poor for real page reflow | Useful for IA, not credible page testing | Limited layout/motion planning | Use selectively for flows only |
| Figma | Fast with component discipline | Version history but weak Git diff | Auto layout and explicit breakpoint frames | Best stakeholder comments and clickable tests | Best visual/motion designer handoff; inspectable by engineering | **Recommended actual wireframe tool** |
| Penpot | Comparable intent; open tooling | Better self-host/open potential, still separate from Git | Components/flex layout | Good review/prototype capability | Good standards-based handoff | Strong fallback if open/self-hosting is a priority or Figma access is unavailable |
| HTML prototype | Slower and risks premature implementation | Excellent | Best real reflow/accessibility testing | Excellent user testing when mature | Direct Codex handoff | Use later for the approved vertical slice, not low-fi sprint |
| Static images | Fast for individual frames | Binary snapshots only | Separate crops, no behavior | Easy review, weak journey testing | Weak interaction handoff | Export snapshots for records; not source |

## Figma construction rules

- Grayscale only plus one annotation color; no final palette, logo, font selection, shadows or decorative motion.
- Frames: desktop 1440 content shell and mobile 320; add a tablet frame only when content breaks, not for every page.
- Auto Layout for every repeated component; components for header, CTA, evidence card, route card, form field, error summary, content module and footer.
- Layer names match Markdown section names/IDs. Every frame links to its relevant spec heading.
- Use real draft copy within maximum-length budgets; never Lorem Ipsum or invented proof.
- Content-dependent blocks use a conspicuous internal label such as `[CASE EVIDENCE REQUIRED]` that cannot appear in a user-test prototype as real proof.
- Prototype only meaningful decisions: navigation, route selection/change, intake progression, errors/success and five journeys. Do not simulate final scroll effects.
- Annotate DOM order, heading level, focus movement, no-JS state, reduced-motion state and mobile reflow outside the visual canvas or in a dedicated accessibility panel.

## Repository handoff manifest

During the next sprint add a small Markdown manifest recording Figma file URL, file owner, reviewed version/date, page/frame IDs, exported snapshot paths, linked decision IDs, open content dependencies and test prototype version. Do not store participant PII or confidential case assets in the design file.

## Review workflow

1. Build shared shell and three representative frames: homepage, scan and case detail.
2. Review hierarchy/content lengths with Subor before duplicating patterns.
3. Complete all page types and mobile states.
4. Run accessibility/order annotation review.
5. Connect five journeys and error/success states.
6. Freeze a test version; export PDF/PNG snapshots.
7. Run comprehension test; record issues in repository docs.
8. Update specs/decisions first, then Figma; tag the accepted version.

## When to use HTML

After low-fidelity and visual/motion direction are approved, build the semantic static vertical slice in the confirmed canonical repository. HTML becomes appropriate to validate real reflow, keyboard order, reduced motion, SVG performance and Core Web Vitals. Building it now would collapse UX exploration into unapproved production architecture and is therefore rejected for this sprint.
