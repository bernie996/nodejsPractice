//Función sonListas
//Tiene un array como argumento y retorta un array con los elementos
//del tipo lista en el array
function sonListas(array) {
  let listIndice = [];
  arr.forEach(function (element) {
    if (isNaN(element)) {
      listIndice.push(element);
    }
  });
  return listIndice;
}

//Función imprimitEnOrden
//Tiene una lista de elementos como argumento
//Imprime los elementos de la lista en el siguiente imprimirEnOrden
//Tomando la lista en orden inverso, imprime uno a uno los elemento
//de cada lemento lista
function imprimirEnOrden(lista) {
  lista = sonListas(lista);
  for (let m = 0; m < lista.length; m++) {
    for (let n = lista.length - 1; n >= 0; n--) {
      console.log(lista[n][m]);
    }
  }
  return;
}
const arr = [100, 200, ['a', 'b'], 300, ['c', 'd'], 400, 500];
imprimirEnOrden(arr);
