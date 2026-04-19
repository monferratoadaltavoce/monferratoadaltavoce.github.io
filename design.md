# design.md — Brand & visual system

Reference for the visual identity of **Monferrato ad Alta Voce**. Everything
below is implemented in `assets/css/style.scss` as Sass tokens — never
hardcode hex codes, fonts, or pixel values that have a token.

This file is **not published** (excluded in `_config.yml`).

## Identity in a sentence

> A warm, literary festival voice — modern Italian sans-serif typography
> over off-white paper, accented by Monferrato vine green and terracotta
> red, finished with hand-drawn village skyline.

## Logo

Located at `assets/img/site/`:

- `logo.png` — 1× width 320px, intrinsic ~960×260
- `logo@2x.png`, `logo@3x.png` — retina variants
- `favicon.png` — square mark for browser tab

The wordmark is bold black sans-serif. The mark to its left combines:
- A green pie-slice + curved hill shapes (vines and rolling hills)
- A green concentric-circle "bullseye" (an architectural rose window)
- A green-and-terracotta checker (a Monferrato pattern, also evoking music
  notation grids)

Tagline (rendered in the wordmark): **«Sussurri d'arte tra le colline»**.

The header uses `srcset` to serve the right resolution.

## Color tokens

All defined in `assets/css/style.scss`.

| Token             | Hex      | Usage                                                |
| ----------------- | -------- | ---------------------------------------------------- |
| `$color-bg`       | #FAF8F4  | Page background — warm off-white ("paper")           |
| `$color-paper`    | #FFFFFF  | Card / section alternating background                |
| `$color-ink`      | #1A1A1A  | Body text, wordmark color                            |
| `$color-muted`    | #6F6A62  | Secondary text, captions, footer copy                |
| `$color-rule`     | #E8E2D6  | 1px dividers, subtle borders                         |
| `$brand-green`    | #8DC183  | **Primary accent** — section underlines, skyline     |
| `$brand-green-dk` | #5C9852  | Tagline emphasis, dark hover state                   |
| `$brand-red`      | #B85B5C  | **Secondary accent** — CTA buttons, "Prenota"        |
| `$brand-red-dk`   | #8E3F40  | Section subtitle text, link color, button hover      |

Color rules:
- Backgrounds alternate `$color-bg` ↔ `$color-paper` between sections to
  create rhythm without strong dividers.
- Green = positive accent (decorative, structural). Red = action accent
  (CTA, link emphasis, urgency).
- Never use a green CTA — green is for structure, not for "click me."
- Avoid pure black (`#000`) and pure white in body context — both feel
  digital and clash with the warm paper background.

## Typography

Two Google-Fonts families (free; ITC Franklin Gothic Std from the design
folder is licensed and not used on the web):

- **Libre Franklin** — sans-serif. Weights 400 / 600 / 700 / 900.
  - All UI: nav, buttons, body copy, captions.
  - Substitute for the brand's preferred ITC Franklin Gothic.
- **Cormorant Garamond** — serif. Weights 400 / 600, italic 400.
  - Editorial accents only: hero headline, page lede, blockquotes, the
    "tema" of the year.

Type scale:

| Element         | Family    | Weight | Size                                  |
| --------------- | --------- | ------ | ------------------------------------- |
| Hero headline   | Cormorant | 600    | clamp(2.5rem, 7vw, 5rem)              |
| Page H1         | Libre F.  | 900    | clamp(2rem, 5vw, 3.4rem)              |
| H2              | Libre F.  | 900    | clamp(1.4rem, 3vw, 2rem)              |
| Lede / tagline  | Cormorant | 400i   | 1.4rem (page lede) / 1.75rem (hero)   |
| Body            | Libre F.  | 400    | 17px / line-height 1.6                |
| Small caps      | Libre F.  | 700    | 0.85rem, letter-spacing 0.12em, upper |
| Blockquote      | Cormorant | 400i   | 1.35rem                               |

Use `clamp()` for headline-sized text; everything else stays in `rem`.

