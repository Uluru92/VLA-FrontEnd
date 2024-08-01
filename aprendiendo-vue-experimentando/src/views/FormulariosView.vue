<template>
    <div class="container">
      <h1>Ingreso de usuarios</h1>
      <input
        class="form-control"
        placeholder="Nombre de usuario/userName"
        style="margin-bottom: 10px"
        v-model="usuario"
      />
      <input
        class="form-control"
        placeholder="Clave del usuario"
        style="margin-bottom: 10px"
        v-model="clave"
      />
      <input
        class="form-control"
        placeholder="Nombre del usuario"
        style="margin-bottom: 10px"
        v-model="nombre"
      />
      <input
        class="form-control"
        placeholder="Correo"
        style="margin-bottom: 10px"
        v-model="correo"
      />
      <button class="btn btn-primary"  @click="RegistrarUsuario">RegistrarUsuario</button>
      <MensajesInformativos
        :mensaje="mensajeMostrar"
        v-model:modalVisible="modalVisible"
      />     
      </div>      
  </template>
  
  <script lang="ts">
    import { defineComponent, ref } from 'vue';
    import MensajesInformativos from '@/components/MensajesInformativos.vue';
    import axios from 'axios';

    export default defineComponent({
      components:{
        MensajesInformativos
      },
      setup()
      {
          const usuario = ref<string>("");
          const clave = ref<string>("");
          const nombre = ref<string>("");
          const correo = ref<string>("");
          const modalVisible = ref<boolean>(false);
          const mensajeMostrar = ref<string>("");

          const RegistrarUsuario =async () =>{           

            const validacion = validarCamposLlenos();
            
            try
            {
                if(validacion)
                {
                  const response = await axios.post('http://localhost:3015/api/route/RegistrarNuevaPersona', {
                  userName: usuario,
                  passWord: clave,
                  nombre: nombre,
                  correo: correo
                  });
                  console.log(response);
                  const CodigoRespuestaApi: number = response.data.Codigo;

                  if (CodigoRespuestaApi === 0) 
                  {
                    modalVisible.value = true;
                    mensajeMostrar.value = "Persona insertada de forma exitosa";
                  } 
                  else {
                    modalVisible.value = true;
                    mensajeMostrar.value = response.data.Descripcion;
                  }
                }
                else{
                    modalVisible.value = true;
                    mensajeMostrar.value = "Todos los campos son requeridos";
                }
            }
            catch(error)
            {
              modalVisible.value = true;
                mensajeMostrar.value = "Error no contemplado, contacte al administrador";
            }
          }

          const validarCamposLlenos = () => {
              if(nombre.value !== "" && clave.value !== "" &&
                usuario.value !== "" && correo.value !== "")
                return true;
              else
                return false;
            };

          return {
            usuario, 
            clave,
            nombre,
            correo,
            modalVisible,
            mensajeMostrar,
            RegistrarUsuario
          };
      }
    })
  </script>
  
  <style scoped>
  /* Añade tus estilos aquí si es necesario */
  </style>
  