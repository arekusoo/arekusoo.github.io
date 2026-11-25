# Icon

Ícones da biblioteca **Material Symbols Rounded** do Google Fonts, com a configuração padrão da Quero Obras: Fill 0, Weight 400, Grade 0 e Optical size 24. Todo ícone tem a versão de contorno (padrão) e a preenchida (`filled`).

## Quando usar

- Sempre ao lado de um texto, ou dentro de um IconButton com `label`.
- Para reforçar a categoria de um serviço (pintura, reforma, elétrica, hidráulica).
- **Contorno** é o padrão em toda a interface. **Preenchido** marca estado ativo ou selecionado: item atual da navegação inferior, tile de serviço escolhido, estrelas da avaliação, selo Verificado e ícones de aviso.

## Regras

- Fonte: Material Symbols Rounded (variável), carregada do Google Fonts.
- Configuração padrão: `FILL 0` · `wght 400` · `GRAD 0` · `opsz 24`. Preenchido: `FILL 1`, com o resto igual.
- Tamanhos: 20px em botões e campos, 24px em barras e navegação, 28px em tiles de serviço. O tamanho é o `font-size`.
- Cor herdada do texto (`currentColor`): tinta-leitura em repouso, azul-estrutura quando ativo.
- Use os atalhos em português (`pintura`, `reforma`…) ou qualquer nome da biblioteca (`roofing`, `carpenter`, `foundation`…), procurados em fonts.google.com/icons.
- Ícone sozinho precisa de `label` (lido pelo leitor de tela); ao lado de texto fica decorativo.

## Propriedades

`name` (atalho ou nome do Material Symbols) · `filled` · `size` · `weight` (100–700) · `grade` (-25 a 200) · `label`.

Cada cartão mostra o ícone nas duas versões: a primeira na cor de texto, a segunda em azul-estrutura com o estilo oposto.

| Atalho | Material Symbols |
| --- | --- |
| pintura | format_paint |
| reforma | construction |
| eletrica | bolt |
| hidraulica | water_drop |
| ferramentas | handyman |
| verificado | verified |
| pedidos | assignment |
| orcamento | request_quote |
| map-pin | location_on |
| calendar | calendar_month |
| bell | notifications |
| chevron-down | expand_more |

## Código — React

```jsx
import { Icon } from './queroobras';

<Icon name="pintura" />               {/* contorno (padrão) */}
<Icon name="pintura" filled />        {/* preenchido */}
<Icon name="roofing" size={28} />     {/* qualquer nome do Material Symbols */}
<Icon name="bell" label="Notificações" />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<!-- 1. Carregue a fonte (uma vez, no <head>) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block">

<!-- 2. Use o nome do ícone como texto -->
<span class="qo-icon" aria-hidden="true">format_paint</span>
<span class="qo-icon qo-icon--filled" aria-hidden="true">format_paint</span>

<!-- CSS equivalente, sem bundle.css -->
<style>
  .qo-icon { font-family: 'Material Symbols Rounded'; font-size: 24px; line-height: 1;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
  .qo-icon--filled { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
</style>
```
