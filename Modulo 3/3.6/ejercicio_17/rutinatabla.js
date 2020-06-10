var indx= ["0", "0"];




function marcar(x){
var r= x.split("");


if (indx[0]==r[1]&&indx[1]==r[2]-1|| indx[0]==r[1]+1 && indx[1]==r[2] || indx[0]==r[1]-1 && indx[1]==r[2]  ){   
if(r[0]=="c" && r[1]=="4" && r[2]=="4"){

    alert("Felicidades has ganado!! Juego terminado.");

}
else{
document.getElementById(x).style.backgroundColor= "red";
indx[0]=r[1];
indx[1]=r[2];
return indx;
}

}


else{
  alert("Celda incorrecta.");
}


}