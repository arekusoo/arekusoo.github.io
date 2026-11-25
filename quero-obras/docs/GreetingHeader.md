# GreetingHeader

Saudação de abertura da tela inicial: “Olá! Vamos transformar?” com a pergunta-guia e um selo opcional.

## Quando usar

- Topo da tela inicial, acima da busca.

## Regras

- Título em Manrope 700 28px no celular e 32px a partir de 600px.
- Subtítulo em forma de pergunta, conduzindo à próxima ação (“Qual serviço você precisa?”).

## Código — React

```jsx
<GreetingHeader title="Olá! Vamos transformar?" subtitle="Qual serviço você precisa?"
  badge={<Badge tone="sucesso" icon="verificado" iconFilled>Verificado</Badge>} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-greeting"><div class="qo-greeting__text">
  <h1 class="qo-greeting__title">Olá! Vamos transformar?</h1>
  <p class="qo-greeting__sub">Qual serviço você precisa?</p>
</div><span class="qo-badge qo-badge--sucesso">Verificado</span></div>
```
