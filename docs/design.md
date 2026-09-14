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
  on-surface-inverse-faint: "#BDBBB5"
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
    fontFamily: Darker Grotesque
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: Darker Grotesque
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.5
  body-s:
    fontFamily: Darker Grotesque
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.45
  body-strong:
    fontFamily: Darker Grotesque
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: Darker Grotesque
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
  nav:
    fontFamily: Darker Grotesque
    fontSize: 20px
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
  case-facts:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px 0px
  case-proof:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.display-m}"
    rounded: "{rounded.none}"
    padding: 0px
  case-chapter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-l}"
    rounded: "{rounded.none}"
    padding: 96px 0px
  case-gallery:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-s}"
    rounded: "{rounded.none}"
    padding: 0px
  case-pair:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-s}"
    rounded: "{rounded.none}"
    padding: 0px
  kpi:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-l}"
    rounded: "{rounded.none}"
    padding: 24px
  case-card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-s}"
    rounded: "{rounded.none}"
    padding: 24px
    aspectRatio: 479/560
  case-card-sheet:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.body-s}"
    rounded: "{rounded.none}"
    padding: 24px
  statement-band:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.display-l}"
    rounded: "{rounded.none}"
    padding: 96px 0px
  affiliation-band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 24px 0px
    borderTop: "1px {colors.border}"
    borderBottom: "1px {colors.border}"
    align: center
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
  case-mark:
    textColor: "{colors.on-surface}"
    typography: "{typography.label}"
  disclosure-sign:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pill}"
    size: 40px
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

`surface` is pure black. `on-surface` is `#FEFCF6`, a cream rather than white, because pure white on pure black reads as a terminal and fatigues the eye over a long case study. Secondary text does not introduce new hues: `on-surface-muted` and `on-surface-subtle` are that same cream stepped down in luminance, so the page never accumulates greys that belong to no one. On the cream ground the same rule holds in reverse: `on-surface-inverse-muted` is the ink stepped up, and `on-surface-inverse-faint` is the cream stepped down far enough to read as unread, which is what the bridge uses for the words the scroll has not reached yet.

`accent` is a single saturated blue, used sparingly and always to mark something that has been earned: a section label, a proof line, a link in its hover state. It is the only chromatic event on the page, which is exactly what makes it work. `surface-inverse` carries the cream ground in three places: long-form passages where sustained reading matters more than atmosphere, the single `statement-band` that breaks the black page roughly a third of the way down, and the footer that closes it. In all three, text inverts to black, and `on-surface-inverse-muted` carries the secondary lines the way `on-surface-muted` does on black. `border` is the hairline on the dark ground and `border-inverse` its counterpart on the cream one: together they do the work that shadows do elsewhere.

Contrast holds throughout: cream on black is roughly 19:1, and `on-surface-muted` on black still clears 7:1, comfortably past WCAG AA for body text. The blue is reserved for text at 18px or larger, where it clears AA against black.

## Typography

One family, two jobs. Darker Grotesque sets everything: the display sizes it was drawn for, narrow and tall and confident under a tight negative track, and the running text, the navigation and the labels as well. A single face gives the page one voice, and it costs one file. What it asks in return is that the text sizes be raised: the face carries a much lower x-height than a text face, so the same number of pixels reads about a third smaller. Every text size below is set against that, and the leading with it.

The scale has a deliberate gap. Text lives at 15, 18, 21 and 24px; display starts at 32 and climbs to 88. Nothing occupies the middle. That gap is the hierarchy, and with one family doing both jobs it is the only thing separating them, so it has to be kept: a reader never has to work out whether something is a large body or a small heading, because the two vocabularies do not overlap. Weight carries the rest of the distinction, and this is why body text is never allowed to sit at 600 outside `body-strong` and `label`.

`display-xl` tops out at 88px rather than the 140px-plus of the reference that inspired it, and the reason is the copy. The headlines here are arguments, nine or ten words long, not three-word slogans. At 160px an argument becomes a manifesto, which is the register this practice avoids. Eighty-eight pixels keeps a long sentence readable as a sentence.

