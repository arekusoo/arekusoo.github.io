# Modal

Janela de confirmação sobre um véu escuro, para decisões que interrompem o fluxo.

## Quando usar

- Confirmar algo importante ou que não tem volta: aceitar proposta, cancelar pedido.

## Regras

- Título que diz a decisão (“Aceitar proposta de Marcos?”), texto curto com a consequência e no máximo 2 botões: o de ação à direita.
- Raio de 28px, sombra-3, véu `scrim`. Fecha com Esc e com clique fora.
- Para escolher opções ou ver detalhes no celular, prefira BottomSheet.

## Código — React

```jsx
<Modal open={aberto} onClose={fechar} icon="check-circle" title="Aceitar proposta de Marcos?"
  actions={<><Button variant="link" onClick={fechar}>Agora não</Button><Button onClick={aceitar}>Aceitar proposta</Button></>}>
  As outras propostas serão recusadas automaticamente.
</Modal>
```
