# Portfolio Web Interactivo (CV Interactivo)

Este proyecto es una aplicación web de página única (**SPA - Single Page Application**) desarrollada para la materia de **Tecnologías Web**. Consiste en un currículum vitae e historial profesional interactivo, accesible y totalmente adaptativo (Responsive Design).

---

## Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura limpia y accesible utilizando etiquetas estándar (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 Modular:** Arquitectura CSS organizada por módulos (`base`, `variables`, `components`, `layout`, `animations`) con soporte nativo de **CSS Custom Properties** (variables CSS) para cambio de tema dinámico.
- **JavaScript ES6+:** Control de navegación dinámica estilo SPA (sin recarga de página), persistencia de estado de tema (Light/Dark Mode) y validación dinámica de formularios.
- **Git & GitHub Pages:** Control de versiones modular con commits semánticos y despliegue automático continuo.

---

## Estructura del Proyecto

```text
CV-Interactivo/
├── assets/
│   ├── images/      # Recursos gráficos y fotografías del proyecto
│   ├── audios/      # Archivos multimedia de audio
│   └── videos/      # Archivos de video demostrativos
├── css/
│   ├── variables.css   # Variables globales y esquemas de color (Light/Dark)
│   ├── base.css        # Resets y estilos base tipográficos
│   ├── layout.css      # Estructura del contenedor principal y grillas
│   ├── components.css  # Botones, tarjetas, formularios y componentes
│   ├── animations.css  # Transiciones y efectos micro-interactivos
│   └── styles.css      # Hoja de estilos principal que integra los módulos
├── js/
│   └── app.js          # Lógica SPA, switch de tema y validaciones
├── index.html          # Punto de entrada principal y maquetación semántica
└── README.md           # Documentación del proyecto
```
