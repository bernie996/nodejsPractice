//Función matriceador
//Tiene como argumento el tamaño de la matrix cuadrada
//Retorta la matrix con números consecutivos
function matriceador(num) {
  let matri = [];
  for (let n = 0; n < num; n++) {
    let fila = [];
    for (let m = 1; m <= num; m++) {
      fila.push(m + n * num);
    }
    matri.push(fila);
  }
  return matri;
}

//Función prinMatrix
//Tiene como argumento el tamaño de la matriz
//Su salida será igual a la a matriz solicitada y a los elementos de su
//diagonal principal
function printMatrix(num) {
  let matrix = matriceador(num);
  let printable = [];
  //Ciclo de la diagonal principal
  for (let n = 0; n < matrix.length; n++) {
    for (let m = 0; m < matrix[n].length; m++) {
      if (n == m) {
        printable.push(matrix[n][m]);
        break;
      }
    }
  }
  //Ciclo de la diagonal invertida
  for (let n = 0; n < matrix.length; n++) {
    for (let m = matrix.length - 1; m >= 0; m--) {
      if (n + m + 1 == matrix.length && !printable.includes(matrix[n][m])) {
        printable.push(matrix[n][m]);
        break;
      }
    }
  }
  for (let n = 0; n < matrix.length; n++) {
    console.log(matrix[n]);
  }
  for (let n = 0; n < printable.length; n++) {
    console.log(printable[n]);
  }
}
printMatrix(3);
//printMatrix(4);
//printMatrix(5);
//printMatrix(6);
