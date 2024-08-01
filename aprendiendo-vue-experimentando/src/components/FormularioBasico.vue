<template>
    <div class="container">
        <h4>Digite su nombre</h4>
        <input v-model="nombrePersona" class="form-control">
        <h4>Digite su correo</h4>
        <input v-model="correoPersona" class="form-control">
        <button class="btn btn-primary" @click="MostrarDatos">Mostrar Datos</button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({

        data(){
            return {
                nombrePersona: '' as string,
                correoPersona: '' as string
            }
        },
        methods:
        {
            MostrarDatos()
            {
                this.$emit('EnviarDatosFormularioBasico', this.nombrePersona,this.correoPersona);

            }
        }
    });

</script>
