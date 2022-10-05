<template>
    <div class="row">
            <h4>{{titulo}}</h4>
                <div class="col-lg-4 mb-3" v-for="(p,index) of lista_productos" v-bind:key="index">
                    <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <p class="card text-white bg-warning mb-3" style="max-width: 18rem;">{{p.title}}</p>
                                <p><img :src=p.thumbnail class="img-thumbnail" style="width:20rem"></p>
                                <p class="card-text"><b>descripcion:</b> {{p.description}}</p>
                                <p class="card-text"><b>Precio:</b> {{p.price}}</p>
                                <p class="card-text"><b>Popularidad:</b> {{p.rating}}</p>
                                <p class="card-text"><b>Stock:</b> {{p.stock}}</p>
                                <p class="card-text"><b>Marca:</b> {{p.brand}}</p>
                                <p class="card-text"><b>Categoria:</b> {{p.category}}</p>
                            </div>
                    </div>
                </div>
    </div>
</template>
<script>
/* eslint-disable */
import {ref} from 'vue'
export default {
    name:'FormProducto',
    setup() {    
        //sector de variables
        let nombre = ref('')
        let lista_productos = ref([])
        let titulo = ref('Productos:')
        //sector de funciones
        async function consumir_api2(){
            const productos = await fetch('https://dummyjson.com/products')
            const datos = await productos.json()
            lista_productos.value = await datos.products           
        }
        return{
            nombre,
            consumir_api2,
            lista_productos,
            titulo
        }
    },
    created(){
        this.consumir_api2()
    }
}
</script>