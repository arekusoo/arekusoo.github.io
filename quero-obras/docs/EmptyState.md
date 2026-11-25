# EmptyState

Tela ou área vazia que explica o que vai aparecer ali e oferece o próximo passo.

## Quando usar

- Listas sem itens: nenhum pedido, nenhuma mensagem, busca sem resultado.

## Regras

- Título dizendo o que falta, uma frase dizendo como resolver e um botão para isso.
- Tom acolhedor, sem culpar a pessoa.

## Código — React

```jsx
<EmptyState icon="pedidos" title="Você ainda não tem pedidos"
  text="Descreva sua obra e receba propostas de profissionais verificados."
  action={<Button>solicitar orçamento</Button>} />
```
