//Función printer
//Tiene como argumento una lista de elememntos
//Imprime uno a uno los elementos, indicando los elementos restantes
function printer(lista) {
  limit = 0;
  while (limit < lista.length) {
    console.log(
      `[${lista[limit]}] - ${lista.length - limit - 1} elementos restantes`
    );
    limit++;
  }
}
const f = ['f1', 'f2', 'f3', 'f4', 'f5'];
printer(f);
