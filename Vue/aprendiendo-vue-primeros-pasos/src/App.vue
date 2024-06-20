<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SaludoMundo
  NombrePersona = 'Adolfo'
  EdadPersona = 31 />

    <SumarDosValores/>


</template>

<script>
import SaludoMundo from './components/SaludoMundo.vue'
import SumarDosValores from './components/SumarDosValores.vue'


export default {
  name: 'App',
  components: {
    SaludoMundo,
    SumarDosValores

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
