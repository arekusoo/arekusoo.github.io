# Card

Superfície branca com raio de 20px que agrupa um conteúdo: a “figura” sobre o fundo base-respiro.

## Quando usar

- Qualquer bloco de conteúdo relacionado: resumo do pedido, proposta, dados do imóvel.

## Regras

- Raio de 20px (`radius-lg`) e padding de 20px (`space-5`).
- `elevado` (sombra-1) é o padrão; `contorno` em listas densas; `destaque` (sombra-2) para o cartão principal da tela.
- Com `onClick`, o cartão inteiro é clicável e ganha foco de teclado.

## Código — React

```jsx
<Card>…</Card>
<Card variant="contorno" onClick={abrir}>…</Card>
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-card qo-card--elevado qo-card__pad">…</div>
```
