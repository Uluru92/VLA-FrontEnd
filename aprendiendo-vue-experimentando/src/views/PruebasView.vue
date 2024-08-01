<template>
    <div class="container">
        <h1>Prueba del palindromo</h1>
        <input v-model="palabraPalindromo" class="form-control" style="margin-bottom: 5px;">
        <button class="btn btn-primary" @click="ValidarPalabra" >Validar Palabra</button>
        <h4 v-if="bandera">SI es palabra palindromo</h4>
        <h4 v-else>NO es palabra palindromo</h4>
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';

    export default defineComponent({
        
        data(){
            return {
                bandera : true as boolean, 
                palabraPalindromo : '' as string
            }
        }, 
        methods:{
            ValidarPalabra()
            {
               this.bandera = true;
               this.palabraPalindromo = this.palabraPalindromo.toLowerCase();

                for( let i= 0; i < this.palabraPalindromo.length; i++)
                {
                    if(this.palabraPalindromo[i] !== this.palabraPalindromo[this.palabraPalindromo.length-1-i]){
                        this.bandera = false;
                        break;
                    }
                }
            }
        }

    })
</script>