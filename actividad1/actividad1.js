let emojis = {
  cran: '☠️',
  check: '☑️',
  diaman: '💎',
};
let personajes = {
  mago: '🧙‍♂️',
  zombi: '🧟‍♀️',
  dracula: '🧛‍♂️',
  heroe: '🦸‍♂️',
  elfo: '🧝',
};

//Función barra
//Imprime una barra separadora
function barra() {
  console.log('='.repeat(50));
}
//Función barra
//Imprime una barra separadora que contiene un par de emojis
function barraInicio() {
  console.log(`${emojis['cran']} ${'='.repeat(46)} ${emojis['cran']}`);
}

//Función textoPersonaje
//TIene como argumento el personaje enviado, evalua si este existe dentro de los
//registrados
//Imprime una frase de acuerdo a si pertenece o no el personaje ingresado
function textoPersonaje(personaje) {
  if (personaje in personajes) {
    console.log(
      `${emojis['diaman']} ¡Ahora eres un ${personaje}! ${emojis['diaman']}`
    );
  } else {
    console.log(
      `${emojis['diaman']} ¡Ahora eres un ... espera un minuto! ${emojis['diaman']}`
    );
  }
}

//Función mostrarEmojis
//Tiene como argumento el personaje a seleccionarPersonaje
//De acuerdo a esto, solo uno de los personajes será marcado con el check,
//mientras que el resto se verá representado con su emoji conrrespondiente
function mostrarEmojis(v) {
  if (v in personajes) {
    if (v === 'mago') {
      console.log(`Mago: ${emojis['check']}`);
    } else {
      console.log(`Mago: ${personajes['mago']}`);
    }
    if (v === 'zombi') {
      console.log(`Zombi: ${emojis['check']}`);
    } else {
      console.log(`Zombie: ${personajes['zombi']}`);
    }
    if (v === 'dracula') {
      console.log(`Dracula: ${emojis['check']}`);
    } else {
      console.log(`Dracula: ${personajes['dracula']}`);
    }
    if (v === 'hero') {
      console.log(`Heroe: ${emojis['check']}`);
    } else {
      console.log(`Heroe: ${personajes['heroe']}`);
    }
    if (v === 'elfo') {
      console.log(`Elfo: ${emojis['check']}`);
    } else {
      console.log(`Elfo: ${personajes['elfo']}`);
    }
  } else {
    console.log('¡El personaje introducido no existe!');
  }
}
//Función seleccionarPersonaje
//Tiene como entrada el personaje seleccionado
//Hace un llamado a otras funciones en un solo conjunto
function seleccionarPersonaje(perso) {
  barraInicio();
  textoPersonaje(perso);
  mostrarEmojis(perso);
  barra();
}
seleccionarPersonaje('elf');
seleccionarPersonaje('mago');
