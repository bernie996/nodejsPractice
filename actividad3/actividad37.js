//Función selector
//Ingresa un elemento array e imprime todos sus elementos uno a uno,
//a ecepción del primero y último
function selector(array) {
  for (let n = 1; n < array.length - 1; n++) {
    console.log(array[n]);
  }
}
let lista1 = ['TV', 'Laptop', 'Tablet', 'Smartphone', 'Keyboard'];
let lista2 = [1, 2, 3, 4];
let lista3 = ['Medusas', 'Ballenas', 'Delfines', 'Focas', 'Tiburones'];
selector(lista1);
selector(lista2);
selector(lista3);
