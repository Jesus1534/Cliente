"use strict";
// Ejercicio 3 - Parametros opcionales
var _a;
// Funcion saludar con parametro opcional
function saludar(nombre) {
    if (nombre) {
        console.log(`Hola, ${nombre}`);
    }
    else {
        console.log("Hola, invitado");
    }
}
function ejecutarEjercicio3() {
    console.log("Ejercicio 3: Parametros opcionales");
    // Probamos con nombre
    saludar("Ana");
    // Probamos sin nombre
    saludar();
    // Otro ejemplo
    saludar("Juan");
}
(_a = document.getElementById("btn-ejercicio3")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio3);
