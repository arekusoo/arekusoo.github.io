# PromoCard

Cartão de destaque com imagem, título, texto e CTA, o “Sua ideia começa aqui” do painel.

## Quando usar

- Um por tela, para puxar a ação principal (pedir orçamento) ou uma campanha.

## Regras

- Imagem à esquerda e texto à direita; botões ocupando a largura toda embaixo (Gestalt: continuidade da leitura).
- Título em Manrope 700 22px na cor azul-forte; texto em tinta-suave 14px.
- O CTA pode ser `primario` (laranja) ou `secundario` (azul, como no painel). Se já houver um primário na tela, use o azul.

## Código — React

```jsx
<PromoCard image={casa} title="Sua ideia começa aqui" text="Encontre profissionais para sua obra."
  primaryLabel="solicitar orçamento" primaryVariant="secundario" onPrimary={pedir}
  secondaryLabel="Ver profissionais" onSecondary={listar} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-card qo-card--destaque"><div class="qo-promo">
  <img class="qo-promo__img" src="casa.jpg" alt="" />
  <div><h2 class="qo-promo__title">Sua ideia começa aqui</h2><p class="qo-promo__text">Encontre profissionais para sua obra.</p></div>
  <div class="qo-promo__actions"><button class="qo-btn qo-btn--secundario qo-btn--block">solicitar orçamento</button><button class="qo-btn qo-btn--link">Ver profissionais</button></div>
</div></div>
```
