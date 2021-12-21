let skull = '☠️';
let mage = '🧙‍♂️';
let zombie = '🧟‍♀️';
let dracula = '🧛‍♂️';
let hero = '🦸‍♂️';
let elf = '🧝';
let check = '☑️';
let diamond = '💎';

function barra() {
  console.log('='.repeat(50));
}
function barraInicio() {
  console.log(`${skull} ${'='.repeat(48)}  ${skull}`);
}
function selectCharacter(character) {
  return `Now I am a/an ' ${character}`;
}
function mostrarPersonaje(personaje) {
  console.log(`${diamond} ${selectCharacter(personaje)} ${diamond}`);
}
function mostrarPersonajes(v) {
  if (v === 'mage') {
    console.log(`Mage: ${check}`);
  } else {
    console.log(`Mage: ${mage}`);
  }
  if (v === 'zombie') {
    console.log(`Zombie: ${check}`);
  } else {
    console.log(`Zombie: ${zombie}`);
  }
  if (v === 'dracula') {
    console.log(`Dracula: ${check}`);
  } else {
    console.log(`Dracula: ${dracula}`);
  }
  if (v === 'hero') {
    console.log(`Hero: ${check}`);
  } else {
    console.log(`Hero: ${hero}`);
  }
  if (v === 'elf') {
    console.log(`Elf: ${check}`);
  } else {
    console.log(`Elf: ${elf}`);
  }
}
function seleccionarPersonaje(perso) {
  barraInicio();
  mostrarPersonaje(perso);
  mostrarPersonajes(perso);
  barra();
}
seleccionarPersonaje('elf');
