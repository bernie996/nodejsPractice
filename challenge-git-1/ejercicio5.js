/*
Eres un espia ahora debes crear un sistema de cifrado
para los números donde si ingresan un número: 0,1,2,3,4,5,6,7,8,9
debes hace runa sustitución de valor
   
   0 = *
   1 = .
   2 = ?
   3 = /
   4 = x
   5 = !
   6 = #
   7 = &
   8 = ¿
   9 = q
   
   es decir si ingreso el valor de 100 = .**
   otro ejemplo si ingreso 75123 = &!.?/
   
   adicional debes descifrar el valor codificado
   si recibes el valor de .qq* = 1990
   otro ejemplo si ingreso ?*** = 2000
   
   NOTA: se desea el uso de funciones y crear un sistema modulos
         de sepapración de archivos.
*/
let codigo = {
    0 : '*',
    1 : '.',
    2 : '?',
    3 : '/',
    4 : 'x',
    5 : '!',
    6 : '#',
    7 : '&',
    8 : '¿',
    9 : 'q',
}
function codificador(num, code){
    num = num.toString().split('');
    let solo = num.map(element => {
        element = code[element]
        return element
    });
    return solo.join('');
}
function decodificador(num, code){
    num = num.toString().split('')
    let solo = num.map(element =>{
        element = Object.keys(code).find(key => code[key] == element)
        return element
    })
    return solo.join('')
}
console.log(codificador(100,codigo))
console.log(decodificador('.**',codigo))