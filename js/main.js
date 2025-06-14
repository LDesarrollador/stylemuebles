// ==================================================
// 1. Variables y configuración inicial
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
// 3. Controles manuales (siguiente / anterior)
// ==================================================

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// ==================================================
// 4. Iniciar slide automático
// ==================================================

function startSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// ==================================================
// 5. Indicadores del slider
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
// 7. Pausar y reanudar slider al hacer hover
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
// 8. Animación de navbar y logo al hacer scroll
// ==================================================

function initScrollAnimation() {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const logoImg = document.getElementById("logo");
    if (!navbar || !logoImg) return;

    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
      logoImg.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      logoImg.classList.remove("scrolled");
    }
  });
}

// ==================================================
// 9. Ocultar logo-texto y "Muebles" al hacer scroll
// ==================================================

window.addEventListener("scroll", () => {
  const logoTexto = document.querySelector(".logo-texto");
  const mueblesText = document.querySelector(".logo-muebles");
  if (!logoTexto && !mueblesText) return;

  if (window.scrollY > 20) {
    logoTexto?.classList.add("oculto");
    mueblesText?.classList.add("scrolled");
  } else {
    logoTexto?.classList.remove("oculto");
    mueblesText?.classList.remove("scrolled");
  }
});

// ==================================================
// 10. Menú hamburguesa móvil
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  menuToggle.addEventListener("click", () => {
    const isOpen = menuList.classList.contains("opacity-100");

    if (isOpen) {
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
});

// ==================================================
// 11. Inicialización general
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

document.addEventListener("DOMContentLoaded", initSlider);

// ==================================================
// 12. Botón para subir al inicio
// ==================================================

const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("show", window.scrollY > 300);
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ==================================================
// 13. MiniChat de WhatsApp automático mejorado
// ==================================================
document.addEventListener("DOMContentLoaded", function () {
  // Referencias a los elementos del mini chat y enlace de WhatsApp
  const chatLink = document.getElementById("whatsapp-chat-link");
  const miniChat = document.getElementById("whatsapp-mini-chat");

  // Obtener la hora actual
  const now = new Date();
  const hour = now.getHours();

  // Determinar el periodo del día (mañana, tarde o noche)
  let period = "noche";
  if (hour >= 6 && hour < 12) {
    period = "mañana";
  } else if (hour >= 12 && hour < 18) {
    period = "tarde";
  }

  // Mensajes personalizados según la hora del día
  const mensajesPorPeriodo = {
    mañana: [
      "¡Hola, Buenos días! ☀️ ¿Te ayudo a cotizar tu mueble ideal? 👷‍♂️",
      "¿Sabías que hacemos closets a medida? 😍",
      "Escríbenos y empecemos tu diseño personalizado 🛠️",
    ],
    tarde: [
      "¡Hola, ¡Buenas tardes! 🌤️ ¿Hacemos realidad la cocina que imaginas? ¡Escríbenos aquí! 👷‍♂️",
      "También fabricamos escritorios ergonómicos para home office 💻",
      "Tu espacio ideal está a un clic. ¡Hablemos! ✨",
    ],
    noche: [
      "¡Hola, Buenas noches! 🌙 ¿Cotizamos tu mueble antes de dormir? 👷‍♂️",
      "Soñarás mejor sabiendo que tus muebles están en buenas manos 💤",
      "Cuéntanos qué necesitas y te enviamos una propuesta a primera hora 📨",
    ],
  };

  // Seleccionar los mensajes correspondientes al periodo actual
  const mensajes = mensajesPorPeriodo[period];

  // Número de WhatsApp para el enlace
  const phone = "56951858928";

  // Bandera para saber si el usuario ya interactuó con el chat
  let userInteracted = false;

  // Si el usuario hace clic en el mini chat, se detienen los mensajes automáticos
  chatLink.addEventListener("click", () => {
    userInteracted = true;
  });

  // Actualiza el texto visible y el enlace de WhatsApp con un mensaje predeterminado
  function actualizarChatLink(mensajeVisible) {
    const mensajeFijo =
      "Hola, vi sus trabajos en su web y quiero cotizar un proyecto con ustedes.";
    const encodedMessage = encodeURIComponent(mensajeFijo);
    chatLink.href = `https://wa.me/${phone}?text=${encodedMessage}`;
    chatLink.innerText = `👋 ${mensajeVisible}`;
  }

  // Muestra los mensajes uno a uno con transiciones, si el usuario no ha interactuado
  function mostrarMensajesSecuencia() {
    if (userInteracted) return; // 🚫 Evita mostrar si ya hizo clic

    let index = 0;

    function mostrarSiguienteMensaje() {
      if (userInteracted || index >= mensajes.length) return;

      // Mostrar mini chat con animación
      miniChat.classList.remove("hide");
      miniChat.classList.add("show");

      // Cambiar el mensaje visible del chat
      actualizarChatLink(mensajes[index]);

      // Ocultar después de 5.5 segundos y preparar el siguiente mensaje
      setTimeout(() => {
        miniChat.classList.remove("show");
        miniChat.classList.add("hide");

        index++;
        let delay = index === 1 ? 20000 : 15000; // Más pausa tras el primer mensaje (20s y 15s)
        setTimeout(mostrarSiguienteMensaje, delay);
      }, 5500);
    }

    // Inicia la secuencia de mensajes
    mostrarSiguienteMensaje();
  }

  // Inicia la primera secuencia de mensajes tras 4 segundos
  setTimeout(() => {
    mostrarMensajesSecuencia();
  }, 4000);

  // Reintenta mostrar mensajes cada 5 minutos si no ha interactuado
  setInterval(() => {
    if (!userInteracted) {
      mostrarMensajesSecuencia();
    }
  }, 300000); // 300,000 ms = 5 minutos
});

// ==================================================
// 14. Swipe con dedo en móviles
// ==================================================

let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  const threshold = 50;

  if (startX - endX > threshold) {
    nextSlide();
  } else if (endX - startX > threshold) {
    prevSlide();
  }

  startX = 0;
  endX = 0;
});

