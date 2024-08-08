<template>
    <div>
        <label>Seleccione la marca</label>
        <select v-model="marcaSeleccionada">
            <option value="13">Adidas</option>
            <option value="77">Nike</option>
            <option value="89">Puma</option>
            <option value="5">Umbro</option>
        </select>
        <h3>Usted seleccionó: {{ marcaSeleccionada }}</h3>    
        <br>
        <label>Select llenado con vector</label>
        <select v-model="marcaSeleccionada" @change="CambioSelect">
            <option v-for="(marca, index) in vectorMarcas" :key="index" :value="marca.valor">
                {{ marca.nombre }}
            </option>
        </select>
        <button @click="MarcaEscogida">Seleccione</button> 
        <h3>Usted seleccionó: {{ mensajeMarca }}</h3>    
    </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent ({
    data(){
        return {
             marcaSeleccionada: 13 as number,
             vectorMarcas: [
                            {nombre:"Adidas", valor:13 },
                            {nombre:"Nike", valor:77 },
                            {nombre:"Puma", valor:89 },
                            {nombre:"Umbro", valor:5 },
                           ],
             mensajeMarca: "" as string
        }
    },
    methods:
    {
        MarcaEscogida()
        {
            alert(this.marcaSeleccionada);
        },
        CambioSelect()
        {
            if(this.marcaSeleccionada === 13)
                this.mensajeMarca = "Adidas"
            else if(this.marcaSeleccionada === 77)
                this.mensajeMarca = "Nike"
            else if(this.marcaSeleccionada === 89)
                this.mensajeMarca = "Puma"
            else
                this.mensajeMarca = "Umbro"
        }
    }

})
</script>

