<template>
    <!-- Todo el html que yo quiera-->
     <div style="background-color:antiquewhite;">
        <h1> Estoy saludando, estoy vivo</h1>
        <h1>Mi nombre es {{NombrePersona}}</h1>
        <h1>Tengo: {{EdadPersona}} anios</h1>
        <button class="btn btn-primary" @click="SaludarMundo">Saludar</button>
        <h2>{{ mensaje }}</h2>
     </div>

</template>
<script>
/* Todo el javascript del componente */
    export default
    {
        props:
        {
            NombrePersona: String,
            EdadPersona: Number
        },
        methods:
        {
            SaludarMundo()
            {
                /*alert(`Hola ${this.NombrePersona}`)*/
                this.mensaje = `Hola ${this.NombrePersona} espero estes bien`;
            }
        },
        data()
        {
            return {
                mensaje: `asdasd`
            }
        }
    }
</script>
<style>
</style>