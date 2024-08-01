$(function () {
    $('#menu-placeholder').load('Menu.html')
})
$(document).ready(function ()
{  
    let botonSumar = document.getElementById("botonSumar");
    let botonRestar = document.getElementById("botonRestar");
    let botonMultiplicar = document.getElementById("botonMultiplicar");
    let botonDividir = document.getElementById("botonDividir");
    
    botonSumar.addEventListener("click", function()
    {
        let valor1 = +document.getElementById("textoValor1").value;
        let valor2 = +document.getElementById("textoValor2").value;
        let resultado = listaFuncionesAritmeticas.SumarDosValores(valor1,valor2);
        alert('El resultado es:' +  resultado);
    }); 
   
    botonRestar.addEventListener("click", function()
    {
        let resultado = listaFuncionesAritmeticas.RestarDosValores();
        alert("El resultado es: " + resultado);
    });

    botonMultiplicar.addEventListener("click", function()
    {
        let valor1 = +document.getElementById("textoValor1").value;
        let valor2 = +document.getElementById("textoValor2").value;
        let resultado = parseFloat(valor1) *  parseFloat(valor2);
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
        let resultado = parseFloat(valor1) +  parseFloat(valor2);
        return resultado;
    },
    RestarDosValores  :function ()
    {
        let valor1 = +document.getElementById("textoValor1").value;
        let valor2 = +document.getElementById("textoValor2").value;
        return parseFloat(valor1) -  parseFloat(valor2);
        
    },
    MultiplicadorValores :function  (){
        alert("El resultado es: " + resultado);
    },
    DividirDosValores :function  ()
    {
        let valor1 = +document.getElementById("textoValor1").value;
        let valor2 = +document.getElementById("textoValor2").value;

        let pruebaNAN1 = isNaN(valor1);
        let pruebaNAN2 = isNaN(valor2);

        if(pruebaNAN1==true||pruebaNAN2==true)
        {
            alert("ERROR, solo se pueden numeros")
        }
        else
        {
            let resultado = parseFloat(valor1) /  parseFloat(valor2);
            alert("El resultado es: " + resultado);
        }
    }
}




