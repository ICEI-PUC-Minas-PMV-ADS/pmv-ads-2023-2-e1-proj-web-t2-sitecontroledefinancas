const users = JSON.parse(localStorage.getItem('users'));
const incomings = users[loggedUser.email].incomings;

function renderizarValores() {
  const recebidas = document.getElementById('recebidas');
  const pendentes = document.getElementById('pendentes');
  const total = document.getElementById('total');
  const receitasRecebidas = incomings.filter((incoming) => incoming.payed)
  const receitasPendentes = incomings.filter((incoming) => !incoming.payed);
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  const totalDespesasRecebidas = receitasRecebidas.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const totalDespesasPendentes = receitasPendentes.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const totalDespesas = totalDespesasRecebidas + totalDespesasPendentes;
  recebidas.innerText = formatter.format(totalDespesasRecebidas);
  pendentes.innerText = formatter.format(totalDespesasPendentes);
  total.innerText = formatter.format(totalDespesas);
}

renderizarValores()

const table = document.getElementById('tabela-receitas');
const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

incomings.forEach((receita) => {
  const th = document.createElement('th');
  th.innerHTML
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td>${receita.date}</td>
  <td>${receita.description}</td>
  <td>${receita.category}</td>
  <td>${formatter.format(receita.value)}</td>
  <td>${receita.received ? "Recebida" : "Pendente" }</td>
`;
  table.appendChild(tr);
})