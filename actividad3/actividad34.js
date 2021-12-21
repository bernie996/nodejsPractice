const elements = [100, 200, 300, 400, 500];
//Función comprobador
//Tiene como argumento el número a chequear y la posición de referencia en la lista
//Retorta verdadero sólo si el número a chequear es mayor al número en la posición
//referenciada, de lo contrario retornará false
function comprobador(num, pos) {
  if (num > elements[pos - 1]) {
    return true;
  }
  return false;
}
console.log(comprobador(300, 1));
console.log(comprobador(300, 2));
console.log(comprobador(300, 3));
console.log(comprobador(300, 4));
console.log(comprobador(300, 5));
