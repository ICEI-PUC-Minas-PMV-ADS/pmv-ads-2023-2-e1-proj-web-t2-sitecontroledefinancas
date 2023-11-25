const localStorageExpenses = JSON.parse(localStorage.getItem('expenseCategories'));

const defaultExpenses = {
  Lazer: '#571529',
  Moradia: '#73262e',
  Pagamentos: '#a0413a',
  Educação: '#d0683c',
  Alimentação: '#e69526',
  Saúde: '#d17832',
  Transaporte: '#efb96d',
  Vestuário: '#fff8b6'
}
if (!localStorageExpenses) {
  localStorage.setItem('expenseCategories', JSON.stringify(defaultExpenses))
}
const expenseCategories = localStorageExpenses || defaultExpenses;


const localStorageIncomings = JSON.parse(localStorage.getItem('incomingsCategories'));
const defaultIncomings = {
  Salário: '#05141e',
  Investimentos: '#132a3f',
  Freelancer: '#28555f',
  Bolsa: '#3f7182',
  Mesada: "#007473"
}
if (!localStorageIncomings) {
  localStorage.setItem('incomingsCategories', JSON.stringify(defaultIncomings));
}

const incomingsCategories = localStorageIncomings || defaultIncomings;


// Capturtando informações de despesas e receitas do local storage
const users = JSON.parse(localStorage.getItem('users'));
const expenses = users[loggedUser.email].expenses.filter((expense) => !expense.card);
const incomings = users[loggedUser.email].incomings;
const cardExpenses = users[loggedUser.email].expenses.filter((expense) => expense.card);
const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

const formularioDeFiltro = document.getElementById("filter-form");

// esconde o alerta de gastos
const alerta = document.getElementById("alerta");
alerta.addEventListener("click", (e) => {
  alerta.style.visibility = "hidden";
})

// Adiciona logica de filtrar despesas por mês
formularioDeFiltro.addEventListener('submit', (e) => {
  e.preventDefault();
  const mesParaFiltrar = document.getElementById("meses").value;
  const anoParaFiltrar = document.getElementById("ano").value;
  let filteredExpenses = [...expenses]
  let filteredIncomings = [...incomings]
  if(anoParaFiltrar) {
    filteredExpenses = expenses.filter((despesa) => {
      const anodaDespesa = despesa.date.split("-")[0];
      return  parseInt(anodaDespesa) === parseInt(anoParaFiltrar)
    })
    filteredIncomings = incomings.filter((entrada) => {
      const anodaEntrada = entrada.date.split("-")[0];
      return  parseInt(anodaEntrada) === parseInt(anoParaFiltrar)
    })
  }
  if (mesParaFiltrar) {
    filteredExpenses = expenses.filter((despesa) => {
      const mesdaDespesa = despesa.date.split("-")[1];
      return  parseInt(mesdaDespesa) === parseInt(mesParaFiltrar)
    })
    filteredIncomings = incomings.filter((entrada) => {
      const mesdaEntrada = entrada.date.split("-")[1];
      return  parseInt(mesdaEntrada) === parseInt(mesParaFiltrar)
    })
  }
  renderCards(filteredExpenses, filteredIncomings)
  renderCharts(filteredExpenses, filteredIncomings)
})

formularioDeFiltro.addEventListener("reset", (e) => {
  renderCards(expenses, incomings);
  renderCharts(expenses, incomings)
})


function renderCards(expenses, incomings) {
  // renderização dos cards
  const expensesTotal = expenses.reduce((acc, expense) => parseFloat(expense.value) + acc, 0);
  const incomingsTotal = incomings.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const cardExpensesTotal = cardExpenses.reduce((acc, cardExpense) => parseFloat(cardExpense.value) + acc, 0);
  const totalBalance  = incomingsTotal - (expensesTotal + cardExpensesTotal);

  console.log("expenses total:", expensesTotal)
  console.log("incomings total:", incomingsTotal)

  if ((expensesTotal + cardExpensesTotal) / incomingsTotal >= 0.8) {
    console.log('entrou')
    alerta.style.visibility = 'visible'
  } else {
    alerta.style.visibility = 'hidden'
  }


  const receitas = document.getElementById('receitas');
  const despesas = document.getElementById('despesas');
  const cartão = document.getElementById('cartão');
  const saldo = document.getElementById('saldo');

  receitas.innerText = formatter.format(incomingsTotal);
  despesas.innerText = formatter.format(expensesTotal);
  cartão.innerText = formatter.format(cardExpensesTotal);
  saldo.innerText = formatter.format(totalBalance);
}
renderCards(expenses, incomings)


function renderCharts(expenses, incomings) {
 // Despesas formatadas para o gráfico
 const allExpenses = [...expenses, ...cardExpenses]
  const expensesForChart = allExpenses.map((expense) => (
    {...expense,
      value: parseFloat(expense.value),
      name: expense.description,
      color: expenseCategories[expense.category]
    })
  )

  // Receitas formatadas para o gráfico
  const incomingsForChart = incomings.map((incoming) => (
    {...incoming,
      value: parseFloat(incoming.value),
      name: incoming.description,
      color: incomingsCategories[incoming.category]
    })
  )
  // Grafico de despesas
  document.getElementById('expenses-chart').innerHTML = ""
  const expenseChart = donut({
    el: document.getElementById('expenses-chart'),
    size: 200,
    weight: 30,
    data: expensesForChart.length > 0 ? expensesForChart : [{value: 100}],
    colors: expensesForChart.length > 0 ? expensesForChart.map((expense) => expense.color) : ['#5cf3a8']
  });

  // Grafico de Receitas
  document.getElementById('incomings-chart').innerHTML = ""
  const incomingsChart = donut({
    el: document.getElementById('incomings-chart'),
    size: 200,
    weight: 30,
    data: incomingsForChart.length > 0 ? [...incomingsForChart] : [{value: 100}],
    colors: incomingsForChart.length > 0 ? incomingsForChart.map((incoming) => incoming.color) : ['#5cf3a8']
  });
  const legendList = document.getElementById("expenses-legend-list");
  legendList.innerHTML = ""
  const incomingLegendList = document.getElementById("incomings-legend-list");
  incomingLegendList.innerHTML = ""
  createLegend(expensesForChart, legendList);
  createLegend(incomingsForChart, incomingLegendList);
}

renderCharts(expenses, incomings)

// Cria as legendas
function createLegend(lista, elemento) {
  if (lista.length === 0) {
    const li = document.createElement('li');
    li.classList.add("chart-legend-item");
    const span = document.createElement('span');
    span.className = "chart-legend-icon";
    span.style.backgroundColor = "#5cf3a8";
    li.appendChild(span);
    const textSpan = document.createElement('span');
    textSpan.innerText = "Não há informações cadastradas";
    li.appendChild(textSpan);
    elemento.appendChild(li);
    return;
  }
  lista.map((item) => {
    const li = document.createElement('li');
    li.classList.add("chart-legend-item");
    const span = document.createElement('span');
    span.className = "chart-legend-icon";
    span.style.backgroundColor = item.color;
    li.appendChild(span);
    const textSpan = document.createElement('span');
    textSpan.innerText = item.description;
    li.appendChild(textSpan);
    elemento.appendChild(li);
  });
}

// Mostra o nome do usuario loggado
const username = document.getElementById("username");
username.innerText = loggedUser.name;

const userSection = document.getElementById("user")
userSection.style.cursor = 'pointer'
userSection.addEventListener("click", () => window.location.href = "/perfil")
