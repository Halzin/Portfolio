---
name: Gustavo Martins Portfolio
description: A kinetic, precise portfolio for modern websites and landing pages.
colors:
  ink-black: "#0a0a0a"
  cool-paper: "#f5f6f8"
  motion-blue-paper: "#e7edf5"
  pure-white: "#ffffff"
  graphite-copy: "#5c6068"
  structural-line: "#c9ccd2"
  focus-blue: "#245cff"
typography:
  display:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.8rem)"
    fontWeight: 580
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  hero:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 6.3vw, 5.2rem)"
    fontWeight: 620
    lineHeight: 0.91
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.05em"
rounded:
  control: "0.7rem"
  surface: "1rem"
  circle: "50%"
spacing:
  control-y: "0.85rem"
  control-x: "1.15rem"
  section-min: "5rem"
  section-max: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.control}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "3.5rem"
  panel-kinetic:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.surface}"
---

# Design System: Gustavo Martins Portfolio

## Overview

**Creative North Star: "The Kinetic Studio Index"**

The system behaves like a sharp independent studio: direct typography, disciplined black fields, cool paper surfaces, and motion that reveals structure rather than decorating it. Density changes across the page—compressed type gives way to broad quiet fields—so the experience feels authored and paced.

The visual proof comes from the interface itself. No generic icon-card grid, ornamental gradients, or invented brand claims are needed; craft is shown through lettering, rhythm, responsive composition, and one coordinated kinetic interaction.

**Key Characteristics:**

- Compressed variable display typography at decisive scale.
- Near-black and cool paper used as large fields, not scattered accents.
- Fine structural rules and generous vertical rhythm.
- Directional motion that resolves to stillness.
- Direct, approachable language with minimal ornament.

## Colors

The palette is nearly monochrome, cooled by a pale blue paper field and reserved focus blue.

### Primary

- **Ink Black:** Used for decisive content fields, primary actions, and maximum-contrast display moments.

### Secondary

- **Motion Blue Paper:** Used for reflective statements and the closing contact surface, creating a quieter interval without turning warm or decorative.

### Neutral

- **Cool Paper:** The dominant page ground; crisp and low-chroma.
- **Pure White:** Text on black and selected clean content surfaces.
- **Graphite Copy:** Secondary copy on light surfaces.
- **Structural Line:** Dividers and spatial structure.
- **Focus Blue:** Keyboard focus only; functional rather than decorative.

### Named Rules

**The Field Rule.** Black and pale blue own complete regions; they are not reduced to decorative chips or random accents.

**The Functional Blue Rule.** Saturated blue is reserved for focus visibility and browser interaction feedback.

## Typography

**Display Font:** Anybody (with Arial Narrow fallback)  
**Body Font:** Manrope (with Arial fallback)

**Character:** Anybody supplies flexible width and weight, allowing the typography to feel in motion without animation everywhere. Manrope stays neutral, compact, and highly readable beside it.

### Hierarchy

- **Hero** (620, responsive 3.6–5.2rem, 0.91): The primary offer; compressed and direct.
- **Display** (580, responsive 3–5.8rem, 0.94): Section statements and closing action.
- **Title** (550–560, responsive 1.6–2.8rem): Service and process names.
- **Body** (400, 1rem, 1.6): Explanations with measures generally kept under 60 characters.
- **Label** (600, 0.7–0.78rem, 0.04–0.05em): Functional metadata in uppercase.

### Named Rules

**The Width-Is-Voice Rule.** Use the display face's variable width to create hierarchy; do not add decorative typefaces or gradient text.

**The Two-Voice Rule.** Anybody speaks at display scale; Manrope carries navigation, body copy, labels, and controls.

## Layout

The layout uses a fluid page inset (`clamp(1.25rem, 3vw, 3.75rem)`) and alternates split compositions with full-width statements. Desktop first viewports use a two-column offer-and-proof composition; service content uses an asymmetric three-column row; process steps use four equal columns. Below 980px these structures collapse progressively, and below 720px they become single-column with touch-friendly spacing.

Vertical sections use a responsive 5–9rem rhythm. Tight relationships stay inside rows, while section transitions receive substantially more space. Headlines receive more space above than below.

