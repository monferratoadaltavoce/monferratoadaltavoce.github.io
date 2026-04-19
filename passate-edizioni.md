---
layout: default
title: Passate Edizioni
permalink: /passate-edizioni/
subtitle: Rivivi le emozioni delle precedenti edizioni
description: Locandine, gallerie fotografiche e video delle passate edizioni di Monferrato ad Alta Voce.
---

<header class="page-header">
  <div class="container">
    <p class="kicker">Archivio</p>
    <h1>Le passate edizioni</h1>
    <p class="lede">Rivivi le emozioni delle precedenti edizioni</p>
  </div>
</header>

<nav class="year-rail" aria-label="Edizioni">
  <ul>
    {% for e in site.data.edizioni %}
    <li><a href="#edizione-{{ e.year }}">{{ e.year }}</a></li>
    {% endfor %}
  </ul>
</nav>

<div class="content">
  {% for e in site.data.edizioni %}
  <section class="edition" id="edizione-{{ e.year }}">
    <div class="container">
      <div class="edition-head reveal">
        <span class="year-big">{{ e.year }}</span>
        <p class="ed-num">{{ e.subtitle }}</p>
      </div>

      {% if e.locandina %}
      <p class="edition-sub">La locandina</p>
      <div class="locandina-wrap reveal">
        <a href="{{ e.locandina | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ e.locandina | relative_url }}" alt="Locandina {{ e.year }}" loading="lazy">
        </a>
      </div>
      {% endif %}

      {% if e.gallery and e.gallery.size > 0 %}
      <p class="edition-sub">La gallery</p>
      <div class="gallery-grid" data-lightbox="{{ e.year }}">
        {% for img in e.gallery %}
        <a href="{{ img | relative_url }}"><img src="{{ img | relative_url }}" alt="{{ e.year }} — {{ forloop.index }}" loading="lazy"></a>
        {% endfor %}
      </div>
      {% endif %}

      {% if e.videos and e.videos.size > 0 %}
      <p class="edition-sub">I video</p>
      <div class="videos-grid reveal">
        {% for v in e.videos %}
        <video controls preload="metadata" playsinline><source src="{{ v | relative_url }}" type="video/mp4"></video>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </section>
  {% endfor %}
</div>

<div class="skyline-band" aria-hidden="true">
  <img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" loading="lazy">
</div>

{% include tweaks.html %}
