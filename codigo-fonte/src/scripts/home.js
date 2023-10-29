const expenseCategories = {
  diversão: 'blue',
  moradia: 'red',
  pagamentos: 'yellow',
  educação: 'orange',
  supermercado: 'gray',
  saúde: 'black',
  roupas: 'cyan'
}


function randomColor() {
  const colorList = ['green', '	lightseagreen', 'lightgreen', 'fuchsia', 'darkred', 'darkcyan', 	'mediumslateblue'];
  const index = Math.floor(Math.random() * 7);
  return colorList[index];
}


const incomingsCategories = {
  salario: 'blue',
  bolsa: 'gray'
}

const users = JSON.parse(localStorage.getItem('users'));
const expenses = users[loggedUser.email].expenses;
const incomings = users[loggedUser.email].incomings;
const cardExpenses = users[loggedUser.email].cardExpenses;
const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

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

const expensesForChart = expenses.map((expense) => (
  {...expense,
    value: parseFloat(expense.value),
    name: expense.description,
    color: expenseCategories[expense.category] || randomColor()
  })
)

const incomingsForChart = incomings.map((incoming) => (
  {...incoming,
    value: parseFloat(incoming.value),
    name: incoming.description,
    color: incomingsCategories[incoming.category] || randomColor()
  })
)


const expenseChart = donut({
  el: document.getElementById('expenses-chart'),
  size: 200,
  weight: 30,
  data: expensesForChart.length > 0 ? expensesForChart : [{value: 100}],
  colors: expensesForChart.length > 0 ? expensesForChart.map((expense) => expense.color) : ['yellow']
});

const incomingsChart = donut({
  el: document.getElementById('incomings-chart'),
  size: 200,
  weight: 30,
  data: incomingsForChart.length > 0 ? [...incomingsForChart] : [{value: 100}],
  colors: incomingsForChart.length > 0 ? incomingsForChart.map((incoming) => incoming.color) : ['yellow']
});

const legendList = document.getElementById("expenses-legend-list");
const incomingLegendList = document.getElementById("incomings-legend-list");

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

createLegend(expensesForChart, legendList);
createLegend(incomingsForChart, incomingLegendList);




