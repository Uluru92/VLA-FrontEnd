$(document).ready(function()
{
    let botonCalcular = document.getElementById("botonCalcular");

    botonCalcular.addEventListener("click", function()
    {
        let valor1 = parseFloat(document.getElementById('valor1').value);
        let valor2 = parseFloat(document.getElementById('valor2').value);
        let operacion = document.getElementById('tipoOperacion').value;

        //Validar que valor 1 y valor 2 no sean vacios
        let camposValidados = ValidarCamposEntrada(valor1, valor2);

        if(camposValidados)
        {
            document.getElementById('mensaje').innerHTML = "Campos no pueden ser vacios";
        }
        else
        {
            let valor1Validado = ValidarSoloNumeros(valor1);
            let valor2Validado = ValidarSoloNumeros(valor2);

            if(valor1Validado || valor2Validado)
            {
                document.getElementById('mensaje').innerHTML = "Solo se pueden numeros";
            }
            else
            {
                let resultado = EjecutarOperacion(valor1, valor2, operacion);
                document.getElementById('mensaje').innerHTML = resultado;
            }
        }        
    });    
});

function ValidarSoloNumeros( valor)
{
    if(isNaN(valor))
        return true;
    else
        return false;
}

function ValidarCamposEntrada(v1, v2)
{
    if(v1 =='' || v2 =='')
        return true;
    else
        return false;
}

function EjecutarOperacion(val1, val2, op)
{
    if(op == '1')
    {
        return val1 + val2;
    }
    else if(op == '2')
    {
        return val1 - val2;   
    }
    else if(op == '3')
    {
        return val1 * val2;   
    }
    else
    {
        return val1 / val2;
    }
}