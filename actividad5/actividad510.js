//Función buscador
//Tiene como argummento un array de elementos y un elemento que será buscado
//en este.
function buscador(arr, buscado) {
  if (arr.includes(buscado)) {
    return arr.find((ele) => ele == buscado);
  }
  return false;
}
const t = ['t1', 't2', 't3', 't4', 't5'];
console.log(buscador(t, 't4'));
console.log(buscador(t, 't6'));
