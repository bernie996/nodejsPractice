const {precios} = require('./precios')
const {productos} = require('./productos')

function mapeador(pre,pro){
    let dic = []
    pro.map( (elePro, idx) => {
        let double = new Object()
        double[elePro] = pre[idx]
        dic.push(double)
    } )
    return dic;
}
function foreador(pre, pro){
    let dic = []
    for (let n; n< pre.length; n++){
        let double = new Object()
        double[elePro] = pre[idx]
        dic.push(double)
    }
}
function whileador(pre,pro){

}

console.log(mapeador(precios,productos));
console.log(foreador(precios,productos));
console.log(whileador(precios,productos));