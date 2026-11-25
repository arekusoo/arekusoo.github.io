# Toast

Aviso curto que aparece embaixo da tela e some sozinho, com uma ação opcional (ex.: Desfazer).

## Quando usar

- Confirmar algo que acabou de acontecer: “Pedido enviado”, “Proposta salva”.

## Regras

- Fundo tinta-leitura (escuro) para se destacar de qualquer tela; no máximo uma ação.
- Some em 4–6 segundos. Erros que bloqueiam algo ficam na tela até a pessoa agir, dentro do próprio formulário.

## Código — React

```jsx
<Toast tone="sucesso" message="Pedido enviado. Você recebe propostas em até 24 h." actionLabel="Ver pedido" onAction={abrir} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-toast qo-toast--sucesso" role="status"><span class="qo-toast__msg">Pedido enviado.</span><button class="qo-toast__action">Ver pedido</button></div>
```
