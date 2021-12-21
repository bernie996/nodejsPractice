//Función introducir
//Tiene tres parametros
//El primer parametro es el array de elementos a considedar
//El segundo parametro es la posición en la que se quiere introducir el elemento,
//aceptando valores numéricos y los string 'ini' para inicio y 'fin' para final
//El tercer parametro es el valor a introducir
function introducir(array, pos, val) {
  fin = array.slice();
  if (typeof pos == 'number') {
    if (array.includes(pos)) {
      fin.splice(array.indexOf(pos) + 1, 0, val);
    } else {
      console.log('Posición no existente');
    }
  } else if (pos.toLowerCase() == 'ini') {
    fin.unshift(val);
  } else if (pos.toLowerCase() == 'fin') {
    fin.push(val);
  } else {
    console.log('El proceso ha fallado, valores de entrada incorrectos.');
  }
  return fin;
}

let centenas = [100, 200, 300, 400, 500];
console.log(centenas);
let ceroCentenas = introducir(centenas, 'ini', 0);
console.log(ceroCentenas);
let finCentenas = introducir(
  centenas,
  'fin',
  centenas[centenas.length - 1] + 100
);
console.log(finCentenas);
let medioCentenas = introducir(centenas, 200, 250);
console.log(medioCentenas);
