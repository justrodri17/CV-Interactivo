# Arquitectura de Estilos CSS Modular

Este proyecto utiliza una arquitectura de CSS modular basada en el principio de separación de responsabilidades, lo que permite mantener un código limpio, escalable y sin dependencias de frameworks externos.

## Estructura de Archivos

- `variables.css`: Almacena las _Custom Properties_ globales (paleta de colores, fuentes, espaciados y variables de tema).
- `base.css`: Contiene los estilos globales, reseteo del box-model (`box-sizing`), tipografía base y la lógica para el cambio de tema claro/oscuro mediante CSS puro.
- `layout.css`: Define la estructura general de la página utilizando **Flexbox** (header y navegación) y **CSS Grid** (grillas responsive de tarjetas, habilidades y multimedia), además de las reglas `@media query` para adaptación a dispositivos móviles.
- `components.css`: Estilos aplicados a componentes reutilizables como tarjetas (`.card`), botones (`.btn`), tablas (`table`), formularios (`.contact-form`) e imágenes de perfil.
- `animations.css`: Transiciones y efectos suaves de interacción (`hover`, elevación de tarjetas).
- `styles.css`: Archivo orquestador principal que importa la totalidad de los módulos mediante `@import` para ser vinculado directamente desde el HTML.
