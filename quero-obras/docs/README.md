# Quero Obras

**Conexão · Clareza · Transformação.** Este é o design system da Quero Obras, montado a partir do painel semântico da marca. Ele reúne cores, tipografia, espaçamento, grade, responsividade e componentes prontos, organizados por design atômico. Cada componente tem visualização ao vivo, regras de uso e código em React e em HTML/CSS.

> As cores vêm do painel, que avisa que são **aproximadas**. Confirme os hexadecimais com o arquivo-fonte do logotipo antes de ir para produção. Os valores derivados (tons suaves, versões fortes, estados) estão marcados como derivados na tabela de cores.

## Como este manual está organizado

| Nível | O que é | Na Quero Obras |
| --- | --- | --- |
| **Tokens** | As decisões básicas de estilo | Cores, tipografia, ícones, espaçamento, raios, sombras, grade, breakpoints, tamanhos |
| **Átomos** | Os menores elementos | Icon, Badge, Avatar, Divider, Spinner, Checkbox, Radio, Switch, Rating |
| **Moléculas** | Átomos combinados | Button, IconButton, TextField, Select, DatePicker, SearchField, ServiceTile, Chip, ListItem, Toast |
| **Organismos** | Blocos completos de interface | AppBar, GreetingHeader, Card, PromoCard, ProfessionalCard, Stepper, ServiceGrid, BottomNav, Tabs, Modal, BottomSheet, EmptyState, QuoteForm |
| **Layout e templates** | Estrutura de tela | Container, Grid, Col, Stack, AppShell |
| **Páginas** | Templates com conteúdo real | Início (app), Solicitar orçamento (app), Profissionais (web) |

## Universo visual

Três ideias do painel guiam todas as escolhas:

- **Acolhimento.** Cantos arredondados (cartões com 20px, botões com 12px), muito respiro e tom de conversa: “Olá! Vamos transformar?”.
- **Colaboração.** Cliente e profissional lado a lado: perguntas claras, etapas visíveis (Pedido → Propostas → Escolha) e selos que geram confiança (Verificado).
- **Movimento.** O laço azul e laranja do logotipo: contraste entre frio e quente, com acentos análogos. O azul dá estrutura, o laranja dá energia.

## Cor com função

Cada cor tem um papel. Use os tokens, nunca o hexadecimal direto no código.

| Papel | Token | Hex | Onde usar |
| --- | --- | --- | --- |
| Estrutura | `azul-estrutura` | #256E97 | Links, ícones ativos, seleção, etapas concluídas, foco, botão secundário |
| Marca | `laranja-marca` | #F85D31 | Ilustração, formas de movimento, detalhes decorativos. **Nunca com texto.** |
| Apoio | `ambar-apoio` | #F98F24 | Estrelas, gráficos, faixas. Texto sobre ele: `tinta-leitura` |
| Ação (CTA) | `cta` + `on-cta` | #C84318 + #FFFFFF | Botão primário: um por tela |
| Leitura | `tinta-leitura` | #102A3A | Títulos e textos |
| Respiro | `base-respiro` | #F5F7F8 | Fundo das telas |
| Superfície | `superficie` | #FFFFFF | Cartões, campos e modais |

**Regras de contraste (já verificadas):**

