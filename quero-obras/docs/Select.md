# Select

Lista de escolha única, como os campos “Serviço” e “Cidade” do painel.

## Quando usar

- Mais de 5 opções conhecidas: serviço, cidade, tipo de imóvel.

## Regras

- Rótulo acima e o mesmo visual do TextField. Usa o seletor nativo do sistema, que é o mais rápido no celular.
- Campos relacionados ficam lado a lado ou próximos (Gestalt: proximidade).

## Código — React

```jsx
<Select label="Serviço" options={['Pintura', 'Reforma', 'Elétrica']} value={servico} onChange={e => setServico(e.target.value)} />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-field">
  <label class="qo-field__label" for="servico">Serviço</label>
  <div class="qo-field__box">
    <select id="servico" class="qo-field__input"><option>Pintura</option><option>Reforma</option></select>
  </div>
</div>
```
