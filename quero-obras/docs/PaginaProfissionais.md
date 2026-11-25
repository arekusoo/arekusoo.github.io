# Página · Profissionais (web responsiva)

Lista de profissionais na versão web, mostrando a grade responsiva: os cartões ocupam 4 de 12 colunas no desktop (3 por linha), 4 de 8 no tablet (2 por linha) e a largura toda no celular.

## Quando usar

- Referência para páginas web e para telas de tablet.

## Regras

- Topo com logo, busca e o CTA primário; título da página em Manrope 700 32px.
- Filtros em chips logo acima dos resultados (proximidade).
- Cartões com a mesma altura de leitura e ações no rodapé (semelhança + continuidade).

## Código — React

```jsx
<Container>
  <Grid>
    <Col sm={4} md={8} lg={12}><h1>Profissionais perto de você</h1></Col>
    {profissionais.map(p => (
      <Col key={p.id} sm={4} md={4} lg={4}><ProfessionalCard {...p} /></Col>
    ))}
  </Grid>
</Container>
```
