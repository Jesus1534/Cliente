"use strict";
// Ejercicio 2 - Funciones tipadas
var _a;
// Funcion que calcula la media de dos numeros
function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;
}
function ejecutarEjercicio2() {
    console.log("Ejercicio 2: Funciones tipadas");
    // Llamamos la funcion con valores correctos
    const media1 = calcularMedia(8, 10);
    console.log("Media de 8 y 10:", media1);
    const media2 = calcularMedia(7.5, 9.0);
    console.log("Media de 7.5 y 9.0:", media2);
    // Esta linea da error porque pasamos strings en lugar de numeros
    // const mediaIncorrecta = calcularMedia("8", "10");
}
(_a = document.getElementById("btn-ejercicio2")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio2);
