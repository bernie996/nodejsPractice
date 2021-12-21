//Función posicionador
//Ingresa un string, comprueba si este es uno de los planetas del Sistema
//En caso de que lo sea, imprime su posición, en caso contrario nos lo indicará
function posicionador(planeta) {
  const planetas = {
    Mercurio: 'Primer',
    Venus: 'Segundo',
    Tierra: 'Tercer',
    Marte: 'Cuarto',
    Jupiter: 'Quinto',
    Saturno: 'Sexto',
    Urano: 'Septimo',
    Neptuno: 'Octavo',
  };
  planeta = planeta.charAt(0).toUpperCase() + planeta.slice(1);
  if (planeta in planetas) {
    console.log(
      `${planeta} es el ${planetas[planeta]} planeta del Sistema Solar`
    );
    return;
  }
  console.log('El planeta ingresado no existe');
}
posicionador('mercurio');
posicionador('VeNUS');
posicionador('Tierra');
posicionador('Benus');
