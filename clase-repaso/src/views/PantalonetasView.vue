<template>
    <h1>Estoy en la vista de pantalonetas</h1>
    <SeleccionPantalonetaComponent></SeleccionPantalonetaComponent>
    
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import SeleccionPantalonetaComponent from '@/components/SeleccionPantalonetasComponent.vue'


    export default defineComponent ({
        components:
        {
            SeleccionPantalonetaComponent 
        }

    })
</script>