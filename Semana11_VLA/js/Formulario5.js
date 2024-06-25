/*Voy a hacer el load de la pagina*/
$(function(){
    $('#menu-placeholder').load('Menu.html');
})

$(document).ready(function()
{
    var selectCursos = document.getElementById("comboCursos");
    var selectEdad = document.getElementById("edadPersona");
    var botonAgregar = document.getElementById("botonAgregar");
    var cursos = ['Matematicas', 'Ciencias', 'Estudios Sociales', 'Ingles', 'Artes Plasticas', 'FrontEnd Developer'];
    
    /*Aqui lleno el select con el id comboCursos del html*/
    for(var i = 0; i < cursos.length; i++)
    {
       var nuevaOpcionCurso = document.createElement('option');
       nuevaOpcionCurso.text = cursos[i];
       nuevaOpcionCurso.value = i +1;
       selectCursos.appendChild(nuevaOpcionCurso);
    }

    for(var edad = 15; edad<=70; edad++)
    {
        var nuevaOpcionEdad = document.createElement("option");
        nuevaOpcionEdad.text = edad;
        nuevaOpcionEdad.value = edad;
        selectEdad.appendChild(nuevaOpcionEdad);
    }


    /*Capto el evento listener del boton agregar*/
    botonAgregar.addEventListener("click", function(){
        var nombre = document.getElementById("nombrePersona").value;
        var primerApellido = document.getElementById("primerApellidoPersona").value;
        var segundoApellido = document.getElementById("segundoApellidoPersona").value;
        var edad = document.getElementById("edadPersona").value;
        var cursoSeleccionado = document.getElementById("comboCursos").value;
        var diaSeleccionado = document.getElementById("diaSeleccionado").value;
        var comentarioPersona = document.getElementById("comentariosPersonales").value;
        
        if(nombre == "")        
            document.getElementById("nombrePersona").style.borderColor = "#31BFF5";   
        else
            document.getElementById("nombrePersona").style.borderColor = "";                    

        if(primerApellido == "")        
            document.getElementById("primerApellidoPersona").style.borderColor = "red";   
        else
            document.getElementById("primerApellidoPersona").style.borderColor = "";
        
        if(segundoApellido == "")        
            document.getElementById("segundoApellidoPersona").style.borderColor = "red";   
        else
            document.getElementById("segundoApellidoPersona").style.borderColor = "";
        
        if(edad == "0")        
            document.getElementById("edadPersona").style.borderColor = "red";   
        else
            document.getElementById("edadPersona").style.borderColor = "";

        if(cursoSeleccionado == "0")        
            document.getElementById("comboCursos").style.borderColor = "red";   
        else
            document.getElementById("comboCursos").style.borderColor = "";

        if(diaSeleccionado == "0")        
            document.getElementById("diaSeleccionado").style.borderColor = "red";   
        else
            document.getElementById("diaSeleccionado").style.borderColor = "";

        if(comentarioPersona == "")        
            document.getElementById("comentariosPersonales").style.borderColor = "red";   
        else
            document.getElementById("comentariosPersonales").style.borderColor = "";

    })

})