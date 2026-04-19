# CLAUDE.md — Working notes for Claude on the Monferrato ad Alta Voce site

This is the project guide for Claude (and other AI assistants) when editing the
website. It is **not** published — it's excluded in `_config.yml`.

## What this site is

The official site for **Monferrato ad Alta Voce**, a music + spoken-word
festival held each June in **Grazzano Badoglio (Asti, Piemonte)**. It's a
single-language Italian site, brochure-style — a few static pages, no blog,
no comments, no user accounts. Content is in Italian.

## Stack

- **Jekyll** built and hosted by **GitHub Pages** (free).
  - Plugins (all GH-Pages whitelisted): `jekyll-sitemap`, `jekyll-seo-tag`, `jekyll-feed`.
  - SCSS compiled by Jekyll. Source: `assets/css/style.scss`.
- **Custom theme** — no third-party theme dependency. Layouts live in
  `_layouts/`, partials in `_includes/`.
- **Repeating content** lives in `_data/*.yml` so pages stay clean Markdown.

GitHub Pages **builds Jekyll server-side** on every push to `main`. There is no
build step in CI. To preview locally, you need **Ruby 3.3.x** (the `github-pages`
gem is not yet compatible with Ruby 4):

```bash
brew install ruby@3.3                                      # macOS, one-time
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"         # add to ~/.zshrc
bundle config set --local path 'vendor/bundle'             # one-time
bundle install                                             # one-time
bundle exec jekyll serve                                   # http://localhost:4000
```

## Repo layout

```
.
├── _config.yml             # site metadata + current edition
├── _layouts/               # default.html, page.html
├── _includes/              # header, footer, gallery
├── _data/                  # nav, partners, protagonisti, edizioni, stampa
├── _sass/                  # (reserved — currently empty)
├── assets/
│   ├── css/style.scss      # the only stylesheet (Sass with front-matter)
│   ├── img/site/           # logo, favicon, skyline (brand assets)
│   ├── img/partners/       # footer partner logos
│   └── uploads/YYYY/MM/    # ALL photos/videos (mirror of old WP uploads)
├── index.md                # Home
├── programma.md            # /programma/
├── protagonisti.md         # /protagonisti/
├── rassegna-stampa.md      # /rassegna-stampa/
├── passate-edizioni.md     # /passate-edizioni/
├── prenota.md              # /prenota/
├── privacy-policy.md       # /privacy-policy/
├── cookie-policy.md        # /cookie-policy/
├── 404.html
├── CNAME                   # custom domain → monferratoadaltavoce.it
├── design.md               # brand & visual system reference (not published)
└── CLAUDE.md               # this file (not published)
```

## URL changes from the old WordPress site

The new permalinks **do not match** the old ones. If preserving old URLs
matters (e.g. for SEO or external links), add an HTML redirect at the old
path. Mapping:

| Old WP URL                       | New URL              |
| -------------------------------- | -------------------- |
| `/`                              | `/` (unchanged)      |
| `/il-programma/`                 | `/programma/`        |
| `/i-protagonisti/`               | `/protagonisti/`     |
| `/rassegna-stampa/`              | `/rassegna-stampa/`  |
| `/passate-edizioni/`             | `/passate-edizioni/` |
| `/prenota-il-tuo-posto/`         | `/prenota/`          |
| `/privacy-policy/`               | `/privacy-policy/`   |
| `/cookie-policy/`                | `/cookie-policy/`    |

If 1:1 redirects are needed, add stub pages with the old `permalink:` and a
`<meta http-equiv="refresh" content="0; url=/new-path/">`. The
[`jekyll-redirect-from`](https://github.com/jekyll/jekyll-redirect-from) plugin
is also GH-Pages-supported.

## Common content updates

### 1. Updating the *current* edition (most common task each spring)

Two files drive the home page header, programme dates, and meta:

1. **`_config.yml`** → `edizione:` block (numero, anno, date, tema, comune).
2. **`programma.md`** → rewrite the three `<section class="day">` blocks for
   Friday/Saturday/Sunday with this year's actual events.
3. **`prenota.md`** → update the three `Eventbrite` URLs (one per day) and the
   summary lines for each day.
4. **`_data/protagonisti.yml`** → replace the `current:` list with this year's
   artists. Move last year's `current:` entries into `past_editions:` (photo +
   name only).
5. **`index.md`** → update the Vimeo trailer URL in the hero (the
   `<iframe src="https://player.vimeo.com/video/...">` line) if there's a new
   trailer.

