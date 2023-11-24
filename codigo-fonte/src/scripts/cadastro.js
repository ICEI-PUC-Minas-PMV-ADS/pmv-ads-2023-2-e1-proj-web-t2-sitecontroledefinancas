const button = document.getElementById('cadastrar');
button.addEventListener('click', cadastrar)

function cadastrar(event) {
  // previne o envio do formulario (comportamento padrão)
  event.preventDefault();
  //captura os campos do formulário
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // valida se os dados seguem a formatação correta, entra no if caso contrário
  if (name.value.length < 3 || password.value.length < 6 || !validateEmail(email.value)) {
    showErrorMessage("Dados inválidos, favor conferir")
    return;
  }
  // busca os usuários no localStorage, se não existir, cria um novo objeto vazio
  const users = JSON.parse(localStorage.getItem('users')) || {};
  // se o usuário já estiver cadastrado, mostra mensagem de erro
  if (users[email.value]) {
    showErrorMessage("Usuário já registrado. Faça login.");
    return;
  }

  // adiciona uma chave correspondente ao email do usuário ao objeto users seguindo a estrutura combinada
  users[email.value] = {
    data: {
      name: name.value,
      password: password.value
    },
    expenses: [],
    incomings: [],
    cardExpenses: []
  }
  // salva o objeto users no localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // salva no localStorage a informação do usuário logado
  const loggedUser = JSON.stringify({
    name: name.value,
    email: email.value
  })
  localStorage.setItem('loggedUser', loggedUser);

  // redireciona para a home
  location.href = '/'
}


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showErrorMessage(message) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  // captura o span onde será exibido o erro, modifica css e adiciona mensagem
  const span = document.getElementById('error');
  span.style.color = 'red';
  span.style.textAlign = 'center';
  span.style.marginTop = '20px';
  // limpa o valor para caso o usuário tenha errrado antes, não duplicar a mensaegm
  span.innerHTML = '';
  span.innerText = message;
  // limpa os campos do formulario e move o cursor para o input de name
  name.value = ''
  email.value = ''
  password.value = ''
  name.focus();
}

// hoisting