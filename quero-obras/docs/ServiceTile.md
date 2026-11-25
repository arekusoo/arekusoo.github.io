# ServiceTile

Bloco de categoria com ícone e nome (Pintura, Reforma, Elétrica), do painel “Da marca à interface”.

## Quando usar

- Atalhos para categorias de serviço na tela inicial e para escolher o serviço num pedido.

## Regras

- Mesma forma, tamanho e cor para todos os tiles (Gestalt: semelhança). Função igual, aparência igual.
- Raio de 12px, borda `borda`, ícone de 28px em tinta-leitura e rótulo em Inter 600 14px.
- Selecionado (`selected`): borda azul-estrutura, fundo azul-suave e ícone azul **preenchido**.

## Código — React

```jsx
<ServiceTile icon="pintura" label="Pintura" onClick={() => abrir("pintura")} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<button class="qo-tile"><span class="qo-icon" aria-hidden="true">format_paint</span><span>Pintura</span></button>
<!-- selecionado: aria-pressed="true" e ícone preenchido -->
<button class="qo-tile" aria-pressed="true"><span class="qo-icon qo-icon--filled" aria-hidden="true">construction</span><span>Reforma</span></button>
```
