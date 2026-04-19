---
layout: default
title: I Protagonisti
permalink: /protagonisti/
subtitle: Gli artisti del Festival
description: Gli artisti, attori e musicisti della Quinta edizione di Monferrato ad Alta Voce.
---

<header class="page-header">
  <div class="container">
    <h1>I protagonisti</h1>
    <p class="lede">Gli artisti del Festival</p>
  </div>
</header>

<section class="container content">
  <h2 class="text-center">I protagonisti di Monferrato ad alta voce</h2>

  <div class="protagonisti">
    {% for p in site.data.protagonisti.current %}
    <article class="protagonista">
      <div class="protagonista__photo">
        {% if p.photo %}<img src="{{ p.photo | relative_url }}" alt="{{ p.name }}" loading="lazy">{% endif %}
      </div>
      <div class="protagonista__bio">
        <h3>{{ p.name }}</h3>
        {% if p.role %}<p class="role">{{ p.role }}</p>{% endif %}
        {{ p.bio | markdownify }}
      </div>
    </article>
    {% endfor %}
  </div>

  <h2 class="text-center mt-2">I protagonisti delle passate edizioni</h2>

  <div class="past-grid">
    {% for p in site.data.protagonisti.past_editions %}
    <figure>
      <img src="{{ p.photo | relative_url }}" alt="{{ p.name }}" loading="lazy">
      <figcaption>{{ p.name }}</figcaption>
    </figure>
    {% endfor %}
  </div>
</section>

<img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" class="skyline" loading="lazy">
