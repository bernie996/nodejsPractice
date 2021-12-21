//Función dieciseador
//Imrpime sucesivamente los números enteros desde el primer argumento hasta el segundo.
function dieciseador(n, m) {
  if (m >= n) {
    for (let i = n; i <= m; i++) {
      console.log(i);
    }
  } else {
    for (let i = n; i >= m; i--) {
      console.log(i);
    }
  }
}
//dieciseador(10, 15);
//dieciseador(1, 7);
dieciseador(5, 0);
