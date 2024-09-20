<!--
Tarea 4
Realizar la implementación de la vista (pantalla) Login, en el cuál se requieren los siguientes campos:

    - Nombre de usuario
    - Contraseña
     -Botón de validar

Importante mencionar que ambos valores son requeridos para realizar la validación de si el usuario
existe o no. Como no hemos aprendido el tema de manejo de API, se requiere que al momento de validar
los campos, se permita solo el usuario admin y la contraseña 123*, muestre con un alert si el usuario
es permitido o no.
-->

<template>
    <div class="container">
        <div class="general">
        <h1>LOGIN:</h1>
        <input class="boton" v-model="usuario" placeholder="Digite su usuario">
        <input class="boton" v-model="contraseña" placeholder="Digite su contraseña">
        <button class="btn btn-danger" @click="ValidarUsuario">Validar</button>
        </div>
        <br>
        <br>
        <br>
        <h6 class="firma">Realizado por - Jorddy Castro Araya</h6>
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';

export default defineComponent({
    data() {
            return { 
                usuario: '' as string,
                contraseña: '' as string,
            };
        },
        methods: {
            ValidarUsuario()
            {
                if (this.usuario === 'admin' && this.contraseña === '123*') {
                alert('El usuario es permitido')
                }
                else
                alert('El usuario no es permitido')
            }
        }
})
</script>

<style>
.general
{
    margin: 10px;
    padding: 20px;
    background-color: rgb(118, 200, 200);
    color: darkgreen;
}
.boton{
    margin: 5px;
    background-color: rgb(255, 220, 196);
    color: black;
}
.firma{
  color: black;
  transition: color 0.3s;
  text-align: end;
}
.firma:hover{
 color: crimson;
}
</style>