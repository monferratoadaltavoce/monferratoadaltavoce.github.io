---
layout: default
title: Home
permalink: /
description: Festival di musica e parole a Grazzano Badoglio nel cuore del Monferrato. Quinta edizione 27-28-29 giugno 2025.
---

<section class="hero">
  <div class="container">
    <h1>Monferrato ad alta voce</h1>
    <p class="tagline">{{ site.tagline }}</p>
    <p class="meta">
      <span>{{ site.edizione.numero }} edizione</span><span>·</span><span>{{ site.edizione.comune }}</span><span>·</span><span>{{ site.edizione.date_label }}</span>
    </p>
    <p>Ideato e diretto da <strong>Marco Pagani</strong></p>
    <a href="{{ '/programma/' | relative_url }}" class="btn">Scopri il programma</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Il tema della {{ site.edizione.numero | downcase }} edizione</h2>
    <h3 class="text-center" style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 2rem; color: var(--brand-red,#B85B5C); margin-bottom: 2rem;">«{{ site.edizione.tema }}»</h3>

    <div class="two-col">
      <div class="col-text">
        <p><strong><em>Monferrato ad alta voce</em></strong> è un festival di cultura e spettacolo, ideato e diretto dall’attore <strong>Marco Pagani</strong>.</p>
        <p><strong>«{{ site.edizione.tema }}»</strong> è il filo rosso di questa {{ site.edizione.numero | downcase }} edizione, che quest’anno lega come di consueto letture ad alta voce, performance di teatro e musica, rinnovando emozioni e divertimento.</p>
        <p><em>Il festival si terrà anche in caso di maltempo nelle location della Basilica e della Scuola di Grazzano Badoglio.</em></p>
      </div>
      <div>
        <div class="video-embed">
          <iframe src="https://player.vimeo.com/video/1088788785?title=0&byline=0&portrait=0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="two-col two-col--reverse">
      <div class="col-text">
        <h2 style="text-align:left;">Il programma degli eventi</h2>
        <p>Al festival si prova la piacevole sensazione di essere non solo spettatori passivi, ma parte attiva della festa. Invito quindi tutti a venire per incontrare gli artisti e, perché no, giocare, provare a giocare con loro, a tu per tu, proprio come tra amici.</p>
        <a href="{{ '/programma/' | relative_url }}" class="btn">Scopri il programma</a>
      </div>
      <div>
        <img src="{{ '/assets/uploads/2023/03/home.jpg' | relative_url }}" alt="Monferrato ad alta voce" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="col-text">
        <h2 style="text-align:left;">I protagonisti del festival</h2>
        <p>Sul sagrato dell’antica Abbazia di Sant’Aleramo e nella bella Chiesa barocca, nel punto più alto del borgo, risuoneranno, come sempre, parole e musica: venerdì e sabato performance di attori si alterneranno ad intrattenimenti musicali per finire domenica con una passeggiata letteraria. Divertimento intelligente ed emozioni sono garantiti.</p>
        <a href="{{ '/protagonisti/' | relative_url }}" class="btn">Scopri tutti i protagonisti</a>
      </div>
      <div>
        <img src="{{ '/assets/uploads/2023/03/MAV-62.jpg' | relative_url }}" alt="Pubblico del festival" loading="lazy">
      </div>
    </div>
  </div>
</section>

<img src="{{ '/assets/img/site/skyline.png' | relative_url }}" alt="" class="skyline" loading="lazy">
