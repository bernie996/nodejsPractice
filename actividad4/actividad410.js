const product = {
  tv: [1000, 'pantalla plana de 50 pulgadas'],
  smartphone: [150, 'samsung con bluetooth'],
  tablet: [200, 'hitachi de 14 pulgadas'],
  keyboard: [50, 'con teclas led de 10 colores'],
};
//Función bar
//Imprime una línea de caracteres
function bar() {
  console.log('-'.repeat(40));
}
//Función minibar
//Imprime una corta línea de caracteres
function minibar() {
  console.log('-'.repeat(5));
}
//Función pedido
//Tiene como entrada tres argumentos: el primero de ellos será el nombre de la persona que hace la compra, el segundo será el país del que
//procede, mientras que el tercero será un objeto que incluya como keys el nombre del producto y como value una lista con su precio
//y su descripción

function pedido(nombre, pais, productos) {
  bar();
  console.log(`Productos Listados: ${Object.keys(productos).length}`);
  bar();
  //Crea una lista de elementos key del diccionario ingresado y aplica una función a cada uno de sus elementos
  Object.keys(productos).forEach(function (elemento) {
    console.log(
      `[${
        Object.keys(productos).indexOf(elemento) + 1
      }] - ${elemento} / Precio: ${productos[elemento][0]} usd \n- Detalle: ${
        productos[elemento][1]
      }`
    );
    if (
      //Condicionar para intercalar las minibarras solo entre los productos
      !(
        Object.keys(productos).indexOf(elemento) ==
        Object.keys(productos).length - 1
      )
    ) {
      minibar();
    }
  });
  bar();
  console.log(`Nombre de Usuario: ${nombre}\nPais: ${pais}`);
  bar();
}
pedido('Bernie', 'Venezuela', product);
