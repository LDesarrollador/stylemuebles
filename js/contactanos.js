// ==================================================
// 1. Variables globales y configuración inicial
// ==================================================

let currentIndex = 0;

const sliderContainer = document.getElementById("slider-container");
const slides = document.querySelectorAll("#slider-container img");
const totalSlides = slides.length;
const indicatorContainer = document.getElementById("slider-indicators");
const slider = document.querySelector(".slider");

let slideInterval;

// ==================================================
// 2. Mostrar un slide específico
// ==================================================

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const slideWidth = sliderContainer.offsetWidth / totalSlides;
  sliderContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;

  updateIndicators();
}

// ==================================================
// 3. Controles manuales: siguiente / anterior
// ==================================================

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// ==================================================
// 4. Intervalo automático del slider
// ==================================================

function startSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// ==================================================
// 5. Indicadores de navegación
// ==================================================

function initIndicators() {
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("slider-dot");
    dot.addEventListener("click", () => showSlide(i));
    indicatorContainer.appendChild(dot);
  });
}

function updateIndicators() {
  const dots = indicatorContainer.querySelectorAll("span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// ==================================================
// 6. Animación al presionar botones
// ==================================================

function initButtonAnimations() {
  document.querySelectorAll(".slider-button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
      setTimeout(() => button.classList.remove("clicked"), 500);
    });
  });
}

// ==================================================
// 7. Pausar slider al hacer hover
// ==================================================

function initPauseOnHover() {
  if (slider) {
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", startSlideInterval);
  }

  if (indicatorContainer) {
    indicatorContainer.addEventListener("mouseenter", () =>
      clearInterval(slideInterval)
    );
    indicatorContainer.addEventListener("mouseleave", startSlideInterval);
  }
}

// ==================================================
// 8. Animaciones en navbar, logo y textos al hacer scroll
// ==================================================

function initScrollAnimation() {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const logoImg = document.getElementById("logo");
    const logoTexto = document.querySelector(".logo-texto");
    const mueblesText = document.querySelector(".logo-muebles");

    const scrolled = window.scrollY > 20;

    if (navbar) navbar.classList.toggle("scrolled", scrolled);
    if (logoImg) logoImg.classList.toggle("scrolled", scrolled);
    if (logoTexto) logoTexto.classList.toggle("oculto", scrolled);
    if (mueblesText) mueblesText.classList.toggle("scrolled", scrolled);
  });
}

// ==================================================
// 9. Menú hamburguesa móvil
// ==================================================

function initMobileMenu() {
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

// ==================================================
// 10. Inicialización general del slider
// ==================================================

function initSlider() {
  if (!sliderContainer || totalSlides === 0 || !indicatorContainer) return;

  sliderContainer.style.width = `${totalSlides * 100}vw`;

  initIndicators();
  initButtonAnimations();
  initPauseOnHover();
  initScrollAnimation();

  showSlide(currentIndex);
  startSlideInterval();
}

// ==================================================
// 11. Botón scroll hacia arriba
// ==================================================

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

// ==================================================
// 12. Mini chat WhatsApp automático con mensajes según hora
// ==================================================

function initMiniChat() {
  const chatLink = document.getElementById("whatsapp-chat-link");
  const miniChat = document.getElementById("whatsapp-mini-chat");

  if (!chatLink || !miniChat) return;

  const now = new Date();
  const hour = now.getHours();
  const phone = "56951858928";

  let bloque = "noche";
  if (hour >= 6 && hour < 12) bloque = "mañana";
  else if (hour >= 12 && hour < 18) bloque = "tarde";

  const mensajesPorHorario = {
    mañana: [
      "Buenos días ☕ ¿Listo para diseñar el mueble perfecto para tu hogar?",
      "¡Diseñamos a medida! Escríbenos para una cotización express 🛠️",
      "Haz clic y empieza tu proyecto con nosotros 🏡✨",
    ],
    tarde: [
      "¡Buenas tardes! ☀️ Hoy es un gran día para empezar tu nuevo proyecto.",
      "Tu mueble ideal está más cerca de lo que crees. ¡Cotiza fácil aquí!",
      "Haz clic y comienza con tu diseño personalizado 🛋️✏️",
    ],
    noche: [
      "¡Hola, buenas noches! 🌙 ¿Te gustaría recibir una cotización rápida antes de descansar?",
      "Aprovecha el momento tranquilo y cuéntanos tu idea 💬🌟",
      "Crea un espacio único. Haz clic para empezar tu mueble a medida 🛏️🪚",
    ],
  };

  const mensajes = mensajesPorHorario[bloque];
  const mensajeFijo =
    "Hola! Vengo de su página web y estoy interesado/a en recibir una cotización para un mueble personalizado. ¿Me puedes ayudar?";
  const encodedMessage = encodeURIComponent(mensajeFijo);

  let userInteracted = false;

  chatLink.addEventListener("click", () => {
    userInteracted = true;
    miniChat.classList.add("hide");
  });

  function actualizarChat(mensajeVisible) {
    chatLink.href = `https://wa.me/${phone}?text=${encodedMessage}`;
    chatLink.innerText = `👋 ${mensajeVisible}`;
  }

  function mostrarMensajesSecuencia() {
    if (userInteracted) return;

    let index = 0;

    function mostrarSiguiente() {
      if (userInteracted || index >= mensajes.length) return;

      actualizarChat(mensajes[index]);
      miniChat.classList.remove("hide");
      miniChat.classList.add("show");

      setTimeout(() => {
        miniChat.classList.remove("show");
        miniChat.classList.add("hide");
        index++;
        const delay = index === 1 ? 20000 : 15000;
        setTimeout(mostrarSiguiente, delay);
      }, 8000);
    }

    mostrarSiguiente();
  }

  setTimeout(() => mostrarMensajesSecuencia(), 3000);
  setInterval(() => {
    if (!userInteracted) mostrarMensajesSecuencia();
  }, 540000); // cada 9 minutos
}

// ==================================================
// 13. Swipe móvil para cambiar de slide
// ==================================================

function initTouchSwipe() {
  let startX = 0;
  let endX = 0;

  if (!slider) return;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    const threshold = 50;
    if (startX - endX > threshold) nextSlide();
    else if (endX - startX > threshold) prevSlide();

    startX = 0;
    endX = 0;
  });
}

// ==================================================
// 14. Animación suave para imágenes de la galería
// ==================================================

function initImageObserver() {
  const projectImgs = document.querySelectorAll(".project-img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("opacity-100", entry.isIntersecting);
        entry.target.classList.toggle("translate-y-0", entry.isIntersecting);
        entry.target.classList.toggle("opacity-0", !entry.isIntersecting);
        entry.target.classList.toggle("translate-y-8", !entry.isIntersecting);
      });
    },
    { threshold: 0.1 }
  );

  projectImgs.forEach((img) => observer.observe(img));
}

// ==================================================
// 15. Enviar formulario de contacto a WhatsApp y limpiar campos
// ==================================================

function initFormularioWhatsApp() {
  const formulario = document.getElementById("contacto-form");

  if (!formulario) return;

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const texto = `Hola, vengo de su sitio web.%0A%0AMi nombre es: ${nombre}%0AMi correo es: ${email}%0AEstoy interesado/a en: ${mensaje}`;
    const whatsappURL = `https://wa.me/56951858928?text=${texto}`;

    window.open(whatsappURL, "_blank");
    formulario.reset();
  });
}

// ==================================================
// Inicialización al cargar DOM
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  initMobileMenu();
  initScrollToTop();
  initMiniChat();
  initTouchSwipe();
  initImageObserver();
  initFormularioWhatsApp();
});
