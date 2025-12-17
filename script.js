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

  let savedTheme = "light";
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

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const turnstileResponse = formData.get("cf-turnstile-response");

      if (!turnstileResponse) {
        formStatus.textContent = "Por favor completa el captcha.";
        formStatus.className = "error";
        formStatus.style.display = "block";
        return;
      }
      const button = contactForm.querySelector("button[type='submit']");

      button.disabled = true;
      button.textContent = "Enviando...";
      formStatus.style.display = "none";

      fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            formStatus.textContent =
              "¡Mensaje enviado! Gracias por contactarnos.";
            formStatus.className = "success";
            formStatus.style.display = "block";
            contactForm.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                formStatus.textContent = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                formStatus.textContent =
                  "Hubo un error al enviar el formulario. Intenta más tarde.";
              }
              formStatus.className = "error";
              formStatus.style.display = "block";
            });
          }
        })
        .catch((error) => {
          formStatus.textContent =
            "Error de red. Revisa tu conexión e intenta de nuevo.";
          formStatus.className = "error";
          formStatus.style.display = "block";
        })
        .finally(() => {
          button.disabled = false;
          button.textContent = "Enviar Mensaje";
        });
    });
  }
});
