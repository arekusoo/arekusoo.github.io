# Quero Obras — Design System

Manual navegável: **https://arekusoo.github.io/quero-obras/**

Design system da Quero Obras, criado a partir do painel semântico da marca e organizado por design atômico (tokens → átomos → moléculas → organismos → templates → páginas).

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `tokens.json` / `tokens.css` | Cores, tipografia, espaçamento, raios, sombras, grade e breakpoints |
| `components/bundle.js` | 36 componentes React 18 (expostos em `window.QueroObras`) |
| `components/bundle.css` | Estilos dos componentes (classes `qo-*`, funcionam sem React) |
| `components/index.d.ts` | Tipos e propriedades de cada componente |
| `docs/*.md` | Guia de uso e código de cada componente |
| `previews/*.html` | Visualizações ao vivo |

## Uso rápido

```html
<link rel="stylesheet" href="https://arekusoo.github.io/quero-obras/tokens.css">
<link rel="stylesheet" href="https://arekusoo.github.io/quero-obras/components/bundle.css">
<button class="qo-btn qo-btn--primario">solicitar orçamento</button>
```

As cores são aproximadas do painel, e o logo e as imagens são recortes em baixa resolução, só para referência.
