var d= new Date();
var dias=["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"];
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var finda= new Date(2021,1,1);
var mils1= d.getTime();
var mils2= finda.getTime();
var tr=0;
 

alert("Hoy es "+ dias[d.getDay()]+" "+d.getDate()+" de "+meses[d.getMonth()]+" de "+ d.getFullYear() +", y son las "+ d.getHours() +" horas,"+ d.getMinutes() +
"minutos con "+ d.getSeconds() +" segundos.");

insertarh();

tiemporestante();
  
function insertarh(){
     
    document.getElementById("horario").innerHTML = ("Hoy es "+ dias[d.getDay()]+" "+d.getDate()+" de "+meses[d.getMonth()]+" de "+ d.getFullYear() +", y son las "+ d.getHours() +" horas, "+ d.getMinutes() +
    " minutos con "+ d.getSeconds() +" segundos.");

}

function tiemporestante(){

    tr= mils2-mils1;
    var dias     = Math.floor(tr / 86400000);
    var sobrantedias= tr  - dias*86400000;
    var horas    = Math.floor(sobrantedias / 3600000);
    var sobrantehoras = sobrantedias - horas *3600000; 
    var minutos  = Math.floor(sobrantehoras/ 60000);
    var sobranteminutos= sobrantehoras - minutos* 60000;
    var segundos = Math.floor(sobranteminutos / 1000);
    
    
    document.getElementById("tiemporestante").innerHTML = ("Quedan <b>"+dias+"</b> dias con <b>"+horas+"</b> horas con <b>"+minutos+"</b> minutos y <b>"+segundos+"</b> segundos para fin de año.");

}

