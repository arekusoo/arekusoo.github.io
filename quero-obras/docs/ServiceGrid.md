# ServiceGrid

Grade de ServiceTiles: 3 colunas no celular e 6 a partir de 600px.

## Quando usar

- Atalhos de categoria na tela inicial; escolha de serviço no começo do pedido.

## Regras

- 12px entre os tiles (`space-3`). Todos iguais (semelhança) e juntos (proximidade).
- No celular, 3 por linha. Se houver mais de 6 categorias, o último tile vira “Mais”, com o ícone grid.

## Código — React

```jsx
<ServiceGrid onSelect={servico => abrir(servico)} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-servicegrid"><button class="qo-tile">…Pintura</button><button class="qo-tile">…Reforma</button><button class="qo-tile">…Elétrica</button></div>
```
