//Función impresionEspecifica
//Ingresa un array de elementos y los ordena para su retorno en un solo string
function impresionEspecifica(string) {
  return string[1][0][0] + ' ' + string[0] + ' ' + string[2] + ' ' + string[3];
}
const a = ['mundo', [['hola']], 'desde', ['javascript']];
console.log(impresionEspecifica(a));
