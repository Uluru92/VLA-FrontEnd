<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SaludoMundo
  NombrePersona = 'Adolfo'
  EdadPersona = 31
  />
  <SaludoMundo
  NombrePersona = 'Jorddy'
  EdadPersona = 32s
  />
  <SaludoMundo
  NombrePersona = 'Kevin'
  EdadPersona = '33s'
  />

</template>

<script>
  import SaludoMundo from './components/SaludoMundo.vue'


export default {
  name: 'App',
  components: {
    SaludoMundo

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
