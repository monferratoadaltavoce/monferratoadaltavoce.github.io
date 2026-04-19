
```bash
bundle exec jekyll serve
```

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
