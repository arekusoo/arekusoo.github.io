# Stack

Empilha elementos (em coluna ou em linha) com um espaçamento da escala, sem CSS extra.

## Quando usar

- Qualquer grupo de elementos com espaço regular entre eles.

## Regras

- `gap` usa a escala de espaçamento: 2 = 8px, 3 = 12px, 4 = 16px, 6 = 24px…
- Itens do mesmo grupo: gap 2–3. Grupos diferentes: gap 6 ou mais (proximidade).

## Código — React

```jsx
<Stack gap={3}>…</Stack>
<Stack direction="row" gap={2}>…</Stack>
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-stack" style="gap: var(--space-3)">…</div>
```
