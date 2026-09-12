document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Navegación por Pestañas / Secciones ---
  const enlacesNav = document.querySelectorAll(".nav_principal a");
  const secciones = document.querySelectorAll("main section");

  function cambiarPestana(idObjetivo) {
    // Si no hay ID o no coincide, defase a la primera sección (perfil)
    let seccionEncontrada = false;

    secciones.forEach((seccion) => {
      if ("#" + seccion.id === idObjetivo) {
        seccion.classList.add("seccion_activa");
        seccionEncontrada = true;
      } else {
        seccion.classList.remove("seccion_activa");
      }
    });

    // Si la ruta no existe, activar la primera por defecto
    if (!seccionEncontrada && secciones.length > 0) {
      secciones[0].classList.add("seccion_activa");
      idObjetivo = "#" + secciones[0].id;
    }

    // Actualizar estado del menú de navegación
    enlacesNav.forEach((enlace) => {
      if (enlace.getAttribute("href") === idObjetivo) {
        enlace.classList.add("activo");
      } else {
        enlace.classList.remove("activo");
      }
    });

    // Subir scroll arriba al cambiar de pestaña
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Evento clic en menú
  enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const hash = enlace.getAttribute("href");
      window.location.hash = hash;
      cambiarPestana(hash);
    });
  });

  // Leer la pestaña actual desde la URL al cargar o recargar
  const hashInicial = window.location.hash || "#perfil";
  cambiarPestana(hashInicial);

  // Escuchar cambios de historial (flechas adelante/atrás del navegador)
  window.addEventListener("hashchange", () => {
    cambiarPestana(window.location.hash);
  });

  // --- 2. Cambio de Tema (Modo Claro / Oscuro) ---
  const botonTema = document.getElementById("boton_tema");
  const iconoTema = document.getElementById("icono_tema");
  const textoTema = document.getElementById("texto_tema");

  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado) {
    document.documentElement.setAttribute("data-theme", temaGuardado);
    actualizarBotonTema(temaGuardado === "dark");
  }

  botonTema.addEventListener("click", () => {
    const esOscuro =
      document.documentElement.getAttribute("data-theme") === "dark";
    const nuevoTema = esOscuro ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nuevoTema);
    localStorage.setItem("tema", nuevoTema);
    actualizarBotonTema(!esOscuro);
  });

  function actualizarBotonTema(esOscuro) {
    iconoTema.textContent = esOscuro ? "☀️" : "🌙";
    textoTema.textContent = esOscuro ? "Modo Claro" : "Modo Oscuro";
  }

  // --- 3. Validación Formulario de Contacto ---
  const formulario = document.getElementById("formulario_contacto");
  const mensajeExito = document.getElementById("mensaje_exito");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    document
      .querySelectorAll(".mensaje_error")
      .forEach((el) => (el.textContent = ""));
    mensajeExito.textContent = "";

    let esValido = true;

    const nombre = document.getElementById("nombre");
    if (nombre.value.trim().length < 3) {
      document.getElementById("error_nombre").textContent =
        "Mínimo 3 caracteres.";
      esValido = false;
    }

    const correo = document.getElementById("correo");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo.value.trim())) {
      document.getElementById("error_correo").textContent = "Correo no válido.";
      esValido = false;
    }

    const telefono = document.getElementById("telefono");
    const regexTel = /^[0-9]{8,10}$/;
    if (!regexTel.test(telefono.value.trim())) {
      document.getElementById("error_telefono").textContent =
        "Entre 8 y 10 dígitos.";
      esValido = false;
    }

    const motivo = document.getElementById("motivo");
    if (!motivo.value) {
      document.getElementById("error_motivo").textContent =
        "Seleccione una opción.";
      esValido = false;
    }

    const mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim().length < 10) {
      document.getElementById("error_mensaje").textContent =
        "Mínimo 10 caracteres.";
      esValido = false;
    }

    const aceptacion = document.getElementById("aceptacion");
    if (!aceptacion.checked) {
      document.getElementById("error_aceptacion").textContent =
        "Debe aceptar el tratamiento.";
      esValido = false;
    }

    if (esValido) {
      mensajeExito.textContent = "¡Mensaje enviado correctamente!";
      formulario.reset();
    }
  });
});
