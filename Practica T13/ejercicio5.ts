// Ejercicio 5 - Arrays de interfaces

// Reutilizamos la interfaz de productos
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

function ejecutarEjercicio5(): void {
    console.log("Ejercicio 5: Arrays de interfaces");
    
    // Array con varios productos
    const productos: Producto[] = [
        { id: 1, nombre: "Portatil HP", precio: 899.99 },
        { id: 2, nombre: "Raton", precio: 25.50 },
        { id: 3, nombre: "Teclado Mecanico", precio: 89.99 },
        { id: 4, nombre: "Monitor", precio: 179.99 }
    ];
    
    console.log("Productos:");
    
    // Recorremos y mostramos cada uno
    let precioTotal: number = 0;
    
    productos.forEach((producto: Producto) => {
        console.log(`${producto.nombre}: ${producto.precio} euros`);
        precioTotal += producto.precio;
    });
    
    // Mostramos el total
    console.log(`Precio total: ${precioTotal.toFixed(2)} euros`);
}

document.getElementById("btn-ejercicio5")?.addEventListener("click", ejecutarEjercicio5);
