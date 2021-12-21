//Función recorrido
//Tiene un array como parametro y retorna una copia de este
function recorrido(arr) {
  return arr.map(function (nu) {
    return nu;
  });
}

let precios = [100, 200, 300, 400];
let preciosCopia = recorrido(precios);
console.log(precios, '\n', preciosCopia);
