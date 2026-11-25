# SearchField

Busca de serviços com ícone de lupa e botão de limpar, como “Buscar serviço” no painel.

## Quando usar

- Topo da tela inicial e listas longas de profissionais ou pedidos.

## Regras

- Padrão: superfície branca com sombra-1, para parecer uma figura sobre o fundo. `preenchida`: dentro de cartões e barras.
- O placeholder diz o que se busca: “Buscar serviço”, “Buscar profissional”.

## Código — React

```jsx
<SearchField placeholder="Buscar serviço" onSubmit={buscar} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<form role="search" class="qo-search">
  <span class="qo-icon" aria-hidden="true">search</span>
  <input class="qo-field__input" type="search" placeholder="Buscar serviço" aria-label="Buscar serviço" />
</form>
```
