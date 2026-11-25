# Avatar

Foto ou iniciais de uma pessoa: profissional, cliente ou usuário logado.

## Quando usar

- Cartões de profissional, listas de propostas, conversas e topo do perfil.

## Regras

- Tamanhos: sm 32px (listas densas), md 40px (padrão), lg 56px (cartões e perfil).
- Sem foto, mostra as iniciais sobre azul-suave, cta-suave ou ambar-suave, conforme o nome.
- Sempre redondo (`radius-full`).

## Código — React

```jsx
<Avatar name="Marcos Ribeiro" size="lg" />
<Avatar name="Ana Souza" src="/fotos/ana.jpg" />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<span class="qo-avatar qo-avatar--lg">MR</span>
```
