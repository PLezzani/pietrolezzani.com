---
version: alpha
name: Pietro Lezzani
description: Design system for a product strategy and design practice, built to make a decision legible rather than to display craft.
colors:
  surface: "#000000"
  surface-raised: "#191919"
  surface-inverse: "#FEFCF6"
  on-surface: "#FEFCF6"
  on-surface-muted: "#989794"
  on-surface-subtle: "#666562"
  on-surface-inverse: "#000000"
  accent: "#006FED"
  border: "#333230"
typography:
  display-xl:
    fontFamily: Darker Grotesque
    fontSize: 88px
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -0.02em
  display-l:
    fontFamily: Darker Grotesque
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.02em
  display-m:
    fontFamily: Darker Grotesque
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.015em
  display-s:
    fontFamily: Darker Grotesque
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.01em
  body-l:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-s:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
  nav:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
rounded:
  none: 0px
  sm: 2px
  pill: 9999px
spacing:
  3xs: 4px
  2xs: 8px
  xs: 12px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  2xl: 96px
  3xl: 144px
components:
  button-primary:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: 16px 32px
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-surface}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: 16px 32px
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: 16px 32px
  nav-link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    padding: 8px 0px
  section-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 0px
  divider:
    backgroundColor: "{colors.border}"
    rounded: "{rounded.none}"
    height: 1px
  card-offer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-l}"
    rounded: "{rounded.none}"
    padding: 40px 0px
  case-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-l}"
    rounded: "{rounded.none}"
    padding: 40px 0px
  proof-line:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.body-l}"
    rounded: "{rounded.none}"
    padding: 24px 0px
  scope-block:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-s}"
    rounded: "{rounded.sm}"
    padding: 24px
---

# Pietro Lezzani Design System

## Overview

This is the design system for the site of an independent product strategy and design practice. Its readers are the people who decide: founders of B2B scale-ups, heads of product, enterprise teams whose approved strategy has not reached the product yet. They arrive with a deadline and a budget, usually on a phone, usually between two meetings.

The system exists to make a decision legible. Every choice below serves reading and judgement, not display of craft. The site must never read as an agency site: no stock photography of meetings, no generic icon sets, no corporate gradients, no interchangeable claims. If a visual element could sit unchanged on another consultancy's site, it does not belong here.

## Colors

The palette is deliberately narrow: a black ground, a warm off-white on top, one blue.

`surface` is pure black. `on-surface` is `#FEFCF6`, a cream rather than white, because pure white on pure black reads as a terminal and fatigues the eye over a long case study. Secondary text does not introduce new hues: `on-surface-muted` and `on-surface-subtle` are that same cream stepped down in luminance, so the page never accumulates greys that belong to no one.

`accent` is a single saturated blue, used sparingly and always to mark something that has been earned: a section label, a proof line, a link in its hover state. It is the only chromatic event on the page, which is exactly what makes it work. `surface-inverse` carries the cream ground for long-form passages where sustained reading matters more than atmosphere, and inverts the text to black. `border` is the hairline: it does the work that shadows do elsewhere.

Contrast holds throughout: cream on black is roughly 19:1, and `on-surface-muted` on black still clears 7:1, comfortably past WCAG AA for body text. The blue is reserved for text at 18px or larger, where it clears AA against black.

## Typography

Two families with strictly separated jobs. Darker Grotesque is the display face: narrow, tall, drawn with confidence, and it holds a tight negative track at large sizes. Inter carries everything a person actually reads at length, plus navigation and labels.

The scale has a deliberate gap. Text lives at 13, 14, 16 and 18px; display starts at 32 and climbs to 88. Nothing occupies the middle. That gap is the hierarchy: a reader never has to work out whether something is a large body or a small heading, because the two vocabularies do not overlap.

`display-xl` tops out at 88px rather than the 140px-plus of the reference that inspired it, and the reason is the copy. The headlines here are arguments, nine or ten words long, not three-word slogans. At 160px an argument becomes a manifesto, which is the register this practice avoids. Eighty-eight pixels keeps a long sentence readable as a sentence.

## Layout

Spacing runs on a base-4 scale in nine steps, from 4px to 144px. The large end matters more than the small: `xl`, `2xl` and `3xl` separate sections, and the generosity between blocks is what makes a dark page feel composed rather than heavy.

The grid is editorial and asymmetric. On desktop, a title column of roughly 40% sits against a wider column for image or supporting text; body copy is capped near 34em so lines stay readable. On mobile everything collapses to a single column and the same vertical rhythm carries the page. Content is bounded by a container of about 1280px with `lg` gutters.

## Elevation & Depth

There is no elevation. Nothing floats, nothing casts a shadow, and there are no blurred layers.

Separation comes from two devices only: the `divider` hairline in `border`, and changes of ground between `surface`, `surface-raised` and `surface-inverse`. This is a deliberate constraint, and it is what keeps a black page from turning into a stack of dark cards competing for attention. When a block needs to feel set apart, it changes ground or it gets a rule above it. It never gets a shadow.

## Shapes

Corners follow function, not taste. Content is rectangular: `rounded.none` on images, sections, and any block a reader looks at. Controls are fully round: `rounded.pill` on buttons and small labelled chips. `rounded.sm` exists only for the scope block, where a barely-softened edge signals a technical aside without turning it into a card.

The rule is easy to hold: if you read it, it has square corners; if you click it, it is a pill. That single distinction does more for affordance than any amount of shading.

## Components

`button-primary` is the loudest element on the site by design. Cream fill on black ground, black text, pill shape: it is the brightest object on the page because it is the only action. On hover it fills with `accent`, so the state change is chromatic rather than a shift in opacity. `button-ghost` is the same geometry with a hairline border and no fill, and it exists for the rare secondary link, never for a competing call to action.

`section-label` sets small uppercase Inter in `on-surface-muted`, tracked out at 0.08em, preceded by a small square in `accent`. It names a section without a heading and keeps display type for the things that deserve it. `nav-link` stays plain until hover, when it takes `accent`.

`card-offer` and `case-item` are not cards in the usual sense: they carry no fill and no border box, only a `divider` above and generous vertical padding. They are rows in an editorial list. `proof-line` is the one place a claim is allowed to stand alone, set in `accent` at `body-l` with space above and below, and it is used only for a verifiable fact. `scope-block` closes a case study on `surface-raised` in muted small text, declaring duration, phases and exclusions.

## Do's and Don'ts

**Do**

- Reserve `accent` for what has been earned: a proof, a label, a hover. One blue event per screen is the target.
- Keep body measure near 34em, even when the viewport allows more.
- Let a section change ground when it needs to feel different, instead of reaching for a border or a fill.
- Set every claim that carries a number in `proof-line`, and only when the number is verifiable.
- Use display type for statements, and Inter for anything a reader has to work through.

**Don't**

- Never add a shadow, a glow, or a blurred layer. Separation is hairlines and grounds.
- Never introduce a grey that is not the cream stepped down, or a second accent hue.
- Never set an argument at display sizes above 88px: past that, a sentence stops being read and starts being chanted.
- Never place a second call to action on a page. One action, repeated at most, never rivalled.
- Never use stock photography, icon sets, or a gradient. If it could belong to any consultancy, it belongs to none.
- Never fill a case study with mockups arranged as a gallery. Images earn their place by showing the decision, not the craft.
