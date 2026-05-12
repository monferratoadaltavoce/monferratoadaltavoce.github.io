

## 2026-04-21.c map?

What's the best way to incorporate a Google Maps of different locations for this festival website?                                                    
                                                                                                     
⏺ Since every venue is within a few minutes' walk of each other in Grazzano Badoglio, I'd lean toward a static/illustrated map with numbered pins — each pin an <a> to https://www.google.com/maps?q=<lat>,<lng> that opens in the user's default maps app — rather than embedding a live Google iframe. That keeps the page cookie-free (your posture is minimal cookies (Iubenda-managed at the time these notes were written, during the WordPress era), and a live Google embed pulls in tracking JS that would force a consent banner) and on-brand with the paper/skyline aesthetic, while still giving visitors one-tap directions.
                                                                                                                                                        
  The main tradeoff: a live embedded Google Map is more familiar and supports in-page pan/zoom/Street View, but the grey Material tiles fight the       
  literary look and the iframe is ~500KB of third-party JS for a six-venue walk. If you do want interactive pan/zoom without Google, Leaflet +          
  OpenStreetMap tiles (~40KB, no cookies, can be styled to match the palette) is the nicest middle ground — worth it only if you expect visitors        
  exploring the broader Monferrato, otherwise overkill. 
                                                                                                                                                        
  Want me to mock up option 1 (static illustrated map) or option 3 (Leaflet+OSM) once you have venue coordinates?             

Resume this session with:
claude --resume "port-claude-design-content" 

Now that we have the locations for the venues: `@~/Downloads/luoghi - MAV 2026 - Sheet1.csv`
Please proceed with adding a static illustrated map with numbered pins - each pin an <a> to https://www.google.com/maps?q=<lat>,<lng> that opens in the user's default maps app. That keeps the page cookie-free (your posture is minimal cookies (Iubenda-managed at the time these notes were written, during the WordPress era), and a live Google embed pulls in tracking JS that would force a consent banner) and on-brand with the paper/skyline aesthetic, while still giving visitors one-tap directions.



Venerdi 12	200		Chiostro della Basilica di Aleramo	Via SS. Vittore e Corona, 6		Grazzano Badoglio	Asti	14035	
Sabato 13 Colazione	50	Ex Scuola		via Aleramo		Grazzano Badoglio	Asti	14035	
Sabato 13	200	sul terrazzo dell’Abbazia		Via SS. Vittore e Corona, 6		Grazzano Badoglio	Asti	14035	
Domenica 14	200	sala Combattenti e Reduci		via Giuseppe Mazzini		Grazzano Badoglio	Asti	14035	
Domenica 14 Hambuger	50	Agrimacelleria Grazzano Badoglio		via Dante Alighieri 14		Grazzano Badoglio	Asti	14035	


## 2026-04-21.b punch list

Help me organize next steps to complete the overhaul of the website for 2026, including (but not limited to):

1. Update the EventBrite links - Rewrite the three day entries to match the 2026 programma summary. Eventbrite
  URLs are not yet known for 2026 — leave them as "" placeholder strings with
 a YAML comment noting they need to be supplied once Eventbrite events are
 created for this edition.

2. Update the `protagonisti.md` / `_data/protagonisti.yml` — the design bundle's
 protagonisti.html still shows the 2025 lineup. When the
 user has the 2026 artist list, this will need a separate refresh: adding Igor
  Tognazzo, Gabriele Comeglio, Claudio Angeleri, Marco Esposito, Federico
 Monti, Sonya Milan Patton, Gregory Jack Patton, Ben Best, Francesca Pagani,
 Giulia Cerino, Vincenzo Leone, Emily Tartamelli; and promoting Giuliana Atepi
  + Paolo Pagani from past_editions: to current:.

...

