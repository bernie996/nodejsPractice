//Función copiarJuntar
//Tiene como argumento un array de elementos
//Regresa un array de elementos similar con todas sus letras en mayúsculas
function copiarJuntar(arr) {
  let line = [];
  for (let n = 0; n < arr.length; n++) {
    line.push(arr[n].toUpperCase());
  }
  return line;
}
p = ['foo', 'zi', 'man'];
console.log(copiarJuntar(p));
console.log(copiarJuntar(p).join(''));
