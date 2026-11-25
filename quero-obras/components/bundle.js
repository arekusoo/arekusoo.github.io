/* @ds-bundle: {"format":4,"namespace":"QueroObras","components":[{"name":"Icon"},{"name":"Badge"},{"name":"Avatar"},{"name":"Divider"},{"name":"Spinner"},{"name":"Checkbox"},{"name":"Radio"},{"name":"Switch"},{"name":"Rating"},{"name":"Button"},{"name":"IconButton"},{"name":"TextField"},{"name":"Select"},{"name":"SearchField"},{"name":"ServiceTile"},{"name":"Chip"},{"name":"ListItem"},{"name":"Toast"},{"name":"AppBar"},{"name":"GreetingHeader"},{"name":"Card"},{"name":"PromoCard"},{"name":"ProfessionalCard"},{"name":"Stepper"},{"name":"ServiceGrid"},{"name":"BottomNav"},{"name":"Tabs"},{"name":"Modal"},{"name":"BottomSheet"},{"name":"EmptyState"},{"name":"QuoteForm"},{"name":"Container"},{"name":"Grid"},{"name":"Col"},{"name":"Stack"},{"name":"AppShell"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useId = React.useId;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function rest(props, omit) {
    var o = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && omit.indexOf(k) < 0) o[k] = props[k];
    return o;
  }

  /* ───────── Ícones (traço 2px, grade 24) ───────── */
  var I = {
    home: [['p', 'M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z']],
    search: [['c', 11, 11, 6.5], ['p', 'm20 20-4.2-4.2']],
    pintura: [['r', 4, 4, 13, 5, 1.5], ['p', 'M17 6.5h2.5V11H11v3'], ['r', 9.5, 14, 3, 6.5, 1]],
    reforma: [['p', 'M12.5 9.5 4.5 17.5a1.6 1.6 0 0 0 2.3 2.3l8-8'], ['p', 'M10 6.5 13.5 3l7 7-3.5 3.5z'], ['p', 'm13.5 3 2-1']],
    eletrica: [['p', 'M13 3 5 13.5h6L10 21l8-10.5h-6z']],
    hidraulica: [['p', 'M12 3.5s6 6.4 6 10.5a6 6 0 0 1-12 0c0-4.1 6-10.5 6-10.5z']],
    grid: [['r', 4, 4, 6.5, 6.5, 1.5], ['r', 13.5, 4, 6.5, 6.5, 1.5], ['r', 4, 13.5, 6.5, 6.5, 1.5], ['r', 13.5, 13.5, 6.5, 6.5, 1.5]],
    chat: [['p', 'M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3.5V6a1 1 0 0 1 1-1z'], ['d', 9, 11], ['d', 12, 11], ['d', 15, 11]],
    bell: [['p', 'M6 9.5a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15.5 6 9.5z'], ['p', 'M10 20a2.2 2.2 0 0 0 4 0']],
    user: [['c', 12, 8, 4], ['p', 'M4.5 20.5a7.5 7.5 0 0 1 15 0']],
    check: [['p', 'm5 12.5 4.5 4.5L19 7.5']],
    'check-circle': [['c', 12, 12, 9], ['p', 'm8 12.3 2.8 2.8L16.2 9.5']],
    shield: [['p', 'M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6z'], ['p', 'm9 12 2.2 2.2L15.5 10']],
    'chevron-right': [['p', 'm9.5 6 6 6-6 6']],
    'chevron-left': [['p', 'm14.5 6-6 6 6 6']],
    'chevron-down': [['p', 'm6 9.5 6 6 6-6']],
    'arrow-left': [['p', 'M19 12H5m6.5-6.5L5 12l6.5 6.5']],
    close: [['p', 'M6.5 6.5l11 11m0-11-11 11']],
    plus: [['p', 'M12 5v14M5 12h14']],
    star: [['p', 'm12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z']],
    'map-pin': [['p', 'M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z'], ['c', 12, 10, 2.3]],
    calendar: [['r', 4, 5.5, 16, 14.5, 2], ['p', 'M8 3.5v4M16 3.5v4M4 10h16']],
    clock: [['c', 12, 12, 8.5], ['p', 'M12 7.5V12l3 2']],
    filter: [['p', 'M4 6h16M7 12h10M10 18h4']],
    heart: [['p', 'M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z']],
    menu: [['p', 'M4 7h16M4 12h16M4 17h16']],
    more: [['d', 12, 5.5], ['d', 12, 12], ['d', 12, 18.5]],
    pedidos: [['r', 5, 4.5, 14, 16.5, 2], ['p', 'M9 3h6v3H9z'], ['p', 'M9 11h6M9 15h4']],
    image: [['r', 3.5, 5, 17, 14, 2], ['c', 9, 10, 1.8], ['p', 'm20.5 16-5-5-8.5 8']],
    info: [['c', 12, 12, 9], ['p', 'M12 11v5.5'], ['d', 12, 7.8]],
    alert: [['p', 'M12 4 2.8 19.5h18.4z'], ['p', 'M12 10v4.5'], ['d', 12, 17]],
    camera: [['p', 'M4 8h3l1.5-2.5h7L17 8h3v11H4z'], ['c', 12, 13, 3.5]],
    phone: [['p', 'M6.5 4h3l1.5 4-2 1.5a10 10 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2z']],
    edit: [['p', 'M4.5 19.5h4l10-10-4-4-10 10z'], ['p', 'm13 7 4 4']],
    trash: [['p', 'M4.5 7h15M10 11v6M14 11v6M6.5 7l1 13h9l1-13M9 7V4.5h6V7']],
    send: [['p', 'M4 12 20 4l-5 16-3.5-6.5z'], ['p', 'M11.5 13.5 20 4']]
  };
  var ICON_NAMES = Object.keys(I);

  function Icon(props) {
    var name = props.name, size = props.size || 24, spec = I[name] || I.info;
    var kids = spec.map(function (s, i) {
      if (s[0] === 'p') return h('path', { key: i, d: s[1] });
      if (s[0] === 'c') return h('circle', { key: i, cx: s[1], cy: s[2], r: s[3] });
      if (s[0] === 'r') return h('rect', { key: i, x: s[1], y: s[2], width: s[3], height: s[4], rx: s[5] });
      return h('circle', { key: i, cx: s[1], cy: s[2], r: 1.1, fill: 'currentColor', stroke: 'none' });
    });
    return h('svg', {
      className: cx('qo-icon', props.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      strokeWidth: props.strokeWidth || 2, strokeLinecap: 'round', strokeLinejoin: 'round',
      role: props.label ? 'img' : undefined, 'aria-label': props.label, 'aria-hidden': props.label ? undefined : true, style: props.style
    }, kids);
  }
  Icon.names = ICON_NAMES;

  /* ───────── Átomos ───────── */
  function Badge(props) {
    var tone = props.tone || 'neutro';
    if (props.count != null) {
      var n = props.count > 99 ? '99+' : String(props.count);
      return h('span', { className: cx('qo-badge qo-badge--count', props.className), 'aria-label': n + ' novas' }, n);
    }
    return h('span', { className: cx('qo-badge', tone !== 'neutro' && 'qo-badge--' + tone, props.className) },
      props.icon ? h(Icon, { name: props.icon }) : null, props.children);
  }

  function initials(name) {
    var p = String(name || '?').trim().split(/\s+/);
    return ((p[0] || '')[0] || '') + (p.length > 1 ? p[p.length - 1][0] : '');
  }
  function Avatar(props) {
    var size = props.size || 'md';
    var tone = props.name ? (props.name.charCodeAt(0) + props.name.length) % 3 : 0;
    return h('span', { className: cx('qo-avatar', size !== 'md' && 'qo-avatar--' + size, !props.src && tone && 'qo-avatar--t' + tone, props.className), title: props.name },
      props.src ? h('img', { src: props.src, alt: props.name || '' }) : h('span', { 'aria-hidden': true }, initials(props.name).toUpperCase()),
      !props.src && props.name ? h('span', { style: { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' } }, props.name) : null);
  }

  function Divider(props) { return h('hr', { className: cx('qo-divider', props.inset && 'qo-divider--inset', props.className) }); }

  function Spinner(props) {
    return h('span', { className: cx('qo-spinner', props.size === 'sm' && 'qo-spinner--sm', props.inverse && 'qo-spinner--inverse', props.className), role: 'status', 'aria-label': props.label || 'Carregando' });
  }

  function Checkbox(props) {
    var other = rest(props, ['label', 'description', 'className']);
    return h('label', { className: cx('qo-check', props.disabled && 'qo-check--disabled', props.className) },
      h('input', Object.assign({ type: 'checkbox' }, other)),
      h('span', { className: 'qo-check__text' }, props.label, props.description ? h('small', null, props.description) : null));
  }
  function Radio(props) {
    var other = rest(props, ['label', 'description', 'className']);
    return h('label', { className: cx('qo-check qo-check--radio', props.disabled && 'qo-check--disabled', props.className) },
      h('input', Object.assign({ type: 'radio' }, other)),
      h('span', { className: 'qo-check__text' }, props.label, props.description ? h('small', null, props.description) : null));
  }
  function Switch(props) {
    var other = rest(props, ['label', 'className']);
    return h('label', { className: cx('qo-switch', props.className) },
      h('input', Object.assign({ type: 'checkbox', role: 'switch' }, other)), props.label ? h('span', null, props.label) : null);
  }

  function Rating(props) {
    var v = Math.max(0, Math.min(5, Number(props.value) || 0)), stars = [];
    for (var i = 1; i <= 5; i++) stars.push(h(Icon, { key: i, name: 'star', className: i <= Math.round(v) ? '' : 'qo-rating__off', style: i <= Math.round(v) ? { fill: 'currentColor' } : null }));
    return h('span', { className: cx('qo-rating', props.className), role: 'img', 'aria-label': 'Nota ' + v.toFixed(1).replace('.', ',') + ' de 5' + (props.count != null ? ', ' + props.count + ' avaliações' : '') },
      props.compact ? h(Icon, { name: 'star', style: { fill: 'currentColor' } }) : stars,
      h('span', { className: 'qo-rating__value', style: props.compact ? { marginLeft: 4 } : null }, v.toFixed(1).replace('.', ',')),
      props.count != null ? h('span', { className: 'qo-rating__count' }, '(' + props.count + ')') : null);
  }

  /* ───────── Moléculas ───────── */
  function Button(props) {
    var variant = props.variant || 'primario', size = props.size || 'md';
    var other = rest(props, ['variant', 'size', 'icon', 'iconRight', 'loading', 'block', 'className', 'children', 'as']);
    var cls = cx('qo-btn', 'qo-btn--' + variant, size !== 'md' && 'qo-btn--' + size, props.block && 'qo-btn--block', props.loading && 'qo-btn--loading', props.className);
    var kids = [
      props.icon ? h(Icon, { key: 'i', name: props.icon }) : null,
      h('span', { key: 't' }, props.children),
      props.iconRight ? h(Icon, { key: 'r', name: props.iconRight }) : null,
      props.loading ? h(Spinner, { key: 's', size: 'sm', inverse: variant === 'primario' || variant === 'secundario' || variant === 'perigo' }) : null
    ];
    if (props.as === 'a' || props.href) return h('a', Object.assign({ className: cls }, other), kids);
    return h('button', Object.assign({ type: 'button', className: cls, 'aria-busy': props.loading || undefined, disabled: props.disabled || props.loading }, other, { disabled: props.disabled || props.loading }), kids);
  }

  function IconButton(props) {
    var other = rest(props, ['icon', 'label', 'variant', 'badge', 'className']);
    return h('button', Object.assign({ type: 'button', className: cx('qo-iconbtn', props.variant && 'qo-iconbtn--' + props.variant, props.className), 'aria-label': props.label, title: props.label }, other),
      h(Icon, { name: props.icon }), props.badge ? h(Badge, { count: props.badge }) : null);
  }

  function useFieldId(id) { var auto = useId ? useId() : 'f' + Math.random().toString(36).slice(2); return id || 'qo-' + auto.replace(/:/g, ''); }

  function Field(props, control) {
    var id = props.__id;
    return h('div', { className: cx('qo-field', props.error && 'qo-field--erro', props.disabled && 'qo-field--disabled', props.className) },
      props.label ? h('label', { className: 'qo-field__label', htmlFor: id }, props.label, props.required ? h('span', { className: 'qo-field__req', 'aria-hidden': true }, ' *') : null) : null,
      control,
      (props.error || props.helper) ? h('span', { className: 'qo-field__helper', id: id + '-help' },
        props.error ? h(Icon, { name: 'alert', size: 14 }) : null, props.error || props.helper) : null);
  }

  function TextField(props) {
    var id = useFieldId(props.id);
    var other = rest(props, ['label', 'helper', 'error', 'icon', 'iconRight', 'className', 'multiline', 'id']);
    var input = h(props.multiline ? 'textarea' : 'input', Object.assign({
      id: id, className: 'qo-field__input', 'aria-invalid': props.error ? true : undefined,
      'aria-describedby': (props.error || props.helper) ? id + '-help' : undefined
    }, props.multiline ? { rows: 4 } : { type: 'text' }, other));
    return Field(Object.assign({}, props, { __id: id }),
      h('div', { className: cx('qo-field__box', props.multiline && 'qo-field__box--area') },
        props.icon ? h(Icon, { name: props.icon }) : null, input, props.iconRight ? h(Icon, { name: props.iconRight }) : null));
  }

  function Select(props) {
    var id = useFieldId(props.id);
    var other = rest(props, ['label', 'helper', 'error', 'icon', 'className', 'options', 'placeholder', 'id']);
    var opts = (props.options || []).map(function (o) {
      var v = typeof o === 'string' ? o : o.value, l = typeof o === 'string' ? o : o.label;
      return h('option', { key: v, value: v }, l);
    });
    if (props.placeholder) opts.unshift(h('option', { key: '__p', value: '', disabled: true }, props.placeholder));
    return Field(Object.assign({}, props, { __id: id }),
      h('div', { className: 'qo-field__box' },
        props.icon ? h(Icon, { name: props.icon }) : null,
        h('select', Object.assign({ id: id, className: 'qo-field__input', 'aria-invalid': props.error ? true : undefined, 'aria-describedby': (props.error || props.helper) ? id + '-help' : undefined },
          props.placeholder && props.value === undefined && props.defaultValue === undefined ? { defaultValue: '' } : {}, other), opts),
        h(Icon, { name: 'chevron-down', className: 'qo-field__chev' })));
  }

  function SearchField(props) {
    var controlled = props.value !== undefined;
    var st = useState(props.defaultValue || ''), inner = st[0], setInner = st[1];
    var value = controlled ? props.value : inner;
    function change(v) { if (!controlled) setInner(v); if (props.onChange) props.onChange(v); }
    return h('form', {
      role: 'search', className: cx('qo-search', props.variant === 'preenchida' && 'qo-search--preenchida', props.className),
      onSubmit: function (e) { e.preventDefault(); if (props.onSubmit) props.onSubmit(value); }
    },
      h(Icon, { name: 'search' }),
      h('input', { className: 'qo-field__input', type: 'search', value: value, placeholder: props.placeholder || 'Buscar serviço', 'aria-label': props.label || props.placeholder || 'Buscar serviço', onChange: function (e) { change(e.target.value); } }),
      value ? h(IconButton, { icon: 'close', label: 'Limpar busca', onClick: function () { change(''); } }) : null);
  }

  function ServiceTile(props) {
    var other = rest(props, ['icon', 'label', 'selected', 'className']);
    return h('button', Object.assign({ type: 'button', className: cx('qo-tile', props.className), 'aria-pressed': props.selected == null ? undefined : !!props.selected }, other),
      h(Icon, { name: props.icon }), h('span', null, props.label));
  }

  function Chip(props) {
    var other = rest(props, ['icon', 'selected', 'onRemove', 'className', 'children']);
    return h('button', Object.assign({ type: 'button', className: cx('qo-chip', props.className), 'aria-pressed': props.selected == null ? undefined : !!props.selected }, other),
      props.selected ? h(Icon, { name: 'check' }) : (props.icon ? h(Icon, { name: props.icon }) : null),
      h('span', null, props.children),
      props.onRemove ? h('span', { className: 'qo-chip__remove', role: 'button', tabIndex: 0, 'aria-label': 'Remover', onClick: function (e) { e.stopPropagation(); props.onRemove(); } }, h(Icon, { name: 'close', size: 16 })) : null);
  }

  function ListItem(props) {
    var tag = props.onClick || props.href ? (props.href ? 'a' : 'button') : 'div';
    var other = rest(props, ['leading', 'leadingIcon', 'title', 'subtitle', 'trailing', 'chevron', 'className']);
    var lead = props.leading ? h('span', { className: 'qo-listitem__lead' }, props.leading)
      : props.leadingIcon ? h('span', { className: 'qo-listitem__lead qo-listitem__lead--box' }, h(Icon, { name: props.leadingIcon })) : null;
    return h(tag, Object.assign(tag === 'button' ? { type: 'button' } : {}, { className: cx('qo-listitem', props.className) }, other),
      lead,
      h('span', { className: 'qo-listitem__text' }, h('span', { className: 'qo-listitem__title' }, props.title), props.subtitle ? h('span', { className: 'qo-listitem__sub' }, props.subtitle) : null),
      props.trailing || props.chevron ? h('span', { className: 'qo-listitem__trail' }, props.trailing, props.chevron ? h(Icon, { name: 'chevron-right', size: 20 }) : null) : null);
  }

  function Toast(props) {
    var tone = props.tone || 'neutro';
    var icon = tone === 'sucesso' ? 'check-circle' : tone === 'erro' ? 'alert' : 'info';
    return h('div', { className: cx('qo-toast', 'qo-toast--' + tone, props.className), role: tone === 'erro' ? 'alert' : 'status' },
      h(Icon, { name: icon, className: 'qo-toast__icon' }),
      h('span', { className: 'qo-toast__msg' }, props.message),
      props.actionLabel ? h('button', { type: 'button', className: 'qo-toast__action', onClick: props.onAction }, props.actionLabel) : null,
      props.onClose ? h(IconButton, { icon: 'close', label: 'Fechar', onClick: props.onClose }) : null);
  }

  /* ───────── Organismos ───────── */
  function AppBar(props) {
    var actions = (props.actions || []).map(function (a, i) {
      return h(IconButton, { key: i, icon: a.icon, label: a.label, onClick: a.onClick, badge: a.badge });
    });
    return h('header', { className: cx('qo-appbar', props.surface && 'qo-appbar--surface', props.center && 'qo-appbar--center', props.className) },
      props.onBack ? h(IconButton, { icon: 'arrow-left', label: 'Voltar', onClick: props.onBack }) : null,
      props.logo ? h('img', { className: 'qo-appbar__logo', src: props.logo, alt: props.logoAlt || 'Quero Obras' }) : null,
      props.title ? h('h1', { className: 'qo-appbar__title' }, props.title) : h('span', { className: 'qo-appbar__spacer' }),
      actions);
  }

  function GreetingHeader(props) {
    return h('div', { className: cx('qo-greeting', props.className) },
      h('div', { className: 'qo-greeting__text' },
        h('h1', { className: 'qo-greeting__title' }, props.title),
        props.subtitle ? h('p', { className: 'qo-greeting__sub' }, props.subtitle) : null),
      props.badge || null);
  }

  function Card(props) {
    var variant = props.variant || 'elevado';
    var other = rest(props, ['variant', 'padded', 'className', 'children']);
    var clickable = !!props.onClick;
    return h('div', Object.assign({
      className: cx('qo-card', 'qo-card--' + variant, props.padded !== false && 'qo-card__pad', clickable && 'qo-card--clickable', props.className),
      tabIndex: clickable ? 0 : undefined, role: clickable ? 'button' : undefined
    }, other), props.children);
  }

  function PromoCard(props) {
    return h(Card, { variant: 'destaque', padded: false, className: props.className },
      h('div', { className: 'qo-promo' },
        props.image ? h('img', { className: 'qo-promo__img', src: props.image, alt: props.imageAlt || '' }) : h('div', { className: 'qo-promo__img' }),
        h('div', null, h('h2', { className: 'qo-promo__title' }, props.title), props.text ? h('p', { className: 'qo-promo__text' }, props.text) : null),
        (props.primaryLabel || props.secondaryLabel) ? h('div', { className: 'qo-promo__actions' },
          props.primaryLabel ? h(Button, { variant: props.primaryVariant || 'primario', block: true, onClick: props.onPrimary }, props.primaryLabel) : null,
          props.secondaryLabel ? h(Button, { variant: 'link', onClick: props.onSecondary }, props.secondaryLabel) : null) : null));
  }

  function ProfessionalCard(props) {
    return h(Card, { variant: 'elevado', padded: false, className: props.className },
      h('div', { className: 'qo-pro' },
        h('div', { className: 'qo-pro__head' },
          h(Avatar, { name: props.name, src: props.photo, size: 'lg' }),
          h('div', { style: { flex: 1, minWidth: 0 } },
            h('h3', { className: 'qo-pro__name' }, props.name),
            h('p', { className: 'qo-pro__role' }, props.role)),
          props.verified ? h(Badge, { tone: 'sucesso', icon: 'check' }, 'Verificado') : null),
        h('div', { className: 'qo-pro__meta' },
          props.rating != null ? h(Rating, { value: props.rating, count: props.reviews, compact: true }) : null,
          props.city ? h('span', null, h(Icon, { name: 'map-pin' }), props.city) : null,
          props.responseTime ? h('span', null, h(Icon, { name: 'clock' }), props.responseTime) : null),
        props.tags && props.tags.length ? h('div', { className: 'qo-pro__tags' }, props.tags.map(function (t) { return h(Badge, { key: t, tone: 'info' }, t); })) : null,
        h('div', { className: 'qo-pro__actions' },
          h(Button, { variant: 'contorno', size: 'sm', onClick: props.onProfile }, 'Ver perfil'),
          h(Button, { variant: 'primario', size: 'sm', onClick: props.onQuote }, 'Pedir orçamento'))));
  }

  function Stepper(props) {
    var steps = props.steps || ['Pedido', 'Propostas', 'Escolha'], cur = props.current || 0;
    return h('ol', { className: cx('qo-stepper', props.className), 'aria-label': props.label || 'Etapas' },
      steps.map(function (s, i) {
        var st = i < cur ? 'feito' : i === cur ? 'atual' : 'futuro';
        return h('li', { key: i, className: 'qo-step qo-step--' + st, 'aria-current': st === 'atual' ? 'step' : undefined },
          h('span', { className: 'qo-step__dot' }, st === 'feito' ? h(Icon, { name: 'check', strokeWidth: 3.5 }) : null),
          h('span', { className: 'qo-step__label' }, s));
      }));
  }

  function ServiceGrid(props) {
    var items = props.items || [{ icon: 'pintura', label: 'Pintura' }, { icon: 'reforma', label: 'Reforma' }, { icon: 'eletrica', label: 'Elétrica' }];
    return h('div', { className: cx('qo-servicegrid', props.className), role: 'group', 'aria-label': props.label || 'Serviços' },
      items.map(function (it) {
        return h(ServiceTile, { key: it.label, icon: it.icon, label: it.label, selected: props.value == null ? undefined : props.value === it.label, onClick: function () { if (props.onSelect) props.onSelect(it.label); } });
      }));
  }

  function BottomNav(props) {
    var items = props.items || [];
    return h('nav', { className: cx('qo-navbar', props.className), 'aria-label': props.label || 'Navegação principal' },
      items.map(function (it, i) {
        var active = props.value === i || props.value === it.label;
        return h('button', { key: it.label, type: 'button', className: 'qo-navbar__item', 'aria-current': active ? 'page' : undefined, onClick: function () { if (props.onChange) props.onChange(i, it.label); } },
          h('span', { className: 'qo-navbar__pill' }, h(Icon, { name: it.icon }), it.badge ? h(Badge, { count: it.badge }) : null),
          h('span', null, it.label));
      }));
  }

  function Tabs(props) {
    var items = props.items || [], val = props.value || 0;
    function key(e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d || !props.onChange) return;
      var n = (val + d + items.length) % items.length; props.onChange(n);
      var btns = e.currentTarget.querySelectorAll('[role=tab]'); if (btns[n]) btns[n].focus();
    }
    return h('div', { className: cx('qo-tabs', props.className), role: 'tablist', onKeyDown: key },
      items.map(function (t, i) {
        return h('button', { key: t, type: 'button', role: 'tab', className: 'qo-tab', 'aria-selected': i === val, tabIndex: i === val ? 0 : -1, onClick: function () { if (props.onChange) props.onChange(i); } }, t);
      }));
  }

  function useOverlay(open, onClose, ref) {
    useEffect(function () {
      if (!open) return;
      var prev = document.activeElement;
      if (ref.current) ref.current.focus();
      function k(e) { if (e.key === 'Escape' && onClose) onClose(); }
      document.addEventListener('keydown', k);
      return function () { document.removeEventListener('keydown', k); if (prev && prev.focus) prev.focus(); };
    }, [open]);
  }

  function Modal(props) {
    var ref = useRef(null), tid = useFieldId(null) + '-t';
    useOverlay(props.open, props.onClose, ref);
    if (!props.open) return null;
    return h('div', { className: cx('qo-scrim', props.contained && 'qo-scrim--contido'), onMouseDown: function (e) { if (e.target === e.currentTarget && props.onClose) props.onClose(); } },
      h('div', { ref: ref, className: cx('qo-modal', props.className), role: 'dialog', 'aria-modal': true, 'aria-labelledby': tid, tabIndex: -1 },
        props.icon ? h('div', { className: 'qo-modal__icon' }, h(Icon, { name: props.icon })) : null,
        h('h2', { className: 'qo-modal__title', id: tid }, props.title),
        h('div', { className: 'qo-modal__body' }, props.children),
        props.actions ? h('div', { className: 'qo-modal__actions' }, props.actions) : null));
  }

  function BottomSheet(props) {
    var ref = useRef(null), tid = useFieldId(null) + '-t';
    useOverlay(props.open, props.onClose, ref);
    if (!props.open) return null;
    return h('div', { className: cx('qo-scrim qo-scrim--sheet', props.contained && 'qo-scrim--contido'), onMouseDown: function (e) { if (e.target === e.currentTarget && props.onClose) props.onClose(); } },
      h('div', { ref: ref, className: cx('qo-sheet', props.className), role: 'dialog', 'aria-modal': true, 'aria-labelledby': props.title ? tid : undefined, tabIndex: -1 },
        h('div', { className: 'qo-sheet__handle', 'aria-hidden': true }),
        props.title ? h('h2', { className: 'qo-sheet__title', id: tid }, props.title) : null,
        props.children));
  }

  function EmptyState(props) {
    return h('div', { className: cx('qo-empty', props.className) },
      h('div', { className: 'qo-empty__icon' }, h(Icon, { name: props.icon || 'pedidos' })),
      h('h2', { className: 'qo-empty__title' }, props.title),
      props.text ? h('p', { className: 'qo-empty__text' }, props.text) : null,
      props.action || null);
  }

  function QuoteForm(props) {
    var services = props.services || ['Pintura', 'Reforma', 'Elétrica', 'Hidráulica'];
    var cities = props.cities || ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Manaus'];
    var st = useState({ servico: props.defaultService || services[0], cidade: cities[0], descricao: '', prazo: 'Este mês', fotos: false });
    var v = st[0], set = st[1];
    var er = useState(null), err = er[0], setErr = er[1];
    function upd(k) { return function (e) { var o = Object.assign({}, v); o[k] = e.target.type === 'checkbox' ? e.target.checked : e.target.value; set(o); }; }
    function submit(e) {
      e.preventDefault();
      if (v.descricao.trim().length < 10) { setErr('Conte um pouco mais: pelo menos 10 caracteres.'); return; }
      setErr(null); if (props.onSubmit) props.onSubmit(v);
    }
    return h('form', { className: cx('qo-form', props.className), onSubmit: submit, noValidate: true },
      h('fieldset', { className: 'qo-form__group' },
        h('legend', { className: 'qo-form__legend' }, 'O que você precisa'),
        h('div', { className: 'qo-form__row' },
          h(Select, { label: 'Serviço', options: services, value: v.servico, onChange: upd('servico') }),
          h(Select, { label: 'Cidade', options: cities, value: v.cidade, onChange: upd('cidade') })),
        h(TextField, { label: 'Descreva a obra', required: true, multiline: true, placeholder: 'Ex.: pintar sala e dois quartos, cerca de 60 m²', value: v.descricao, onChange: upd('descricao'), error: err, helper: 'Quanto mais detalhes, melhores as propostas.' })),
      h('fieldset', { className: 'qo-form__group' },
        h('legend', { className: 'qo-form__legend' }, 'Quando'),
        h('div', { role: 'radiogroup', 'aria-label': 'Prazo', style: { display: 'flex', flexDirection: 'column' } }, ['Este mês', 'Nos próximos 3 meses', 'Só estou pesquisando'].map(function (p) {
          return h(Radio, { key: p, name: 'prazo', value: p, label: p, checked: v.prazo === p, onChange: upd('prazo') });
        })),
        h(Checkbox, { label: 'Quero enviar fotos depois', description: 'Fotos ajudam o profissional a estimar o valor.', checked: v.fotos, onChange: upd('fotos') })),
      h(Button, { type: 'submit', variant: 'primario', size: 'lg', block: true, loading: props.loading }, props.submitLabel || 'solicitar orçamento'));
  }

  /* ───────── Layout ───────── */
  function Container(props) { return h('div', { className: cx('qo-container', props.className), style: props.style }, props.children); }
  function Grid(props) { return h('div', { className: cx('qo-grid', props.className), style: props.style }, props.children); }
  function Col(props) {
    var s = Object.assign({ '--sm': props.sm || 4, '--md': props.md || props.sm * 2 || 8, '--lg': props.lg || props.md * 1.5 || 12 }, props.style);
    return h('div', { className: cx('qo-col', props.className), style: s }, props.children);
  }
  function Stack(props) {
    var gap = props.gap || 4;
    return h(props.as || 'div', { className: cx('qo-stack', props.direction === 'row' && 'qo-stack--row', props.className), style: Object.assign({ gap: 'var(--space-' + gap + ')' }, props.style) }, props.children);
  }
  function AppShell(props) {
    return h('div', { className: cx('qo-root qo-shell', !props.bottomNav && 'qo-shell--nonav', props.className), style: props.style },
      props.appBar || null,
      h('main', { className: 'qo-shell__main' }, props.children),
      props.fab ? h('div', { className: 'qo-shell__fab' }, props.fab) : null,
      props.footer ? h('div', { className: 'qo-shell__footer' }, props.footer) : null,
      props.bottomNav || null);
  }

  var api = {
    Icon: Icon, Badge: Badge, Avatar: Avatar, Divider: Divider, Spinner: Spinner, Checkbox: Checkbox, Radio: Radio, Switch: Switch, Rating: Rating,
    Button: Button, IconButton: IconButton, TextField: TextField, Select: Select, SearchField: SearchField, ServiceTile: ServiceTile, Chip: Chip, ListItem: ListItem, Toast: Toast,
    AppBar: AppBar, GreetingHeader: GreetingHeader, Card: Card, PromoCard: PromoCard, ProfessionalCard: ProfessionalCard, Stepper: Stepper, ServiceGrid: ServiceGrid,
    BottomNav: BottomNav, Tabs: Tabs, Modal: Modal, BottomSheet: BottomSheet, EmptyState: EmptyState, QuoteForm: QuoteForm,
    Container: Container, Grid: Grid, Col: Col, Stack: Stack, AppShell: AppShell
  };
  window.QueroObras = Object.assign(window.QueroObras || {}, api);
})();
