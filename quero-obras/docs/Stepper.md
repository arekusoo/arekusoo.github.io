# Stepper

Linha do tempo do pedido: Pedido → Propostas → Escolha, como no painel (Gestalt: continuidade).

## Quando usar

- Acompanhar em que etapa está um pedido de orçamento.
- Formulários de várias etapas.

## Regras

- De 3 a 5 etapas, com rótulos de uma palavra.
- Etapas feitas: bolinha azul com check e linha azul. Atual: anel azul com halo. Futuras: cinza.
- A etapa atual também fica em negrito, para não depender só da cor.

## Código — React

```jsx
<Stepper steps={["Pedido", "Propostas", "Escolha"]} current={1} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<ol class="qo-stepper">
  <li class="qo-step qo-step--feito"><span class="qo-step__dot">✓</span><span class="qo-step__label">Pedido</span></li>
  <li class="qo-step qo-step--atual" aria-current="step"><span class="qo-step__dot"></span><span class="qo-step__label">Propostas</span></li>
  <li class="qo-step"><span class="qo-step__dot"></span><span class="qo-step__label">Escolha</span></li>
</ol>
```
