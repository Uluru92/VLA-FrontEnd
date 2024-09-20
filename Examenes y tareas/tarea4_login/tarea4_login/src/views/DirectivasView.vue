<template>
    <div class='container'> 
        <div style="background-color: #EAC6AD; padding-bottom: 10px;">
            <h1>Directiva V-For</h1>
            <h4>Usando vinetas</h4>
            <!--Para llenar cualquier etiqueta que use como fuente un vector-->
            <ul>
                <li v-for="(materia,index) in vectorMaterias" :key="index">
                {{ materia }}
                </li>
            </ul>
            <h4>Usando select</h4>
            <select class="form-select" >
                <option v-for="(materia,index) in vectorMaterias" :key="index">
                    {{ materia }}
                </option>
            </select>
        </div>
        <div style="background-color: #D2EAAD; margin-top: 10px;padding-bottom: 10px;">
            <h1>Directiva V-IF-ELSE</h1>            
            <h4 v-if="mostrarMensaje">Estoy mostrando el mensaje X</h4>
            <h4 v-else>Estoy mostrando el mensaje Y</h4>
            <button class="btn btn-primary" @click="HabilitarMostrarMensaje">Mostrar/Quitar Mensaje</button>            
        </div>    
        <div style="background-color: #EAADBA; margin-top: 10px;padding-bottom: 10px;">
            <h1>Directivas Cambio De Estilo</h1>  
            <h4 :style="{ color: colorMensaje, 'background-color':'white'}">Color del mensaje</h4>            
            <button class="btn btn-primary" @click="CambiarColorMensaje(1)">Color 1</button>
            <button class="btn btn-success" @click="CambiarColorMensaje(2)">Color 2</button>
            <button class="btn btn-danger" @click="CambiarColorMensaje(3)">Color 3</button>
        </div>
        <div style="background-color: #ADE2EA; margin-top: 10px;padding-bottom: 10px;">
            <h1>Directiva V-MODEL</h1>  
            <input class="form-control" v-model="textoEscritoPorUsuario">
            <h4>El mensaje es: {{textoEscritoPorUsuario}}</h4>        
        </div>
        <div style="background-color: #D2EAAD; margin-top: 10px;padding-bottom: 10px;">
            <h1>Directiva V-ELSE-IF</h1> 
            <h4 v-if="opcionMensaje === 1">He escogido la opcion 1</h4>  
            <h4 v-else-if="opcionMensaje ===2">He escogido la opcion 2</h4>  
            <h4 v-else>He escogido la opcion 3</h4>              
            <button class="btn btn-primary" @click="mostrarOpcionMensaje(1)">Opcion 1</button>
            <button class="btn btn-success" @click="mostrarOpcionMensaje(2)">Opcion 2</button>
            <button class="btn btn-danger" @click="mostrarOpcionMensaje(3)">Opcion 3</button></div>    
        </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue';
      
    export default defineComponent({
        data() {
            return { 
                colorMensaje: 'black' as string,
                mostrarMensaje : true as boolean,
                textoEscritoPorUsuario: '' as string,
                opcionMensaje:0 as number,
                vectorMaterias : ['SQL', 'Python', 'FrontEnd Developer', 'BackEnd Developer', 'AWS'] as string[]
            };
        },
        methods: {
            HabilitarMostrarMensaje()
            {
                this.mostrarMensaje = !this.mostrarMensaje;
            }, 
            CambiarColorMensaje(numero: number)
            {
                if(numero == 1)
                {
                    this.colorMensaje = 'blue';
                }
                else if( numero== 2)
                {
                    this.colorMensaje = 'green';
                }
                else
                {
                    this.colorMensaje = 'red';
                }
            },
            mostrarOpcionMensaje(opcion: number)
            {                
                this.opcionMensaje = opcion;
            }
        }
    })
</script>

<style>
</style>