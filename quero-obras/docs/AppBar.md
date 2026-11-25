# AppBar

Barra do topo da tela: logo ou título, botão voltar e ações.

## Quando usar

- Tela inicial: logo à esquerda e ações (notificações, perfil).
- Telas internas: voltar + título, com `surface` (branca, com borda).

## Regras

- Altura de 64px. Título em Manrope 700 18px.
- No máximo 2 ações; o resto vai no menu “mais”.

## Código — React

```jsx
<AppBar logo="/logo-quero-obras.png" actions={[{ icon: 'bell', label: 'Notificações', badge: 2 }]} />
<AppBar surface title="Solicitar orçamento" onBack={() => history.back()} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<header class="qo-appbar qo-appbar--surface">
  <button class="qo-iconbtn" aria-label="Voltar">…</button>
  <h1 class="qo-appbar__title">Solicitar orçamento</h1>
</header>
```