Letter-spacing: tracking is loosened (0.05–0.15em) for any all-caps element
(nav, buttons, subtitles). Body text uses default tracking.

## Spacing & layout

- Container: `max-width: 1200px`, gutters `1.25rem` left/right.
- Vertical rhythm in `1rem` increments. Sections use `padding: 3rem 0` by
  default; day blocks `2.5rem 0`.
- Border radius: `4px` for buttons, cards, images, gallery thumbs. No
  pill shapes, no circles (except the bullet logo mark).
- Shadows: `0 4px 20px rgba(0,0,0,.08)` for hero/featured imagery only.
  Most cards use a 4px left border (`$brand-green`) instead of shadow —
  it reads as a manuscript margin mark, in line with the literary tone.

## Component patterns

### Section header underline

Every centered `<h2>` inside `.section` and `.day-header` gets a 60×3px
green rule underneath via `::after`. Provides identity without heaviness.

### Event card (`.event`)

Used on `programma.md` and `prenota.md` for each event:
- White background, 4px green left border, 1.5rem padding.
- `<time>` element renders as a small-caps red label above the title.
- `.event--note` swaps to faded green background + red border for
  hospitality / "intermezzo enogastronomico" callouts.

### Two-column block (`.two-col`)

Image + text 1:1 split (collapses to single column < 768px). Use
`.two-col--reverse` to swap which side gets the image. Used heavily on the
home page.

### Gallery (`.gallery`)

Square-cropped grid: 2 cols mobile → 3 tablet → 4 desktop. Each thumbnail
is a link to the full-resolution image. Hover scales the image 1.04. The
`include gallery.html` partial renders this from any array of URLs:

```liquid
{% include gallery.html images=e.gallery id="2024" alt_prefix="2024" %}
```

A lightbox library is **not** included by default. If you want one, prefer
[GLightbox](https://github.com/biati-digital/glightbox) (zero-dep, ~10kB)
loaded only on pages that have a `.gallery`.

### CTA button (`.btn`)

Solid `$brand-red`, white text, uppercase, 0.85rem 1.5rem padding. Lifts
1px on hover and darkens to `$brand-red-dk`. Reserve for primary actions
("Prenota", "Scopri il programma"). Secondary action: `.btn--ghost`
(outline style).

### Skyline footer flourish

The hand-drawn village skyline (`assets/img/site/skyline.png`) repeats at
the bottom of most pages, full-width, opacity 0.9. It signs each page like
a watermark. Don't crop or scale unevenly.

## Responsive breakpoints

```scss
$breakpoint-md: 768px;   // tablet — nav switches to hamburger
$breakpoint-lg: 1024px;  // desktop — gallery becomes 4 columns
```

Mobile-first. Default styles target ≤768px; media queries widen up.

## Accessibility

- Color contrast: body text on `$color-bg` = ~14:1 (WCAG AAA). Muted text
  meets AA Large.
- All interactive elements have visible focus (browser default — don't
  remove the outline).
- Mobile nav toggle has `aria-controls`, `aria-expanded`, `aria-label`.
- Every gallery image has an `alt` (passed via `alt_prefix` + index).
- Headings nest properly (one `<h1>` per page in the page header, then
  `<h2>` for sections, `<h3>` for events).

## Voice & copy

Italian, warm, literary but not stuffy. Marco Pagani's voice when speaking
about the festival is intimate and inviting ("Invito quindi tutti a
venire…"). Use:
- Italian typographic quotes («…») for festival theme titles.
- Em dashes (—) for asides, not double hyphens.
- Title case is **not** used in Italian — sentence case for headings.
- Event titles in ALL CAPS are the festival's house style (e.g. "TUA
  GILDA", "MUSICA X 2") — preserve them.

## What we deliberately don't have

- No dark mode. The "paper" warmth is the brand.
- No carousels. Galleries are grids; the hero is a single still + video.
- No long-scroll parallax. Sections are flat and quiet.
- No icons except the partner logos.
- No newsletter signup, no popup, no cookie banner (Iubenda handles it
  externally if needed).
