let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const videos = document.querySelectorAll('video');
const pauseBtn = document.querySelector('.pause-btn');
const playPauseIcon = document.getElementById('playPauseIcon');
const fills = document.querySelectorAll('.fill');

const frasesPorSlide = {
  0: [
    "Sequías prolongadas",
    "Acuíferos contaminados",
    "Contaminación doméstica e industrial",
    "Tratamiento ineficiente"
  ],
  1: [
    "Gestión circular del agua",
    "Tecnologías de potabilización avanzada",
    "Regeneración de elevado grado de purificación",
    "Reutilización que multiplican el valor de cada gota"
  ],
  2: [
    "Auditorías de planta de tratamiento",
    "Consultoria y asistencia técnica",
    "Soporte comercial especializado",
    "Soluciones compactas llave en mano"
  ]
};

let fraseInterval = null;
let fraseTimeout = null;
let isPaused = false;

// Guardar el índice actual por slide
let fraseIndicesPorSlide = {
  0: 0,
  1: 0,
  2: 0
};

function iniciarCambioFrases(slideIndex) {
  clearInterval(fraseInterval);
  clearTimeout(fraseTimeout);

  const p = document.getElementById(`text-slide-${slideIndex + 1}`);
  const frases = frasesPorSlide[slideIndex];
  if (!p || !frases) return;

  let i = fraseIndicesPorSlide[slideIndex];

  function cambiar() {
    if (isPaused) return;

    p.classList.remove("show");
    p.style.opacity = 0;

    setTimeout(() => {
      p.textContent = frases[i];
      p.classList.add("show");
      p.style.opacity = 1;
      i = (i + 1) % frases.length;
      fraseIndicesPorSlide[slideIndex] = i;
    }, 200);
  }

  cambiar(); // mostrar la primera inmediatamente
  fraseInterval = setInterval(cambiar, 1750);
  fraseTimeout = setTimeout(() => clearInterval(fraseInterval), 7000);
}

function pausarAnimacion() {
  clearInterval(fraseInterval);
  clearTimeout(fraseTimeout);
  isPaused = true;
}

function reanudarAnimacion() {
  isPaused = false;
  iniciarCambioFrases(currentSlide);
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    videos[i].pause();
    videos[i].currentTime = 0;
    if (fills[i]) fills[i].style.height = '0%';
  });

  currentSlide = index;
  const currentVideo = videos[currentSlide];

  currentVideo.play().then(() => {
    updateProgress(currentSlide);
    updatePlayIcon();
  }).catch(err => {
    console.error('Error al reproducir video:', err);
  });

  iniciarCambioFrases(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  showSlide(index);
}

function updateProgress(index) {
  const video = videos[index];
  video.ontimeupdate = () => {
    const percent = (video.currentTime / video.duration) * 100;
    fills.forEach((fill, i) => {
      if (fill) fill.style.height = i === index ? `${percent}%` : '0%';
    });
    if (video.ended) nextSlide();
  };
}

function togglePlay() {
  const video = videos[currentSlide];
  if (video.paused) {
    video.play();
    reanudarAnimacion();
  } else {
    video.pause();
    pausarAnimacion();
  }
  updatePlayIcon();
}

function updatePlayIcon() {
  const video = videos[currentSlide];
  if (!playPauseIcon) return;
  playPauseIcon.classList.toggle('play', video.paused);
  playPauseIcon.classList.toggle('pause', !video.paused);
}


// Cargar componentes dinámicamente
document.addEventListener('DOMContentLoaded', () => {
  fetch('/components/footer-component.html') // Ruta absoluta desde la raíz
    .then(response => {
      if (!response.ok) throw new Error('Error cargando footer');
      return response.text();
    })
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.error('Error cargando footer:', err));

  fetch('/components/contact-buttons.html') // Ruta absoluta desde la raíz
    .then(response => {
      if (!response.ok) throw new Error('Error cargando botones de contacto');
      return response.text();
    })
    .then(data => {
      document.getElementById('contacto').innerHTML = data;
    })
    .catch(err => console.error('Error cargando botones de contacto:', err));
});

// Navbar scroll
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    navbar.style.top = '-190px'; // Ocultar si está más abajo de 100px
  } else {
    navbar.style.top = '0'; // Mostrar si está cerca del top
  }
  lastScroll = currentScroll;
});


// Iniciar en el primer slide
showSlide(0);

function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Alternamos la clase 'show' para mostrar/ocultar el menú
  navLinks.classList.toggle('show');
  
  // Alternamos la clase 'open' para cambiar el ícono
  menuToggle.classList.toggle('open');
}


