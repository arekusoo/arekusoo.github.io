# Radio

Escolha única dentro de um grupo pequeno (até 5 opções). Com mais opções, use Select.

## Quando usar

- Prazo da obra, forma de contato, tipo de imóvel.

## Regras

- Todas as opções visíveis, empilhadas, com 12px entre elas (Gestalt: proximidade).
- Sempre com uma opção marcada por padrão, quando fizer sentido.

## Código — React

```jsx
<Radio name="prazo" value="mes" label="Este mês" checked={prazo === 'mes'} onChange={e => setPrazo(e.target.value)} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<label class="qo-check qo-check--radio">
  <input type="radio" name="prazo" checked />
  <span class="qo-check__text">Este mês</span>
</label>
```
