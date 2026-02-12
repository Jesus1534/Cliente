// Ejercicio 7 - Clases e interfaces
// Interfaz que define las propiedades de un empleado
interface Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
}
// Clase que implementa la interfaz
class EmpleadoEmpresa implements Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
    constructor(id: number, nombre: string, sueldoMensual: number) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    // Metodo para calcular el sueldo anual
    calcularSueldoAnual(): number {
        return this.sueldoMensual * 12;
    }
}
function ejecutarEjercicio7(): void {
    console.log("Ejercicio 7: Clases e interfaces");
    // Creamos un empleado
    const empleado1 = new EmpleadoEmpresa(1001, "Pedro Sanchez", 2500);
    console.log("Datos del empleado:");
    console.log("ID:", empleado1.id);
    console.log("Nombre:", empleado1.nombre);
    console.log("Sueldo mensual:", empleado1.sueldoMensual, "euros");
    console.log("Sueldo anual:", empleado1.calcularSueldoAnual(), "euros");
}
document.getElementById("btn-ejercicio7")?.addEventListener("click", ejecutarEjercicio7);


