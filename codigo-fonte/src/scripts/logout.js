const linkDeLogout = document.getElementById("logout");

linkDeLogout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("loggedUser");
  console.log(window)
  window.location.href = "/login"
})