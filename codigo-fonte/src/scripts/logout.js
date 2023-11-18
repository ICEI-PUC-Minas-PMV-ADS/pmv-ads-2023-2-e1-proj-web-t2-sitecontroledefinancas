const linkDeLogout = document.getElementById("logout");

linkDeLogout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("loggedUser");
  window.location.href = "/login"
})