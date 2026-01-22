"use strict";
// Ejercicio 8 - Manejo de errores
var _a;
// Funcion que dobla un numero pero lanza error si es negativo
function doblarPositivo(n) {
    if (n < 0) {
        throw new Error("El numero no puede ser negativo");
    }
    return n * 2;
}
function ejecutarEjercicio8() {
    console.log("Ejercicio 8: Manejo de errores");
    // Probamos con numeros positivos
    try {
        const resultado1 = doblarPositivo(5);
        console.log("Doblar 5:", resultado1);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }
    try {
        const resultado2 = doblarPositivo(10);
        console.log("Doblar 10:", resultado2);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }
    // Probamos con numero negativo para ver el error
    try {
        const resultado3 = doblarPositivo(-3);
        console.log("Doblar -3:", resultado3);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error al intentar doblar -3:", error.message);
        }
    }
    // Probamos con cero
    try {
        const resultado4 = doblarPositivo(0);
        console.log("Doblar 0:", resultado4);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }
}
(_a = document.getElementById("btn-ejercicio8")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio8);
