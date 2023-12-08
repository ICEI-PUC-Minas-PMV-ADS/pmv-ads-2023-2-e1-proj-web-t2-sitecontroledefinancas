const users = JSON.parse(localStorage.getItem('users'));
let incomingsData = users[loggedUser.email].incomings;

function renderizarValores(incomings) {
  const recebidas = document.getElementById('recebidas');
  const pendentes = document.getElementById('pendentes');
  const total = document.getElementById('total');
  const receitasRecebidas = incomings.filter((incoming) => incoming.received)
  const receitasPendentes = incomings.filter((incoming) => !incoming.received);
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  const totalDespesasRecebidas = receitasRecebidas.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const totalDespesasPendentes = receitasPendentes.reduce((acc, incoming) => parseFloat(incoming.value) + acc, 0);
  const totalDespesas = totalDespesasRecebidas + totalDespesasPendentes;
  recebidas.innerText = formatter.format(totalDespesasRecebidas);
  pendentes.innerText = formatter.format(totalDespesasPendentes);
  total.innerText = formatter.format(totalDespesas);
}

renderizarValores(incomingsData)

function renderTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = ""
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});
  incomingsData.forEach((receita) => {
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${receita.date}</td>
    <td>${receita.description}</td>
    <td>${receita.category}</td>
    <td>${formatter.format(receita.value)}</td>
    <td>${receita.received ? "Recebida" : "Pendente" }</td>
    <td class="delete" data-value=${receita.id}><i class="fa-solid fa-trash"></i></td>
    ${ receita.received ? "" : '<td class="receive" data-value=' + receita.id +'><i class="fa-solid fa-check"></i></td>'}
  `;
    tableBody.appendChild(tr);
  })
  const deleteButtons = document.querySelectorAll('.fa-trash')
  deleteButtons.forEach((deleteButton) => {
    if(deleteButton) {
      deleteButton.style.cursor = 'pointer'
      deleteButton.addEventListener('click', (e) => {
        id = e.target.closest('td').getAttribute("data-value")
        incomingsData = incomingsData.filter((incoming) => incoming.id != id)
        users[loggedUser.email].incomings = incomingsData;
        localStorage.setItem('users', JSON.stringify(users))
        renderizarValores(incomingsData)
        renderTable()
      })
  }})
  const receiveButtons = document.querySelectorAll('.fa-check')
  receiveButtons.forEach((receiveButton) => {
    if(receiveButton){
      receiveButton.style.cursor = 'pointer'
      receiveButton.addEventListener('click', (e) => {
        console.log("entrou")
        id = e.target.closest('td').getAttribute("data-value")
        incomingsData = incomingsData.map((incoming) => {
          if (incoming.id == id) {
            return { ...incoming, received: true}
          }
          return incoming
        })
        console.log(incomingsData)
        users[loggedUser.email].incomings = incomingsData;
        localStorage.setItem('users', JSON.stringify(users))
        renderizarValores(incomingsData)
        renderTable()
      })
    }
  })
}

renderTable()



