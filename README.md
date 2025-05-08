# WEBCEATA - CEATA Ingeniería

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-brightgreen)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)

## Descripción
WEBCEATA es un sitio web estático para **CEATA Ingeniería**, una empresa dedicada a soluciones innovadoras para la gestión y tratamiento de agua potable y residual. El sitio incluye una página principal con un navbar centrado, un carrusel de videos, una sección de soluciones, un footer detallado, y botones flotantes de contacto (teléfono, correo, WhatsApp). Está construido con HTML, CSS, JavaScript, y utiliza **Bootstrap 5.3.0** y **Font Awesome 5.15.4** para estilos e iconos.


## Demo
<!-- Descomenta y actualiza si configuras GitHub Pages -->
<!-- Visita la demo en: [WEBCEATA Demo](https://jvgsg01.github.io/WebCeata) -->

## Estructura de Carpetas
```
WebCeata/
├── css/
│   └── style.css           # Estilos principales del sitio
├── js/
│   └── script.js          # Lógica para carrusel, carga de componentes y navbar
├── assets/
│   ├── images/            # Imágenes y videos
│   │   ├── logo.png
│   │   ├── CiudadDos.webp
│   │   ├── PuebloDos.webp
│   │   ├── Industrial.webp
│   │   ├── Rural3.webp
│   │   ├── PrimerCarrusel.mp4
│   │   ├── SegundoCarrusel.mp4
│   │   ├── TercerCarrousel.mp4
│   │   ├── CuartoCarrusel.mp4
│   └── footer/            # Imágenes específicas del footer
│       ├── ods3.png
│       ├── ods6.png
│       ├── ods9.png
│       ├── ods12.png
│       ├── Arbitraje.png
│       ├── certificado1.png
│       ├── certificado2.png
│       ├── certificado3.png
├── components/
│   ├── contact-buttons.html  # Botones flotantes de contacto
│   ├── footer-component.html # Footer del sitio
├── docs/
│   ├── catalogo-es.pdf    # Catálogo en español
│   ├── catalogo-en.pdf    # Catálogo en inglés
├── index.html             # Página principal
├── README.md              # Documentación del proyecto
├── LICENSE                # Licencia MIT
└── .gitignore             # Archivos ignorados por Git
```

## Requisitos
- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- [Visual Studio Code](https://code.visualstudio.com/) con la extensión **Live Server** para pruebas locales.
- [Git](https://git-scm.com/) para clonar el repositorio.

## Instalación y Ejecución
1. Clona el repositorio:
   ```bash
   git clone https://github.com/jvgsg01/WebCeata.git
   ```
2. Abre el proyecto en Visual Studio Code.
3. Instala la extensión **Live Server** si no la tienes.
4. Haz clic derecho en `index.html` y selecciona **Open with Live Server** para visualizar el sitio en tu navegador.
5. Verifica que las imágenes, videos, y componentes (footer, botones de contacto) se carguen correctamente.

## Dependencias Externas
- **Bootstrap 5.3.0**: Para estilos y componentes responsivos (via CDN).
- **Font Awesome 5.15.4**: Para iconos (via CDN).
- Scripts y estilos locales: `js/script.js`, `css/style.css`.

## Desarrollo Futuro
- Añadir páginas secundarias en una carpeta `pages/` (ej: `about.html`, `projects.html`).
- Mover el navbar a `components/navbar.html` para reutilización.
- Actualizar enlaces del navbar y carrusel con rutas reales.
- Optimizar la carga eliminando dependencias no esenciales (ej: Font Awesome) y usando un bundler como [Vite](https://vitejs.dev/).

## Notas
- Las rutas en `index.html`, `footer-component.html`, y `script.js` son relativas para funcionar con Live Server. Si subes el sitio a un servidor, ajusta las rutas según la configuración (ej: `/WebCeata/css/style.css` para GitHub Pages).
- El carrusel pasa al siguiente slide cuando un video termina. Para cambiar este comportamiento, añade el atributo `loop` a los `<video>` en `index.html`.
- Prueba la accesibilidad y rendimiento con herramientas como [Lighthouse](https://developers.google.com/web/tools/lighthouse) o [WAVE](https://wave.webaim.org/).

## Despliegue
Para desplegar en GitHub Pages:
1. Asegúrate de que las rutas en `index.html` sean relativas o ajustadas al subdirectorio (ej: `/WebCeata/`).
2. Configura GitHub Pages en la configuración del repositorio (rama `main`, carpeta raíz).
3. Accede al sitio en `https://jvgsg01.github.io/WebCeata`.
4. Actualiza la sección **Demo** con el enlace generado.

## Contacto
Para dudas o sugerencias, contacta a CEATA Ingeniería:
- **Teléfono**: (+34) 946 29 11 83
- **Correo**: ceataingenieria@ceataingenieria.com
- **WhatsApp**: [Enviar mensaje](https://wa.me/34946291183)

## Créditos
Desarrollado por CEATA Ingeniería .

## Licencia
Este proyecto está bajo la [Licencia MIT](LICENSE).

---
Última actualización: 28 de abril de 2025