/*Voy a hacer el load de la pagina*/
$(function(){
    $('#menu-placeholder').load('Menu.html');
})

$(document).ready(function()
{  
    var botonSumar = document.getElementById("botonSumar");
    var botonRestar = document.getElementById("botonRestar");
    var botonMultiplicar = document.getElementById("botonMultiplicar");
    var botonDividir = document.getElementById("botonDividir");
    
    botonSumar.addEventListener("click", function()
    {
        var valor1 = +document.getElementById("textoValor1").value;
        var valor2 = +document.getElementById("textoValor2").value;
        listaFuncionesAritmeticas.SumarDosValores(valor1,valor2);
    });

    botonRestar.addEventListener("click", function()
    {
        listaFuncionesAritmeticas.RestarDosValores();
    });

    botonMultiplicar.addEventListener("click", function()
    {
        var valor1 = +document.getElementById("textoValor1").value;
        var valor2 = +document.getElementById("textoValor2").value;
        var resultado = parseFloat(valor1) *  parseFloat(valor2);
        MultiplicadorValores(resultado);
    });

    botonDividir.addEventListener("click", function()
    {
        listaFuncionesAritmeticas.DividirDosValores();
    });
});

var listaFuncionesAritmeticas=
{
    SumarDosValores :function (valor1, valor2)
    {        
        var resultado = parseFloat(valor1) +  parseFloat(valor2);
        alert("El resultado es: " + resultado);
    },
    RestarDosValores  :function ()
    {
        var valor1 = +document.getElementById("textoValor1").value;
        var valor2 = +document.getElementById("textoValor2").value;
        var resultado = parseFloat(valor1) *  parseFloat(valor2);
        alert("El resultado es: " + resultado);
    },
    MultiplicadorValores :function  (){
        alert("El resultado es: " + resultado);
    },
    DividirDosValores :function  ()
    {
        var valor1 = +document.getElementById("textoValor1").value;
        var valor2 = +document.getElementById("textoValor2").value;

        var pruebaNAN1 = isNaN(valor1);
        var pruebaNAN2 = isNaN(valor2);

        if(pruebaNAN1==true||pruebaNAN2==true)
        {
            alert("ERROR, solo se pueden numeros")
        }
        else
        {
            var resultado = parseFloat(valor1) /  parseFloat(valor2);
            alert("El resultado es: " + resultado);
        }
    }
}




