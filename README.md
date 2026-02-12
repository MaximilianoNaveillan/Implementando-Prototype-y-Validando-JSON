# Ejercicio Guiado: Prototype y JSON

## Contexto

En una empresa de desarrollo web, se necesita crear un sistema que
gestione empleados.\
Cada empleado tendrá atributos básicos como:

- nombre\
- edad\
- cargo

Además deberá tener un método para mostrar su información.\
Luego, se guardará la información en formato JSON y se validará con una
herramienta online.

Tiempo estimado: 20 minutos

---

# Objetivos de Aprendizaje

Al finalizar este ejercicio deberías ser capaz de:

- Crear una función constructora
- Utilizar `prototype` correctamente
- Crear múltiples instancias con `new`
- Guardar objetos en un array
- Convertir datos a formato JSON
- Validar estructura JSON online

---

# Paso a Paso

## 1 Crear la función constructora

Recuerda:

- Debe comenzar con mayúscula.
- Recibe parámetros.
- Usa `this` para asignar propiedades.
- Se instancia con la palabra clave `new`.

Pista: Revisa el ejemplo visto en clase con `Persona(nombre, edad)`.

Preguntas guía:

- ¿Cuántos parámetros debe recibir?
- ¿Qué propiedades debe asignar con `this`?

---

## 2 Agregar el método usando prototype

No agregues el método dentro del constructor.

Los métodos deben agregarse al `prototype` para que no se dupliquen en
memoria.

Pista:

    NombreFuncion.prototype.nombreMetodo = function() {
       // lógica aquí
    };

Preguntas guía:

- ¿Cómo accedes a las propiedades del objeto dentro del método?
- ¿Qué debería imprimir el método en consola?

---

## 3 Instanciar al menos dos empleados

Usa la palabra clave `new`.

Guárdalos en variables diferentes.

Pista:

    const obj = new NombreFuncion(...);

Luego llama al método para comprobar que funciona.

---

## 4 Guardar los empleados en un array

Crea un arreglo vacío y agrega los objetos creados.

Pista:

    const lista = [];
    lista.push(obj1);
    lista.push(obj2);

Pregunta clave:

- ¿Qué ocurre si imprimes el array en consola?

---

## 5 Convertir a JSON

Usa:

    JSON.stringify()

Recuerda:

- JSON convierte objetos en texto.
- No guarda funciones.
- Solo guarda datos.

Pista:

    const json = JSON.stringify(lista);
    console.log(json);

---

## 6 Validar en JSONLint

1.  Copia el resultado del `console.log`
2.  Ve a https://jsonlint.com
3.  Pega el contenido
4.  Valida la estructura

Si hay error:

- Revisa comillas dobles
- Revisa comas
- Asegúrate de que no existan funciones

---

# Checklist Final

✔ Función constructora creada\
✔ Método agregado con prototype\
✔ Dos instancias creadas\
✔ Objetos almacenados en un array\
✔ Conversión correcta con JSON.stringify()\
✔ JSON validado online

---

# Preguntas de Reflexión

- ¿Qué pasaría si el método estuviera dentro del constructor?
- ¿Por qué JSON no incluye funciones?
- ¿Dónde se almacenan realmente los métodos cuando usamos prototype?
- ¿Las clases usan prototype internamente?

Si entiendes prototype, entiendes cómo funcionan las clases.
