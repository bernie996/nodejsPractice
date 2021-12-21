const fichaPersona = {
  nombre: 'karen',
  correo: 'karen@karen.com',
  alias: 'lakarinz',
  pais: 'bananero',
  vive: true,
};

//Función elimProp
//Tiene dos argumentos, el primero es el Objeto al que se le eliminará la propiedad,
//el segundo es el atributo a eliminar
function elimProp(ficha, atri) {
  delete ficha[atri];
}
console.log(fichaPersona);
elimProp(fichaPersona, 'pais');
console.log(fichaPersona);
