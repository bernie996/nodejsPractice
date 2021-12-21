//Funcion edadManejo
//Tiene como argumento la edad de la personaje
//Agrega al string de retorno (msg) un mensaje correspondiente a su edad
function edadManejo(edad) {
  msg = `Usted tiene ${edad} años.`;
  if (edad > 18 && edad <= 120) {
    msg += `Ya es mayor de edad, puede manejar.`;
  } else if (edad > 0 && edad < 18) {
    msg += `Usted es menor de edad, no puede manejar.`;
  } else if (edad == 18) {
    msg += 'Acaba de cumplir su mayoría de edad, puede manejar.';
  } else {
    msg += 'Usted...¿siquiera está vivo?';
  }
  return msg;
}
console.log(edadManejo(0));
console.log(edadManejo(15));
console.log(edadManejo(18));
console.log(edadManejo(21));
console.log(edadManejo(150));