### 2. Adding a past edition (after the festival ends)

In `_data/edizioni.yml`, add a new YAML block at the **top** of the list
(newest-first):

```yaml
- year: 2026
  subtitle: "Sesta Edizione"
  locandina: "/assets/uploads/2026/05/locandina-2026.jpg"
  gallery:
    - "/assets/uploads/2026/06/photo-01.jpg"
    - "/assets/uploads/2026/06/photo-02.jpg"
  videos:
    - "/assets/uploads/2026/06/trailer.mp4"
```

Place new images under `assets/uploads/YYYY/MM/` to mirror the WordPress
convention (so historical references in old social posts and exports stay
parseable).

### 3. Adding press articles

Append a new `articles:` URL to the matching year in `_data/stampa.yml`, or
add a new `- year:` block at the top for a new edition's coverage. Articles
display as clickable thumbnails — store the screenshot/scan in
`assets/uploads/YYYY/MM/` and link to its local path.

### 4. Adding/changing partners (footer)

Edit `_data/partners.yml`. Each entry: `name`, `url`, `logo`. Logos render at
`max-height: 70px` greyscaled, going to full color on hover.

### 5. Adding navigation items

Edit `_data/nav.yml`. The list order is the menu order. Set `cta: true` to
render an item as the orange/red call-to-action button (currently used only
for *Prenota*). Pages must have a matching `permalink:` in their front matter.

## Conventions

- **Italian only.** All user-facing text is in Italian. Use Italian
  typographic quotes («…», "…"), em dashes (—), and `…` (single ellipsis).
- **Smart quotes** — Markdown is processed by kramdown which auto-converts.
  Use the actual unicode chars (’ — …) in `.yml` data files, since those go
  through `markdownify` only when explicitly requested.
- **Images:** include `loading="lazy"` on every non-hero image and an `alt`.
- **Image paths:** always start with `/assets/...` and pipe through
  `relative_url` filter inside templates: `{{ '/path/img.jpg' | relative_url }}`.
- **Bios in YAML:** wrap with `>-` for clean folded multi-line strings; render
  with `{{ p.bio | markdownify }}` so `**bold**` and `*italics*` work.
- **No JavaScript framework.** Only the small inline script in
  `_includes/header.html` for the mobile nav toggle. Keep it that way.
- **No external CSS frameworks.** Single hand-rolled stylesheet.
- **Comments in code:** sparse. Don't add comments that just describe what
  the code obviously does. Brand decisions live in `design.md`, not in CSS
  comments.

## Brand & visual system

See **`design.md`** for the full brand/design system: color tokens,
typography, spacing, component patterns. Never hardcode colors — reference
the SCSS variables in `assets/css/style.scss` (`$brand-green`, `$brand-red`,
`$color-ink`, etc.).

## Things to avoid

- **Don't add a CMS or blog.** Content cadence is ~once a year; Markdown is
  the right level of friction.
- **Don't add tracking/analytics** without a chat first — privacy posture is
  minimal-cookies, Iubenda-managed.
- **Don't reintroduce Elementor / WordPress markup.** The HTML in the WXR
  export was Elementor-generated and full of inline styles + lightbox data
  attrs. The migration intentionally stripped all of that.
- **Don't mix Eventbrite embed scripts on every page.** Reservations link out
  to Eventbrite; we don't host their JavaScript.
- **Don't commit secrets.** No keys exist today and none should be added —
  this is a static site.

## Useful commands

```bash
# preview locally
bundle exec jekyll serve --livereload

# build (output to _site/)
bundle exec jekyll build

# update the WP media mirror (if originals ever change on the old WP install
# before it's taken offline). Script lives in /tmp/download_wp.sh from the
# initial migration; replicate by reading from monferratoadaltavoce.WordPress.*.xml.

# audit broken local links after a content edit
bundle exec jekyll build && \
  grep -roh 'src="/assets/uploads/[^"]*"' _site | sort -u | \
  sed 's/src="//;s/"$//' | while read p; do [ -e "_site$p" ] || echo "MISSING $p"; done
```

## Migration source materials

The original WordPress export is one folder up at
`../monferratoadaltavoce.WordPress.2026-04-19.xml`, and design originals
(InDesign, Illustrator, fonts, hi-res logos, partner logos) live at
`../design/`. Both are outside this repo and are **not** required to build the
site — keep them out of `assets/`.
