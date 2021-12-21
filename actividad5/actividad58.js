//Función agregador
//Tiene como argumento un objeto con la propiedad disponibleParaViajar
//y un array de elementos a agregar en dicha propiedad
function agregador(trans, nuevosP) {
  Object.keys(trans).forEach(function (attri) {
    if (attri == 'disponibleParaViajar') {
      trans[attri] = trans[attri].concat(nuevosP);
    }
  });
}
const barco = {
  nombre: 'imperio',
  cantidadDePersonas: 100,
  activo: true,
  costo: '1 Millon USD',
  disponibleParaViajar: ['argentina', 'brasil', 'colombia'],
};
console.log(barco);
agregador(barco, ['Venezuela', 'Chile']);
console.log(barco);
