/*
TODO:

Acrecentar select de ano no formulario;
capturar o envio do formulario em vez da mundaça do select;
permitir mostrar todas as despesas;

filtrar por ano;
filtrar por mes/ano;

combinar os filtros: mes/ano/categoria


Mostrar dados do usuário logado no cabeçalho;

Implementar logout

*/
const localStorageExpenses = JSON.parse(localStorage.getItem('expenseCategories'));

const defaultExpenses = {
  Lazer: 'blue',
  Moradia: 'red',
  Pagamentos: 'yellow',
  Educação: 'orange',
  Alimentação: 'gray',
  Saúde: 'black',
  Transaporte: 'lightblue',
  Vestuário: 'cyan'
}
if (!localStorageExpenses) {
  localStorage.setItem('expenseCategories', JSON.stringify(defaultExpenses))
}
const expenseCategories = localStorageExpenses || defaultExpenses;


const localStorageIncomings = JSON.parse(localStorage.getItem('incomingsCategories'));
const defaultIncomings = {
  Salário: 'blue',
  Investimentos: 'gray',
  Freelancer: 'orange',
  "Bolsa de estudos": 'yellow',
  Mesada: "lightblue"
}
if (!localStorageIncomings) {
  localStorage.setItem('incomingsCategories', JSON.stringify(defaultIncomings));
}

const incomingsCategories = localStorageIncomings || defaultIncomings;


// Capturtando informações de despesas e receitas do local storage
const users = JSON.parse(localStorage.getItem('users'));
const expenses = users[loggedUser.email].expenses;
const incomings = users[loggedUser.email].incomings;
const cardExpenses = users[loggedUser.email].cardExpenses;
const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

const meses = document.getElementById("meses");

// Adiciona logica de filtrar despesas por mês
meses.addEventListener('change', (e) => {
  const mesParaFiltrar = e.target.value;
  if (!mesParaFiltrar) {
    renderCards(expenses, incomings)
    renderCharts(expenses, incomings)
    return;
  }
  const filteredExpenses = expenses.filter((despesa) => {
    const mesdaDespesa = despesa.date.split("-")[1];
    return  parseInt(mesdaDespesa) === parseInt(mesParaFiltrar)
  })
  const filteredIncomings = incomings.filter((entrada) => {
    const mesdaEntrada = entrada.date.split("-")[1];
    return  parseInt(mesdaEntrada) === parseInt(mesParaFiltrar)
  })
  console.log("Receitas filtradas:", filteredIncomings)
  renderCards(filteredExpenses, filteredIncomings)
  renderCharts(filteredExpenses, filteredIncomings)
})


function renderCards(expenses, incomings) {
  // renderização dos cards
  const expensesTotal = expenses.reduce((acc, expense) => parseFloat(expense.value) + acc, 0);
  const incomingsTotal = incomings.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const cardExpensesTotal = cardExpenses.reduce((acc, cardExpense) => cardExpense.value + acc, 0);
  const totalBalance  = incomingsTotal - (expensesTotal + cardExpensesTotal);

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
  console.log("Despesas:", expenses)
  // Despesas formatadas para o gráfico
  const expensesForChart = expenses.map((expense) => (
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
    colors: expensesForChart.length > 0 ? expensesForChart.map((expense) => expense.color) : ['yellow']
  });

  // Grafico de Receitas
  document.getElementById('incomings-chart').innerHTML = ""
  const incomingsChart = donut({
    el: document.getElementById('incomings-chart'),
    size: 200,
    weight: 30,
    data: incomingsForChart.length > 0 ? [...incomingsForChart] : [{value: 100}],
    colors: incomingsForChart.length > 0 ? incomingsForChart.map((incoming) => incoming.color) : ['yellow']
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
    span.style.backgroundColor = "yellow";
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
