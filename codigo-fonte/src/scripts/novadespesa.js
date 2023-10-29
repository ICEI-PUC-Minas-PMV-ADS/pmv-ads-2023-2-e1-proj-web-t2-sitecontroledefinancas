const button = document.getElementById('cadastrar');
button.addEventListener('click', cadastrar);

function cadastrar(e) {
  e.preventDefault();
  const valor = document.getElementById('valor');
  const data = document.getElementById('data');
  const descrição = document.getElementById('descrição');
  const categoria = document.getElementById('categoria');
  const paga = document.getElementById('paga');
  if(!valor.value || ! data.value || !descrição.value || !categoria.value) {
    showErrorMessage('Preencha todos os campos');
    return;
  }
  const users = JSON.parse(localStorage.getItem('users'));
  users[loggedUser.email].expenses.push({
    value: valor.value,
    date: data.value,
    description: descrição.value,
    category: categoria.value,
    payed: paga.checked
  });
  localStorage.setItem('users', JSON.stringify(users));
  valor.value = ''
  data.value = ''
  descrição.value = ''
  categoria.value = ''
  paga.value = ''
  renderizarValores();
}

function showErrorMessage(message) {
  const span = document.getElementById('error');
  span.style.color = 'red';
  span.style.textAlign = 'center';
  span.style.marginTop = '20px';
  span.innerText = message;
}


function renderizarValores() {
  const users = JSON.parse(localStorage.getItem('users'));
  const expenses = users[loggedUser.email].expenses;
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