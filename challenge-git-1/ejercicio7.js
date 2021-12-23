/*
const menú = ["burger", "papas", "gaseosa", "helado"];
   
  mostrar por consola el menú mediante "map" adicional antes
  de mostrar el menú, debes agregar al final del menú después
  del item helado,el ítem "agua"
   

  -------------------
  MENU - MENU - MENU
  -------------------
  1) burger
  -------------------
  2) papas
  -------------------
  3) gaseosa
  -------------------
  4) helado
  -------------------
  5) agua
  -------------------
  */
 function separador(){
     console.log('-'.repeat(20))
 }
 function menudeador(menu){
    menu.map( (elemento,idx) => {
        separador()
        console.log(`${idx+1}) ${elemento}`)
        if (idx == menu.length - 1){
            separador()
            console.log(`${menu.length+1}) agua`)
            separador()
        }
    } )
 }
 const menu = ["burger", "papas", "gaseosa", "helado"];
 menudeador(menu)