"use strict";
// Ejercicio 9 - Uso de unknown
var _a;
// Funcion que convierte a mayusculas pero con validacion de tipo
function toUpperSeguro(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    }
    else {
        throw new Error("El valor no es un texto valido");
    }
}
function ejecutarEjercicio9() {
    console.log("Ejercicio 9: Uso de unknown");
    // Probamos con strings
    try {
        const resultado1 = toUpperSeguro("hola mundo");
        console.log("Convertir 'hola mundo':", resultado1);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }
    try {
        const resultado2 = toUpperSeguro("typescript");
        console.log("Convertir 'typescript':", resultado2);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }
    // Probamos con tipos incorrectos para ver los errores
    try {
        const resultado3 = toUpperSeguro(12345);
        console.log("Convertir 12345:", resultado3);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error al intentar convertir 12345:", error.message);
        }
    }
    try {
        const resultado4 = toUpperSeguro(true);
        console.log("Convertir true:", resultado4);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error al intentar convertir true:", error.message);
        }
    }
    try {
        const resultado5 = toUpperSeguro({ nombre: "Ana" });
        console.log("Convertir objeto:", resultado5);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error al intentar convertir objeto:", error.message);
        }
    }
}
(_a = document.getElementById("btn-ejercicio9")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio9);
