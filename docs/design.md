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
  on-surface-inverse-muted: "#5C5B58"
  accent: "#006FED"
  border: "#333230"
  border-inverse: "#CBCAC5"
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
    fontWeight: 500
    lineHeight: 1.55
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
  body-s:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  body-strong:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.45
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
  case-accordion:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-m}"
    rounded: "{rounded.none}"
    padding: 24px 0px
  accordion-toggle:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pill}"
    size: 40px
  statement-band:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.display-l}"
    rounded: "{rounded.none}"
    padding: 96px 0px
  affiliation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-l}"
    rounded: "{rounded.none}"
    padding: 24px 0px
  footer-inverse:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.body-l}"
    rounded: "{rounded.none}"
    padding: 96px 0px 40px
  divider-inverse:
    backgroundColor: "{colors.border-inverse}"
    rounded: "{rounded.none}"
    height: 1px
  case-thumb:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.none}"
    width: 100px
    height: 60px
  plan-step:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-l}"
    rounded: "{rounded.none}"
    padding: 40px
---

# Pietro Lezzani Design System

## Overview

This is the design system for the site of an independent product strategy and design practice. Its readers are the people who decide: founders of B2B scale-ups, heads of product, enterprise teams whose approved strategy has not reached the product yet. They arrive with a deadline and a budget, usually on a phone, usually between two meetings.

The system exists to make a decision legible. Every choice below serves reading and judgement, not display of craft. The site must never read as an agency site: no stock photography of meetings, no generic icon sets, no corporate gradients, no interchangeable claims. If a visual element could sit unchanged on another consultancy's site, it does not belong here.

## Colors

The palette is deliberately narrow: a black ground, a warm off-white on top, one blue.

`surface` is pure black. `on-surface` is `#FEFCF6`, a cream rather than white, because pure white on pure black reads as a terminal and fatigues the eye over a long case study. Secondary text does not introduce new hues: `on-surface-muted` and `on-surface-subtle` are that same cream stepped down in luminance, so the page never accumulates greys that belong to no one.

`accent` is a single saturated blue, used sparingly and always to mark something that has been earned: a section label, a proof line, a link in its hover state. It is the only chromatic event on the page, which is exactly what makes it work. `surface-inverse` carries the cream ground in three places: long-form passages where sustained reading matters more than atmosphere, the single `statement-band` that breaks the black page roughly a third of the way down, and the footer that closes it. In all three, text inverts to black, and `on-surface-inverse-muted` carries the secondary lines the way `on-surface-muted` does on black. `border` is the hairline on the dark ground and `border-inverse` its counterpart on the cream one: together they do the work that shadows do elsewhere.

Contrast holds throughout: cream on black is roughly 19:1, and `on-surface-muted` on black still clears 7:1, comfortably past WCAG AA for body text. The blue is reserved for text at 18px or larger, where it clears AA against black.

## Typography

Two families with strictly separated jobs. Darker Grotesque is the display face: narrow, tall, drawn with confidence, and it holds a tight negative track at large sizes. Inter carries everything a person actually reads at length, plus navigation and labels.

The scale has a deliberate gap. Text lives at 13, 14, 16 and 18px; display starts at 32 and climbs to 88. Nothing occupies the middle. That gap is the hierarchy: a reader never has to work out whether something is a large body or a small heading, because the two vocabularies do not overlap.

`display-xl` tops out at 88px rather than the 140px-plus of the reference that inspired it, and the reason is the copy. The headlines here are arguments, nine or ten words long, not three-word slogans. At 160px an argument becomes a manifesto, which is the register this practice avoids. Eighty-eight pixels keeps a long sentence readable as a sentence.

**Body text is set at 500, not 400, and this is not a stylistic preference.** The page renders with `-webkit-font-smoothing: antialiased`, which replaces subpixel rendering with a lighter grayscale one; on a black ground that thinning compounds with the optical erosion light glyphs already suffer, and Inter at 400 turns thin and washed out. Weight 500 restores the intended colour of the text. Both families are loaded as variable fonts across the 100 to 900 axis, so the middle weight costs no extra file. Two rules follow from this: never drop body text to 400 while the ground stays dark, and if a passage ever moves onto `surface-inverse`, step it back down to 400, because on a light ground 500 reads as emphasis.

## Motion

