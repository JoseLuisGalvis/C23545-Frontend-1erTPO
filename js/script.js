// Obtener el elemento del menú desplegable
const menu = document.querySelector('.navbar-collapse');

// Obtener todas las opciones de selección de secciones
const opciones = document.querySelectorAll('.nav-link');

// Agregar un evento de clic a cada opción de selección de secciones
opciones.forEach(opcion => {

  opcion.addEventListener('click', () => {
    // Retraer automáticamente el menú desplegable al hacer clic en una opción
    menu.classList.remove('show');
  });

});