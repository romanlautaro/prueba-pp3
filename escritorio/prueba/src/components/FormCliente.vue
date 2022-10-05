<template>
    <div class="row p-3 mb-2 bg-dark text-white">
        <div class="col-lg-4">

            <div class="mb-3">
                <label class="form-label"><b> Ingrese Nombre:</b></label>
                <input v-model="nombre" class="form-control" type="text">
            </div> 

            <button @click="mostrar()" class="btn btn-warning">Confirmar</button>
            
        </div>
    </div>
    
</template>

<script>
    /* eslint-disable */

    import { ref } from 'vue'
    export default {
        name:'FormCliente',
        setup() {    
            //sector de variables
            let nombre = ref('')
            //sector de funciones
            function mostrar(){
                alert(nombre.value)
            }
            return{
                nombre,
                mostrar
            }
        },
    }
</script>