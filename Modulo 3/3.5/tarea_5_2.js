var s =0;
var m="";

/* funcion llamada para ejecutar el programa */ 
function sumaden()
   {

    /*tomar un valor desde el input con id=esp1 */
    var num= document.getElementById("esp1").value;
    /*cambiar de texto a numero*/
    var n=parseInt(num);
    
    /* ciclo para suma */ 
    for(n ; n>0 ;n--){

        /*s acumulador suma*/
        s= s+n;

    /* aclumular como texto*/
       if(n<s){
          m= m +" + "+ n ;
       }
       else{
           m=n;
       }   
    }
    
    /* funcion que agrega un elemento al div con id = esp2 */

    document.getElementById("esp2").innerHTML = m+" = "+s;

}