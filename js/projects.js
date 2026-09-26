/* ─────────────────────────────────────────────────────────────
   PROJECTS — add, remove or reorder projects here (newest first).
   Texts (role + description) live in js/i18n/*.js under
   `projects.<id>.role` and `projects.<id>.desc`.
   shot: cover screenshot (16:9). Without it a typographic tile is drawn
   from `glyph` + `variant` (a–e, gradients in css/sections.css).
   ───────────────────────────────────────────────────────────── */
window.PROJECTS = [
  {
    id: 'vergi',
    name: 'Vergi',
    featured: true,
    domain: 'vergi.sistemasneo.com.br',
    href: 'https://vergi.sistemasneo.com.br/',
    tags: ['product', 'fullstack', 'integrations'],
    tech: ['.NET 10', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Flutter Web', 'Stripe', 'Azure']
  },
  {
    id: 'cozinha',
    shot: 'assets/img/projects/cozinha.jpg',
    name: 'Cozinha Inteligente',
    glyph: 'CI',
    variant: 'c',
    domain: 'receitas.sistemasneo.com.br',
    href: 'https://receitas.sistemasneo.com.br/',
    tags: ['fullstack', 'integrations'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Flutter', 'Asaas API', 'OpenAI API']
  },
  {
    id: 'estaocasando',
    shot: 'assets/img/projects/estaocasando.jpg',
    name: 'EstãoCasando.com',
    glyph: 'EC',
    variant: 'b',
    domain: 'www.estaocasando.com',
    href: 'https://www.estaocasando.com/',
    tags: ['fullstack', 'solo', 'integrations'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'HTML/CSS/JS', 'StarkBank API']
  },
  {
    id: 'nazario',
    shot: 'assets/img/projects/nazario.jpg',
    name: 'Nazario Sistemas',
    glyph: 'NS',
    variant: 'a',
    domain: 'www.jnazario.com',
    href: 'https://www.jnazario.com/',
    tags: ['frontend', 'backend'],
    tech: ['HTML', 'CSS', 'JavaScript', '.NET']
  },
  {
    id: 'powerembedded',
    shot: 'assets/img/projects/powerembedded.jpg',
    name: 'Power Embedded',
    glyph: 'PE',
    variant: 'e',
    domain: 'powerembedded.com.br',
    href: 'https://powerembedded.com.br/',
    tags: ['backend', 'frontend', 'powerbi'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Azure Functions', 'JavaScript']
  },
  {
    id: 'tecnocryo',
    shot: 'assets/img/projects/tecnocryo.jpg',
    name: 'Tecnocryo',
    glyph: 'TC',
    variant: 'c',
    domain: 'www.tecnocryo.com.br',
    href: 'https://www.tecnocryo.com.br/',
    tags: ['frontend', 'backend'],
    tech: ['Vue.js', 'HTML', 'CSS', 'JavaScript', '.NET']
  },
  {
    id: 'financeiro',
    name: 'Sistema Financeiro',
    glyph: 'SF',
    variant: 'd',
    domain: 'financeiro.sistemasneo.com.br',
    href: 'https://financeiro.sistemasneo.com.br',
    tags: ['backend', 'frontend', 'integrations'],
    tech: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'StarkBank API']
  },
  {
    id: 'minhaprimeiraapi',
    name: 'MinhaPrimeiraAPI',
    glyph: 'API',
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
    glyph: 'UV',
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

    var thumb = p.featured
      ? '<img class="project__logo project__logo--dark" src="assets/img/vergi-wordmark-dark.png" alt="" width="1000" height="407" loading="lazy" decoding="async">' +
        '<img class="project__logo project__logo--light" src="assets/img/vergi-wordmark-light.png" alt="" width="1000" height="407" loading="lazy" decoding="async">'
      : p.shot
        ? '<img class="project__shot" src="' + p.shot + '" alt="" width="960" height="540" loading="lazy" decoding="async">'
        : '<span class="project__glyph" aria-hidden="true">' + p.glyph + '</span>';

    var thumbClass = p.featured ? 'vergi' : p.variant;

    return (
      '<article class="project' + (p.featured ? ' project--featured' : '') + '" id="project-' + p.id + '" data-reveal>' +
        '<div class="project__thumb project__thumb--' + thumbClass + '">' +
          thumb +
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

  // Cards enter in pairs, never in one identical wave
  grid.querySelectorAll('.project').forEach(function (card, i) {
    card.style.setProperty('--reveal-delay', (i % 2) * 90 + 'ms');
  });
})();
