<template>
    <h1>Estoy en emits</h1>
    <TallaSeleccionadaComponent @tallaSeleccionada="manejarTallaSeleccionada"/>
    <p>La talla seleccionada fue: </p>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';
    import TallaSeleccionadaComponent from '../components/TallaSeleccionadaComponent.vue';

    export default defineComponent({
        components:{
            TallaSeleccionadaComponent
        },
        data(){
            return {
                tallaSeleccionada : '' as string
            }
        }, 
        methods:
        {
            manejarTallaSeleccionada(talla: string)
            {
                this.tallaSeleccionada = talla;
            }
        }
        

    })
</script>