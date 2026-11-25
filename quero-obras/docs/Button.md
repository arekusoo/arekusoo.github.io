# Button

Botão de ação. O primário em laranja CTA (#C84318 com texto branco) é a ação principal da tela, como “solicitar orçamento”.

## Quando usar

- `primario`: a ação que é o objetivo da tela, uma por tela.
- `secundario` (azul-estrutura): ação forte de apoio, como no cartão “Sua ideia começa aqui”.
- `tonal` e `contorno`: ações alternativas. `link`: ação de baixa ênfase, como “Ver profissionais”.
- `perigo`: excluir ou cancelar algo que não tem volta.

## Regras

- Raio de 12px (`radius-md`) e Inter 600 16px.
- Alturas: sm 36px, md 48px (padrão, área de toque mínima), lg 56px (rodapé de formulário).
- Texto começa com verbo: “Solicitar orçamento”, “Ver perfil”, “Enviar proposta”. O painel usa minúsculas no CTA (“solicitar orçamento”); mantenha um padrão só.
- No celular, o botão principal de rodapé ocupa toda a largura (`block`).
- Nunca use laranja-marca (#F85D31) com texto branco: o contraste é 3,1:1. Por isso o CTA é o #C84318 (4,9:1).

## Propriedades

`variant`: primario · secundario · tonal · contorno · link · perigo — `size`: sm · md · lg — `icon`, `iconRight`, `loading`, `block`, `disabled`, `href` (vira link) e todos os atributos de `<button>`.

## Código — React

```jsx
import { Button } from './queroobras';

<Button onClick={enviar}>solicitar orçamento</Button>
<Button variant="secundario" block>solicitar orçamento</Button>
<Button variant="link" iconRight="chevron-right">Ver profissionais</Button>
<Button variant="contorno" icon="chat" size="sm">Conversar</Button>
<Button loading>Enviando</Button>
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<button class="qo-btn qo-btn--primario">solicitar orçamento</button>
<button class="qo-btn qo-btn--secundario qo-btn--block">solicitar orçamento</button>
<button class="qo-btn qo-btn--link">Ver profissionais</button>
<button class="qo-btn qo-btn--contorno qo-btn--sm">Conversar</button>
```
