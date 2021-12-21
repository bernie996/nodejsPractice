//Función filtrado
//Tiene como argumentos una lista de elementos a evaluar y un valor
//Retorta una lista con todos los elementos que no sean el valor introducido
function filtrado(lista, valor) {
  return lista.filter((element) => element != valor);
}
const v = ['v1', 'v1', 'v2', 'v3', 'v1', 'v4', 'v5'];
console.log(v);
console.log(filtrado(v, 'v1'));
