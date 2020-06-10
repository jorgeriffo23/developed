var m=" ";

/*function clear(){
    document.getElementById("cont1").innerHTML = "";

}*/

function longtext(){

    var text1= document.getElementById("input1").value ;
    var se= text1.replace(/ /g,"");
    var n = se.length;
    document.getElementById("cont1").innerHTML += "<p>El texto contiene "+n+" letras.</p>";
    
    
}

function words(){

    primerBlanco = /^ /
    ultimoBlanco = / $/
    variosBlancos = /[ ]+/g

    var text1= document.getElementById("input1").value ;

    text1 = text1.replace (variosBlancos," ");
    text1 = text1.replace (primerBlanco,"");
    text1 = text1.replace (ultimoBlanco,"");
 
    var n1 = text1.split(" ");
    document.getElementById("cont1").innerHTML += "<p>El texto contiene "+(n1.length)+" palabras.<p>";
    
}

function primerapalabra(){

    
    primerBlanco = /^ /
    ultimoBlanco = / $/
    variosBlancos = /[ ]+/g

    var text1= document.getElementById("input1").value ;

    text1 = text1.replace (variosBlancos," ");
    text1 = text1.replace (primerBlanco,"");
    text1 = text1.replace (ultimoBlanco,"");
 
    var n1 = text1.split(" ");

    document.getElementById("cont1").innerHTML += "<p>La primera palabra es: "+n1[0]+".</p>";
     


}

function ultimapalabra(){

    var text1= document.getElementById("input1").value ;
    var textt= text1.trim();
    var n2= textt.lastIndexOf(" ");
    
    var res = textt.substr(n2, textt.length-n2);

    document.getElementById("cont1").innerHTML += "<p>La ultima palabra es: "+res+".</p>";

}

function ordeninverso(){
    var m="";
    primerBlanco = /^ / /*primer espacio en blanco*/
    ultimoBlanco = / $/ /*ultimo espacio en blanco*/
    variosBlancos = /[ ]+/g /*doble espacio en blanco*/

    var text1= document.getElementById("input1").value ;

    /*eliminacion de espacios*/

    text1 = text1.replace (variosBlancos," ");
    text1 = text1.replace (primerBlanco,"");
    text1 = text1.replace (ultimoBlanco,"");
 
    var n1 = text1.split(" ");

    for(var i = n1.length-1; i>=0 ; i--){

    m = m + n1[i]+" ";
}
document.getElementById("cont1").innerHTML += "<p>Palabras al inverso: "+m+"</p>";
}

function ordeninversoletras(){

    var m2="";

    var text1= document.getElementById("input1").value ;

    /*eliminacion de espacios*/
    var texxt=text1.trim();
    var se= texxt.replace(/ /g,"");
    
 
    var n1 = se.split("");

    for(var i = n1.length-1; i>=0 ; i--){
    
    var m2 = m2 + n1[i];
}

document.getElementById("cont1").innerHTML += "<p>Letras en inverso sin espacios :"+m2+"</p>";
}


