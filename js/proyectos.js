function actualizarMenu() {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo-img");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", actualizarMenu);
window.addEventListener("DOMContentLoaded", actualizarMenu);

// Script para el slider

// ==============================
// Variables y configuración inicial
// ==============================

let currentIndex = 0; // Índice actual del slide
const sliderContainer = document.getElementById("slider-container"); // Contenedor del carrusel
const slides = document.querySelectorAll("#slider-container img"); // Todas las imágenes del slider

// Ajusta el ancho del contenedor dinámicamente basado en la cantidad de imágenes

// ==============================
// Función principal para mostrar un slide específico
// ==============================
function showSlide(index) {
  const totalSlides = slides.length;

  // Verifica y ajusta el índice si está fuera de rango
  if (index >= totalSlides) {
    currentIndex = 0; // vuelve al primero
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // va al último
  } else {
    currentIndex = index;
  }

  // Mueve el contenedor de slides usando transform
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Actualiza los indicadores visuales
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

// Animación automatica despues del clickeado en el boton de avanzar o retroceder del slide
document.querySelectorAll(".slider-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");

    // Espera 500ms y luego remueve la clase para que se desvanezca
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 500);
  });
});

// ==============================
// Inicialización al cargar la página
// ==============================

// Muestra el primer slide al iniciar
showSlide(currentIndex);

// ==============================
// Indicadores de navegación
// ==============================

const indicatorContainer = document.getElementById("slider-indicators");

// Crea un punto por cada imagen del slider
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i)); // Al hacer clic cambia al slide correspondiente
  indicatorContainer.appendChild(dot);
});

// ==============================
// Activar y actualizar los indicadores
// ==============================
function updateIndicators() {
  const dots = document.querySelectorAll(".slider-indicators span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex); // Solo el actual tiene la clase 'active'
  });
}

// ==============================
// Pausar animación automática al pasar por indicadores
// ==============================

const indicatorsContainer = document.querySelector(".slider-indicators");

indicatorsContainer.addEventListener("mouseenter", () =>
  clearInterval(slideInterval)
);
indicatorsContainer.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Logo animacion
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
