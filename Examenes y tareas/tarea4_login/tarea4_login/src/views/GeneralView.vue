<template>
    <div class="container">
        <h1 class="boton1">Tarea 4</h1>
        <h2 class="boton2">Realizar la implementación de la vista (pantalla) Login, en el cuál se requieren los siguientes campos:</h2>
        <div class="boton1">
            <h3 >- Nombre de usuario</h3>
            <h3>- Contraseña</h3>
            <h3>-Botón de validar</h3>
        </div>
        <h6 class="boton6">Importante mencionar que ambos valores son requeridos para realizar la validación de si el usuario
        existe o no. Como no hemos aprendido el tema de manejo de API, se requiere que al momento de validar
        los campos, se permita solo el usuario admin y la contraseña 123*, muestre con un alert si el usuario
        es permitido o no.</h6>
        
    </div>
    
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';

    export default defineComponent({
        

    })
</script>

<style>
.boton1{
    color: rgb(255, 255, 255);
    background-color: black;
}
.boton2{
    justify-items: center;
    color: black;
    background-color: antiquewhite;
}
.boton3{
    justify-items: center;
    color: black;
    background-color: antiquewhite;
}
.boton6{
    text-align: justify;
    color: black;
    background-color: antiquewhite;
}
</style>