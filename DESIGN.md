---
name: Gabriel Fracalossi Portfolio
description: A staged, two-theme portfolio. A ghost word behind an arched cut-out portrait, proof as numbers, bento cards on rounded stages, tight grotesk, pill buttons with an attached circle.
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
  availability-mint-light: "#00a878"
  # Feature panel (Stack): the same saturated blue in both themes
  feature-blue-top: "#0b36c8"
  feature-blue-mid: "#0a2590"
  feature-blue-bottom: "#08196b"
  # Bento cards on the feature panel
  paper-card: "#f4f6fd"
  paper-chip: "#e3e8f7"
  glass-chip: "#ffffff"
  # Project cover tiles (gradient start / end), theme-independent
  cover-a-start: "#0a3fd6"
  cover-a-end: "#1c8fff"
  cover-b-start: "#0632a8"
  cover-b-end: "#4a3cf0"
  cover-c-start: "#0a5ec4"
  cover-c-end: "#00b7d6"
  cover-d-start: "#06407e"
  cover-d-end: "#00a884"
  cover-e-start: "#3a2fd0"
  cover-e-end: "#0097f5"
  cover-vergi-start: "#0f3a56"
  cover-vergi-end: "#1d6a7c"
  tag-plate: "#050a1a"
typography:
  hero:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 9.6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  ghost:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "min(12vw, 17rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.3rem + 5.6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  watermark:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(7rem, 13vw, 12rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.05em"
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
  caption:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
  tag:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  s: "10px"
  m: "16px"
  l: "24px"
  xl: "32px"
  pill: "999px"
  brand-mark: "9px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2vw, 2rem)"
  pad-x: "clamp(1rem, 3vw, 2rem)"
  section: "clamp(4.5rem, 2.5rem + 7vw, 8.5rem)"
  container: "1240px"
  stage-max: "1480px"
  nav-height: "72px"
  bento-gap: "clamp(0.75rem, 1.6vw, 1rem)"
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
  card:
    backgroundColor: "{colors.night-card}"
    textColor: "{colors.ink-frost}"
    rounded: "{rounded.l}"
    padding: "clamp(20px, 2.4vw, 28px)"
  bcard-glass:
    textColor: "{colors.glass-chip}"
    rounded: "{rounded.l}"
    padding: "clamp(20px, 2.4vw, 28px)"
  bcard-paper:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.l}"
    padding: "clamp(20px, 2.4vw, 28px)"
  chip-paper:
    backgroundColor: "{colors.paper-chip}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
  chip-glass:
    backgroundColor: "{colors.glass-chip}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.pill}"
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

The portfolio is staged the way the pinned Dribbble reference is staged. Rounded panels are the stage; on the first one a giant ghost word sits behind an arched, cut-out portrait, and proof is stated as numbers in glass cards. The stages then repeat as the bento language: About is two text cards; Nazario is a stage with glass fact cards; Stack is a saturated blue feature panel of glass and paper cards. Around them everything is quiet: tight grotesk type, hairline rows for the timeline, and a single pill-and-circle button as the only loud control. It refuses the dark-hero, gradient-text, icon-card developer template.

