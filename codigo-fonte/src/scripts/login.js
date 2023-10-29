const button = document.getElementById('entrar');
button.addEventListener('click', login)

function login(event) {
  // previne o envio do formulario (comportamento padrão)
  event.preventDefault();
  //captura os campos do formulário
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  // captura a chave users no localstorage e transforma em um objeto javascript
  const users = JSON.parse(localStorage.getItem('users')) || {};
  // faz a verificação: se não existir uma chave que seja o email digitado, ou se a chave existir
  // mas a senha salva na propriedade .data.password não for igual a senha digitada,
  // mostra a mensagem de erro na tela (função showErrorMessage) e encerra a execução
  if (!users[email.value] || users[email.value].data.password != password.value) {
    showErrorMessage("Dados inválidos");
    return;
  }

  // se estiver certo o email e senha o codigo segue e salva no localStorage a informação do usuário logado
  const loggedUser = JSON.stringify({
    name: users[email.value].data.name,
    email: email.value
  })
  localStorage.setItem('loggedUser', loggedUser);

  // redireciona para a home
  location.href = '/'
}

// essa função extrai o trecho de códgio que exibe a mensagem de erro na tela.
// mesma logica usada na tela de cadastro. Extraimos para uma função para evitar repetir o
// mesmo codigo. Se quiser kostrar uma mensagem diferente é só mudar a string passada como parametro
// na hora de invocar essa função.
function showErrorMessage(message) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  // captura o span onde será exibido o erro, modifica css e adiciona mensagem
  const span = document.getElementById('error');
  span.style.color = 'red';
  span.style.textAlign = 'center';
  span.style.marginTop = '20px';
  // limpa o valor para caso o usuário tenha errrado antes, não duplicar a mensaegm
  span.innerText = message;
  // limpa os campos do formulario e move o cursor para o input de email
  email.value = ''
  password.value = ''
  email.focus();
}