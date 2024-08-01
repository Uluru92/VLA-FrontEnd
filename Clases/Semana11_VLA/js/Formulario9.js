/*Voy a hacer el load de la pagina*/
$(function(){
    $('#menu-placeholder').load('Menu.html');
})

$(document).ready(function()
{
    let contadorPersonas = 1;
    let vectorNombres = ['Samuel', 'Natalia', 'Angie'];
    let botonAgregar = document.getElementById("botonAgregarInput");
    let botonImprimir = document.getElementById("botonImprimirNombres");
    
    contadorPersonas = insertarRegistrosBaseDatos(vectorNombres,contadorPersonas);

    botonAgregar.addEventListener('click', function()
    {               
        let seccionInputs = document.getElementById("inputsAgregados");
        let nombresEnInput= document.getElementById("inputsAgregados").getElementsByTagName("input");
        

        let bandera = false;

        for(let i=0; i< nombresEnInput.length; i++)
        {            
            if(nombresEnInput[i].value=='')
            {
                bandera = true;
            }                
        }

        if(bandera == false)
        {
            let nuevoTitulo = document.createElement('h4');
            nuevoTitulo.innerHTML = "Digite el nombre de la persona " + contadorPersonas;
            contadorPersonas = contadorPersonas +1;

            let nuevoInput = document.createElement('input');
            nuevoInput.className = 'form-control';

            seccionInputs.appendChild(nuevoTitulo);
            seccionInputs.appendChild(nuevoInput);
        }
        else 
        {
            alert("Hay un input, inserte primero")
        }
    });

    botonImprimir.addEventListener('click', function()
    {
        /* Es para captar los nombres*/
        let seccionInputs = document.getElementById("inputsAgregados");
        let inputs = seccionInputs.getElementsByTagName('input');

        /*Tengo que imprimirlos en la tabla*/
        let tablaRegistros = document.getElementById('registroNombres').getElementsByTagName('tbody')[0];
        tablaRegistros.innerHTML = '';
        for (let i=0; i<inputs.length; i++)
        {
            let nuevaFilaTabla = document.createElement('tr');
            let nuevaCeldaTabla = document.createElement('td');

            nuevaCeldaTabla.innerHTML = inputs[i].value;


            nuevaFilaTabla.appendChild(nuevaCeldaTabla);
            tablaRegistros.appendChild(nuevaFilaTabla);
        }
    });
})

function insertarRegistrosBaseDatos(vectorNombres,contadorPersonas)
{
    let seccionInputs = document.getElementById("inputsAgregados");

    for(let i = 0; i< vectorNombres.length; i++)
    {
        let nuevoTitulo = document.createElement('h4');
        nuevoTitulo.innerHTML = "Digite el nombre de la persona " + contadorPersonas;
        contadorPersonas = contadorPersonas +1;

        let nuevoInput = document.createElement('input');
        nuevoInput.className = 'form-control';
        nuevoInput.value = vectorNombres[i];
        seccionInputs.appendChild(nuevoTitulo);
        seccionInputs.appendChild(nuevoInput);
    }

    return contadorPersonas;
}