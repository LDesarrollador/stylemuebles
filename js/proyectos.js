// ==============================
// 1. Navbar con cambio de estilo al hacer scroll
// ==============================

function handleScrollEffects() {
  const navbar = document.querySelector(".navbar");
  const logoImg =
    document.getElementById("logo") || document.querySelector(".logo-img");
  const logoTexto = document.querySelector(".logo-texto");
  const mueblesText = document.querySelector(".logo-muebles");

  if (!navbar || !logoImg) return;

  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
    logoImg.classList.add("scrolled");
    logoTexto?.classList.add("oculto");
    mueblesText?.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logoImg.classList.remove("scrolled");
    logoTexto?.classList.remove("oculto");
    mueblesText?.classList.remove("scrolled");
  }
}

function initScrollAnimation() {
  window.addEventListener("scroll", handleScrollEffects);
}

// ==============================
// 2. Menú hamburguesa móvil
// ==============================

function initHamburgerMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  if (!menuToggle || !menuList) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = menuList.classList.contains("opacity-100");

    menuList.classList.toggle("opacity-100", !isOpen);
    menuList.classList.toggle("pointer-events-auto", !isOpen);
    menuList.classList.toggle("translate-y-0", !isOpen);

    menuList.classList.toggle("opacity-0", isOpen);
    menuList.classList.toggle("pointer-events-none", isOpen);
    menuList.classList.toggle("-translate-y-4", isOpen);
  });
}

// ==============================
// 3. Slider de proyectos automático con indicadores
// ==============================
function initSlider() {
  const sliderContainer = document.getElementById("slider-container");
  const slides = document.querySelectorAll("#slider-container img");
  const indicatorContainer = document.getElementById("slider-indicators");

  if (!sliderContainer || slides.length === 0 || !indicatorContainer) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  sliderContainer.style.width = `${totalSlides * 100}vw`;

  function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateIndicators();
  }

  function updateIndicators() {
    const dots = indicatorContainer.querySelectorAll("span");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  // funciones al ámbito global
  window.nextSlide = function () {
    showSlide(currentIndex + 1);
  };

  window.prevSlide = function () {
    showSlide(currentIndex - 1);
  };

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    indicatorContainer.appendChild(dot);
  });

  let slideInterval = setInterval(window.nextSlide, 5000);

  const slider = document.querySelector(".slider");
  slider?.addEventListener("mouseenter", () => clearInterval(slideInterval));
  slider?.addEventListener("mouseleave", () => {
    slideInterval = setInterval(window.nextSlide, 5000);
  });

  document.querySelectorAll(".slider-button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
      setTimeout(() => button.classList.remove("clicked"), 500);
    });
  });

  indicatorContainer.addEventListener("mouseenter", () =>
    clearInterval(slideInterval)
  );
  indicatorContainer.addEventListener("mouseleave", () => {
    slideInterval = setInterval(window.nextSlide, 5000);
  });

  showSlide(currentIndex);
}

// ==============================
// 4. Botón "Scroll to Top" suave
// ==============================

function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (!scrollBtn) return;

  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 300);
  });

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==============================
// 5. Modal Lightbox para ver imágenes en grande
// ==============================

function initLightboxModal() {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  const imagenesClicables = document.querySelectorAll(
    '[onclick^="mostrarModal"]'
  );
  const rutas = Array.from(imagenesClicables).map((el) => el.src);

  let imagenActual = 0;

  window.mostrarModal = function (src) {
    imagenActual = rutas.indexOf(src);
    if (imagenActual !== -1) {
      actualizarImagen();
      lightboxModal.classList.remove("hidden");
    }
  };

  function actualizarImagen() {
    lightboxImage.src = rutas[imagenActual];
  }

  closeBtn?.addEventListener("click", () => {
    lightboxModal.classList.add("hidden");
  });

  prevBtn?.addEventListener("click", () => {
    imagenActual = (imagenActual - 1 + rutas.length) % rutas.length;
    actualizarImagen();
  });

  nextBtn?.addEventListener("click", () => {
    imagenActual = (imagenActual + 1) % rutas.length;
    actualizarImagen();
  });

  lightboxModal?.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightboxModal.classList.contains("hidden")) {
      if (e.key === "ArrowRight") {
        imagenActual = (imagenActual + 1) % rutas.length;
        actualizarImagen();
      } else if (e.key === "ArrowLeft") {
        imagenActual = (imagenActual - 1 + rutas.length) % rutas.length;
        actualizarImagen();
      } else if (e.key === "Escape") {
        lightboxModal.classList.add("hidden");
      }
    }
  });
}

