---
layout: default
title: Rassegna Stampa
permalink: /rassegna-stampa/
subtitle: Dicono di noi…
description: La rassegna stampa di Monferrato ad Alta Voce — articoli e servizi sulle edizioni del festival.
---

<header class="page-header">
  <div class="container">
    <p class="kicker">Archivio</p>
    <h1>Rassegna stampa</h1>
    <p class="lede">Dicono di noi…</p>
  </div>
</header>

<section class="section">
  <div class="container">
    {% for r in site.data.stampa %}
    <div class="press-edition">
      <div class="press-edition-head reveal">
        <span class="year">{{ r.year }}</span>
        <p class="ed-label">{{ r.edition }}</p>
        <p class="hint">Clicca sulle immagini per leggere l'articolo</p>
      </div>
      <div class="clippings">
        {% for img in r.articles %}
        <figure>
          <a href="{{ img | relative_url }}" target="_blank" rel="noopener">
            <img src="{{ img | relative_url }}" alt="Articolo stampa — {{ r.year }} — {{ forloop.index }}" loading="lazy">
          </a>
        </figure>
        {% endfor %}
      </div>

      {% if forloop.first %}
      <p class="text-center mt-2 reveal">
        <a class="radio-link" href="https://www.spreaker.com/user/radioitineraria/2022-05-26-puntata-punto-di-svolta" target="_blank" rel="noopener">
          <span class="icon" aria-hidden="true">▶</span>
          Ascolta l'intervento radiofonico di Aglaia Zannetti e Marco Pagani su Radio Itineraria
        </a>
      </p>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</section>

<div class="skyline-band" aria-hidden="true">
  <img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" loading="lazy">
</div>

{% include tweaks.html %}
