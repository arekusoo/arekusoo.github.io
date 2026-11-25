# DatePicker

Campo de data com calendário próprio no padrão da marca, em português e no formato dd/mm/aaaa. Substitui o seletor de data nativo, que é diferente em cada navegador.

## Quando usar

- Escolher a data da visita, do início da obra ou de um prazo.

## Regras

- Fechado, tem o mesmo visual do Select, com ícone de calendário e a data em dd/mm/aaaa.
- Calendário: cartão branco com raio de 20px e sombra-3. Semana começa no domingo. Hoje tem um anel azul; o dia escolhido fica em azul-estrutura com texto branco.
- Use `min` e `max` para bloquear datas impossíveis (ex.: visita no passado). Datas bloqueadas ficam apagadas.
- Teclado: setas andam pelos dias, PageUp e PageDown trocam de mês, Enter escolhe e Esc fecha.
- O valor é sempre `AAAA-MM-DD`, pronto para enviar ao servidor. Só a exibição é em formato brasileiro.

## Propriedades

`value` e `defaultValue` (AAAA-MM-DD), `onChange(iso)`, `min`, `max`, `label`, `helper`, `error`, `placeholder`, `disabled`, `name`, `defaultOpen`.

## Código — React

```jsx
const hoje = new Date().toISOString().slice(0, 10);
const [data, setData] = useState('');

<DatePicker label="Data preferida para a visita" value={data} onChange={setData}
  min={hoje} helper="Opcional. O profissional confirma com você." />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-field">
  <label class="qo-field__label" for="visita">Data da visita</label>
  <div class="qo-select">
    <button id="visita" class="qo-field__box qo-select__trigger" aria-haspopup="dialog">
      <svg class="qo-icon">…calendar…</svg><span class="qo-select__value">28/11/2026</span>
    </button>
    <div class="qo-cal" role="dialog" aria-label="Escolher data">
      <div class="qo-cal__head">…‹ <span class="qo-cal__title">novembro de 2026</span> ›…</div>
      <div class="qo-cal__week"><span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span></div>
      <div class="qo-cal__grid">
        <button class="qo-cal__day qo-cal__day--out">26</button> …
        <button class="qo-cal__day qo-cal__day--today">25</button>
        <button class="qo-cal__day qo-cal__day--sel">28</button> …
      </div>
    </div>
  </div>
</div>
```
