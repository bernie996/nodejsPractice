const comidas = ['ensalada', 'pasta', 'sopa', 'pizza', 'papas fritas'];
//Función bar
//Imprime una línea de caracteres
function bar() {
  console.log('-'.repeat(20));
}
//Función menu
//Tiene como argumento un array de alimentos del menú
//Imprime en el orden dado los elementos del menú
function menu(comidas) {
  bar();
  console.log('Lista de Comidas');
  bar();
  comidas.forEach(function (plato) {
    console.log(
      `[${comidas.indexOf(plato) + 1}] - ${
        plato.charAt(0).toUpperCase() + plato.slice(1)
      }`
    );
  });
  bar();
}
menu(comidas);
