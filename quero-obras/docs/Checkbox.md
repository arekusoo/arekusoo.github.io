# Checkbox

Caixa de seleção para escolher várias opções independentes ou aceitar algo.

## Quando usar

- Filtros com várias escolhas, preferências e aceite de termos.

## Regras

- Rótulo à direita, clicável; área de toque de 48px.
- Marcado: fundo azul-estrutura com check branco. Borda em repouso: borda-forte (3:1).
- `description` adiciona uma linha de apoio em tinta-suave.

## Código — React

```jsx
const [ok, setOk] = useState(false);
<Checkbox label="Quero enviar fotos depois" checked={ok} onChange={e => setOk(e.target.checked)} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<label class="qo-check">
  <input type="checkbox" checked />
  <span class="qo-check__text">Quero enviar fotos depois</span>
</label>
```
