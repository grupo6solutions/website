document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
        }
      });
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  const toggleTheme = () => {
    let currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    let newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {
      console.error("No se pudo guardar el tema en localStorage.", e);
    }
  };

  let savedTheme = "light"; // Default
  try {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      savedTheme = storedTheme;
    }
  } catch (e) {
    console.error("No se pudo leer el tema de localStorage.", e);
  }

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
