# 📚 Guía para la Práctica de jQuery — DWEC Tema 11

Bienvenido a esta guía de aprendizaje para completar la plantilla de jQuery. Aquí encontrarás explicaciones, ejemplos y pistas para que realices la práctica de forma autónoma.

---

## 📖 Tabla de Contenidos

1. [Conceptos básicos de jQuery](#conceptos-básicos-de-jquery)
2. [Ejercicio 1: Manipulación del DOM](#ejercicio-1-manipulación-del-dom)
3. [Ejercicio 2: Efectos visuales](#ejercicio-2-efectos-visuales)
4. [Ejercicio 3: Eventos y delegación](#ejercicio-3-eventos-y-delegación)
5. [Ejercicio 4: Validación de formularios](#ejercicio-4-validación-de-formularios)
6. [Ejercicio 5: AJAX simulado](#ejercicio-5-ajax-simulado)
7. [Tips y buenas prácticas](#tips-y-buenas-prácticas)

---

## 🎯 Conceptos básicos de jQuery

### ¿Qué es jQuery?

jQuery es una librería JavaScript que **simplifica la manipulación del DOM**, gestión de eventos y efectos visuales. Hace que escribas menos código con más potencia.

### Sintaxis fundamental

```javascript
// Selector jQuery básico
$(selector)  // Selecciona elementos del DOM

// Ejemplo de selectores
$("#miId")           // Por ID
$(".miClase")        // Por clase
$("div")             // Por etiqueta
$("[data-algo]")     // Por atributo
$("#lista li")       // Descendientes (li dentro de #lista)
```

### Métodos esenciales

```javascript
// TEXTO Y CONTENIDO
$("#elemento").text()           // Obtiene el texto
$("#elemento").text("Nuevo")    // Cambia el texto
$("#elemento").html()           // Obtiene HTML
$("#elemento").html("<b>Nuevo</b>")  // Cambia HTML
$("#elemento").val()            // Obtiene valor (inputs)
$("#elemento").val("Nuevo")     // Cambia valor (inputs)

// CLASES Y ESTILOS
$("#elemento").addClass("miClase")      // Añade clase
$("#elemento").removeClass("miClase")   // Elimina clase
$("#elemento").toggleClass("miClase")   // Alterna clase
$("#elemento").hasClass("miClase")      // ¿Tiene clase?
$("#elemento").css("color", "red")      // Aplica estilos inline

// ATRIBUTOS
$("#elemento").attr("href")             // Obtiene atributo
$("#elemento").attr("href", "url")      // Cambia atributo
$("#elemento").prop("disabled", true)   // Propiedades booleanas

// REFERENCIAS Y BÚSQUEDA
$("#elemento").find(".hijos")     // Busca dentro
$("#elemento").parent()           // Elemento padre
$("#elemento").siblings()         // Elementos hermanos
```

### Punto de entrada: document.ready

**Siempre debes ejecutar tu código cuando el DOM esté listo:**

```javascript
$(document).ready(function() {
  // Aquí va tu código
  // El DOM ya está completamente cargado
});
```

---

## 🔧 Ejercicio 1: Manipulación del DOM

### Qué necesitas hacer

Al hacer clic en el botón `#ej1Btn`, debes:
1. Cambiar el texto del título `#ej1Titulo`
2. Cambiar el color del párrafo `#ej1Texto`
3. Añadir una clase CSS al párrafo (como `fw-bold`)
4. Deshabilitar el botón y cambiar su texto a "Hecho ✅"
5. Mostrar un mensaje informativo en `#ej1Info`

### Conceptos clave

- **`.text()`** → cambia texto
- **`.css()`** → aplica estilos inline
- **`.addClass()`** → añade clase CSS
- **`.prop("disabled", true)`** → deshabilita elemento
- **`.on("click", function() {...})`** → captura eventos

### Ejemplo básico

```javascript
// Cuando hagas clic en un botón
$("#miBoton").on("click", function() {
  // Cambiar texto
  $("#titulo").text("Nuevo título");
  
  // Cambiar color
  $("#parrafo").css("color", "blue");
  
  // Añadir clase
  $("#parrafo").addClass("fw-bold");
  
  // Deshabilitar botón
  $(this).prop("disabled", true);
  
  // Mostrar mensaje
  $("#info").text("✅ Cambios aplicados");
});
```

### 💡 Pistas

- Usa `$(this)` para referirte al botón que se ha hecho clic
- El color se puede cambiar con `.css("color", "rojo")` o `.css("color", "#FF0000")`
- Puedes encadenar métodos: `$("#ej1Titulo").text("...").css(...)`
- En Bootstrap, la clase `fw-bold` hace el texto más grueso (fontWeight bold)

---

## 🎬 Ejercicio 2: Efectos visuales

### Qué necesitas hacer

Implementa botones que apliquen diferentes efectos sobre la caja `#ej2Caja`:

| Botón | Método jQuery | Efecto |
|-------|--------------|--------|
| Ocultar | `hide()` | Oculta inmediatamente |
| Mostrar | `show()` | Muestra inmediatamente |
| Alternar | `toggle()` | Muestra/oculta alternativamente |
| Fade | `fadeToggle(300)` | Desvanecimiento suave (300ms) |
| Slide | `slideToggle(300)` | Deslizamiento suave (300ms) |

Cada acción debe actualizar el texto en `#ej2Estado`.

### Conceptos clave

- Métodos de efectos: `hide()`, `show()`, `toggle()`, `fadeToggle()`, `slideToggle()`
- Los números (300) son milisegundos de duración
- Puedes crear una función reutilizable para actualizar el estado

### Ejemplo

```javascript
// Función auxiliar para actualizar estado
function setEj2Estado(mensaje) {
  $("#ej2Estado").text("Estado: " + mensaje);
}

// Al hacer clic en "Ocultar"
$("#ej2Hide").on("click", function() {
  $("#ej2Caja").hide();          // Oculta sin animación
  setEj2Estado("Caja oculta");
});

// Al hacer clic en "Fade"
$("#ej2Fade").on("click", function() {
  $("#ej2Caja").fadeToggle(300); // Desvanecimiento en 300ms
  setEj2Estado("Fade aplicado");
});
```

### 💡 Pistas

- `hide()` / `show()` son instantáneos
- `fadeToggle()` y `slideToggle()` aceptan duración en milisegundos
- Usa una función helper `setEj2Estado()` para no repetir código
- `toggle()` sin parámetro hace show/hide sin animación
- Puedes meter todos los botones en un único `.on("click", ...)` si usas `$(this)` inteligentemente

---

## 🎪 Ejercicio 3: Eventos y Delegación

### Qué necesitas hacer

Al hacer clic en cualquier `<li>` dentro de `#ej3Lista`:

1. **Quitar** la clase `selected-li` de todos los `<li>`
2. **Añadir** la clase `selected-li` al `<li>` pulsado (usa `$(this)`)
3. **Mostrar** en `#ej3Info` el texto del elemento seleccionado y la hora actual

### Conceptos clave

- **Delegación de eventos**: usar `.on("click", "selector", function)` en el padre
- **`$(this)`**: referencia al elemento que disparó el evento
- **`.text()`**: obtiene el texto del elemento
- **`.siblings()`**: elementos hermanos
- **`new Date().toLocaleTimeString()`**: hora actual formateada

### Ejemplo de delegación

```javascript
// Delegación: el evento se captura en el padre (#ej3Lista)
// pero solo se ejecuta si haces clic en un <li>
$("#ej3Lista").on("click", "li", function() {
  // Aquí, 'this' es el <li> que se hizo clic
  
  // Quitar clase de TODOS los <li>
  $("#ej3Lista").find("li").removeClass("selected-li");
  
  // Añadir clase solo al pulsado
  $(this).addClass("selected-li");
  
  // Obtener el texto
  let texto = $(this).text();
  
  // Obtener la hora
  let hora = new Date().toLocaleTimeString();
  
  // Mostrar el resultado
  $("#ej3Info").text("Seleccionado: " + texto + " - Hora: " + hora);
});
```

### 💡 Pistas

- La delegación es importante: permite que el evento se capture en el padre aunque haya elementos dinámicos
- `$(this)` solo funciona dentro del manejador de eventos
- Puedes usar `.text()` sin parámetros para **obtener** y con parámetro para **establecer**
- `toLocaleTimeString()` devuelve un string como "14:35:42"
- No necesitas un manejador diferente para cada `<li>`; uno solo sirve para todos

---

## ✅ Ejercicio 4: Validación de Formularios

### Qué necesitas hacer

Al enviar el formulario `#ej4Form`:

1. **Evitar** que se recargue la página con `e.preventDefault()`
2. **Validar:**
   - Nombre: obligatorio y mínimo 3 caracteres
   - Email: obligatorio y debe contener "@"
3. **Si hay errores:**
   - Mostrar un alert Bootstrap `alert-danger` en `#ej4Msg`
   - Listar los errores en una `<ul><li>...</li></ul>`
4. **Si es válido:**
   - Mostrar un alert Bootstrap `alert-success` en `#ej4Msg`
   - Limpiar los campos del formulario

### Conceptos clave

- **`.on("submit", function(e) {...})`** → captura el envío del formulario
- **`e.preventDefault()`** → evita recargar la página
- **`.val()`** → obtiene/establece valor de inputs
- **`.trim()`** → elimina espacios en blanco
- **`.val("")`** → limpia un input
- **Template strings** (`${ }`) para crear HTML dinámico

### Ejemplo

```javascript
$("#ej4Form").on("submit", function(e) {
  // 1. Evitar recarga
  e.preventDefault();
  
  // 2. Obtener valores (trim elimina espacios)
  let nombre = $("#ej4Nombre").val().trim();
  let email = $("#ej4Email").val().trim();
  
  // 3. Validar y recopilar errores
  let errores = [];
  
  if (nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres");
  }
  
  if (!email.includes("@")) {
    errores.push("El email debe contener @");
  }
  
  // 4. Mostrar resultados
  if (errores.length > 0) {
    // Hay errores
    let htmlErrores = "<ul>";
    errores.forEach(function(error) {
      htmlErrores += "<li>" + error + "</li>";
    });
    htmlErrores += "</ul>";
    
    $("#ej4Msg").html(
      '<div class="alert alert-danger">' + htmlErrores + '</div>'
    );
  } else {
    // Éxito
    $("#ej4Msg").html(
      '<div class="alert alert-success">✅ Formulario enviado correctamente</div>'
    );
    
    // Limpiar campos
    $("#ej4Nombre").val("");
    $("#ej4Email").val("");
  }
});
```

### 💡 Pistas

- **`.trim()`** es muy útil para que espacios en blanco no "cuenten"
- Usa un array para recopilar errores
- Puedes iterar con `.forEach()` para construir el HTML de errores
- `e.preventDefault()` es obligatorio, si no lo haces, la página se recarga
- Usa `.includes("@")` para validar el email (es sencilla pero funciona)
- `.html()` te permite insertar etiquetas HTML; `.text()` las insertaría como texto literal

---

## 🌐 Ejercicio 5: AJAX Simulado + Render Dinámico

### Qué necesitas hacer

Al hacer clic en `#ej5Btn`:

1. **Deshabilitar** el botón
2. **Mostrar** "Cargando usuarios..." en `#ej5Estado`
3. **Vaciar** la lista `#ej5Lista`
4. **Simular** una petición asíncrona con `setTimeout` (~600ms)
5. **Pintar** cada usuario de `fakeUsers` como un `<li>` en la lista
6. **Actualizar** el estado con el número de usuarios cargados
7. **Habilitar** el botón de nuevo

El botón `#ej5Clear` debe limpiar la lista y el estado.

### Conceptos clave

- **`setTimeout(function, milisegundos)`** → ejecuta código después de un tiempo
- **`.empty()`** → vacía el contenido de un elemento
- **`.append()`** → añade contenido al final
- **`.forEach()`** → itera sobre un array
- **Template strings** → facilitan crear HTML dinámico
- **`.prop("disabled", ...)`** → habilita/deshabilita

### Ejemplo

```javascript
// Datos simulados (ya están en la plantilla)
const fakeUsers = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 32 },
  { nombre: "María", edad: 29 },
  { nombre: "Javier", edad: 41 }
];

// Al hacer clic en "Cargar usuarios"
$("#ej5Btn").on("click", function() {
  // 1. Deshabilitar botón
  $(this).prop("disabled", true);
  
  // 2. Mostrar "Cargando..."
  $("#ej5Estado").text("Estado: Cargando usuarios...");
  
  // 3. Vaciar lista
  $("#ej5Lista").empty();
  
  // 4. Simular petición asíncrona (600ms)
  setTimeout(function() {
    // 5. Pintar usuarios
    fakeUsers.forEach(function(usuario) {
      // Crear HTML del usuario
      let html = `<li class="list-group-item">
        ${usuario.nombre} (${usuario.edad} años)
      </li>`;
      
      // Añadir a la lista
      $("#ej5Lista").append(html);
    });
    
    // 6. Actualizar estado
    $("#ej5Estado").text("Estado: ✅ " + fakeUsers.length + " usuarios cargados");
    
    // 7. Habilitar botón
    $("#ej5Btn").prop("disabled", false);
  }, 600);
});

// Al hacer clic en "Limpiar lista"
$("#ej5Clear").on("click", function() {
  $("#ej5Lista").empty();
  $("#ej5Estado").text("Estado: Lista limpiada.");
});
```

### 💡 Pistas

- **`setTimeout`** es perfecto para simular una petición asíncrona
- Usa **template strings** (backticks y `${}`) para insertar variables en HTML
- **`.forEach()`** es el mejor método para iterar en jQuery/ES6+
- Cada usuario tiene propiedades `.nombre` y `.edad`
- `.empty()` vacía pero **mantiene** el elemento; no lo elimina
- `.append()` añade al final; `.prepend()` añade al principio
- Cambia `disabled` de `true` a `false` para habilitar/deshabilitar

---

## 💡 Tips y Buenas Prácticas

### 1. Encadenamiento de métodos (Method Chaining)

```javascript
// ❌ Largo
$("#elemento").addClass("nueva-clase");
$("#elemento").css("color", "blue");
$("#elemento").text("Hola");

// ✅ Mejor
$("#elemento")
  .addClass("nueva-clase")
  .css("color", "blue")
  .text("Hola");
```

### 2. Caché de selectores

```javascript
// ❌ Ineficiente (ejecuta el selector 3 veces)
$("#lista").append("<li>1</li>");
$("#lista").append("<li>2</li>");
$("#lista").append("<li>3</li>");

// ✅ Mejor (ejecuta el selector 1 vez)
let $lista = $("#lista");
$lista.append("<li>1</li>");
$lista.append("<li>2</li>");
$lista.append("<li>3</li>");
```

### 3. Usar `$(this)` correctamente

```javascript
// En manejadores de eventos, $(this) es el elemento
$("#boton").on("click", function() {
  // 'this' es el botón
  $(this).text("Clickeado!");
  $(this).prop("disabled", true);
});

// En funciones normales, no existe 'this'
function miFunction() {
  // $(this) aquí NO será lo que esperas
}
```

### 4. Validaciones sencillas útiles

```javascript
// Cadena vacía o solo espacios
let valor = $("#input").val().trim();
if (valor === "") { /* está vacío */ }

// Contiene algo
if (valor.includes("@")) { /* contiene @ */ }

// Longitud mínima
if (valor.length >= 3) { /* tiene 3+ caracteres */ }

// Expresión regular (avanzado)
if (/^\w+@\w+\.\w+$/.test(valor)) { /* email básico */ }
```

### 5. Crear alertas Bootstrap dinámicamente

```javascript
// Alert danger
let alert = '<div class="alert alert-danger" role="alert">' +
            'Algo salió mal' +
            '</div>';
$("#container").html(alert);

// Con template strings (más limpio)
let mensaje = "Error";
let alert2 = `<div class="alert alert-danger">${mensaje}</div>`;
$("#container").html(alert2);
```

### 6. Depuración en la consola

```javascript
// Abre la consola del navegador (F12 o Ctrl+Shift+I)
console.log("Valor:", $("#input").val());
console.log("Elemento:", $("#miDiv"));
console.log("Tiene clase:", $("#miDiv").hasClass("activo"));
```

---

## 📋 Checklist de Implementación

Usa esta lista para verificar que todo funciona:

### ✅ General
- [ ] El código está dentro de `$(document).ready(...)`
- [ ] Los selectores son correctos (revisa IDs y clases en HTML)
- [ ] No hay errores en la consola (F12)

### ✅ Ejercicio 1
- [ ] El botón cambia el texto del título
- [ ] El botón cambia el color del párrafo
- [ ] Se añade la clase `fw-bold` al párrafo
- [ ] El botón se deshabilita después de hacer clic
- [ ] Aparece un mensaje en `#ej1Info`

### ✅ Ejercicio 2
- [ ] Los 5 botones funcionan correctamente
- [ ] La caja se oculta/muestra según el botón
- [ ] El estado se actualiza en cada acción
- [ ] Los efectos fade y slide son suaves (300ms)

### ✅ Ejercicio 3
- [ ] Puedo seleccionar elementos de la lista
- [ ] Solo uno está marcado a la vez
- [ ] El texto seleccionado y la hora aparecen en `#ej3Info`
- [ ] Usa delegación (`.on("click", "li", ...)`)

### ✅ Ejercicio 4
- [ ] La página NO se recarga al enviar (preventDefault funciona)
- [ ] Valida correctamente el nombre (mínimo 3 caracteres)
- [ ] Valida el email (debe contener @)
- [ ] Muestra errores en rojo (alert-danger)
- [ ] Muestra éxito en verde (alert-success)
- [ ] Los campos se limpian tras enviar correctamente

### ✅ Ejercicio 5
- [ ] El botón se deshabilita mientras "carga"
- [ ] Los usuarios aparecen después de 600ms
- [ ] Se muestra correctamente el número de usuarios
- [ ] El botón "Limpiar lista" funciona
- [ ] El botón se habilita nuevamente

---

## 🔗 Recursos Útiles

- [Documentación oficial de jQuery](https://jquery.com/)
- [jQuery API Reference](https://api.jquery.com/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [MDN - Eventos en JavaScript](https://developer.mozilla.org/es/docs/Web/Events)

---

## 📸 Recordatorio sobre Capturas

Necesitas capturar al menos **5 screenshots**, uno por ejercicio:

1. **Ej1**: Antes y después de pulsar el botón
2. **Ej2**: Un efecto aplicado (caja visible o desaparecida)
3. **Ej3**: Un elemento seleccionado con el texto mostrado
4. **Ej4**: Un error de validación y otro de éxito
5. **Ej5**: La lista de usuarios cargada

---

**¡Éxito con la práctica! 🚀 Si algo no funciona, revisa la consola (F12) para ver los errores.**
