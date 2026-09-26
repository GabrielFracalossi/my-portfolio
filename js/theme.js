/* ─────────────────────────────────────────────────────────────
   Theme — dark (default) / light. The initial value is applied by
   the inline script in <head> so there is no flash.
   Palette lives in css/tokens.css.
   ───────────────────────────────────────────────────────────── */
(function () {
  var STORAGE_KEY = 'gf-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var metaColor = document.querySelector('meta[name="theme-color"]');
  var COLORS = { dark: '#03060f', light: '#eef0f6' };

  function current() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }

  function syncUi() {
    var theme = current();
    if (metaColor) metaColor.setAttribute('content', COLORS[theme]);
    if (toggle) {
      var label = window.GF ? window.GF.t(theme === 'dark' ? 'a11y.themeToLight' : 'a11y.themeToDark') : '';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
  }

  function setTheme(theme) {
    root.classList.add('theme-fade');
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* storage may be blocked */ }
    syncUi();
    window.setTimeout(function () { root.classList.remove('theme-fade'); }, 400);
  }

  if (toggle) {
    toggle.addEventListener('click', function () { setTheme(current() === 'dark' ? 'light' : 'dark'); });
  }
  document.addEventListener('gf:languagechange', syncUi);
  syncUi();
})();
