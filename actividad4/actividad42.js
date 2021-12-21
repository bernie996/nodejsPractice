//Función calificador
//Tiene como argumento una nota
//Su salida será un mensaje de acuerdo al rango de calificación definido
function calificador(nota) {
  if (nota >= 0 && nota < 3) {
    calif = 'Muy Deficiente';
  } else if (nota >= 3 && nota < 5) {
    calif = 'Deficiente';
  } else if (nota >= 5 && nota < 6) {
    calif = 'Suficiente';
  } else if (nota >= 6 && nota < 7) {
    calif = 'Bien';
  } else if (nota >= 7 && nota < 9) {
    calif = 'Notable';
  } else if (nota >= 9 && nota <= 10) {
    calif = 'Sobresaliente';
  } else {
    return 'Su nota no es válida';
  }
  return `Su nota fue de ${nota}. Su calificación fue [${calif}]`;
}
console.log(calificador(-1));
console.log(calificador(0));
console.log(calificador(3));
console.log(calificador(5));
console.log(calificador(6));
console.log(calificador(7));
console.log(calificador(10));
console.log(calificador(11));
