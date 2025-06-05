// ==============================
// Variables y configuración inicial
// ==============================

// Índice actual del slide
let currentIndex = 0;

// Contenedor del carrusel
const sliderContainer = document.getElementById("slider-container");

// Todas las imágenes del slider
const slides = document.querySelectorAll("#slider-container img");

// Total de slides, constante porque no cambia durante la ejecución
const totalSlides = slides.length;

// Contenedor de indicadores (usa ID para evitar duplicidad)
const indicatorContainer = document.getElementById("slider-indicators");

// Ajusta el ancho del contenedor dinámicamente basado en la cantidad de imágenes
sliderContainer.style.width = `${totalSlides * 100}vw`;

// ==============================
// Función principal para mostrar un slide específico
// ==============================
function showSlide(index) {
  // Ajusta el índice para que no se salga de rango
  if (index >= totalSlides) {
    currentIndex = 0; // vuelve al primer slide
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // va al último slide
  } else {
    currentIndex = index;
  }

  // Mueve el contenedor usando transform para mostrar el slide correcto
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Actualiza los indicadores para reflejar el slide activo
  updateIndicators();
}

// ==============================
// Controles manuales del slider
// ==============================
function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// ==============================
// Control automático del slider
// ==============================

// Avanza automáticamente cada 5 segundos
let slideInterval = setInterval(nextSlide, 5000);

// Detiene el avance automático cuando el usuario pasa el mouse sobre el slider
const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
slider.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// ==============================
// Animación del botón al hacer clic
// ==============================

document.querySelectorAll(".slider-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");

    // Remueve la clase 'clicked' después de 500ms para efecto visual
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 500);
  });
});

// ==============================
// Inicialización al cargar la página
// ==============================

// Mostrar el primer slide al iniciar
showSlide(currentIndex);

// ==============================
// Indicadores de navegación
// ==============================

// Crea un punto por cada imagen del slider y agrega evento para cambiar slide al hacer clic
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  indicatorContainer.appendChild(dot);
});

// ==============================
// Función para actualizar los indicadores activos
// ==============================
function updateIndicators() {
  const dots = indicatorContainer.querySelectorAll("span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// ==============================
// Pausar la animación automática al pasar el mouse sobre indicadores
// ==============================
indicatorContainer.addEventListener("mouseenter", () =>
  clearInterval(slideInterval)
);
indicatorContainer.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// ==============================
// Animación del logo y navbar al hacer scroll
// ==============================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const logoImg = document.getElementById("logo");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logoImg.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logoImg.classList.remove("scrolled");
  }
});
// Para el boton deslizante
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// script de modal
function mostrarModal(ruta) {
  const modal = document.getElementById("modalImagen");
  const img = document.getElementById("imagenModal");
  img.src = ruta;
  modal.classList.remove("hidden");
}

function cerrarModal(e) {
  if (e) e.stopPropagation(); // Evita cerrar si clic en imagen
  document.getElementById("modalImagen").classList.add("hidden");
}
