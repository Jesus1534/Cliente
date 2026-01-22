"use strict";
// Ejercicio 4 - Interfaces
var _a;
function ejecutarEjercicio4() {
    console.log("Ejercicio 4: Interfaces");
    // Creamos un objeto que sigue la interfaz Producto
    const producto1 = {
        id: 1,
        nombre: "Portatil HP",
        precio: 899.99
    };
    console.log("Producto:", producto1);
    console.log("ID:", producto1.id);
    console.log("Nombre:", producto1.nombre);
    console.log("Precio:", producto1.precio);
    // Esto daria error porque le faltan propiedades
    // const productoIncorrecto: Producto = {
    //     id: 2,
    //     nombre: "Teclado"
    // };
}
(_a = document.getElementById("btn-ejercicio4")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio4);
