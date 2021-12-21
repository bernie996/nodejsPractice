//Función unidor
//Toma como argumento un array y retorna la unión de sus elementos
//Tomando como referencia al último para los elememntos repetidos
function unidor(ele1, ele2) {
  return [...ele1, ...ele2];
}

//Función asign
//Toma como argumento dos objetos, copiando en el primmero de ellos las propiedades
//y atributos del segundo
//Retorna el valor de esta copia
function asign(arr1, arr2) {
  return Object.assign(arr1, arr2);
}
let diaslibres = ['Lunes', 'Martes', 'Jueves'];
let nuevosDiasLibres = ['Lunes', 'Sabado', 'Domingo'];
let asistencia = {
  Martha: 'Asistente',
  Leonel: 'Inasistente',
  Fabricio: 'Asistente',
  Carla: 'Inasistente',
};
let asistenciaComprobada = {
  Martha: 'Asistente',
  Leonel: 'Inasistente',
  Fabricio: 'Inasistente',
  Carla: 'Inasistente',
  Manuel: 'Asistente',
};
console.log(unidor(diaslibres, nuevosDiasLibres));
console.log(asign(asistencia, asistenciaComprobada));
