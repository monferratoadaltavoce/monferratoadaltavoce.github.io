// === MAV site — global behaviour ===========================================
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Persisted tweaks (written inline in each page via Tweaks panel)
  var TWEAKS = window.TWEAKS || { motionLevel: 'full', serifHeadings: true, grainTexture: true };
  applyTweaks(TWEAKS);

  function applyTweaks(t) {
    body.classList.toggle('tw-motion-none', t.motionLevel === 'none');
    body.classList.toggle('tw-motion-subtle', t.motionLevel === 'subtle');
    body.classList.toggle('tw-serif', !!t.serifHeadings);
    body.classList.toggle('has-grain', !!t.grainTexture);
  }

  // --- Mobile nav toggle ---------------------------------------------------
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // --- Sticky-header shrink on scroll --------------------------------------
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Reveal on scroll -----------------------------------------------------
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal, .section, .day, .event, .ticket, .protagonista, .clippings figure, .gallery-grid a, .past-grid figure').forEach(function (el) {
      el.classList.add('reveal-target');
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .reveal-target').forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --- Hero parallax + crossfade -------------------------------------------
  var hero = document.querySelector('.hero--banner');
  if (hero && !reduceMotion) {
    var heroA = hero.querySelector('.hero-img--a');
    var heroB = hero.querySelector('.hero-img--b');
    var heroSky = hero.querySelector('.hero-skyline');
    var heroTick = function () {
      var rect = hero.getBoundingClientRect();
      var h = hero.offsetHeight || 1;
      var p = Math.min(1, Math.max(0, -rect.top / h));
      if (heroA) heroA.style.transform = 'translate3d(0,' + (p * 40) + 'px,0) scale(' + (1 + p * 0.04) + ')';
      if (heroB) { heroB.style.opacity = p; heroB.style.transform = 'translate3d(0,' + (p * 20) + 'px,0) scale(' + (1 + p * 0.06) + ')'; }
      if (heroSky) heroSky.style.transform = 'translate3d(0,' + (-p * 40) + 'px,0)';
    };
    window.addEventListener('scroll', heroTick, { passive: true });
    heroTick();
  }

  // --- Lightbox for .gallery-grid and .gallery -----------------------------
  var lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.innerHTML = '<button class="close" aria-label="Chiudi">×</button><img src="" alt="">';
    document.body.appendChild(lb);
  }
  var lbImg = lb.querySelector('img');
  var lbClose = function () { lb.classList.remove('is-open'); };
  lb.addEventListener('click', lbClose);
  lb.querySelector('.close').addEventListener('click', function (e) { e.stopPropagation(); lbClose(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lbClose(); });
  document.querySelectorAll('.gallery-grid a, .gallery a, .clippings a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      // External link? Let it through.
      if (a.hasAttribute('target') && !a.matches('.gallery-grid a, .gallery a')) return;
      e.preventDefault();
      lbImg.src = href;
      lb.classList.add('is-open');
    });
  });

  // --- Year rail active state (passate-edizioni) ---------------------------
  var rail = document.querySelector('.year-rail');
  if (rail) {
    var links = rail.querySelectorAll('a');
    var sections = Array.prototype.map.call(links, function (l) { return document.querySelector(l.getAttribute('href')); });
    var railTick = function () {
      var y = window.scrollY + 200, i = 0;
      sections.forEach(function (s, idx) { if (s && s.offsetTop <= y) i = idx; });
      links.forEach(function (l, idx) { l.classList.toggle('is-active', idx === i); });
    };
    window.addEventListener('scroll', railTick, { passive: true });
    railTick();
  }

  // --- Tweaks protocol (host toolbar toggle) -------------------------------
  var tweaksPanel = document.getElementById('tweaks-panel');
  window.addEventListener('message', function (e) {
    var d = e.data || {};
    if (d.type === '__activate_edit_mode' && tweaksPanel) tweaksPanel.classList.add('is-open');
    if (d.type === '__deactivate_edit_mode' && tweaksPanel) tweaksPanel.classList.remove('is-open');
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (_) {}

  if (tweaksPanel) {
    var motion = tweaksPanel.querySelector('#tw-motion');
    var serif = tweaksPanel.querySelector('#tw-serif');
    var grain = tweaksPanel.querySelector('#tw-grain');
    if (motion) motion.value = TWEAKS.motionLevel;
    if (serif) serif.checked = !!TWEAKS.serifHeadings;
    if (grain) grain.checked = !!TWEAKS.grainTexture;
    function persist(patch) {
      Object.assign(TWEAKS, patch);
      applyTweaks(TWEAKS);
      try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*'); } catch (_) {}
    }
    if (motion) motion.addEventListener('change', function () { persist({ motionLevel: motion.value }); });
    if (serif) serif.addEventListener('change', function () { persist({ serifHeadings: serif.checked }); });
    if (grain) grain.addEventListener('change', function () { persist({ grainTexture: grain.checked }); });
  }
})();
