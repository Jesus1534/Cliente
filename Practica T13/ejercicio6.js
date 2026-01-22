"use strict";
// Ejercicio 6 - Clases y encapsulacion
var _a;
// Clase con propiedades publicas y privadas
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Metodo que imprime los datos de la persona
    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
function ejecutarEjercicio6() {
    console.log("Ejercicio 6: Clases y encapsulacion");
    // Creamos una instancia de Persona
    const persona1 = new Persona("Maria Lopez", 25);
    // Llamamos el metodo presentarse
    persona1.presentarse();
    // Accedemos a la propiedad publica
    console.log("Nombre:", persona1.nombre);
    // Esto daria error porque edad es privada
    // console.log("Edad:", persona1.edad);
}
(_a = document.getElementById("btn-ejercicio6")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio6);