// ==================================================
// 15. Aparición suave de imágenes al hacer scroll
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  const projectImgs = document.querySelectorAll(".project-img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
          entry.target.classList.add("opacity-0", "translate-y-8");
        }
      });
    },
    { threshold: 0.1 }
  );

  projectImgs.forEach((img) => observer.observe(img));
});
// ==================================================
// 16. Modal de imágenes con zoom y navegación (modificado)
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleccionar imágenes iniciales (solo primeras 3)
  let imageContainers = Array.from(
    document.querySelectorAll(".project-img img")
  ).slice(0, 3);

  // 2. Crear el HTML del modal (igual que antes)
  const modalHTML = `
    <div id="image-modal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 hidden">
      <button id="modal-close" class="absolute top-4 right-4 text-white text-3xl font-bold z-50">&times;</button>
      <button id="modal-prev" class="absolute left-4 text-white text-3xl z-40">&#10094;</button>
      <img id="modal-image" class="max-w-[90vw] max-h-[80vh] rounded shadow-lg transition-transform duration-300" src="" alt="Imagen ampliada" />
      <button id="modal-next" class="absolute right-4 text-white text-3xl z-40">&#10095;</button>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.getElementById("modal-close");
  const nextBtn = document.getElementById("modal-next");
  const prevBtn = document.getElementById("modal-prev");

  // 3. Array para guardar las imágenes que muestra el modal (solo 3 inicialmente)
  let images = imageContainers.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  let currentImageIndex = 0;

  // Función para abrir modal en la imagen indicada
  function openModal(index) {
    currentImageIndex = index;
    modalImage.src = images[currentImageIndex].src;
    modalImage.alt = images[currentImageIndex].alt;
    modal.classList.remove("hidden");
  }

  // 4. Agregar event listeners para abrir modal solo en imágenes actuales
  function setupImageClickListeners() {
    imageContainers.forEach((img, index) => {
      img.style.cursor = "zoom-in";
      img.onclick = () => openModal(index);
    });
  }

  setupImageClickListeners();

  // 5. Navegación modal
  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex].src;
    modalImage.alt = images[currentImageIndex].alt;
  });

  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex].src;
    modalImage.alt = images[currentImageIndex].alt;
  });

  // 6. Cerrar modal
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.add("hidden");
  });

  // ==================================================
  // 17. Mostrar más proyectos y actualizar modal
  // ==================================================

  const verMasBtn = document.getElementById("ver-mas-proyectos");
  const proyectosAdicionales = document.getElementById("proyectos-adicionales");
  const btnVerGaleria = document.getElementById("btn-ver-galeria");

  verMasBtn.addEventListener("click", () => {
    proyectosAdicionales.classList.remove("hidden");

    // Mostrar botón "→ Ver galería de proyectos"
    btnVerGaleria.classList.remove("hidden");

    // Ocultar el botón "Ver más proyectos..."
    verMasBtn.classList.add("hidden");

    // Animar aparición suave con IntersectionObserver ya existente
    const newImgs = proyectosAdicionales.querySelectorAll(".project-img img");

    // 1. Agregar nuevas imágenes al array 'images'
    newImgs.forEach((img) => {
      images.push({
        src: img.src,
        alt: img.alt,
      });
    });

    // 2. Actualizar imageContainers para incluir las nuevas imágenes también
    imageContainers = imageContainers.concat(Array.from(newImgs));

    // 3. Re-activar event listeners en todas las imágenes ahora visibles
    setupImageClickListeners();

    newImgs.forEach((img) => observer.observe(img));
  });
});
