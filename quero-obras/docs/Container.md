# Container

Centraliza o conteúdo, limita a largura a 1200px e aplica as margens laterais de cada tamanho de tela.

## Quando usar

- Em volta de toda a página web ou de cada seção que vai de borda a borda.

## Regras

- Margens: 16px (celular), 24px (600px+), 32px (1024px+). Largura máxima `container-max` de 1200px.

## Código — React

```jsx
<Container>…</Container>
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-container">…</div>
```
