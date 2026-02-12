//************ CLASES vs PROTOTYPE ************
/*
En JavaScript existen dos formas principales de crear objetos con comportamiento compartido:

1️⃣ Prototype (forma clásica)
2️⃣ Class (forma moderna - ES6)

⚠️ Importante:
Las clases NO reemplazan el prototype.
Las clases usan prototype internamente.
Es decir, cambió la sintaxis, pero no el mecanismo.
*/

// ----------- Forma clásica (Prototype) -----------

function Persona(nombre) {
  this.nombre = nombre;
}

// Los métodos se agregan al prototype
Persona.prototype.saludar = function () {
  return `Hola soy ${this.nombre}`;
};

const p1 = new Persona('Ana');
console.log(p1.saludar());

// ----------- Forma moderna (Class - ES6) -----------

class Persona2 {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola soy ${this.nombre}`;
  }
}

const p2 = new Persona2('Luis');
console.log(p2.saludar());

/*
📌 Diferencias clave:

- Prototype → Sintaxis más antigua
- Class → Sintaxis más clara y moderna
- Ambos comparten métodos mediante prototype
- Ambos necesitan la palabra "new"
- Internamente funcionan igual

💡 Si entiendes prototype, entiendes cómo funcionan las clases.
*/

/*
=====================================================
LECCIÓN: Prototype y JSON en JavaScript
Preparación para ejercicio evaluado (20 minutos)
=====================================================

OBJETIVO:
Entender cómo:
1) Crear funciones constructoras
2) Utilizar prototype para agregar métodos
3) Crear múltiples instancias
4) Convertir objetos a formato JSON
5) Validar JSON online

IMPORTANTE:
Este archivo contiene ejemplos GUIADOS.
NO contiene la solución directa del ejercicio.
=====================================================
*/

/* =====================================================
PARTE 1 - Función Constructora
===================================================== */

/*
Una función constructora:
- Se escribe con mayúscula inicial
- Se usa con la palabra clave "new"
- Permite crear múltiples objetos con la misma estructura
*/

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Creamos instancias usando "new"
const persona1 = new Persona('Ana', 28);
const persona2 = new Persona('Luis', 35);

console.log('Ejemplo Personas:');
console.log(persona1);
console.log(persona2);

/* =====================================================
PARTE 2 - ¿Por qué usar prototype?
===================================================== */

/*
Si agregamos métodos dentro del constructor,
cada objeto tendrá una copia del método en memoria.
Esto NO es eficiente.
*/

function Animal(nombre) {
  this.nombre = nombre;
}

// Agregamos el método al PROTOTYPE
// Así todos los objetos comparten el mismo método
Animal.prototype.saludar = function () {
  console.log('Hola, soy ' + this.nombre);
};

const perro = new Animal('Rocky');
const gato = new Animal('Michi');

console.log('Ejemplo Prototype:');
perro.saludar();
gato.saludar();

/* =====================================================
PARTE 3 - Arrays de Objetos
===================================================== */

/*
Podemos almacenar múltiples objetos en una lista.
Esto será importante para convertir luego a JSON.
*/

const estudiantes = [];
estudiantes.push(new Persona('Carla', 22));
estudiantes.push(new Persona('Pedro', 30));

console.log('Ejemplo Array de Objetos:');
console.log(estudiantes);

/* =====================================================
PARTE 4 - Convertir a JSON
===================================================== */

/*
JSON (JavaScript Object Notation)
Es un formato de texto que representa objetos.
Se usa para enviar datos a servidores o guardarlos.
*/

const producto = {
  nombre: 'Laptop',
  precio: 800000,
  disponible: true,
};

// Convertimos objeto a texto JSON
const productoJSON = JSON.stringify(producto);

console.log('Ejemplo JSON simple:');
console.log(productoJSON);

/*
También podemos convertir un ARRAY de objetos.
*/

const lista = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
];

const listaJSON = JSON.stringify(lista);

console.log('Ejemplo JSON con Array:');
console.log(listaJSON);

/* =====================================================
PARTE 5 - Reglas importantes del JSON
===================================================== */

/*
✔ Solo guarda datos (NO funciones)
✔ Usa comillas dobles
✔ No permite comentarios
✔ No permite comas finales
*/

// EJEMPLO INCORRECTO (NO válido en JSON real)
/*
{
  "nombre": "Ana",
  "edad": 25,  <-- coma final inválida
}
*/
