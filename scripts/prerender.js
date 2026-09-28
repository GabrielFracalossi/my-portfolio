#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────
   prerender.js — bakes the default-language (pt) copy and the
   project cards directly into index.html.

   Why: the site's text lives in js/i18n/*.js and is written into
   the page by JavaScript on load. Most AI crawlers (GPTBot,
   ClaudeBot, PerplexityBot, CCBot…) fetch the raw HTML and do not
   run JavaScript, so without this step they would see an almost
   empty page. This script makes index.html carry the real
   Portuguese content by itself; the browser still re-renders
   everything on load (for the language switch and for the project
   cards), so nothing here changes what a visitor sees — only what
   a plain HTTP fetch sees.

   Run it after editing js/projects.js or js/i18n/pt.js, before
   publishing:

     node scripts/prerender.js

   No dependencies, no build step for the site itself — this is a
   standalone maintenance script.
   ───────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const INDEX = path.join(ROOT, 'index.html');

// Load the pt dictionary and the project list by executing the real
// source files in a minimal `window` shim — the single source of
// truth stays js/i18n/pt.js and js/projects.js.
global.window = {};
require(path.join(ROOT, 'js/i18n/pt.js'));
require(path.join(ROOT, 'js/projects.js'));

const dict = global.window.I18N.pt;
const projects = global.window.PROJECTS;
const buildProjectCard = global.window.buildProjectCard;

let missing = 0;
function warnMissing(key) {
  missing++;
  console.warn('prerender: missing pt key "' + key + '"');
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, '&quot;');
}

let html = fs.readFileSync(INDEX, 'utf8');

// 1. Project cards — same markup the browser renders, data-i18n
//    placeholders included; they get filled by pass 2 below.
const cardsHtml = projects.map(buildProjectCard).join('');
const cardsRe = /(<!-- prerender:projects:start -->)[\s\S]*?(<!-- prerender:projects:end -->)/;
if (!cardsRe.test(html)) throw new Error('prerender: projects markers not found in index.html');
html = html.replace(cardsRe, '$1' + cardsHtml + '$2');

// 2. data-i18n text content: <tag ...data-i18n="key"...>INNER</tag>
html = html.replace(
  /<([a-zA-Z0-9]+)([^>]*\bdata-i18n="([a-zA-Z0-9_.]+)"[^>]*)>([^<]*)<\/\1>/g,
  function (whole, tag, attrs, key, inner) {
    if (!(key in dict)) { warnMissing(key); return whole; }
    return '<' + tag + attrs + '>' + escapeHtml(dict[key]) + '</' + tag + '>';
  }
);

// 3. data-i18n-attr="attr:key;attr2:key2" — sets/replaces those
//    attributes on the same tag with the pt text.
html = html.replace(/<[a-zA-Z0-9]+\b[^>]*\bdata-i18n-attr="([^"]+)"[^>]*>/g, function (tagStr, pairs) {
  let out = tagStr;
  pairs.split(';').forEach(function (pair) {
    const parts = pair.split(':');
    if (parts.length !== 2) return;
    const attr = parts[0].trim();
    const key = parts[1].trim();
    if (!(key in dict)) { warnMissing(key); return; }
    const value = escapeAttr(dict[key]);
    const attrRe = new RegExp('(\\s' + attr + '=")[^"]*(")');
    out = attrRe.test(out)
      ? out.replace(attrRe, '$1' + value + '$2')
      : out.replace(/^<([a-zA-Z0-9]+)/, '<$1 ' + attr + '="' + value + '"');
  });
  return out;
});

// 4. Title and meta tags that aren't data-i18n elements (i18n.js updates
//    these directly by selector at runtime, so they need their own pass
//    here instead of being caught by pass 2).
function syncText(re, key) {
  if (!(key in dict)) { warnMissing(key); return; }
  const value = escapeHtml(dict[key]);
  if (!re.test(html)) { console.warn('prerender: tag not found for "' + key + '"'); return; }
  html = html.replace(re, '$1' + value + '$2');
}
function syncAttr(re, key) {
  if (!(key in dict)) { warnMissing(key); return; }
  const value = escapeAttr(dict[key]);
  if (!re.test(html)) { console.warn('prerender: tag not found for "' + key + '"'); return; }
  html = html.replace(re, '$1' + value + '$2');
}
syncText(/(<title>)[^<]*(<\/title>)/, 'meta.title');
syncAttr(/(<meta name="description" content=")[^"]*("\s*\/>)/, 'meta.description');
syncAttr(/(<meta property="og:title" content=")[^"]*("\s*\/>)/, 'meta.title');
syncAttr(/(<meta property="og:description" content=")[^"]*("\s*\/>)/, 'meta.description');

// 5. Project list as structured data (schema.org ItemList/CreativeWork),
//    regenerated from the same source of truth as the cards above.
const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projetos de Gabriel Fracalossi',
  itemListElement: projects.map(function (p, i) {
    return {
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': p.github ? 'SoftwareSourceCode' : 'CreativeWork',
        name: p.name,
        url: p.href,
        description: dict['projects.' + p.id + '.desc'] || '',
        keywords: p.tech.join(', '),
        creator: { '@id': 'https://gabrielfracalossi.com.br/#person' }
      }
    };
  })
};
const jsonldBlock =
  '<script type="application/ld+json">\n' + JSON.stringify(itemList, null, 2) + '\n  </script>';
const jsonldRe = /(<!-- prerender:projects-jsonld:start -->\s*)<script type="application\/ld\+json">[\s\S]*?<\/script>(\s*<!-- prerender:projects-jsonld:end -->)/;
if (!jsonldRe.test(html)) throw new Error('prerender: projects-jsonld markers not found in index.html');
html = html.replace(jsonldRe, '$1' + jsonldBlock + '$2');

fs.writeFileSync(INDEX, html);
console.log(
  'prerender: wrote ' + projects.length + ' project cards and filled data-i18n text/attrs' +
  (missing ? ' (' + missing + ' missing keys — see warnings above)' : '') + '.'
);