The world is theme-paired. In dark (the default, the owner's original palette) the stage is navy and the arch is electric blue, with cyan as the one small signal. In light the stage is cool gray, the arch is cobalt fading to periwinkle, and the button and accent go to ink navy and cobalt. Composition, radii and type do not change between themes; only tokens do. The one exception is deliberate: the Stack feature panel and the project cover tiles carry the same saturated blue in both themes, as a fixed color moment.

Density is generous and confident: large tracking-tight headlines, long line-height body copy in the secondary ink, section padding from 72px to 136px, and a tight 12-16px gap inside bento grids so the cards read as one composed object.

**Key Characteristics:**
- Rounded stage panels (24px mobile hero, 32px elsewhere) as the unit of "big moment"; three exist: hero, Nazario, Stack.
- Ghost word behind an arched portrait; the arch is a 999px-topped cut-out with a vertical blue gradient. The ghost word is the translated role word (DESENVOLVEDOR, DEVELOPER, DESARROLLADOR).
- Bento cards (`.card`, `.bcard`) on a 12-column grid with text cards, glass and paper cards, and floating tilted chips.
- Two-theme semantic token file; only brand blues, mint, the feature blue and the cover gradients are theme-independent.
- Tight grotesk: negative tracking scaled to size, weights 500-800 for display, 400-450 for reading.
- Pill and circle language for every control; white floating pills; glass for numbers and floating chrome.
- Optional image slots show a dashed placeholder until the file exists, then the image appears with no code change.

## Colors

A navy-and-electric-blue world with one cyan signal in dark; a cool gray-and-cobalt world with ink navy in light. Neutrals are tinted toward blue in both themes. Pure black and pure white are avoided except for the white pill, the light-theme card and the chips on glass.

### Primary
- **Electric Arch Blue** (#0a4bff to #1f9bff): the arch gradient in dark (top to bottom). In light it becomes **Cobalt Arch** (#2f55ff to #9db0ff).
- **Cyan Signal** (#00e4f5): dark-theme accent for links, focus rings, hover text, active nav link and the circle on the primary button. Small marks only.
- **Cobalt** (#0a3fe0): the light-theme accent, in the same roles. It is also the hover color of chips on the feature panel in both themes.
- **Brand Blue / Brand Sky** (#004af5 / #0097f5): theme-independent; the brand mark tile and the default project cover.
- **Feature Blue** (#0b36c8 to #0a2590 at 55% to #08196b, vertical): the Stack panel background, identical in both themes. It is the one saturated field; text on it is white (heading) and 80% white (lead).

### Secondary
- **Availability Mint** (#00f5b3, #00a878 in light): the pulsing dot in the status chip, and nothing else.

### Neutral
- **Night Field** (#03060f): page background, dark. **Night Surface** (#070d1c), **Night Card** (#0a1228) and its hover (#0d1733).
- **Stage Navy** (#0b1633 to #08102a): the vertical stage gradient, dark. Light counterpart **Stage Fog** (#d6d9e6 to #c9cddc) on a **Fog Field** page (#eef0f6), with **Fog Card** white (#ffffff).
- **Frost Ink** (#e8f0ff, secondary #9dacc8, tertiary #7c8db0): text in dark. Light: **Ink Navy** (#0b1020, #444e6a, #5c6684).
- **Pill White** (#f2f6ff dark, #ffffff light): floating pills, always with dark text.
- **Paper Card** (#f4f6fd) with **Paper Chip** (#e3e8f7): the light bento cards on the feature panel. They stay the same in both themes and carry Ink Navy (#0b1020).
- **Glass Chip** (white at 92%): chips sitting on the glass bento cards, with Ink Navy text.
- **Hairline** (`--line` rgba(140,170,255,0.14) dark, rgba(11,16,32,0.11) light; `--line-strong` at 0.34 / 0.4 of the accent hue): every divider and outline on the page field and stage. On the feature panel, outlines are white at 22% (glass card) and 38% (orbit rings).
- **Ghost** (rgba(232,240,255,0.10) dark, rgba(255,255,255,0.6) light): the hero ghost word. The feature panel's watermark uses white at 9%.

### Cover Tiles
Each project cover is a 140deg gradient tile from one of six pairs, theme-independent: A blue (#0a3fd6 to #1c8fff), B indigo (#0632a8 to #4a3cf0), C teal-blue (#0a5ec4 to #00b7d6), D deep-green (#06407e to #00a884), E violet (#3a2fd0 to #0097f5), Vergi navy-teal (#0f3a56 to #1d6a7c, taken from its own brand). Covers carry white marks only (white arches at 22%, glass badge, white icon) and a tag plate (#050a1a at 78%) for tags.

### Named Rules
**The One Signal Rule.** One accent per theme (cyan in dark, cobalt in light). It marks interaction (hover, focus, active link, arrow circle) and small highlights, never large fills or decorative text.
**The Theme-Pair Rule.** A new surface is defined once through semantic tokens (`--bg`, `--stage`, `--card`, `--ink`, `--accent`, `--line`) and must work in both themes. Do not hard-code a hex inside a component to serve one theme. The feature panel, paper cards and cover tiles are the only fixed-color surfaces and carry their own ink.
**The Ink-On-Pill Rule.** White pills, glass chips, paper chips and the light-theme card carry dark ink in both themes; they never inherit page text color.
**The One Feature Rule.** A single saturated-blue feature panel exists (Stack). It is the loudest field on the page; a second one dilutes it.

## Typography

**Display and Body Font:** Hanken Grotesk (loaded 300-800, with ui-sans-serif, system-ui fallbacks). Single family across every role.

**Character:** A modern, slightly geometric grotesk used tight. The voice comes from tracking and weight contrast, not from a second face. Numerals are tabular wherever figures line up (`.tnum`).

### Hierarchy
- **Ghost** (800, JS-fitted so the word spans 96% of the stage width, capped at 17rem; CSS fallback min(12vw, 17rem); line-height 0.8, -0.04em): the translated role word behind the portrait, low-contrast fill, masked to fade downward. Its bottom sits 0.42em into the arch. Decorative, `aria-hidden`.
- **Hero** (600, clamp 2.25rem-3.75rem mobile, up to clamp 3rem-4.25rem tablet and clamp 2.25rem-4rem desktop, line-height 0.98, -0.04em): the h1.
- **Display** (600, clamp 2.5rem-6rem, 0.95, -0.045em): the contact closer. The Nazario title is a step down (clamp 2rem-4rem, 1.0, -0.04em).
- **Watermark** (800, clamp 7rem-12rem, 0.8, -0.05em, white at 9%): the ".NET" word inside the Stack language card, desktop only, bleeding off the bottom edge. It echoes the hero ghost word.
- **Headline** (600, clamp 1.75rem-2.75rem, 1.1, -0.035em): section titles, and the centered Stack panel title in white.
- **Statement** (500, clamp 1.625rem-3.25rem, 1.14, -0.04em): the About lead sentence.
- **Title** (600, clamp 1.25rem-1.5rem, -0.03em): project names, role titles, card and bento card titles, mobile nav links.
- **Body** (400, 1rem, 1.6; secondary ink, 1.7 for card text): lead paragraphs at 1.125rem, cap at 34-62ch. Wide cards step card text to 1rem.
- **Small** (0.875rem, 1.65-1.7): card descriptions, facts, footer.
- **Stat value** (600, clamp 1.375rem-1.875rem, 1, -0.03em, tabular): the numbers in hero glass stats.
- **Label** (500, 0.875rem, line-height 1): button labels, chips, pills (pills at 600).
- **Caption** (500, 0.75rem): the status chip, project domain, tech tags, path label.
- **Tag** (600, 0.6875rem, 0.05em, uppercase): project cover tags only. Orbit node labels are 11px 600 in the SVG.

### Named Rules
**The Tight-Grotesk Rule.** Tracking tightens as size grows: 0 at body, -0.02em at small titles, -0.04em at display, -0.05em at the watermark. Never set large type at default tracking.
**The Numbers-Lead Rule.** Proof is set as a figure in Stat value type with a short label in secondary ink, never as an adjective in a card.
**The Fit-The-Ghost Rule.** The ghost word is fitted to the stage by measurement, not by a fixed size, so any language fills the stage without overflowing it.

## Layout

A full-bleed page field with two widths: `--container` 1240px (plus gutter) for reading sections and `--stage-max` 1480px for stage panels and the nav bar. Gutter is fluid 16-32px; stage inner padding `--pad-x` is 16-32px. Sections stack on one rhythm: `--space-section` (72-136px) is owned by the section above, so `.section + .section` has no top padding.

Reading sections use a two-column split (1fr / 2.2fr): a small title on the left, content on the right, collapsing to one column at 860px.

**Bento grids** use 12 columns with a `clamp(12px, 1.6vw, 16px)` gap. About: two text cards, stacked on mobile and side by side from 960px (columns 1-6 and 7-12). Stack (inside the feature panel): one column on mobile, two columns from 600px (language and architecture cards full width), and from 960px an asymmetric composition over three rows: language (1-5, two rows), data (6-9), cloud (10-12, two rows), architecture (6-9), then methodology (1-3), AI (4-8) and spoken languages (9-12). Nazario keeps its own layout: title and lead left with a logo slot right (from 860px; the slot stacks below at 16rem wide on smaller screens), then three glass fact cards in a row (stacked below 860px).

**Projects** are a grid of equal cards, no featured card: one column, two from 640px, three from 1100px.

The hero is the only fully composed layout. Mobile: arch first (72vw up to 340px, height 1.36x width), copy below, stats stacked, two columns of stats from 560px. Tablet (720-1179px): arch 46vw up to 380px, copy stacked, radius steps to 32px. Desktop (1180px+): the stage fills the viewport (min-height clamp 680-940px), the ghost word and arch (30vw, 360-460px) go absolute and centered, title, lead and CTA sit bottom-left, the availability chip and two stat cards stack bottom-right (21rem wide).

Breakpoints as built: 560 (hero stat pairs), 600 (Stack bento to two columns), 640 (projects to two columns), 720 (tablet hero), 860 (splits, Nazario top and facts collapse), 960 (nav inline, About and Stack bento composed, watermark shown), 1100 (projects to three columns), 1180 (desktop hero). Max-width queries collapse grids; min-width queries build up the hero, nav and bento.

## Elevation & Depth

Depth is mostly tonal and translucent, with shadows reserved for lift. Surfaces separate by gradient stage, card color and 1px hairlines. Translucency does the floating: the nav bar, status chip, hero stat cards, Nazario fact cards and project tags use blur backdrops (8-18px, up to saturate 1.4) over `--glass` or `--nav-bg`. On the feature panel, glass is a 160deg white-blue gradient (blue at 32%, fading to white at 5%) with a 22% white outline, and paper cards are flat opaque.

### Shadow Vocabulary
- **Card lift** (`--shadow-card`: `0 28px 56px -28px rgba(0,20,90,0.7)` dark, `0 28px 56px -30px rgba(20,35,90,0.35)` light): project card on hover, and the mobile nav sheet.
- **Pill float** (`0 14px 28px -14px rgba(0,10,60,0.45)`): the white floating pills only.

### Named Rules
**The Flat-Until-Touched Rule.** Cards are flat at rest (border plus fill). The shadow and a 4px rise appear only on hover, and only on project cards, which are links.
**The Glass-Over-Stage Rule.** Blur-and-tint glass belongs on a stage, the feature panel or floating chrome (nav, status, tags, badges). On the plain page field, cards are solid `--card`.

## Shapes

Big, soft, and round, with one architectural gesture. Radii are a five-step scale: 10, 16, 24, 32 and pill (999). Stage panels and the desktop hero use 32px (24px on the mobile hero); every card, bento card, glass stat, logo slot, project card and nav sheet uses 24px; the brand tile uses 9px and the scrollbar thumb 8px. Controls are always pill or circle; the project badge and status dot are circles.

The signature silhouette is the arch: a 999px top radius with a square base, bottom-anchored, fading out at its base through a mask. It recurs as a faint outline inside the Nazario stage panel (line color at 0.55 opacity, masked) and as a white outline tile inside every project cover. The portrait is cut out and slightly oversized inside the arch (122% wide, offset -11%) so the head breaks its edge.

The orbit motif on the cloud card is two dashed concentric half-rings (1.5px, 4 6 dash, white at 38%) with three dark round nodes labeled Az, Git and GH.

Borders are 1px hairlines at `--line`, stepping to `--line-strong` on hover or for emphasis (glass cards, tags, path labels, link underlines). Empty image slots use a 1.5px dashed `--line-strong` outline and turn to a solid `--line` outline once an image loads.

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
24px radius, glass fill, 1px hairline, 16px blur with saturate 1.3, 16px by 20px padding. Label in secondary ink at most 10rem wide, figure in Stat value type. Row on desktop, column from 560 to 1179. Lives only in the hero aside.

### Status Chip
Pill-shaped glass with a mint dot that pulses a soft ring every 2.4s. One per page, in the hero aside.

### Chips and Tags
- **Chip:** 1px hairline pill, 0.875rem, weight 450; hairline strengthens and text goes accent on hover.
- **Floating chips (`.chips--float`):** chips in a bento card; every fourth (from the second) tilts -3deg, and every fifth (from the fourth) tilts 2.5deg and drops 2px, so the row looks scattered by hand, not aligned.
- **Glass chip / Paper chip:** on the feature panel, chips lose their outline. On glass cards they are white at 92% with Ink Navy text; on paper cards they are Paper Chip (#e3e8f7) with Ink Navy text. Hover text is cobalt.
- **Tag:** dark translucent pill with blur, white 11px uppercase text at 0.05em, laid over project covers. Tags are topic labels (Frontend, Backend, Mobile...); there is no "own product" tag.
- **Tech tag:** small hairline pill in secondary ink at 0.75rem.
- **Path label (timeline):** outlined strong-hairline pill in accent, 0.75rem, weight 600.

### Nav
A fixed floating pill bar (56px tall, 12px from the top) that is invisible at the top of the page and fades in a blurred pill background after 24px of scroll. Brand tile plus name on the left. From 960px: inline links (0.875rem, secondary ink, current link on a 9% ink pill), language switch, primary small button, theme toggle. Below 960px: a menu toggle opens a 24px-radius sheet (card fill, hairline, card shadow) with large links divided by hairlines.

### Language Switch
Hairline pill with three buttons (PT, EN, ES); the pressed one fills with the button color.

### Hairline Rows (timeline)
Experience is a list with a hairline top border per row, a small meta column (date, company) beside a title and body. Bullets are 12px hairline dashes, not dots. Only the timeline uses this row form now; stack and Nazario facts moved to cards.

### Cards (`.card`)
The bento unit on the page field. 24px radius, 1px hairline, `--card` fill, padding clamp(20px, 2.4vw, 28px).
- **Text card (`--wide`):** Title, secondary-ink text at 0.875rem (1rem when wide), optional floating chips underneath. Two in About, stacked on mobile and side by side from 960px.
- **Glass card (`--glass`):** translucent glass fill, strong hairline, 14px blur. Used for the three Nazario facts on the stage panel.

### Image Slots
A container marked `data-slot` holding an `img` that starts at `hidden` or fails to load. While the file is missing it shows a dashed outline with an icon; once the file loads it gets `has-img` and the image covers the placeholder. One exists: the Nazario logo (`assets/img/nazario-logo.png`, 5:4 slot, max 22rem, logo contained with 28px padding; currently filled with the green diamond logo). No code change is needed when the file is added.

### Stage Panel
A 32px-radius panel with the stage gradient and generous padding (28-72px), clipped to hide the large arch outline. Used for the hero and the Nazario Sistemas block. Its inner elements sit on `--glass`.

### Feature Panel (Stack)
A stage panel with the Feature Blue gradient and white text, 24-56px padding. A centered white headline and 80%-white lead sit above a 12-column bento of `bcard` cards. Glass bcards (language, cloud, AI) hold white text on the blue-white gradient; paper bcards (data, architecture, methodology, spoken languages) are flat Paper Card with Ink Navy text. Each bcard is a column with a Title and floating chips; the cloud card ends in the orbit SVG, and the language card carries the .NET watermark on desktop. Do not make a second feature panel.

### Project Cards
A 24px-radius card on Night Card / white with a 1px hairline, all equal size. The cover is a 16:10 gradient tile (six pairs, see Cover Tiles) with a white arch outline anchored at the bottom (58% wide, 22% white), a centered 84px glass badge (white at 14%, 32% white outline, 8px blur) holding a drawn white icon (2.5rem, 1.5 stroke, the `i-p-*` symbols: calendar for Vergi, plate with cutlery for Cozinha Inteligente, single ring for EstãoCasando, code brackets for Nazario, bars for Power Embedded, snowflake for Tecnocryo, dollar sign for Sistema Financeiro, braces for MinhaPrimeiraAPI, cap for Acadêmicos), a top-left tag row and a domain caption bottom-left. Covers never use images (screenshots or logos). Body: title, role in tertiary ink, description, tech pills, and an underlined text link that expands to cover the whole card. Hover: lift 4px, strong hairline, card shadow; the arches scale 1.05 and the badge rises 3px and scales 1.05.

## Motion

Ease is `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out) throughout; durations are 180ms (fast, color changes), 320ms (base, movement), 500ms (badge) and 700ms (reveals, arch scale). Hero entrance is choreographed: ghost fades up (1.2s), arch rises (1.1s, 0.1s delay), copy rises in 0.1s steps from 0.35s, aside at 0.75s, pills pop at 0.9s. Below the hero, `[data-reveal]` blocks fade up 18px on first intersection; project cards stagger by column (0, 90, 180ms). Theme swaps cross-fade color, background and border over 350ms. Ambient loops (pill bob, status pulse) are the only infinite animations. `prefers-reduced-motion` collapses all durations to near zero, stops the loops and shows revealed content immediately. Content is visible by default; JS opts into hiding it.

## Do's and Don'ts

### Do:
- **Do** stage each peak moment as a rounded stage panel (`--radius-xl`, `--stage`) and keep the rest on the page field. The Stack feature panel is the one exception in color, not in shape.
- **Do** define new colors as semantic tokens in `tokens.css` for both dark and light; a fixed-color surface (feature, paper, cover) carries its own ink.
- **Do** set proof as a figure in Stat value type with a label in secondary ink.
- **Do** compose cards as a bento: a 12-column grid, 12-16px gaps, text cards side by side.
- **Do** make every action a pill (or circle) with the label-plus-attached-circle pattern for the primary call to action.
- **Do** use hairline rows for chronological lists (experience).
- **Do** give optional images a slot with a placeholder so the layout is finished before the file exists.
- **Do** keep tracking tight and scale it with size (-0.02em to -0.05em).
- **Do** use the single accent (cyan or cobalt) only for interaction and small highlights.
- **Do** verify secondary ink (`--ink-2`, `--ink-3`) reads against its surface in both themes before using it for meaningful text.

### Don't:
- **Don't** put developer-template moves back: a dark hero with gradient text, or a grid of icon cards. Bento cards carry a title, text or a number, and chips; not an icon over a heading.
- **Don't** use gradient fills on text. Gradients belong to the arch, stages, feature panel, glass cards and cover tiles only.
- **Don't** add a second typeface; hierarchy comes from weight, size and tracking.
- **Don't** use glass cards on the bare page field; there they are solid `--card`.
- **Don't** add shadows at rest to cards; lift is a hover response on link cards.
- **Don't** make a button square, or a control without a pill or circle shape.
- **Don't** use images (screenshots or logos) as project covers; the cover is gradient, arches and a drawn icon badge.
- **Don't** add a second saturated feature panel.
- **Don't** invent metrics, logos or testimonials; a stat is a real number from the resume or a shipped product (see PRODUCT.md).
- **Don't** hard-code a color inside a component when a token exists for the role.
