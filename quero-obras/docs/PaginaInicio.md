# Página · Início

A tela inicial do painel “Da marca à interface” montada só com componentes do sistema: AppShell + AppBar + GreetingHeader + SearchField + ServiceGrid + PromoCard + Stepper + BottomNav.

## Quando usar

- Referência de como átomos, moléculas e organismos se juntam numa página real.

## Regras

- Ordem da tela segue a leitura: saudação → busca → categorias → destaque → acompanhamento.
- Entre blocos, 20px (`space-5`); dentro dos blocos, 12px.

## Código — React

```jsx
<AppShell appBar={<AppBar logo={logo} actions={[{ icon: 'bell', label: 'Notificações', badge: 2 }]} />}
  bottomNav={<BottomNav value={0} items={itens} />}>
  <Stack gap={5} style={{ padding: '8px 16px 24px' }}>
    <GreetingHeader title="Olá! Vamos transformar?" subtitle="Qual serviço você precisa?"
      badge={<Badge tone="sucesso" icon="check">Verificado</Badge>} />
    <SearchField placeholder="Buscar serviço" />
    <ServiceGrid onSelect={abrirServico} />
    <PromoCard image={casa} title="Sua ideia começa aqui" text="Encontre profissionais para sua obra."
      primaryLabel="solicitar orçamento" primaryVariant="secundario" secondaryLabel="Ver profissionais" />
    <Card><Stepper current={1} /></Card>
  </Stack>
</AppShell>
```
