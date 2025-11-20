// Mostrar un mensaje cuando se hace clic en el botón
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".boton");

  boton.addEventListener("click", () => {
    alert("¡Gracias por visitar mi paginita, bro! 🚀");
  });
});