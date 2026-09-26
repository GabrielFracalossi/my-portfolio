/* ─────────────────────────────────────────────────────────────
   PROJECTS — add, remove or reorder projects here (newest first).
   Texts (role + description) live in js/i18n/*.js under
   `projects.<id>.role` and `projects.<id>.desc`.

   Cover of each card = gradient tile + icon badge:
     icon:    id of a symbol in the sprite at the top of index.html (i-p-*)
     logo:    (optional) path to a logo image; wins over `icon`. Not used by default.
     variant: gradient of the tile (a–e, v) — see css/sections.css
   ───────────────────────────────────────────────────────────── */
window.PROJECTS = [
  {
    id: 'vergi',
    name: 'Vergi',
    icon: 'i-p-calendar',
    variant: 'v',
    domain: 'vergi.sistemasneo.com.br',
    href: 'https://vergi.sistemasneo.com.br/',
    tags: ['fullstack', 'mobile', 'integrations'],
    tech: ['.NET 10', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Flutter Web', 'Stripe', 'Azure']
  },
  {
    id: 'cozinha',
    name: 'Cozinha Inteligente',
    icon: 'i-p-plate',
    variant: 'c',
    domain: 'receitas.sistemasneo.com.br',
    href: 'https://receitas.sistemasneo.com.br/',
    tags: ['fullstack', 'mobile', 'integrations'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Flutter', 'Asaas API', 'OpenAI API']
  },
  {
    id: 'estaocasando',
    name: 'EstãoCasando.com',
    icon: 'i-p-ring',
    variant: 'b',
    domain: 'www.estaocasando.com',
    href: 'https://www.estaocasando.com/',
    tags: ['fullstack', 'solo', 'integrations'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'HTML/CSS/JS', 'StarkBank API']
  },
  {
    id: 'nazario',
    name: 'Nazario Sistemas',
    icon: 'i-p-code',
    variant: 'a',
    domain: 'www.jnazario.com',
    href: 'https://www.jnazario.com/',
    tags: ['frontend', 'backend'],
    tech: ['HTML', 'CSS', 'JavaScript', '.NET']
  },
  {
    id: 'powerembedded',
    name: 'Power Embedded',
    icon: 'i-p-chart',
    variant: 'e',
    domain: 'powerembedded.com.br',
    href: 'https://powerembedded.com.br/',
    tags: ['backend', 'frontend', 'powerbi'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Azure Functions', 'JavaScript']
  },
  {
    id: 'tecnocryo',
    name: 'Tecnocryo',
    icon: 'i-p-snow',
    variant: 'c',
    domain: 'www.tecnocryo.com.br',
    href: 'https://www.tecnocryo.com.br/',
    tags: ['frontend', 'backend'],
    tech: ['Vue.js', 'HTML', 'CSS', 'JavaScript', '.NET']
  },
  {
    id: 'financeiro',
    name: 'Sistema Financeiro',
    icon: 'i-p-dollar',
    variant: 'd',
    domain: 'financeiro.sistemasneo.com.br',
    href: 'https://financeiro.sistemasneo.com.br',
    tags: ['backend', 'frontend', 'integrations'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'StarkBank API']
  },
  {
    id: 'minhaprimeiraapi',
    name: 'MinhaPrimeiraAPI',
    icon: 'i-p-braces',
    variant: 'a',
    domain: 'github.com/GabrielFracalossi',
    href: 'https://github.com/GabrielFracalossi/MinhaPrimeiraApi',
    github: true,
    tags: ['backend', 'solo', 'didactic'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL']
  },
  {
    id: 'academicos',
    name: 'Projetos Acadêmicos',
    icon: 'i-p-cap',
    variant: 'b',
    domain: 'github.com/GabrielFracalossi',
    href: 'https://github.com/GabrielFracalossi',
    github: true,
    tags: ['fullstack', 'academic'],
    tech: ['Node.js', 'Flutter', 'HTML/CSS/JS', 'APIs REST']
  }
];

/* ── Renderer ─────────────────────────────────────────────── */
(function renderProjects() {
  var grid = document.getElementById('projectsGrid');
  if (!grid || !window.PROJECTS) return;

  var arrow = '<svg class="icon icon--stroke" aria-hidden="true"><use href="#i-arrow-up-right"/></svg>';

  grid.innerHTML = window.PROJECTS.map(function (p) {
    var tags = p.tags
      .map(function (t) { return '<span class="tag" data-i18n="tag.' + t + '"></span>'; })
      .join('');
    var tech = p.tech.map(function (t) { return '<li>' + t + '</li>'; }).join('');

    var mark = p.logo
      ? '<img class="project__logo" src="' + p.logo + '" alt="" width="279" height="512" loading="lazy" decoding="async">'
      : '<svg class="icon icon--stroke project__icon" aria-hidden="true"><use href="#' + p.icon + '"/></svg>';

    return (
      '<article class="project" id="project-' + p.id + '" data-reveal>' +
        '<div class="project__thumb project__thumb--' + p.variant + '">' +
          '<svg class="project__arches" viewBox="0 0 400 500" aria-hidden="true"><use href="#i-arches"/></svg>' +
          '<span class="project__badge">' + mark + '</span>' +
          '<div class="project__tags">' + tags + '</div>' +
          '<span class="project__domain">' + p.domain + '</span>' +
        '</div>' +
        '<div class="project__body">' +
          '<h3 class="project__name" id="project-' + p.id + '-name">' + p.name + '</h3>' +
          '<p class="project__role" data-i18n="projects.' + p.id + '.role"></p>' +
          '<p class="project__desc" data-i18n="projects.' + p.id + '.desc"></p>' +
          '<ul class="project__tech">' + tech + '</ul>' +
          '<a class="project__link" href="' + p.href + '" target="_blank" rel="noopener noreferrer" ' +
            'id="project-' + p.id + '-link" aria-labelledby="project-' + p.id + '-name project-' + p.id + '-link">' +
            '<span class="label" data-i18n="' + (p.github ? 'projects.github' : 'projects.visit') + '"></span>' +
            arrow +
            '<span class="sr-only" data-i18n="a11y.newTab"></span>' +
          '</a>' +
        '</div>' +
      '</article>'
    );
  }).join('');

  // Cards enter in staggered columns, never in one identical wave
  grid.querySelectorAll('.project').forEach(function (card, i) {
    card.style.setProperty('--reveal-delay', (i % 3) * 90 + 'ms');
  });
})();
