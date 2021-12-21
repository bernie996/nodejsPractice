//Función seleccionador
//Tiene como argumento un array de elementos a verificar y un valor de referencia
//Retorta un array con los elementos cuyo primer caracter sea igual al valor
//descrito.
function seleccionador(array, valor) {
  return array.filter(function (ele) {
    return ele[0] == valor;
  });
}
let lista = ['Maria', 'Monica', 'Juana', 'Andrea', 'Mariana'];
console.log(seleccionador(lista, 'M'));
