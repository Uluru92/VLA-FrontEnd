<template>
    <h1>Estoy en emits</h1>
    <TallaSeleccionadaComponent @tallaSeleccionada="manejarTallaSeleccionada"/>
    <p>La talla seleccionada fue:{{ tallaSeleccionada }} </p>

    <FormularioBasico @EnviarDatosFormularioBasico="obtenerDatosFormularioBasico"></FormularioBasico>
    <p>El nombre de la persona es: {{ nombreFormularioBasico }} y su correo es: {{ correoFormularioBasico }}</p>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';
    import TallaSeleccionadaComponent from '../components/TallaSeleccionadaComponent.vue';
    import FormularioBasico from '../components/FormularioBasico.vue'

    export default defineComponent({
        components:{
            TallaSeleccionadaComponent,
            FormularioBasico
        },
        data(){
            return {
                tallaSeleccionada : '' as string,
                nombreFormularioBasico: '' as string, 
                correoFormularioBasico: '' as string
            }
        }, 
        methods:
        {
            manejarTallaSeleccionada(talla: string)
            {
                this.tallaSeleccionada = talla;
            }, 
            obtenerDatosFormularioBasico(nombre: string, correo: string)
            {
                this.nombreFormularioBasico = nombre, 
                this.correoFormularioBasico = correo
            }

        }        

    })
</script>