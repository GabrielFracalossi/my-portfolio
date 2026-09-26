/* ─────────────────────────────────────────────────────────────
   i18n — pt (default), en, es.
   Markup:  data-i18n="key"                → textContent
            data-i18n-attr="attr:key;..."  → attributes
   Deep link: ?lang=en | ?lang=es | ?lang=pt
   Dictionaries live in js/i18n/<lang>.js
   ───────────────────────────────────────────────────────────── */
(function () {
  var STORAGE_KEY = 'gf-lang';
  var DEFAULT = 'pt';
  var HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
  var OG_LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
  var dict = window.I18N || {};
  var current = DEFAULT;

  function t(key) {
    var d = dict[current] || {};
    if (d[key] != null) return d[key];
    if (dict[DEFAULT] && dict[DEFAULT][key] != null) return dict[DEFAULT][key];
    return key;
  }

  function apply(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });
    root.querySelectorAll('[data-whatsapp]').forEach(function (a) {
      a.href = 'https://wa.me/' + a.getAttribute('data-whatsapp') + '?text=' + encodeURIComponent(t('contact.whatsappMsg'));
    });
  }

  function setLang(lang, persist) {
    if (!dict[lang]) lang = DEFAULT;
    current = lang;

    document.documentElement.lang = HTML_LANG[lang];
    document.title = t('meta.title');
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('meta.description'));
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(function (m) {
      m.setAttribute('content', t('meta.title'));
    });
    document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach(function (m) {
      m.setAttribute('content', t('meta.description'));
    });
    var locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.setAttribute('content', OG_LOCALE[lang]);

    apply(document);

    document.querySelectorAll('.lang button[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    if (persist !== false) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage may be blocked */ }
    }
    document.dispatchEvent(new CustomEvent('gf:languagechange', { detail: { lang: lang } }));
  }

  function initialLang() {
    try {
      var fromUrl = new URLSearchParams(location.search).get('lang');
      if (fromUrl && dict[fromUrl]) return { lang: fromUrl, persist: true };
    } catch (e) { /* ignore */ }
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && dict[stored]) return { lang: stored, persist: false };
    } catch (e) { /* ignore */ }
    return { lang: DEFAULT, persist: false };
  }

  window.GF = window.GF || {};
  window.GF.t = t;
  window.GF.getLang = function () { return current; };
  window.GF.setLang = setLang;

  document.querySelectorAll('.lang button[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });

  var start = initialLang();
  setLang(start.lang, start.persist);
})();
