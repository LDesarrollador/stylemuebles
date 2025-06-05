// ==============================
// Variables y configuración inicial
// ==============================

let currentIndex = 0;

const sliderContainer = document.getElementById("slider-container");
const slides = document.querySelectorAll("#slider-container img");
const totalSlides = slides.length;
const indicatorContainer = document.getElementById("slider-indicators");
const slider = document.querySelector(".slider");

let slideInterval;

// ==============================
// Función para mostrar un slide específico
// ==============================
function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // Usar px en lugar de vw para mayor precisión
  const slideWidth = sliderContainer.offsetWidth / totalSlides;
  sliderContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;

  updateIndicators();
}

// ==============================
// Controles manuales
// ==============================
function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// ==============================
// Inicialización del intervalo de slide automático
// ==============================
function startSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// ==============================
// Inicialización de indicadores
// ==============================
function initIndicators() {
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("slider-dot");
    dot.addEventListener("click", () => showSlide(i));
    indicatorContainer.appendChild(dot);
  });
}

// ==============================
// Actualiza los indicadores activos
// ==============================
function updateIndicators() {
  const dots = indicatorContainer.querySelectorAll("span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// ==============================
// Animación de botones al hacer clic
// ==============================
function initButtonAnimations() {
  document.querySelectorAll(".slider-button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
      setTimeout(() => button.classList.remove("clicked"), 500);
    });
  });
}

// ==============================
// Eventos para pausa y reanudación automática
// ==============================
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

// ==============================
// Animación navbar y logo al hacer scroll
// ==============================
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

// ==============================
// Función de inicialización general
// ==============================
function initSlider() {
  if (!sliderContainer || totalSlides === 0 || !indicatorContainer) return;

  // Ajusta ancho total del contenedor slider para acomodar todas las imágenes en fila
  sliderContainer.style.width = `${totalSlides * 100}vw`;

  initIndicators();
  initButtonAnimations();
  initPauseOnHover();
  initScrollAnimation();

  showSlide(currentIndex);
  startSlideInterval();
}

// Ejecuta la inicialización cuando la página está lista
document.addEventListener("DOMContentLoaded", initSlider);

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
