const salvar = document.getElementById("atualizar");

salvar.addEventListener("click", (e) => {
  const name = document.getElementById("nome").value
  const nomeSocial = document.getElementById("nomesocial").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const escolaridade = document.getElementById("escolaridade").value
  const profissao = document.getElementById("profissao").value
  const renda = document.getElementById("renda").value
  const faixaDeRenda = document.getElementById("faixaderenda").value
  const error = document.getElementById('error');
  const sucess = document.getElementById('success')
  if (!name || !nomeSocial || !email || !password || !escolaridade || !profissao || !renda || !faixaDeRenda) {
    error.style.color = 'red';
    error.style.textAlign = 'center';
    error.style.marginTop = '20px';
    error.innerHTML = "Por favor, preencha todos os campos para atualizar seu perfil"
    return;
  }

  const users = JSON.parse(localStorage.getItem('users'));
  users[loggedUser.email].data = {
    ...users[loggedUser.email].data,
    name,
    nomeSocial,
    email,
    password,
    escolaridade,
    profissao,
    renda,
    faixaDeRenda
  }

  const updatedLoggedUser = {
    name,
    nomeSocial,
    email,
    password,
    escolaridade,
    profissao,
    renda,
    faixaDeRenda
  }

  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('loggedUser', JSON.stringify(updatedLoggedUser))
  const forms = document.querySelectorAll('form')
  forms.forEach((form) => form.reset())
  error.innerHTML = ""
  success.style.color = '#00AB8E';
  success.style.textAlign = 'center';
  success.style.marginTop = '20px';
  success.innerHTML = "Dados atualizados com sucesso!"
})