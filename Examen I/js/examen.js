$(function () {
    $('#menu-placeholder').load('menu.html');
})

$(document).ready(function () {
    var botonEnviar = document.getElementById("botonEnviarInfo");
    
    botonEnviar.addEventListener("click", function () {
        var fechaSeleccionada = new Date(document.getElementById('nacimiento').value);
        var fechaHoy = new Date();
        var diferenciaFechas = fechaHoy.getFullYear() - fechaSeleccionada.getFullYear();

        document.getElementById('fechaSeleccionada').innerText = fechaSeleccionada;
        document.getElementById('fechaHoy').innerText = fechaHoy;
        document.getElementById('diferenciaFechas').innerText = `Edad: ${diferenciaFechas} años`

        if (diferenciaFechas >= 18) {
            document.getElementById('diferenciaFechas').innerText = `Tienes ${diferenciaFechas} años.`;
        } else {
            document.getElementById('diferenciaFechas').innerText = `No puedes reservar, tienes ${diferenciaFechas} años, eres menor de edad.`;
        }
    })


    botonEnviar.addEventListener("click", function () {
        var nombre = document.getElementById("nombrePersona").value;
        var primerApellido = document.getElementById("primerApellidoPersona").value;
        var segundoApellido = document.getElementById("segundoApellidoPersona").value;
        var correo = document.getElementById("correoPersona").value;
        var telefono = document.getElementById("telefonoPersona").value;
        var nacimiento = document.getElementById("nacimiento").value;
        var comentario = document.getElementById("comentarioAdicional").value;

        if (nombre == "") {
            $('#modalMensaje').modal('show');
        }

        if (primerApellido == "") {
            $('#modalMensaje').modal('show');
        }

        if (segundoApellido == "") {
            $('#modalMensaje').modal('show');
        }

        if (correo == "") {
            $('#modalMensaje').modal('show');
        }

        if (telefono == "") {
            $('#modalMensaje').modal('show');
        }

        if (nacimiento == "") {
            $('#modalMensaje').modal('show');
        }

        if (comentario == "") {
            $('#modalMensaje').modal('show');
        }

    })
    })

    
