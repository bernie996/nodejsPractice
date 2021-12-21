//Función personajes
//Ingresa un nombre de personaje y retorna el emoji correspondiente
function personajes(v) {
  let personajes = {
    genio: '🧞',
    vampiro: '🧛',
    heroe: '🦸‍♀️',
    zombie: '🧟‍♀️',
    elfo: '🧝‍♂️',
  };
  return personajes[v];
}

//Función mapas
//Ingresa un nombre de personaje y retorna el mapa de caracteres correspondiente
function mapas(v) {
  let mapa = {
    genio: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 'g', 'l'],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 'h', 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
    vampiro: [
      [1, 1, 1, 1, 1, 1, 1],
      ['m', 'm', 'm', 'm', 'm', 'm', 'm'],
      [0, 'a', 'a', 'a', 'a', 'a', 0],
      [0, 'a', 'k', 'k', 'k', 'a', 0],
      [0, 'a', 'k', 'v', 'k', 'a', 0],
      [1, 1, 'k', 'k', 'k', 1, 1],
      [0, 'a', 'a', 'a', 'a', 'a', 0],
    ],
    heroe: [
      [0, 0, 0, 'he', 0, 0, 0],
      ['hot', 'b', 'b', 'b', 'b', 'b', 'bank'],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 1, 'h', 'h', 'h', 1, 'b'],
      [0, 1, 'h', 0, 'h', 1, 'b'],
      [0, 1, 'h', 'h', 'h', 1, 'b'],
      [1, 1, 1, 1, 1, 1, 1],
    ],
    zombie: [
      [1, 1, 1, 1, 1, 1, 1],
      ['h', 'sf', 'f', 'p', 'gr', 'gr', 'z'],
      ['h', 'sf', 'f', 'p', 'gr', 'gr', 'z'],
      ['h', 'sf', 'f', 'p', 'gr', 'gr', 'z'],
      ['h', 'sf', 'f', 'p', 'gr', 'gr', 'z'],
      ['h', 'sf', 'f', 'p', 'gr', 'gr', 'z'],
      [1, 1, 1, 1, 1, 1, 1],
    ],
    elfo: [
      [0, 0, 0, 'a', 'gr', 'pr', 'gr'],
      [0, 0, 0, 'a', 'gr', 1, 'gr'],
      [0, 0, 0, 'a', 'gr', 1, 'gr'],
      [0, 0, 0, 'a', 'gr', 1, 'gr'],
      ['gr', 'gr', 'gr', 'a', 'gr', 1, 'gr'],
      ['el', 1, 1, 1, 1, 1, 'gr'],
      ['gr', 'gr', 'gr', 'a', 1, 1, 1],
    ],
  };
  return mapa[v];
}

//Funcion emoji
//Tiene un caracter como argumento y regresa el emoji correspondiente
function emoji(s) {
  let emoji = {
    1: '⬛',
    0: '🌲',
    h: '🏡',
    gr: '🟩',
    b: '🏢',
    g: personajes('genio'),
    m: '🏔️',
    k: '🏯',
    v: personajes('vampiro'),
    a: '🟦',
    l: '🍾',
    he: personajes('heroe'),
    hot: '🏩',
    bank: '🏦',
    sf: '🌻',
    f: '🌷',
    p: '🥔',
    z: personajes('zombie'),
    el: personajes('elfo'),
    pr: '👸',
  };
  return emoji[s];
}

//Funcion Mapeadora
//Reciba un personaje como argumento y regresa el mapa correspondiente
function mapeador(pers) {
  for (let n = 0; n < mapas(pers).length; n++) {
    let linea = '';
    for (let m = 0; m < mapas(pers)[n].length; m++) {
      linea += emoji(mapas(pers)[n][m]) + ' ';
    }
    console.log(linea);
  }
}
//mapeador('elfo', mapas, emoji);
//mapeador('zombie', mapas, emoji);
//mapeador('vampiro', mapas, emoji);
//mapeador('heroe', mapas, emoji);
mapeador('genio', mapas, emoji);
