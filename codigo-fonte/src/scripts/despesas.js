const users = JSON.parse(localStorage.getItem('users'));
let expensesData = users[loggedUser.email].expenses;

function renderizarValores(expenses) {
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

renderizarValores(expensesData)

function renderTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  expensesData.forEach((despesa) => {
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${despesa.date}</td>
    <td>${despesa.description}</td>
    <td>${despesa.category}</td>
    <td>${formatter.format(despesa.value)}</td>
    <td>${despesa.payed ? "Paga" : "Pendente" }</td>
    <td class="delete" data-value=${despesa.id}>X</td>
    ${ despesa.payed ? "" : '<td class="pagar" data-value=' + despesa.id +'>O</td>'}
  `;
  tableBody.appendChild(tr);
})
const deleteButtons = document.querySelectorAll('.delete')
  deleteButtons.forEach((deleteButton) => {
    if(deleteButton) {
      deleteButton.style.cursor = 'pointer'
      deleteButton.addEventListener('click', (e) => {
        id = e.target.getAttribute("data-value")
        expensesData = expensesData.filter((expense) => expense.id != id)
        users[loggedUser.email].expenses = expensesData;
        localStorage.setItem('users', JSON.stringify(users))
        renderizarValores(expensesData)
        renderTable()
      })
  }})
  const pagarButtons = document.querySelectorAll('.pagar')
  pagarButtons.forEach((pagarButton) => {
    if(pagarButton){
      pagarButton.style.cursor = 'pointer'
      pagarButton.addEventListener('click', (e) => {
        console.log("entrou")
        id = e.target.getAttribute("data-value")
        expensesData = expensesData.map((expense) => {
          if (expense.id == id) {
            return { ...expense, payed: true}
          }
          return expense
        })
        console.log(expensesData)
        users[loggedUser.email].expenses = expensesData;
        localStorage.setItem('users', JSON.stringify(users))
        renderizarValores(expensesData)
        renderTable()
      })
    }
  })
}

renderTable()