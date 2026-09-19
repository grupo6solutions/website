document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navDropdown = document.querySelector(".nav-dropdown");
  const navDropdownTrigger = document.querySelector(".nav-dropdown-trigger");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const active = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", active ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        }
        if (navDropdown) {
          navDropdown.classList.remove("is-open");
          if (navDropdownTrigger) {
            navDropdownTrigger.setAttribute("aria-expanded", "false");
          }
        }
      });
    });
  }

  if (navDropdown && navDropdownTrigger) {
    navDropdownTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navDropdown.classList.toggle("is-open");
      navDropdownTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove("is-open");
        navDropdownTrigger.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navDropdown.classList.contains("is-open")) {
        navDropdown.classList.remove("is-open");
        navDropdownTrigger.setAttribute("aria-expanded", "false");
        navDropdownTrigger.focus();
      }
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const applyTheme = (theme) => {
    const logo = document.querySelector(".logo-img");
    if (theme === "dark") {
      body.classList.add("dark-mode");
      if (logo) {
        logo.src = logo.dataset.darkSrc || "/images/logoExagonD.png";
      }
    } else {
      body.classList.remove("dark-mode");
      if (logo) {
        logo.src = logo.dataset.lightSrc || "/images/logoExagonoL.png";
      }
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

  const btnSolicitarAcceso = document.getElementById("btn-solicitar-acceso");
  const messageTextarea = document.getElementById("message");

  if (btnSolicitarAcceso && messageTextarea) {
    btnSolicitarAcceso.addEventListener("click", () => {
      messageTextarea.value =
        "Hola, me comunico desde el formulario de la página para solicitarles acceso a la demo de geclau....";
      messageTextarea.focus();
    });
  }

  // Fade-up animations
  const elementsToAnimate = document.querySelectorAll('section h2, .proyecto-info, .proyecto-imagen, .plan-card, .miembro');
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-up');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  elementsToAnimate.forEach(el => observer.observe(el));
  // Update copyright year
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
