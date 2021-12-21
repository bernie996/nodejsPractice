//Function agregarNombre
//Tiene como argumento un nombre, este será agregado al inicio y el final del array
let names = ['Bernie', 'Alan', 'Diego', 'Daniel'];
function agregarNombre(nombre) {
  console.log(`${names}\nAgregamos ${nombre}.`);
  names.push(nombre);
  names.unshift(nombre);
  console.log(`${names}`);
}
agregarNombre('Joseph');
