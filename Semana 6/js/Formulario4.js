/*Voy a hacer el load de la pagina*/
$(document).ready(function () {

    var botonCapturarData = document.getElementById("botonEdad");
    console.log(botonCapturarData)
    botonCapturarData.addEventListener("click", function () {
        var edad = document.getElementById("edad").value;

        console.log("El valor de edad es: "+ edad)

        if (edad != "")
        {
            if (parseInt(edad) >= 18)
                {
                document.getElementById("mensajeEdad").innerHTML = "Es un persona mayor de edad"
                }
            else
                {
                document.getElementById("mensajeEdad").innerHTML = "Es un persona menor de edad"
            }
            document.getElementById("edad").style.borderColor = ""
        }
        else
        {
            document.getElementById("edad").style.borderColor = "red"
            document.getElementById("mensajeEdad").innerHTML = "El espacio está vacío"
        }
    });
});

/*
Quiero que cree un html que sea formulario4.html y su js que sea Formualrio4.js
Es el campo de una edad,
Yo quiero que usted me diga que si la edad >18, por medio de un console.log o un alert
Me diga si es mayor o menor de edad
Input y un boton
*/