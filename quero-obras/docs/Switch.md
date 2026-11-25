# Switch

Liga e desliga uma configuração que vale na hora, sem botão de salvar.

## Quando usar

- Notificações, disponibilidade do profissional, preferências.

## Regras

- O efeito é imediato. Se precisa confirmar, use Checkbox + botão.
- Ligado: trilho azul-estrutura e botão branco.

## Código — React

```jsx
<Switch label="Receber propostas por WhatsApp" checked={on} onChange={e => setOn(e.target.checked)} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<label class="qo-switch"><input type="checkbox" role="switch" checked /><span>Receber propostas por WhatsApp</span></label>
```
