# Select

Lista de escolha única com menu próprio no padrão da marca, como os campos “Serviço” e “Cidade” do painel. Substitui o select nativo do sistema, que muda de cara em cada aparelho.

## Quando usar

- Mais de 5 opções conhecidas: serviço, cidade, tipo de imóvel.
- Com até 5 opções, prefira Radio (todas visíveis de uma vez).

## Regras

- Fechado, tem o mesmo visual do TextField: 48px de altura, raio de 12px e rótulo acima.
- Aberto: menu branco com raio de 12px e sombra-3, itens de 44px. O item escolhido fica em azul-suave, com texto azul-forte e um check.
- Teclado: ↑ ↓ navegam, Enter escolhe, Esc fecha, e digitar uma letra pula para a opção que começa com ela.
- Opções podem ter ícone (`{ value, label, icon }`). Campos relacionados ficam lado a lado (Gestalt: proximidade).

## Propriedades

`options` (texto ou `{ value, label, icon }`), `value`, `defaultValue`, `onChange(e)` com `e.target.value`, `placeholder`, `icon`, `label`, `helper`, `error`, `disabled`, `name`, `defaultOpen`.

## Código — React

```jsx
<Select label="Serviço" value={servico} onChange={e => setServico(e.target.value)}
  options={[
    { value: 'pintura', label: 'Pintura', icon: 'pintura' },
    { value: 'reforma', label: 'Reforma', icon: 'reforma' },
    { value: 'eletrica', label: 'Elétrica', icon: 'eletrica' },
  ]} />

<Select label="Cidade" icon="map-pin" placeholder="Escolha a cidade"
  options={['São Paulo', 'Rio de Janeiro', 'Manaus']} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<!-- Fechado -->
<div class="qo-field">
  <label class="qo-field__label" for="servico">Serviço</label>
  <div class="qo-select">
    <button id="servico" class="qo-field__box qo-select__trigger" aria-haspopup="listbox" aria-expanded="false">
      <span class="qo-select__value">Pintura</span>
      <span class="qo-icon qo-select__chev" aria-hidden="true">expand_more</span>
    </button>
    <!-- Aberto: adicione qo-select__trigger--open no botão e mostre a lista -->
    <ul class="qo-menu" role="listbox">
      <li class="qo-menu__opt qo-menu__opt--sel" role="option" aria-selected="true"><span class="qo-menu__label">Pintura</span>✓</li>
      <li class="qo-menu__opt" role="option"><span class="qo-menu__label">Reforma</span></li>
    </ul>
  </div>
</div>
```
