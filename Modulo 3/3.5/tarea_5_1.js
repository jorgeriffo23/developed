var a= -2;
var b=3;
var m="";


alerta1(a,b);

function alerta1(a,b){

if(a<b){
     m = "b es mayor que a";

}
else if(a==b){
     m= "a y b son iguales.";

}
else {
      m="a es mayor que b";
 }

if(a<0){
      m= m + "\nEl numero a es negativo.";
}

if(b<0){
    m= m + "\nEl numero b es negativo.";
}

if(a+1>b){
    m= m+ "\nSi se le suma 1 a entonces a sera mayor que b." ;
}
else if(a+1==b){
    m=m+"\nSi se le suma 1 a entonces a sera igual que b." ;
}

alert("Tenemos dos numeros. \na="+a+" y b="+ b+"\n"+m );

}