/*Voy a hacer el load de la pagina*/
$(document).ready(function () {
    /* Guardar el boton en una variable */
    /* Capturar las propiedades de la etiqueta botonCapturarDato */
    var botonCapturarData = document.getElementById("botonSumar");
    console.log(botonCapturarData)

    /* Al botonCapturarDato le voya agregar un evento que es de tipo clic */
    botonCapturarData.addEventListener("click", function () {

        /* Capturar no los atributos, solo el atributo valor de la etiqueta*/
        var var1 = document.getElementById("valor1").value;
        var var2 = document.getElementById("valor2").value;

        var1 = parseFloat(var1)
        var2 = parseFloat(var2)
        var var3 = var1 + var2
        alert("Resultado: " + var3)
        console.log("Resultado: ", var3)

    });
});

/*
Quiero que cree un html que sea formulario4.html y su js que sea Formualrio4.js
Es el campo de una edad,
Yo quiero que usted me diga que si la edad >18, por medio de un console.log o un alert
Me diga si es mayor o menor de edad
Input y un boton
*/