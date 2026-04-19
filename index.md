---
layout: default
title: Home
permalink: /
description: Festival di musica e parole a Grazzano Badoglio nel cuore del Monferrato. Quinta edizione 27-28-29 giugno 2025.
---

{% include hero.html %}

<section class="section">
  <div class="container">
    <h2 class="reveal">Il tema della {{ site.edizione.numero | downcase }} edizione</h2>
    <p class="theme-line reveal">«{{ site.edizione.tema }}»</p>

    <div class="two-col">
      <div class="col-text reveal">
        <p><strong><em>Monferrato ad alta voce</em></strong> è un festival di cultura e spettacolo, ideato e diretto dall'attore <strong>Marco Pagani</strong>.</p>
        <p><strong>«{{ site.edizione.tema }}»</strong> è il filo rosso di questa {{ site.edizione.numero | downcase }} edizione, che quest'anno lega come di consueto letture ad alta voce, performance di teatro e musica, rinnovando emozioni e divertimento.</p>
        <p><em>Il festival si terrà anche in caso di maltempo nelle location della Basilica e della Scuola di Grazzano Badoglio.</em></p>
      </div>
      <div class="reveal">
        <div class="video-embed">
          <iframe src="https://player.vimeo.com/video/1088788785?title=0&byline=0&portrait=0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="parallax-band" aria-hidden="true"
  style="background-image: url('{{ '/assets/uploads/2023/03/MAV-62.jpg' | relative_url }}');">
  <div class="parallax-band__scrim"></div>
  <blockquote class="parallax-band__quote">
    <p>Non solo spettatori passivi, ma parte attiva della festa.</p>
    <cite>Marco Pagani</cite>
  </blockquote>
</section>

<section class="section">
  <div class="container">
    <div class="two-col two-col--reverse">
      <div class="col-text reveal">
        <h2 style="text-align:left;">Il programma degli eventi</h2>
        <p>Al festival si prova la piacevole sensazione di essere non solo spettatori passivi, ma parte attiva della festa. Invito quindi tutti a venire per incontrare gli artisti e, perché no, giocare, provare a giocare con loro, a tu per tu, proprio come tra amici.</p>
        <a href="{{ '/programma/' | relative_url }}" class="btn btn--shine">Scopri il programma</a>
      </div>
      <div class="reveal">
        <img src="{{ '/assets/uploads/2023/03/home.jpg' | relative_url }}" alt="Monferrato ad alta voce" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="col-text reveal">
        <h2 style="text-align:left;">I protagonisti del festival</h2>
        <p>Sul sagrato dell'antica Abbazia di Sant'Aleramo e nella bella Chiesa barocca, nel punto più alto del borgo, risuoneranno, come sempre, parole e musica: venerdì e sabato performance di attori si alterneranno ad intrattenimenti musicali per finire domenica con una passeggiata letteraria. Divertimento intelligente ed emozioni sono garantiti.</p>
        <a href="{{ '/protagonisti/' | relative_url }}" class="btn btn--shine">Scopri tutti i protagonisti</a>
      </div>
      <div class="reveal">
        <img src="{{ '/assets/uploads/2023/03/MAV-62.jpg' | relative_url }}" alt="Pubblico del festival" loading="lazy">
      </div>
    </div>
  </div>
</section>

<div class="skyline-band" aria-hidden="true">
  <img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" loading="lazy">
</div>

{% include tweaks.html %}
