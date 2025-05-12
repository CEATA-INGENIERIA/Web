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
WEBCEATA/
├── assets/
│   ├── footer/
│   │   ├── Arbitraje.png              # Imagen de arbitraje en el footer
│   │   ├── certificado1.png           # Certificado del footer
│   │   ├── certificado2.png           # Certificado del footer
│   │   ├── ods3.png                   # Icono ODS 3 - Salud y Bienestar
│   │   ├── ods6.png                   # Icono ODS 6 - Agua limpia
│   │   ├── ods9.png                   # Icono ODS 9 - Industria e innovación
│   │   ├── ods12.png                  # Icono ODS 12 - Producción responsable
│   │
│   └── images/
│       ├── CiudadDos.webP
│       ├── CuartoCARRUSEL.mp4         # Video para un carrusel
│       ├── INDUSTRIAL.webP
│       ├── logo.png                   # Logo usado en el navbar y footer
│       ├── PrimerCARRUSEL.mp4         # Video para un carrusel
│       ├── PuebloDos.webP
│       ├── Rural3.webP
│       ├── SegundoCARRUSEL.mp4        # Video para un carrusel
│       ├── TercerCARRUSEL.mp4         # Video para un carrusel
│       ├── water.png                  # DropFill
│       └── waterfall.png              # DropFiller
│
├── components/
│   ├── contact-buttons.html           # Botones de contacto (quizás usados en el footer)
│   └── footer-component.html          # Componente del footer que trabajamos
│
├── css/
│   └── style.css                       # Estilos generales del sitio (navbar, footer, etc.)
│
├── docs/                              # Movido al nivel raíz
│   ├── catalogo-en.pdf
│   └── catalogo-es.pdf
│
├── js/
│   └── script.js                     # JS para el menú hamburguesa y dropdown
│
├── pages/
│   ├── configurador.html              # Página del configurador
│   └── Header2.html                   # Variante del header (quizás con navbar)
│
├── index.html                         # Página principal
├── LICENSE.txt                        # Licencia del proyecto
└── README.md                          # Documentación del proyecto
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