**Body text is set at 500, not 400, and this is not a stylistic preference.** The page renders with `-webkit-font-smoothing: antialiased`, which replaces subpixel rendering with a lighter grayscale one; on a black ground that thinning compounds with the optical erosion light glyphs already suffer, and the face at 400 turns thin and washed out. Weight 500 restores the intended colour of the text. The family is loaded as one variable font across the 400 to 600 axis, so the middle weight costs no extra file. Two rules follow from this: never drop body text to 400 while the ground stays dark, and if a passage ever moves onto `surface-inverse`, step it back down to 400, because on a light ground 500 reads as emphasis.

## Motion

There is almost none, and what there is has one job: to make text arrive rather than be found already in place. A heading rises 18px and fades over 1100ms on a decelerating curve, once, and never again. The one exception is the affiliation band under the hero, which resolves out of a blur without moving, because a strip that rises against the hairline it sits on appears to slide along it. The hero plays on load; everything else plays when it comes into view, triggered slightly early so the movement has finished by the time the reader is looking at it. Where several lines belong together they are staggered by 140ms, which is enough to read as a sequence and too little to read as a queue.

The curve matters as much as the duration. An exponential ease-out spends nearly its whole budget in the first third and leaves a long imperceptible tail, so lengthening one makes the text pause rather than slow down. A cubic ease-out distributes the movement, and that is what makes a slower reveal read as slower. Duration, rise, stagger and curve are tokens: change the number, not the rule.

These rules govern arrivals, not feedback: a control may answer a hover or a press every time it is touched, and should. Three rules keep arrivals from becoming an effect. Nothing is pinned, no element repeats its entrance, and nothing that changes the page's length or position is driven by scroll: pinning turns the scrollbar into a liar, and a reader who is deciding whether to book a call is not there to be shown a mechanism. Tying a property to scroll position is allowed where it tracks reading rather than replacing it, which is exactly one thing here, the sentence that brightens as it passes: nothing moves, nothing is held back, and a reader who scrolls straight past receives the same words. Under `prefers-reduced-motion` every reveal is skipped and the page renders as if none of it existed. And the hidden state must always carry its own way out, a delayed keyframe that reveals the text with no script involved, because the one failure this system will not accept is a page whose words never appear.

## Layout

Spacing runs on a base-4 scale in nine steps, from 4px to 144px. The large end matters more than the small: `xl`, `2xl` and `3xl` separate sections, and the generosity between blocks is what makes a dark page feel composed rather than heavy.

Sections are not all the same weight, and this matters more on a long page than any single spacing value. Seven sections of equal density read as one undifferentiated block however tall each one is, so the page needs a pulse: a tight section against an airy one. Density is the measure, not height. The statement band holds one sentence in a whole screen and the list sections hold three arguments in two thirds of one, and it is that ratio, better than ten to one across the page, that makes the reader feel movement while scrolling. Use `section--tight` and the full-height band sparingly: two deliberate exceptions give a page rhythm, five give it noise.

The grid is editorial and asymmetric. On desktop, a title column of roughly 40% sits against a wider column for image or supporting text; body copy is capped near 34em so lines stay readable. On mobile everything collapses to a single column and the same vertical rhythm carries the page. Content is bounded by a container of 1920px with `lg` gutters.

## Elevation & Depth

There is no elevation. Nothing floats, nothing casts a shadow, and there are no blurred layers.

Separation comes from two devices only: the `divider` hairline in `border`, and changes of ground between `surface`, `surface-raised` and `surface-inverse`. This is a deliberate constraint, and it is what keeps a black page from turning into a stack of dark cards competing for attention. When a block needs to feel set apart, it changes ground or it gets a rule above it. It never gets a shadow.

## Shapes

Corners follow function, not taste. Content is rectangular: `rounded.none` on images, sections, and any block a reader looks at. Controls are fully round: `rounded.pill` on buttons and small labelled chips. `rounded.sm` is held in reserve for a technical aside that needs a barely-softened edge without becoming a card. Nothing currently uses it: the case facts that once did are now a row under a hairline, which says the same thing with less.

The rule is easy to hold: if you read it, it has square corners; if you click it, it is a pill. That single distinction does more for affordance than any amount of shading.

## Components

