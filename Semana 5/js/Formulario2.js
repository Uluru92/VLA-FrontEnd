/*Voy a hacer el load de la pagina*/
$(document).ready(function(){
    /* Guardar el boton en una variable */
    /* Capturar las propiedades de la etiqueta botonCapturarDato */
    var bontonCapturarData = document.getElementById("botonCapturarDato");
    console.log(botonCapturarDato)

    /* Al botonCapturarDato le voya agregar un evento que es de tipo clic */
    bontonCapturarData.addEventListener("click", function () {

        /* Capturar no los atributos, solo el atributo valor de la etiqueta*/
        var nombre = document.getElementById("textoNombrePersona").value;
        alert("Hola, le acabas de dar clic: "+ nombre)
        console.log("HEY YOU:", nombre)
    });
});

 /* 
    Crear un javascript que se llame Formulario3.js, que tiene lo mismo de Formulario2.js
    adicional crear un html que se llame Formulario3.html, que tiene lo mismo que Formulario2.html
        un input para capturar un valor 1 pensar que es un numero
        un input para capturar un valor 2 pensar que es un numero
    boton que es capturar Dato,
    Usted al momento de dar clic, va a captar el valor1 y valor2, sumarlos y mostrarlos en un alert y en un console
*/