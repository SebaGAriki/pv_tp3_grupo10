export let mascotas = [];

export function agregarMascota(nombre, tipo, edad, duenio, vacunada) {
  const nuevaMascota = {
    id: Date.now(), // identificador único
    nombre,
    tipo,
    edad: parseInt(edad, 10),
    duenio,
    vacunada
  };
  mascotas.push(nuevaMascota);
}

export function eliminarMascota(id) {
  mascotas = mascotas.filter(m => m.id !== id);
}
