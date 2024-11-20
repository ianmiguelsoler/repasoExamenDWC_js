"use strict";

//! Variables
var nombreDeProducto = "Tomates cherri pera" /*nombre producto*/
var precio = 4 /*precio en euros*/
var impuesto = 21 /*impuesto en porcentaje sobre 100*/

//? Soluciones
console.log(factura(nombreDeProducto, precio, impuesto))

//* Funciones
// Función 
function factura(nombreDeProducto = "Producto genérico", precio = 100, impuesto = 21) {
    //Validamos los valores y acabamos la función si no pasa el filtro
    if (isNaN(precio) || isNaN(impuesto)) {
        return "Error: El precio o el impuesto no son números válidos.";
    }
    // Cálculo del precio final
    let precioFinal = precio + (precio * (impuesto / 100));

    // Muestra el resultado
    return `Producto: ${nombreDeProducto}, Precio final (con impuestos): ${precioFinal.toFixed(2)}€`;
}