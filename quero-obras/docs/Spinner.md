# Spinner

Indicador de carregamento circular em azul-estrutura.

## Quando usar

- Carregamentos curtos (menos de 3 segundos) e dentro de botões com `loading`.

## Regras

- Em listas e telas, prefira esqueletos com a forma do conteúdo.
- Use `inverse` sobre fundos escuros ou coloridos.

## Código — React

```jsx
<Spinner />
<Spinner size="sm" />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<span class="qo-spinner" role="status" aria-label="Carregando"></span>
```
