<template>
  <nav>
    <router-link to="/">General</router-link> |
    <router-link to="/formularios">Formularios</router-link>|
    <router-link to="/emits">Emits</router-link> |
    <router-link to="/almacenamiento">Almacenamiento</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/directivas">Directivas</router-link> |
    <router-link to="/pruebas">Pruebas</router-link> |
 
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
