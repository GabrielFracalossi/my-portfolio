/* ─────────────────────────────────────────────────────────────
   UI behavior — nav state, mobile menu, active link, scroll reveal.
   ───────────────────────────────────────────────────────────── */
(function () {
  var nav = document.getElementById('navbar');
  var menuBtn = document.getElementById('menuToggle');
  var panel = document.getElementById('menu');

  /* Nav turns into a floating bar after the first scroll */
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', window.GF.t(open ? 'a11y.menuClose' : 'a11y.menuOpen'));
  }
  function isOpen() { return nav.classList.contains('is-open'); }

  menuBtn.addEventListener('click', function () { setMenu(!isOpen()); });
  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('click', function (e) {
    if (isOpen() && !panel.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) { setMenu(false); menuBtn.focus(); }
  });
  window.matchMedia('(min-width: 960px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });
  document.addEventListener('gf:languagechange', function () { setMenu(isOpen()); });

  /* Hero ghost word: sized so the whole word spans the stage, whatever the language */
  var ghost = document.querySelector('.hero__ghost');
  function fitGhost() {
    if (!ghost) return;
    var stage = ghost.closest('.hero__stage');
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    ghost.style.fontSize = '100px';
    var natural = ghost.getBoundingClientRect().width;
    if (!natural) return;
    ghost.style.fontSize = Math.min((100 * stage.clientWidth * 0.96) / natural, rem * 17) + 'px';
  }
  var fitTimer;
  window.addEventListener('resize', function () { clearTimeout(fitTimer); fitTimer = setTimeout(fitGhost, 80); });
  document.addEventListener('gf:languagechange', fitGhost);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitGhost);
  fitGhost();

  /* Optional image slots (about photo, Nazario logo): show the placeholder until the file exists */
  document.querySelectorAll('[data-slot]').forEach(function (slot) {
    var img = slot.querySelector('[data-slot-img]');
    if (!img) return;
    function ok() { slot.classList.add('has-img'); }
    function fail() { img.hidden = true; slot.classList.remove('has-img'); }
    img.addEventListener('load', ok);
    img.addEventListener('error', fail);
    if (img.complete) { if (img.naturalWidth) ok(); else fail(); }
  });

  /* Active section in the nav */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .concat([document.getElementById('nazario'), document.getElementById('top'), document.getElementById('contact')])
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + entry.target.id));
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });

    /* Reveal on scroll */
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { reveal.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
