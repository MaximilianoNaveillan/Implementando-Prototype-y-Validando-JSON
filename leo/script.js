//manejador de datos globales
let empleados = [];
let empleadosJSON;

//clase empleado
class Empleado {
  constructor(nombre, edad, cargo) {
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
  }
}

//prototype de empleado para guardar los datos y devolverlos como json
Empleado.prototype.guardarDatos = function () {
  empleados.push(this);
  empleadosJSON = JSON.stringify(empleados);
  return empleadosJSON;
};


// se crean los empleados con sus respectivos argumentos
const empleado1 = new Empleado('Luis', 30, 'Desarrollador');
empleado1.guardarDatos()

const empleado2 = new Empleado('Ana', 25, 'Diseñadora');
empleado2.guardarDatos()

const empleado3 = new Empleado('Carlos', 35, 'Gerente');
empleado3.guardarDatos()

// se imprime los datos de los empleados en formato json
console.log(empleadosJSON);
