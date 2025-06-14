// ==============================
// Animación de navbar, logo e íconos al hacer scroll
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
    if (logoTexto) logoTexto.classList.add("oculto");
    if (mueblesText) mueblesText.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logoImg.classList.remove("scrolled");
    if (logoTexto) logoTexto.classList.remove("oculto");
    if (mueblesText) mueblesText.classList.remove("scrolled");
  }
}

function initScrollAnimation() {
  window.addEventListener("scroll", handleScrollEffects);
}

// ==============================
// Funcionalidad del menú hamburguesa
// ==============================
function initHamburgerMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  if (!menuToggle || !menuList) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = menuList.classList.contains("opacity-100");

    if (isOpen) {
      // Ocultar menú con animación
      menuList.classList.remove(
        "opacity-100",
        "pointer-events-auto",
        "translate-y-0"
      );
      menuList.classList.add(
        "opacity-0",
        "pointer-events-none",
        "-translate-y-4"
      );
    } else {
      // Mostrar menú con animación
      menuList.classList.remove(
        "opacity-0",
        "pointer-events-none",
        "-translate-y-4"
      );
      menuList.classList.add(
        "opacity-100",
        "pointer-events-auto",
        "translate-y-0"
      );
    }
  });
}

// ==============================
// Botón flotante para volver al inicio
// ==============================
function initScrollToTopBtn() {
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
// 13. MiniChat de WhatsApp automático mejorado
// ==================================================

document.addEventListener("DOMContentLoaded", function () {
  const chatLink = document.getElementById("whatsapp-chat-link");
  const miniChat = document.getElementById("whatsapp-mini-chat");

  const now = new Date();
  const hour = now.getHours();

  // 📅 Determinar parte del día
  let period = "noche";
  if (hour >= 6 && hour < 12) {
    period = "mañana";
  } else if (hour >= 12 && hour < 18) {
    period = "tarde";
  }

  // 💬 Mensajes personalizados según el momento del día
  const mensajesPorPeriodo = {
    mañana: [
      "🌞 ¡Nos encanta que estés leyendo nuestra historia!😍 Sigámosla juntos diseñando tu mueble ideal.👷‍♂️",
      "🏡 Creamos espacios con propósito y a medida. Hoy es el momento ideal para iniciar tu proyecto. Escríbenos.😍",
      "🛠️ Cada diseño tiene su historia… el próximo puede ser el tuyo. Déjalo en manos de nuestros expertos.👷‍♂️",
    ],
    tarde: [
      "🌤️ Nos encanta que descubras lo que hacemos. Hagamos tu cocina ideal, diseñada para ti.👷‍♂️",
      "💻 Cada mueble tiene su historia… Si buscas un escritorio ergonómico, aquí lo creamos para ti.",
      "✨ Tu historia y la nuestra se unen en cada diseño. Déjanos crear algo especial para ti.👷‍♂️",
    ],
    noche: [
      "🌙 Gracias por tomarte un momento para conocernos. Ahora déjanos devolver el gesto creando el mueble que necesitas.👷‍♂️",
      "💤 Las mejores ideas nacen de una buena inspiración. Hagamos que tu hogar refleje tu estilo. Escríbenos...",
      "📩 Mañana tu diseño puede cobrar vida. Un mensaje y comenzamos tu proyecto único.👷‍♂️",
    ],
  };

  const mensajes = mensajesPorPeriodo[period];
  const phone = "56951858928";

  //  1. Variable para saber si el usuario hizo clic
  let userInteracted = false;

  // 2. Escuchamos si hace clic en el chat
  chatLink.addEventListener("click", () => {
    userInteracted = true;
  });

  // 🔗 Función para actualizar el enlace con el mensaje
  function actualizarChatLink(mensajeVisible) {
    const mensajeFijo =
      "Hola, vi su sitio web y me encantaría cotizar un proyecto con ustedes 😄";
    const encodedMessage = encodeURIComponent(mensajeFijo);
    chatLink.href = `https://wa.me/${phone}?text=${encodedMessage}`;
    chatLink.innerText = `👋 ${mensajeVisible}`;
  }

  // 🪄 Secuencia de mensajes
  function mostrarMensajesSecuencia() {
    let index = 0;

    function mostrarSiguienteMensaje() {
      if (index >= mensajes.length) return;
      miniChat.classList.remove("hide");
      miniChat.classList.add("show");

      actualizarChatLink(mensajes[index]);

      setTimeout(() => {
        miniChat.classList.remove("show");
        miniChat.classList.add("hide");

        index++;
        let delay = index === 1 ? 25000 : 20000; // 20s después del 1°, 15s después del 2°
        setTimeout(mostrarSiguienteMensaje, delay);
      }, 10000); // Cada mensaje visible 8s
    }

    mostrarSiguienteMensaje(); // Iniciar secuencia
  }

  // 3. Mostrar la primera secuencia a los 5 segundos
  setTimeout(() => {
    mostrarMensajesSecuencia();
  }, 14000);

  // 4. Repetir la secuencia cada 5 minutos si el usuario no ha interactuado
  setInterval(() => {
    if (!userInteracted) {
      mostrarMensajesSecuencia();
    }
  }, 300000); // 300000 ms = 5 minutos
});

// ==============================
// Inicialización de animaciones AOS
// ==============================
function initAOS() {
  AOS.init({
    duration: 800, // milisegundos
    once: true, // solo una vez al entrar en pantalla
  });
}

// ==============================
// Ejecutar todo al cargar la página
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimation();
  initHamburgerMenu();
  initScrollToTopBtn();
  initMiniChat();
  initAOS();
});
