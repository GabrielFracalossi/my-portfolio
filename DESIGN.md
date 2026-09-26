---
name: Gabriel Fracalossi Portfolio
description: A staged, two-theme portfolio. A ghost word behind an arched cut-out portrait, proof as numbers, tight grotesk, pill buttons with an attached circle.
colors:
  # Dark (default theme)
  night-field: "#03060f"
  night-surface: "#070d1c"
  night-card: "#0a1228"
  night-card-hover: "#0d1733"
  stage-navy-top: "#0b1633"
  stage-navy-bottom: "#08102a"
  ink-frost: "#e8f0ff"
  ink-frost-2: "#9dacc8"
  ink-frost-3: "#7c8db0"
  cyan-signal: "#00e4f5"
  sky-signal: "#0097f5"
  arch-electric: "#0a4bff"
  arch-sky: "#1f9bff"
  pill-white: "#f2f6ff"
  # Light theme
  fog-field: "#eef0f6"
  fog-surface: "#e5e8f1"
  fog-card: "#ffffff"
  stage-fog-top: "#d6d9e6"
  stage-fog-bottom: "#c9cddc"
  ink-navy: "#0b1020"
  ink-navy-2: "#444e6a"
  ink-navy-3: "#5c6684"
  cobalt: "#0a3fe0"
  arch-cobalt: "#2f55ff"
  arch-periwinkle: "#9db0ff"
  # Theme-independent brand
  brand-blue: "#004af5"
  brand-sky: "#0097f5"
  availability-mint: "#00f5b3"
typography:
  hero:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 9.6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  ghost:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "min(19vw, 17rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.3rem + 5.6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.9vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1rem + 2.6vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.7vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
  stat-value:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 0.9vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1
rounded:
  s: "10px"
  m: "16px"
  l: "24px"
  xl: "32px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2vw, 2rem)"
  pad-x: "clamp(1rem, 3vw, 2rem)"
  section: "clamp(4.5rem, 2.5rem + 7vw, 8.5rem)"
  container: "1240px"
  stage-max: "1480px"
  nav-height: "72px"
components:
  button-primary-label:
    backgroundColor: "{colors.ink-frost}"
    textColor: "{colors.night-field}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-primary-circle:
    backgroundColor: "{colors.cyan-signal}"
    textColor: "{colors.night-field}"
    rounded: "{rounded.pill}"
    size: "44px"
  button-primary-label-light:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.fog-card}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  pill-floating:
    backgroundColor: "{colors.pill-white}"
    textColor: "{colors.night-field}"
    rounded: "{rounded.pill}"
    padding: "8.8px 17.6px"
  stat-glass:
    textColor: "{colors.ink-frost}"
    rounded: "{rounded.l}"
    padding: "16px 20px"
  chip:
    textColor: "{colors.ink-frost}"
    rounded: "{rounded.pill}"
    padding: "6.4px 14.4px"
  stage-panel:
    rounded: "{rounded.xl}"
    padding: "clamp(28px, 5vw, 72px)"
  project-card:
    backgroundColor: "{colors.night-card}"
    textColor: "{colors.ink-frost}"
    rounded: "{rounded.l}"
  project-card-hover:
    backgroundColor: "{colors.night-card-hover}"
---

# Design System: Gabriel Fracalossi Portfolio

## Overview

**Creative North Star: "The Staged Portrait"**

The portfolio is staged the way the pinned Dribbble reference is staged. One rounded panel is the stage; on it a giant ghost word sits behind an arched, cut-out portrait, and proof is stated as numbers in glass cards. Everything else is quiet: tight grotesk type, hairline rows for text, and a single pill-and-circle button as the only loud control. It refuses the dark-hero, gradient-text, icon-card developer template.

