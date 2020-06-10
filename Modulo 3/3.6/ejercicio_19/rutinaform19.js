
/* || */

function verificar(){


    if(document.getElementById("p11").checked==false&&document.getElementById("p12").checked==false&&document.getElementById("p13").checked==false&&document.getElementById("p14").checked==false||document.getElementById("p21").checked==false&&document.getElementById("p22").checked==false&&document.getElementById("p23").checked==false&&document.getElementById("p24").checked==false||document.getElementById("p31").checked==false&&document.getElementById("p32").checked==false&&document.getElementById("p33").checked==false&&document.getElementById("p34").checked==false||document.getElementById("p41").checked==false&&document.getElementById("p42").checked==false&&document.getElementById("p43").checked==false&&document.getElementById("p44").checked==false||document.getElementById("p51").checked==false&&document.getElementById("p52").checked==false&&document.getElementById("p53").checked==false&&document.getElementById("p54").checked==false){
    alert("Faltan preguntas por responder.");
    }
    else{
    respuetas();
    

    }
}

function respuestas(){
alert("hola");
      if(document.getElementById("p13").checked==true&&document.getElementById("p21").checked==true&&document.getElementById("p33").checked==true&&document.getElementById("p43").checked==true&&document.getElementById("p51").checked==true){
          alert("Felicidades haz completado con exito esta encuesta.");
      }

}

function intentos(){

}