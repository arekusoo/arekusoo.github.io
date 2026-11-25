# IconButton

Botão só com ícone, para ações recorrentes em barras: voltar, notificações, favoritar, mais opções.

## Quando usar

- Barras do topo, cartões e campos.

## Regras

- `label` é obrigatório: vira o nome lido pelo leitor de tela e a dica ao passar o mouse.
- Área de toque de 48×48px, mesmo com ícone de 24px.
- `badge` mostra um contador.

## Código — React

```jsx
<IconButton icon="bell" label="Notificações" badge={2} />
<IconButton icon="heart" label="Favoritar" variant="contorno" />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<button class="qo-iconbtn" aria-label="Notificações"><svg class="qo-icon">…</svg></button>
```
