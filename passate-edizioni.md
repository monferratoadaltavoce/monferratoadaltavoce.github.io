---
layout: default
title: Passate Edizioni
permalink: /passate-edizioni/
subtitle: Rivivi le emozioni delle precedenti edizioni
description: Locandine, gallerie fotografiche e video delle passate edizioni di Monferrato ad Alta Voce.
---

<header class="page-header">
  <div class="container">
    <h1>Le passate edizioni</h1>
    <p class="lede">Rivivi le emozioni delle precedenti edizioni di Monferrato ad Alta Voce</p>
  </div>
</header>

<div class="container content">
  {% for e in site.data.edizioni %}
  <section class="edizione" id="edizione-{{ e.year }}">
    <h2>{{ e.subtitle }} — {{ e.year }}</h2>

    {% if e.locandina %}
    <h3 class="text-center">Il programma</h3>
    <div class="locandina">
      <a href="{{ e.locandina | relative_url }}">
        <img src="{{ e.locandina | relative_url }}" alt="Locandina {{ e.year }}" loading="lazy">
      </a>
    </div>
    {% endif %}

    {% if e.gallery and e.gallery.size > 0 %}
    <h3 class="text-center mt-2">La gallery</h3>
    {% include gallery.html images=e.gallery id=e.year alt_prefix=e.year %}
    {% endif %}

    {% if e.videos and e.videos.size > 0 %}
    <h3 class="text-center mt-2">I video</h3>
    <div class="videos">
      {% for v in e.videos %}
      <video controls preload="metadata" playsinline>
        <source src="{{ v | relative_url }}" type="video/mp4">
      </video>
      {% endfor %}
    </div>
    {% endif %}
  </section>
  {% endfor %}
</div>

<img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" class="skyline" loading="lazy">
