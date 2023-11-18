const button = document.getElementById('cadastrar');
button.addEventListener('click', cadastrar);

function cadastrar(e) {
  e.preventDefault();
  const valor = document.getElementById('valor');
  const data = document.getElementById('data');
  const descrição = document.getElementById('descrição');
  const categoria = document.getElementById('categoria');
  const paga = document.getElementById('paga');
  const novaCategoria = document.getElementById("nova-categoria")
  if(!valor.value || ! data.value || !descrição.value || !categoria.value) {
    showErrorMessage('Preencha todos os campos');
    return;
  }
  if (novaCategoria && !novaCategoria.value) {
    showErrorMessage('Preencha todos os campos');
    return;
  }
  const users = JSON.parse(localStorage.getItem('users'));
  users[loggedUser.email].expenses.push({
    value: valor.value,
    date: data.value,
    description: descrição.value,
    category: categoria.value === "outra" ? novaCategoria.value : categoria.value,
    payed: paga.checked
  });
  localStorage.setItem('users', JSON.stringify(users));
  if (novaCategoria) {
    cadastrarCategoria(novaCategoria.value);
    createOptions()
    novaCategoria.remove();
  }
  valor.value = ''
  data.value = ''
  descrição.value = ''
  categoria.value = ''
  paga.checked = false;
  document.getElementById('error').innerHTML = "";
  renderizarValores();
}

function cadastrarCategoria(categoria) {
  const categorias = JSON.parse(localStorage.getItem("expenseCategories"));
  const colors = ['#491a37', '#652343', '#903256', '#cb486e', '#ff6689']
  categorias[categoria] = colors[Math.round(Math.random() * colors.length - 1)]
  localStorage.setItem("expenseCategories", JSON.stringify(categorias))
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

function createOptions() {
  const select = document.getElementById("categoria");
  select.innerHTML = '<option value="" disabled selected>Selecione a categoria</option>'
  const expenseCategories = JSON.parse(localStorage.getItem("expenseCategories"));
  Object.keys(expenseCategories).forEach((categorie) => {
    const option = document.createElement('option');
    option.value = categorie;
    option.innerText = categorie;
    select.appendChild(option)
  })
  const otherOption = document.createElement('option');
  otherOption.value = "outra";
  otherOption.innerText = "Outra";
  select.appendChild(otherOption)
}

createOptions()

const categorySelect =  document.getElementById("categoria");
categorySelect.addEventListener("change", (e) => {
  if (e.target.value === "outra") {
    const input = document.createElement('input');
    input.id = "nova-categoria"
    input.type = "text"
    input.placeholder = "Digite o nome da nova categoria"
    categorySelect.after(input)
  } else {
    const novaCategoria = document.getElementById("nova-categoria")
    if (novaCategoria) {
      novaCategoria.remove()
    }
  }
})


// Outra forma de fazer a mesma coisa
// function createOptions() {
//   const select = document.getElementById("categoria")
//   const expenseCategories = JSON.parse(localStorage.getItem("expenseCategories"));
//   Object.keys(expenseCategories).forEach((categorie) => {
//     const option = `<option value=${categorie}>${categorie}</option>`
//     select.innerHTML += option
//   })
// }