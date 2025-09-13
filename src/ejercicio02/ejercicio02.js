import { agregarMascota } from "./data.js";
import { mostrarMascotas } from "./ui.js";

const formulario = document.getElementById("formularioMascota");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const edad = document.getElementById("edad").value;
  const duenio = document.getElementById("duenio").value;
  const vacunada = document.querySelector('input[name="vacunada"]:checked').value === "true";

  agregarMascota(nombre, tipo, edad, duenio, vacunada);
  mostrarMascotas();
  formulario.reset();
});
