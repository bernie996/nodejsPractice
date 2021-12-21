// run `node index.js` in the terminal

function transformador(v, callback) {
  return callback(v);
}
function nombrador(c) {
  return c;
}

let resulte = transformador('soldado', nombrador);
console.log(resulte);
