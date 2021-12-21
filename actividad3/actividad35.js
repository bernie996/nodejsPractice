//Función decirTipo
//Tiene un array como entrada
//Su salida será la impresión de cada uno de los tipos de elementos del array
function decirTipo(array) {
  array.forEach(function (element) {
    console.log(typeof element);
  });
}
const arr = [
  100,
  'hola',
  true,
  ['a', 'b'],
  { c: 5 },
  function () {
    console.log();
  },
];
decirTipo(arr);