⏺ Here's a **PUNCH LIST** grouped by what's blocking what. Ordered roughly by
  dependency.                                                                
                    
  1. **External inputs** you need to gather:
                                                                               
  - **Eventbrite** — create 3 events (Ven / Sab / Dom 12–13–14 giugno 2026). Once  
  they exist, drop the URLs into _data/prenota.yml (currently "").

  - **2026 artists' photos + bios** — for the 12 new names in the programma: Igor  
  Tognazzo, Gabriele Comeglio, Claudio Angeleri, Marco Esposito, Federico      
  Monti, Sonya Milan Patton, Gregory Jack Patton, Ben Best, Francesca Pagani,
  Giulia Cerino, Vincenzo Leone, Emily Tartamelli. One photo + one paragraph   
  each, same shape as existing _data/protagonisti.yml entries.

  - **2026 locandina/poster image** — the other editions each have one in
  _data/edizioni.yml; you'll want one for the current edition too (probably    
  used on passate-edizioni.md next year, and possibly in social OG images now).

  - **2025 Quinta-edizione assets to archive** — locandina, photo gallery, videos, 
  any press clippings from last June. These promote the 2025 edition into      
  _data/edizioni.yml and _data/stampa.yml.
                                                                               
  2. **Content edits** (once the inputs above are in hand)                         
  
  - **_data/protagonisti.yml** — full refresh:                                     
    - Add the 12 new artists to current:.               
    - Promote Giuliana Atepi and Paolo Pagani from past_editions: → current:.  
    - Demote the 2025-only names to past_editions:: Bruno Olivieri, Compagnia  
  Il Ronzinante, Compagnia Contrasto, Camilla Bassetti, Martina Michelini.     
    - Keep ongoing: Marco Pagani, Jenny De Cesarei, Oliviero Corbetta, Matteo  
  Castellan, Cochi Ponzoni, Stefania Rosso, Vince and Friends.                 
  - **_data/edizioni.yml** — add a - year: 2025 block at the top (Quinta Edizione,
  locandina, gallery, videos).                                                 
  - **_data/stampa.yml** — add a - year: 2025 block for press from the
  just-finished edition, if any.                                               
  - **_data/prenota.yml** — fill the three cta_url placeholders once Eventbrite is
  live.                                                                        
                                                        
  3. **Stylistic patch** from the design bundle (the "separately" pass we deferred)
                                                        
  Everything under /tmp/design-update/monferrato-ad-alta-voce-github-website/pr
  oject/jekyll-patch/ except the .md content files and prenota.yml:
                                                                               
  - `_layouts/default.html` — paper-grain SVG, site.js wiring, tweaks mount.     
  - `_includes/header.html` — scroll-state class + animated underlines.
  - `_includes/ticket.html`, `_includes/tweaks.html` — new partials.               
  - `assets/css/style.scss` — an additive block for paper grain, ticket stubs,   
  big-date + day-rail, tilted masonry, year-rail, lightbox, tweaks panel.      
  - `assets/js/site.js` — reveal, parallax, lightbox, year-rail, tweaks, nav.    
                                                                               
  Recommendation: one PR, applied additively (the bundle's README promises it  
  leaves existing selectors untouched). Before adopting, re-grep style.scss for
   collisions (.ticket, .day-rail, .big-date, .year-rail, .parallax-band — I   
  already know most are absent, but worth checking). Once SCSS is in, you can
  also upgrade programma.md to the richer .ev-time / .ev-type / .ev-performers
  card structure that the bundle uses.

  4. **Audit & cleanup**

  - `grep -rn "Quinta\|2025\|27-28\|maschio perduto" --include="*.md" --include="*.yml" --include="*.html"` 
     and triage each hit: either update, or legitimately historical (e.g. past-editions data).                           
  - Confirm the hero banner image is final — the chat iterated through a few (header_OK-tiny.jpg, home.jpg, 
    intro-grazzano-badoglio599.jpg). We're on the last one.
  - `notes.md` is untracked — commit or add to .gitignore.                       
  - Optional: stub redirects for old WP URLs (`/il-programma/`, `/prenota-il-tuo-posto/`, `/i-protagonisti/`) per CLAUDE.md.                     
                                                                               
  5. **Ship**
                                                        
  - `bundle exec jekyll serve --livereload`; walk every page on desktop + mobile.
  - `git push`; GH Pages rebuilds.
                                                                               
  Suggested execution order                                                    
   
  1. Kick off Eventbrite event creation and the 2026 artist collection — those 
  have the longest lead time because they depend on other people.
  2. While waiting: apply the stylistic patch (section 3) — independent of any 
  content still coming.                                                        
  3. Also while waiting: archive the 2025 edition into edizioni.yml /
  stampa.yml — independent too.                                                
  4. When inputs arrive: protagonisti refresh, prenota Eventbrite URLs.
  5. Audit + ship.                                                             
                                                        
  Want me to start on any of these? The stylistic patch and the 2025-archive   
  migration are both good autonomous next steps since they don't need external
  input.


