import { mascotas, eliminarMascota } from "./data.js";

const listadoMascotas = document.getElementById("listadoMascotas");
const totalSpan = document.getElementById("total");
const vacunadasSpan = document.getElementById("vacunadas");
const noVacunadasSpan = document.getElementById("noVacunadas");

export function mostrarMascotas() {
  listadoMascotas.innerHTML = "";

  mascotas.forEach((m, index) => {
    const div = document.createElement("div");
    div.className = "mascota";
    div.innerHTML = `
      <strong>Mascota #${index + 1}</strong><br>
      Nombre: ${m.nombre}<br>
      Tipo: ${m.tipo}<br>
      Edad: ${m.edad} años<br>
      Dueño: ${m.duenio}<br>
      Vacunada: ${m.vacunada ? "Sí" : "No"}<br>
      <button data-id="${m.id}">Eliminar</button>
    `;
    listadoMascotas.appendChild(div);
  });

  
  document.querySelectorAll(".mascota button").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"), 10);
      eliminarMascota(id);
      mostrarMascotas(); 
    });
  });

  actualizarEstadisticas();
}

function actualizarEstadisticas() {
  const total = mascotas.length;
  const vacunadas = mascotas.filter(m => m.vacunada).length;
  const noVacunadas = total - vacunadas;

  totalSpan.textContent = total;
  vacunadasSpan.textContent = vacunadas;
  noVacunadasSpan.textContent = noVacunadas;
}