// Ejercicio 1 - Tipos basicos

function ejecutarEjercicio1(): void {
    console.log("Ejercicio 1: Tipos basicos");
    
    // Variables de diferentes tipos para representar datos de un alumno
    let nombreAlumno: string = "Carlos Garcia";
    let edad: number = 20;
    let estaMatriculado: boolean = true;
    let notas: number[] = [8.5, 9.0, 7.5, 8.0, 9.5];
    const nombreCentro: string = "IES Miguel de Cervantes";
    
    // Mostrar todo por consola
    console.log("Nombre:", nombreAlumno);
    console.log("Edad:", edad);
    console.log("Matriculado:", estaMatriculado);
    console.log("Notas:", notas);
    console.log("Centro:", nombreCentro);
}

document.getElementById("btn-ejercicio1")?.addEventListener("click", ejecutarEjercicio1);

