# Divider

Linha de 1px na cor `borda` que separa itens de uma lista ou grupos dentro de um cartão.

## Quando usar

- Entre itens de lista e entre seções de um mesmo cartão.

## Regras

- Prefira espaço (Gestalt: proximidade) a linhas. Use divisor só quando o espaço não bastar.
- `inset` recua 16px dos dois lados, para listas dentro de cartões.

## Código — React

```jsx
<Divider />
<Divider inset />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<hr class="qo-divider" />
```
