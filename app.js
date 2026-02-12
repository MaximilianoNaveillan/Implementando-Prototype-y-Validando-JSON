// ========================================
// EJERCICIO: PROTOTYPE + JSON - FUNCIONAL
// ========================================

// 1. FUNCIÓN CONSTRUCTORA (mayúscula, this, parámetros)
function Empleado(nombre, edad, cargo) {
  this.nombre = nombre;
  this.edad = parseInt(edad);
  this.cargo = cargo;
}

// 2. MÉTODO EN PROTOTYPE (NO duplicar en memoria)
Empleado.prototype.mostrarInfo = function () {
  return `Nombre: ${this.nombre}, Edad: ${this.edad}, Cargo: ${this.cargo}`;
};

// Array empleados
let listaEmpleados = [];

// ========================================
// FUNCIONES APP
// ========================================
function renderLista() {
  const contenedor = document.getElementById('listaEmpleados');
  contenedor.innerHTML = '';

  listaEmpleados.forEach((emp, index) => {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-3';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h6 class="card-title mb-2">${emp.nombre}</h6>
          <p class="card-text flex-grow-1 small">${emp.mostrarInfo()}</p>
          <div class="mt-auto">
            <span class="badge badge-info">${emp.cargo}</span>
            <button class="btn btn-sm btn-danger float-right" onclick="eliminarEmpleado(${index})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });

  // Stats
  document.querySelector('.card-header h6').innerHTML =
    `Lista: ${listaEmpleados.length} empleados <span class="badge badge-light">${listaEmpleados.length ? '✅ Activa' : 'Vacía'}</span>`;
}

function generarJSON() {
  const json = JSON.stringify(listaEmpleados, null, 2);
  document.getElementById('jsonArea').value = json;
  console.log('📄 JSON generado:', json);
}

// Eliminar
function eliminarEmpleado(index) {
  listaEmpleados.splice(index, 1);
  renderLista();
  generarJSON();
}

// ========================================
// EVENTOS (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
  // Agregar
  document.getElementById('agregarBtn').onclick = function () {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const cargo = document.getElementById('cargo').value.trim();

    if (!nombre || !edad || !cargo || edad < 18) {
      alert('❌ Completa: Nombre, Edad ≥18, Cargo');
      return;
    }

    const emp = new Empleado(nombre, edad, cargo);
    listaEmpleados.push(emp);
    renderLista();
    generarJSON();

    // Limpiar form
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('cargo').value = '';
  };

  // Mostrar info
  document.getElementById('mostrarBtn').onclick = function () {
    console.clear();
    listaEmpleados.forEach((emp, i) => {
      console.log(`Empleado ${i + 1}:`, emp.mostrarInfo());
    });
    alert(`✅ Console.log (F12)\n${listaEmpleados.length} empleados mostrados`);
  };

  // JSON
  document.getElementById('generarJSONBtn').onclick = generarJSON;

  // Limpiar
  document.getElementById('limpiarBtn').onclick = function () {
    if (confirm('🗑️ ¿Limpiar todos los empleados?')) {
      listaEmpleados = [];
      renderLista();
      document.getElementById('jsonArea').value = '[]';
    }
  };

  // ========================================
  // INICIALIZAR CON EJEMPLOS DEL EJERCICIO
  listaEmpleados = [
    new Empleado('Juan Pérez', 30, 'Desarrollador'),
    new Empleado('María López', 28, 'Diseñadora'),
  ];

  renderLista();
  generarJSON();

  console.log('🚀 Bootstrap 4 + Prototype FUNCIONAL');
  console.log('Empleados iniciales:', listaEmpleados);
});
