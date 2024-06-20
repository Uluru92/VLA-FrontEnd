<template>
    <!-- Todo el html que yo quiera-->
     <h1> Estoy saludando, estoy vivo</h1>
     <h1>Mi nombre es {{NombrePersona}}</h1>
     <h1>Tengo: {{EdadPersona}} anios</h1>

</template>


<script>
/* Todo el javascript del componente */
    export default
    {
        props:
        {
            NombrePersona: String,
            EdadPersona: Number
        }  
    }

</script>

<style>

</style>