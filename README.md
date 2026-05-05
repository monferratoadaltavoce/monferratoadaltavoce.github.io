
```bash
bundle exec jekyll serve
```

# Jekyll Patch — 2026-05-05

Drop these files into your Jekyll repo to bring it in sync with the latest preview.

## What's in this patch

- **New hero typography** — Montserrat headline + tagline + new subtagline line ("Sesta edizione · 12-13-14 giugno 2026")
- **Real Eventbrite URLs** for all three days
- **Inline per-event CTA buttons** on:
  - Sat 10:00 — Prenota · colazione (food/yellow)
  - Sun 11:00 — Prenota · Domenica (show/red)
  - Sun 13:00 — Prenota · pranzo (food/yellow)
- Sunday card no longer has a bottom day-level CTA (each event has its own)
- New CSS classes: `.btn--small`, `.btn--food`, `.btn--show`, `.has-cta`, `.t-info`, plus the rebuilt `.stub-*` and `.ticket-events` selectors

`programma.md` is unchanged — already correct in the live repo.

## Files in this patch

```
_layouts/default.html              ← REPLACE — adds Montserrat to font load
_includes/hero.html                ← REPLACE — adds .hero-subtagline line
_includes/ticket.html              ← REPLACE — supports per-event CTAs
_data/prenota.yml                  ← REPLACE — real URLs + per-event cta_url
prenota.md                         ← REPLACE — minor lede tweak
assets/css/_patch-2026-05.scss     ← APPEND its contents to assets/css/style.scss
```

> The SCSS file is **not** a drop-in replacement for `style.scss`. Open it,
> copy the whole contents, and paste at the **bottom** of your existing
> `assets/css/style.scss` (anywhere after the variable declarations works,
> but the end is safest). Then delete `_patch-2026-05.scss` from the repo —
> it's just for the paste.

# Jekyll patch — MAV site redesign

This folder mirrors the `monferratoadaltavoce/monferratoadaltavoce.github.io` repository layout. Drop it over your working tree, commit, and push. GitHub Pages will rebuild the site.

## How to apply

```bash
git clone git@github.com:monferratoadaltavoce/monferratoadaltavoce.github.io.git
cd monferratoadaltavoce.github.io

# Copy the patch contents over the working tree (replace existing files, add new ones)
cp -R /path/to/jekyll-patch/* .

# Review if you want
git status
git diff

# Commit and push
git add .
git commit -m "Redesign: parallax hero, ticket cards, masonry press, tweaks panel"
git push
```

## What changes

- `_layouts/default.html` — adds paper-grain SVG, site-wide JS, Tweaks mount
- `_includes/header.html` — scroll-state class + animated underline hooks (logic moves to site.js)
- `_includes/hero.html` — **NEW** — dual-image parallax banner for home
- `_includes/ticket.html` — **NEW** — ticket-stub card for prenota
- `_includes/tweaks.html` — **NEW** — in-page tweak controls
- `assets/css/style.scss` — ADDITIVE block appended at bottom (existing rules untouched)
- `assets/js/site.js` — **NEW** — reveal, parallax, lightbox, year-rail, tweaks, nav
- `index.md` — uses hero include, adds parallax band + scroll reveals
- `prenota.md` — loops tickets from `_data/prenota.yml`
- `rassegna-stampa.md` — tilted-masonry class + radio CTA restyle
- `passate-edizioni.md` — sticky year rail + lightbox-ready gallery
- `protagonisti.md` — reveal-on-scroll classes
- `_data/prenota.yml` — **NEW** — ticket data

Reverting: `git checkout HEAD~1 -- .` will restore the previous site.
