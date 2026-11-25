# Rating

Nota de avaliação de 0 a 5 com estrelas em âmbar-apoio.

## Quando usar

- Cartões de profissional, avaliações e propostas.

## Regras

- O número fica sempre visível ao lado das estrelas (a cor sozinha não basta).
- `compact` mostra uma estrela e o número, para cartões e listas.
- Formato brasileiro: vírgula decimal (4,8).

## Código — React

```jsx
<Rating value={4.8} count={126} />
<Rating value={4.8} count={126} compact />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<span class="qo-rating" role="img" aria-label="Nota 4,8 de 5">★ <span class="qo-rating__value">4,8</span><span class="qo-rating__count">(126)</span></span>
```
