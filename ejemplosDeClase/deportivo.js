function deportivo(auto, deportivo, familiar) {
  if (auto === 'deportivo' || auto === 'Deportivo') {
    return deportivo(auto);
  }
  if (auto === 'familiar' || auto === 'Familiar') {
    return familiar(auto);
  }
}

function esDeportivo(v) {
  return v + ' es deportivo';
}

function esFamiliar(v) {
  return v + ' es familiar';
}

console.log(deportivo('deportivo', esDeportivo, esFamiliar));
console.log(deportivo('Familiar', esDeportivo, esFamiliar));
console.log(deportivo('deportivo', esDeportivo, esFamiliar));
console.log(
  deportivo(
    'Deportivo',
    function noEsFamiliar(v) {
      return v + ' no es familiar';
    },
    function noEsDeportivo(v) {
      return v + ' no es deportivo';
    }
  )
);
console.log()
