# ListItem

Linha de lista com elemento à esquerda, título, subtítulo e informação ou seta à direita.

## Quando usar

- Pedidos, propostas, notificações, configurações.

## Regras

- Altura mínima de 64px. Título em Inter 600 16px e subtítulo em tinta-suave 14px; textos longos são cortados com reticências.
- Com `onClick` vira botão e ganha a cor de hover. Use `chevron` quando abre outra tela.

## Código — React

```jsx
<ListItem leadingIcon="pintura" title="Pintura · Apartamento" subtitle="3 propostas recebidas" trailing="Hoje" chevron onClick={abrir} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<button class="qo-listitem">
  <span class="qo-listitem__lead qo-listitem__lead--box"><span class="qo-icon" aria-hidden="true">format_paint</span></span>
  <span class="qo-listitem__text"><span class="qo-listitem__title">Pintura · Apartamento</span><span class="qo-listitem__sub">3 propostas recebidas</span></span>
  <span class="qo-listitem__trail">Hoje</span>
</button>
```
