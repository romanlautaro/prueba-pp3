<template>
<div class="row">
    <div class="col-lg-8">
        <h4>{{titulo}}</h4>
        <table class="table table-bordered border-dark">
            <thead>
                <tr>
                    <th class="table-warning">N:</th>
                    <th class="table-warning">Nombre</th>
                    <th class="table-warning">Usuario</th>
                    <th class="table-warning">Email</th>
                    <th class="table-warning">Web</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(u,index) of lista_usuarios" v-bind:key="index">
                    <td class="table-warning">{{index}}</td>
                    <td>{{u.name}}</td>
                    <td>{{u.username}}</td>
                    <td>{{u.email}}</td>
                    <td>{{u.website}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>
<script>
/* eslint-disable */
import { ref } from 'vue'
export default {
    name:'GridUsuario',
    setup() {    
        //sector de variables
        let nombre = ref('')
        let lista_usuarios = ref([])
        let titulo = ref('usuarios:')
        //sector de funciones
        async function consumir_api(){
            const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
            lista_usuarios.value = await usuarios.json()            
        }
        return{
            nombre,
            consumir_api,
            lista_usuarios,
            titulo
        }
    },
    created(){
        this.consumir_api()
    }
}
</script>