const mascotaBuck = {
  nombre: 'buck',
  edad: 3,
  sexo: 'macho',
};
const mascotaFix = {
  nombre: 'fix',
  edad: 4,
  sexo: 'hembra',
};
const familia = {};

//Función familiador
//Tiene tres argumentos, el primero siendo el Objeto a crear, el segundo será la lista de objetos del que se obtendrá información para el Objeto, el tercero es una lista de valores para un nuevo atributo a agregar a los Objetos en la lista
function familiador(fam, listEle, listaVac) {
  listEle.forEach(function (ele) {
    ele['vacunado'] = listaVac[ele['nombre']];
    fam[`${ele['nombre']}`] = ele;
  });
  return fam;
}
console.log(
  familiador(familia, [mascotaBuck, mascotaFix], {
    buck: true,
    fix: false,
  })
);
