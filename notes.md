
## 2026-04-21 

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

 Swap the hero image from /assets/uploads/2025/06/header_OK-tiny.jpg to the
 new banner image at /assets/uploads/2026/04/intro-grazzano-badoglio599.jpg
 (both the live line 6 and the commented-out line 3 for consistency).

 Also copy the new image file from /tmp/design-update/monferrato-ad-alta-voce-
 github-website/project/uploads/intro-grazzano-badoglio599.jpg →
 assets/uploads/2026/04/intro-grazzano-badoglio599.jpg. (Create the 2026/04/
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