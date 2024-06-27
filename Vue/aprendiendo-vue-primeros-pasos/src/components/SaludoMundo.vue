<template>
    <!--Todo el html que yo quiera-->  
    <div style="background-color: #F99580; margin-top: 2px; margin-bottom: 2px;">
        <h1>Mi nombre es {{NombrePersona}}</h1>
        <h1>Tengo: {{ EdadPersona }} anios</h1>    
        <button class="btn btn-primary" @click="SaludarMundo()">Saludar</button>
        <h2>{{ mensaje }}</h2>
    </div>  
</template>

<script>   

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
                this.mensaje = `Hola ${this.NombrePersona} espero que estes bien`;                
            }
        }, 
        data()
        {
            return {
                mensaje:""                
            }
        }
    }
</script>

<style>
    
</style>
