---
layout: default
title: Rassegna Stampa
permalink: /rassegna-stampa/
subtitle: Dicono di noi…
description: La rassegna stampa di Monferrato ad Alta Voce — articoli e servizi sulle edizioni del festival.
---

<header class="page-header">
  <div class="container">
    <h1>Rassegna stampa</h1>
    <p class="lede">Dicono di noi…</p>
  </div>
</header>

<section class="container content">
  {% for r in site.data.stampa %}
  <h2>La rassegna stampa della {{ r.edition }}</h2>
  <p class="text-center"><em>Clicca sulle immagini per leggere l’articolo</em></p>
  {% include gallery.html images=r.articles id=r.year alt_prefix="Articolo stampa" %}

  {% if forloop.first %}
  <p class="text-center mt-2">
    <a class="spreaker-embed" href="https://www.spreaker.com/user/radioitineraria/2022-05-26-puntata-punto-di-svolta" target="_blank" rel="noopener">
      Ascolta l’intervento radiofonico di Aglaia Zannetti e Marco Pagani su Radio Itineraria
    </a>
  </p>
  {% endif %}
  {% endfor %}
</section>

<img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" class="skyline" loading="lazy">
