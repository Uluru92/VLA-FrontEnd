$(function () {
    $('#menu-placeholder').load('Menu.html')
})
$(document).ready(function () {
    /*Guardar el boton en una variable*/ 
    /*Capturar las propiedad de la etiqueta botonCapturarDato*/   
    var botonCapturarDato = document.getElementById("botonCapturarDato");

    /*Al botonCapturarDato le voy a agregar un evento que es de tipo clic*/
    botonCapturarDato.addEventListener("click", function()
    {
        /*Capturar no los atributo, solo el atributo valor de la etiqueta*/
        var nombre = document.getElementById("textoNombrePersona").value;
        alert("Hola, le acabas de dar clic, el valor es:" + nombre);
    });
});


/*
    Usted va a crear un javascript que se llame Formulario3.js, que tiene lo mismo de Formulario2.js
    Usted va a crear un html que se llame Formulario3.html, que tiene lo mismo que Formulario2.html
        Un input para capturar un valor 1, pensar que es un numero
        Un input para capturar un valor 2, pensar que es un numero
    Boton que es capturar Dato, 
    Usted al momento de dar clic, va a captar el valor1 y captar el valor 2, sumarlos y mostrarlos en un alert y en un console
*/