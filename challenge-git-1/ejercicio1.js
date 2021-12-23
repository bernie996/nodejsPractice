/*
Seleccionar las primeras letras de los 3 elementosy mostrar: "far"

const a = ["foo", "alfa", "ram"];

*/

function letrador(palabras){
    list = []
    palabras.forEach(element => {
        list.push(element[0])
    });
    return list.join('')
}
const a = ["foo", "alfa", "ram"];
console.log(letrador(a));