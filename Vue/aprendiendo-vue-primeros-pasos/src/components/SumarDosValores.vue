<template>
    <div style="background-color: #CEEAAD; margin-top: 2px; margin-bottom: 2px;">
        <div class="container">
            <h1>Estamos sumando dos valores</h1>
            <input class="form-control" placeholder="Digite el primer valor">
            <br>
            <input class="form-control" placeholder="Digite el segundo valor">
            <br>
            <h3>Resultado:</h3>
            <button class="btn btn-success" @click="Sumar()">Calcular</button>
        </div>
    </div>
</template>

<script>


    export default
    {
        methods:
        {
            Sumar(){
                alert("Sumando");
            }
        },
        data()
        {
            return {
                numero1:0,
                numero2:0,
                resultado:0
            }
        }
    }
</script>

<style>
</style>