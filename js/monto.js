// Segundo TPO - Javascript

// Funcion Monto a Pagar

// Declaramos la Variable Monto a Pagar
let montoPagar = 0;

// Declaramos la Variable Precio de las Entradas
let precio = 200.00;

// Definimos la Funcion Monto a Pagar

function montoAPagar() {

    // Cantidad de Entradas
    let cantidad = document.getElementById("cantidad").value;
    
    // Categoria de Entradas
    let categoria = document.getElementById("categoria").value;

    // Calculamos Monto a Pagar

    if (categoria == "Estudiante") {
        montoPagar = parseFloat(cantidad * precio * (1 - 0.80));
    } else if (categoria == "Trainee") {
        montoPagar = parseFloat(cantidad * precio * (1 - 0.50));
    } else if (categoria == "Junior") {
        montoPagar = parseFloat(cantidad * precio * (1 - 0.15));
    } else {
        document.getElementById("montoPagar").innerHTML = "Error, Por Favor Verifique la Información";
    }

        document.getElementById("montoPagar").innerHTML = "  Total a Pagar: $ " + montoPagar.toFixed(2) + " pesos.";

}

function limpiar() {
    document.getElementById("montoPagar").innerHTML="Total a Pagar: $";
}