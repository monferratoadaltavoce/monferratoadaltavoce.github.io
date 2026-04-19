# monferratoadaltavoce.github.io

Sito ufficiale di **Monferrato ad Alta Voce** — festival di musica e parole
a Grazzano Badoglio (Asti).

Sito statico Jekyll, ospitato gratuitamente da **GitHub Pages**.

## Sviluppo locale

Richiede **Ruby 3.3.x** (non Ruby 4.x — il gem `github-pages` non è ancora
compatibile con Ruby 4). Su macOS con Homebrew:

```bash
brew install ruby@3.3
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle config set --local path 'vendor/bundle'
bundle install            # una sola volta
bundle exec jekyll serve  # http://localhost:4000
```

Il sito si rigenera automaticamente ad ogni `push` sul branch `main` —
GitHub Pages compila Jekyll lato server.

## Aggiornare i contenuti

Le modifiche più frequenti (programma annuale, protagonisti, gallerie,
rassegna stampa, partner) si fanno editando i file in `_data/` e i pochi
file Markdown nella root. Vedi **`CLAUDE.md`** per la guida completa e
**`design.md`** per il sistema visuale (entrambi non pubblicati).

## Struttura

```
_config.yml          # metadati sito + edizione corrente
_layouts/            # default.html, page.html
_includes/           # header, footer, gallery
_data/               # nav, partners, protagonisti, edizioni, stampa
assets/css/          # style.scss (unico foglio di stile)
assets/img/          # logo, favicon, skyline, partners
assets/uploads/      # tutte le foto/video (mirror dei vecchi upload WP)
*.md                 # le pagine
```

## Dominio

Custom domain configurato via `CNAME` → `monferratoadaltavoce.it`.
Per attivarlo, configurare i record DNS:

- `A` su 185.199.108.153, .109.153, .110.153, .111.153 (apex)
- `CNAME` di `www` → `monferratoadaltavoce.github.io`

Poi su GitHub: *Settings → Pages → Custom domain* + *Enforce HTTPS*.

## Crediti

- Direzione artistica festival: Marco Pagani
- Art direction (originale WP): [Studio ICG Milano](https://www.studioicg.it/)
