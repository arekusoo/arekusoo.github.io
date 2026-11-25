# Página · Solicitar orçamento

Fluxo de pedido de orçamento no celular: AppBar com voltar, Stepper na etapa 1, QuoteForm e Modal de confirmação.

## Quando usar

- Referência para qualquer fluxo de formulário do app.

## Regras

- Tela de fluxo não tem navegação inferior: tem voltar no topo e um único botão principal no fim.
- Depois de enviar, confirme com Modal ou Toast e mostre o próximo passo.

## Código — React

```jsx
<AppShell appBar={<AppBar surface title="Solicitar orçamento" onBack={voltar} />}>
  <div style={{ padding: 16 }}>
    <Stepper current={0} />
    <QuoteForm onSubmit={enviar} />
  </div>
</AppShell>
```
