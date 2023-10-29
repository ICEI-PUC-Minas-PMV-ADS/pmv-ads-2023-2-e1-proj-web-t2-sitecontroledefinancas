const users = JSON.parse(localStorage.getItem('users'));
const expenses = users[loggedUser.email].expenses;

function renderizarValores() {
  const pagas = document.getElementById('pagas');
  const pendentes = document.getElementById('pendentes');
  const total = document.getElementById('total');
  const despesasPagas = expenses.filter((expense) => expense.payed)
  const despesasPendentes = expenses.filter((expense) => !expense.payed);
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  const totalDespesasPagas = despesasPagas.reduce((acc, expense) => parseFloat(expense.value) + acc, 0);
  const totalDespesasPendentes = despesasPendentes.reduce((acc, expense) => parseFloat(expense.value) + acc, 0);
  const totalDespesas = totalDespesasPagas + totalDespesasPendentes;
  pagas.innerText = formatter.format(totalDespesasPagas);
  pendentes.innerText = formatter.format(totalDespesasPendentes);
  total.innerText = formatter.format(totalDespesas);
}

renderizarValores()

const table = document.getElementById('tabela-despesas');
const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

expenses.forEach((despesa) => {
  const th = document.createElement('th');
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td>${despesa.date}</td>
  <td>${despesa.description}</td>
  <td>${despesa.category}</td>
  <td>${formatter.format(despesa.value)}</td>
  <td>${despesa.payed ? "Paga" : "Pendente" }</td>
`;
  table.appendChild(tr);
})