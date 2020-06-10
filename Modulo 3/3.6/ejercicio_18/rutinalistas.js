function seleccionador(){

    if(document.getElementById("l1").checked==true){

        document.getElementById("list1").innerHTML += "<li>"+document.getElementById("text1").value+"</li>";  
          
    }

    else if(document.getElementById("l2").checked==true){

        document.getElementById("list2").innerHTML += "<li>"+document.getElementById("text1").value+"</li>";
         
    }

    else{
        alert("Debes seleccionar una lista.");
    }


}