`button-primary` is the loudest element on the site by design. Cream fill on black ground, black text, pill shape: it is the brightest object on the page because it is the only action. On hover it fills with `accent`, so the state change is chromatic rather than a shift in opacity, and the fill spreads from the point where the cursor crossed the edge rather than replacing the whole button at once, with a soft edge so the circle arrives rather than cuts. The feather is a multiple of the radius rather than a fixed distance, because a fixed one is still there when the radius is zero, and a button nobody has touched would carry a blue halo at its centre. That origin is the entire idea: a colour that arrives from where the hand came from reads as a response to the reader, while a colour that swaps everywhere at once reads as a state the page happened to be in. The label flips to `on-surface` just after the edge has swept past it, a little under half the travel, because a label that flips at the start spends a moment as black text on blue.

Two notes on how it is built. The growth is a transition on a registered custom property holding the radius, and script does nothing but record the entry point, so a browser without `@property`, or a page whose script failed, still turns the button `accent` on hover in the way it always did. And under `prefers-reduced-motion` the spreading fill is removed rather than shortened: the button changes colour and that is all. `button-ghost` is the same geometry with a hairline border and no fill, and it exists for the rare secondary link, never for a competing call to action.

`section-label` sets small uppercase text in `on-surface-muted`, tracked out at 0.08em, preceded by a small square in `accent`. It names a section without a heading and keeps display type for the things that deserve it. `nav-link` stays plain until hover, when it takes `accent`. The bar carries the same four things on every screen: the name, Work, About and the one action. Work is the way to the cases and a phone reader needs it as much as anyone. The page you are on is underlined rather than coloured, so that `accent` keeps meaning hover. None of the four ever wraps. At the normal scale they need 382px on one line, so the bar keeps that scale only from 450px up, with room to spare; below that the words step down to 18px, the gaps to 12 and the button slims, for 311px; and phones up to 369px, the common 360px Android among them, take one more step, to 16px, since 311 would leave them a single pixel. The side margins never move, so the name keeps its alignment with the page under it. The header that holds it is sticky and opaque on `surface`, and it leaves on the way down and returns on the way up: reading a long page happens downward, so the bar gets out of the way, and the one action is never more than a small scroll back. It never hides while the top of the page is in view, it returns the moment anything inside it takes focus, and under `prefers-reduced-motion` it simply stands still, because a bar that slides in and out is motion the reader has asked not to receive. Anything the navigation links to needs `scroll-margin-top` clearing the header height, or the anchor lands underneath it.

`case-card` is how the home lists the three cases: three cards side by side, one per decision, each the cover of the case with the outcome over it. The card is not a card in the shadowed sense, it is a hairline, a picture and a sheet that slides. At rest it shows three things: the cover, cropped to 479 by 560; the client's name at the bottom left as a `case-mark`, set in `label` type rather than a borrowed logo, because three marks at three weights and proportions never sit on a picture the way one line of our own type does, and it is the only place the client is named since the title states the outcome instead; and that title in `display-s` across the top. A flat veil at 55% black sits between picture and text, not a gradient: the covers were not composed to carry type, and an even wash is what makes the words legible without inventing a light source. The figure is set by the lightest cover, not by taste: behind the title it has to clear 3:1 for large text with room to spare, and 45% left the lightest one at 3.3:1. On hover, and equally on `focus-within` so the keyboard gets the same card, a `case-card-sheet` rises over the picture: cream ground, one sentence about the decision, then `case-facts` as label and value rows against a `divider-inverse`. The picture lifts by 3% behind it and the border turns to `on-surface`. The title does not move and does not hide: it turns to ink as the ground behind it becomes cream, so title and sheet read as one sheet rising. Title and sheet are one column and the sheet's frame clips, so the sheet travels exactly its own height: it is out of sight at rest however many lines the title took, and the two can never overlap at any width. What rises is information, never the way in: the link lives on the title and its `::after` covers the whole card, so the target is the full surface while the accessible name stays the title alone. That only holds while nothing between the link and the card is positioned: an absolute `::after` anchors to its nearest positioned ancestor, so a title given `position` of any kind quietly shrinks the target to the title itself. The title is therefore never positioned, on any screen; on a phone it sits on the picture by sharing its grid cell, not by being placed there. The sheet has to hold its sentence and its facts, which is what sets the breakpoints: three cards to a row until 1100px and two below that. Below 720px the row becomes a strip the reader swipes, because three cards stacked run about five phone screens in the middle of the page and on the way to the one action. Each card takes 82% of the width so the next one shows at the right edge, which is the whole invitation to scroll, and snap makes the gesture land. It is the same mechanism as the case galleries, with no script, and the strip takes focus so a keyboard can scroll it; it bleeds into the container gutters so a card sits flush left while the next still peeks. No dots under it: the section label already says there are three, and a second interactive element is one more than this page wants. There is no hover on a touch screen, so nothing may depend on one, but the card should not stop being a card either: in the strip the sheet stops travelling and sits under the picture, which returns to the flow with its own 4 by 3 proportion while the veil stays on it alone. The card takes its height from what it holds, so no title and no row of facts can be cut off, and the strip stretches all three to the tallest. The sheet then fills everything under the picture, so the three cards are one colour down to the frame. The sentence stays at the top of the sheet, where it is read first, and the facts sit on the bottom edge, so across the strip both line up: a card with less to say opens the gap between the two, never above the sentence or below the facts. A tap on a phone counts as hover and focus, so in the strip the title keeps its cream whatever the state; the ink the pointer state asks for would land on the dark picture. The card keeps its border, its picture, its veil and the title over them, and reads as the same object a pointer would find caught mid-rise. The client's name moves to the top, where the sheet cannot reach it, and the title takes a matching top padding to leave it room. Under `prefers-reduced-motion` the sheet and the picture stand still.

