// Verifica se existe um usuário logado no localStorage, se não, redicreciona para a página de login
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
if (!loggedUser) {
  window.location.href = '/login';
}