## Elevation & Depth

The system is flat by default. Depth appears only where interaction or hierarchy earns it: the kinetic black field has a broad ambient shadow, the primary button lifts slightly on hover, and the round closing action gains a soft offset shadow while rotating.

### Shadow Vocabulary

- **Panel ambient** (`0 24px 60px rgba(10, 10, 10, 0.18)`): The kinetic proof field only.
- **Control rest** (`0 10px 24px rgba(10, 10, 10, 0.15)`): Primary action at rest.
- **Control hover** (`0 16px 32px rgba(10, 10, 10, 0.22)`): Primary action after intentional hover.

### Named Rules

**The Earned Depth Rule.** Use shadow for interactive lift or a single focal surface, never to outline every container.

## Shapes

Large focal panels use softly squared 1rem corners. Buttons use tighter 0.7–0.8rem corners. Circles are reserved for directional actions and sequential process markers. Structural content is separated with single-pixel rules rather than card outlines.

## Components

### Buttons

- **Shape:** Compact rounded rectangle (0.8rem) with a minimum height of 3.5rem.
- **Primary:** Ink black on white, medium-weight Manrope, generous horizontal gap before a stroked directional icon.
- **Hover / Focus:** Three-pixel upward lift with ambient shadow; focus uses a three-pixel saturated blue outline.
- **Text link:** Underlined Manrope with no container and a deliberate underline offset.

### Cards / Containers

- **Corner Style:** Softly squared focal surfaces (1rem).
- **Background:** Full black or full white fields.
- **Shadow Strategy:** Only the focal kinetic surface receives permanent depth.
- **Border:** Interior grouping uses single-pixel structural rules.
- **Internal Padding:** Responsive 1.15–2rem.

### Navigation

Desktop navigation is a quiet horizontal row with animated one-pixel underlines and one filled contact action. Mobile navigation becomes a compact drawer beneath the fixed header; the control uses authored line geometry and retains visible expanded/collapsed labels.

### Kinetic Type Field

The signature panel stacks four display words with different widths and weights. Pointer movement shifts each row by a distinct, restrained factor; pointer exit resolves every row to its base position. Reduced-motion preferences remove all displacement.

### Service Rows

Services are editorial rows rather than cards. A title and stroked arrow lead, explanatory copy occupies the center, and deliverables sit at the edge. Desktop hover adds a white field and subtle horizontal expansion; mobile removes the hover displacement.

## Do's and Don'ts

### Do:

- **Do** use black and pale blue as complete spatial fields.
- **Do** vary display width and weight to create rhythm inside one type family.
- **Do** use one coordinated motion moment and allow the rest of the page to remain calm.
- **Do** preserve visible keyboard focus, reduced-motion behavior, and 16px body copy.
- **Do** use honest labels for future conceptual work.

### Don't:

- **Don't** add invented testimonials, client logos, metrics, or results.
- **Don't** replace editorial rows with repeated icon cards.
- **Don't** introduce warm cream, neon glow, glass panels, or gradient text.
- **Don't** use emoji or Unicode characters as interface icons; use the established stroked SVG language.
- **Don't** distribute many unrelated hover and entrance effects across the page.

## Case presentation system

The Home gives available projects equal prominence through full-width editorial features. Each links to a local case page; the published concept site is a secondary destination inside that page.

Case pages share a portfolio frame: return navigation, project category and conceptual status, visual lead, concise context, design rationale, experience and implementation notes, published-project CTA, and next-case navigation. The frame uses the portfolio's spacing, focus, links, and responsive behavior. Individual projects own their imagery, color field, and editorial display voice: AURA uses its existing Playfair Display fashion direction, KŌEN uses its existing Instrument Serif restaurant direction, and Mateus Valença uses the portfolio display voice within a dark blue legal-services palette. The two additional typefaces are deliberate case-level exceptions to the two-voice portfolio rule, not new global fonts.

The current next-case sequence is AURA → KŌEN → Mateus Valença → AURA. Add a future case by creating a new page under `projetos/`, using `case.css` and `case.js`, and adding a peer feature to the Home. Keep claims factual and identify conceptual work clearly.
