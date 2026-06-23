(function () {
  "use strict";

  var STORAGE_KEY = "uberLucroReal:v1";

  var CATEGORIES = {
    income: ["Corrida", "Gorjeta", "Bônus", "Outro"],
    expense: ["Gasolina", "Manutenção", "Pedágio", "Estacionamento", "Outro"]
  };

  var currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  var monthLabelFormatter = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric"
  });

  var dateLabelFormatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit"
  });

  var els = {
    monthSelect: document.getElementById("monthSelect"),
    prevMonth: document.getElementById("prevMonth"),
    nextMonth: document.getElementById("nextMonth"),
    profitValue: document.getElementById("profitValue"),
    incomeValue: document.getElementById("incomeValue"),
    expenseValue: document.getElementById("expenseValue"),
    kmValue: document.getElementById("kmValue"),
    perKmValue: document.getElementById("perKmValue"),
    transactionList: document.getElementById("transactionList"),
    emptyState: document.getElementById("emptyState"),
    countPill: document.getElementById("countPill"),
    fabAdd: document.getElementById("fabAdd"),
    sheetOverlay: document.getElementById("sheetOverlay"),
    sheet: document.getElementById("sheet"),
    sheetTitle: document.getElementById("sheetTitle"),
    transactionForm: document.getElementById("transactionForm"),
    formId: document.getElementById("formId"),
    formOriginalMonth: document.getElementById("formOriginalMonth"),
    typeToggle: document.getElementById("typeToggle"),
    formCategory: document.getElementById("formCategory"),
    formAmount: document.getElementById("formAmount"),
    formKm: document.getElementById("formKm"),
    formDate: document.getElementById("formDate"),
    formNote: document.getElementById("formNote"),
    deleteBtn: document.getElementById("deleteBtn")
  };

  var state = {
    data: loadData(),
    currentViewKey: monthKeyFromDate(new Date()),
    currentType: "income"
  };

  function loadData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  }

  function monthKeyFromDate(date) {
    var y = date.getFullYear();
    var m = String(date.getMonth() + 1).padStart(2, "0");
    return y + "-" + m;
  }

  function todayISO() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  function shiftMonthKey(key, delta) {
    var parts = key.split("-");
    var y = parseInt(parts[0], 10);
    var m = parseInt(parts[1], 10) - 1;
    var d = new Date(y, m + delta, 1);
    return monthKeyFromDate(d);
  }

  function monthLabel(key) {
    var parts = key.split("-");
    var d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, 1);
    var label = monthLabelFormatter.format(d);
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  function getMonthEntries(key) {
    return state.data[key] || [];
  }

  function generateId() {
    return "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function formatCurrency(value) {
    return currencyFormatter.format(value || 0);
  }

  function formatKm(value) {
    return (value || 0).toLocaleString("pt-BR") + " km";
  }

  // --- Month selector ---

  function getAvailableMonthKeys() {
    var keys = Object.keys(state.data).filter(function (k) {
      return getMonthEntries(k).length > 0;
    });
    var todayKey = monthKeyFromDate(new Date());
    if (keys.indexOf(todayKey) === -1) keys.push(todayKey);
    if (keys.indexOf(state.currentViewKey) === -1) keys.push(state.currentViewKey);
    keys.sort().reverse();
    return keys;
  }

  function renderMonthSelector() {
    var keys = getAvailableMonthKeys();
    els.monthSelect.innerHTML = "";
    keys.forEach(function (key) {
      var opt = document.createElement("option");
      opt.value = key;
      opt.textContent = monthLabel(key);
      if (key === state.currentViewKey) opt.selected = true;
      els.monthSelect.appendChild(opt);
    });
  }

  // --- Summary ---

  function renderSummary() {
    var entries = getMonthEntries(state.currentViewKey);
    var income = 0, expense = 0, km = 0;

    entries.forEach(function (t) {
      if (t.type === "income") income += t.amount;
      else expense += t.amount;
      km += t.km || 0;
    });

    var profit = income - expense;

    els.profitValue.textContent = formatCurrency(profit);
    els.profitValue.classList.toggle("positive", profit >= 0);
    els.profitValue.classList.toggle("negative", profit < 0);
    els.incomeValue.textContent = formatCurrency(income);
    els.expenseValue.textContent = formatCurrency(expense);
    els.kmValue.textContent = formatKm(km);

    els.perKmValue.textContent = km > 0
      ? "Média de " + formatCurrency(profit / km) + " de lucro por km"
      : "";
  }

  // --- List ---

  function renderList() {
    var entries = getMonthEntries(state.currentViewKey)
      .slice()
      .sort(function (a, b) {
        return b.date.localeCompare(a.date) || b.id.localeCompare(a.id);
      });

    els.transactionList.innerHTML = "";
    els.countPill.textContent = entries.length;
    els.emptyState.style.display = entries.length === 0 ? "block" : "none";

    entries.forEach(function (t) {
      var li = document.createElement("li");
      li.className = "transaction-item";
      li.dataset.id = t.id;

      var icon = document.createElement("div");
      icon.className = "t-icon " + t.type;
      icon.textContent = t.type === "income" ? "↑" : "↓";

      var info = document.createElement("div");
      info.className = "t-info";

      var category = document.createElement("div");
      category.className = "t-category";
      category.textContent = t.category;

      var meta = document.createElement("div");
      meta.className = "t-meta";
      var metaParts = [dateLabelFormatter.format(new Date(t.date + "T00:00:00"))];
      if (t.km) metaParts.push(t.km.toLocaleString("pt-BR") + " km");
      if (t.note) metaParts.push(t.note);
      meta.textContent = metaParts.join(" · ");

      info.appendChild(category);
      info.appendChild(meta);

      var amount = document.createElement("div");
      amount.className = "t-amount " + t.type;
      amount.textContent = (t.type === "income" ? "+ " : "- ") + formatCurrency(t.amount);

      li.appendChild(icon);
      li.appendChild(info);
      li.appendChild(amount);

      li.addEventListener("click", function () {
        openSheet("edit", t);
      });

      els.transactionList.appendChild(li);
    });
  }

  function renderAll() {
    renderMonthSelector();
    renderSummary();
    renderList();
  }

  // --- Sheet (add / edit) ---

  function populateCategories(type) {
    els.formCategory.innerHTML = "";
    CATEGORIES[type].forEach(function (cat) {
      var opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      els.formCategory.appendChild(opt);
    });
  }

  function setType(type) {
    state.currentType = type;
    var buttons = els.typeToggle.querySelectorAll(".type-btn");
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.dataset.type === type);
    });
    var previousCategory = els.formCategory.value;
    populateCategories(type);
    if (CATEGORIES[type].indexOf(previousCategory) !== -1) {
      els.formCategory.value = previousCategory;
    }
  }

  function openSheet(mode, transaction) {
    els.transactionForm.reset();

    if (mode === "edit" && transaction) {
      els.sheetTitle.textContent = "Editar lançamento";
      els.formId.value = transaction.id;
      els.formOriginalMonth.value = monthKeyFromDate(new Date(transaction.date + "T00:00:00"));
      setType(transaction.type);
      els.formCategory.value = transaction.category;
      els.formAmount.value = transaction.amount;
      els.formKm.value = transaction.km || "";
      els.formDate.value = transaction.date;
      els.formNote.value = transaction.note || "";
      els.deleteBtn.style.display = "block";
    } else {
      els.sheetTitle.textContent = "Novo lançamento";
      els.formId.value = "";
      els.formOriginalMonth.value = "";
      setType("income");
      els.formDate.value = todayISO();
      els.deleteBtn.style.display = "none";
    }

    els.sheetOverlay.classList.add("visible");
    els.sheet.classList.add("visible");
  }

  function closeSheet() {
    els.sheetOverlay.classList.remove("visible");
    els.sheet.classList.remove("visible");
  }

  function removeEntry(monthKey, id) {
    if (!state.data[monthKey]) return;
    state.data[monthKey] = state.data[monthKey].filter(function (t) {
      return t.id !== id;
    });
    if (state.data[monthKey].length === 0) delete state.data[monthKey];
  }

  els.typeToggle.addEventListener("click", function (e) {
    var btn = e.target.closest(".type-btn");
    if (!btn) return;
    setType(btn.dataset.type);
  });

  els.transactionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var amount = parseFloat(els.formAmount.value);
    if (isNaN(amount) || amount < 0) return;

    var date = els.formDate.value;
    var newMonthKey = monthKeyFromDate(new Date(date + "T00:00:00"));
    var id = els.formId.value;
    var originalMonth = els.formOriginalMonth.value;

    var entry = {
      id: id || generateId(),
      type: state.currentType,
      category: els.formCategory.value,
      amount: amount,
      km: parseFloat(els.formKm.value) || 0,
      date: date,
      note: els.formNote.value.trim()
    };

    if (id && originalMonth) {
      removeEntry(originalMonth, id);
    }

    if (!state.data[newMonthKey]) state.data[newMonthKey] = [];
    state.data[newMonthKey].push(entry);

    saveData();
    state.currentViewKey = newMonthKey;
    closeSheet();
    renderAll();
  });

  els.deleteBtn.addEventListener("click", function () {
    var id = els.formId.value;
    var originalMonth = els.formOriginalMonth.value;
    if (!id || !originalMonth) return;
    if (!confirm("Excluir este lançamento?")) return;
    removeEntry(originalMonth, id);
    saveData();
    closeSheet();
    renderAll();
  });

  els.fabAdd.addEventListener("click", function () {
    openSheet("add");
  });

  els.sheetOverlay.addEventListener("click", closeSheet);

  els.monthSelect.addEventListener("change", function () {
    state.currentViewKey = els.monthSelect.value;
    renderSummary();
    renderList();
  });

  els.prevMonth.addEventListener("click", function () {
    state.currentViewKey = shiftMonthKey(state.currentViewKey, -1);
    renderAll();
  });

  els.nextMonth.addEventListener("click", function () {
    state.currentViewKey = shiftMonthKey(state.currentViewKey, 1);
    renderAll();
  });

  renderAll();
})();