- Texto branco sobre `cta`: 4,9:1 ✓. Sobre `azul-estrutura`: 5,6:1 ✓. Sobre `laranja-marca`: 3,1:1 ✗. Por isso o laranja da marca não vira botão.
- `azul-estrutura` como texto sobre branco: 5,6:1 ✓. `tinta-suave` sobre branco: 6,4:1 ✓.
- Erro (`erro` #B42318) é um vermelho escuro, diferente do laranja, para que um alerta não pareça um elemento da marca. Estados sempre têm ícone ou texto junto, nunca só a cor.

## Forma e tipografia

- **Manrope 700** para títulos (display 40, h1 28, h2 22, h3 18). No celular, o h1 é 28px; de 600px em diante, 32px.
- **Inter 400** para textos (body-lg 18, body 16, body-sm 14, caption 12).
- **Inter 600** para botões e rótulos (button 16, button-sm 14, label 13).
- Texto de interface nunca abaixo de 12px. Campos sempre com 16px, para o iPhone não dar zoom.
- **Raios:** cartões com `radius-lg` (20px), botões e campos com `radius-md` (12px), chips com `radius-sm` (8px), modais com `radius-xl` (28px), selos e avatares com `radius-full`.
- **Sombras:** suaves, tingidas com a tinta da marca (`sombra-1` em repouso, `sombra-2` em destaque e hover, `sombra-3` em modais).

## Gestalt aplicada

O painel define quatro princípios. Cada um vira uma regra prática:

| Princípio | Regra | Exemplo |
| --- | --- | --- |
| **Proximidade** | Informações relacionadas ficam juntas: 8–12px dentro de um grupo e 24px ou mais entre grupos. | Serviço e Cidade lado a lado no QuoteForm |
| **Semelhança** | A mesma função tem a mesma aparência. | Todos os ServiceTiles iguais; todo botão primário em laranja CTA |
| **Continuidade** | Alinhamentos e linhas conduzem a leitura. | Stepper Pedido → Propostas → Escolha; PromoCard com imagem, texto e botão em sequência |
| **Figura-fundo** | Camadas separam o conteúdo do contexto. | Cartões brancos sobre `base-respiro`; véu `scrim` atrás de modais |

## Espaçamento

Grade de **4px**. Escala: `space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-10` 40 · `space-12` 48 · `space-16` 64.

- Dentro de componentes: 8–12px.
- Padding de cartões: 20px (combina com o raio de 20px).
- Entre blocos de uma tela de app: 20px. Entre seções: 32px (celular), 40px (tablet), 48px (desktop).

## Grade e responsividade

Mobile first: o estilo base é o do celular e cresce com `min-width`.

| Faixa | Breakpoint | Colunas | Margem lateral | Gutter | Navegação |
| --- | --- | --- | --- | --- | --- |
| Celular | 0–599px | 4 | 16px | 16px | BottomNav |
| Tablet | 600–1023px | 8 | 24px | 16px | BottomNav ou topo |
| Desktop | 1024px+ | 12 | 32px | 24px | Barra no topo |
| Largo | 1440px+ | 12 | centralizado | 24px | Conteúdo para em 1200px |

- **Páginas** usam `Container` + `Grid` + `Col`: `<Col sm={4} md={4} lg={4}>` ocupa a tela toda no celular, metade no tablet e um terço no desktop.
- **Componentes** se adaptam ao espaço que têm, não ao tamanho da tela. `ServiceGrid` e as linhas do formulário quebram sozinhos (`auto-fit`). Títulos de `GreetingHeader` e `PromoCard` crescem por *container query* dentro de `.qo-root`.
- Área de toque mínima de **48px** em qualquer tamanho.

## Iconografia

Os ícones vêm da biblioteca **Material Symbols Rounded** do Google Fonts (fonts.google.com/icons), com esta configuração padrão:

| Eixo | Valor | O que faz |
| --- | --- | --- |
| Fill | 0 (contorno) · 1 (preenchido) | Contorno é o padrão; preenchido marca estado ativo ou selecionado |
| Weight | 400 | Espessura do traço, combinando com Inter 400 |
| Grade | 0 | Ênfase normal |
| Optical size | 24 | Desenho otimizado para 24px |

- **Contorno** em toda a interface. **Preenchido** no item ativo da navegação inferior, no tile de serviço escolhido, nas estrelas da avaliação, no selo Verificado e nos ícones de aviso (toast).
- Tamanhos: 20px em botões e campos, 24px em barras e navegação, 28px em tiles de serviço.
- A cor vem do texto: `tinta-leitura` em repouso e `azul-estrutura` quando ativo.
- O componente `Icon` aceita os atalhos em português (`pintura` → format_paint, `reforma` → construction, `eletrica` → bolt, `hidraulica` → water_drop) ou qualquer nome da biblioteca.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block">
<span class="qo-icon">format_paint</span>
<span class="qo-icon qo-icon--filled">format_paint</span>
```

Em apps nativos: no **Flutter**, use o pacote `material_symbols_icons` (`Symbols.format_paint_rounded`, com `fill: 0` ou `1`, `weight: 400`, `grade: 0`, `opticalSize: 24`). No **React Native**, use a mesma fonte variável com `fontVariationSettings` ou exporte os SVGs pelo site do Google Fonts com essa configuração.

## Voz e conteúdo

- Fale como quem ajuda: frases curtas, em segunda pessoa (“Encontre profissionais para sua obra.”).
- Perguntas guiam o próximo passo: “Qual serviço você precisa?”.
- Botões começam com verbo: “Solicitar orçamento”, “Ver profissionais”, “Aceitar proposta”. Defina um padrão de caixa e mantenha. O painel usa minúsculas no CTA.
- Erros dizem como resolver: “CEP incompleto. Confira os números.”, e não “Erro de validação”.
- Formato brasileiro: R$ 2.400,00 · 4,8 · 25/11/2026 · (92) 99999-0000.

## Acessibilidade

- Contraste mínimo de 4,5:1 em textos e 3:1 em bordas de controles e ícones (todos os tokens de texto passam).
- Foco de teclado visível: anel de 2px em `foco` (azul-estrutura), afastado 2px.
- Todo ícone sozinho tem `label`. Todo campo tem rótulo visível. Erros são ligados ao campo por `aria-describedby`.
- Modais e folhas inferiores recebem o foco ao abrir, fecham com Esc e devolvem o foco ao sair.
- Animações curtas (150–200ms) e reduzidas com `prefers-reduced-motion`.

## Como usar em React

1. Copie para o projeto: `tokens.css` e `components/bundle.css`. O `bundle.css` já importa as fontes do Google Fonts: Manrope, Inter e Material Symbols Rounded.
2. Use os componentes de duas formas:
   - **Rápida:** carregue React 18 e `components/bundle.js`, que expõe tudo em `window.QueroObras`.
   - **Recomendada:** copie o código de cada componente do `bundle.js` para arquivos `.jsx` seus. Eles não têm dependências além do React, e os tipos estão em `components/index.d.ts`.
3. Envolva o app em um elemento com a classe `qo-root` (o `AppShell` já faz isso).

```jsx
import './tokens.css';
import './bundle.css';
const { AppShell, AppBar, Button, ServiceGrid } = window.QueroObras;

export default function App() {
  return (
    <AppShell appBar={<AppBar title="Quero Obras" />}>
      <ServiceGrid onSelect={s => console.log(s)} />
      <Button block>solicitar orçamento</Button>
    </AppShell>
  );
}
```

## Como usar em outras plataformas

**Qualquer web (Vue, Angular, Svelte, WordPress, Webflow, HTML):** carregue `tokens.css` + `bundle.css` e use as classes `qo-*`. Cada cartão de componente traz o HTML equivalente.

**Variáveis CSS:**

```css
:root {
  --azul-estrutura: #256E97; --laranja-marca: #F85D31; --ambar-apoio: #F98F24;
  --cta: #C84318; --on-cta: #FFFFFF; --tinta-leitura: #102A3A; --base-respiro: #F5F7F8;
  --radius-md: 12px; --radius-lg: 20px; --space-4: 16px;
}
```

**Tailwind (`tailwind.config.js`):**

```js
module.exports = { theme: { extend: {
  colors: { estrutura: '#256E97', marca: '#F85D31', apoio: '#F98F24', cta: '#C84318', tinta: '#102A3A', respiro: '#F5F7F8' },
  fontFamily: { display: ['Manrope', 'sans-serif'], sans: ['Inter', 'sans-serif'] },
  borderRadius: { btn: '12px', card: '20px', sheet: '28px' },
  screens: { md: '600px', lg: '1024px', xl: '1440px' },
} } };
```

**React Native:**

```js
export const qo = {
  color: { estrutura: '#256E97', marca: '#F85D31', apoio: '#F98F24', cta: '#C84318', onCta: '#FFFFFF', tinta: '#102A3A', tintaSuave: '#4D6270', respiro: '#F5F7F8', superficie: '#FFFFFF', borda: '#DCE3E7' },
  space: { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32 },
  radius: { md: 12, lg: 20, xl: 28 },
  font: { title: 'Manrope_700Bold', body: 'Inter_400Regular', button: 'Inter_600SemiBold' },
};
```

**Flutter:**

```dart
class QO {
  static const estrutura = Color(0xFF256E97);
  static const marca = Color(0xFFF85D31);
  static const apoio = Color(0xFFF98F24);
  static const cta = Color(0xFFC84318);
  static const tinta = Color(0xFF102A3A);
  static const respiro = Color(0xFFF5F7F8);
  static const raioBotao = 12.0, raioCartao = 20.0;
}
```

**Figma:** crie as variáveis com os mesmos nomes dos tokens (coleção Cores, Espaçamento, Raio) para que design e código falem a mesma língua.

## Marca

O logotipo e as imagens de referência estão em **Assets**. Foram recortados do painel e estão em baixa resolução: servem só como referência. Substitua pelos arquivos originais (SVG do logo) antes de usar em produção.