// ==============================
// 6. Minichat de WhatsApp flotante con saludo por hora
// ==============================
function initMiniChat() {
  const chatLink = document.getElementById("whatsapp-chat-link");
  const miniChat = document.getElementById("whatsapp-mini-chat");

  if (!chatLink || !miniChat) return;

  const now = new Date();
  const hour = now.getHours();
  const phone = "56951858928";

  // Mensajes por horario
  const mensajes = {
    mañana: [
      "¡Buenos días! ¿Te gustó algún diseño? Hablemos sobre tu mueble ideal 👷‍♂️",
      "Nuestros muebles modernos son perfectos para tu hogar. ¡Cotiza fácil aquí!",
      "Explora la galería y transforma tus ideas en un proyecto real 💡🪑",
    ],
    tarde: [
      "¡Buenas tardes! Si alguno de nuestros proyectos te inspiró, ¡cotiza aquí! 👷‍♂️",
      "¿Tienes en mente un diseño para tu oficina o casa? Te ayudamos sin compromiso.",
      "Envíanos un mensaje y recibe ideas personalizadas para tu espacio 🏠📐",
    ],
    noche: [
      "¡Buenas noches! ¿Viste algo que te encantó? Escríbenos tu idea 👷‍♂️",
      "Tu mueble soñado puede ser realidad. ¡Haz clic para cotizarlo!",
      "Déjanos un mensaje y recibe una propuesta exclusiva para ti 🌙✨",
    ],
  };

  // Elegir bloque de mensajes por horario
  let bloque = [];
  if (hour >= 6 && hour < 12) {
    bloque = mensajes.mañana;
  } else if (hour >= 12 && hour < 18) {
    bloque = mensajes.tarde;
  } else {
    bloque = mensajes.noche;
  }

  const whatsappBaseUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "¡Hola! Estuve viendo su página web y me encantaría cotizar mi mueble soñado."
  )}`;

  let userClicked = false;

  chatLink.addEventListener("click", () => {
    userClicked = true;
    miniChat.classList.add("hide");
  });

  function mostrarMensaje(index = 0) {
    if (userClicked || index >= bloque.length) return;

    chatLink.href = whatsappBaseUrl;
    chatLink.innerText = `👋 ${bloque[index]}`;

    miniChat.classList.remove("hide");
    miniChat.classList.add("show");

    setTimeout(() => {
      miniChat.classList.remove("show");
      miniChat.classList.add("hide");
    }, 6000);

    setTimeout(() => {
      mostrarMensaje(index + 1);
    }, 20000);
  }

  function iniciarCicloMensajes() {
    if (userClicked) return;

    mostrarMensaje(0);

    setTimeout(() => {
      iniciarCicloMensajes();
    }, 480000); // 8 min
  }

  // Inicia a los 3 segundos
  setTimeout(() => {
    iniciarCicloMensajes();
  }, 3000);
}

// ==============================
// 7. Efecto de entrada "scroll reveal" suave y secuencial (una sola vez)
// ==============================

function activarScrollRevealAvanzado() {
  const elementos = document.querySelectorAll(".reveal");

  const mostrarElemento = () => {
    let visiblesEnPantalla = [];

    elementos.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const enPantalla = rect.top < window.innerHeight - 20;

      if (enPantalla && !el.classList.contains("visible")) {
        visiblesEnPantalla.push(el);
      }
    });

    visiblesEnPantalla.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
        el.style.transitionDelay = "0s";
      }, i * 100);
    });
  };

  window.addEventListener("scroll", mostrarElemento);
  window.addEventListener("resize", mostrarElemento);
  mostrarElemento();
}
// ==============================
// 8. Botones "Cotizar" en imágenes reveladas
// ==============================

function initBotonesCotizar() {
  const imagenes = document.querySelectorAll(".reveal img");

  imagenes.forEach((img) => {
    const contenedor = img.parentElement;
    if (!contenedor || contenedor.querySelector(".boton-cotizar")) return;

    contenedor.classList.add("relative");

    // Obtener nombre del proyecto desde el nombre del archivo
    const ruta = img.getAttribute("src");
    const nombre = ruta.split("/").pop().split(".")[0];
    img.setAttribute("data-nombre", nombre);

    // Crear botón
    const boton = document.createElement("button");
    boton.className = "boton-cotizar";
    boton.innerText = "Cotizar";

    // Función personalizada que tú debes tener ya definida
    boton.onclick = () => enviarWhatsApp(boton);

    contenedor.appendChild(boton);
  });
}
// ==============================
// 8.1 Función para formatear nombre de proyecto
// ==============================
function formatearNombreProyecto(nombreCrudo) {
  return nombreCrudo
    .replace(/[-_]/g, " ")
    .replace(/[0-9]+$/, "")
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

// ==============================
// 9 Función para abrir WhatsApp con el nombre del proyecto
// ==============================
function enviarWhatsApp(boton) {
  const phone = "56951858928";
  const img = boton?.parentElement?.querySelector("img");
  let nombreProyecto = img?.getAttribute("data-nombre") || "proyecto";

  // Usa la función robusta de formateo
  nombreProyecto = formatearNombreProyecto(nombreProyecto);

  const mensaje = `¡Hola! Me interesa cotizar el proyecto "${nombreProyecto}". ¿Podrías darme más información?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}

// para title en mouse por imagen de galeria
function initBotonesCotizar() {
  const imagenes = document.querySelectorAll(".reveal img");

  imagenes.forEach((img) => {
    const contenedor = img.parentElement;
    if (!contenedor || contenedor.querySelector(".boton-cotizar")) return;

    contenedor.classList.add("relative");

    const ruta = img.getAttribute("src");
    let nombre = ruta.split("/").pop().split(".")[0];
    img.setAttribute("data-nombre", nombre);

    //  Formatear nombre para el título del botón
    const nombreFormateado = nombre
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letra) => letra.toUpperCase());

    // Crear botón
    const boton = document.createElement("button");
    boton.className = "boton-cotizar";
    boton.innerText = "Cotizar";
    boton.title = `Cotizar proyecto: ${nombreFormateado}`; // Tooltip accesible

    // Función al hacer clic
    boton.onclick = () => enviarWhatsApp(boton);

    contenedor.appendChild(boton);
  });
}

// ==============================
// 11. Inicialización de todos los módulos
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimation();
  initHamburgerMenu();
  initSlider();
  initScrollToTop();
  initLightboxModal();
  initMiniChat();
  activarScrollRevealAvanzado();
  initBotonesCotizar();
});
