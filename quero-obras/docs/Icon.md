# Icon

Ícones de traço (2px, grade 24×24, pontas arredondadas) desenhados para a Quero Obras — os mesmos dos tiles Pintura, Reforma e Elétrica do painel.

## Quando usar

- Sempre ao lado de um texto, ou dentro de um IconButton com `label`.
- Para reforçar a categoria de um serviço (pintura, reforma, elétrica, hidráulica).

## Regras

- Tamanhos: `icone-sm` 20px (em botões e campos), `icone-md` 24px (barras e navegação), `icone-lg` 28px (tiles de serviço).
- Cor herdada do texto (`currentColor`): tinta-leitura por padrão, azul-estrutura quando ativo.
- Ícone sozinho precisa de `label` (lido pelo leitor de tela); ao lado de texto fica decorativo.

## Propriedades

Nomes disponíveis: home, search, pintura, reforma, eletrica, hidraulica, grid, chat, bell, user, check, check-circle, shield, chevron-right, chevron-left, chevron-down, arrow-left, close, plus, star, map-pin, calendar, clock, filter, heart, menu, more, pedidos, image, info, alert, camera, phone, edit, trash, send.

## Código — React

```jsx
import { Icon } from './queroobras';

<Icon name="pintura" />
<Icon name="eletrica" size={28} />
<Icon name="bell" label="Notificações" />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<!-- Copie o <svg> do ícone; a cor vem de "color" -->
<svg class="qo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>
</svg>
```
