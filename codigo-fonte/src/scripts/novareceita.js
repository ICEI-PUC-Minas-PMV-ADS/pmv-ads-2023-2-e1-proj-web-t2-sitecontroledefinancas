const button = document.getElementById('cadastrar');
button.addEventListener('click', cadastrar);

function cadastrar(e) {
  e.preventDefault();
  const valor = document.getElementById('valor');
  const data = document.getElementById('data');
  const descrição = document.getElementById('descrição');
  const categoria = document.getElementById('categoria');
  const recebida = document.getElementById('recebida');
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
  users[loggedUser.email].incomings.push({
    id: new Date().getTime(),
    value: valor.value,
    date: data.value,
    description: descrição.value,
    category: categoria.value === "outra" ? novaCategoria.value : categoria.value,
    received: recebida.checked
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
  recebida.checked = false;
  document.getElementById('error').innerHTML = "";
  renderizarValores();
}

function cadastrarCategoria(categoria) {
  const categorias = JSON.parse(localStorage.getItem("incomingsCategories"));
  const colors = ['#051b18', '#0c2a21', '#1b3e35', '#5d7a5d', '#99a582']
  categorias[categoria] = colors[Math.round(Math.random() * colors.length - 1)]
  localStorage.setItem("incomingsCategories", JSON.stringify(categorias))
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

function createOptions() {
  const select = document.getElementById("categoria")
  select.innerHTML = '<option value="" disabled selected>Selecione a categoria</option>'
  const incomingsCategories = JSON.parse(localStorage.getItem("incomingsCategories"));
  Object.keys(incomingsCategories).forEach((categorie) => {
    const option = `<option value=${categorie}>${categorie}</option>`
    select.innerHTML += option
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