`case-transition` is how a card on the home becomes its case, rebuilt from the passage on the reference from its home to one of its cases. The reference is a single-page application, where the picture can survive the change of page; this site is made of real pages, so the passage is built in two halves that meet on one full-screen picture. On the home, a click lays a copy of the card's picture exactly over the card's own, so the first frame is the card as it was, then grows the copy until it fills the window in 1.5s on a power4 in-out curve, while the card's words fade in 0.3s and its hover zoom returns to scale 1. Only then does the browser navigate. On the case page the same picture is already there at full screen, set from `--cover` on the root element, and after 0.1s it moves down and in for 1.2s on a power3 in-out curve until it sits exactly on the case's own hero, same place, same size, same crop, where it hands over to the real one. It must land rather than leave: a picture that slides out of the window reads as a copy going away, while one that settles on the hero reads as the card itself, arrived. The landing spot is measured, not written, because the hero's position depends on how many lines the title takes at that width, and the measurement waits for the fonts, since the title only settles once its face has loaded. The page is held still while the picture is in flight, and gives the scroll back the moment it lands: the hero is measured where the page stands at the start, so a page that moved underneath would have the picture arrive beside its target rather than on it. The hold refuses the reader's gestures instead of hiding the overflow, since hiding it would take the scrollbar away and shift the layout by its width, moving the very hero being aimed at. It is short, under a second and a half, every way out of the animation lifts it, and a last timer lifts it even if none of them is reached: a page that cannot be scrolled is a broken page, so the hold must be impossible to leave behind. The moving picture lives in page coordinates as well, so the rare scroll the hold cannot refuse, a hand on the scrollbar itself, still carries picture and hero together. The full-screen cover that holds the first paint is a CSS pseudo-element; if the script never runs it leaves by itself after 2.5s, so the page can never stay hidden behind a picture. An inline script in the head marks the page as arrived from the home before the first paint, and only for a fresh click from the home: a reload, a step back through history, or a link from one case to another never plays it. A click that opens a new tab, a modified click, a browser without the animation API and a request for reduced motion all get the plain link, untouched, and a page restored from the history cache on the way back to the home clears the copy so it does not greet the reader full screen.

`statement-band` sets one sentence in `display-xl` on `surface-inverse`, full bleed. It is there to give the eye a rest between the situations and the offer. One band per page, never two. The band is two and a half screens tall and the sentence stays pinned for a whole screen while the page scrolls underneath, so the scroll reads it out: each word goes from `on-surface-inverse-faint` to `on-surface-inverse` in reading order, eased so it arrives quickly and settles slowly, the last word done a little before the pin lets go. A soft spotlight of weight, 500 rising toward 600, follows the pointer over the band or drifts along the sentence when there is none. Under `prefers-reduced-motion` the band is one screen, unpinned, in full ink. Without script the sentence is simply black: the faint tone exists only on words the script has split.

The muted tone is the floor, and that is the part to keep. The technique is usually built with the text fully transparent until the sweep reaches it, which is faster to write and puts the loudest sentence on the page behind a state only script can undo. Here the sentence reads from the first frame and the sweep only strengthens it, so a browser without script loses an effect rather than a paragraph.

