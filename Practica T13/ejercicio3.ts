// Ejercicio 3 - Parametros opcionales

// Funcion saludar con parametro opcional
function saludar(nombre?: string): void {
    if (nombre) {
        console.log(`Hola, ${nombre}`);
    } else {
        console.log("Hola, invitado");
    }
}

function ejecutarEjercicio3(): void {
    console.log("Ejercicio 3: Parametros opcionales");
    
    // Probamos con nombre
    saludar("Ana");
    
    // Probamos sin nombre
    saludar();
    
    // Otro ejemplo
    saludar("Juan");
}

document.getElementById("btn-ejercicio3")?.addEventListener("click", ejecutarEjercicio3);
