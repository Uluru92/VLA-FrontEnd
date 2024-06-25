/*Voy a hacer el load de la pagina*/
$(function(){
    $('#menu-placeholder').load('Menu.html');
})

$(document).ready(function(){
    
    var botonCalcular = document.getElementById("botonCalcularEdad");
    
    botonCalcular.addEventListener("click", function()
    {
       var edad = document.getElementById("textoEdad").value;

       if(edad == "")
       {
            document.getElementById("textoEdad").style.borderColor = "red";
            document.getElementById("mensajeEdad").innerHTML = "No puede dejar campos vacios";            
       }
       else
       {
            if(parseInt(edad) >= 18)
            {
                document.getElementById("mensajeEdad").innerHTML = "Es una persona mayor de edad";
            }
            else
            {
                document.getElementById("mensajeEdad").innerHTML = "Es una persona menor de edad";
            }

            document.getElementById("textoEdad").style.borderColor = "";
       }
    });
})