## 2026-04-21 text, banner, programma for 2026

Read this set of updated *.html files at https://api.anthropic.com/v1/design/h/XjihHizITIj2MF2N0aNO3g and write content updates to the relevant markdown *.md files and sections. We will seperately process the stylistic changes, so try for now to only focus on text and image changes.

⏺ Now I understand the context. This is a handoff bundle from a design session.
   I need to focus only on text/image content updates to the Jekyll .md files,
  ignoring the stylistic/layout patches. Let me read the new design files and  
  compare to current content.

⏺ The index.md already matches the patch version. Now let me check the other   
  files.

⏺ Updated plan                                                
  ⎿  /plan to preview                                                          

 Ready to code?                                                                
                                                                               
 Here is Claude's plan:                                                        

 **Content port: claude.ai/design bundle → Jekyll markdown**
                                                                           
 Context                                                                   
                                                                           
 The user ran a design session at claude.ai/design to redesign the MAV     
 website. The tool returned a handoff bundle (extracted to
 `/tmp/design-update/monferrato-ad-alta-voce-github-website/`) containing
 updated HTML prototypes and a jekyll-patch/ folder. The bundle carries two
 kinds of updates:

 1. **Content** — new copy for the Sesta edizione (12–13–14 giugno 2026), new
 event lineup, new theme ("C'era una volta la Merica"), a new hero banner
 image.
 2. **Structure/style** — new SCSS, new SCSS classes (.ev-time, .big-date,
 .day-rail, etc.), new JS, new _includes/ partials for parallax, lightbox,
 ticket stubs, tweaks panel.

 The user explicitly scoped this task to content only — "We will separately
 process the stylistic changes, so try for now to only focus on text and image
  changes." Therefore this plan ports the copy and image references into the
 existing Jekyll markdown/data files, preserving the current classes and
 include structure so nothing visually breaks. A second pass (not in this
 plan) will add the new CSS/includes/JS.

 Most of the bundle's HTML files actually still reflect the 2025 edition —
 only programma.html was rewritten for 2026. But the _config.yml edition
 metadata drives many things (hero kicker, page descriptions, etc.), so
 flipping the config block cleanly updates the home and prenota pages. The
 only content file that requires a full rewrite is programma.md.

 Files to modify

 All paths are relative to
 /Users/bbest/Github/monferratoadaltavoce/monferratoadaltavoce.github.io/.

 1. `_config.yml` — Edition metadata (lines 11–19)

 Flip the edizione: block to the Sesta edizione. This cascades into every page
  that uses {{ site.edizione.* }} (the hero kicker in _includes/hero.html, the
  page-header kicker in prenota.md).

 ```yaml
 edizione:
   numero: Sesta
   numero_int: 6
   anno: 2026
   date_label: "12-13-14 giugno 2026"
   date_iso_start: "2026-06-12"
   date_iso_end: "2026-06-14"
   tema: "C'era una volta la Merica"
   comune: "Grazzano Badoglio (AT)"
 ```

 2. `index.md` — Frontmatter description

 Update only the description: frontmatter (line 5) from "Quinta edizione
 27-28-29 giugno 2025" to "Sesta edizione 12-13-14 giugno 2026". Body content
 is generic ("Il tema della X edizione", "«{{ site.edizione.tema }}»", etc.)
 and already interpolates from _config.yml.

 3. `_includes/hero.html` — Hero banner image

 Swap the hero image from `/assets/uploads/2025/06/header_OK-tiny.jpg` to the
 new banner image at `/assets/uploads/2026/04/intro-grazzano-badoglio599.jpg`
 (both the live line 6 and the commented-out line 3 for consistency).

 Also copy the new image file from `/tmp/design-update/monferrato-ad-alta-voce-github-website/project/uploads/intro-grazzano-badoglio599.jpg` →
 `assets/uploads/2026/04/intro-grazzano-badoglio599.jpg`. (Create the `2026/04/`
 directory; it doesn't exist yet.)

 4. `programma.md` — Full rewrite for Sesta edizione 2026

 Replace the three 2025 <section class="day"> blocks with the 2026 lineup.
 Also update the frontmatter description: line. Keep the existing class
 structure (.day, .day-header, article.event, <time>, h3, event--note, etc.)
 so the page renders with the current SCSS; do not adopt the new .ev-time /
 .ev-type / .big-date / .day-rail classes (those come with the
 separately-planned style patch).

 Add at the top of the content, after the intro <blockquote>, a theme banner
 paragraph:

 ```html
 <section class="container text-center">
   <p class="section-kicker">Il tema della sesta edizione</p>
   <h2 class="theme-line">«C'era una volta la Merica»</h2>
 </section>
 ```

 New day sections (condensed — full content in section below):

 - Venerdì 12 giugno
   - 19:30 — Abbazia di Aleramo, Terrazzo — Lettura: «Bartleby, lo scrivano»
 di Herman Melville, narrato da Oliviero Corbetta e Igor Tognazzo; fisarmonica
  di Matteo Castellan. Descrizione Bartleby + traduzione Gianni Celati.
   - 21:30 — Abbazia di Aleramo, Sagrato — Spettacolo con concerto: «Bird
 Lives! La leggenda di Charlie Parker» con Cochi Ponzoni e Gabriele Comeglio
 Quartet (Angeleri piano, Esposito basso, Monti batteria).
 - Sabato 13 giugno
   - 10:00 — Ex scuola di Grazzano (su prenotazione) — Colazione & Lettura:
 American's Breakfast + Gruppo di lettura condivisa di autori americani.
   - 19:30 — Abbazia di Aleramo, Terrazzo — Lettura & Concerto: I Poeti della
 Beat Generation (Ginsberg, Corso, Ferlinghetti) voci Rosso, Toniazzo, Pagani,
  Corbetta. A seguire: American Dust (Sonya Milan Patton, Gregory Jack Patton;
  letture Ben Best, Francesca Pagani). Con la citazione pullquote di Woody
 Guthrie.
   - 21:30 — Abbazia di Aleramo, Sagrato — Lettura: «Novecento» liberamente
 tratto da Alessandro Baricco, narrato da Jenny De Cesarei e Giuliana Atepi;
 al piano Matteo Castellan.
   - 12–13 giugno (nel chiostro) — Esposizione temporanea: Music Party
 Portraits — Opere di Paolo Pagani.
 - Domenica 14 giugno
   - 11:00 — Sala Combattenti e Reduci — Spettacolo teatrale: Eva — Studio
 N.45, liberamente tratto da Mark Twain. Con Giulia Cerino e Vincenzo Leone,
 regia di Emily Tartamelli.
   - 13:00 — Agrimacelleria di Grazzano (su prenotazione) — Pranzo con
 sottofondo musicale: Hamburger, Cheeseburger & See you soon. Con Vince &
 Friends (Vincenzo Daldoss, Francesco Tolomio). Prenotazione al {{
 site.contatti.telefono_pranzo }}.

 Drop the existing event--note enogastronomic intermezzo paragraphs — they
 don't appear in the 2026 lineup.

 5. `_data/prenota.yml` — Replace 2025 ticket data with 2026

 Rewrite the three day entries to match the 2026 programma summary. Eventbrite
  URLs are not yet known for 2026 — leave them as "" placeholder strings with
 a YAML comment noting they need to be supplied once Eventbrite events are
 created for this edition.

 - Venerdì 12 Giugno 2026 — Prima serata — Bartleby (19.30) · Bird Lives!
 (21.30)
 - Sabato 13 Giugno 2026 — Seconda giornata — American's Breakfast (10.00) ·
 Beat Generation + American Dust (19.30) · Novecento (21.30)
 - Domenica 14 Giugno 2026 — Mattinata — Eva (11.00) · Hamburger, Cheeseburger
  & See you soon (13.00)

 Keep the modifier: keys (fri, sat, sun) and cta_label pattern — the existing
 _includes/ticket.html depends on them.

 6. `prenota.md` — Frontmatter description

 Update line 6 description: from "Quinta edizione ... 2025" → "Sesta edizione
 ... 2026". Also update the hardcoded "entro venerdì 27 giugno" text (line 34)
  to "entro venerdì 12 giugno 2026". Body text that references {{
 site.edizione.date_label }} already auto-updates.

 7. Files not to modify (content unchanged for this pass)

 - `protagonisti.md` / `_data/protagonisti.yml` — the design bundle's
 protagonisti.html still shows the 2025 lineup. Do not overwrite. (When the
 user has the 2026 artist list, this will need a separate refresh: adding Igor
  Tognazzo, Gabriele Comeglio, Claudio Angeleri, Marco Esposito, Federico
 Monti, Sonya Milan Patton, Gregory Jack Patton, Ben Best, Francesca Pagani,
 Giulia Cerino, Vincenzo Leone, Emily Tartamelli; and promoting Giuliana Atepi
  + Paolo Pagani from past_editions: to current:.)
 - `rassegna-stampa.md` / `_data/stampa.yml` — no new 2025 or 2026 press in the
 bundle; content is unchanged.
 - `passate-edizioni.md` / `_data/edizioni.yml` — no new past-edition entries in
 the bundle; the 2025 (Quinta) edition is not yet archived here because it is
 still the current reference through _config.yml.
 - `_data/nav.yml`, `_data/partners.yml` — unchanged in the bundle.

 Full text for `programma.md` event cards

 Reference copy for the rewrite (from `/tmp/design-update/monferrato-ad-alta-voce-github-website/project/programma.html` 
 plus the chat transcript's authoritative Italian copy):

 **Bartleby** description

 ▎ Bartleby lo scrivano, apparso nel 1853, è tra i più bei racconti dell'epoca
 ▎  moderna e parla di un comico scrivano che rivendica l'ozio e il silenzio
 ▎ contro tutte le pressioni dell'utilitarismo americano. Imitato, meditato e
 ▎ tradotto da alcuni dei massimi scrittori contemporanei come Borges, Beckett
 ▎  e Italo Calvino. È anche una parabola sul lavoro di scrivere, destinata a
 ▎ sconvolgere molte idee. Traduzione di Gianni Celati.

 **Bird Lives!** description

 ▎ La vita vagabonda e caotica di Charlie Parker (1920–1955): l'inventore del
 ▎ bebop insieme a Dizzy Gillespie e Thelonious Monk.

 **American's Breakfast** description

 ▎ Colazione a base di muffin, pancakes, uova, bacon e caffè americano. A
 ▎ seguire: Gruppo di lettura condivisa di autori americani — un esperimento
 ▎ di lettura collettiva gestito direttamente dai partecipanti; chi lo
 ▎ desidera porterà e leggerà una proposta di autore prediletto.

 **American Dust** description + pullquote

 ▎ American Dust — dalla polvere delle strade alla luce della coscienza. Un
 ▎ viaggio poetico e potente nell'anima ribelle dell'America. Due voci, due
 ▎ chitarre, sei e dodici corde e un'armonica raccontano l'odissea di un
 ▎ popolo. Dalla fatica dei vagabondi alla rabbia del Vietnam, tra speranze e
 ▎ ballate che hanno fatto tremare il potere. Un'esperienza musicale in cui le
 ▎  chitarre diventano armi di verità per attraversare il cuore autentico
 ▎ degli Stati Uniti. Ballate e canzoni di Woody Guthrie, Bob Dylan, Joan
 ▎ Baez, Joni Mitchell, Creedence e altri cantautori che hanno trasformato le
 ▎ canzoni in un canto di speranza e di cambiamento.
 ▎
 ▎ ▎ «Non sono morto per farvi piangere, sono morto per farvi cantare»
 ▎ ▎ — Woody Guthrie

 **Novecento** description

 ▎ Una rilettura del «Pianista sull'oceano» da parte di due eccezionali
 ▎ attrici-doppiatrici, già molto note al pubblico del festival.

 **Music Party Portraits** description

 ▎ Un artista-ritrattista che predilige l'acquerello — per questa mostra si è
 ▎ divertito a giocare coi volti delle grandi rockstars americane.

 **Eva** description

 ▎ Lo spettacolo ripercorre la storia di Adamo ed Eva attraverso i loro diari
 ▎ personali. Adamo, solitario e infastidito dalla presenza di Eva, si trova a
 ▎  dover convivere con questa creatura curiosa e instancabile, che esplora e
 ▎ dà un nome a ogni cosa nel Giardino dell'Eden. Eva, entusiasta del mondo
 ▎ che la circonda, cerca continuamente di instaurare un legame con Adamo,
 ▎ nonostante la sua ritrosia. Conseguenze della reciproca conoscenza sono la
 ▎ scoperta dell'amore e la perdita dell'innocenza. L'introduzione della morte
 ▎  nel mondo e l'espulsione dal giardino segnano una svolta drammatica,
 ▎ rafforzando il rapporto tra uomo e donna, rendendoli necessari l'uno per
 ▎ l'altra.

 **Hamburger, Cheeseburger & See you soon** description

 ▎ Un arrivederci all'anno prossimo, allietato dal gradito ritorno delle
 ▎ chitarre country di Vince & Friends (Vincenzo Daldoss e Francesco Tolomio).

 Verification

 1. Local preview — run bundle exec jekyll serve from the repo root, visit
 http://localhost:4000/.
 2. Home — the hero kicker reads "Sesta edizione · 12-13-14 giugno 2026",
 tagline quote reads "«C'era una volta la Merica»", hero banner shows the new
 Grazzano Badoglio photo.
 3. Programma — visit /programma/. Verify three day sections with correct
 events, theme banner at top, intro quote unchanged. Click through each event;
  no Liquid errors; images (none in programma) absent; skyline banner at foot.
 4. Prenota — visit /prenota/. Verify three ticket cards reading "Venerdì 12 /
  Sabato 13 / Domenica 14 · Giugno · 2026" with the new events. Eventbrite
 buttons may be dead links (placeholder URLs) — that's expected.
 5. Broken link audit — after build, run the audit from CLAUDE.md:
 bundle exec jekyll build && \
   grep -roh 'src="/assets/uploads/[^"]*"' _site | sort -u | \
   sed 's/src="//;s/"$//' | while read p; do [ -e "_site$p" ] || echo "MISSING
  $p"; done
 5. Expect zero missing entries (verifies the new
 intro-grazzano-badoglio599.jpg landed in assets/uploads/2026/04/).
 6. Git sanity — git status should show exactly: _config.yml, index.md,
 _includes/hero.html, programma.md, prenota.md, _data/prenota.yml modified,
 plus one new image file under assets/uploads/2026/04/.

⏺ All content changes applied and verified. Summary:                           
                                                                             
  - `_config.yml` — edition flipped to Sesta / 2026 / «C'era una volta la        
  Merica».                                                                     
  - `_includes/hero.html` — hero banner swapped to                               
  /assets/uploads/2026/04/intro-grazzano-badoglio599.jpg (image file copied    
  from the bundle into the new 2026/04/ folder).                               
  - `index.md`   — description frontmatter updated.                                
  - `programma.md` — full rewrite with the Sesta edizione lineup (Bartleby, Bird 
  Lives!, American's Breakfast + reading group, Beat Generation + American Dust
   with Woody Guthrie pullquote, Novecento, Music Party Portraits exhibit, Eva,
   Hamburger/Cheeseburger), plus theme banner. Kept the existing .day /        
  article.event classes so nothing visually breaks.                            
  - `_data/prenota.yml` — three day entries rewritten for 2026; Eventbrite URLs  
  left empty with a TODO comment since 2026 events aren't created yet.         
  - `prenota.md` — frontmatter + Sunday-lunch callout text updated.
                                                                               
  Jekyll builds cleanly; the audit shows only the pre-existing ® URL-encoding  
  quirk on the Bridge Partners logo (not touched by this pass). Stylistic      
  changes (new SCSS, new .ev-* / .day-rail / .big-date classes, new partials   
  for parallax/tickets/lightbox/tweaks) deferred to the follow-up pass as
  requested.

※ recap: Goal was porting the claude.ai/design bundle's text and image updates 
  into the Jekyll site for the Sesta edizione 2026. All six files are updated, 
  Jekyll builds cleanly, and changes are unstaged. Next: review `git diff` and 
  commit. (disable recaps in /config)