The world is deliberately theme-paired. In dark (the default, the owner's original palette) the stage is navy and the arch is electric blue, with cyan as the one small signal. In light the stage is cool gray, the arch is cobalt fading to periwinkle, and the button and accent go to ink navy and cobalt. The composition, radii and type do not change between themes; only the tokens do. Big moments get a stage panel (the hero and the Nazario Sistemas block). Everything that is only text lives on the page field between hairlines, never in a card.

Density is generous and confident: large tracking-tight headlines, long line-height body copy in the secondary ink, and section padding that scales from 72px to 136px.

**Key Characteristics:**
- Rounded stage panels (24px mobile, 32px tablet and up) as the unit of "big moment".
- Ghost word behind an arched portrait; the arch is a 999px-topped cut-out with a vertical blue gradient.
- Two-theme token file; every color is a semantic variable, only brand blues and mint are theme-independent.
- Tight grotesk: negative tracking scaled to size, weights 500-800 for display, 400-450 for reading.
- Pill and circle language for every control; white floating pills; glass for numbers.
- Hairline rows (1px, `--line`) carry experience, stack and Nazario facts.

## Colors

A navy-and-electric-blue world with one cyan signal in dark; a cool gray-and-cobalt world with ink navy in light. Neutrals are tinted toward blue in both themes. Pure black and pure white are avoided except for the white pill and the light-theme card.

### Primary
- **Electric Arch Blue** (#0a4bff to #1f9bff): the arch gradient in dark (top to bottom). In light it becomes **Cobalt Arch** (#2f55ff to #9db0ff).
- **Cyan Signal** (#00e4f5): dark-theme accent for links, focus rings, hover text, active nav link and the circle on the primary button. Small marks only.
- **Cobalt** (#0a3fe0): the light-theme accent, in the same roles as Cyan Signal.
- **Brand Blue / Brand Sky** (#004af5 / #0097f5): theme-independent; the brand mark tile and the default project thumbnail gradient.

### Secondary
- **Availability Mint** (#00f5b3, #00a878 in light): the pulsing dot in the status chip, and nothing else.

### Neutral
- **Night Field** (#03060f): page background, dark. **Night Surface** (#070d1c), **Night Card** (#0a1228) and its hover (#0d1733).
- **Stage Navy** (#0b1633 to #08102a): the vertical stage gradient, dark. Light counterpart **Stage Fog** (#d6d9e6 to #c9cddc) on a **Fog Field** page (#eef0f6), with **Fog Card** white (#ffffff).
- **Frost Ink** (#e8f0ff, secondary #9dacc8, tertiary #7c8db0): text in dark. Light: **Ink Navy** (#0b1020, #444e6a, #5c6684).
- **Pill White** (#f2f6ff dark, #ffffff light): floating pills, always with dark text.
- **Hairline** (`--line` rgba(140,170,255,0.14) dark, rgba(11,16,32,0.11) light; `--line-strong` at 0.34 / 0.4 of the accent hue): every divider and outline.
- **Ghost** (rgba(232,240,255,0.10) dark, rgba(255,255,255,0.6) light): the ghost word only.

### Named Rules
**The One Signal Rule.** One accent per theme (cyan in dark, cobalt in light). It marks interaction (hover, focus, active link, arrow circle) and small highlights, never large fills or decorative text.
**The Theme-Pair Rule.** A new surface is defined once through semantic tokens (`--bg`, `--stage`, `--card`, `--ink`, `--accent`, `--line`) and must work in both themes. Do not hard-code a hex inside a component to serve one theme.
**The Ink-On-Pill Rule.** White pills and the light-theme card carry dark ink in both themes; the pill never inherits page text color.

## Typography

**Display and Body Font:** Hanken Grotesk (loaded 300-800, with ui-sans-serif, system-ui fallbacks). Single family across every role.

**Character:** A modern, slightly geometric grotesk used tight. The voice comes from tracking and weight contrast, not from a second face. Numerals are tabular wherever figures line up (`.tnum`).

### Hierarchy
- **Ghost** (800, min(19vw, 17rem) on desktop, line-height 0.8, -0.04em): the word BACKEND behind the portrait, low-contrast fill, masked to fade downward. Decorative, `aria-hidden`.
- **Hero** (600, clamp 2.25rem-3.75rem mobile, up to clamp 3rem-4.25rem tablet and 4rem desktop, line-height 0.98, -0.04em): the h1.
- **Display** (600, clamp 2.5rem-6rem, 0.95, -0.045em): the contact closer. The Nazario title is a step down (clamp 2rem-4rem, 1.0, -0.04em).
- **Headline** (600, clamp 1.75rem-2.75rem, 1.1, -0.035em): section titles.
- **Statement** (500, clamp 1.625rem-3.25rem, 1.14, -0.04em): the About lead sentence.
- **Title** (600, clamp 1.25rem-1.5rem, -0.03em): project names, role titles, mobile nav links.
- **Body** (400, 1rem, 1.6; secondary ink, 1.7 for multi-paragraph): lead paragraphs at 1.125rem, cap at 34-54ch.
- **Small** (0.875rem, 1.65-1.7): card descriptions, facts, footer.
- **Stat value** (600, clamp 1.375rem-1.875rem, 1, -0.03em, tabular): the numbers in glass cards.
- **Label** (500, 0.875rem, line-height 1): button labels, chips, pills (pills at 600).

### Named Rules
**The Tight-Grotesk Rule.** Tracking tightens as size grows: 0 at body, -0.02em at small titles, -0.04em at display, -0.045em at the largest. Never set large type at default tracking.
**The Numbers-Lead Rule.** Proof is set as a figure in Stat value type with a short label in secondary ink, never as an adjective in a card.

## Layout

A full-bleed page field with two widths: `--container` 1240px (plus gutter) for reading sections and `--stage-max` 1480px for stage panels and the nav bar. Gutter is fluid 16-32px; stage inner padding `--pad-x` is 16-32px. Sections stack on one rhythm: `--space-section` (72-136px) is owned by the section above, so `.section + .section` has no top padding.

Reading sections use a two-column split (1fr / 2.2fr): a small title on the left, content on the right, collapsing to one column at 860px. Text sections are rows separated by hairlines (`border-top: 1px solid --line`), not boxes.

The hero is the only composed layout. Mobile: arch first (72vw up to 340px, height 1.36x width), copy below, stats stacked, two columns of stats from 560px. Tablet (720-1179px): arch 46vw up to 380px, copy still stacked, radius steps to 32px. Desktop (1180px+): the stage fills the viewport (min-height clamp 680-940px), the ghost word and arch (30vw, 360-460px) go absolute and centered, title, lead and CTA sit bottom-left, the availability chip and two stat cards stack bottom-right (21rem wide).

Breakpoints as built: 560 (stat pairs), 720 (tablet hero, projects and About columns collapse below it), 860 (splits and Nazario facts collapse), 900 (featured project goes horizontal), 960 (nav becomes an inline pill bar, mobile sheet ends), 1180 (desktop hero). Max-width queries at 720 and 860 collapse grids; min-width queries build up the hero and nav.

## Elevation & Depth

Depth is mostly tonal and translucent, with shadows reserved for lift. Surfaces separate by gradient stage, card color and 1px hairlines. Translucency does the floating: the nav bar, status chip, stat cards and project tags use blur backdrops (12-18px, up to saturate 1.4) over `--glass` or `--nav-bg`.

### Shadow Vocabulary
- **Card lift** (`--shadow-card`: `0 28px 56px -28px rgba(0,20,90,0.7)` dark, `0 28px 56px -30px rgba(20,35,90,0.35)` light): project card on hover, and the mobile nav sheet.
- **Pill float** (`0 14px 28px -14px rgba(0,10,60,0.45)`): the white floating pills only.

### Named Rules
**The Flat-Until-Touched Rule.** Cards are flat at rest (border plus fill). The shadow and a 4px rise appear only on hover.
**The Glass-For-Numbers Rule.** Blur-and-tint glass is reserved for things floating over a stage (stats, status, nav, tags). It is not a card style for text content.

## Shapes

Big, soft, and round, with one architectural gesture. Radii are a five-step scale: 10, 16, 24, 32 and pill (999). Stage panels and the desktop hero use 32px (24px on mobile hero); cards and glass stats use 24px; the brand tile uses 9px. Controls are always pill or circle.

The signature silhouette is the arch: a 999px top radius with a square base, bottom-anchored to the stage, fading out at its base through a mask. The same arch is echoed as a faint outline inside the Nazario stage panel (line color at 0.55 opacity, masked). The portrait is cut out and slightly oversized inside the arch (122% wide, offset -11%) so the head breaks its edge visually.

Borders are 1px hairlines at `--line`, stepping to `--line-strong` on hover or for emphasis (tags, facts, link underlines).

## Components

### Buttons (pill + attached circle)
- **Shape:** two joined parts with a 4.8px gap: a pill label (44px tall, 24px side padding) and a 44px circle. Small variant is 40px.
- **Primary:** label in Frost Ink on Night Field text (dark) or Ink Navy with white text (light); circle in Cyan Signal (dark) or Ink Navy (light) holding a stroked arrow.
- **Hover:** whole button rises 2px; the circle rotates -45deg (arrow turns from right to up-right). 320ms ease-out.
- **Link arrow (secondary):** text with a strong-hairline underline and an arrow; gap widens 8px to 12.8px and it turns accent on hover.
- **Icon button:** 40px circle with a 1px hairline; border strengthens and icon goes accent on hover. Theme toggle shows the icon of the theme you would switch to.

### Floating Pills
White pills (Pill White, dark ink, weight 600, 0.875rem) tilted around the arch (-12deg, 10deg) with pill float shadow. They pop in with scale 0.7 to 1 at 0.9s, then bob 8px on a 7s loop. Labels are short technology names (.NET 10, Azure). Decorative, `aria-hidden`.

### Glass Stat
24px radius, glass fill, 1px hairline, 16px blur with saturate 1.3, 16px by 20px padding. Label in secondary ink at most 10rem wide, figure in Stat value type. Row on desktop, column from 560 to 1179.

### Status Chip
Pill-shaped glass with a mint dot that pulses a soft ring every 2.4s. One per page, in the hero aside.

### Chips and Tags
- **Chip:** 1px hairline pill, 0.875rem, weight 450; hairline strengthens and text goes accent on hover.
- **Tag:** dark translucent pill with blur, white 11px uppercase text at 0.05em, laid over project thumbnails.
- **Tech tag:** small hairline pill in secondary ink at 0.75rem.
- **Path label (timeline):** outlined strong-hairline pill in accent, 0.75rem, weight 600.

### Nav
A fixed floating pill bar (56px tall, 12px from the top) that is invisible at the top of the page and fades in a blurred pill background after 24px of scroll. Brand tile plus name on the left. From 960px: inline links (0.875rem, secondary ink, current link on a 9% ink pill), language switch, primary small button, theme toggle. Below 960px: a menu toggle opens a 24px-radius sheet (card fill, hairline, card shadow) with large links divided by hairlines.

### Language Switch
Hairline pill with three buttons (PT, EN, ES); the pressed one fills with the button color.

### Hairline Rows (timeline, stack, Nazario facts)
Experience and stack are lists with a hairline top border per row, a small meta column (date, company) beside a title and body. Bullets are 12px hairline dashes, not dots. The Nazario facts are three columns with a strong-hairline top rule and a short title above secondary-ink text. No boxes, no icons.

### Stage Panel
A 32px-radius panel with the stage gradient and generous padding (28-72px), clipped to hide the large arch outline and hero ghost. Used twice: the hero and the Nazario Sistemas block. Do not use it for a third moment unless the content is a peak moment.

### Project Cards
A 24px-radius card on Night Card / white with a 1px hairline. 16:9 thumbnail (gradient with a large translucent glyph, or a real screenshot at top-left crop), a top-left tag row, and a domain caption at bottom-left. Body: title, role in tertiary ink, description, tech pills, and an underlined text link that expands to cover the whole card. Hover: lift 4px, strong hairline, card shadow, thumbnail glyph or screenshot scales 1.03-1.04 over 700ms. The featured card (Vergi) spans both columns and goes horizontal from 900px (thumbnail 48%, min 26rem tall) with its wordmark centered on a brand-colored plate that flips with the theme.

## Motion

Ease is `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out) throughout; durations are 180ms (fast, color changes), 320ms (base, movement) and 700ms (reveals and image scale). Hero entrance is choreographed: ghost fades up (1.2s), arch rises (1.1s, 0.1s delay), copy rises in 0.1s steps from 0.35s, aside at 0.75s, pills pop at 0.9s. Below the hero, `[data-reveal]` blocks fade up 18px on first intersection. Theme swaps cross-fade color, background and border over 350ms. Ambient loops (pill bob, status pulse) are the only infinite animations. `prefers-reduced-motion` collapses all durations to near zero, stops the loops and shows revealed content immediately. Content is visible by default; JS opts into hiding it.

## Do's and Don'ts

### Do:
- **Do** stage each peak moment as a rounded stage panel (`--radius-xl`, `--stage`) and keep everything else on the page field.
- **Do** define new colors as semantic tokens in `tokens.css` for both dark and light.
- **Do** set proof as a figure in Stat value type with a label in secondary ink, inside a glass stat over a stage.
- **Do** make every action a pill (or circle) with the label-plus-attached-circle pattern for the primary call to action.
- **Do** use hairline rows (`1px solid --line`) for lists of text: experience, stack, facts.
- **Do** keep tracking tight and scale it with size (-0.02em to -0.045em).
- **Do** use the single accent (cyan or cobalt) only for interaction and small highlights.
- **Do** verify secondary ink (`--ink-2`, `--ink-3`) reads against its surface in both themes before using it for meaningful text.

### Don't:
- **Don't** put developer-template moves back: a dark hero with gradient text, or a grid of icon cards. Text content stays in hairline rows.
- **Don't** use gradient fills on text. Gradients belong to the arch, stages and thumbnails only.
- **Don't** add a second typeface; hierarchy comes from weight, size and tracking.
- **Don't** put text content in a glass card or a shadowed card; glass is for numbers and floating chrome.
- **Don't** add shadows at rest to cards; lift is a hover response.
- **Don't** make a button square, or a control without a pill or circle shape.
- **Don't** invent metrics, logos or testimonials; a stat is a real number from the resume or a shipped product (see PRODUCT.md).
- **Don't** hard-code a color inside a component when a token exists for the role.
