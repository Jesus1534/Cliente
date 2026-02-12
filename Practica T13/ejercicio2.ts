// Ejercicio 2 - Funciones tipadas

// Funcion que calcula la media de dos numeros
function calcularMedia(num1: number, num2: number): number {
    return (num1 + num2) / 2;
}

function ejecutarEjercicio2(): void {
    console.log("Ejercicio 2: Funciones tipadas");
    
    // Llamamos la funcion con valores correctos
    const media1: number = calcularMedia(8, 10);
    console.log("Media de 8 y 10:", media1);
    
    const media2: number = calcularMedia(7.5, 9.0);
    console.log("Media de 7.5 y 9.0:", media2);
    
    // Esta linea da error porque pasamos strings en lugar de numeros
    // const mediaIncorrecta = calcularMedia("8", "10");
}

document.getElementById("btn-ejercicio2")?.addEventListener("click", ejecutarEjercicio2);