`plan-step` is how a sequence of steps is shown: a box with a hairline border, the step number in `accent` at the top in `label` type, and the step itself in `body-l` under it. The box takes its height from the text, not from a shape: three of them sit in a row and the grid stretches them all to the tallest, so the row is as deep as the fullest step needs and no deeper. A square was a proportion imposed on the writing rather than taken from it, and it left the short steps mostly empty. A hairline runs across each gap at the height of the numbers. That connector is the component: without it three boxes read as three things on offer, which is the opposite of what a plan means. Below 720px the row stacks and the connector turns vertical. These boxes carry steps only, never options: anything the reader chooses between belongs in `card-offer`.

`disclosure` is how the three situations fold on a phone. On a wide screen a situation is a row: the title on the left and its sentence beside it, the same height, so the sentence costs no space and stays. On a phone the two stack and the sentence is two thirds of the row, so there the section collapses to its titles and each title becomes the control that opens its own sentence. It is a qualification rather than a loss: the titles are written to be recognised at a glance, the reader who sees their own situation opens it and the others move on, and the section drops from about 1,170px to about 560. All three start closed, which the case list never could: here the title is already content, so the list does not read as a closed door. The control carries the one round sign the site uses for opening things, a `disclosure-sign`, a plus that loses its vertical bar once open; nothing rotates or slides. It is built by script and only by script: the markup is the plain row with the sentence visible, and the script both makes the buttons and hides the sentences, so without it every sentence stays on the page and no title pretends to be a control it is not. The button carries `aria-expanded` and points at its sentence with `aria-controls`.

The About page is built from the parts the rest of the site already has: the head of a case, with an `eyebrow` in `label` type above the `h1` and a `lede` under it; the split of the home's argument for the way of working; and the list of cases, where the outcome is set large and the client small on the right. Only the portrait is its own. It is a landscape of the practice at work, not a headshot, cut upright at 2 by 3 and set in a narrow column to the right, with its top edge on the line where the text starts: the first word is trimmed to its cap height with `text-box`, so the capitals, not the line box, meet the photograph. The top of the About is one grid: the introduction and the background on the left, the portrait on the right, spanning both rows. The background keeps the place it had when it was a section of its own, starting below the portrait's bottom edge with a section's worth of space under it, and what gives it that place is an invisible stand-in of the portrait's height in the first row. The portrait is sticky: it holds its place under the bar while the reader scrolls, until the last line of the background reaches its bottom edge, and then it leaves with the page. It behaves the same at every width, because the stand-in ties the two heights together. A sticky element stops at the end of its container, which is why the background shares the portrait's grid rather than being a section of its own, laid out exactly as though it were. The last line of the background is trimmed to its baseline, so the edge meets the words and not the space under them. The portrait is mirrored at export so the gaze turns up and left, to the title, and the upright cut leaves the room in the frame in front of the face rather than behind it, since a gaze needs space to go. On a phone nothing sticks: the portrait drops between the introduction and the background, inside the margins, and changes file, since an upright 2 by 3 at full width would be the tallest thing on the page; a crop made for the phone keeps the same framing at the top and loses the lectern at the bottom, at 4 by 5. The phone downloads only that file. The way of working opens with the same split as the argument on the home, title on the left and reasons on the right, and expands it: why strategy and design are usually bought apart, what is lost between them, and what changes when one pair of hands holds both. The page carries no curriculum: no list of roles, no dates by the year, no education section, since a buyer reading a CV reads a candidate.

`footer-inverse` is the second and last ground change: the page ends on cream rather than fading out on black. It carries the name in `display-m`, the role and city under it, contact links in `body-l` underlined with `divider-inverse`, and a legal line below a rule. It holds no call to action. The one action already appears three times above it, and a fourth in the footer would turn a close into a nag.

