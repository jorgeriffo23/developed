var num="";
var memo="";
var suma=false;
var resta=false;
var mult=false;
var div=false;
var s=0;
var r=0;
var m=0;
var d=0;


function cero(){
var n =document.getElementById("display").value;
document.getElementById("display").value= n + "0";
   
}

function uno(){
var n =document.getElementById("display").value;
document.getElementById("display").value= n + "1";   
}

function dos(){
var n =document.getElementById("display").value;
document.getElementById("display").value= n+"2";        
}

function tres(){
var n =document.getElementById("display").value;
document.getElementById("display").value=n+"3";         
}

function cuatro(){
    var n =document.getElementById("display").value;
    document.getElementById("display").value= n + "4";        
}

function cinco(){
    var n =document.getElementById("display").value;
    document.getElementById("display").value= n + "5";     
}

function seis(){
    var n =document.getElementById("display").value;
    document.getElementById("display").value= n + "6";         
}

function siete(){
    var n =document.getElementById("display").value;
    document.getElementById("display").value= n + "7";         
}

function ocho(){
    var n =document.getElementById("display").value;
    document.getElementById("display").value= n + "8";        
}

function nueve(){
    var n =document.getElementById("display").value;
    document.getElementById("display").value= n + "9";         
}

function suma(){
iguala(); 
suma=true;  
 memo = document.getElementById("display").value;
return memo;

} 

function resta(){
iguala();
resta=true; 
   
 memo = document.getElementById("display").value;
return memo;

}

function mult(){
iguala();
mult=true;     
   
memo = document.getElementById("display").value;
return memo;
}

function div(){
    iguala(); 
    div=true;   
    memo = document.getElementById("display").value;
    return memo;  
}

function reseteo(){
    
}

function iguala(memo){

    if(suma=true){
    s=parseInt(document.getElementById("display").value);
    document.getElementById("display").value=memo+s;   
    memo=document.getElementById("display").value;
    }

    else if(resta=true){
        r=parseInt(document.getElementById("display").value);
        document.getElementById("display").value=memo+r;   
        memo=document.getElementById("display").value;    
    }

    else if(mult=true){
        m=parseInt(document.getElementById("display").value);
        document.getElementById("display").value=memo+m;   
        memo=document.getElementById("display").value;   
    }

    else if(div=true){
        d=parseInt(document.getElementById("display").value);
        document.getElementById("display").value=memo+d;   
        memo=document.getElementById("display").value;   
    }

    else{
        
    }
    
}