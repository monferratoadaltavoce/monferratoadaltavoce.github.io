---
layout: default
title: Prenota il tuo posto
permalink: /prenota/
subtitle: Riserva il tuo posto al festival
description: Prenota il tuo posto agli eventi della Sesta edizione di Monferrato ad Alta Voce, 12-13-14 giugno 2026.
---

<header class="page-header">
  <div class="container">
    <p class="kicker">{{ site.edizione.date_label }}</p>
    <h1>Prenota il tuo posto</h1>
    <p class="lede">L'ingresso è libero. La prenotazione è gratuita ma necessaria.</p>
  </div>
</header>

<section class="section">
  <div class="container">
    <div class="prenota-intro reveal">
      <span class="prenota-badge">Ingresso gratuito</span>
      <p>Il festival si terrà anche in caso di maltempo nelle location della Basilica e della Scuola di Grazzano Badoglio.</p>
    </div>
  </div>

  <div class="ticket-cards">
    {% for t in site.data.prenota %}
      {% include ticket.html t=t %}
    {% endfor %}
  </div>

  <div class="container">
    <div class="info-callout reveal">
      <strong>Il pranzo di domenica</strong>
      Il pranzo di chiusura <em>Hamburger, Cheeseburger &amp; See you soon</em> all’Agrimacelleria di Grazzano richiede prenotazione separata entro venerdì 12 giugno 2026 al numero <a href="tel:+393288335609">{{ site.contatti.telefono_pranzo }}</a>.
    </div>
  </div>
</section>

<div class="skyline-band" aria-hidden="true">
  <img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" loading="lazy">
</div>

{% include tweaks.html %}
