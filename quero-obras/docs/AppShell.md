# AppShell

Estrutura de tela de app no celular: barra do topo, área com rolagem, botão flutuante opcional e navegação inferior. É o template que as páginas preenchem.

## Quando usar

- Toda tela de primeiro nível do app (Início, Pedidos, Mensagens, Perfil).
- Telas de fluxo usam `footer` (botão fixo embaixo) no lugar da navegação.

## Regras

- Só a área do meio rola; o topo e a navegação ficam fixos.
- Fundo base-respiro; o conteúdo entra em cartões brancos (figura-fundo).
- Padding lateral do conteúdo: 16px (`space-4`).

## Código — React

```jsx
<AppShell
  appBar={<AppBar logo={logo} actions={[{ icon: 'bell', label: 'Notificações' }]} />}
  bottomNav={<BottomNav value={0} items={itens} />}>
  …conteúdo…
</AppShell>
```
