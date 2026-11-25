# Col

Coluna da Grid: define quantas colunas o bloco ocupa no celular (`sm`, de 4), no tablet (`md`, de 8) e no desktop (`lg`, de 12).

## Quando usar

- Sempre como filha direta de Grid.

## Regras

- Sem valores, ocupa a linha inteira em todos os tamanhos.
- Se só `sm` for dado, o tablet usa o dobro.

## Código — React

```jsx
<Col sm={4} md={4} lg={3}>…</Col>
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-col" style="--sm:4; --md:4; --lg:3">…</div>
```
