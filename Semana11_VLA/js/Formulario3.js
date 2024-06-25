/*Voy a hacer el load de la pagina*/
$(function(){
    $('#menu-placeholder').load('Menu.html');
})

$(document).ready(function(){  
    var botonCapturarDato = document.getElementById("botonCapturarDato");
    
    botonCapturarDato.addEventListener("click", function()
    {
        var valor1 = +document.getElementById("textoValor1").value;
        var valor2 = +document.getElementById("textoValor2").value;
        var resultado = parseFloat(valor1) +  parseFloat(valor2);
        alert("El resultado es: " + resultado);
        console.log("El resultado es: ", resultado);
    });
});



/*
    Quiero que cree un html que sea Formulario4.html y su javascript que sea Formulario4.js
    Es el campo de una edad, 
    Yo quiero que usted me diga que si la edad >= 18, por medio de un console.log o un alert
    Me diga si es mayor o menor de edad
    Input y un boton

    Crear el html con el campo y el boton
    Me encargo de crear el javascript
    Integro los dos
*/