// Ejercicio 10 - Mini proyecto
// Interfaz para definir un alumno
interface Alumno {
    id: number;
    nombre: string;
    notas: number[];
}
// Clase que implementa la interfaz
class AlumnoApp implements Alumno {
    id: number;
    nombre: string;
    notas: number[];
    constructor(id: number, nombre: string, notas: number[]) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }
    // Calcula el promedio de las notas
    calcularNotaMedia(): number {
        if (this.notas.length === 0) {
            return 0;
        }
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return suma / this.notas.length;
    }
    // Retorna un resumen del alumno
    obtenerResumen(): string {
        const media = this.calcularNotaMedia();
        return `ID: ${this.id} | ${this.nombre} | Notas: [${this.notas.join(', ')}] | Media: ${media.toFixed(2)}`;
    }
}
function ejecutarEjercicio10(): void {
    console.log("Ejercicio 10: Mini proyecto");
    // Creamos un array de alumnos
    const alumnos: AlumnoApp[] = [];
    // Añadimos alumnos al array
    alumnos.push(new AlumnoApp(1, "Ana Garcia", [8.5, 9.0, 7.5, 8.0]));
    alumnos.push(new AlumnoApp(2, "Carlos Lopez", [6.5, 7.0, 8.5, 7.5]));
    alumnos.push(new AlumnoApp(3, "Maria Fernandez", [9.0, 9.5, 10.0, 9.0]));
    alumnos.push(new AlumnoApp(4, "Juan Martinez", [7.0, 6.5, 8.0, 7.0]));
    console.log("Listado de alumnos:");
    // Calculamos la media total
    let sumaMedias: number = 0;
    // Mostramos cada alumno
    alumnos.forEach((alumno: AlumnoApp) => {
        console.log(alumno.obtenerResumen());
        sumaMedias += alumno.calcularNotaMedia();
    });
    // Calculamos la media global
    const mediaGlobal: number = sumaMedias / alumnos.length;
    console.log(`Media global: ${mediaGlobal.toFixed(2)}`);
    // Encontramos el mejor alumno
    const mejorAlumno = alumnos.reduce((mejor, actual) => 
        actual.calcularNotaMedia() > mejor.calcularNotaMedia() ? actual : mejor
    );
    console.log(`Mejor alumno: ${mejorAlumno.nombre} con media ${mejorAlumno.calcularNotaMedia().toFixed(2)}`);
}
document.getElementById("btn-ejercicio10")?.addEventListener("click", ejecutarEjercicio10);
