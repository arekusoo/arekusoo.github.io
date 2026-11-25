# TextField

Campo de texto com rótulo acima, ajuda abaixo e estado de erro. Aceita várias linhas (`multiline`).

## Quando usar

- Nome, telefone, endereço e descrição da obra.

## Regras

- Rótulo sempre visível acima do campo (Inter 600 13px). O placeholder só dá exemplo, não substitui o rótulo.
- Altura de 48px, raio de 12px, borda borda-forte; com foco, borda azul-estrutura e halo azul-suave.
- Texto em 16px, para o iPhone não dar zoom.
- Erro: borda e mensagem em `erro`, com ícone e texto dizendo como resolver (“Informe um telefone com DDD”).

## Código — React

```jsx
<TextField label="Telefone" type="tel" placeholder="(92) 99999-0000" icon="phone" />
<TextField label="Descreva a obra" multiline helper="Quanto mais detalhes, melhores as propostas." />
<TextField label="CEP" error="CEP não encontrado. Confira os números." />
```

## Código — HTML/CSS (qualquer stack)

Usa só `tokens.css` + `bundle.css`, sem React. Serve para Vue, Angular, Svelte, Webflow, WordPress ou HTML puro.

```html
<div class="qo-field">
  <label class="qo-field__label" for="tel">Telefone</label>
  <div class="qo-field__box"><input id="tel" class="qo-field__input" type="tel" placeholder="(92) 99999-0000" /></div>
  <span class="qo-field__helper">Usaremos só para as propostas.</span>
</div>
```
