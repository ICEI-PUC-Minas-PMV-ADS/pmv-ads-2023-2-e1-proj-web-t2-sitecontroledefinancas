
const userSection = document.getElementById("user")
// Mostra o nome do usuario loggado


const username = document.getElementById("username");
username.innerText = loggedUser.name;

const email = document.createElement("p")
email.innerText = loggedUser.email
userSection.appendChild(email)
