// Espera a que el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona los elementos del DOM
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Verifica que los elementos existan antes de agregar listeners
  if (menuToggle && navLinks) {
    // 1. Evento para el botón hamburguesa
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // 2. Evento para cerrar el menú al hacer clic en un enlace (en móvil)
    // Seleccionamos todos los enlaces dentro del menú
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        // Si el menú está activo (visible en móvil), lo cierra
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
        }
      });
    });
  }
});
