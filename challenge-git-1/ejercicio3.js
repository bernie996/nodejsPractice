/*
   Hacer 3 procedimientos de iteración mediante los ciclos:
   map, while y for.

   emitir:

   1- nombre: foo
   2- nombre: bar
   3- nombre: qux
   4- nombre: ram
   */
function separador(){
    console.log('-'.repeat(20))
}
function mapeador(ele){
    ele.map(nom =>{
        let key = Object.keys(nom)[0];
        console.log( key + ' - ' + nom[key] )
    })
}
function whileador(ele){
    let n = 0;
    while (n < ele.length){
        let dic = ele[n];
        let key = Object.keys(dic)[0]
        console.log( key + ' - ' + dic[key] );
        n += 1;
    }

}
function foreador(ele){
    for (let n = 0; n < ele.length; n++){
        let dic = ele[n];
        let key = Object.keys(dic)[0]
        console.log( key + ' - ' + dic[key] );
    }
}
const nombres = [
    {nombre:"foo"},
    {nombre:"bar"},
    {nombre:"qux"},
    {nombre:"ram"},
   ];
function impresor(){
    mapeador(nombres)
    separador()
    whileador(nombres)
    separador()
    foreador(nombres)
}
impresor()

