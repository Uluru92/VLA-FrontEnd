<template>
    <div class="container">
      <h1>Estoy en General</h1>
      <input class="form-control" v-model="PruebaStoreVuex">
      <br>
      <select class="form-select" id=""></select>
      <button class="btn btn-success" @click="GuardarDesdeGeneral">Guardar Variable Global</button>
    </div>
  </template>
  
  <script lang="ts">
  import store from '@/store';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'GeneralComponent',  
    data(){
      return {
        PruebaStoreVuex: "" as string
      }
    },
    methods:
    {
      GuardarDesdeGeneral()
      {
        store.state.Global_TextoDesdeGeneral1 = this.PruebaStoreVuex
      }
    }
  });
  </script>
  
  <style scoped>
  
  </style>

  /
  Necesito un select option 1234
  en el store vas a crear una variable que sea IDROL
  /