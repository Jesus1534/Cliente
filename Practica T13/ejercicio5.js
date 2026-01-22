"use strict";
// Ejercicio 5 - Arrays de interfaces
var _a;
function ejecutarEjercicio5() {
    console.log("Ejercicio 5: Arrays de interfaces");
    // Array con varios productos
    const productos = [
        { id: 1, nombre: "Portatil HP", precio: 899.99 },
        { id: 2, nombre: "Raton", precio: 25.50 },
        { id: 3, nombre: "Teclado Mecanico", precio: 89.99 },
        { id: 4, nombre: "Monitor", precio: 179.99 }
    ];
    console.log("Productos:");
    // Recorremos y mostramos cada uno
    let precioTotal = 0;
    productos.forEach((producto) => {
        console.log(`${producto.nombre}: ${producto.precio} euros`);
        precioTotal += producto.precio;
    });
    // Mostramos el total
    console.log(`Precio total: ${precioTotal.toFixed(2)} euros`);
}
(_a = document.getElementById("btn-ejercicio5")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio5);