There is almost none, and what there is has one job: to make text arrive rather than be found already in place. A heading rises 18px and fades over 700ms on a decelerating curve, once, and never again. The hero plays on load; everything else plays when it comes into view, triggered slightly early so the movement has finished by the time the reader is looking at it. Where several lines belong together they are staggered by 90ms, which is enough to read as a sequence and too little to read as a queue.

Three rules keep this from becoming an effect. Nothing moves on scroll position, nothing is pinned, and no element repeats its entrance: scroll-driven motion turns the scrollbar into a liar, and a reader who is deciding whether to book a call is not there to be shown a mechanism. Under `prefers-reduced-motion` every reveal is skipped and the page renders as if none of it existed. And the hidden state must always carry its own way out, a delayed keyframe that reveals the text with no script involved, because the one failure this system will not accept is a page whose words never appear.

## Layout

Spacing runs on a base-4 scale in nine steps, from 4px to 144px. The large end matters more than the small: `xl`, `2xl` and `3xl` separate sections, and the generosity between blocks is what makes a dark page feel composed rather than heavy.

Sections are not all the same weight, and this matters more on a long page than any single spacing value. Seven sections of equal density read as one undifferentiated block however tall each one is, so the page needs a pulse: a tight section against an airy one. Density is the measure, not height. The statement band holds one sentence in a whole screen and the list sections hold three arguments in two thirds of one, and it is that ratio, better than ten to one across the page, that makes the reader feel movement while scrolling. Use `section--tight` and the full-height band sparingly: two deliberate exceptions give a page rhythm, five give it noise.

The grid is editorial and asymmetric. On desktop, a title column of roughly 40% sits against a wider column for image or supporting text; body copy is capped near 34em so lines stay readable. On mobile everything collapses to a single column and the same vertical rhythm carries the page. Content is bounded by a container of about 1280px with `lg` gutters.

## Elevation & Depth

There is no elevation. Nothing floats, nothing casts a shadow, and there are no blurred layers.

Separation comes from two devices only: the `divider` hairline in `border`, and changes of ground between `surface`, `surface-raised` and `surface-inverse`. This is a deliberate constraint, and it is what keeps a black page from turning into a stack of dark cards competing for attention. When a block needs to feel set apart, it changes ground or it gets a rule above it. It never gets a shadow.

## Shapes

Corners follow function, not taste. Content is rectangular: `rounded.none` on images, sections, and any block a reader looks at. Controls are fully round: `rounded.pill` on buttons and small labelled chips. `rounded.sm` exists only for the scope block, where a barely-softened edge signals a technical aside without turning it into a card.

The rule is easy to hold: if you read it, it has square corners; if you click it, it is a pill. That single distinction does more for affordance than any amount of shading.

## Components

`button-primary` is the loudest element on the site by design. Cream fill on black ground, black text, pill shape: it is the brightest object on the page because it is the only action. On hover it fills with `accent`, so the state change is chromatic rather than a shift in opacity. `button-ghost` is the same geometry with a hairline border and no fill, and it exists for the rare secondary link, never for a competing call to action.

`section-label` sets small uppercase Inter in `on-surface-muted`, tracked out at 0.08em, preceded by a small square in `accent`. It names a section without a heading and keeps display type for the things that deserve it. `nav-link` stays plain until hover, when it takes `accent`. The header that holds it is sticky and opaque on `surface`, and it leaves on the way down and returns on the way up: reading a long page happens downward, so the bar gets out of the way, and the one action is never more than a small scroll back. It never hides while the top of the page is in view, it returns the moment anything inside it takes focus, and under `prefers-reduced-motion` it simply stands still, because a bar that slides in and out is motion the reader has asked not to receive. Anything the navigation links to needs `scroll-margin-top` clearing the header height, or the anchor lands underneath it.

`case-accordion` is how the home lists the three cases: a row per case, the name in `display-m` on the left, an `accordion-toggle` on the right, and the hairline between rows. One case is open at a time and the first is open on arrival, so the list never reads as a closed door. The open row shows the description, the proof line and the link in a 2fr column against a 3fr cover image with square corners, set at 5 by 3 and cropped from the centre. The cover shows the product that was decided about, not an atmosphere: a real screen, or the screens the customer meets, never a photograph standing in for one. The toggle is the one pill in the list, because it is the one thing you click; it draws a plus that loses its vertical bar when the row is open, and nothing rotates or slides. Use native `details` and `summary` so the accordion works without script. A closed row is not empty: it carries a `case-thumb`, the same image as the cover it will open, at 100 by 60. It points at the same file, so the two cost one request between them and the full cover is already in the browser when the row opens. The thumbnail collapses to zero width on opening rather than disappearing, and its `alt` stays empty, because the cover underneath already describes the picture and a screen reader should not hear it twice.

