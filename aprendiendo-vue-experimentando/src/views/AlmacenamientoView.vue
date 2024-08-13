<template>
    <h1>Estoy en Almacenamiento</h1>
    <h3>En General, el valor digitado es: {{ textoDesdeGeneral }}</h3>
    
    <button v-if="idRollUsiario ==1" class="btn btn-primary">Administrador</button>
    <button v-if="idRollUsiario !=4" class="btn btn-success">Digitador</button>
    <button v-if="idRollUsiario !=4" class="btn btn-warning">Aministrativo</button>
    <button v-if="idRollUsiario !=4" class="btn btn-danger">Consulta</button>
</template>
<script lang='ts'>
    /*
        El administrador ve todos los botones
        El Digitador ve solo digitador y consulta
        El administrativo ve digitador, administrativo y consulta
        El consulta solo puede ver el boton de consulta
        */
    import { defineComponent } from 'vue';
    import { useStore } from 'vuex';
    export default defineComponent({
        setup()
        {

            const store = useStore();
            const textoDesdeGeneral = store.state.Global_TextoDesdeGeneral1;
            const idRollUsiario = store.state.Global_IdRol;
            return {
                textoDesdeGeneral
            }
        }
    })
</script>