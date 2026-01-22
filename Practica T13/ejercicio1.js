"use strict";
// Ejercicio 1 - Tipos basicos
var _a;
function ejecutarEjercicio1() {
    console.log("Ejercicio 1: Tipos basicos");
    // Variables de diferentes tipos para representar datos de un alumno
    let nombreAlumno = "Carlos Garcia";
    let edad = 20;
    let estaMatriculado = true;
    let notas = [8.5, 9.0, 7.5, 8.0, 9.5];
    const nombreCentro = "IES Miguel de Cervantes";
    // Mostrar todo por consola
    console.log("Nombre:", nombreAlumno);
    console.log("Edad:", edad);
    console.log("Matriculado:", estaMatriculado);
    console.log("Notas:", notas);
    console.log("Centro:", nombreCentro);
}
(_a = document.getElementById("btn-ejercicio1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio1);
