# Badge

Selo curto de status, como o “Verificado” do painel. Também serve de contador de notificações.

## Quando usar

- Status de um profissional ou de um pedido: Verificado, Novo, Aguardando, Recusado.
- Contador sobre ícones (sino, navegação).

## Regras

- Uma ou duas palavras, com inicial maiúscula.
- A cor tem significado: sucesso = verificado/concluído, marca = novidade, info = categoria, aviso = pendente, erro = problema. Nunca decorativa.
- Sempre `radius-full`, 24px de altura, Inter 600 12px.

## Propriedades

`tone`: neutro · sucesso · marca · info · aviso · erro · `icon` · `count`

## Código — React

```jsx
<Badge tone="sucesso" icon="verificado" iconFilled>Verificado</Badge>
<Badge tone="aviso">Aguardando</Badge>
<Badge count={3} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<span class="qo-badge qo-badge--sucesso"><span class="qo-icon qo-icon--filled">verified</span> Verificado</span>
<span class="qo-badge qo-badge--aviso">Aguardando</span>
<span class="qo-badge qo-badge--count">3</span>
```