`affiliation-band` names the one network the practice belongs to, and it is a strip of its own between two hairlines, directly under the hero. It sits there because it is what makes the claim above it credible, and it is a strip rather than a line inside a section because a borrowed name qualifies the whole page rather than the paragraph it happens to stand next to. The name is in `label` type in `on-surface-muted`, the organisation's mark beside it, both centred: this is a seal, not a heading, and a reader who never stops on it has lost nothing. It arrives the way the reference logo clouds do, resolving out of an 8px blur instead of rising, the name first and the mark a beat later, because a strip that rises against a hairline appears to slide along it. Nothing moves afterwards and nothing repeats: a row of marks that never stops travelling is an advertisement, and one borrowed name does not need a carousel. A borrowed logo is admissible on one condition, that it is a single colour and that colour is `on-surface`, so it adds no hue the palette does not already carry; a logo in its own brand colours is not, and no amount of importance changes that. The condition holds wherever a borrowed mark appears, `case-mark` included. Keep it near 150px wide, 120px on a phone where the name takes its own line above it, because the affiliation supports the claim rather than making it. The section it used to sit in is `Approach`, which is about how the two sides of the table meet and never needed the logo to say so.

Sections follow one order without exception: `section-label`, then a `divider`, then the title, then the content. A label that appears below the title it labels reads as a caption for whatever precedes it, which is never what was meant. The divider sits `lg` below the label in every section, list or not, and the content opens `lg` below the divider. That repeated distance is what makes four different sections read as one page: a reader who has learned where the line falls should never have to relearn it.

The hero carries an interactive ground rather than an image: a canvas of identical small squares in the cream at low opacity, and a region near the pointer where a few of them are chosen, grow slightly, and turn `accent`. It restates the headline without illustrating it. The squares outside the region never change: the grid is uniform and fully visible at rest, and that uniformity is the whole metaphor, since a field where everything already shimmers has nothing left to say by choosing a few. Movement belongs to the region alone. It drifts, and its reach swells and shrinks on a slow cycle of its own, so on a phone, where no pointer will ever arrive, there is still something breathing. Make the region larger or let it breathe wider when it needs to be felt more; never animate the squares around it. The region also stays right of centre, clear of the copy, because a blue square between two words is noise rather than emphasis. The ground is masked out towards the bottom and reaches nothing before the section ends, because a field that stops on a straight edge turns the hero into a panel resting on the page rather than the top of it. Mask the slot rather than fading the drawn colour: the mask holds whatever occupies it, the canvas now and a reel later. Whatever moves inside the field then has to stay above the masked band, since a chosen region that dissolves on its own reads as a fault rather than as an edge. When nobody is pointing, the region drifts slowly; under `prefers-reduced-motion` it stands still. A reel can take the same slot later, kept muted, looped and behind the text, at reduced opacity so the headline stays the brightest thing on the screen.

`card-offer` and `case-item` are not cards in the usual sense: they carry no fill and no border box, only a `divider` above and generous vertical padding. They are rows in an editorial list. `proof-line` is the one place a claim is allowed to stand alone, set in `accent` at `body-l` with space above and below, and it is used only for a verifiable fact. A case study runs in one order, the same on all three pages: the client name in `label` type, the outcome as the `h1` at `display-xl`, the same line that titles the case on the home card, the facts under a hairline, a cover that runs edge to edge, the body in three chapters, the proof, three `kpi` boxes, the one action, and the other cases. The facts sit in the head because a buyer reads the limits before the story; the numbers sit at the end because they are what the story earns. The cover is the one element that leaves the container: it runs the full width of the window, from edge to edge, at 5 by 3, and is capped at the window's height so that on a wide screen it crops from the centre instead of growing taller than a screen. On a phone the head of the case is kept short enough for the cover to reach the first screen, with less air above the title and the facts in two columns rather than one: the picture arriving from the home card has to land somewhere the reader can see it. The chapters are the introduction with no label, then `The decision` and `What was done`, each a `section-label` over a paragraph in `case-chapter`. The rhythm is borrowed from the reference: text never runs long before a screen interrupts it, so each chapter ends on a media block. There are four kinds of media and no others. The cover; an optional looping video under the introduction, which runs the full width of the window like the cover, since a product screen read at a glance needs the size, and which keeps the file's own 16 by 9 frame at every width, a phone included, because a taller frame on a small screen does not show more, it enlarges a corner and cuts the rest, and which is removed when no loop of the product exists rather than replaced by something else. A product loop weighs more than everything else on the page put together, so three things are fixed. It is cut, not published whole: the reference cut runs eighteen seconds and shows the structure that was decided, never the product tour or the slogans that open a sales reel. It is muted and carries no audio track at all, at 1440 by 810 in H.264, which lands around 1.5 MB; a second format in VP9 or AV1 was measured and saved nothing worth two files to maintain. And it is not fetched until the reader arrives: the markup carries `preload="none"` and a poster frame, and a script starts it when it comes into view and pauses it when it leaves. Without that script, or where the reader asks for reduced motion, the poster stays with native controls: the video can still be played, it just never starts on its own; a `case-gallery` of four to six screens under the decision; and a `case-pair` of two screens side by side under what was done, at 4 by 3, or at 16 by 9 for both cells where one of them holds a board rather than a screen, a design system laid out wide, since cropping a quarter of a board away loses what it was put there to show, and two ratios beside each other read as a mistake. The gallery is a scroll-snap strip with no script: each screen takes most of the width so the next one peeks in from the right, which is the invitation to scroll, and the region takes focus so it can be scrolled from the keyboard. The pair stacks below 720px. Every screen carries its own `alt`, because a screen without a description is decoration. The outcome takes the display scale because it is the argument; the client's name sits above it small, since who the work was for qualifies the claim rather than making it, and a page that opens on what was achieved says something before it says whose it was.

