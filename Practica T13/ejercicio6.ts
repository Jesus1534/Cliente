// Ejercicio 6 - Clases y encapsulacion
// Clase con propiedades publicas y privadas
class Persona {
    public nombre: string;
    private edad: number;
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Metodo que imprime los datos de la persona
    presentarse(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
function ejecutarEjercicio6(): void {
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
document.getElementById("btn-ejercicio6")?.addEventListener("click", ejecutarEjercicio6);


