<template>
    <div class="container">
      <b-form>
        <b-form-group label="Nombre de usuario">
          <b-form-input
            v-model="usuario"
            placeholder="Nombre de usuario"
            class="mb-3"
          />
        </b-form-group>
        <b-form-group label="Contraseña">
          <b-form-input
            v-model="contraseña"
            type="password"
            placeholder="Contraseña"
            class="mb-3"
          />
        </b-form-group>
        <b-button @click="validarUsuario" variant="primary">Validar</b-button>
      </b-form>
  
      <!-- Modal -->
      <b-modal
        id="errorModal"
        title="Error"
        v-model="showModal"
        ok-title="OK"
        @hide="clearErrorMessage"
      >
        <p>{{ errorMessage }}</p>
      </b-modal>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    components: {
     
    },
    setup() {
      const usuario = ref('');
      const contraseña = ref('');
      const errorMessage = ref('');
      const showModal = ref(false);
  
      const validarUsuario = async () => {
        if (usuario.value !== '' && contraseña.value !== '') {
          try {
            const response = await axios.post('http://localhost:3015/api/route/ValidarCredencialesLogin', {
              userName: usuario.value,
              passWord: contraseña.value,
            });
  
            const CodigoRespuestaApi: number = response.data.Codigo;
            const DescripcionRespuestaApi: string = response.data.Descripcion;
  
            if (CodigoRespuestaApi === 0) {
              // Navegar a otra ruta, si es necesario
              // this.$router.push("/directivas");
            } else {
              errorMessage.value = "Error: " + DescripcionRespuestaApi;
              showModal.value = true;
            }
          } catch (error) {
            errorMessage.value = "Error de red o servidor";
            showModal.value = true;
          }
        }
      };
  
      const clearErrorMessage = () => {
        errorMessage.value = '';
      };
  
      return { usuario, contraseña, errorMessage, showModal, validarUsuario, clearErrorMessage };
    }
  });
  </script>
  
  <style scoped>
  /* Puedes añadir estilos adicionales aquí si es necesario */
  </style>
  