`statement-band` sets one sentence in `display-l` on `surface-inverse`, full bleed, with `2xl` padding above and below. It is there to give the eye a rest between the situations and the offer. One band per page, never two.

`plan-step` is how a sequence of steps is shown: a square with a hairline border, the step number in `accent` at the top in `label` type, and the step itself in `body-l` pushed to the bottom, so three squares of unequal text still share one baseline. Three of them sit in a row, and a hairline runs across each gap at the height of the numbers. That connector is the component: without it three squares read as three things on offer, which is the opposite of what a plan means. Below 720px the row stacks and the connector turns vertical. Squares carry steps only, never options: anything the reader chooses between belongs in `card-offer`.

`footer-inverse` is the second and last ground change: the page ends on cream rather than fading out on black. It carries the name in `display-m`, the role and city under it, contact links in `body-l` underlined with `divider-inverse`, and a legal line below a rule. It holds no call to action. The one action already appears three times above it, and a fourth in the footer would turn a close into a nag.

`affiliation` names a network or a body the practice belongs to. It sits under a hairline in the title column: the name in `body-l`, then the organisation's logo. A borrowed logo is admissible on one condition, that it is a single colour and that colour is `on-surface`, so it adds no hue the palette does not already carry; a logo in its own brand colours is not, and no amount of importance changes that. Keep it near 180px wide, well under the display type above it, because the affiliation supports the claim rather than making it.

Sections follow one order without exception: `section-label`, then a `divider`, then the title, then the content. A label that appears below the title it labels reads as a caption for whatever precedes it, which is never what was meant. The divider sits `lg` below the label in every section, list or not, and the content opens `lg` below the divider. That repeated distance is what makes four different sections read as one page: a reader who has learned where the line falls should never have to relearn it.

The hero carries an interactive ground rather than an image: a canvas of identical small squares in the cream at low opacity, and a region near the pointer where a few of them are chosen, grow slightly, and turn `accent`. It restates the headline without illustrating it. When nobody is pointing, the region drifts slowly; under `prefers-reduced-motion` it stands still. A reel can take the same slot later, kept muted, looped and behind the text, at reduced opacity so the headline stays the brightest thing on the screen.

`card-offer` and `case-item` are not cards in the usual sense: they carry no fill and no border box, only a `divider` above and generous vertical padding. They are rows in an editorial list. `proof-line` is the one place a claim is allowed to stand alone, set in `accent` at `body-l` with space above and below, and it is used only for a verifiable fact. `scope-block` closes a case study on `surface-raised` in muted small text, declaring duration, phases and exclusions.

## Do's and Don'ts

**Do**

- Reserve `accent` for what has been earned: a proof, a label, a hover. One blue event per screen is the target.
- Keep body measure near 34em, even when the viewport allows more.
- Keep the densest and the airiest section far apart in density, several times over. Even spacing on every section is what makes a page read flat.
- Let a section change ground when it needs to feel different, instead of reaching for a border or a fill.
- Set every claim that carries a number in `proof-line`, and only when the number is verifiable.
- Say a fact once. If a paragraph introduces a step and the step repeats it, the paragraph goes and the step keeps the detail.
- Use display type for statements, and Inter for anything a reader has to work through.
- While an image is not yet available, leave a dashed slot with a note on the intended subject. A wrong image is worse than a marked gap.

**Don't**

- Never add a shadow, a glow, or a blurred layer. Separation is hairlines and grounds.
- Never hide text behind a state that only script can undo. Every hidden state needs a scriptless way out.
- Never tie motion to scroll position or pin a section. Motion happens once, on arrival, and then it is over.
- Never introduce a grey that is not the cream stepped down, or a second accent hue.
- Never let body text stay at 500 once it moves onto the cream ground, footer included. Step it down to 400.
- Never set an argument at display sizes above 88px: past that, a sentence stops being read and starts being chanted.
- Never place a second call to action on a page. One action, repeated at most, never rivalled.
- Never use stock photography, icon sets, or a gradient. If it could belong to any consultancy, it belongs to none.
- Never fill a case study with mockups arranged as a gallery. Images earn their place by showing the decision, not the craft.
