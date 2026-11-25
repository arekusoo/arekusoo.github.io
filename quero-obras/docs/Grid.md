# Grid

Grade responsiva de colunas: 4 no celular, 8 no tablet (600px+) e 12 no desktop (1024px+). Use com Col e Container.

## Quando usar

- Montar qualquer layout de página que muda de forma entre celular, tablet e desktop.

## Regras

- Gutter de 16px (celular e tablet) e 24px (desktop). Margens laterais de 16 / 24 / 32px (Container).
- Col recebe quantas colunas ocupa em cada tamanho: `sm` de 4, `md` de 8, `lg` de 12.
- Mobile first: pense primeiro no celular e diga o que muda nos tamanhos maiores.

## Código — React

```jsx
<Container>
  <Grid>
    <Col sm={4} md={8} lg={8}>Conteúdo principal</Col>
    <Col sm={4} md={8} lg={4}>Barra lateral</Col>
  </Grid>
</Container>
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-container"><div class="qo-grid">
  <div class="qo-col" style="--sm:4; --md:8; --lg:8">Conteúdo principal</div>
  <div class="qo-col" style="--sm:4; --md:8; --lg:4">Barra lateral</div>
</div></div>
```
