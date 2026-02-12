// Ejercicio 4 - Interfaces

// Interfaz que define como debe ser un producto
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}
function ejecutarEjercicio4(): void {
    console.log("Ejercicio 4: Interfaces");
    
    // Creamos un objeto que sigue la interfaz Producto
    const producto1: Producto = {
        id: 1,
        nombre: "Portatil HP",
        precio: 899.99
    };
    console.log("Producto:", producto1);
    console.log("ID:", producto1.id);
    console.log("Nombre:", producto1.nombre);
    console.log("Precio:", producto1.precio);
    
    // Esto daria error porque le faltan propiedades
    // const productoIncorrecto: Producto = {
    //     id: 2,
    //     nombre: "Teclado"
    // };
}
document.getElementById("btn-ejercicio4")?.addEventListener("click", ejecutarEjercicio4);


