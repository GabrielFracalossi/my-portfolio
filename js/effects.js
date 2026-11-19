/* ─────────────────────────────────────────────────────────────
   Motion layer — loaded after main.js. Everything here is an
   enhancement: without it (or with reduced motion) the page is
   complete and static.

   Markup hooks:
     [data-split]      heading whose words rise in when it enters
     [data-highlight]  statement whose words light up with the scroll
     [data-clip]       panel that opens out to full width as it enters
     [data-tl]         Trajetória: pinned horizontal story on wide screens,
                       vertical spine that fills with the scroll elsewhere
   ───────────────────────────────────────────────────────────── */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var root = document.documentElement;

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }

  /* ── Smooth scroll (Lenis) and in-page anchors ── */
  var lenis = window.Lenis && !reduce ? new window.Lenis({ lerp: 0.085, wheelMultiplier: 0.9 }) : null;
  if (lenis) (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());

  function scrollToY(y) {
    if (lenis) lenis.scrollTo(y, { duration: 1.3 });
    else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || !lenis || e.defaultPrevented) return;
    var id = a.getAttribute('href');
    var target = id === '#' || id === '#top' ? document.body : document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target === document.body ? 0 : target, { offset: -16, duration: 1.3 });
    history.replaceState(null, '', id);
  });
  // the mobile menu sheet scrolls on its own
  var menu = document.getElementById('menu');
  if (menu) menu.setAttribute('data-lenis-prevent', '');

  /* ── One rAF per frame for every scroll-linked effect ── */
  var subs = [], ticking = false;
  function run() { ticking = false; subs.forEach(function (fn) { fn(); }); }
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(run); } }
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  function onScroll(fn) { subs.push(fn); }

  /* Two-way: shows on the way down, hides again when it leaves through the bottom */
  function inView(el, onIn, onOut, threshold) {
    if (reduce || !('IntersectionObserver' in window)) return onIn();
    new IntersectionObserver(function (entries) {
      var en = entries[0];
      if (en.isIntersecting) onIn();
      else if (en.boundingClientRect.top > 0) onOut();
    }, { threshold: threshold || 0.2 }).observe(el);
  }

  /* Text pieces of a hook: the element itself when it carries data-i18n, else its data-i18n children */
  function parts(el) {
    return el.hasAttribute('data-i18n') ? [el] : [].slice.call(el.querySelectorAll('[data-i18n]'));
  }
  function esc(w) { return w.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* ── Headings whose words rise in ── */
  var splits = [].slice.call(document.querySelectorAll('[data-split]'));
  function splitHeadings() {
    splits.forEach(function (el) {
      var i = 0;
      parts(el).forEach(function (p) {
        p.innerHTML = p.textContent.trim().split(/\s+/).map(function (w) {
          return '<span class="gf-word"><span style="--i:' + (i++) + '">' + esc(w) + '</span></span>';
        }).join(' ');
      });
      el.classList.add('is-split');
    });
  }
  splitHeadings();
  splits.forEach(function (el) {
    if (el.closest('.hero')) {
      setTimeout(function () { el.classList.add('is-visible'); }, 250);
    } else {
      inView(el, function () { el.classList.add('is-visible'); }, function () { el.classList.remove('is-visible'); }, 0.5);
    }
  });

  /* ── Statements: words light up while they cross the viewport ── */
  var statements = [];
  function splitStatements() {
    statements = [].map.call(document.querySelectorAll('[data-highlight]'), function (el) {
      parts(el).forEach(function (p) {
        p.innerHTML = p.textContent.trim().split(/\s+/).map(function (w) {
          return '<span class="gf-hw">' + esc(w) + '</span>';
        }).join(' ');
      });
      return { el: el, words: el.querySelectorAll('.gf-hw') };
    });
  }
  function paintStatements() {
    var vh = window.innerHeight;
    statements.forEach(function (s) {
      var r = s.el.getBoundingClientRect();
      var p = reduce ? 1 : clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0, 1);
      var lit = Math.round(p * s.words.length);
      s.words.forEach(function (w, i) { w.classList.toggle('is-lit', i < lit); });
    });
  }
  splitStatements();
  onScroll(paintStatements);

  /* ── Panels open out to full width as they enter ── */
  var clips = [].slice.call(document.querySelectorAll('[data-clip]'));
  function paintClips() {
    var vh = window.innerHeight;
    clips.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var p = reduce ? 1 : clamp((vh - r.top) / (vh * 0.7), 0, 1);
      el.style.setProperty('--clip', (1 - p).toFixed(3));
    });
  }
  onScroll(paintClips);

  /* ── Hero: scroll-out (--sy) and pointer depth (--px/--py) ── */
  var stage = document.querySelector('.hero__stage');
  function paintHero() {
    if (!stage || reduce) return;
    var r = stage.getBoundingClientRect();
    stage.style.setProperty('--sy', clamp(-r.top / r.height, 0, 1).toFixed(3));
  }
  onScroll(paintHero);

  /* ── Pointer: glow on the page background only (surfaces stay unlit, for depth) and hero depth ── */
  if (canHover && !reduce) {
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(glow, document.body.firstChild);

    var mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;
    var tpx = 0, tpy = 0, px = 0, py = 0, moving = false;
    window.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      glow.classList.add('is-on');
      if (stage) {
        var r = stage.getBoundingClientRect();
        tpx = clamp((e.clientX - r.left) / r.width * 2 - 1, -1, 1);
        tpy = clamp((e.clientY - r.top) / r.height * 2 - 1, -1, 1);
      }
      if (!moving) { moving = true; requestAnimationFrame(follow); }
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', function () { glow.classList.remove('is-on'); });

    // eased follow; stops itself once it has caught up
    function follow() {
      gx += (mx - gx) * 0.12; gy += (my - gy) * 0.12;
      px += (tpx - px) * 0.08; py += (tpy - py) * 0.08;
      glow.style.transform = 'translate3d(' + gx.toFixed(1) + 'px,' + gy.toFixed(1) + 'px,0)';
      if (stage) {
        stage.style.setProperty('--px', px.toFixed(3));
        stage.style.setProperty('--py', py.toFixed(3));
      }
      var still = Math.abs(mx - gx) < 0.5 && Math.abs(my - gy) < 0.5 && Math.abs(tpx - px) < 0.002 && Math.abs(tpy - py) < 0.002;
      if (still) moving = false; else requestAnimationFrame(follow);
    }

  }

  /* ── Stack mosaic: chips ripple one after another when a tile is hovered (CSS reads --ci) ── */
  document.querySelectorAll('.bento--stack .bcard').forEach(function (card) {
    card.querySelectorAll('.chip').forEach(function (c, i) { c.style.setProperty('--ci', i); });
  });

  /* ── Trajetória ── */
  var tl = document.querySelector('[data-tl]');
  if (tl) {
    var pin = tl.querySelector('.tl__pin');
    var track = tl.querySelector('.tl__track');
    var ghost = tl.querySelector('.tl__ghost');
    var items = [].slice.call(track.children);
    var pinned = false, travel = 0, year = null;

    function layoutTl() {
      tl.classList.remove('is-pinned');
      tl.style.height = '';
      track.style.removeProperty('--x');
      pinned = false;
      if (reduce || window.innerWidth < 1024) return paintTl();
      tl.classList.add('is-pinned');
      // pin only when the cards fit the screen height with some air
      if (track.offsetHeight + 120 > window.innerHeight) {
        tl.classList.remove('is-pinned');
        return paintTl();
      }
      travel = Math.max(0, track.offsetWidth - pin.clientWidth);
      tl.style.height = (pin.offsetHeight + travel) + 'px';
      pinned = true;
      paintTl();
    }

    function paintTl() {
      var lit = 0, fill;
      if (pinned) {
        var r = tl.getBoundingClientRect();
        var p = clamp(-r.top / (tl.offsetHeight - pin.offsetHeight), 0, 1);
        var pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        var line = track.offsetWidth - pad * 2;
        track.style.setProperty('--x', (p * travel).toFixed(1));
        // the fill runs a bit ahead of the screen centre and reaches the last year at the end
        var lead = window.innerWidth * 0.55 - pad;
        fill = clamp(p * travel + lead + p * Math.max(0, line - travel - lead), 0, line);
        items.forEach(function (it, i) {
          var on = reduce || it.offsetLeft - pad <= fill;
          it.classList.toggle('is-lit', on);
          if (on) lit = i;
        });
        tl.classList.toggle('is-done', p > 0.97);
      } else {
        var tr = track.getBoundingClientRect();
        fill = reduce ? tr.height : clamp(window.innerHeight * 0.62 - tr.top, 0, tr.height);
        items.forEach(function (it, i) {
          var on = reduce || it.offsetTop + 12 <= fill;
          it.classList.toggle('is-lit', on);
          if (on) lit = i;
        });
      }
      track.style.setProperty('--fill', fill.toFixed(1) + 'px');
      var y = items[lit].getAttribute('data-year');
      if (ghost && y !== year) {
        year = y;
        ghost.textContent = y;
        ghost.classList.remove('is-swap');
        void ghost.offsetWidth;
        ghost.classList.add('is-swap');
      }
    }

    // pinned: clicking a card further along scrolls the story to it
    items.forEach(function (it) {
      it.addEventListener('click', function (e) {
        if (!pinned || e.target.closest('a') || it.classList.contains('is-lit')) return;
        var x = it.offsetLeft + it.offsetWidth / 2 - window.innerWidth * 0.45;
        var top = tl.getBoundingClientRect().top + window.scrollY;
        scrollToY(top + clamp(x / travel, 0, 1) * (tl.offsetHeight - pin.offsetHeight));
      });
    });

    var tlTimer;
    window.addEventListener('resize', function () { clearTimeout(tlTimer); tlTimer = setTimeout(layoutTl, 120); });
    onScroll(paintTl);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutTl);
    layoutTl();
  }

  /* ── Language switch rewrites the text: split it again and re-measure ── */
  document.addEventListener('gf:languagechange', function () {
    splitHeadings();
    splitStatements();
    if (tl) setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 0);
    request();
  });

  request();
})();
