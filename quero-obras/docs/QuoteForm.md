# QuoteForm

Formulário completo de pedido de orçamento: serviço, cidade, descrição, prazo e fotos.

## Quando usar

- Fluxo de “solicitar orçamento”, em tela cheia ou dentro de um cartão no desktop.

## Regras

- Campos agrupados por assunto em blocos com título (Gestalt: proximidade). No celular, Serviço e Cidade empilham; a partir de 600px ficam lado a lado.
- Valida ao enviar e mostra o erro no campo, dizendo como corrigir.
- Um único botão primário no fim, ocupando toda a largura.

## Código — React

```jsx
<QuoteForm onSubmit={valores => enviarPedido(valores)} />
```
