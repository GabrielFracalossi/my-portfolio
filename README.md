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
assets/img/           retrato, as imagens opcionais abaixo
```

## Como editar

**Textos.** Cada elemento do `index.html` tem um `data-i18n="chave"`. Edite a chave nos três arquivos de `js/i18n/`. Se faltar uma chave em `en` ou `es`, o site usa o português.

**Projetos.** Edite `js/projects.js` (o primeiro da lista aparece primeiro). Para cada projeto, o título e a descrição ficam em `projects.<id>.role` e `projects.<id>.desc` nos dicionários. A capa é um bloco de cor com um ícone: escolha um dos ícones `i-p-*` do sprite no topo do `index.html` (`icon`) ou, se quiser uma logo no lugar do ícone, aponte para ela em `logo` (ex.: `logo: 'assets/img/minha-logo.png'`).

**Imagens que você ainda pode adicionar (sem mexer no código).** Basta salvar o arquivo com este nome e ele aparece no lugar do espaço reservado:

- `assets/img/about.png`: sua foto na seção Sobre mim (PNG com fundo transparente fica melhor; ela é ancorada na base do card).
- `assets/img/nazario-logo.png`: a logo da Nazario Sistemas. Use uma versão que funcione bem sobre fundo escuro e claro, ou um PNG com fundo próprio.

**Palavra grande do hero.** É a chave `hero.ghost` em cada idioma; o tamanho se ajusta sozinho ao texto.

**Cores e tipografia.** Só em `css/tokens.css`. O tema escuro está em `:root`, o claro em `:root[data-theme='light']`.

**Foto do hero.** `assets/img/gabriel.png` (PNG com fundo transparente, quadrado). Uma foto maior, com pelo menos 1200 px, deixa o hero mais nítido em telas grandes.
