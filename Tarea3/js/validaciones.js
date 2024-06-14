$(document).ready(function () {

    let input_ = document.getElementById("clave").value.length;

    
    
    if (input_ == "")
    {
        document.getElementById("textoEdad").style.borderColor = "red";
        document.getElementById("mensajeEdad").innerHTML = "No puede dejar campos vacios";
    }
    else {
        if (parseInt(edad) >= 18) {
            document.getElementById("mensajeEdad").innerHTML = "Es una persona mayor de edad";
        }
        else {
            document.getElementById("mensajeEdad").innerHTML = "Es una persona menor de edad";
        }

        document.getElementById("textoEdad").style.borderColor = "";
    }

})