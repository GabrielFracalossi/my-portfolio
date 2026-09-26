# Portfólio · Gabriel Fracalossi

Site estático (HTML, CSS e JavaScript puros, sem build), publicado no GitHub Pages em `gabrielfracalossi.com.br`.

- Idiomas: português (padrão), inglês e espanhol. Link direto: `?lang=en` ou `?lang=es`.
- Temas: escuro (padrão) e claro. A escolha fica salva no navegador.

## Rodando localmente

```bash
python -m http.server 5510
```

Abra `http://localhost:5510`. Abrir o `index.html` direto no navegador também funciona.

## Estrutura

```
index.html            marcação das seções (textos ficam nos dicionários)
css/tokens.css        paleta dos dois temas, tipografia, espaçamentos  ← re-skin aqui
css/base.css          reset, foco, seleção, scrollbar, utilitários
css/components.css    botões, chips, pills, cartão de estatística, cabeçalho de seção
css/sections.css      navegação, hero, sobre, trajetória, Nazario, projetos, stack, contato
js/i18n/pt|en|es.js   todos os textos do site
js/i18n.js            troca de idioma
js/theme.js           troca de tema
js/projects.js        lista de projetos + renderização dos cards
js/main.js            navegação, menu mobile, reveal no scroll
assets/img/           retrato, marca do Vergi e capas dos projetos
```

## Como editar

**Textos.** Cada elemento do `index.html` tem um `data-i18n="chave"`. Edite a chave nos três arquivos de `js/i18n/`. Se faltar uma chave em `en` ou `es`, o site usa o português.

**Projetos.** Edite `js/projects.js` (o primeiro da lista aparece primeiro). Para cada projeto, o título e a descrição ficam em `projects.<id>.role` e `projects.<id>.desc` nos dicionários. Coloque uma captura 16:9 em `assets/img/projects/` e aponte em `shot`. Sem `shot`, o card usa um bloco tipográfico (`glyph` + `variant`).

**Cores e tipografia.** Só em `css/tokens.css`. O tema escuro está em `:root`, o claro em `:root[data-theme='light']`.

**Foto do hero.** `assets/img/gabriel.png` (PNG com fundo transparente, quadrado). Uma foto maior, com pelo menos 1200 px, deixa o hero mais nítido em telas grandes.
