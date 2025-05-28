// Cargar Footer y botones de contacto (rutas relativas desde /pages/)
document.addEventListener('DOMContentLoaded', () => {
  fetch('../components/footer-commons.html')
    .then(response => {
      if (!response.ok) throw new Error('Error cargando footer');
      return response.text();
    })
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error('Error cargando footer:', err));

  fetch('../components/contact-buttons.html')
    .then(response => {
      if (!response.ok) throw new Error('Error cargando botones de contacto');
      return response.text();
    })
    .then(data => {
      const contacto = document.getElementById('contacto');
      if (contacto) contacto.innerHTML = data;
    })
    .catch(err => console.error('Error cargando botones de contacto:', err));
});

// Navbar scroll
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    navbar.style.top = '-190px';
  } else {
    navbar.style.top = '0';
  }
  lastScroll = currentScroll;
});

// Toggle menú móvil
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  navLinks.classList.toggle('show');
  menuToggle.classList.toggle('open');
}

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const slidesContainer = document.querySelector('.carousel-slides');
const dotsContainer = document.querySelector('.carousel-dots');
const totalSlides = slides.length;

// Generar los puntos (dots) dinámicamente
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  // Actualizar los puntos activos
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  // Reiniciar animaciones de los elementos
  const currentItems = slides[index].querySelectorAll('.benefit-item[data-animate]');
  currentItems.forEach((item, i) => {
    item.classList.remove('visible');
    setTimeout(() => {
      item.classList.add('visible');
    }, i * 550); // Retraso progresivo para cada elemento
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

function goToSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Manejar el botón "Saber más"
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function () {
    const item = this.parentElement;
    item.classList.toggle('expanded');
    this.textContent = item.classList.contains('expanded') ? 'Ocultar' : 'Saber más';
  });
});

// Mostrar el primer slide al cargar
showSlide(slideIndex);

