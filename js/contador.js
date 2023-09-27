// Contador de Vistas

// Obtener el número de visitas almacenado en localStorage
var contador = localStorage.getItem('contador-visitas');

// Comprobar si es la primera visita o el contador no está definido
if (contador === null) {
  // Establecer el contador en 1
  contador = 1;
} else {
  // Incrementar el contador en 1
  contador = parseInt(contador) + 1;
}

// Guardar el nuevo valor del contador en localStorage
localStorage.setItem('contador-visitas', contador);

// Mostrar el contador de visitas en el elemento HTML correspondiente
document.getElementById('contador-visitas').textContent = "Visitas: " + contador;
