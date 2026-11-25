# ProfessionalCard

Cartão de um profissional com foto, especialidade, selo Verificado, nota, cidade, tempo de resposta e ações.

## Quando usar

- Resultados de busca, listas de profissionais e propostas recebidas.

## Regras

- Ordem de leitura fixa: quem é → por que confiar (selo e nota) → onde e quando → o que fazer.
- Duas ações: “Ver perfil” (contorno) e “Pedir orçamento” (primário).
- Nas grades: 1 coluna no celular, 2 no tablet, 3 no desktop.

## Código — React

```jsx
<ProfessionalCard name="Marcos Ribeiro" role="Pintor residencial" verified rating={4.9} reviews={126}
  city="São Paulo · 3 km" responseTime="Responde em 1 h" tags={['Pintura', 'Textura']} onQuote={pedir} />
```
