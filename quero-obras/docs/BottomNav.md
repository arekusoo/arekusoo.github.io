# BottomNav

Navegação principal do app no celular, com 3 a 5 destinos.

## Quando usar

- Telas de primeiro nível: Início, Pedidos, Mensagens, Perfil.

## Regras

- Ícone + rótulo sempre visíveis. Ativo: pílula azul-suave, ícone e texto azul-forte em negrito.
- A partir de 1024px, troque por navegação no topo ou na lateral.
- Respeita a área segura do iPhone (`env(safe-area-inset-bottom)`).

## Código — React

```jsx
<BottomNav value={aba} onChange={setAba} items={[
  { icon: 'home', label: 'Início' }, { icon: 'pedidos', label: 'Pedidos' },
  { icon: 'chat', label: 'Mensagens', badge: 2 }, { icon: 'user', label: 'Perfil' }]} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<nav class="qo-navbar" aria-label="Navegação principal">
  <button class="qo-navbar__item" aria-current="page"><span class="qo-navbar__pill">…</span><span>Início</span></button>
  …
</nav>
```
