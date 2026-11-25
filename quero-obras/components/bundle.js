/* @ds-bundle: {"format":4,"namespace":"QueroObras","components":[{"name":"Icon"},{"name":"Badge"},{"name":"Avatar"},{"name":"Divider"},{"name":"Spinner"},{"name":"Checkbox"},{"name":"Radio"},{"name":"Switch"},{"name":"Rating"},{"name":"Button"},{"name":"IconButton"},{"name":"TextField"},{"name":"Select"},{"name":"DatePicker"},{"name":"SearchField"},{"name":"ServiceTile"},{"name":"Chip"},{"name":"ListItem"},{"name":"Toast"},{"name":"AppBar"},{"name":"GreetingHeader"},{"name":"Card"},{"name":"PromoCard"},{"name":"ProfessionalCard"},{"name":"Stepper"},{"name":"ServiceGrid"},{"name":"BottomNav"},{"name":"Tabs"},{"name":"Modal"},{"name":"BottomSheet"},{"name":"EmptyState"},{"name":"QuoteForm"},{"name":"Container"},{"name":"Grid"},{"name":"Col"},{"name":"Stack"},{"name":"AppShell"}]} */
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

  /* ───────── Ícones: Material Symbols Rounded (Google Fonts) ─────────
     Padrão: FILL 0 · wght 400 · GRAD 0 · opsz 24. Use filled para a versão preenchida.
     Os nomes abaixo são atalhos da Quero Obras; qualquer nome do Material Symbols também funciona. */
  var I = {
    home: 'home', search: 'search', pintura: 'format_paint', reforma: 'construction', eletrica: 'bolt', hidraulica: 'water_drop',
    grid: 'grid_view', chat: 'chat', bell: 'notifications', user: 'person', check: 'check', 'check-circle': 'check_circle',
    shield: 'verified_user', verificado: 'verified', 'chevron-right': 'chevron_right', 'chevron-left': 'chevron_left', 'chevron-down': 'expand_more',
    'arrow-left': 'arrow_back', close: 'close', plus: 'add', star: 'star', 'map-pin': 'location_on', calendar: 'calendar_month',
    clock: 'schedule', filter: 'tune', heart: 'favorite', menu: 'menu', more: 'more_vert', pedidos: 'assignment', image: 'image',
    info: 'info', alert: 'error', camera: 'photo_camera', phone: 'call', edit: 'edit', trash: 'delete', send: 'send',
    ferramentas: 'handyman', casa: 'house', orcamento: 'request_quote', pagamento: 'payments', foto: 'add_a_photo', compartilhar: 'share'
  };
  var ICON_NAMES = Object.keys(I);

  function Icon(props) {
    var glyph = I[props.name] || String(props.name || 'help').replace(/-/g, '_');
    var style = Object.assign({}, props.style);
    if (props.size) { style.fontSize = props.size + 'px'; }
    if (props.weight || props.grade != null) {
      style.fontVariationSettings = "'FILL' " + (props.filled ? 1 : 0) + ", 'wght' " + (props.weight || 400) + ", 'GRAD' " + (props.grade || 0) + ", 'opsz' 24";
    }
    return h('span', {
      className: cx('qo-icon', props.filled && 'qo-icon--filled', props.className), style: style, translate: 'no',
      role: props.label ? 'img' : undefined, 'aria-label': props.label, 'aria-hidden': props.label ? undefined : true
    }, glyph);
  }
  Icon.names = ICON_NAMES;
  Icon.glyphs = I;

  /* ───────── Átomos ───────── */
  function Badge(props) {
    var tone = props.tone || 'neutro';
    if (props.count != null) {
      var n = props.count > 99 ? '99+' : String(props.count);
      return h('span', { className: cx('qo-badge qo-badge--count', props.className), 'aria-label': n + ' novas' }, n);
    }
    return h('span', { className: cx('qo-badge', tone !== 'neutro' && 'qo-badge--' + tone, props.className) },
      props.icon ? h(Icon, { name: props.icon, filled: props.iconFilled }) : null, props.children);
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
    for (var i = 1; i <= 5; i++) stars.push(h(Icon, { key: i, name: 'star', filled: true, className: i <= Math.round(v) ? '' : 'qo-rating__off' }));
    return h('span', { className: cx('qo-rating', props.className), role: 'img', 'aria-label': 'Nota ' + v.toFixed(1).replace('.', ',') + ' de 5' + (props.count != null ? ', ' + props.count + ' avaliações' : '') },
      props.compact ? h(Icon, { name: 'star', filled: true }) : stars,
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

  function useOutside(ref, open, close) {
    useEffect(function () {
      if (!open) return;
      function f(e) { if (ref.current && !ref.current.contains(e.target)) close(); }
      document.addEventListener('mousedown', f); document.addEventListener('touchstart', f);
      return function () { document.removeEventListener('mousedown', f); document.removeEventListener('touchstart', f); };
    }, [open]);
  }

  function Select(props) {
    var id = useFieldId(props.id);
    var opts = (props.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
    var controlled = props.value !== undefined;
    var st = useState(props.defaultValue != null ? props.defaultValue : ''), inner = st[0], setInner = st[1];
    var value = controlled ? props.value : inner;
    var sel = -1; opts.forEach(function (o, i) { if (o.value === value) sel = i; });
    var os = useState(!!props.defaultOpen), open = os[0], setOpen = os[1];
    var as = useState(sel < 0 ? 0 : sel), active = as[0], setActive = as[1];
    var wrap = useRef(null), btn = useRef(null), list = useRef(null);
    useOutside(wrap, open, function () { setOpen(false); });
    useEffect(function () {
      if (!open || !list.current) return;
      var el = list.current.children[active]; if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
    }, [open, active]);
    function openList() { if (props.disabled) return; setActive(sel < 0 ? 0 : sel); setOpen(true); }
    function choose(i) {
      var v = opts[i].value;
      if (!controlled) setInner(v);
      if (props.onChange) props.onChange({ target: { value: v, name: props.name }, currentTarget: { value: v, name: props.name } });
      setOpen(false); if (btn.current) btn.current.focus();
    }
    function key(e) {
      var k = e.key;
      if (!open) { if (k === 'ArrowDown' || k === 'ArrowUp' || k === 'Enter' || k === ' ') { e.preventDefault(); openList(); } return; }
      if (k === 'ArrowDown') { e.preventDefault(); setActive(Math.min(opts.length - 1, active + 1)); }
      else if (k === 'ArrowUp') { e.preventDefault(); setActive(Math.max(0, active - 1)); }
      else if (k === 'Home') { e.preventDefault(); setActive(0); }
      else if (k === 'End') { e.preventDefault(); setActive(opts.length - 1); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); choose(active); }
      else if (k === 'Escape') { e.preventDefault(); setOpen(false); }
      else if (k === 'Tab') setOpen(false);
      else if (k.length === 1) {
        var q = k.toLowerCase();
        for (var n = 1; n <= opts.length; n++) { var j = (active + n) % opts.length; if (String(opts[j].label).toLowerCase().indexOf(q) === 0) { setActive(j); break; } }
      }
    }
    var current = sel >= 0 ? opts[sel] : null;
    return Field(Object.assign({}, props, { __id: id }),
      h('div', { className: 'qo-select', ref: wrap },
        h('button', {
          ref: btn, id: id, type: 'button', className: cx('qo-field__box qo-select__trigger', open && 'qo-select__trigger--open'), disabled: props.disabled,
          'aria-haspopup': 'listbox', 'aria-expanded': open, 'aria-controls': id + '-list', 'aria-invalid': props.error ? true : undefined,
          'aria-describedby': (props.error || props.helper) ? id + '-help' : undefined,
          'aria-activedescendant': open ? id + '-o' + active : undefined,
          onClick: function () { open ? setOpen(false) : openList(); }, onKeyDown: key
        },
          props.icon ? h(Icon, { name: props.icon }) : (current && current.icon ? h(Icon, { name: current.icon }) : null),
          h('span', { className: cx('qo-select__value', !current && 'qo-select__placeholder') }, current ? current.label : (props.placeholder || 'Selecione')),
          h(Icon, { name: 'chevron-down', className: 'qo-select__chev' })),
        open ? h('ul', { ref: list, id: id + '-list', role: 'listbox', className: 'qo-menu', 'aria-labelledby': id, tabIndex: -1 },
          opts.map(function (o, i) {
            return h('li', {
              key: o.value, id: id + '-o' + i, role: 'option', 'aria-selected': i === sel,
              className: cx('qo-menu__opt', i === active && 'qo-menu__opt--active', i === sel && 'qo-menu__opt--sel'),
              onMouseEnter: function () { setActive(i); }, onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { choose(i); }
            }, o.icon ? h(Icon, { name: o.icon, size: 20 }) : null, h('span', { className: 'qo-menu__label' }, o.label), i === sel ? h(Icon, { name: 'check', size: 18, className: 'qo-menu__check' }) : null);
          })) : null,
        props.name ? h('input', { type: 'hidden', name: props.name, value: value }) : null));
  }

  /* ───── DatePicker ───── */
  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  var SEMANA_LONGO = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function toISO(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function fromISO(s) { if (!s) return null; var p = String(s).split('-'); if (p.length !== 3) return null; return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmtBR(s) { var d = fromISO(s); return d ? pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() : ''; }
  function addDays(s, n) { var d = fromISO(s); d.setDate(d.getDate() + n); return toISO(d); }
  function addMonths(s, n) { var d = fromISO(s), day = d.getDate(); d.setDate(1); d.setMonth(d.getMonth() + n); var last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); d.setDate(Math.min(day, last)); return toISO(d); }

  function DatePicker(props) {
    var id = useFieldId(props.id);
    var today = toISO(new Date());
    var controlled = props.value !== undefined;
    var st = useState(props.defaultValue || ''), inner = st[0], setInner = st[1];
    var value = controlled ? (props.value || '') : inner;
    var os = useState(!!props.defaultOpen), open = os[0], setOpen = os[1];
    var fs = useState(value || today), focus = fs[0], setFocus = fs[1];
    var kb = useRef(false), wrap = useRef(null), btn = useRef(null), grid = useRef(null);
    useOutside(wrap, open, function () { setOpen(false); });
    function allowed(s) { return (!props.min || s >= props.min) && (!props.max || s <= props.max); }
    useEffect(function () {
      if (open && kb.current && grid.current) { var el = grid.current.querySelector('[data-day="' + focus + '"]'); if (el) el.focus(); }
    }, [open, focus]);
    function openCal() { if (props.disabled) return; setFocus(value || (props.min && props.min > today ? props.min : today)); setOpen(true); }
    function choose(s) {
      if (!allowed(s)) return;
      if (!controlled) setInner(s);
      if (props.onChange) props.onChange(s);
      setOpen(false); kb.current = false; if (btn.current) btn.current.focus();
    }
    function key(e) {
      var map = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
      kb.current = true;
      if (map[e.key] != null) { e.preventDefault(); setFocus(addDays(focus, map[e.key])); }
      else if (e.key === 'PageUp') { e.preventDefault(); setFocus(addMonths(focus, -1)); }
      else if (e.key === 'PageDown') { e.preventDefault(); setFocus(addMonths(focus, 1)); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(focus); }
      else if (e.key === 'Escape') { e.preventDefault(); setOpen(false); if (btn.current) btn.current.focus(); }
    }
    var f = fromISO(focus), y = f.getFullYear(), m = f.getMonth();
    var first = new Date(y, m, 1), start = new Date(y, m, 1 - first.getDay());
    var cells = [];
    for (var i = 0; i < 42; i++) {
      var d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i), iso = toISO(d);
      var out = d.getMonth() !== m, ok = allowed(iso);
      cells.push(h('button', {
        key: iso, type: 'button', role: 'gridcell', 'data-day': iso, tabIndex: iso === focus ? 0 : -1, disabled: !ok,
        'aria-selected': iso === value, 'aria-current': iso === today ? 'date' : undefined,
        'aria-label': d.getDate() + ' de ' + MESES[d.getMonth()] + ', ' + SEMANA_LONGO[d.getDay()],
        className: cx('qo-cal__day', out && 'qo-cal__day--out', iso === today && 'qo-cal__day--today', iso === value && 'qo-cal__day--sel'),
        onClick: (function (s) { return function () { choose(s); }; })(iso)
      }, d.getDate()));
    }
    return Field(Object.assign({}, props, { __id: id }),
      h('div', { className: 'qo-select', ref: wrap },
        h('button', {
          ref: btn, id: id, type: 'button', className: cx('qo-field__box qo-select__trigger', open && 'qo-select__trigger--open'), disabled: props.disabled,
          'aria-haspopup': 'dialog', 'aria-expanded': open, 'aria-describedby': (props.error || props.helper) ? id + '-help' : undefined,
          onClick: function () { kb.current = false; open ? setOpen(false) : openCal(); },
          onKeyDown: function (e) { if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); kb.current = true; openCal(); } }
        },
          h(Icon, { name: 'calendar' }),
          h('span', { className: cx('qo-select__value', !value && 'qo-select__placeholder') }, value ? fmtBR(value) : (props.placeholder || 'dd/mm/aaaa')),
          h(Icon, { name: 'chevron-down', className: 'qo-select__chev' })),
        open ? h('div', { className: 'qo-cal', role: 'dialog', 'aria-modal': false, 'aria-label': 'Escolher data', onKeyDown: key },
          h('div', { className: 'qo-cal__head' },
            h(IconButton, { icon: 'chevron-left', label: 'Mês anterior', onClick: function () { setFocus(addMonths(focus, -1)); } }),
            h('span', { className: 'qo-cal__title', 'aria-live': 'polite' }, MESES[m].charAt(0).toUpperCase() + MESES[m].slice(1) + ' de ' + y),
            h(IconButton, { icon: 'chevron-right', label: 'Próximo mês', onClick: function () { setFocus(addMonths(focus, 1)); } })),
          h('div', { className: 'qo-cal__week', 'aria-hidden': true }, SEMANA.map(function (w, i) { return h('span', { key: i }, w); })),
          h('div', { className: 'qo-cal__grid', role: 'grid', ref: grid }, cells),
          h('div', { className: 'qo-cal__foot' },
            h(Button, { variant: 'link', size: 'sm', disabled: !allowed(today), onClick: function () { choose(today); } }, 'Hoje'),
            value ? h(Button, { variant: 'link', size: 'sm', onClick: function () { if (!controlled) setInner(''); if (props.onChange) props.onChange(''); setOpen(false); } }, 'Limpar') : null)) : null,
        props.name ? h('input', { type: 'hidden', name: props.name, value: value }) : null));
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
      h(Icon, { name: props.icon, filled: !!props.selected }), h('span', null, props.label));
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
      h(Icon, { name: icon, filled: true, className: 'qo-toast__icon' }),
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
          props.verified ? h(Badge, { tone: 'sucesso', icon: 'verificado', iconFilled: true }, 'Verificado') : null),
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
          h('span', { className: 'qo-step__dot' }, st === 'feito' ? h(Icon, { name: 'check', weight: 700 }) : null),
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
          h('span', { className: 'qo-navbar__pill' }, h(Icon, { name: it.icon, filled: active }), it.badge ? h(Badge, { count: it.badge }) : null),
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
    var st = useState({ servico: props.defaultService || services[0], cidade: cities[0], descricao: '', prazo: 'Este mês', data: '', fotos: false });
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
        h(DatePicker, { label: 'Data preferida para a visita', helper: 'Opcional. O profissional confirma com você.', min: toISO(new Date()), value: v.data, onChange: function (d) { set(Object.assign({}, v, { data: d })); } }),
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
    Button: Button, IconButton: IconButton, TextField: TextField, Select: Select, DatePicker: DatePicker, SearchField: SearchField, ServiceTile: ServiceTile, Chip: Chip, ListItem: ListItem, Toast: Toast,
    AppBar: AppBar, GreetingHeader: GreetingHeader, Card: Card, PromoCard: PromoCard, ProfessionalCard: ProfessionalCard, Stepper: Stepper, ServiceGrid: ServiceGrid,
    BottomNav: BottomNav, Tabs: Tabs, Modal: Modal, BottomSheet: BottomSheet, EmptyState: EmptyState, QuoteForm: QuoteForm,
    Container: Container, Grid: Grid, Col: Col, Stack: Stack, AppShell: AppShell
  };
  window.QueroObras = Object.assign(window.QueroObras || {}, api);
})();
