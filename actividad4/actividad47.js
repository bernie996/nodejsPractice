//Function agregarNombre
//Elimina al inicio y el final del array un nombre
let names = ['Bernie', 'Alan', 'Diego', 'Daniel'];
function agregarNombre() {
  console.log(`${names}\nEliminamos ${names.shift()} y ${names.pop()}.`);
  console.log(`${names}`);
}
agregarNombre('Joseph');
