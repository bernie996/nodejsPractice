/*
const c = [
     {pies:"pies"},
     [["cabeza"]],
     function(){
      return "cuerpo"
     }
   ];

  dado el array loco anterior, mostrar lo siguiente
  por la consola:
 
  "cabeza"
  "cuerpo"
  "pies"  

  se recomienda usar el ciclo "for" como medio de iteración
*/
function identificador(element,idx){
  if (idx == 0){
    return element[Object.keys(element)[0]]
  }
  else if (idx == 1){
    return element[0][0]
  }
  else if (idx == 2){
    return element();
  }
}
function impresor(list){
  list.map( (unit, idx) =>{
    console.log(identificador(unit,idx));
  } )
}
const c = [
  {pies:"pies"},
  [["cabeza"]],
  function(){
   return "cuerpo"
  }
];
impresor(c)