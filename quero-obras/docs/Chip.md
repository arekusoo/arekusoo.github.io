# Chip

Filtro compacto e liga/desliga, em formato de pílula.

## Quando usar

- Filtros de lista (Verificados, Melhor avaliados, Perto de mim) e escolhas que podem ser removidas.

## Regras

- Ativo: fundo azul-suave, borda azul-estrutura e um check.
- Em fila horizontal com 8px entre eles; no celular a fila rola de lado.

## Código — React

```jsx
<Chip selected={so} onClick={() => setSo(!so)}>Verificados</Chip>
<Chip icon="map-pin">Perto de mim</Chip>
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<button class="qo-chip" aria-pressed="true">✓ Verificados</button>
```
