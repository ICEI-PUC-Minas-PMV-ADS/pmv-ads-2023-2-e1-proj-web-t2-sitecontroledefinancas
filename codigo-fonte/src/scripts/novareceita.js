const button = document.getElementById('cadastrar');
button.addEventListener('click', cadastrar);

function cadastrar(e) {
  e.preventDefault();
  const valor = document.getElementById('valor');
  const data = document.getElementById('data');
  const descrição = document.getElementById('descrição');
  const categoria = document.getElementById('categoria');
  const recebida = document.getElementById('recebida');
  if(!valor.value || ! data.value || !descrição.value || !categoria.value) {
    showErrorMessage('Preencha todos os campos');
    return;
  }
  const users = JSON.parse(localStorage.getItem('users'));
  users[loggedUser.email].incomings.push({
    value: valor.value,
    date: data.value,
    description: descrição.value,
    category: categoria.value,
    received: recebida.checked
  });
  localStorage.setItem('users', JSON.stringify(users));
  valor.value = ''
  data.value = ''
  descrição.value = ''
  categoria.value = ''
  recebida.value = ''
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
  const incomings = users[loggedUser.email].incomings;
  const recebidas = document.getElementById('recebidas');
  const pendentes = document.getElementById('pendentes');
  const total = document.getElementById('total');
  const receitasRecebidas = incomings.filter((incoming) => incoming.received)
  const receitasPendentes = incomings.filter((incoming) => !incoming.received);
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  const totalReceitasRecebidas = receitasRecebidas.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const totalReceitasPendentes = receitasPendentes.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const totalReceitas = totalReceitasRecebidas + totalReceitasPendentes;
  recebidas.innerText = formatter.format(totalReceitasRecebidas);
  pendentes.innerText = formatter.format(totalReceitasPendentes);
  total.innerText = formatter.format(totalReceitas);
}

renderizarValores()