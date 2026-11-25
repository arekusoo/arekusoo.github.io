# BottomSheet

Folha que sobe da parte de baixo da tela com opções ou detalhes, sem tirar a pessoa do contexto.

## Quando usar

- Filtros, ordenação, escolha rápida de opções no celular.

## Regras

- Puxador no topo, raio de 28px só nos cantos de cima, largura máxima de 640px.
- Fecha com Esc, clique fora ou um botão de confirmar.

## Código — React

```jsx
<BottomSheet open={aberto} onClose={fechar} title="Ordenar por">…</BottomSheet>
```
