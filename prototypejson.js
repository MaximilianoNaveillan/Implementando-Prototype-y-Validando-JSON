// a) Crear función constructora
// Es decir, define una plantilla o clase para crear objetos que sean instancias de esta clase Empleado.
// Se reciben tres parámetros y se asignan los valores al objeto que se va a crear mediante "this" que hace referencia al objeto que está ejecutando la función en este momento.
// Cuando se usa this en conbinación con new lo que ocurre es que se crea un nuevo objeto vacío, this apunta a ese nuevo objeto y se asignan las tres propiedades anteriores
function Empleado(nombre, edad, cargo) {
  this.nombre = nombre;
  this.edad = edad;
  this.cargo = cargo;
}

// b) Utilizar prototype correctamente
// Se está agregando la función MostrarInformacion al prototype de la funcion construtora Empelado.
// Es decir, todas las instancias u objetos creados con new Empleado() compartirán este método y no copia la función en cada objeto. Es decir se ahorra memoria.
Empleado.prototype.mostrarInformacion = function () {
  return `Nombre: ${this.nombre}, Edad: ${this.edad}, Cargo: ${this.cargo}`;
};

// c) Crear múltiples instancias con 'new'
// Es decir, cada linea está creando un nuevo objeto basado en la función constructotra Empleado
// Por lo tanto se estan creadno 3 empleados diferentes.
// Cada vez que se ejecuta new Empleado -> JavaScript crea un objeto vacio, hace que la instruccion "this" dentro de empleado "apunte" a ese objeto.
// Y asigna los valores a los atributos. Para luego devolver automaticamente el objeto creado y guardar todo en la constante empleado1, empleado2, etc.
const empleado1 = new Empleado('Carlos Pérez', 30, 'Desarrollador Frontend');
const empleado2 = new Empleado('Laura Gómez', 28, 'Diseñadora UX/UI');
const empleado3 = new Empleado('Andrés Martínez', 35, 'Desarrollador Backend');

// d) Guardar objetos en un array de objetos de la clase empleadods
const empleados = [];
empleados.push(empleado1);
empleados.push(empleado2);
empleados.push(empleado3);

// Mostrar información en consola
// Es decir, Recorre todos los empleados (que es un arreglo que contienen objetos) y muestra en la consola la información de cada uno.
empleados.forEach((emp) => {
  console.log(emp.mostrarInformacion());
});

// e) Convertir datos a formato JSON. Usado por ejemplo:
// .- Enviar datos a un servidor.
// .- Intercambiar información entre sistemas.
// .- Almacenar datos en localstorage es decir, es un mecanismo de almacenamiento
//    del lado del cliente que permite a una aplicación web guardar datos directamente en el navegador del usuario.

// JSON.stringify recibe 3 argumentos: El primero el array de objetos, el segundo (para filtrar propiedades, modificar valores y excluir datos sensibles), y el tercero es un valor numerico que indica la indentación (o numero de tabulaciones)
const empleadosJSON = JSON.stringify(empleados, null, 2);

// Para efectos deL formato JSON debe ser 2 para que sea legible.

// Mostrar JSON en consola
console.log('JSON generado:');
console.log(empleadosJSON);
