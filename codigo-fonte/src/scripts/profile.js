
const userSection = document.getElementById("user")
// Mostra informações do usuario loggado
Object.keys(loggedUser).forEach((key) => {
  const element = document.getElementById(key)
  console.log('key', key, 'ele', element)
  if (element){
    element.innerHTML += loggedUser[key]
  }
})


