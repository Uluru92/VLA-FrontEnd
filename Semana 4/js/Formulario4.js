/*Voy a hacer el load de la pagina*/
$(document).ready(function () {

    var botonCapturarData = document.getElementById("botonEdad");
    console.log(botonCapturarData)
    botonCapturarData.addEventListener("click", function () {
        var edad = document.getElementById("edad").value;
        var edad = parseFloat(edad)
        if (edad < 18)
        {
            alert("Es menor de edad")
            console.log("Es menor de edad")
        }
        else
        {
            alert("Es mayor de edad")
            console.log("Es mayor de edad")
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