`case-facts` replaces what used to be a boxed scope note. It sets the stage of the client, the kind of project and the year as a row of label and value columns under a hairline, which is the form a buyer scans rather than reads, and it is the same row in the head of the case page and inside the open accordion on the home. A fourth column, Mentions, exists for a recognition that can be checked, and today only Edison has one: it is where the ADI Design Index line lives, so the claim is a fact among facts rather than a sentence set in accent. A column is left out when its answer is not confirmed, and the row simply becomes narrower: an absent column is honest, an invented one is not, and a page that quietly fills the gap is worse than one that shows it. `case-proof` is the same claim as the home's `proof-line` set at `display-m` instead of `body-l`, alone above the KPI boxes, and it appears only where a verifiable number exists. `kpi` is a hairline box with no fill, three in a row, the number at `display-l` and what it measures in `body-s` muted underneath: the number is the only loud thing in it. A box holds a figure that would survive being questioned in a call, or it holds nothing and the row is shorter. Until the figures are confirmed the boxes are dashed placeholders, like the image slots, and they leave with them.

## Do's and Don'ts

**Do**

- Reserve `accent` for what has been earned: a proof, a label, a hover. One blue event per screen is the target.
- Keep body measure near 34em, even when the viewport allows more.
- Keep the densest and the airiest section far apart in density, several times over. Even spacing on every section is what makes a page read flat.
- Let a section change ground when it needs to feel different, instead of reaching for a border or a fill.
- Set every claim that carries a number in `proof-line`, and only when the number is verifiable.
- Say a fact once. If a paragraph introduces a step and the step repeats it, the paragraph goes and the step keeps the detail.
- Use display sizes for statements and text sizes for anything a reader has to work through. One family, and the gap in the scale is what tells them apart.
- While an image is not yet available, leave a dashed slot with a note on the intended subject. A wrong image is worse than a marked gap.

**Don't**

- Never add a shadow, a glow, or a blurred layer. Separation is hairlines and grounds.
- Never hide text behind a state that only script can undo. Every hidden state needs a scriptless way out.
- Never tie motion to scroll position or pin a section, with three exceptions: the bridge, where the pinned sentence being read out by the scroll is the section's whole reason to exist; and the portrait on the About, which holds its place only until its bottom edge meets the end of the text beside it, so that the two columns end on one line. And the product video, which grows from a narrow frame to the full width of the window as the reader scrolls it into place, so that it opens rather than landing like a slide: the growth is tied to the scroll rather than to a clock, so the reader sets its pace, and the frame holds the final height from the start so nothing below it jumps. Everywhere else motion happens once, on arrival, and then it is over. The passage from a home card to its case is the other exception to how long motion may last, and it is allowed only because the reader asked for it with a click.
- Never introduce a grey that is not the cream stepped down, or a second accent hue.
- Never let body text stay at 500 once it moves onto the cream ground, footer included. Step it down to 400.
- Never set an argument at display sizes above 88px: past that, a sentence stops being read and starts being chanted.
- Never place a second call to action on a page. One action, repeated at most, never rivalled.
- Never use stock photography, icon sets, or a gradient. If it could belong to any consultancy, it belongs to none.
- Never fill a case study with mockups. The gallery and the pair hold real screens of the product that was decided about, each one showing the decision rather than the craft, and the media budget is fixed: one cover, one optional video, one gallery, one pair.
