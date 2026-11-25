# Tabs

Abas que trocam o conteúdo de uma mesma tela, como pedidos Abertos / Em andamento / Concluídos.

## Quando usar

- De 2 a 4 visões do mesmo tipo de conteúdo.

## Regras

- Ativa: texto azul-estrutura com barra de 3px embaixo.
- Setas ← → do teclado trocam de aba.

## Código — React

```jsx
<Tabs items={["Abertos", "Em andamento", "Concluídos"]} value={aba} onChange={setAba} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-tabs" role="tablist"><button class="qo-tab" role="tab" aria-selected="true">Abertos</button>…</div>
```
