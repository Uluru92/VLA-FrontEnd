<template>
    <h1>Seleccione una talla</h1>
    <button class="btn btn-primary" @click="seleccionarTalla('XS')">XS</button>
    <button class="btn btn-primary" @click="seleccionarTalla('S')">S</button>
    <button class="btn btn-primary" @click="seleccionarTalla('M')">M</button>
    <button class="btn btn-primary" @click="seleccionarTalla('L')">L</button>
    <button class="btn btn-primary" @click="seleccionarTalla('XL')">XL</button>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({

        methods:{
            seleccionarTalla(talla: string)
            {
                this.$emit('tallaSeleccionada', talla);                
            }
        }
    });
</script>