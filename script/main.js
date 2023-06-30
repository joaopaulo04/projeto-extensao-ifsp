function formEnvio(event){
  
  // Evita que o form atualize a página.
  event.preventDefault();

  alert(`Sua solicitação foi Enviada! Aguarde que entraremos em contato pelo seu Email.`);
  
}

function hamburguer(){
  const hamburguer = document.querySelector(".hamburguer");
  const navMenu = document.querySelector(".nav-list");

  hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
  }))
}

window.onload = hamburguer;